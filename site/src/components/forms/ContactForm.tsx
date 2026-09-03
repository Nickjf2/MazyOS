"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

// Formulário curto e de baixa fricção (MASTER §21).
// Coleta o mínimo necessário; não pede dados sensíveis no 1º contato.
//
// O envio registra o lead em /api/lead ANTES de oferecer o WhatsApp. Assim o
// contato fica guardado mesmo que a pessoa não conclua a conversa — antes
// disso, quem não abrisse o WhatsApp sumia sem deixar registro.

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome."),
  whatsapp: z.string().min(8, "Informe um WhatsApp válido."),
  cidade: z.string().min(2, "Informe sua cidade."),
  area: z.string().min(1, "Selecione uma área."),
  mensagem: z.string().min(5, "Conte brevemente o que está acontecendo."),
  // Campo-armadilha: fica escondido, então só robô preenche.
  website: z.string().max(0).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "É necessário autorizar o contato." }),
  }),
});

type FormData = z.infer<typeof schema>;

const areaOptions = [
  "Direito da Saúde / Plano de Saúde",
  "Reajuste de Plano de Saúde",
  "TEA, ABA e Terapias",
  "Inventário e Sucessões",
  "Direito de Família",
  "Direito da Mulher",
  "Direitos LGBTQIAPN+",
  "Outro / Não sei",
];

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-navy";
const labelCls = "mb-1.5 block text-sm font-medium text-navy";
const errCls = "mt-1 text-xs text-reajuste-accent";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [whatsUrl, setWhatsUrl] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    trackEvent("generate_lead", {
      practice_area: data.area,
      page_type: "contato",
      cta_position: "form",
    });

    // 1) Guarda o lead. Falha de rede não bloqueia o atendimento: a pessoa
    //    segue para o WhatsApp de qualquer forma.
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: data.nome,
          whatsapp: data.whatsapp,
          cidade: data.cidade,
          area: data.area,
          mensagem: data.mensagem,
          origem: "site/contato",
          website: data.website ?? "",
        }),
      });
    } catch {
      // segue o fluxo
    }

    // 2) Prepara o WhatsApp com o resumo já escrito.
    const resumo = `Olá, sou ${data.nome} (${data.cidade}). Área: ${data.area}. ${data.mensagem}`;
    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(resumo)}`;
    setWhatsUrl(url);
    setSent(true);
    // Se o navegador bloquear a janela, o botão da tela seguinte resolve.
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (sent) {
    return (
      <div className="rounded-card border border-line bg-soft p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-whatsapp" />
        <h3 className="mt-4 font-serif text-2xl text-navy">Recebemos seu contato</h3>
        <p className="mt-2 text-muted">
          A equipe já tem seus dados e vai retornar pelo WhatsApp informado. Se
          preferir falar agora, abra a conversa pelo botão abaixo — a mensagem já
          vai com o resumo que você escreveu.
        </p>
        <a
          href={whatsUrl ?? `https://wa.me/${site.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-6"
        >
          <MessageCircle className="h-[18px] w-[18px]" /> Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onFocus={() => trackEvent("form_start", { page_type: "contato" })}
      className="rounded-card border border-line bg-white p-6 shadow-card sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className={labelCls}>
            Nome
          </label>
          <input id="nome" className={inputCls} {...register("nome")} />
          {errors.nome && <p className={errCls}>{errors.nome.message}</p>}
        </div>
        <div>
          <label htmlFor="whatsapp" className={labelCls}>
            WhatsApp
          </label>
          <input
            id="whatsapp"
            inputMode="tel"
            className={inputCls}
            {...register("whatsapp")}
          />
          {errors.whatsapp && <p className={errCls}>{errors.whatsapp.message}</p>}
        </div>
        <div>
          <label htmlFor="cidade" className={labelCls}>
            Cidade
          </label>
          <input id="cidade" className={inputCls} {...register("cidade")} />
          {errors.cidade && <p className={errCls}>{errors.cidade.message}</p>}
        </div>
        <div>
          <label htmlFor="area" className={labelCls}>
            Área do caso
          </label>
          <select id="area" className={inputCls} defaultValue="" {...register("area")}>
            <option value="" disabled>
              Selecione
            </option>
            {areaOptions.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          {errors.area && <p className={errCls}>{errors.area.message}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="mensagem" className={labelCls}>
          Mensagem breve
        </label>
        <textarea
          id="mensagem"
          rows={4}
          className={inputCls}
          placeholder="Conte, em poucas linhas, o que está acontecendo."
          {...register("mensagem")}
        />
        {errors.mensagem && <p className={errCls}>{errors.mensagem.message}</p>}
      </div>

      {/* Campo-armadilha para robôs de spam. Invisível e fora da navegação. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="mt-5 flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-navy"
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-xs leading-relaxed text-muted">
          Ao enviar, você autoriza o contato do escritório para retorno sobre sua
          solicitação. Se preferir, envie apenas um resumo neste primeiro contato.
          Documentos médicos e pessoais podem ser enviados depois, caso você queira
          uma análise técnica mais detalhada.
        </label>
      </div>
      {errors.consent && <p className={errCls}>{errors.consent.message}</p>}

      <button type="submit" className="btn-whatsapp mt-6 w-full" disabled={isSubmitting}>
        <MessageCircle className="h-[18px] w-[18px]" />
        {isSubmitting ? "Enviando…" : "Enviar mensagem"}
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        Seus dados são usados apenas para retorno do escritório. Não enviamos spam.
      </p>
    </form>
  );
}
