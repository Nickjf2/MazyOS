# Site — Flávia Machado Advogados Associados

Ecossistema jurídico digital construído a partir de `MASTER_SITE_FLAVIA_MACHADO_A_PLUS.md`.
Next.js 14 (App Router) · TypeScript · Tailwind CSS · React Hook Form + Zod.

## Rodar localmente

```bash
cd site
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # servir o build
```

## Arquitetura

Páginas de área e landing pages são **orientadas a dados**: o conteúdo vive em
`src/content/areas.ts` e é renderizado por um único template em
`src/app/areas/[slug]/page.tsx`. Para criar/editar uma área, basta alterar o
arquivo de conteúdo — sem mexer em layout.

```
src/
  app/
    page.tsx                     Home (todas as seções do MASTER §10)
    areas/[slug]/page.tsx        Template das 11 áreas/landing pages
    areas-de-atuacao/            Hub de áreas
    blog/ , blog/[slug]/         Blog (dados em content/posts.ts)
    sobre-o-escritorio/ equipe/ contato/
    politica-de-privacidade/ termos-de-uso/
    sitemap.ts  robots.ts  icon.svg  not-found.tsx
  components/
    layout/      Header, Footer, WhatsAppFloat
    ui/          SectionHeader, PracticeCard, FAQAccordion, TeamCard,
                 HowItWorksSteps, DocumentChecklist, CTABand, WhatsAppButton, Breadcrumbs
    forms/       ContactForm
    tracking/    SchemaMarkup
  content/       areas.ts (12 áreas), posts.ts (4 artigos)
  lib/           site.ts, whatsapp.ts, seo.ts, schema.ts, tracking.ts, utils.ts
```

## Incluído

- Home institucional completa, 11 páginas de área/landing, hub, blog, sobre, equipe, contato, privacidade, termos, 404.
- SEO: metadata por página, canonical, Open Graph, sitemap.xml, robots.txt, JSON-LD (LegalService, Attorney, FAQPage, BreadcrumbList, Article).
- WhatsApp contextual por página + botão flutuante (safe-area).
- Tracking via `lib/tracking.ts` (eventos do MASTER §22, pronto para GTM/gtag).
- Formulário curto (sem dados sensíveis no 1º contato) com consentimento LGPD; sem backend, encaminha resumo ao WhatsApp.
- Redirects 301 das URLs antigas (`next.config.mjs`).
- Compliance OAB: linguagem informativa, sem promessa de resultado.

## Pendências para preencher (em `src/lib/site.ts`)

- [ ] E-mail de contato real
- [ ] Endereço completo do escritório
- [ ] Handle do Instagram
- [ ] Confirmar número de WhatsApp (atual: 32 99988-5341)
- [ ] Fotos profissionais da equipe (hero usa composição tipográfica por ora)
- [ ] ID do Google Tag Manager / GA4 (adicionar script no `layout.tsx`)
- [ ] `og-default.jpg` em `/public` para Open Graph

> O número/áreas seguem o MASTER (documento autoritativo). A `dados/arquitetura-site.md`
> descrevia uma estrutura anterior de 5 áreas — divergências foram resolvidas a favor do MASTER.
```
