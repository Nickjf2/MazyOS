import Link from "next/link";
import Image from "next/image";
import {
  HeartPulse,
  Scale,
  ScrollText,
  ShieldCheck,
  MessageSquare,
  MapPin,
  Lock,
  Users,
  FileText,
  Zap,
  HeartHandshake,
  Wallet,
  Clock,
  ArrowRight,
} from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PracticeCard } from "@/components/ui/PracticeCard";
import { TeamCard } from "@/components/ui/TeamCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABand } from "@/components/ui/CTABand";
import { SchemaMarkup } from "@/components/tracking/SchemaMarkup";
import { faqSchema } from "@/lib/schema";
import { site, team } from "@/lib/site";

const homeFaqs = [
  {
    q: "O escritório atende fora de Juiz de Fora?",
    a: "Sim. O atendimento é presencial em Juiz de Fora e também online, quando juridicamente viável, para pessoas de outras cidades e estados.",
  },
  {
    q: "O primeiro contato é sigiloso?",
    a: "Sim. Todo o atendimento é conduzido com sigilo e discrição, desde a primeira mensagem.",
  },
  {
    q: "Preciso ter todos os documentos?",
    a: "Não. Um resumo inicial já permite entender o caminho mais adequado. A equipe orienta quais documentos podem ajudar depois.",
  },
  {
    q: "O atendimento pode ser online?",
    a: "Sim. Você pode ser atendido de forma online, com a mesma atenção e sigilo do atendimento presencial.",
  },
  {
    q: "Como saber qual área corresponde ao meu caso?",
    a: "Se tiver dúvida, basta enviar um resumo da situação. A equipe indica a área e os próximos passos possíveis.",
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={faqSchema(homeFaqs)} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-soft blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-0 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="container-site relative grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-6">
            <span className="eyebrow bg-soft text-navy">
              Atendimento humano e sigiloso • {site.city} e online
            </span>
            <h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-[3.4rem]">
              Orientação jurídica clara para decisões urgentes e delicadas.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
              Atendimento personalizado em Direito da Saúde, Família, Sucessões,
              Direito da Mulher e Direitos LGBTQIA+.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              Nossa equipe atua com escuta qualificada, técnica jurídica e sigilo
              para orientar pessoas e famílias em momentos que exigem segurança e
              clareza.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                label="Falar com a equipe"
                ctaPosition="hero"
                pageType="home"
              />
              <Link href="#areas" className="btn-outline">
                Conhecer áreas de atuação
              </Link>
            </div>
          </div>

          {/* Retrato da equipe */}
          <div className="self-center lg:col-span-6">
            <div className="relative mx-auto max-w-2xl lg:max-w-none">
              <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand-gold/20 blur-2xl" />
              <div className="overflow-hidden rounded-[22px] ring-1 ring-line shadow-xl">
                <Image
                  src="/equipe/equipe-duas.jpg"
                  alt="Dra. Flávia Vieira Machado e Dra. Marina de Assis Siqueira Brinati"
                  width={1500}
                  height={1001}
                  priority
                  className="aspect-[3/2] h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-line bg-white/95 px-5 py-3 shadow-lg backdrop-blur sm:left-auto sm:right-6 sm:max-w-[16rem]">
                <p className="font-serif text-lg leading-tight text-navy">
                  Dra. Flávia e Dra. Marina
                </p>
                <p className="mt-0.5 text-xs text-muted">
                  Flávia Machado Advocacia · Juiz de Fora
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIAÇÃO DE CONFLITOS */}
      <section className="section bg-navy">
        <div className="container-site">
          <SectionHeader
            inverted
            eyebrow="Mediação de conflitos"
            title="Resolver sem judicializar, sempre que possível"
            subtitle="Somos capacitadas para mediar e prevenir conflitos de forma eficaz e célere, em que as partes se sentem ouvidas e satisfeitas — sem depender de um trâmite processual lento que, muitas vezes, não traz o retorno que se espera."
          />

          <p className="mx-auto -mt-6 mb-10 max-w-2xl text-center text-white/70">
            A mediação pode acontecer em conflitos familiares, em relações entre
            patrão e empregado, fornecedor e consumidor, entre outras situações.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: HeartHandshake,
                title: "Menor desgaste",
                text: "Diálogo no lugar de audiências, conflitos e recursos que, ao longo do tempo, afetam até o estado emocional das partes.",
              },
              {
                icon: Wallet,
                title: "Menor custo",
                text: "Uma solução negociada costuma custar bem menos do que um processo judicial longo.",
              },
              {
                icon: Clock,
                title: "Menor tempo",
                text: "Sem a lentidão tradicional do processo, a resolução chega de forma mais rápida e objetiva.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-navy">
                  <Icon className="h-6 w-6 text-brand-gold" aria-hidden />
                </div>
                <h3 className="mt-4 font-serif text-xl text-navy">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              context="mediacao"
              label="Falar sobre mediação"
              ctaPosition="mediacao"
              pageType="home"
            />
            <Link href="/mediacao" className="btn-ghost">
              Conhecer a mediação
            </Link>
          </div>
        </div>
      </section>

      {/* CARDS DE TRIAGEM */}
      <section id="areas" className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Como podemos ajudar?"
            title="Encontre a orientação certa para o seu caso"
            subtitle="Escolha a situação mais próxima do seu caso para encontrar orientações específicas."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <PracticeCard
              icon={HeartPulse}
              title="Plano de saúde negou tratamento ou aumentou muito?"
              text="Orientação sobre negativas de cirurgia, medicamentos, terapias, home care e reajustes abusivos."
              href="/areas/direito-da-saude"
              cta="Ver Direito da Saúde"
            />
            <PracticeCard
              icon={Scale}
              title="Divórcio, guarda, pensão ou união estável?"
              text="Atuação em conflitos familiares com sigilo, estratégia e busca por soluções viáveis."
              href="/areas/direito-de-familia"
              cta="Ver Direito de Família"
            />
            <PracticeCard
              icon={ScrollText}
              title="Inventário, herança ou planejamento sucessório?"
              text="Organização jurídica para partilha de bens, inventários e proteção patrimonial familiar."
              href="/areas/inventario"
              cta="Ver Sucessões"
            />
            <PracticeCard
              icon={ShieldCheck}
              title="Direitos da Mulher e LGBTQIA+"
              text="Atendimento respeitoso e técnico em demandas sensíveis, familiares, patrimoniais e de proteção."
              href="/areas/direito-da-mulher"
              cta="Ver áreas sensíveis"
            />
          </div>
        </div>
      </section>

      {/* FAIXA DE CONFIANÇA */}
      <section className="bg-navy py-14 text-white">
        <div className="container-site">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.14em] text-brand-gold">
            Atuação jurídica com clareza, sigilo e responsabilidade
          </p>
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-5">
            {[
              { icon: MapPin, t: "Atendimento em Juiz de Fora" },
              { icon: MessageSquare, t: "Atendimento online" },
              { icon: Users, t: "Equipe experiente" },
              { icon: Lock, t: "Áreas sensíveis e urgentes" },
              { icon: Zap, t: "Resposta ágil e assertiva" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="flex flex-col items-center gap-3">
                <Icon className="h-7 w-7 text-brand-gold" aria-hidden />
                <span className="text-sm text-white/80">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO DIREITO DA SAÚDE */}
      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow bg-health-soft text-health-accent">
              Quando a saúde não pode esperar
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl">
              Direito da Saúde e Plano de Saúde
            </h2>
            <div className="gold-rule mt-5" />
            <p className="lede mt-5">
              Atuação em negativas de cobertura, cirurgias, exames, medicamentos de
              alto custo, home care, terapias para TEA e reajustes abusivos.
            </p>
            <div className="mt-7">
              <Link
                href="/areas/direito-da-saude"
                className="inline-flex items-center gap-2 font-semibold text-navy hover:text-brand-gold"
              >
                Ver orientações sobre Direito da Saúde
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { t: "Negativa de cobertura", href: "/areas/negativa-plano-saude" },
              { t: "Reajuste abusivo", href: "/areas/reajuste-abusivo-plano-saude" },
              { t: "TEA, ABA e terapias", href: "/areas/tea-aba-plano-saude" },
              { t: "Medicamentos de alto custo", href: "/areas/medicamentos-alto-custo" },
              { t: "Home care", href: "/areas/home-care" },
              { t: "Cirurgias e procedimentos", href: "/areas/negativa-plano-saude" },
            ].map(({ t, href }) => (
              <Link
                key={t}
                href={href}
                className="card-hover flex items-center justify-between gap-2 py-4"
              >
                <span className="font-medium text-navy">{t}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-brand-gold" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO FAMÍLIA E SUCESSÕES */}
      <section className="section bg-navy">
        <div className="container-site">
          <SectionHeader
            inverted
            eyebrow="Família e Sucessões"
            title="Família e sucessões com clareza, sigilo e estratégia"
            subtitle="Orientação jurídica em divórcio, guarda, pensão, união estável, inventário e planejamento sucessório, com atenção aos aspectos humanos e patrimoniais de cada caso."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <PracticeCard icon={Scale} title="Divórcio" href="/areas/direito-de-familia" />
            <PracticeCard icon={Users} title="Guarda e pensão" href="/areas/direito-de-familia" />
            <PracticeCard icon={ScrollText} title="Inventário" href="/areas/inventario" />
            <PracticeCard
              icon={FileText}
              title="Planejamento sucessório"
              href="/areas/planejamento-sucessorio"
            />
          </div>
        </div>
      </section>

      {/* BLOCO MULHER E LGBTQIA+ */}
      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow bg-woman-soft text-woman-accent">Demandas sensíveis</span>
            <h2 className="mt-5 text-3xl sm:text-4xl">
              Atendimento jurídico respeitoso para demandas sensíveis
            </h2>
            <div className="gold-rule mt-5" />
            <p className="lede mt-5">
              Acolhimento, sigilo e técnica em questões relacionadas aos direitos da
              mulher, família, patrimônio, sucessões, violência, discriminação e
              direitos LGBTQIA+.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/areas/direito-da-mulher" className="btn-navy">
                Direito da Mulher
              </Link>
              <Link href="/areas/direitos-lgbtqia" className="btn-outline">
                Direitos LGBTQIA+
              </Link>
            </div>
          </div>
          <div className="rounded-card border border-line bg-white p-8 shadow-card">
            <p className="font-serif text-xl text-navy">
              “Você não precisa enfrentar uma situação delicada sem orientação.”
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              O primeiro contato pode ser feito de forma discreta. Você pode enviar
              apenas um resumo inicial e nossa equipe orientará os próximos passos
              possíveis.
            </p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section bg-navy">
        <div className="container-site">
          <SectionHeader
            inverted
            eyebrow="Atendimento inicial"
            title="Como funciona o atendimento inicial"
          />
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Você entra em contato",
              "A equipe entende a situação",
              "Indicamos quais documentos podem ajudar",
              "Orientamos os próximos passos jurídicos",
            ].map((step, i) => (
              <div key={step} className="rounded-card border border-line bg-white p-6">
                <span className="font-serif text-3xl text-brand-gold">
                  0{i + 1}
                </span>
                <p className="mt-3 text-ink">{step}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-2xl text-center">
            <p className="text-white/70">
              Você não precisa ter todos os documentos no primeiro contato. Um resumo
              inicial já permite entender o caminho mais adequado.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppButton label="Enviar mensagem no WhatsApp" ctaPosition="how_it_works" pageType="home" />
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Nossa equipe"
            title="Nossa equipe"
            subtitle="Atuação técnica, escuta qualificada e experiência em demandas sensíveis."
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {team.map((t) => (
              <TeamCard key={t.oab} {...t} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/equipe" className="font-semibold text-navy hover:text-brand-gold">
              Conhecer a equipe completa →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-soft">
        <div className="container-site">
          <SectionHeader eyebrow="Dúvidas frequentes" title="Perguntas frequentes" />
          <FAQAccordion items={homeFaqs} practiceArea="home" />
        </div>
      </section>

      {/* CTA FINAL */}
      <CTABand
        title="Precisa de orientação jurídica?"
        text="Envie uma mensagem para a equipe e conte, de forma breve, o que está acontecendo. O primeiro passo é entender sua situação com clareza."
        pageType="home"
      />
    </>
  );
}
