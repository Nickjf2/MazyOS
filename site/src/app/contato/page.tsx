import type { Metadata } from "next";
import { MapPin, Clock, MessageCircle, Mail } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contato",
  description:
    "Fale com o escritório Flávia Machado Advogados Associados. Atendimento sigiloso em Juiz de Fora e online. Envie um resumo da sua situação.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-site py-5">
          <div className="[&_a]:text-white/60 [&_span]:text-white">
            <Breadcrumbs
              items={[
                { name: "Início", path: "/" },
                { name: "Contato", path: "/contato" },
              ]}
            />
          </div>
        </div>
        <div className="container-site pb-16 pt-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Fale com a equipe
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Conte, de forma breve, o que está acontecendo. O primeiro passo é
            entender sua situação com clareza. Atendimento sigiloso em {site.city} e
            online.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-card border border-line bg-soft p-7">
              <h2 className="font-serif text-2xl text-navy">Outras formas de contato</h2>

              <div className="mt-6">
                <WhatsAppButton
                  label="Conversar no WhatsApp"
                  ctaPosition="contato_sidebar"
                  pageType="contato"
                  className="w-full"
                />
              </div>

              <ul className="mt-8 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 text-brand-gold" />
                  <div>
                    <p className="font-semibold text-navy">{site.flavia.name}</p>
                    <p className="text-muted">
                      <a
                        href={`https://wa.me/${site.flavia.whatsappNumber}`}
                        className="hover:text-brand-gold"
                      >
                        {site.flavia.whatsappDisplay}
                      </a>
                    </p>
                    <p className="text-muted">
                      <a
                        href={`mailto:${site.flavia.email}`}
                        className="hover:text-brand-gold"
                      >
                        {site.flavia.email}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 border-t border-line pt-5">
                  <MessageCircle className="mt-0.5 h-5 w-5 text-brand-gold" />
                  <div>
                    <p className="font-semibold text-navy">{site.marina.name}</p>
                    <p className="text-muted">
                      <a
                        href={`https://wa.me/${site.marina.whatsappNumber}`}
                        className="hover:text-brand-gold"
                      >
                        {site.marina.whatsappDisplay}
                      </a>
                    </p>
                    <p className="text-muted">
                      <a
                        href={`mailto:${site.marina.email}`}
                        className="hover:text-brand-gold"
                      >
                        {site.marina.email}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-brand-gold" />
                  <div>
                    <p className="font-semibold text-navy">Endereço</p>
                    <p className="text-muted">{site.addressFull}</p>
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block font-semibold text-brand-gold hover:underline"
                    >
                      Como chegar →
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-brand-gold" />
                  <div>
                    <p className="font-semibold text-navy">Horário</p>
                    <p className="text-muted">{site.hours}</p>
                  </div>
                </li>
              </ul>

              <p className="mt-8 border-t border-line pt-6 text-xs leading-relaxed text-muted">
                {site.compliance}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* COMO CHEGAR */}
      <section className="pb-16">
        <div className="container-site">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-2xl text-navy">Como chegar</h2>
              <p className="mt-1 text-muted">{site.addressFull}</p>
            </div>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-brand-gold hover:underline"
            >
              <MapPin className="h-5 w-5" />
              Abrir no Google Maps
            </a>
          </div>
          <div className="overflow-hidden rounded-card border border-line shadow-card">
            <iframe
              src={site.mapsEmbedUrl}
              title={`Mapa — ${site.name}`}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
