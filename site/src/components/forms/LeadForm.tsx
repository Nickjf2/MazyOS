"use client";

import { useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";

// Formulário curto para landing pages de campanha.
// Envia o lead para /api/lead (que grava na planilha) e mantém o WhatsApp
// como alternativa imediata.

interface Props {
  origem: string;
  practiceArea?: string;
  pageType?: string;
  whatsappContext?: string;
  /** exemplo mostrado no campo de relato — específico de cada landing page */
  exemploRelato?: string;
}

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-brand-gold";
const labelCls = "mb-1.5 block text-sm font-medium text-navy";

export function LeadForm({
  origem,
  practiceArea,
  pageType,
  whatsappContext = "geral",
  exemploRelato = "Ex.: conte em poucas palavras o que aconteceu.",
}: Props) {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro(null);

    const dados = new FormData(e.currentTarget);
    const nome = String(dados.get("nome") ?? "").trim();
    const whatsapp = String(dados.get("whatsapp") ?? "").trim();
    const mensagem = String(dados.get("mensagem") ?? "").trim();

    if (!nome || !whatsapp) {
      setErro("Preencha seu nome e WhatsApp para que possamos retornar.");
      return;
    }

    setEnviando(true);
    try {
      const resposta = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, whatsapp, mensagem, origem }),
      });
      if (!resposta.ok) throw new Error("falha");
      trackEvent("generate_lead", {
        practice_area: practiceArea,
        page_type: pageType,
        cta_position: "formulario",
      });
      setEnviado(true);
    } catch {
      setErro(
        "Não foi possível enviar agora. Você pode falar direto pelo WhatsApp abaixo.",
      );
    } finally {
      setEnviando(false);
    }
  }

  if (enviado) {
    return (
      <div className="rounded-card border border-line bg-white p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-whatsapp" aria-hidden />
        <h3 className="mt-4 font-serif text-2xl text-navy">Recebemos seu contato</h3>
        <p className="mt-2 leading-relaxed text-muted">
          A equipe vai retornar pelo WhatsApp informado. Se preferir falar agora,
          use o botão abaixo.
        </p>
        <a
          href={whatsappLink(whatsappContext)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-6"
        >
          <MessageCircle className="h-[18px] w-[18px]" aria-hidden />
          Falar agora no WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      onFocus={() => trackEvent("form_start", { page_type: pageType })}
      className="rounded-card border border-line bg-white p-6 shadow-card sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-nome" className={labelCls}>
            Seu nome
          </label>
          <input id="lead-nome" name="nome" className={inputCls} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="lead-whatsapp" className={labelCls}>
            WhatsApp
          </label>
          <input
            id="lead-whatsapp"
            name="whatsapp"
            inputMode="tel"
            placeholder="(32) 90000-0000"
            className={inputCls}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="lead-mensagem" className={labelCls}>
          Conte brevemente sua situação (opcional)
        </label>
        <textarea
          id="lead-mensagem"
          name="mensagem"
          rows={3}
          className={inputCls}
          placeholder={exemploRelato}
        />
      </div>

      {erro && <p className="mt-4 text-sm text-reajuste-accent">{erro}</p>}

      <button type="submit" disabled={enviando} className="btn-navy mt-6 w-full">
        {enviando ? "Enviando..." : "Quero receber orientação"}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        Ao enviar, você concorda em ser contatado pela equipe sobre a sua situação.
        Seus dados são tratados com sigilo e não são compartilhados com terceiros.
      </p>
    </form>
  );
}
