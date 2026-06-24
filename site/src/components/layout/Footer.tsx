import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { site, team, mainNav } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-site grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <span className="font-serif text-lg font-semibold text-white">
            Flávia Machado
          </span>
          <span className="mt-0.5 block text-[10px] uppercase tracking-[0.2em] text-brand-gold">
            Advogados Associados
          </span>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Orientação jurídica clara para decisões urgentes e delicadas, em{" "}
            {site.city} e online.
          </p>
          <div className="mt-4 space-y-1 text-sm text-white/60">
            {team.map((t) => (
              <p key={t.oab}>
                {t.name} — {t.oab}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Áreas e páginas
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contato
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <span>{site.addressFull}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-gold" />
              <span>{site.whatsappDisplay}</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 shrink-0 text-brand-gold" />
              <a href={whatsappLink("geral")} className="hover:text-brand-gold">
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-gold">
                {site.email}
              </a>
            </li>
            <li className="mt-4 border-t border-white/10 pt-4 text-xs uppercase tracking-wide text-white/50">
              {site.marina.name}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-gold" />
              <a
                href={`https://wa.me/${site.marina.whatsappNumber}`}
                className="hover:text-brand-gold"
              >
                {site.marina.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-gold" />
              <a href={`mailto:${site.marina.email}`} className="hover:text-brand-gold">
                {site.marina.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Institucional
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/sobre-o-escritorio" className="hover:text-brand-gold">
                Sobre o escritório
              </Link>
            </li>
            <li>
              <Link href="/equipe" className="hover:text-brand-gold">
                Equipe
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-brand-gold">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade" className="hover:text-brand-gold">
                Política de privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="hover:text-brand-gold">
                Termos de uso
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-4 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl leading-relaxed">{site.compliance}</p>
          <p className="shrink-0">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
