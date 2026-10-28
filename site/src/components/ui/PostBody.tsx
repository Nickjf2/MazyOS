import Link from "next/link";
import type { Bloco } from "@/content/posts";

// Renderiza o corpo de um artigo do blog.
//
// String continua sendo parágrafo, então os artigos antigos seguem como
// estavam. Os blocos nomeados dão ao texto longo a estrutura que ele precisa:
// título de seção é sinal de busca e é o que permite varrer o artigo com o
// olho em vez de ler tudo.

/** Converte [texto](/caminho) em link, mantendo o resto como texto. */
function comLinks(texto: string) {
  const partes = texto.split(/(\[[^\]]+\]\([^)]+\))/g);
  return partes.map((parte, i) => {
    const m = parte.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return parte;
    const [, rotulo, href] = m;
    if (href.startsWith("/")) {
      return (
        <Link
          key={i}
          href={href}
          className="font-medium text-navy underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold"
        >
          {rotulo}
        </Link>
      );
    }
    return (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-navy underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold"
      >
        {rotulo}
      </a>
    );
  });
}

export function PostBody({ body }: { body: Bloco[] }) {
  return (
    <>
      {body.map((bloco, i) => {
        if (typeof bloco === "string") {
          return <p key={i}>{comLinks(bloco)}</p>;
        }
        if ("h2" in bloco) {
          return (
            <h2
              key={i}
              className="mt-12 font-serif text-2xl text-navy sm:text-3xl"
            >
              {bloco.h2}
            </h2>
          );
        }
        if ("h3" in bloco) {
          return (
            <h3 key={i} className="mt-8 font-serif text-xl text-navy">
              {bloco.h3}
            </h3>
          );
        }
        if ("lista" in bloco) {
          return (
            <ul key={i} className="my-5 flex list-none flex-col gap-2.5 pl-0">
              {bloco.lista.map((item, j) => (
                <li key={j} className="relative pl-6">
                  <span
                    aria-hidden
                    className="absolute left-1 top-[0.68em] h-1.5 w-1.5 rounded-full bg-brand-gold"
                  />
                  {comLinks(item)}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p
            key={i}
            className="my-7 border-l-[3px] border-brand-gold bg-soft py-4 pl-5 pr-4 font-medium text-navy"
          >
            {comLinks(bloco.destaque)}
          </p>
        );
      })}
    </>
  );
}
