import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, Minus, ArrowRight, Mail, MapPin, Clock } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { faqSchema, breadcrumbSchema, legalServiceSchema } from "@/lib/schema";
import { site, team } from "@/lib/site";
import { exterior } from "@/content/exterior";
import { SchemaMarkup } from "@/components/tracking/SchemaMarkup";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { EmailLink } from "@/components/ui/EmailLink";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { HowItWorksSteps } from "@/components/ui/HowItWorksSteps";
import { TeamCard } from "@/components/ui/TeamCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LeadFormExterior } from "@/components/forms/LeadFormExterior";

const AREA = "brasileiros-no-exterior";
const PAGE_TYPE = "landing_page";

export const metadata: Metadata = pageMeta({
  title: "Assistência Jurídica para Brasileiros no Exterior | Flávia Machado",
  description:
    "Assistência jurídica no Brasil para brasileiros residentes no exterior. Conheça as áreas de atuação e as possibilidades de atendimento remoto do escritório Flávia Machado.",
  path: "/brasileiros-no-exterior",
  rawTitle: true,
  // Indexável, ao contrário das outras landings: nenhuma página do site cobre
  // este público, então não há canibalização de busca orgânica.
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Brasileiros no exterior", path: "/brasileiros-no-exterior" },
];

export default function BrasileirosNoExteriorPage() {
  const { hero, apresentacao, areas, limites, etapas, faqs } = exterior;

  return (
    <>
      <SchemaMarkup
        schema={[
          legalServiceSchema(),
          faqSchema([...faqs]),
          breadcrumbSchema(crumbs),
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="container-site py-4">
          <div className="[&_a]:text-white/60 [&_span]:text-white">
            <Breadcrumbs items={crumbs} />
          </div>
        </div>
        <div className="container-site grid items-stretch gap-10 pb-14 pt-4 sm:gap-12 lg:grid-cols-12 lg:pb-20">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
              <span className="h-px w-8 bg-brand-gold/50" aria-hidden />
              {hero.eyebrow}
            </p>
            <h1 className="mt-5 text-[2rem] font-bold leading-[1.12] text-white text-balance sm:text-[2.6rem] lg:text-[2.9rem]">
              {hero.h1}
            </h1>
            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-white/85 text-pretty sm:text-lg">
              {hero.subtitulo}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                context={AREA}
                label={hero.ctaPrincipal}
                ctaPosition="hero"
                practiceArea={AREA}
                pageType={PAGE_TYPE}
              />
              <a href="#areas" className="btn-ghost">
                {hero.ctaSecundario}
              </a>
            </div>

            <p className="mt-6 flex items-start gap-2.5 text-sm leading-relaxed text-white/60">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              {hero.microcopy}
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto h-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] shadow-xl ring-1 ring-white/15 sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[30rem]">
                <Image
                  src="/equipe/congresso-tratadas/equipe-duas-congresso.jpg"
                  alt="Dra. Flávia Vieira Machado e Dra. Marina de Assis Siqueira Brinati"
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="object-cover object-[44%_center]"
                />
              </div>
              <div className="absolute -bottom-5 left-3 right-3 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:left-auto sm:right-6 sm:w-[21rem] sm:max-w-[calc(100%-3rem)] sm:px-5 sm:py-3.5">
                <p className="font-serif text-lg leading-tight text-navy">
                  Dra. Flávia e Dra. Marina
                </p>
                <p className="mt-0.5 text-xs text-muted">
                  {site.name} · {site.city}, {site.region}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APRESENTAÇÃO — texto corrido, sem caixas */}
      <section className="section">
        <div className="container-site mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl">{apresentacao.titulo}</h2>
          <div className="gold-rule mt-5" />
          <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-muted sm:text-lg">
            {apresentacao.paragrafos.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS — lista editorial numerada, não grade de cards */}
      <section id="areas" className="section bg-soft">
        <div className="container-site">
          <SectionHeader
            eyebrow="Áreas de atuação"
            title="Em que o escritório pode ajudar"
            subtitle="Demandas relacionadas à legislação brasileira, conduzidas a partir de Juiz de Fora."
          />
          <ol className="mx-auto max-w-4xl">
            {areas.map((area, i) => (
              <li
                key={area.titulo}
                className="grid gap-x-7 gap-y-3 border-t border-line py-8 sm:grid-cols-[auto_1fr] sm:py-9"
              >
                <span
                  className="font-serif text-2xl leading-none text-brand-gold sm:pt-1"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-navy sm:text-2xl">
                    {area.titulo}
                  </h3>
                  <p className="mt-3 max-w-[62ch] leading-relaxed text-muted">
                    {area.texto}
                  </p>
                  {"href" in area && area.href ? (
                    <Link
                      href={area.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-brand-gold"
                    >
                      {area.hrefLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* LIMITES — o que dá e o que não dá a distância */}
      <section className="section">
        <div className="container-site">
          <SectionHeader eyebrow="Atendimento a distância" title={limites.titulo} />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-card border border-line bg-white p-7 shadow-card">
              <h3 className="font-serif text-xl text-navy">
                {limites.possivel.titulo}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {limites.possivel.itens.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-whatsapp"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card border border-line bg-soft p-7">
              <h3 className="font-serif text-xl text-navy">{limites.exige.titulo}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {limites.exige.itens.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <Minus className="mt-1 h-4 w-4 shrink-0 text-muted" aria-hidden />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted">
            {limites.nota}
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section bg-navy">
        <div className="container-site">
          <SectionHeader
            eyebrow="Passo a passo"
            title="Como funciona o atendimento jurídico a distância"
            inverted
          />
          <HowItWorksSteps steps={[...etapas]} />
        </div>
      </section>

      {/* SOBRE O ESCRITÓRIO */}
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Sobre o escritório"
            title={site.name}
            subtitle="Banca sediada em Juiz de Fora, Minas Gerais, com atuação em demandas da legislação brasileira e atendimento presencial e a distância."
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {team.map((t) => (
              <TeamCard key={t.oab} {...t} />
            ))}
          </div>
          <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-3 rounded-card border border-line bg-soft p-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden />
              {site.addressFull}
            </p>
            <Link
              href="/equipe"
              className="shrink-0 font-semibold text-navy hover:text-brand-gold"
            >
              Conhecer a equipe →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-soft">
        <div className="container-site">
          <SectionHeader
            eyebrow="Dúvidas frequentes"
            title="Perguntas de quem mora fora"
          />
          <FAQAccordion items={[...faqs]} practiceArea={AREA} />
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="section">
        <div className="container-site grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">
              Contato
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Entre em contato com o escritório
            </h2>
            <div className="gold-rule mt-5" />
            <p className="lede mt-5">
              Conte brevemente o que precisa resolver no Brasil. A equipe retorna
              orientando sobre os próximos passos e sobre o que pode ser conduzido
              a distância.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <WhatsAppButton
                context={AREA}
                label="Falar pelo WhatsApp"
                ctaPosition="contato"
                practiceArea={AREA}
                pageType={PAGE_TYPE}
                className="w-full sm:w-auto"
              />
              <p className="flex items-center gap-2.5 text-muted">
                <Mail className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden />
                <EmailLink
                  email={site.email}
                  ctaPosition="contato_exterior"
                  pageType={PAGE_TYPE}
                  className="text-navy underline decoration-brand-gold underline-offset-4"
                />
              </p>
              <p className="flex items-start gap-2.5 text-sm text-muted">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden />
                {site.hours}, horário de Brasília. Mensagens recebidas fora do
                expediente são respondidas no dia útil seguinte.
              </p>
            </div>
          </div>

          <LeadFormExterior />
        </div>
      </section>
    </>
  );
}
