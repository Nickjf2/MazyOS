import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-site mx-auto max-w-xl py-16 text-center">
        <p className="font-serif text-6xl text-brand-gold">404</p>
        <h1 className="mt-4 text-3xl">Página não encontrada</h1>
        <p className="mt-4 text-muted">
          A página que você procura não existe ou foi movida. Você pode voltar ao
          início ou conhecer nossas áreas de atuação.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-navy">
            Voltar ao início
          </Link>
          <Link href="/areas-de-atuacao" className="btn-outline">
            Áreas de atuação
          </Link>
        </div>
      </div>
    </section>
  );
}
