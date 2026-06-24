"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";

// Formulário curto e de baixa fricção (MASTER §21).
// Coleta o mínimo necessário; não pede dados sensíveis no 1º contato.

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome."),
  whatsapp: z.string().min(8, "Informe um WhatsApp válido."),
  cidade: z.string().min(2, "Informe sua cidade."),
  area: z.string().min(1, "Selecione uma área."),
  mensagem: z.string().min(5, "Conte brevemente o que está acontecendo."),
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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Sem backend configurado: encaminha um resumo para o WhatsApp do escritório.
    trackEvent("generate_lead", {
      practice_area: data.area,
      page_type: "contato",
      cta_position: "form",
    });
    const resumo = `Olá, sou ${data.nome} (${data.cidade}). Área: ${data.area}. ${data.mensagem}`;
    const url = `https://wa.me/5532999885341?text=${encodeURIComponent(resumo)}`;
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (sent) {
    return (
      <div className="rounded-card border border-line bg-soft p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-whatsapp" />
        <h3 className="mt-4 font-serif text-2xl text-navy">Mensagem preparada</h3>
        <p className="mt-2 text-muted">
          Abrimos o WhatsApp com um resumo do seu contato. Se a janela não abrir,
          fale com a equipe pelo botão abaixo.
        </p>
        <a
          href={whatsappLink("geral")}
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
