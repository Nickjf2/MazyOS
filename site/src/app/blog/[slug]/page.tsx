import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { posts, getPost } from "@/content/posts";
import { getArea } from "@/content/areas";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { SchemaMarkup } from "@/components/tracking/SchemaMarkup";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PostBody } from "@/components/ui/PostBody";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { formatarDataPost } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const area = post.relatedArea ? getArea(post.relatedArea) : undefined;
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema,
          breadcrumbSchema(crumbs),
          // Artigo com perguntas frequentes vira FAQPage também: é o que pode
          // render o bloco de perguntas direto no resultado de busca.
          ...(post.faqs?.length ? [faqSchema(post.faqs)] : []),
        ]}
      />

      <article className="section">
        <div className="container-site mx-auto max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-wide text-brand-gold">
            {post.category}
          </span>
          <h1 className="mt-3 text-4xl font-bold sm:text-[2.75rem]">{post.title}</h1>
          <time className="mt-4 block text-sm text-muted" dateTime={post.date}>
            {formatarDataPost(post.date)}
          </time>
          <div className="gold-rule mt-6" />

          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-muted sm:text-lg">
            <PostBody body={post.body} />
          </div>

          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-14">
              <h2 className="font-serif text-2xl text-navy sm:text-3xl">
                Perguntas frequentes
              </h2>
              <div className="gold-rule mt-4" />
              <div className="mt-6">
                <FAQAccordion items={post.faqs} practiceArea={post.relatedArea} />
              </div>
            </section>
          )}

          {post.referencias && post.referencias.length > 0 && (
            <section className="mt-12 rounded-card border border-line bg-soft p-6">
              <h2 className="font-serif text-lg text-navy">Fontes oficiais</h2>
              <ul className="mt-3 flex flex-col gap-2 text-[15px]">
                {post.referencias.map((r) => (
                  <li key={r.url}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
                    >
                      {r.titulo}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-10 rounded-card border border-line bg-soft p-7 text-center">
            <p className="font-serif text-xl text-navy">
              Ficou com dúvida? Fale com o escritório.
            </p>
            <p className="mt-2 text-muted">
              Conteúdo informativo. Cada caso depende de uma análise individual.
            </p>
            <div className="mt-5 flex justify-center">
              <WhatsAppButton label="Falar com a equipe" ctaPosition="post_end" pageType="blog" />
            </div>
          </div>

          {area && (
            <Link
              href={`/areas/${area.slug}`}
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-navy hover:text-brand-gold"
            >
              Ver a página de {area.badge}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </article>
    </>
  );
}
