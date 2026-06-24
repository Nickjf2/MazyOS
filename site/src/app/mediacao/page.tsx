import type { Metadata } from "next";
import { HeartHandshake, Wallet, Clock, Users, HeartPulse, ShoppingBag, ScrollText, Building2 } from "lucide-react";
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
    "Resolução de conflitos por mediação: familiar, saúde, consumo, inventários e sucessões e empresarial. Menos desgaste, menor custo e menor tempo, em Juiz de Fora e online.",
  path: "/mediacao",
  rawTitle: true,
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Mediação de conflitos", path: "/mediacao" },
];

const fields = [
  { icon: Users, title: "Conflitos familiares", subtitle: "Diálogo para preservar relações.", text: "Questões envolvendo divórcio, guarda, convivência, alimentos, partilha de bens e demais conflitos familiares." },
  { icon: HeartPulse, title: "Direito da Saúde", subtitle: "Soluções para conflitos na área da saúde.", text: "Mediação entre pacientes, familiares, profissionais de saúde, clínicas, hospitais e operadoras de planos de saúde." },
  { icon: ShoppingBag, title: "Relações de consumo", subtitle: "Entendimento antes do litígio.", text: "Busca de soluções consensuais para conflitos entre consumidores e fornecedores de produtos e serviços." },
  { icon: ScrollText, title: "Inventários e Sucessões", subtitle: "Construindo consensos em momentos delicados.", text: "Mediação em inventários, partilhas, administração de bens e conflitos sucessórios." },
  { icon: Building2, title: "Relações empresariais", subtitle: "Soluções que preservam negócios.", text: "Conflitos entre sócios, empresas, parceiros comerciais e questões contratuais." },
  { icon: HeartHandshake, title: "Outros conflitos", subtitle: "Sempre que houver disposição para o diálogo.", text: "A mediação pode ser utilizada em diversas situações nas quais as partes desejam construir uma solução consensual." },
];

const advantages = [
  { icon: HeartHandshake, title: "Menor desgaste emocional", subtitle: "Mais diálogo, menos confrontos.", text: "A mediação cria um ambiente de escuta e respeito, reduzindo tensões e evitando o desgaste emocional que processos judiciais costumam gerar." },
  { icon: Wallet, title: "Menor custo", subtitle: "Economia para todas as partes.", text: "Ao buscar uma solução consensual, é possível evitar despesas elevadas com longas disputas judiciais, perícias e recursos." },
  { icon: Clock, title: "Solução mais rápida", subtitle: "Resultados em menos tempo.", text: "Enquanto um processo pode levar anos, a mediação permite que as partes construam soluções de forma ágil, eficiente e segura." },
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
    a: "Em conflitos familiares, questões de saúde, consumo, inventários e sucessões e relações empresariais, entre outras — sempre que houver disposição das partes para o diálogo.",
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
            Nem todo conflito precisa terminar em um processo judicial. Por meio da
            mediação, método moderno e eficiente de resolução de conflitos, ajudamos
            as partes a construírem soluções consensuais, reduzindo custos, tempo e
            desgaste emocional.
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
            Em um ambiente seguro e imparcial, promovemos o diálogo para que todos
            sejam ouvidos e possam chegar a um acordo satisfatório. A mediação é
            indicada para conflitos familiares, questões empresariais, disputas entre
            consumidores e fornecedores, além de diversas outras situações em que o
            entendimento é possível.
          </p>
          <p className="mt-6 font-serif text-2xl text-navy">
            Mais diálogo. Menos desgaste. Soluções mais rápidas e eficazes.
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
            {fields.map(({ icon: Icon, title, subtitle, text }) => (
              <div key={title} className="card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-navy">
                  <Icon className="h-6 w-6 text-brand-gold" aria-hidden />
                </div>
                <h3 className="mt-4 font-serif text-lg text-navy">{title}</h3>
                <p className="mt-1 font-semibold text-navy">{subtitle}</p>
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
            {advantages.map(({ icon: Icon, title, subtitle, text }) => (
              <div key={title} className="card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-navy">
                  <Icon className="h-6 w-6 text-brand-gold" aria-hidden />
                </div>
                <h3 className="mt-4 font-serif text-xl text-navy">{title}</h3>
                <p className="mt-1 font-semibold text-navy">{subtitle}</p>
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
