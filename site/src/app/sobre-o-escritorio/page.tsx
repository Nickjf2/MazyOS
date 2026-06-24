import type { Metadata } from "next";
import { ShieldCheck, HeartHandshake, MessageSquareText, Scale } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/ui/CTABand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Sobre o Escritório",
  description:
    "Conheça o escritório Flávia Machado Advogados Associados: atuação técnica e humanizada em Direito da Saúde, Família, Sucessões, Direito da Mulher e LGBTQIAPN+, em Juiz de Fora.",
  path: "/sobre-o-escritorio",
});

const values = [
  {
    icon: HeartHandshake,
    title: "Acolhimento",
    text: "Escuta qualificada para situações sensíveis, com respeito ao momento de cada pessoa.",
  },
  {
    icon: Scale,
    title: "Técnica jurídica",
    text: "Mais de 30 anos de experiência em demandas delicadas e de repercussão.",
  },
  {
    icon: ShieldCheck,
    title: "Sigilo",
    text: "Discrição e confidencialidade do primeiro contato ao acompanhamento do caso.",
  },
  {
    icon: MessageSquareText,
    title: "Clareza",
    text: "Tradução do juridiquês em orientação compreensível para a sua decisão.",
  },
];

export default function SobrePage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-site py-5">
          <div className="[&_a]:text-white/60 [&_span]:text-white">
            <Breadcrumbs
              items={[
                { name: "Início", path: "/" },
                { name: "Sobre o escritório", path: "/sobre-o-escritorio" },
              ]}
            />
          </div>
        </div>
        <div className="container-site pb-16 pt-4">
          <span className="eyebrow bg-white/10 text-brand-gold">O escritório</span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            Orientação jurídica clara, técnica e humana.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            {site.subPositioning}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
          <p>
            O <strong className="text-navy">{site.name}</strong> é um escritório de
            advocacia sediado em {site.city}, com atuação presencial e atendimento
            online. Trabalhamos com demandas que costumam chegar em momentos
            delicados — uma negativa de plano de saúde, um inventário, uma separação,
            uma situação que exige proteção.
          </p>
          <p>
            Nosso compromisso é transformar dúvida jurídica em orientação
            compreensível. Você não precisa chegar com todos os documentos ou com a
            decisão tomada. O primeiro passo é entender o seu caso com clareza e
            indicar os caminhos possíveis.
          </p>
          <p>
            Atuamos com sigilo, responsabilidade e sem promessas de resultado. Cada
            caso é avaliado de forma individual, com a atenção que ele merece.
          </p>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-site">
          <SectionHeader eyebrow="Como trabalhamos" title="Valores que orientam o atendimento" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card">
                <Icon className="h-8 w-8 text-brand-gold" aria-hidden />
                <h3 className="mt-4 font-serif text-xl text-navy">{title}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Quer conversar com o escritório?"
        text="Envie um resumo da sua situação. O primeiro passo é entender o seu caso com clareza."
      />
    </>
  );
}
