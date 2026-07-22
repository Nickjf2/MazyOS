import { Clock, Lock, MapPin, Scale } from "lucide-react";
import { site } from "@/lib/site";

// Faixa de credenciais para landing pages de campanha.
// Apenas fatos objetivos (registro, tempo de atuação, abrangência e sigilo),
// sem depoimentos ou avaliações — dentro dos limites de publicidade da OAB.

const itens = [
  { icon: Clock, label: "Mais de 30 anos de atuação" },
  { icon: Scale, label: "OAB/MG 57.701 e 167.831" },
  { icon: MapPin, label: "Presencial em Juiz de Fora e online" },
  { icon: Lock, label: "Atendimento sigiloso" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-soft">
      <div className="container-site grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {itens.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon className="h-5 w-5 shrink-0 text-brand-gold" aria-hidden />
            <span className="text-sm font-medium text-navy">{label}</span>
          </div>
        ))}
      </div>
      <span className="sr-only">
        {site.name} — {site.city}
      </span>
    </section>
  );
}
