import type { Metadata } from "next";
import Image from "next/image";
import {
  Banknote,
  CheckCircle2,
  CreditCard,
  FileWarning,
  HeartPulse,
  Landmark,
  Luggage,
  PackageX,
  Phone as PhoneIcon,
  Plane,
  ReceiptText,
  ShieldAlert,
  ShoppingCart,
  Smartphone,
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
const AREA = "direito-do-consumidor";

export const metadata: Metadata = pageMeta({
  title: "Advogado de Direito do Consumidor em Juiz de Fora | Flávia Machado",
  description:
    "Atendimento jurídico para consumidores que enfrentam problemas com compras, bancos, cobranças, companhias aéreas e outros serviços.",
  path: "/direito-do-consumidor",
  rawTitle: true,
  // Página exclusiva de campanha (Google Ads), fora da busca orgânica.
  noindex: true,
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Direito do Consumidor", path: "/direito-do-consumidor" },
];

/** Situações reconhecíveis pelo visitante */
const situacoes = [
  "Comprou pela internet e o produto não chegou",
  "Recebeu produto com defeito e a loja não resolve",
  "Cobrança que você não reconhece na fatura",
  "Caiu em um golpe por PIX, link ou falso atendente",
  "Empréstimo ou serviço que você não contratou",
  "Nome negativado de forma indevida",
  "Voo atrasado, cancelado ou bagagem extraviada",
  "Reembolso prometido que nunca chega",
  "Plano de saúde negou um procedimento",
];

/** Frentes de atuação (viram páginas próprias no futuro) */
const areas = [
  { icon: ShoppingCart, title: "Compras online", text: "Produto que não chega, atraso na entrega, propaganda enganosa e problemas com o vendedor." },
  { icon: Landmark, title: "Problemas bancários", text: "Tarifas indevidas, débitos não reconhecidos e falhas na prestação do serviço." },
  { icon: Smartphone, title: "Golpes por PIX e digitais", text: "Transferências sob fraude, links falsos e golpes com falso atendente do banco." },
  { icon: FileWarning, title: "Negativação indevida", text: "Nome inscrito em cadastro de inadimplentes por dívida quitada ou inexistente." },
  { icon: ReceiptText, title: "Cobrança indevida", text: "Valores cobrados a mais, serviços não solicitados e cobranças após o cancelamento." },
  { icon: CreditCard, title: "Empréstimo não contratado", text: "Contratos e descontos que aparecem sem autorização, inclusive em benefícios." },
  { icon: PackageX, title: "Produto com defeito", text: "Garantia não cumprida, recusa de troca e assistência técnica que não resolve." },
  { icon: Plane, title: "Voo atrasado ou cancelado", text: "Atrasos longos, cancelamentos, overbooking e conexões perdidas." },
  { icon: Luggage, title: "Bagagem extraviada", text: "Bagagem perdida, danificada ou entregue com atraso pela companhia aérea." },
  { icon: HeartPulse, title: "Plano de saúde", text: "Negativa de cobertura, carência aplicada de forma abusiva e reajustes questionáveis." },
];

/** Como o escritório conduz */
const etapas = [
  "Entendemos o problema e o que já foi tentado",
  "Analisamos contratos, comprovantes e mensagens",
  "Indicamos a estratégia mais adequada ao caso",
  "Buscamos solução extrajudicial quando é possível",
  "Atuamos judicialmente quando é necessário",
  "Acompanhamos até o encerramento do caso",
];

const faqs = [
  {
    q: "Vale a pena procurar um advogado para um problema de consumo?",
    a: "Depende do caso. Situações que envolvem prejuízo financeiro, cobrança indevida, negativação ou recusa da empresa em resolver costumam ter caminhos jurídicos possíveis. A análise inicial serve justamente para avaliar se existe fundamento e qual a via mais adequada.",
  },
  {
    q: "Posso pedir indenização por danos morais?",
    a: "Em algumas situações sim. A reparação por danos morais depende da comprovação de que a falha do fornecedor gerou um abalo que ultrapassa o mero aborrecimento. Cada caso é avaliado individualmente, considerando os fatos e as provas disponíveis.",
  },
  {
    q: "Tenho direito a reembolso do que paguei?",
    a: "A devolução de valores é possível em diversas hipóteses previstas no Código de Defesa do Consumidor, como produto não entregue, serviço não prestado ou cobrança indevida. A forma e o valor dependem da situação concreta e da documentação.",
  },
  {
    q: "O banco responde por golpe ou fraude que sofri?",
    a: "A responsabilidade das instituições financeiras por fraudes é analisada caso a caso, considerando as circunstâncias da operação e as falhas de segurança envolvidas. É importante reunir comprovantes, protocolos e registros das comunicações.",
  },
  {
    q: "Meu voo atrasou ou foi cancelado. O que fazer?",
    a: "Guarde o cartão de embarque, comprovantes de gastos e os comunicados da companhia. Conforme o tempo de espera e o prejuízo causado, existem providências e pedidos que podem ser avaliados juridicamente.",
  },
  {
    q: "Meu nome foi negativado injustamente. Como resolver?",
    a: "É possível questionar a inscrição indevida e buscar a retirada do apontamento, além de avaliar eventual reparação. O primeiro passo é identificar a origem da dívida e reunir os documentos que demonstrem a irregularidade.",
  },
  {
    q: "Quais documentos preciso separar?",
    a: "O que estiver ao seu alcance: comprovantes de pagamento, contratos, notas fiscais, prints de conversas, protocolos de atendimento e e-mails trocados com a empresa. Mesmo sem tudo isso, é possível iniciar a conversa.",
  },
  {
    q: "Como funciona a análise do caso?",
    a: "Você relata a situação, a equipe verifica os documentos disponíveis e avalia os caminhos possíveis. A partir dessa análise, indicamos se cabe tentativa de solução direta com a empresa ou se a via judicial é mais adequada.",
  },
  {
    q: "O atendimento pode ser feito de outra cidade?",
    a: "Sim. O escritório atende presencialmente em Juiz de Fora e também de forma online, o que permite acompanhar casos de pessoas em outras localidades.",
  },
];

export default function DireitoDoConsumidorPage() {
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
            <a
              href={`tel:+${site.whatsappNumber}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand-gold sm:hidden"
            >
              <PhoneIcon className="h-[18px] w-[18px]" aria-hidden />
              Ligar
            </a>
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

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="container-site relative grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <span className="eyebrow bg-white/10 text-brand-gold">
              Direito do Consumidor
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              Teve problemas com uma compra, banco, companhia aérea ou outro
              serviço?
            </h1>
            <p className="mt-5 font-serif text-2xl text-brand-gold sm:text-3xl">
              Você não precisa enfrentar isso sozinho.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Dependendo da situação, você pode ter direito à reparação dos
              prejuízos sofridos. Nossa equipe analisa seu caso para indicar o
              melhor caminho jurídico.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                context={AREA}
                label="Quero analisar meu caso"
                ctaPosition="hero"
                practiceArea={AREA}
                pageType={PAGE_TYPE}
              />
              <a href="#como-ajudamos" className="btn-ghost">
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

          {/* Retrato da equipe */}
          <div className="self-center lg:col-span-5">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand-gold/20 blur-2xl" />
              <div className="overflow-hidden rounded-[22px] shadow-xl ring-1 ring-white/15">
                <Image
                  src="/equipe/equipe-duas.jpg"
                  alt="Dra. Flávia Vieira Machado e Dra. Marina de Assis Siqueira Brinati"
                  width={1500}
                  height={1001}
                  priority
                  className="aspect-[3/2] h-full w-full object-cover object-center"
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

      {/* SITUAÇÕES */}
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Talvez você se reconheça aqui"
            title="Está passando por alguma destas situações?"
            subtitle="São os problemas mais comuns entre as pessoas que procuram o escritório. Se alguma delas parece com a sua, existe um caminho jurídico a avaliar."
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

      {/* GUARDE AS PROVAS */}
      <section className="section bg-succession-soft">
        <div className="container-site mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">
            Antes de tudo
          </p>
          <h2 className="mt-3 text-3xl">Guarde tudo o que você tiver</h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="lede mt-5">
            Comprovantes, contratos, notas fiscais, prints de conversas, protocolos
            de atendimento e e-mails trocados com a empresa são o que sustenta o seu
            caso.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Se você não tem tudo isso, não tem problema. A equipe orienta o que
            reunir depois — o primeiro contato não exige documentação completa.
          </p>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="section">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">
              Fale com a equipe
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Prefere que a gente entre em contato?
            </h2>
            <div className="gold-rule mt-5" />
            <p className="lede mt-5">
              Deixe seu nome e WhatsApp com um resumo do que aconteceu. A equipe
              retorna para entender o caso e indicar os próximos passos.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Você não precisa saber termos jurídicos nem ter todos os documentos
              em mãos para esse primeiro contato.
            </p>
          </div>
          <LeadForm
            origem="lp-direito-do-consumidor"
            practiceArea={AREA}
            pageType={PAGE_TYPE}
            whatsappContext={AREA}
          />
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section className="section bg-soft">
        <div className="container-site">
          <SectionHeader
            eyebrow="Onde atuamos"
            title="Problemas de consumo que o escritório acompanha"
            subtitle="Cada situação tem regras e prazos próprios. A análise inicial identifica o que se aplica ao seu caso."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                  <Icon className="h-6 w-6 text-brand-gold" aria-hidden />
                </div>
                <h3 className="mt-4 font-serif text-lg text-navy">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              context="consumidor-banco"
              label="Meu caso é com banco ou golpe"
              ctaPosition="areas"
              practiceArea={AREA}
              pageType={PAGE_TYPE}
            />
            <WhatsAppButton
              context="consumidor-compra"
              label="Meu caso é com uma compra"
              ctaPosition="areas"
              practiceArea={AREA}
              pageType={PAGE_TYPE}
              variant="outline"
            />
          </div>
        </div>
      </section>

      {/* COMO AJUDAMOS */}
      <section id="como-ajudamos" className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Passo a passo"
            title="Como funciona o atendimento"
            subtitle="Um processo organizado, que começa entendendo o problema e vai até o encerramento do caso."
          />
          <HowItWorksSteps
            steps={etapas}
            note="Nem todo caso precisa virar processo. Quando existe caminho para resolver diretamente com a empresa, ele é avaliado primeiro."
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              context={AREA}
              label="Falar com a equipe pelo WhatsApp"
              ctaPosition="como_ajudamos"
              practiceArea={AREA}
              pageType={PAGE_TYPE}
            />
            <a href={`tel:+${site.whatsappNumber}`} className="btn-outline">
              <PhoneIcon className="h-[18px] w-[18px]" aria-hidden />
              Ligar {site.whatsappDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* VOO — destaque, alta demanda em campanha */}
      <section className="section bg-navy">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow bg-white/10 text-brand-gold">
              Transporte aéreo
            </span>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">
              Problemas com voo e bagagem
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              Atraso prolongado, cancelamento, overbooking, conexão perdida e
              bagagem extraviada ou danificada têm tratamento próprio e prazos a
              observar.
            </p>
            <p className="mt-4 leading-relaxed text-white/65">
              Guarde o cartão de embarque, os comunicados da companhia e os
              comprovantes de gastos que você teve por causa do problema.
            </p>
            <div className="mt-8">
              <WhatsAppButton
                context="consumidor-voo"
                label="Tive problema com voo ou bagagem"
                ctaPosition="voo"
                practiceArea={AREA}
                pageType={PAGE_TYPE}
              />
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -left-4 -top-4 h-24 w-24 rounded-full bg-brand-gold/20 blur-2xl" />
            <div className="overflow-hidden rounded-[22px] shadow-xl ring-1 ring-white/15">
              <Image
                src="/lp/atraso-voo.jpg"
                alt="Passageiro aguardando no aeroporto ao lado da mala, após atraso de voo"
                width={800}
                height={533}
                className="aspect-[3/2] h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="container-site mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Plane, t: "Voo atrasado" },
            { icon: ShieldAlert, t: "Voo cancelado" },
            { icon: Luggage, t: "Bagagem extraviada" },
            { icon: Banknote, t: "Reembolso negado" },
          ].map(({ icon: Icon, t }) => (
            <div
              key={t}
              className="flex items-center gap-3 rounded-card border border-white/15 bg-white/5 px-5 py-4"
            >
              <Icon className="h-6 w-6 shrink-0 text-brand-gold" aria-hidden />
              <span className="font-medium text-white">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Dúvidas frequentes"
            title="Perguntas que costumam surgir"
          />
          <FAQAccordion items={faqs} practiceArea={AREA} />
        </div>
      </section>

      {/* EQUIPE */}
      <section className="section bg-soft">
        <div className="container-site">
          <SectionHeader
            eyebrow="Nossa equipe"
            title="Quem vai cuidar do seu caso"
            subtitle="Atuação técnica, escuta qualificada e acompanhamento em cada etapa."
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {team.map((t) => (
              <TeamCard key={t.oab} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTABand
        title="Cada problema de consumo tem uma história e um prejuízo diferente."
        text="Conte o que aconteceu. A análise inicial ajuda a entender seus direitos e o caminho mais adequado para o seu caso."
        context={AREA}
        practiceArea={AREA}
        pageType={PAGE_TYPE}
        ctaLabel="Quero analisar meu caso"
      />
    </>
  );
}
