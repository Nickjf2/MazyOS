import type { Metadata } from "next";
import {
  Banknote,
  Building2,
  Car,
  CheckCircle2,
  Coins,
  FileText,
  Gem,
  Home,
  Landmark,
  Scale,
  ScrollText,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { faqSchema, breadcrumbSchema, legalServiceSchema } from "@/lib/schema";
import { SchemaMarkup } from "@/components/tracking/SchemaMarkup";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { HowItWorksSteps } from "@/components/ui/HowItWorksSteps";
import { TeamCard } from "@/components/ui/TeamCard";
import { CTABand } from "@/components/ui/CTABand";
import { team, site } from "@/lib/site";

const PAGE_TYPE = "landing_page";
const AREA = "inventario-sucessoes";

export const metadata: Metadata = pageMeta({
  title: "Advogado para Inventário em Juiz de Fora | Flávia Machado",
  description:
    "Orientação jurídica para inventário judicial e extrajudicial, partilha de bens, ITCD, herança e regularização patrimonial em Juiz de Fora.",
  path: "/inventario-sucessoes",
  rawTitle: true,
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Inventário e Sucessões", path: "/inventario-sucessoes" },
];

/** Seção 2 — situações reconhecíveis pelo visitante */
const situacoes = [
  "Perdeu um familiar e não sabe por onde começar",
  "O imóvel ainda está registrado no nome do falecido",
  "Um herdeiro não concorda com a partilha",
  "O inventário está atrasado ou parado",
  "A conta bancária foi bloqueada após o falecimento",
  "Existe um testamento",
  "Há herdeiro menor de idade ou incapaz",
  "Apareceu outro bem depois do inventário",
  "A família precisa vender ou transferir um imóvel",
  "Existem bens rurais, empresa ou participações",
];

/** Seção 3 — como o escritório atua */
const comoAjuda = [
  {
    icon: Users,
    title: "Identificação dos herdeiros",
    text: "Análise de quem são os interessados e qual a participação de cada um na sucessão.",
  },
  {
    icon: FileText,
    title: "Levantamento de bens e dívidas",
    text: "Mapeamento do patrimônio deixado, das obrigações e das pendências do espólio.",
  },
  {
    icon: ScrollText,
    title: "Organização documental",
    text: "Orientação sobre certidões, escrituras, extratos e demais documentos necessários.",
  },
  {
    icon: Scale,
    title: "Definição do caminho adequado",
    text: "Avaliação sobre a viabilidade do inventário em cartório ou pela via judicial.",
  },
  {
    icon: Landmark,
    title: "Análise do ITCD",
    text: "Apuração do imposto estadual, declaração dos bens e emissão da certidão fiscal.",
  },
  {
    icon: CheckCircle2,
    title: "Elaboração da partilha",
    text: "Estruturação da divisão dos bens conforme a lei e a realidade da família.",
  },
  {
    icon: Building2,
    title: "Regularização de imóveis",
    text: "Acompanhamento até o registro, para que os bens possam ser transferidos ou vendidos.",
  },
  {
    icon: ShieldCheck,
    title: "Conflitos entre herdeiros",
    text: "Atuação técnica quando há desacordo, uso exclusivo de bens ou falta de prestação de contas.",
  },
  {
    icon: TrendingUp,
    title: "Sobrepartilha e planejamento",
    text: "Inclusão de bens descobertos depois e organização preventiva do patrimônio familiar.",
  },
];

/** Seção 5 — a herança não é só imóvel */
const bens = [
  { icon: Home, title: "Imóveis urbanos" },
  { icon: Landmark, title: "Imóveis rurais" },
  { icon: Banknote, title: "Contas bancárias" },
  { icon: TrendingUp, title: "Investimentos" },
  { icon: Building2, title: "Empresas e participações" },
  { icon: Car, title: "Veículos" },
  { icon: Coins, title: "Créditos e direitos" },
  { icon: Gem, title: "Joias e outros bens" },
];

/** Seção 6 — etapas do atendimento */
const etapas = [
  "Entendimento do caso e da situação da família",
  "Levantamento de herdeiros, bens e dívidas",
  "Organização da documentação necessária",
  "Definição da modalidade adequada",
  "Condução do procedimento, em cartório ou judicial",
  "Partilha e regularização dos bens",
];

/** Seção 7 — dúvidas que surgem depois de um falecimento */
const faqs = [
  {
    q: "Preciso fazer inventário mesmo se houver apenas um imóvel?",
    a: "Em regra, é necessário regularizar a transmissão dos bens deixados, mesmo quando existe apenas um imóvel ou um único herdeiro. A forma adequada depende da composição patrimonial e das circunstâncias do caso.",
  },
  {
    q: "Qual é o prazo para começar?",
    a: "A legislação estabelece prazo para a abertura do inventário. Além disso, aspectos tributários podem ser afetados pelo momento em que as providências são tomadas, por isso é importante buscar orientação assim que possível.",
  },
  {
    q: "O inventário está atrasado. Ainda pode ser feito?",
    a: "Sim. O atraso não impede a regularização. É necessário analisar os impactos tributários, documentais e patrimoniais para definir o melhor caminho.",
  },
  {
    q: "Todos os herdeiros precisam concordar?",
    a: "O consenso facilita o inventário em cartório. Quando há desacordo, o procedimento pode seguir pela via judicial, com acompanhamento técnico para proteger os direitos dos envolvidos.",
  },
  {
    q: "Posso fazer o inventário em cartório?",
    a: "Depende da situação dos herdeiros, dos bens, do consenso, da existência de testamento e do cumprimento dos requisitos legais. A análise jurídica define se essa modalidade é possível no caso concreto.",
  },
  {
    q: "É obrigatório contratar advogado?",
    a: "Sim. A assistência de advogado é obrigatória tanto no inventário judicial quanto no inventário realizado em cartório.",
  },
  {
    q: "Há menor de idade. O inventário precisa ser judicial?",
    a: "Não necessariamente. A presença de menor ou incapaz exige análise cuidadosa e, em alguns casos, a solução extrajudicial pode ser possível, desde que todos os requisitos legais sejam atendidos e os direitos sejam integralmente protegidos.",
  },
  {
    q: "Existe testamento. Pode ser feito em cartório?",
    a: "A existência de testamento não impede automaticamente o inventário em cartório. A possibilidade depende da análise do caso e do cumprimento dos requisitos legais aplicáveis.",
  },
  {
    q: "O que acontece com as dívidas do falecido?",
    a: "As dívidas precisam ser identificadas e analisadas dentro do espólio. Em regra, os herdeiros não respondem com patrimônio próprio além dos limites da herança recebida.",
  },
  {
    q: "É possível vender um imóvel durante o inventário?",
    a: "Depende da modalidade, da concordância dos interessados e, em alguns casos, de autorização judicial. Cada situação precisa ser avaliada individualmente.",
  },
  {
    q: "Um dos herdeiros mora longe. Isso impede o procedimento?",
    a: "Não. Diversos atos podem ser realizados por procuração, assinatura eletrônica e atendimento remoto, inclusive para herdeiros em outros estados.",
  },
  {
    q: "Descobrimos outro bem depois. É necessário começar tudo novamente?",
    a: "Em muitos casos, o bem encontrado posteriormente pode ser incluído por meio de sobrepartilha, sem refazer todo o procedimento.",
  },
  {
    q: "Quanto custa um inventário?",
    a: "Os custos dependem do patrimônio, da modalidade escolhida, dos impostos, das certidões, das custas, dos registros e da complexidade do caso. A análise inicial permite estimar esses valores com mais clareza.",
  },
  {
    q: "Um herdeiro está usando o imóvel sozinho. O que fazer?",
    a: "A situação deve ser analisada considerando a posse, a administração do espólio, as despesas, eventuais aluguéis e os direitos dos demais herdeiros.",
  },
  {
    q: "Não temos dinheiro para pagar o imposto. Existe solução?",
    a: "É necessário analisar a composição do patrimônio, as regras tributárias e as possibilidades jurídicas aplicáveis ao caso. Existem caminhos que podem ser avaliados conforme a situação.",
  },
];

export default function InventarioSucessoesPage() {
  return (
    <>
      <SchemaMarkup
        schema={[legalServiceSchema(), faqSchema(faqs), breadcrumbSchema(crumbs)]}
      />

      {/* SEÇÃO 1 — HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="container-site relative py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow bg-white/10 text-brand-gold">
              Inventário e Sucessões
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              Precisa fazer um inventário e não sabe por onde começar?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Orientação jurídica para inventário judicial ou em cartório, partilha
              de bens, ITCD e regularização da herança em Juiz de Fora e região.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/65">
              Atendimento jurídico para organizar documentos, herdeiros, bens e o
              caminho mais adequado para a regularização da sucessão.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                context={AREA}
                label="Quero entender meu caso"
                ctaPosition="hero"
                practiceArea={AREA}
                pageType={PAGE_TYPE}
              />
              <a href="#como-funciona" className="btn-outline">
                Como funciona o atendimento
              </a>
            </div>

            <p className="mt-6 text-sm text-white/60">
              Atendimento em {site.city} e região, presencial e também online.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — SITUAÇÕES */}
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Talvez você se reconheça aqui"
            title="Você está passando por alguma destas situações?"
            subtitle="São as circunstâncias mais comuns entre as famílias que procuram o escritório. Se alguma delas parece com a sua, há um caminho jurídico possível."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {situacoes.map((s) => (
              <div key={s} className="card flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold"
                  aria-hidden
                />
                <p className="text-ink">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <WhatsAppButton
              context={AREA}
              label="Quero orientação para meu caso"
              ctaPosition="situacoes"
              practiceArea={AREA}
              pageType={PAGE_TYPE}
            />
          </div>
        </div>
      </section>

      {/* PRAZO E ITCD — informação útil, sem alarmismo */}
      <section className="section bg-succession-soft">
        <div className="container-site mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">
            Prazo e imposto
          </p>
          <h2 className="mt-3 text-3xl">Por que começar o quanto antes ajuda</h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="lede mt-5">
            O inventário deve ser iniciado dentro do prazo legal. Além disso, em
            Minas Gerais, algumas providências tomadas nos primeiros meses podem
            influenciar aspectos tributários do procedimento, especialmente na
            apuração do ITCD.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Mesmo quando o falecimento aconteceu há muitos anos, a regularização
            continua sendo possível. O que muda são os impactos a serem analisados.
          </p>
        </div>
      </section>

      {/* SEÇÃO 3 — COMO O ESCRITÓRIO PODE AJUDAR */}
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Como podemos ajudar"
            title="O que o escritório conduz no seu inventário"
            subtitle="Da primeira análise à regularização final dos bens, com acompanhamento em cada etapa."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {comoAjuda.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft">
                  <Icon className="h-6 w-6 text-brand-gold" aria-hidden />
                </div>
                <h3 className="mt-4 font-serif text-lg text-navy">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — JUDICIAL OU EM CARTÓRIO */}
      <section className="section bg-navy">
        <div className="container-site">
          <SectionHeader
            inverted
            eyebrow="Qual caminho seguir"
            title="Inventário em cartório ou judicial?"
            subtitle="Não existe uma resposta única. A modalidade adequada depende do consenso entre os herdeiros, dos bens envolvidos e do cumprimento dos requisitos legais."
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-card border border-line bg-white p-7 shadow-card">
              <h3 className="font-serif text-2xl text-navy">
                Inventário em cartório
              </h3>
              <p className="mt-1 text-sm font-semibold text-brand-gold">
                Via extrajudicial
              </p>
              <ul className="mt-5 space-y-3 text-muted">
                {[
                  "Pode ser mais simples em casos adequados",
                  "Exige a assistência de advogado",
                  "Depende do cumprimento de requisitos legais",
                  "Necessita de análise jurídica prévia",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold"
                      aria-hidden
                    />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-card border border-line bg-white p-7 shadow-card">
              <h3 className="font-serif text-2xl text-navy">Inventário judicial</h3>
              <p className="mt-1 text-sm font-semibold text-brand-gold">
                Via judicial
              </p>
              <ul className="mt-5 space-y-3 text-muted">
                {[
                  "Adequado quando há conflito entre herdeiros",
                  "Permite decisões judiciais sobre o espólio",
                  "Protege direitos em situações mais complexas",
                  "Pode envolver medidas urgentes",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold"
                      aria-hidden
                    />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <WhatsAppButton
              context="inventario-conflito"
              label="Descobrir qual caminho se aplica ao meu caso"
              ctaPosition="modalidade"
              practiceArea={AREA}
              pageType={PAGE_TYPE}
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — NÃO É SÓ IMÓVEL */}
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Composição do patrimônio"
            title="O inventário não envolve apenas imóveis"
            subtitle="A herança pode ser formada por diferentes tipos de bens e direitos, e todos precisam ser identificados no procedimento."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bens.map(({ icon: Icon, title }) => (
              <div key={title} className="card flex items-center gap-3">
                <Icon className="h-6 w-6 shrink-0 text-brand-gold" aria-hidden />
                <span className="font-medium text-navy">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — COMO FUNCIONA */}
      <section id="como-funciona" className="section bg-soft">
        <div className="container-site">
          <SectionHeader
            eyebrow="Passo a passo"
            title="Como funciona o atendimento"
            subtitle="Um processo organizado em etapas claras, para transformar a burocracia em passos possíveis."
          />
          <HowItWorksSteps
            steps={etapas}
            note="Você não precisa reunir todos os documentos antes do primeiro contato. Um relato inicial da situação já permite orientar os primeiros passos."
          />
          <div className="mt-10 flex justify-center">
            <WhatsAppButton
              context="inventario-imovel"
              label="Falar com a equipe pelo WhatsApp"
              ctaPosition="como_funciona"
              practiceArea={AREA}
              pageType={PAGE_TYPE}
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 — FAQ */}
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Dúvidas frequentes"
            title="Perguntas que normalmente surgem depois de um falecimento"
          />
          <FAQAccordion items={faqs} practiceArea={AREA} />
        </div>
      </section>

      {/* SEÇÃO 8 — EQUIPE */}
      <section className="section bg-soft">
        <div className="container-site">
          <SectionHeader
            eyebrow="Nossa equipe"
            title="Quem vai cuidar do seu caso"
            subtitle="Atuação técnica, escuta qualificada e acompanhamento em cada etapa do procedimento."
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {team.map((t) => (
              <TeamCard key={t.oab} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 9 — CTA FINAL */}
      <CTABand
        title="Cada inventário tem uma história, um patrimônio e uma família diferente."
        text="Uma análise inicial ajuda a identificar documentos, riscos, custos e o caminho jurídico mais adequado para o seu caso."
        context="inventario-atrasado"
        practiceArea={AREA}
        pageType={PAGE_TYPE}
        ctaLabel="Conversar com a equipe"
      />
    </>
  );
}
