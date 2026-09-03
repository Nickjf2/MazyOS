import { Star } from "lucide-react";
import { avaliacoes, avaliacoesGoogle } from "@/content/avaliacoes";

// Prova social do perfil do Google. Mostra a nota agregada e uma seleção de
// avaliações públicas, sempre com link para a origem — quem quiser conferir,
// confere. Nada aqui é depoimento coletado pelo escritório.

function Estrelas({ nota, tamanho = 16 }: { nota: number; tamanho?: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${nota.toFixed(1).replace(".", ",")} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          style={{ width: tamanho, height: tamanho }}
          className={
            i < Math.round(nota)
              ? "fill-brand-gold text-brand-gold"
              : "text-line"
          }
          aria-hidden
        />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  const { nota, total, perfilUrl } = avaliacoesGoogle;
  const notaFormatada = nota.toFixed(1).replace(".", ",");

  return (
    <div className="container-site">
      {/* Resumo */}
      <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">
          Avaliações no Google
        </p>
        <h2 className="text-3xl sm:text-4xl">
          O que diz quem já foi atendido
        </h2>
        <div className="gold-rule mt-5" />
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <span className="font-serif text-4xl leading-none text-navy">
            {notaFormatada}
          </span>
          <Estrelas nota={nota} tamanho={20} />
          <span className="text-muted">
            {total} avaliações no Google
          </span>
        </div>
      </div>

      {/* Avaliações */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {avaliacoes.map((a) => (
          <figure
            key={a.autor}
            className="flex flex-col rounded-card border border-line bg-white p-6 shadow-card"
          >
            <Estrelas nota={5} />
            <blockquote className="mt-4 flex-1 leading-relaxed text-ink">
              “{a.texto}”
            </blockquote>
            <figcaption className="mt-5 border-t border-line pt-4">
              <span className="block text-sm font-semibold text-navy">
                {a.autor}
              </span>
              <span className="block text-xs text-muted">{a.quando}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-8 text-center text-sm">
        <a
          href={perfilUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-navy hover:text-brand-gold"
        >
          Ver todas as avaliações no Google →
        </a>
      </p>
    </div>
  );
}
