import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/ui/CTABand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { areaList } from "@/content/areas";

export const metadata: Metadata = pageMeta({
  title: "Áreas de Atuação",
  description:
    "Direito da Saúde, Inventário e Sucessões, Família, Direito da Mulher e Direitos LGBTQIAPN+. Orientação jurídica clara em Juiz de Fora e online.",
  path: "/areas-de-atuacao",
});

const groups = [
  {
    title: "Direito da Saúde",
    slugs: [
      "direito-da-saude",
      "negativa-plano-saude",
      "reajuste-abusivo-plano-saude",
      "tea-aba-plano-saude",
      "medicamentos-alto-custo",
      "home-care",
    ],
  },
  {
    title: "Inventário, Sucessões e Família",
    slugs: ["inventario", "planejamento-sucessorio", "direito-de-familia"],
  },
  {
    title: "Mulher e LGBTQIAPN+",
    slugs: ["direito-da-mulher", "direitos-lgbtqia"],
  },
];

export default function AreasHub() {
  const bySlug = Object.fromEntries(areaList.map((a) => [a.slug, a]));
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-site py-5">
          <div className="[&_a]:text-white/60 [&_span]:text-white">
            <Breadcrumbs
              items={[
                { name: "Início", path: "/" },
                { name: "Áreas de atuação", path: "/areas-de-atuacao" },
              ]}
            />
          </div>
        </div>
        <div className="container-site pb-16 pt-4">
          <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            Áreas de atuação
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Orientação jurídica em demandas sensíveis e urgentes, com técnica,
            sigilo e acolhimento. Escolha a área mais próxima do seu caso.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site space-y-16">
          {groups.map((group) => (
            <div key={group.title}>
              <SectionHeader title={group.title} align="left" className="mb-8" />
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {group.slugs.map((slug) => {
                  const a = bySlug[slug];
                  if (!a) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/areas/${slug}`}
                      className="card-hover group flex h-full flex-col"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                        {a.badge}
                      </span>
                      <h3 className="mt-2 font-serif text-xl text-navy">{a.h1}</h3>
                      <p className="mt-3 flex-1 text-muted">{a.subtitle}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-brand-gold">
                        Ver página
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        title="Não sabe qual área se aplica ao seu caso?"
        text="Envie um resumo da situação e nossa equipe indicará a área e os próximos passos possíveis."
      />
    </>
  );
}
