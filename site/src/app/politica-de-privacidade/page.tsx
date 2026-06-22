import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Política de Privacidade",
  description:
    "Política de privacidade e tratamento de dados pessoais do site Flávia Machado Advogados Associados, em conformidade com a LGPD.",
  path: "/politica-de-privacidade",
});

const sections: { h: string; p: string[] }[] = [
  {
    h: "1. Quais dados coletamos",
    p: [
      "Coletamos apenas os dados necessários para retornar o seu contato: nome, WhatsApp, cidade, área aproximada do caso e a mensagem que você nos envia.",
      "Não solicitamos dados sensíveis (como informações detalhadas de saúde, orientação sexual, identidade de gênero ou documentos pessoais) no primeiro contato. Esses dados só podem ser compartilhados, de forma voluntária, em etapa posterior, caso você deseje uma análise mais detalhada.",
    ],
  },
  {
    h: "2. Finalidade do tratamento",
    p: [
      "Os dados informados são utilizados exclusivamente para responder à sua solicitação, prestar orientação jurídica inicial e dar seguimento ao atendimento, quando for o caso.",
      "Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing.",
    ],
  },
  {
    h: "3. Armazenamento e segurança",
    p: [
      "Adotamos medidas razoáveis para proteger os dados, incluindo navegação por conexão segura (HTTPS) e acesso restrito às informações.",
    ],
  },
  {
    h: "4. Seus direitos (LGPD)",
    p: [
      "Você pode, a qualquer momento, solicitar confirmação do tratamento, acesso, correção ou exclusão dos seus dados, bem como revogar o consentimento dado.",
      `Para exercer seus direitos, entre em contato pelo e-mail ${site.email}.`,
    ],
  },
  {
    h: "5. Cookies e métricas",
    p: [
      "Podemos utilizar ferramentas de medição de audiência para entender o uso do site e melhorar a experiência. Em temas sensíveis, desativamos a personalização de anúncios.",
    ],
  },
];

export default function PrivacidadePage() {
  return (
    <section className="section">
      <div className="container-site mx-auto max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Início", path: "/" },
            { name: "Política de privacidade", path: "/politica-de-privacidade" },
          ]}
        />
        <h1 className="mt-6 text-4xl font-bold">Política de Privacidade</h1>
        <div className="gold-rule mt-6" />
        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-serif text-2xl text-navy">{s.h}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted">
                {s.p.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">{site.compliance}</p>
      </div>
    </section>
  );
}
