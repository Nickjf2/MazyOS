import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { areas, areaList, getArea, type ThemeKey } from "@/content/areas";
import { pageMeta } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { SchemaMarkup } from "@/components/tracking/SchemaMarkup";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { HowItWorksSteps } from "@/components/ui/HowItWorksSteps";
import { DocumentChecklist } from "@/components/ui/DocumentChecklist";
import { TeamCard } from "@/components/ui/TeamCard";
import { CTABand } from "@/components/ui/CTABand";
import { team } from "@/lib/site";

// Mapa de classes por tema (Tailwind precisa de classes estáticas).
const themeStyles: Record<ThemeKey, { soft: string; eyebrow: string }> = {
  health: { soft: "bg-health-soft", eyebrow: "text-health-accent" },
  reajuste: { soft: "bg-reajuste-soft", eyebrow: "text-reajuste-accent" },
  woman: { soft: "bg-woman-soft", eyebrow: "text-woman-accent" },
  lgbt: { soft: "bg-lgbt-soft", eyebrow: "text-lgbt-accent" },
  succession: { soft: "bg-succession-soft", eyebrow: "text-succession-accent" },
  family: { soft: "bg-soft", eyebrow: "text-navy" },
};

export function generateStaticParams() {
  return areaList.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const area = getArea(params.slug);
  if (!area) return {};
  return pageMeta({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
    rawTitle: true,
  });
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = areas[params.slug];
  if (!area) notFound();

  const theme = themeStyles[area.theme];
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Áreas de atuação", path: "/areas-de-atuacao" },
    { name: area.badge, path: `/areas/${area.slug}` },
  ];

  return (
    <>
      <SchemaMarkup
        schema={[faqSchema(area.faqs), breadcrumbSchema(crumbs)]}
      />

      {/* HERO */}
      <section className="bg-navy text-white">
        <div className="container-site py-5">
          <div className="[&_a]:text-white/60 [&_span]:text-white">
            <Breadcrumbs items={crumbs} />
          </div>
        </div>
        <div className="container-site grid gap-8 pb-20 pt-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="eyebrow bg-white/10 text-brand-gold">{area.badge}</span>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              {area.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              {area.subtitle}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                context={area.slug}
                label={area.ctaLabel ?? "Falar com a equipe"}
                ctaPosition="hero"
                practiceArea={area.slug}
                pageType="landing_page"
              />
            </div>
            {area.heroMicrocopy && (
              <p className="mt-4 text-sm text-white/60">{area.heroMicrocopy}</p>
            )}
          </div>
        </div>
      </section>

      {/* INTRO */}
      {area.intro && (
        <section className="section">
          <div className="container-site mx-auto max-w-3xl text-center">
            <p className="text-xl leading-relaxed text-muted">{area.intro}</p>
          </div>
        </section>
      )}

      {/* PROBLEMAS / SITUAÇÕES */}
      <section className={`section ${theme.soft} ${area.intro ? "" : "border-t border-line"}`}>
        <div className="container-site">
          <SectionHeader title={area.problemsTitle} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {area.problems.map((p) => (
              <div key={p.title} className="card">
                <h3 className="font-serif text-lg text-navy">{p.title}</h3>
                {p.text && <p className="mt-2 text-muted">{p.text}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO-DESTAQUE (ex.: Direito Médico) */}
      {area.spotlight && (
        <section className="section">
          <div className="container-site">
            <SectionHeader
              eyebrow={area.spotlight.eyebrow}
              title={area.spotlight.title}
              subtitle={area.spotlight.text}
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {area.spotlight.items.map((it) => (
                <div key={it.title} className="card-hover">
                  <h3 className="font-serif text-lg text-navy">{it.title}</h3>
                  {it.text && <p className="mt-2 text-muted">{it.text}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DIREITO MÉDICO (dois grupos) */}
      {area.medicalLaw && (
        <section className="section">
          <div className="container-site">
            <SectionHeader
              eyebrow={area.medicalLaw.eyebrow}
              title={area.medicalLaw.title}
              subtitle={area.medicalLaw.subtitle}
            />
            <div className="space-y-12">
              {area.medicalLaw.groups.map((group) => (
                <div key={group.heading}>
                  <h3 className="font-serif text-2xl text-navy">{group.heading}</h3>
                  <p className="mt-2 max-w-3xl leading-relaxed text-muted">{group.lead}</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {group.items.map((it) => (
                      <div key={it.title} className="card-hover">
                        <h4 className="font-serif text-lg text-navy">{it.title}</h4>
                        <p className="mt-2 text-muted">{it.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EXPLAINER */}
      {area.explainer && (
        <section className="section">
          <div className="container-site mx-auto max-w-3xl">
            <h2 className="text-3xl">{area.explainer.title}</h2>
            <div className="gold-rule mt-5" />
            <p className="lede mt-5">{area.explainer.text}</p>
          </div>
        </section>
      )}

      {/* COMO FUNCIONA */}
      <section className="section">
        <div className="container-site">
          <SectionHeader eyebrow="Passo a passo" title="Como funciona" />
          <HowItWorksSteps steps={area.steps} note={area.stepsNote} />
        </div>
      </section>

      {/* DOCUMENTOS */}
      {area.documents && (
        <section className="section bg-soft">
          <div className="container-site">
            <DocumentChecklist
              title={area.documents.title}
              items={area.documents.items}
              note={area.documents.note}
            />
          </div>
        </section>
      )}

      {/* EQUIPE */}
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Nossa equipe"
            title="Quem vai cuidar do seu caso"
            subtitle="Atuação técnica, escuta qualificada e experiência em demandas sensíveis."
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {team.map((t) => (
              <TeamCard key={t.oab} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-soft">
        <div className="container-site">
          <SectionHeader eyebrow="Dúvidas frequentes" title="Perguntas frequentes" />
          <FAQAccordion items={area.faqs} practiceArea={area.slug} />
        </div>
      </section>

      {/* CTA FINAL */}
      <CTABand
        title={area.finalCtaTitle}
        text={area.finalCtaText}
        context={area.slug}
        practiceArea={area.slug}
        pageType="landing_page"
      />
    </>
  );
}
