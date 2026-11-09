"use client";

import { useRef, useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";
import { site } from "@/lib/site";
import { exterior } from "@/content/exterior";

// Formulário da landing de brasileiros no exterior.
//
// Difere do LeadForm das outras landings em dois pontos que importam para este
// público: coleta país de residência e e-mail. E-mail porque o fuso costuma
// impedir resposta imediata por WhatsApp, e país porque orienta o caminho de
// consularização, que muda conforme a jurisdição.

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-navy";
const labelCls = "mb-1.5 block text-sm font-medium text-navy";

export function LeadFormExterior() {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const inicioRegistrado = useRef(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro(null);

    const d = new FormData(e.currentTarget);
    const campo = (k: string) => String(d.get(k) ?? "").trim();
    const nome = campo("nome");
    const pais = campo("pais");
    const email = campo("email");
    const whatsapp = campo("whatsapp");

    if (!nome || !pais || !email || !whatsapp) {
      setErro(
        "Preencha nome, país, e-mail e WhatsApp para que possamos retornar.",
      );
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setErro("Confira o e-mail informado.");
      return;
    }

    setEnviando(true);
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          pais,
          email,
          whatsapp,
          area: campo("assunto"),
          mensagem: campo("mensagem"),
          origem: "lp/brasileiros-no-exterior",
          website: campo("website"),
        }),
      });
      if (!r.ok) throw new Error("falha");
      trackEvent("generate_lead", {
        practice_area: "brasileiros-no-exterior",
        page_type: "landing_page",
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
        <h3 className="mt-4 font-serif text-2xl text-navy">
          Recebemos seu contato
        </h3>
        <p className="mt-2 leading-relaxed text-muted">
          A equipe vai responder pelo e-mail ou WhatsApp informado, em horário
          comercial de Brasília. Se preferir falar agora, use o botão abaixo.
        </p>
        <a
          href={whatsappLink("brasileiros-no-exterior")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-6"
          onClick={() =>
            trackEvent("whatsapp_click", {
              practice_area: "brasileiros-no-exterior",
              cta_position: "pos_envio",
              page_type: "landing_page",
            })
          }
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
      onFocus={() => {
        if (inicioRegistrado.current) return;
        inicioRegistrado.current = true;
        trackEvent("form_start", { page_type: "landing_page" });
      }}
      className="rounded-card border border-line bg-white p-6 shadow-card sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ex-nome" className={labelCls}>
            Nome completo
          </label>
          <input id="ex-nome" name="nome" className={inputCls} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="ex-pais" className={labelCls}>
            País onde você mora
          </label>
          <input
            id="ex-pais"
            name="pais"
            className={inputCls}
            placeholder="Ex.: Estados Unidos"
            autoComplete="country-name"
          />
        </div>
        <div>
          <label htmlFor="ex-email" className={labelCls}>
            E-mail
          </label>
          <input
            id="ex-email"
            name="email"
            type="email"
            inputMode="email"
            className={inputCls}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="ex-whatsapp" className={labelCls}>
            WhatsApp com código do país
          </label>
          <input
            id="ex-whatsapp"
            name="whatsapp"
            inputMode="tel"
            className={inputCls}
            placeholder="+1 305 000 0000"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="ex-assunto" className={labelCls}>
          Assunto
        </label>
        <select id="ex-assunto" name="assunto" className={inputCls} defaultValue="">
          <option value="" disabled>
            Selecione
          </option>
          {exterior.assuntos.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="ex-mensagem" className={labelCls}>
          Descreva brevemente sua situação
        </label>
        <textarea
          id="ex-mensagem"
          name="mensagem"
          rows={4}
          className={inputCls}
          placeholder="Ex.: meu pai faleceu em Juiz de Fora e o imóvel ainda está no nome dele."
        />
      </div>

      {/* Campo-armadilha para robôs de spam. Invisível e fora da navegação. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="ex-website">Não preencha este campo</label>
        <input id="ex-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {erro && (
        <p role="alert" className="mt-4 text-sm text-reajuste-accent">
          {erro}
        </p>
      )}

      <button type="submit" disabled={enviando} className="btn-navy mt-6 w-full">
        {enviando ? "Enviando..." : "Enviar para o escritório"}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        Ao enviar, você concorda em ser contatado pela equipe sobre a sua
        situação. Seus dados são tratados com sigilo profissional, usados apenas
        para esse retorno e não são compartilhados com terceiros. Os dados são
        processados no Brasil. Não envie documentos nem informações sensíveis
        neste primeiro contato. Saiba mais na{" "}
        <a
          href="/politica-de-privacidade"
          className="underline underline-offset-2 hover:text-navy"
        >
          política de privacidade
        </a>
        .
      </p>
      <p className="mt-2 text-xs text-muted">{site.compliance}</p>
    </form>
  );
}
