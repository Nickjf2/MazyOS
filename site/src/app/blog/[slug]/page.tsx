import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { posts, getPost } from "@/content/posts";
import { getArea } from "@/content/areas";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { SchemaMarkup } from "@/components/tracking/SchemaMarkup";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
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
      <SchemaMarkup schema={[articleSchema, breadcrumbSchema(crumbs)]} />

      <article className="section">
        <div className="container-site mx-auto max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-wide text-brand-gold">
            {post.category}
          </span>
          <h1 className="mt-3 text-4xl font-bold sm:text-[2.75rem]">{post.title}</h1>
          <time className="mt-4 block text-sm text-muted" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <div className="gold-rule mt-6" />

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

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
