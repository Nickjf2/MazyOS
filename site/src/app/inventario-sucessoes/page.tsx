import type { Metadata } from "next";
import Image from "next/image";
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
  Phone as PhoneIcon,
  Scale,
  ScrollText,
  ShieldCheck,
  TrendingUp,
  Users,
  FolderOpen,
  Split,
  HeartHandshake,
  Receipt,
  Wallet,
} from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { faqSchema, breadcrumbSchema, legalServiceSchema } from "@/lib/schema";
import { SchemaMarkup } from "@/components/tracking/SchemaMarkup";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { LeadForm } from "@/components/forms/LeadForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { HowItWorksSteps } from "@/components/ui/HowItWorksSteps";
import { TeamCard } from "@/components/ui/TeamCard";
import { CTABand } from "@/components/ui/CTABand";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { team, site } from "@/lib/site";

const PAGE_TYPE = "landing_page";
const AREA = "inventario-sucessoes";

export const metadata: Metadata = pageMeta({
  title:
    "Advogado para Inventário, Partilha e Testamento em Juiz de Fora | Flávia Machado",
  description:
    "Orientação jurídica em inventário judicial ou em cartório, partilha de bens, testamento e planejamento sucessório. Atendimento em Juiz de Fora e online.",
  path: "/inventario-sucessoes",
  rawTitle: true,
  // Página exclusiva de campanha (Google Ads): fora da busca orgânica para não
  // competir com /areas/inventario.
  noindex: true,
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Inventário e Sucessões", path: "/inventario-sucessoes" },
];

/** Seção 2 — situações reconhecíveis pelo visitante */
/**
 * Situações agrupadas pelos quatro assuntos da campanha. O agrupamento existe
 * para o visitante se reconhecer rápido: quem chega buscando "testamento" não
 * deve precisar ler a coluna de inventário para saber que o escritório atende.
 */
const gruposSituacoes = [
  {
    titulo: "Inventário e partilha",
    itens: [
      "Alguém da família faleceu e os bens ainda não foram regularizados",
      "Os herdeiros não conseguem chegar a um acordo sobre a divisão dos bens",
      "Existem imóveis, contas, veículos ou outros patrimônios a serem partilhados",
      "O inventário está parado ou se prolongando mais do que deveria",
      "Surgiu um bem ou uma questão que não foi resolvida no inventário",
    ],
  },
  {
    titulo: "Testamento e sucessão",
    itens: [
      "Existe um testamento, mas a família não sabe como proceder",
      "Há dúvidas sobre a validade ou os efeitos de um testamento",
      "Você quer organizar a sucessão e definir como seu patrimônio será transmitido",
      "Existem dúvidas sobre os direitos dos herdeiros e os limites para dispor dos bens",
      "A família precisa entender o que acontece com o patrimônio após o falecimento",
    ],
  },
  {
    titulo: "Planejamento sucessório",
    itens: [
      "Você quer organizar seu patrimônio ainda em vida",
      "Existe uma empresa ou negócio familiar que precisa ser planejado para a sucessão",
      "Você quer evitar conflitos entre os herdeiros no futuro",
      "Há patrimônio relevante e dúvidas sobre a melhor forma de organizá-lo",
      "Você quer transmitir seus bens de forma planejada, dentro dos limites da lei",
    ],
  },
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
    title: "Levantamento dos bens e dívidas",
    text: "Mapeamento de imóveis, veículos, contas, empresas, dentre outros, bem como das obrigações e das pendências do espólio.",
  },
  {
    icon: FolderOpen,
    title: "Organização documental",
    text: "Orientação sobre certidões, escrituras, extratos e demais documentos necessários.",
  },
  {
    icon: Scale,
    title: "Definição do caminho adequado",
    text: "Avaliamos se o caso pode ser resolvido em cartório ou se será necessário o inventário judicial, considerando as particularidades da família.",
  },
  {
    icon: Landmark,
    title: "Questões tributárias",
    text: "Orientação sobre o ITCD e demais aspectos tributários.",
  },
  {
    icon: Split,
    title: "Partilha dos bens",
    text: "Estruturação da divisão conforme a lei e a realidade da família.",
  },
  {
    icon: Home,
    title: "Regularização dos imóveis",
    text: "Acompanhamento das providências necessárias para transferência dos bens.",
  },
  {
    icon: HeartHandshake,
    title: "Conflitos entre herdeiros",
    text: "Atuação técnica quando há desacordo, uso exclusivo de bens ou falta de prestação de contas.",
  },
  {
    icon: TrendingUp,
    title: "Sobrepartilha",
    text: "Atuação para inclusão de bens descobertos após a finalização do inventário.",
  },
];

/** Seção 5 — a herança não é só imóvel */
const bens = [
  {
    icon: Home,
    title: "Imóveis",
    text: "Casas, apartamentos, terrenos, imóveis rurais e outros bens.",
  },
  {
    icon: Banknote,
    title: "Contas e aplicações",
    text: "Saldos bancários, investimentos, aplicações financeiras e outros ativos.",
  },
  {
    icon: Building2,
    title: "Empresas e participações",
    text: "Quotas societárias, participação em empresas e negócios familiares.",
  },
  {
    icon: Car,
    title: "Veículos",
    text: "Carros, motos e outros veículos registrados em nome do falecido.",
  },
  {
    icon: Coins,
    title: "Créditos e direitos",
    text: "Valores a receber, direitos decorrentes de contratos e outros créditos.",
  },
  {
    icon: Gem,
    title: "Bens de valor",
    text: "Joias, obras de arte e outros bens que integrem o patrimônio.",
  },
  {
    icon: Receipt,
    title: "Dívidas e obrigações",
    text: "O espólio responde pelas dívidas deixadas, nos limites da herança. Elas também precisam ser levantadas.",
  },
  {
    icon: Wallet,
    title: "Bens digitais",
    text: "Criptoativos, contas em plataformas e outros ativos digitais com valor patrimonial.",
  },
];

/** Seção 6 — etapas do atendimento */
const etapas = [
  {
    titulo: "Entendemos o seu caso",
    texto:
      "Você nos conta o que aconteceu e quais são as principais dúvidas ou dificuldades da família.",
  },
  {
    titulo: "Analisamos herdeiros e patrimônio",
    texto:
      "Identificamos os herdeiros, os bens, direitos e eventuais dívidas que precisam ser considerados.",
  },
  {
    titulo: "Definimos o caminho adequado",
    texto:
      "Avaliamos a documentação e as particularidades do caso para definir a forma mais adequada de conduzir a sucessão.",
  },
  {
    titulo: "Conduzimos o procedimento",
    texto:
      "Acompanhamos o inventário, a partilha e as providências necessárias até a regularização dos bens.",
  },
];

/** Seção 7 — dúvidas que surgem depois de um falecimento */
const faqs = [
  {
    q: "Preciso fazer inventário mesmo se houver apenas um imóvel?",
    a: "Sim. A existência de apenas um imóvel não dispensa, por si só, a necessidade de regularizar a sucessão. O inventário é o procedimento utilizado para identificar os herdeiros, levantar o patrimônio e formalizar a transmissão dos bens. A forma de realização — judicial ou extrajudicial — dependerá das características do caso.",
  },
  {
    q: "Qual é o prazo para começar?",
    a: "O Código de Processo Civil estabelece que o inventário deve ser instaurado em até 2 meses a partir do falecimento. O atraso não significa que a família perdeu o direito de fazer o inventário, mas pode gerar consequências, especialmente de natureza tributária. Em Minas Gerais, por exemplo, o ITCD está sujeito a regras próprias de prazo, multa e juros.",
  },
  {
    q: "O inventário está atrasado. Ainda pode ser feito?",
    a: "Sim. Mesmo que tenham passado meses ou anos desde o falecimento, a sucessão pode ser regularizada. O tempo decorrido, porém, pode trazer consequências tributárias e outras questões que precisam ser analisadas antes da definição da estratégia adequada.",
  },
  {
    q: "Todos os herdeiros precisam concordar?",
    a: "Depende da modalidade do inventário. Para a realização consensual em cartório, é necessário que os interessados estejam de acordo e atendam aos requisitos legais. Se houver divergência que impeça a solução extrajudicial, o inventário poderá precisar ser conduzido judicialmente.",
  },
  {
    q: "Posso fazer o inventário em cartório?",
    a: "Em muitos casos, sim. O inventário extrajudicial pode ser uma alternativa quando estão presentes os requisitos legais. A análise deve considerar, entre outros aspectos, a situação dos herdeiros, a existência de consenso, eventual testamento e a composição da herança. Hoje, inclusive, existem hipóteses específicas em que a escritura pode ser realizada mesmo havendo menor ou incapaz.",
  },
  {
    q: "É obrigatório contratar advogado?",
    a: "Sim. No inventário judicial, as partes precisam estar representadas por advogado ou defensor público. No inventário extrajudicial, a assistência de advogado também é obrigatória, com sua qualificação e assinatura na escritura.",
  },
  {
    q: "Há menor de idade. O inventário precisa ser judicial?",
    a: "Não necessariamente. A regra foi ampliada pelo CNJ. Atualmente, em determinadas situações, o inventário pode ser feito por escritura pública mesmo com interessado menor ou incapaz, desde que sejam observados requisitos específicos, inclusive a manifestação favorável do Ministério Público. Por isso, a situação precisa ser analisada individualmente.",
  },
  {
    q: "Existe testamento. Pode ser feito em cartório?",
    a: "Pode, em determinadas situações. A existência de testamento não significa automaticamente que todo o inventário deverá ser judicial. A regulamentação do CNJ admite a via extrajudicial em hipóteses específicas, desde que cumpridos os requisitos previstos e, quando necessário, haja autorização judicial prévia para o cumprimento do testamento.",
  },
  {
    q: "O que acontece com as dívidas do falecido?",
    a: "As dívidas não desaparecem com o falecimento. Em regra, o espólio responde pelas obrigações deixadas pelo falecido, observados os limites da herança. Os herdeiros não respondem pessoalmente por dívidas além das forças da herança. A existência de dívidas, portanto, também precisa ser considerada no inventário.",
  },
  {
    q: "É possível vender um imóvel durante o inventário?",
    a: "Em determinadas situações, sim. A venda pode ser admitida durante o inventário, mas depende das circunstâncias e do cumprimento dos requisitos legais. Atualmente, inclusive, a regulamentação do CNJ permite, em determinadas hipóteses, a alienação de bens do espólio por escritura pública, sem autorização judicial, desde que sejam observadas condições específicas.",
  },
  {
    q: "Um dos herdeiros mora longe. Isso impede o procedimento?",
    a: "Não. A distância, por si só, não impede a realização do inventário. Existem mecanismos de representação por procuração e, conforme o procedimento e o caso concreto, outras formas de participação à distância. O importante é organizar corretamente a representação e a documentação necessária.",
  },
  {
    q: "Descobrimos outro bem depois. É necessário começar tudo novamente?",
    a: "Não. Quando surgem bens ou direitos que não foram incluídos na partilha, pode ser necessária a realização de uma sobrepartilha. Não significa simplesmente começar todo o inventário novamente; é preciso analisar como o novo patrimônio deverá ser incorporado à sucessão.",
  },
  {
    q: "Quanto custa um inventário?",
    a: "Não existe um valor único. O custo depende de fatores como o patrimônio envolvido, a quantidade de herdeiros, a existência de conflitos, a modalidade do inventário, os impostos, os emolumentos e os honorários advocatícios. Por isso, o ideal é analisar o caso e o patrimônio antes de estimar os custos.",
  },
  {
    q: "Um herdeiro está usando o imóvel sozinho. O que fazer?",
    a: "Essa situação precisa ser analisada com cuidado. O uso exclusivo de um bem da herança por apenas um dos herdeiros pode gerar consequências patrimoniais, especialmente quando impede ou prejudica o exercício dos direitos dos demais. Dependendo do caso, podem ser discutidas medidas relacionadas ao uso do imóvel, à administração do bem e até à eventual compensação pelo uso exclusivo.",
  },
  {
    q: "O testamento evita o inventário?",
    a: "Não. O testamento serve para registrar a vontade do testador dentro dos limites estabelecidos pela lei, mas não substitui, por si só, o procedimento necessário para a transmissão e regularização dos bens após o falecimento. O testamento deverá ser analisado e cumprido dentro do procedimento sucessório adequado.",
  },
  {
    q: "Posso deixar meus bens para quem eu quiser?",
    a: "Depende da existência de herdeiros necessários. Havendo herdeiros necessários, a lei protege a chamada legítima, correspondente a metade da herança. A outra metade é a parcela disponível, sobre a qual o testador possui maior liberdade de disposição. Por isso, antes de fazer um testamento, é importante analisar a composição familiar e patrimonial.",
  },
  {
    q: "É possível organizar a sucessão antes do falecimento?",
    a: "Sim. A sucessão pode ser planejada em vida por diferentes instrumentos, conforme o patrimônio, a composição familiar e os objetivos envolvidos. Testamento, doações, usufruto e estruturas societárias são alguns dos mecanismos que podem ser avaliados. Não existe uma solução única para todas as famílias.",
  },
  {
    q: "Não temos dinheiro para pagar o imposto. Existe solução?",
    a: "É possível analisar alternativas. Em Minas Gerais, existem regras que permitem o parcelamento do ITCD, observadas as condições estabelecidas pela legislação estadual. Além disso, a falta de recursos para o pagamento imediato do imposto não significa, por si só, que a família não possa buscar orientação e avaliar o caminho adequado para a sucessão.",
  },
];

export default function InventarioSucessoesPage() {
  return (
    <>
      <SchemaMarkup
        schema={[legalServiceSchema(), faqSchema(faqs), breadcrumbSchema(crumbs)]}
      />

      {/* BARRA DE MARCA — sem navegação (landing de campanha) */}
      <div className="border-b border-line bg-white">
        <div className="container-site flex h-[68px] items-center justify-between gap-4">
          <BrandLogo src={site.logo} variant="dark" imgClassName="h-9 sm:h-11" />
          <div className="flex items-center gap-3">
            {/* Os dois canais ficam visíveis no celular: antes o WhatsApp só
                aparecia a partir do desktop, e ele é o mais usado. */}
            <PhoneButton
              variant="plain"
              label="Ligar"
              ctaPosition="barra_marca"
              practiceArea={AREA}
              pageType={PAGE_TYPE}
              className="sm:hidden"
            />
            <WhatsAppButton
              context={AREA}
              label="WhatsApp"
              ctaPosition="topo"
              practiceArea={AREA}
              pageType={PAGE_TYPE}
              className="px-4 py-2.5 text-sm sm:hidden"
            />
            <div className="hidden sm:block">
              <WhatsAppButton
                context={AREA}
                label="Falar com a equipe"
                ctaPosition="topo"
                practiceArea={AREA}
                pageType={PAGE_TYPE}
                className="px-5 py-2.5 text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SEÇÃO 1 — HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="container-site relative grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
              <span className="h-px w-8 bg-brand-gold/50" aria-hidden />
              Inventário, Partilha e Testamento
            </p>
            <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
              Perdeu um familiar e não sabe por onde começar?
            </h1>
            <div className="mt-6 max-w-2xl space-y-2.5 text-lg leading-relaxed text-white/85">
              <p>
                Está diante de um inventário, mas existem conflitos entre os
                herdeiros?
              </p>
              <p>
                Tem dúvidas sobre testamento, doação, partilha ou direitos do
                cônjuge?
              </p>
            </div>
            <p className="mt-6 font-serif text-2xl text-brand-gold sm:text-3xl">
              Cada família tem uma história. Cada sucessão exige uma estratégia.
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-white/75">
              Atuamos na condução de inventários judiciais e extrajudiciais,
              partilhas e testamentos, buscando tornar o processo mais claro,
              organizado e seguro para todos os envolvidos.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                context={AREA}
                label="Quero entender meu caso"
                ctaPosition="hero"
                practiceArea={AREA}
                pageType={PAGE_TYPE}
              />
              <a href="#como-funciona" className="btn-ghost">
                Como funciona o atendimento
              </a>
            </div>

            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/60">
              <span>Prefere falar por telefone?</span>
              <PhoneButton
                variant="link"
                ctaPosition="hero"
                practiceArea={AREA}
                pageType={PAGE_TYPE}
                className="text-sm"
              />
            </p>
            <p className="mt-3 text-sm text-white/60">
              Atendimento presencial em {site.city} e online para todo o Brasil.
            </p>
          </div>

          {/* Retrato da equipe — rosto e confiança logo no hero.
              O fundo azul do estúdio é praticamente o mesmo azul da seção, então
              a foto é enquadrada em retrato: cabe mais das advogadas e menos
              parede, sem emenda visível com o fundo. */}
          <div className="self-center lg:col-span-6">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand-gold/20 blur-2xl" />

              <div className="overflow-hidden rounded-[22px] shadow-xl ring-1 ring-white/15">
                <Image
                  src="/equipe/congresso-tratadas/equipe-duas-congresso.jpg"
                  alt="Dra. Flávia Vieira Machado e Dra. Marina de Assis Siqueira Brinati"
                  width={1500}
                  height={1000}
                  priority
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="aspect-[4/3] h-full w-full object-cover object-[36%_center] sm:aspect-[5/4]"
                />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-line bg-white/95 px-5 py-3.5 shadow-lg backdrop-blur sm:left-auto sm:right-6 sm:w-[20.5rem] sm:max-w-[calc(100%-3rem)]">
                <p className="font-serif text-lg leading-tight text-navy">
                  Dra. Flávia e Dra. Marina
                </p>
                <p className="mt-0.5 text-xs text-muted">
                  Flávia Machado Advocacia · {site.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENCIAIS */}
      <TrustStrip />

      {/* SEÇÃO 2 — SITUAÇÕES */}
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Talvez você se reconheça aqui"
            title="Qual destas situações se aproxima do seu caso?"
            subtitle="Cada família enfrenta a sucessão de uma forma diferente. Identifique abaixo o que está acontecendo e entenda como a orientação jurídica pode ajudar."
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gruposSituacoes.map((grupo) => (
              <div key={grupo.titulo} className="card flex flex-col">
                <h3 className="font-serif text-xl text-navy">{grupo.titulo}</h3>
                <div className="gold-rule mt-3" />
                <ul className="mt-5 flex flex-1 flex-col gap-3">
                  {grupo.itens.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold"
                        aria-hidden
                      />
                      <span className="text-sm leading-relaxed text-ink">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
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
            Prazo e regularização
          </p>
          <h2 className="mt-3 text-3xl">
            O tempo passa, mas a situação dos bens continua precisando ser
            resolvida
          </h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="lede mt-5">
            Quando um inventário é adiado, podem surgir novas dificuldades:
            documentos que precisam ser localizados, bens que permanecem sem
            regularização, mudanças na situação dos herdeiros e possíveis
            consequências tributárias.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Por isso, quanto antes a situação for analisada, mais fácil será
            identificar o caminho adequado para regularizar o patrimônio.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            E se o falecimento aconteceu há muitos anos, não significa que seja
            tarde demais. É possível regularizar a sucessão — mas o caso precisa ser
            analisado considerando o tempo decorrido e suas consequências jurídicas
            e tributárias.
          </p>
        </div>
      </section>

      {/* FORMULÁRIO — captura de contato sem depender do WhatsApp */}
      <section className="section">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">
              Converse com a nossa equipe
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Não sabe por onde começar?
            </h2>
            <div className="gold-rule mt-5" />
            <p className="lede mt-5">
              Conte o que está acontecendo. Te orientamos sobre os próximos passos.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Inventário e sucessão envolvem documentos, patrimônio, herdeiros e
              decisões importantes. É normal ter dúvidas sobre o que fazer primeiro.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Você não precisa reunir todos os documentos nem conhecer os termos
              jurídicos para fazer o primeiro contato.
            </p>
          </div>
          <LeadForm
            origem="lp-inventario-sucessoes"
            practiceArea={AREA}
            pageType={PAGE_TYPE}
            whatsappContext={AREA}
            exemploRelato="Ex.: meu pai faleceu e o imóvel ainda está no nome dele."
          />
        </div>
      </section>

      {/* SEÇÃO 3 — COMO O ESCRITÓRIO PODE AJUDAR */}
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Como podemos ajudar"
            title="Do primeiro atendimento à regularização dos bens"
            subtitle="Antes de qualquer medida, analisamos a situação da família, os bens existentes e os documentos disponíveis para definir o caminho mais adequado e acompanhar cada etapa do processo."
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
            eyebrow="Qual caminho é o mais adequado?"
            title="Inventário extrajudicial ou judicial?"
            subtitle="Não existe uma modalidade melhor para todos os casos. A escolha depende das características da sucessão, da existência de consenso entre os herdeiros e do preenchimento dos requisitos legais."
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
            title="O que precisa entrar no inventário?"
            subtitle="A herança pode envolver muito mais do que uma casa ou um apartamento. Bens, direitos e participações precisam ser identificados para que o patrimônio seja corretamente regularizado e partilhado."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bens.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card flex flex-col">
                <Icon className="h-6 w-6 text-brand-gold" aria-hidden />
                <span className="mt-3 font-medium text-navy">{title}</span>
                <span className="mt-1.5 text-sm leading-relaxed text-muted">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTAMENTO E PLANEJAMENTO — os dois assuntos da campanha que a
          página cobria apenas de passagem. Sem afirmar que testamento dispensa
          inventário e sem prometer economia tributária. */}
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Cuidar de quem fica"
            title="Testamento e planejamento sucessório"
            subtitle="Organizar o patrimônio também é uma forma de cuidar de quem fica. A sucessão pode ser planejada em vida, trazendo mais segurança para você e para a sua família."
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="card flex flex-col">
              <ScrollText className="h-7 w-7 text-brand-gold" aria-hidden />
              <h3 className="mt-4 font-serif text-2xl text-navy">Testamento</h3>
              <div className="gold-rule mt-3" />
              <p className="mt-5 font-medium leading-relaxed text-navy">
                Deixe sua vontade registrada dentro dos limites da lei.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                O testamento é a forma de registrar como a pessoa deseja que seu
                patrimônio seja destinado. Ele não afasta o inventário, que continua
                necessário — o que ele faz é orientar a divisão dentro do que a lei
                permite.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                A legislação reserva uma parte da herança aos herdeiros necessários,
                e o testamento dispõe sobre a parcela disponível. Por isso a análise
                começa pela composição da família e do patrimônio, antes da redação.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Também é possível analisar um testamento já existente, quando há
                dúvida sobre sua validade ou sobre como cumpri-lo.
              </p>
            </div>

            <div className="card flex flex-col">
              <ShieldCheck className="h-7 w-7 text-brand-gold" aria-hidden />
              <h3 className="mt-4 font-serif text-2xl text-navy">
                Planejamento sucessório
              </h3>
              <div className="gold-rule mt-3" />
              <p className="mt-5 font-medium leading-relaxed text-navy">
                Organize hoje o patrimônio que será transmitido amanhã.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Planejar a sucessão é organizar, em vida, como o patrimônio será
                transmitido. O objetivo é reduzir a chance de conflito entre quem
                fica e evitar que a família precise decidir tudo no pior momento.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Os caminhos variam conforme o caso: doação com reserva de usufruto,
                testamento, pacto antenupcial, ajustes societários em negócios
                familiares. Nenhum deles serve para toda situação, e a escolha
                depende da composição da família e dos bens.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                A análise é individual. O que funciona para uma família pode ser
                inadequado para outra, inclusive do ponto de vista tributário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — COMO FUNCIONA */}
      <section id="como-funciona" className="section bg-soft">
        <div className="container-site">
          <SectionHeader
            eyebrow="Passo a passo"
            title="Como será o seu atendimento"
            subtitle="Você não precisa saber por onde começar. Primeiro entendemos a situação da sua família; depois, definimos o caminho adequado e acompanhamos as etapas necessárias para regularizar o patrimônio."
          />
          <HowItWorksSteps
            steps={etapas}
            note="Você não precisa reunir todos os documentos antes do primeiro contato. Um relato inicial da situação já permite orientar os primeiros passos."
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              context="inventario-imovel"
              label="Falar com a equipe pelo WhatsApp"
              ctaPosition="como_funciona"
              practiceArea={AREA}
              pageType={PAGE_TYPE}
            />
            <PhoneButton
              variant="outline"
              label={`Ligar ${site.whatsappDisplay}`}
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
            title="Perguntas que costumam surgir após um falecimento"
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

      {/* LOCALIZAÇÃO — a landing não trazia endereço. Escritório com endereço
          visível conta na avaliação de experiência da página no Google Ads, e
          resolve a dúvida de quem prefere atendimento presencial. */}
      <section className="section">
        <div className="container-site">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">
                Onde estamos
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Atendimento presencial e online
              </h2>
              <div className="gold-rule mt-5" />
              <p className="mt-6 font-semibold text-navy">{site.name}</p>
              <p className="mt-1 leading-relaxed text-muted">{site.addressFull}</p>
              <p className="mt-4 leading-relaxed text-muted">{site.hours}</p>
              <p className="mt-4 leading-relaxed text-muted">
                Para quem está em outra cidade, o acompanhamento é feito por
                videochamada e envio de documentos.
              </p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-semibold text-navy hover:text-brand-gold"
              >
                Ver no mapa &rarr;
              </a>
            </div>
            <div className="overflow-hidden rounded-card border border-line shadow-card">
              <iframe
                src={site.mapsEmbedUrl}
                title={`Localização de ${site.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9 — CTA FINAL */}
      <CTABand
        title="Resolver o inventário também é cuidar do que fica."
        text="Cada família tem suas particularidades, seus bens e suas próprias questões. Conte brevemente o que aconteceu e nossa equipe orientará você sobre os próximos passos."
        context="inventario-atrasado"
        practiceArea={AREA}
        pageType={PAGE_TYPE}
        ctaLabel="Conversar com a advogada"
      />
    </>
  );
}
