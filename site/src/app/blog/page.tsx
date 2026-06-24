import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABand } from "@/components/ui/CTABand";
import { posts } from "@/content/posts";

export const metadata: Metadata = pageMeta({
  title: "Blog e Conteúdo Jurídico",
  description:
    "Artigos e orientações sobre plano de saúde, inventário, família, direito da mulher e direitos LGBTQIAPN+. Conteúdo informativo do escritório Flávia Machado.",
  path: "/blog",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-site py-5">
          <div className="[&_a]:text-white/60 [&_span]:text-white">
            <Breadcrumbs
              items={[
                { name: "Início", path: "/" },
                { name: "Blog", path: "/blog" },
              ]}
            />
          </div>
        </div>
        <div className="container-site pb-16 pt-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Conteúdo e orientações jurídicas
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Artigos informativos sobre temas que impactam a vida de pacientes,
            famílias e pessoas em situações jurídicas delicadas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-hover group flex h-full flex-col"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                {post.category}
              </span>
              <h2 className="mt-2 font-serif text-xl text-navy">{post.title}</h2>
              <p className="mt-3 flex-1 text-muted">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <time className="text-muted" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <span className="inline-flex items-center gap-1.5 font-semibold text-navy group-hover:text-brand-gold">
                  Ler <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABand
        title="Ficou com uma dúvida?"
        text="Envie um resumo da sua situação para a equipe. O primeiro passo é entender o seu caso com clareza."
        pageType="blog"
      />
    </>
  );
}
