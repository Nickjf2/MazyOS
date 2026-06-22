import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Termos de Uso",
  description:
    "Termos de uso do site Flávia Machado Advogados Associados. Conteúdo de caráter informativo.",
  path: "/termos-de-uso",
});

const sections: { h: string; p: string[] }[] = [
  {
    h: "1. Caráter informativo",
    p: [
      "As informações deste site possuem caráter exclusivamente informativo e não substituem a análise individual do caso por profissional habilitado. Nenhum conteúdo aqui apresentado constitui garantia de resultado.",
    ],
  },
  {
    h: "2. Relação advogado–cliente",
    p: [
      "O envio de mensagem por este site, por formulário ou WhatsApp, não estabelece, por si só, relação contratual entre você e o escritório. A atuação profissional depende de avaliação e formalização posterior.",
    ],
  },
  {
    h: "3. Publicidade e ética",
    p: [
      "Este site segue as normas de publicidade da advocacia. Não apresentamos promessas de resultado, captação indevida de clientela ou comparações com outros escritórios.",
    ],
  },
  {
    h: "4. Propriedade do conteúdo",
    p: [
      "Os textos, marcas e materiais deste site pertencem ao escritório e não podem ser reproduzidos sem autorização.",
    ],
  },
];

export default function TermosPage() {
  return (
    <section className="section">
      <div className="container-site mx-auto max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Início", path: "/" },
            { name: "Termos de uso", path: "/termos-de-uso" },
          ]}
        />
        <h1 className="mt-6 text-4xl font-bold">Termos de Uso</h1>
        <div className="gold-rule mt-6" />
        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-serif text-2xl text-navy">{s.h}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted">
                {s.p.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </section>
  );
}
