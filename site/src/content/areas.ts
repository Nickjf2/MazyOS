// Conteúdo das páginas de área / landing pages, tipado e centralizado.
// Renderizado pelo template em /areas/[slug]/page.tsx. (MASTER §11–§18)

export type ThemeKey =
  | "health"
  | "reajuste"
  | "woman"
  | "lgbt"
  | "succession"
  | "family";

export interface AreaFaq {
  q: string;
  a: string;
}

export interface Area {
  slug: string;
  theme: ThemeKey;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  /** label do botão de WhatsApp no hero (default: "Falar com a equipe") */
  ctaLabel?: string;
  /** texto curto abaixo do CTA do hero */
  heroMicrocopy?: string;
  /** parágrafo introdutório opcional após o hero */
  intro?: string;
  /** "Situações atendidas" / "Dores" */
  problemsTitle: string;
  problems: { title: string; text?: string }[];
  /** seção-destaque adicional, no estilo dos blocos da home (ex.: Direito Médico) */
  spotlight?: {
    eyebrow: string;
    title: string;
    text: string;
    items: { title: string; text?: string }[];
  };
  /** seção de Direito Médico com dois grupos (pacientes / profissionais) */
  medicalLaw?: {
    eyebrow: string;
    title: string;
    subtitle: string;
    groups: {
      heading: string;
      lead: string;
      items: { title: string; text: string }[];
    }[];
  };
  /** bloco explicativo opcional */
  explainer?: { title: string; text: string };
  /** "Como funciona" */
  steps: string[];
  stepsNote?: string;
  /** documentos úteis */
  documents?: { title: string; note?: string; items: string[] };
  faqs: AreaFaq[];
  /** texto do CTA final */
  finalCtaTitle: string;
  finalCtaText: string;
}

const COMMON_FINAL = {
  finalCtaTitle: "Precisa de orientação jurídica?",
  finalCtaText:
    "Envie uma mensagem para a equipe e conte, de forma breve, o que está acontecendo. O primeiro passo é entender sua situação com clareza.",
};

export const areas: Record<string, Area> = {
  "direito-da-saude": {
    slug: "direito-da-saude",
    theme: "health",
    badge: "Direito da Saúde",
    metaTitle: "Advogado de Direito da Saúde e Plano de Saúde em Juiz de Fora",
    metaDescription:
      "Orientação jurídica para negativas de cobertura, cirurgias, exames, medicamentos, terapias, home care e reajustes abusivos de plano de saúde em Juiz de Fora e online.",
    h1: "Orientação jurídica para garantir o seu direito à saúde.",
    subtitle:
      "Atuação especializada em negativas de cobertura, cirurgias, medicamentos, terapias, home care, reajustes abusivos e demais conflitos com planos de saúde.",
    ctaLabel: "Analisar meu caso",
    heroMicrocopy:
      "Atendimento humanizado e especializado em Direito da Saúde. Presencial em Juiz de Fora e online para todo o país.",
    intro:
      "Atuamos na defesa dos direitos de pacientes e familiares em conflitos com planos de saúde, incluindo negativas de cobertura, fornecimento de medicamentos, terapias, home care, cirurgias, exames e reajustes abusivos.",
    problemsTitle: "Situações que atendemos",
    problems: [
      { title: "Negativa de cobertura" },
      { title: "Reajustes abusivos" },
      { title: "Autismo (TEA), ABA e terapias" },
      { title: "Medicamentos de alto custo e importados" },
      { title: "Home Care" },
      { title: "Cirurgias, exames e procedimentos" },
      { title: "Cancelamento e exclusão de beneficiários" },
      { title: "Internação psiquiátrica e saúde mental" },
      { title: "Tratamentos especializados negados pelo plano" },
    ],
    medicalLaw: {
      eyebrow: "Direito Médico",
      title: "Direito Médico e Responsabilidade na Saúde",
      subtitle:
        "Questões envolvendo assistência à saúde exigem análise técnica, conhecimento jurídico especializado e avaliação criteriosa das evidências. Atuamos tanto na defesa dos direitos dos pacientes quanto na assessoria e defesa de profissionais e instituições de saúde.",
      groups: [
        {
          heading: "Para pacientes e familiares",
          lead: "Seus direitos foram violados durante um tratamento? Analisamos situações envolvendo possíveis falhas na prestação de serviços de saúde, sempre com avaliação técnica de prontuários, documentos e demais evidências do caso.",
          items: [
            {
              title: "Erro médico e hospitalar",
              text: "Análise de situações que envolvam possíveis falhas em procedimentos, tratamentos, diagnósticos ou atendimento hospitalar.",
            },
            {
              title: "Indenizações por danos à saúde",
              text: "Atuação em pedidos de reparação por danos materiais, morais e estéticos decorrentes de atendimentos e procedimentos médicos.",
            },
            {
              title: "Falha na assistência e no atendimento",
              text: "Avaliação de casos relacionados a atrasos, omissões, falhas de acompanhamento e outras situações que possam gerar prejuízos ao paciente.",
            },
            {
              title: "Análise de prontuários e documentos médicos",
              text: "Estudo técnico da documentação médica para identificação de direitos e viabilidade jurídica da demanda.",
            },
          ],
        },
        {
          heading: "Para médicos, clínicas e hospitais",
          lead: "Defesa jurídica estratégica para profissionais e instituições de saúde, com atuação preventiva e contenciosa voltada à proteção da atividade profissional e à gestão de riscos jurídicos na área da saúde.",
          items: [
            {
              title: "Defesa de médicos e profissionais da saúde",
              text: "Acompanhamento em processos judiciais, procedimentos éticos, sindicâncias e demandas indenizatórias.",
            },
            {
              title: "Defesa de hospitais e clínicas",
              text: "Assessoria jurídica para instituições de saúde em ações de responsabilidade civil, gestão de riscos e litígios.",
            },
            {
              title: "Consentimento informado e documentação médica",
              text: "Orientação sobre prontuários, termos de consentimento e boas práticas para maior segurança jurídica.",
            },
            {
              title: "Responsabilidade civil na saúde",
              text: "Atuação na defesa de demandas indenizatórias envolvendo alegações de erro médico e responsabilidade hospitalar.",
            },
          ],
        },
      ],
    },
    steps: [
      "Você conta o que aconteceu",
      "A equipe orienta quais documentos enviar",
      "O caso é analisado juridicamente",
      "São indicados os próximos passos",
    ],
    documents: {
      title: "Documentos que auxiliam na análise",
      note: "Não tem todos os documentos? Entre em contato mesmo assim.",
      items: [
        "Prescrição ou relatório médico",
        "Negativa da operadora",
        "Carteirinha do plano e contrato",
        "Exames e laudos",
        "Comprovantes de pagamento",
        "Prontuário médico",
      ],
    },
    faqs: [
      {
        q: "O plano de saúde pode negar um tratamento indicado pelo meu médico?",
        a: "A operadora pode recusar coberturas em determinadas hipóteses contratuais, mas a negativa nem sempre é legítima. Quando existe prescrição médica fundamentada e o tratamento é necessário, a recusa pode ser questionada — inclusive tratamentos fora do Rol da ANS, conforme a situação clínica e a jurisprudência aplicável.",
      },
      {
        q: "Em casos de urgência, é possível conseguir uma decisão rápida da Justiça?",
        a: "Sim. Em situações de risco à saúde ou de necessidade imediata de tratamento, é possível ajuizar ação com pedido de tutela de urgência (liminar) para que o plano de saúde seja obrigado a autorizar e fornecer a cobertura devida. Quando presentes os requisitos legais e a documentação médica adequada, o Poder Judiciário pode determinar o cumprimento da obrigação em prazo reduzido, sob pena de multa e demais medidas cabíveis em caso de descumprimento. A viabilidade da medida depende da análise individual de cada caso.",
      },
      {
        q: "Preciso ter a negativa do plano por escrito para buscar orientação?",
        a: "A negativa por escrito facilita bastante a análise, porém não é indispensável para o primeiro contato. Existem outras formas de demonstrar a recusa de cobertura, e a equipe orienta quais documentos reunir conforme o seu caso.",
      },
      {
        q: "O escritório também atua em erro médico e defesa de profissionais de saúde?",
        a: "Sim. Além das ações contra planos de saúde, o escritório atua em Direito Médico, tanto na defesa de pacientes em casos de erro médico quanto na defesa de médicos, clínicas e hospitais em processos éticos, cíveis e administrativos.",
      },
      {
        q: "O atendimento pode ser feito fora de Juiz de Fora e de forma online?",
        a: "Sim. O atendimento é presencial em Juiz de Fora e também online, quando juridicamente viável, para pessoas de outras cidades e estados, com o mesmo sigilo e cuidado.",
      },
      {
        q: "Buscar a Justiça contra o plano pode gerar o cancelamento do meu contrato?",
        a: "Buscar orientação e exercer um direito não é, por si só, motivo legítimo para cancelamento. Cada situação contratual é avaliada de forma individual para orientar com segurança sobre eventuais riscos.",
      },
    ],
    ...COMMON_FINAL,
  },

  "negativa-plano-saude": {
    slug: "negativa-plano-saude",
    theme: "health",
    badge: "Negativa de Plano de Saúde",
    metaTitle: "Advogado para Negativa de Plano de Saúde em Juiz de Fora",
    metaDescription:
      "Plano de saúde negou cirurgia, exame, medicamento ou terapia? A negativa pode ser analisada juridicamente. Atendimento sigiloso em Juiz de Fora e online.",
    h1: "Plano de saúde negou seu tratamento?",
    subtitle:
      "Negativas de cirurgia, exames, internações, medicamentos ou terapias podem ser analisadas juridicamente.",
    heroMicrocopy: "Atendimento sigiloso em Juiz de Fora e online.",
    problemsTitle: "Situações atendidas",
    problems: [
      { title: "Negativa de procedimentos e cirurgias" },
      { title: "Tratamentos fora do Rol da ANS" },
      { title: "Situações de urgência ou risco à saúde" },
      { title: "Medicamentos de alto custo e oncológicos" },
      { title: "Terapias contínuas" },
      { title: "Próteses e órteses" },
      { title: "Home care" },
      { title: "Exames negados" },
    ],
    steps: [
      "Você conta o que aconteceu",
      "A equipe orienta quais documentos enviar",
      "O caso é analisado juridicamente",
      "São indicados os próximos passos",
    ],
    documents: {
      title: "Documentos que auxiliam na análise",
      note: "Não tem todos os documentos? Entre em contato mesmo assim.",
      items: [
        "Prescrição ou relatório médico",
        "Negativa da operadora",
        "Carteirinha do plano",
        "Contrato",
        "Exames e laudos",
        "Comprovantes de pagamento",
      ],
    },
    faqs: [
      {
        q: "Quanto tempo pode levar uma análise?",
        a: "Depende da complexidade do caso e dos documentos disponíveis. Em situações urgentes, a análise costuma ser priorizada.",
      },
      {
        q: "Preciso ter a negativa por escrito?",
        a: "A negativa por escrito ajuda bastante, mas é possível orientar quais outros documentos podem comprovar a recusa de cobertura.",
      },
      {
        q: "Posso falar pelo WhatsApp?",
        a: "Sim. Você pode enviar um resumo inicial pelo WhatsApp, de forma sigilosa.",
      },
      {
        q: "O plano pode cancelar meu contrato se eu buscar orientação?",
        a: "Buscar orientação jurídica é um direito. Cada situação contratual é avaliada individualmente para orientar com segurança.",
      },
      {
        q: "O que fazer se o caso for urgente?",
        a: "Em situações urgentes, a via judicial pode ser analisada como uma alternativa para buscar uma decisão rápida.",
      },
    ],
    ...COMMON_FINAL,
  },

  "reajuste-abusivo-plano-saude": {
    slug: "reajuste-abusivo-plano-saude",
    theme: "reajuste",
    badge: "Reajuste de Plano de Saúde",
    metaTitle: "Reajuste Abusivo de Plano de Saúde | Flávia Machado Advogados",
    metaDescription:
      "Plano de saúde aumentou muito a mensalidade? Reajustes por faixa etária, contratos antigos ou aumentos sucessivos podem ser analisados juridicamente.",
    h1: "Seu plano de saúde aumentou muito a mensalidade?",
    subtitle:
      "Em algumas situações, reajustes por faixa etária, contratos antigos ou aumentos sucessivos podem ser analisados juridicamente.",
    heroMicrocopy: "Atendimento sigiloso em Juiz de Fora e online.",
    problemsTitle: "Quando procurar orientação",
    problems: [
      { title: "Aumento muito acima do esperado" },
      { title: "Reajuste elevado após mudança de faixa etária" },
      { title: "Plano ficou difícil de pagar" },
      { title: "Aumento sem explicação clara" },
      { title: "Reajustes sucessivos" },
      { title: "Contrato antigo com mensalidade desproporcional" },
    ],
    explainer: {
      title: "Quando um reajuste pode ser questionado?",
      text: "Cada caso depende da análise do contrato, da faixa etária, da operadora, do tipo de plano e dos índices aplicados. Quando o aumento é desproporcional ou pouco transparente, pode ser necessário avaliar juridicamente a situação.",
    },
    steps: [
      "Você descreve o aumento que recebeu",
      "A equipe orienta quais documentos enviar",
      "O contrato e os índices são analisados",
      "São indicados os próximos passos possíveis",
    ],
    documents: {
      title: "Documentos que auxiliam na análise",
      items: [
        "Boletos antigos e recentes",
        "Contrato",
        "Carteirinha",
        "Comunicado de reajuste",
        "Comprovantes de pagamento",
      ],
    },
    faqs: [
      {
        q: "Todo reajuste é abusivo?",
        a: "Não. Existem reajustes legítimos. A análise verifica se o aumento é proporcional, transparente e compatível com o contrato e as regras aplicáveis.",
      },
      {
        q: "O aumento após 59 anos pode ser questionado?",
        a: "Reajustes por faixa etária seguem regras específicas. Em alguns casos, aumentos desproporcionais podem ser avaliados juridicamente.",
      },
      {
        q: "Preciso continuar pagando?",
        a: "Cada situação é diferente. É importante avaliar o caso antes de tomar decisões sobre pagamento para evitar riscos contratuais.",
      },
      {
        q: "Posso pedir revisão dos valores?",
        a: "Dependendo da análise do contrato e dos índices, pode ser possível buscar a revisão dos valores.",
      },
      {
        q: "Atendem contratos coletivos?",
        a: "Sim. Contratos coletivos e por adesão também podem ser analisados, considerando suas particularidades.",
      },
    ],
    ...COMMON_FINAL,
  },

  "tea-aba-plano-saude": {
    slug: "tea-aba-plano-saude",
    theme: "health",
    badge: "TEA, ABA e Terapias",
    metaTitle: "Negativa de Terapia para TEA e ABA | Flávia Machado Advogados",
    metaDescription:
      "Plano limitou ou negou terapias para TEA? Negativa ou limitação de ABA, fonoaudiologia, terapia ocupacional e fisioterapia pode ser analisada juridicamente.",
    h1: "O plano limitou ou negou terapias para TEA?",
    subtitle:
      "A negativa ou limitação de sessões de ABA, fonoaudiologia, terapia ocupacional, fisioterapia e outras terapias pode ser analisada juridicamente.",
    heroMicrocopy: "Atendimento acolhedor e sigiloso, em Juiz de Fora e online.",
    intro:
      "Sabemos o quanto cada sessão de terapia faz diferença no desenvolvimento. Orientamos famílias, mães, pais e responsáveis quando o plano de saúde limita ou nega o tratamento indicado.",
    problemsTitle: "Situações que atendemos",
    problems: [
      { title: "Sessões reduzidas" },
      { title: "Coparticipação abusiva" },
      { title: "Rede credenciada insuficiente" },
      { title: "Negativa de ABA" },
      { title: "Limitação de fonoaudiologia" },
      { title: "Negativa de terapia ocupacional" },
      { title: "Demora na autorização" },
    ],
    steps: [
      "Você conta a situação do tratamento",
      "A equipe orienta quais documentos ajudam",
      "O caso é analisado juridicamente",
      "São indicados os próximos passos possíveis",
    ],
    documents: {
      title: "Documentos que auxiliam na análise",
      note: "Não tem todos os documentos? Fale com a equipe mesmo assim.",
      items: [
        "Relatório e prescrição médica",
        "Laudo com indicação das terapias",
        "Negativa ou limitação da operadora",
        "Carteirinha do plano",
        "Contrato",
      ],
    },
    faqs: [
      {
        q: "O plano pode limitar o número de sessões?",
        a: "A limitação de sessões em terapias indicadas por prescrição médica pode ser questionada em diversos casos. Cada situação é avaliada individualmente.",
      },
      {
        q: "A coparticipação pode ser considerada abusiva?",
        a: "Em algumas situações, a coparticipação elevada pode inviabilizar o tratamento e ser analisada juridicamente.",
      },
      {
        q: "Posso falar pelo WhatsApp?",
        a: "Sim. Você pode enviar um resumo inicial pelo WhatsApp, com acolhimento e sigilo.",
      },
      {
        q: "O atendimento pode ser online?",
        a: "Sim. O atendimento pode ser feito de forma online para famílias de outras cidades.",
      },
    ],
    ...COMMON_FINAL,
  },

  "medicamentos-alto-custo": {
    slug: "medicamentos-alto-custo",
    theme: "health",
    badge: "Medicamentos de Alto Custo",
    metaTitle: "Negativa de Medicamento de Alto Custo | Flávia Machado Advogados",
    metaDescription:
      "Plano negou medicamento de alto custo ou oncológico? A negativa pode ser analisada juridicamente. Atendimento em Juiz de Fora e online.",
    h1: "O plano negou um medicamento de alto custo?",
    subtitle:
      "Negativas de medicamentos de alto custo, oncológicos e de uso contínuo podem ser analisadas juridicamente.",
    heroMicrocopy: "Atendimento sigiloso em Juiz de Fora e online.",
    problemsTitle: "Situações que atendemos",
    problems: [
      { title: "Negativa de medicamento oncológico" },
      { title: "Medicamento fora do Rol da ANS" },
      { title: "Medicamento de uso domiciliar" },
      { title: "Medicamento importado" },
      { title: "Demora na autorização" },
      { title: "Uso contínuo negado" },
    ],
    steps: [
      "Você conta o que aconteceu",
      "A equipe orienta quais documentos enviar",
      "O caso é analisado juridicamente",
      "São indicados os próximos passos",
    ],
    documents: {
      title: "Documentos que auxiliam na análise",
      note: "Não tem todos os documentos? Entre em contato mesmo assim.",
      items: [
        "Prescrição e relatório médico",
        "Negativa da operadora",
        "Carteirinha do plano",
        "Contrato",
        "Laudos e exames",
      ],
    },
    faqs: [
      {
        q: "O plano pode negar medicamento fora do Rol da ANS?",
        a: "A negativa pode ser questionada em diversos casos, especialmente quando há prescrição médica fundamentada. Cada caso é avaliado individualmente.",
      },
      {
        q: "E se o caso for urgente?",
        a: "Em situações urgentes, a via judicial pode ser analisada como alternativa para buscar uma decisão rápida.",
      },
      {
        q: "Atendem medicamento de uso domiciliar?",
        a: "Sim. Medicamentos de uso domiciliar prescritos podem ser analisados conforme o contrato e a situação clínica.",
      },
    ],
    ...COMMON_FINAL,
  },

  "home-care": {
    slug: "home-care",
    theme: "health",
    badge: "Home Care",
    metaTitle: "Negativa de Home Care pelo Plano de Saúde | Flávia Machado",
    metaDescription:
      "Plano negou home care ou internação domiciliar? A negativa pode ser analisada juridicamente. Atendimento em Juiz de Fora e online.",
    h1: "O plano negou o home care?",
    subtitle:
      "Negativas de internação domiciliar, cuidados contínuos e home care prescritos podem ser analisadas juridicamente.",
    heroMicrocopy: "Atendimento sigiloso em Juiz de Fora e online.",
    problemsTitle: "Situações que atendemos",
    problems: [
      { title: "Negativa de home care" },
      { title: "Redução de horas de cuidado" },
      { title: "Negativa de equipe multiprofissional" },
      { title: "Negativa de equipamentos" },
      { title: "Alta hospitalar sem suporte" },
      { title: "Demora na autorização" },
    ],
    steps: [
      "Você conta a situação",
      "A equipe orienta quais documentos enviar",
      "O caso é analisado juridicamente",
      "São indicados os próximos passos",
    ],
    documents: {
      title: "Documentos que auxiliam na análise",
      note: "Não tem todos os documentos? Entre em contato mesmo assim.",
      items: [
        "Relatório médico com indicação de home care",
        "Negativa da operadora",
        "Carteirinha do plano",
        "Contrato",
        "Laudos e exames",
      ],
    },
    faqs: [
      {
        q: "O plano é obrigado a fornecer home care?",
        a: "Depende da prescrição médica e do contrato. Quando há indicação clara, a negativa pode ser questionada.",
      },
      {
        q: "E se a situação for urgente?",
        a: "Em casos urgentes, a via judicial pode ser analisada como alternativa para buscar uma decisão rápida.",
      },
    ],
    ...COMMON_FINAL,
  },

  inventario: {
    slug: "inventario",
    theme: "succession",
    badge: "Inventário e Sucessões",
    metaTitle: "Advogado para Inventário em Juiz de Fora | Flávia Machado Advogados",
    metaDescription:
      "Orientação jurídica para inventário judicial, extrajudicial, partilha de bens e planejamento sucessório em Juiz de Fora e online.",
    h1: "Precisa iniciar ou organizar um inventário?",
    subtitle:
      "Orientação jurídica para inventário judicial, extrajudicial, partilha de bens e planejamento sucessório.",
    heroMicrocopy: "Atendimento em Juiz de Fora e online.",
    intro:
      "Organização jurídica para partilha de bens, inventários e proteção patrimonial familiar, com atenção aos aspectos humanos e patrimoniais de cada caso.",
    problemsTitle: "Situações que atendemos",
    problems: [
      { title: "Inventário judicial" },
      { title: "Inventário extrajudicial" },
      { title: "Testamento" },
      { title: "Sobrepartilha" },
      { title: "ITCD" },
      { title: "Ação de confirmação de testamento" },
      { title: "Processo administrativo junto à Fazenda Pública" },
    ],
    steps: [
      "Identificação dos herdeiros",
      "Levantamento dos bens",
      "Análise de dívidas e documentos",
      "Definição do caminho judicial ou extrajudicial",
      "Acompanhamento do procedimento",
    ],
    documents: {
      title: "Documentos que auxiliam na análise",
      items: [
        "Certidão de óbito",
        "Documentos dos herdeiros",
        "Documentos dos bens",
        "Certidões",
        "Escrituras",
        "Extratos bancários",
        "Testamento, se houver",
      ],
    },
    faqs: [
      {
        q: "Qual o prazo para abrir inventário?",
        a: "Existe um prazo legal para abertura, e a perda dele pode gerar multa. Por isso é importante buscar orientação assim que possível.",
      },
      {
        q: "Inventário pode ser feito em cartório?",
        a: "Em alguns casos, quando há consenso entre os herdeiros e não há testamento ou herdeiros incapazes, o inventário extrajudicial em cartório é possível.",
      },
      {
        q: "Precisa de advogado?",
        a: "Sim. Tanto o inventário judicial quanto o extrajudicial exigem acompanhamento de advogado.",
      },
      {
        q: "O que acontece se houver conflito?",
        a: "Havendo conflito entre herdeiros, o caminho costuma ser o inventário judicial, com acompanhamento técnico para buscar uma solução.",
      },
      {
        q: "Como funciona inventário com imóvel?",
        a: "Imóveis exigem documentação específica e avaliação. A equipe orienta sobre os documentos e o caminho mais adequado.",
      },
    ],
    ...COMMON_FINAL,
  },

  "planejamento-sucessorio": {
    slug: "planejamento-sucessorio",
    theme: "succession",
    badge: "Planejamento Sucessório",
    metaTitle: "Planejamento Sucessório em Juiz de Fora | Flávia Machado Advogados",
    metaDescription:
      "Organize a sucessão patrimonial em vida com segurança: testamento, doação, partilha e proteção patrimonial familiar. Atendimento em Juiz de Fora e online.",
    h1: "Planejamento sucessório com clareza e segurança.",
    subtitle:
      "Organização jurídica em vida para proteger o patrimônio e a família, com testamento, doação e estratégias de sucessão.",
    heroMicrocopy: "Atendimento em Juiz de Fora e online.",
    problemsTitle: "Quando procurar orientação",
    problems: [
      { title: "Quer organizar a sucessão em vida" },
      { title: "Deseja evitar conflitos futuros" },
      { title: "Possui imóveis e bens a proteger" },
      { title: "Família com configuração específica" },
      { title: "Quer entender testamento e doação" },
      { title: "Busca proteção patrimonial familiar" },
    ],
    steps: [
      "Você descreve a situação familiar e patrimonial",
      "A equipe levanta os bens e objetivos",
      "São analisadas as alternativas jurídicas",
      "É definida a estratégia mais adequada",
    ],
    documents: {
      title: "Documentos que auxiliam na análise",
      note: "Não tem todos os documentos? Podemos orientar o que reunir ao longo do processo.",
      items: [
        "Documentos pessoais (seus e dos familiares)",
        "Documentos dos bens e imóveis",
        "Certidões e escrituras",
        "Extratos e informações patrimoniais",
        "Pacto antenupcial ou contrato, se houver",
        "Testamento, se houver",
      ],
    },
    faqs: [
      {
        q: "O que é planejamento sucessório?",
        a: "É a organização jurídica, ainda em vida, da forma como o patrimônio será transmitido, buscando segurança, economia e prevenção de conflitos.",
      },
      {
        q: "Vale a pena fazer testamento?",
        a: "Depende dos objetivos e da configuração familiar. O testamento é uma das ferramentas possíveis e é avaliado caso a caso.",
      },
      {
        q: "O atendimento pode ser online?",
        a: "Sim. O atendimento pode ser feito de forma online, com sigilo.",
      },
    ],
    ...COMMON_FINAL,
  },

  "direito-de-familia": {
    slug: "direito-de-familia",
    theme: "family",
    badge: "Direito de Família",
    metaTitle: "Advogado de Família em Juiz de Fora | Flávia Machado Advogados",
    metaDescription:
      "Orientação jurídica em divórcio, guarda, pensão, união estável e partilha de bens, com clareza, sigilo e estratégia. Juiz de Fora e online.",
    h1: "Direito de Família com clareza, sigilo e estratégia.",
    subtitle:
      "Orientação jurídica em divórcio, guarda, pensão, união estável e partilha de bens.",
    heroMicrocopy: "Atendimento sigiloso em Juiz de Fora e online.",
    intro:
      "Atuação em conflitos familiares com sigilo, estratégia e busca por soluções viáveis, sempre com atenção aos aspectos humanos de cada caso.",
    problemsTitle: "Situações que atendemos",
    problems: [
      { title: "Divórcio" },
      { title: "Guarda" },
      { title: "Pensão alimentícia" },
      { title: "União estável" },
      { title: "Partilha de bens" },
      { title: "Regulamentação de visitas" },
      { title: "Interdição" },
      { title: "Acordos familiares" },
    ],
    steps: [
      "Você conta a situação, de forma sigilosa",
      "A equipe entende o contexto familiar",
      "São analisados os caminhos possíveis",
      "São indicados os próximos passos",
    ],
    documents: {
      title: "Documentos que auxiliam na análise",
      note: "Não tem todos os documentos? Entre em contato mesmo assim.",
      items: [
        "Documento de identidade (RG e CPF)",
        "Certidão de casamento ou de união estável",
        "Certidão de nascimento dos filhos, se houver",
        "Documentos dos bens, em caso de partilha",
        "Comprovantes de renda, em casos de pensão",
        "Acordos ou contratos anteriores, se houver",
      ],
    },
    faqs: [
      {
        q: "O divórcio precisa ser litigioso?",
        a: "Não. Sempre que possível, busca-se o caminho consensual, que costuma ser mais rápido e menos desgastante.",
      },
      {
        q: "Como funciona a guarda compartilhada?",
        a: "Na guarda compartilhada, ambos os pais participam das decisões sobre os filhos. A convivência é organizada conforme o melhor interesse da criança.",
      },
      {
        q: "União estável dá direito à partilha?",
        a: "Dependendo do regime e da forma como a relação se constituiu, a união estável pode gerar direitos patrimoniais. Cada caso é analisado.",
      },
      {
        q: "O atendimento é sigiloso?",
        a: "Sim. Todo o atendimento é conduzido com sigilo e discrição.",
      },
    ],
    ...COMMON_FINAL,
  },

  "direito-da-mulher": {
    slug: "direito-da-mulher",
    theme: "woman",
    badge: "Direito da Mulher",
    metaTitle: "Advogada para Direito da Mulher em Juiz de Fora | Flávia Machado",
    metaDescription:
      "Atendimento jurídico humanizado para mulheres: questões familiares, patrimoniais, sucessórias, proteção de direitos e enfrentamento à discriminação. Atendimento sigiloso em Juiz de Fora e online.",
    h1: "Atendimento jurídico humanizado para mulheres.",
    subtitle:
      "Um espaço seguro para orientação e defesa dos seus direitos. Orientação jurídica com acolhimento, respeito e segurança para questões familiares, patrimoniais, sucessórias, de proteção de direitos e enfrentamento à discriminação.",
    ctaLabel: "Falar com uma advogada",
    heroMicrocopy:
      "Atendimento realizado com absoluto sigilo, respeito à sua história e atenção às particularidades de cada caso.",
    intro:
      "Você será ouvido(a) com respeito e sem julgamentos. Nosso compromisso é oferecer orientação jurídica segura, acolhedora e adequada às suas necessidades.",
    problemsTitle: "Situações que atendemos",
    problems: [
      { title: "Divórcio em contexto sensível" },
      { title: "Guarda e convivência familiar" },
      { title: "Pensão alimentícia" },
      { title: "Proteção da autonomia e dos direitos" },
      { title: "Patrimônio e autonomia financeira" },
      { title: "União estável e direitos familiares" },
      { title: "Discriminação e violação de direitos" },
      { title: "Orientação preventiva e mediação" },
    ],
    steps: [
      "Você envia um resumo inicial, com sigilo",
      "A equipe acolhe e entende a situação",
      "São analisados os caminhos possíveis",
      "São indicados os próximos passos",
    ],
    stepsNote:
      "Você pode buscar orientação antes de tomar qualquer decisão. O primeiro passo é entender a situação com clareza.",
    documents: {
      title: "Documentos que podem ajudar (quando você quiser)",
      note: "Você não precisa reunir nada antes do primeiro contato. Envie apenas um resumo, com sigilo.",
      items: [
        "Documento de identidade",
        "Certidão de casamento ou união estável, se houver",
        "Documentos dos filhos, se aplicável",
        "Boletim de ocorrência, se houver",
        "Qualquer documento que ajude a entender a situação",
      ],
    },
    faqs: [
      {
        q: "O atendimento é realizado de forma sigilosa?",
        a: "Sim. Todas as informações compartilhadas durante o atendimento são protegidas pelo sigilo profissional, garantindo privacidade, respeito e segurança para que você possa expor sua situação com tranquilidade.",
      },
      {
        q: "Posso buscar orientação jurídica antes de tomar uma decisão?",
        a: "Sim. Muitas situações familiares e patrimoniais podem ser melhor conduzidas quando há orientação jurídica prévia. O acompanhamento adequado auxilia na compreensão dos direitos, deveres e possíveis consequências de cada decisão.",
      },
      {
        q: "Como funciona o divórcio quando há filhos ou patrimônio em comum?",
        a: "Cada caso possui particularidades. Questões relacionadas à guarda, convivência familiar, pensão alimentícia e partilha de bens podem ser resolvidas de forma consensual ou judicial, sempre observando a proteção dos direitos envolvidos.",
      },
      {
        q: "Como funciona a pensão alimentícia?",
        a: "A fixação da pensão alimentícia considera as necessidades de quem recebe e a capacidade financeira de quem paga. O valor é definido de acordo com as circunstâncias específicas de cada família.",
      },
      {
        q: "É possível regularizar questões relacionadas à união estável?",
        a: "Sim. A união estável pode ser reconhecida, formalizada ou dissolvida judicialmente ou extrajudicialmente, conforme as particularidades do caso, produzindo efeitos patrimoniais e sucessórios.",
      },
      {
        q: "O que fazer em situações de discriminação ou violação de direitos?",
        a: "Cada situação deve ser analisada individualmente. Dependendo do caso, podem ser adotadas medidas administrativas ou judiciais para proteger direitos e buscar a reparação dos prejuízos sofridos.",
      },
      {
        q: "O atendimento pode ser realizado online?",
        a: "Sim. O escritório realiza atendimentos presenciais e online, permitindo que clientes de diferentes localidades recebam orientação jurídica com conforto, praticidade e segurança.",
      },
    ],
    ...COMMON_FINAL,
  },

  "direitos-lgbtqia": {
    slug: "direitos-lgbtqia",
    theme: "lgbt",
    badge: "Direitos LGBTQIAPN+",
    metaTitle: "Advocacia para Direitos LGBTQIAPN+ em Juiz de Fora | Flávia Machado",
    metaDescription:
      "Atendimento jurídico respeitoso para pessoas e famílias LGBTQIAPN+: união estável, casamento, adoção, sucessões, retificação de nome e gênero. Sigilo total.",
    h1: "Atendimento jurídico respeitoso para pessoas e famílias LGBTQIAPN+.",
    subtitle:
      "Orientação em família, sucessões, união estável, planejamento patrimonial, discriminação e direitos civis, com confidencialidade e linguagem clara.",
    heroMicrocopy: "Atendimento confidencial em Juiz de Fora e online.",
    intro:
      "Atuação respeitosa, confidencial e tecnicamente sólida em demandas sensíveis. No primeiro contato pedimos apenas o essencial — você não precisa compartilhar detalhes íntimos.",
    problemsTitle: "Situações que atendemos",
    problems: [
      { title: "União estável" },
      { title: "Casamento" },
      { title: "Adoção" },
      { title: "Inventário e sucessões" },
      { title: "Planejamento sucessório" },
      { title: "Testamento" },
      { title: "Discriminação" },
      { title: "Retificação de nome e gênero" },
      { title: "Partilha de bens" },
      { title: "Proteção patrimonial" },
    ],
    steps: [
      "Você envia um resumo inicial, com sigilo",
      "A equipe acolhe e entende a situação",
      "São analisados os caminhos possíveis",
      "São indicados os próximos passos",
    ],
    stepsNote:
      "No primeiro contato você não precisa informar dados íntimos. Pedimos apenas nome, WhatsApp, cidade, área aproximada e uma mensagem breve.",
    documents: {
      title: "Documentos que podem ajudar (quando você quiser)",
      note: "No primeiro contato pedimos apenas o essencial. Você decide o que compartilhar e quando.",
      items: [
        "Documento de identidade",
        "Certidão ou contrato de união estável, se houver",
        "Documentos dos bens, em questões patrimoniais",
        "Certidões relacionadas à demanda (ex.: para retificação)",
        "Qualquer documento que ajude a entender a situação",
      ],
    },
    faqs: [
      {
        q: "O atendimento é confidencial?",
        a: "Sim. Todo o atendimento é conduzido com confidencialidade e respeito. As informações compartilhadas são protegidas pelo sigilo profissional, garantindo privacidade e segurança.",
      },
      {
        q: "Pessoas LGBTQIAPN+ possuem os mesmos direitos em relações familiares e patrimoniais?",
        a: "Sim. A legislação brasileira assegura proteção jurídica às relações familiares e patrimoniais da população LGBTQIAPN+, incluindo união estável, casamento, partilha de bens, sucessão, guarda e demais direitos reconhecidos pelo ordenamento jurídico.",
      },
      {
        q: "É possível formalizar uma união estável entre pessoas do mesmo sexo?",
        a: "Sim. A união estável homoafetiva possui reconhecimento jurídico e produz os mesmos efeitos patrimoniais e sucessórios aplicáveis às demais uniões estáveis, garantindo direitos e deveres às partes envolvidas.",
      },
      {
        q: "Casais LGBTQIAPN+ possuem direitos sucessórios?",
        a: "Sim. O companheiro ou cônjuge possui direitos sucessórios nos termos da legislação vigente, podendo participar da herança e da partilha de bens, observadas as particularidades de cada caso.",
      },
      {
        q: "É possível alterar nome e gênero nos documentos?",
        a: "Sim. A legislação e a jurisprudência brasileiras permitem a retificação de nome e gênero diretamente no registro civil, observados os requisitos legais aplicáveis a cada situação.",
      },
      {
        q: "É possível realizar planejamento patrimonial e sucessório para casais LGBTQIAPN+?",
        a: "Sim. O planejamento sucessório é uma ferramenta importante para organizar o patrimônio, reduzir conflitos futuros e garantir maior segurança jurídica à família, independentemente da orientação sexual ou identidade de gênero dos envolvidos.",
      },
      {
        q: "O que fazer em situações de discriminação em razão da orientação sexual ou identidade de gênero?",
        a: "Situações de discriminação podem gerar consequências jurídicas nas esferas cível, administrativa e, em determinadas hipóteses, criminal. A análise individualizada do caso é importante para identificar as medidas cabíveis para proteção dos direitos da pessoa afetada.",
      },
      {
        q: "O atendimento pode ser realizado online?",
        a: "Sim. O escritório realiza atendimentos presenciais e online, permitindo que clientes de diferentes localidades recebam orientação jurídica com conforto, praticidade e segurança.",
      },
    ],
    ...COMMON_FINAL,
  },
};

export const areaList = Object.values(areas);
export function getArea(slug: string): Area | undefined {
  return areas[slug];
}
