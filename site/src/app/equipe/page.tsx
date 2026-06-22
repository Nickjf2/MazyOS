import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamCard } from "@/components/ui/TeamCard";
import { CTABand } from "@/components/ui/CTABand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { team } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Equipe",
  description:
    "Conheça as advogadas do escritório Flávia Machado Advogados Associados, com atuação técnica e acolhedora em demandas sensíveis em Juiz de Fora.",
  path: "/equipe",
});

export default function EquipePage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-site py-5">
          <div className="[&_a]:text-white/60 [&_span]:text-white">
            <Breadcrumbs
              items={[
                { name: "Início", path: "/" },
                { name: "Equipe", path: "/equipe" },
              ]}
            />
          </div>
        </div>
        <div className="container-site pb-16 pt-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Nossa equipe</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Atuação técnica, escuta qualificada e experiência em demandas sensíveis.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeader
            title="Advogadas responsáveis"
            subtitle="Sobriedade, autoridade e acolhimento na condução de cada caso."
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {team.map((t) => (
              <TeamCard key={t.oab} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Fale com a equipe"
        text="Conte, de forma breve, o que está acontecendo. O primeiro passo é entender sua situação com clareza."
        pageType="equipe"
      />
    </>
  );
}
