import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";

interface Props {
  title: string;
  text: string;
  context?: string;
  practiceArea?: string;
  pageType?: string;
  showForm?: boolean;
  ctaLabel?: string;
}

export function CTABand({
  title,
  text,
  context = "geral",
  practiceArea,
  pageType,
  showForm = true,
  ctaLabel = "Falar com a equipe",
}: Props) {
  return (
    <section className="section bg-navy text-white">
      <div className="container-site mx-auto max-w-3xl text-center">
        <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
        <div className="gold-rule mx-auto mt-5" />
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
          {text}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton
            context={context}
            label={ctaLabel}
            ctaPosition="cta_band"
            practiceArea={practiceArea}
            pageType={pageType}
          />
          {showForm && (
            <Link href="/contato" className="btn-ghost">
              Enviar formulário
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
