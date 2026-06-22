import type { Metadata } from "next";
import { HeartHandshake, Wallet, Clock, Users, Briefcase, ShoppingBag, Home, Building2 } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { SchemaMarkup } from "@/components/tracking/SchemaMarkup";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HowItWorksSteps } from "@/components/ui/HowItWorksSteps";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABand } from "@/components/ui/CTABand";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = pageMeta({
  title: "Mediação de Conflitos em Juiz de Fora | Flávia Machado Advogados",
  description:
    "Resolução de conflitos por mediação: familiar, patrão/empregado, fornecedor/consumidor e outros. Menos desgaste, menor custo e menor tempo, em Juiz de Fora e online.",
  path: "/mediacao",
  rawTitle: true,
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Mediação de conflitos", path: "/mediacao" },
];

const fields = [
  { icon: Users, title: "Conflitos familiares", text: "Separações, guarda, partilha e acordos com diálogo e menos desgaste." },
  { icon: Briefcase, title: "Patrão e empregado", text: "Composição de divergências nas relações de trabalho." },
  { icon: ShoppingBag, title: "Fornecedor e consumidor", text: "Soluções para impasses de consumo sem litígio prolongado." },
  { icon: Home, title: "Questões patrimoniais", text: "Acordos sobre bens, imóveis e dívidas entre as partes." },
  { icon: Building2, title: "Relações empresariais", text: "Conflitos entre sócios, parceiros e contratos." },
  { icon: HeartHandshake, title: "Outras relações", text: "Sempre que houver disposição das partes para o diálogo." },
];

const advantages = [
  { icon: HeartHandshake, title: "Menor desgaste", text: "Diálogo no lugar de audiências, conflitos e recursos que, ao longo do tempo, afetam até o estado emocional das partes." },
  { icon: Wallet, title: "Menor custo", text: "Uma solução negociada costuma custar bem menos do que um processo judicial longo." },
  { icon: Clock, title: "Menor tempo", text: "Sem a lentidão tradicional do processo, a resolução chega de forma mais rápida e objetiva." },
];

const faqs = [
  {
    q: "O que é mediação de conflitos?",
    a: "É um método de resolução de conflitos em que um terceiro capacitado e imparcial facilita o diálogo entre as partes, ajudando-as a construir, elas próprias, uma solução satisfatória — sem impor uma decisão.",
  },
  {
    q: "O acordo da mediação tem validade jurídica?",
    a: "Sim. O acordo construído na mediação pode ser formalizado e, quando cabível, homologado judicialmente, passando a ter força de título executivo.",
  },
  {
    q: "A mediação substitui o processo judicial?",
    a: "A mediação busca evitar a judicialização. Se não houver acordo, as partes mantêm o direito de recorrer às vias judiciais normalmente.",
  },
  {
    q: "Em quais situações a mediação é indicada?",
    a: "Em conflitos familiares, relações de trabalho, consumo, questões patrimoniais e empresariais, entre outras — sempre que houver disposição das partes para o diálogo.",
  },
  {
    q: "A mediação é sigilosa?",
    a: "Sim. A mediação é conduzida com confidencialidade, o que ajuda as partes a se sentirem seguras para dialogar.",
  },
];

export default function MediacaoPage() {
  return (
    <>
      <SchemaMarkup schema={[faqSchema(faqs), breadcrumbSchema(crumbs)]} />

      {/* HERO */}
      <section className="bg-navy text-white">
        <div className="container-site py-5">
          <div className="[&_a]:text-white/60 [&_span]:text-white">
            <Breadcrumbs items={crumbs} />
          </div>
        </div>
        <div className="container-site pb-20 pt-4">
          <span className="eyebrow bg-white/10 text-brand-gold">
            Mediação de conflitos
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            Resolver sem judicializar, sempre que possível.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Somos capacitadas para mediar e prevenir conflitos de forma eficaz e
            célere, em que as partes se sentem ouvidas e satisfeitas — sem depender
            de um trâmite processual lento que, muitas vezes, não traz o retorno que
            se espera.
          </p>
          <div className="mt-9">
            <WhatsAppButton
              context="mediacao"
              label="Falar sobre mediação"
              ctaPosition="hero"
              practiceArea="mediacao"
              pageType="mediacao"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container-site mx-auto max-w-3xl text-center">
          <p className="text-xl leading-relaxed text-muted">
            A mediação é um caminho para resolver conflitos com diálogo, preservando
            relações e tempo. Em vez de uma disputa desgastante, as partes constroem,
            juntas, uma solução possível — com a orientação de quem conhece o caminho
            jurídico.
          </p>
        </div>
      </section>

      {/* ONDE SE APLICA */}
      <section className="section bg-navy">
        <div className="container-site">
          <SectionHeader
            inverted
            eyebrow="Onde se aplica"
            title="A mediação pode acontecer em diversos conflitos"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fields.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-navy">
                  <Icon className="h-6 w-6 text-brand-gold" aria-hidden />
                </div>
                <h3 className="mt-4 font-serif text-lg text-navy">{title}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VANTAGENS */}
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Vantagens"
            title="Por que mediar antes de litigar"
            subtitle="Processos judiciais são tradicionalmente desgastantes, com diversas audiências, conflitos e recursos. A mediação oferece um caminho mais leve."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {advantages.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-navy">
                  <Icon className="h-6 w-6 text-brand-gold" aria-hidden />
                </div>
                <h3 className="mt-4 font-serif text-xl text-navy">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section bg-navy">
        <div className="container-site">
          <SectionHeader inverted eyebrow="Passo a passo" title="Como funciona" />
          <HowItWorksSteps
            steps={[
              "Você entra em contato e relata a situação",
              "Avaliamos se o caso é adequado à mediação",
              "As partes são convidadas ao diálogo, com sigilo",
              "Construímos juntos uma solução possível",
              "O acordo é formalizado e, quando cabível, homologado",
            ]}
            note="Se não houver acordo, as partes mantêm o direito de recorrer às vias judiciais."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-site">
          <SectionHeader eyebrow="Dúvidas frequentes" title="Perguntas frequentes" />
          <FAQAccordion items={faqs} practiceArea="mediacao" />
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Quer resolver um conflito com menos desgaste?"
        text="Conte, de forma breve, qual é a situação. Avaliamos se a mediação é o melhor caminho para o seu caso."
        context="mediacao"
        practiceArea="mediacao"
        pageType="mediacao"
      />
    </>
  );
}
