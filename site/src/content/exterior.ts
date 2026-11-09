// Conteúdo da landing /brasileiros-no-exterior.
//
// Separado do layout de propósito: alterar texto aqui não exige mexer em JSX.
//
// Regras que valem para todo este arquivo:
//  - O escritório atua no ordenamento jurídico brasileiro. Em nenhum lugar
//    afirmar consultoria sobre legislação estrangeira.
//  - Nada de promessa de resultado, prazo ou garantia (Provimento 205/2021).
//  - Não afirmar que todo procedimento se resolve remotamente — a seção
//    "limites" existe justamente para ser honesta sobre isso.

export const exterior = {
  hero: {
    eyebrow: "Brasileiros no exterior",
    h1: "Mora no exterior e precisa de assistência jurídica no Brasil?",
    subtitulo:
      "O escritório Flávia Machado Advogados Associados atende brasileiros residentes fora do país em demandas relacionadas à legislação brasileira, com orientação e acompanhamento a distância.",
    microcopy:
      "Atendimento por videochamada, WhatsApp e e-mail. Escritório em Juiz de Fora, Minas Gerais.",
    ctaPrincipal: "Falar com o escritório",
    ctaSecundario: "Ver as áreas de atuação",
  },

  apresentacao: {
    titulo: "Mesmo à distância, suas questões jurídicas no Brasil continuam existindo",
    paragrafos: [
      "Quem muda de país raramente corta os vínculos com o Brasil. Permanecem imóveis, contas, participações em empresas, familiares e, com frequência, procedimentos que ficaram pela metade.",
      "O tempo costuma agravar essas situações. Um inventário que não começa, um imóvel que segue no nome de quem faleceu, um divórcio que nunca foi formalizado — tudo isso continua produzindo efeitos, mesmo com a pessoa morando a milhares de quilômetros.",
      "Boa parte dessas demandas pode ser conduzida sem que você precise viajar, desde que a representação seja organizada corretamente. Outras exigem alguma providência presencial ou consular. A diferença entre os dois casos é a primeira coisa que esclarecemos.",
    ],
  },

  /**
   * Áreas. O campo "href" só é preenchido quando existe uma página no site
   * tratando do assunto — link para página inexistente é pior que link nenhum.
   */
  areas: [
    {
      titulo: "Inventários e heranças",
      texto:
        "Abertura e condução de inventário no Brasil, partilha de bens, regularização de imóveis que seguem em nome de quem faleceu e sobrepartilha de bens encontrados depois. Também o planejamento sucessório de quem tem patrimônio no Brasil e família fora.",
      href: "/areas/inventario",
      hrefLabel: "Ver a página de Inventário e Sucessões",
    },
    {
      titulo: "Divórcio e Direito de Família",
      texto:
        "Divórcio de brasileiros quando um dos cônjuges ou ambos residem fora, partilha de bens situados no Brasil, guarda, convivência e alimentos. Também a averbação, no registro civil brasileiro, de decisões que precisam produzir efeito aqui.",
      href: "/areas/direito-de-familia",
      hrefLabel: "Ver a página de Direito de Família",
    },
    {
      titulo: "Imóveis e patrimônio no Brasil",
      texto:
        "Questões relacionadas a imóveis, contratos e patrimônio localizados no Brasil: regularização documental, pendências de registro, situações de condomínio entre herdeiros e providências necessárias para venda ou transferência.",
    },
    {
      titulo: "Procurações e representação",
      texto:
        "Orientação sobre o instrumento de representação adequado a cada procedimento, os requisitos de validade no Brasil e o caminho de consularização ou apostilamento conforme o país de residência.",
    },
  ],

  /**
   * O diferencial da página. As concorrentes vendem "resolva sem sair de casa";
   * nenhuma diz o que não dá. Para um público que já desconfia de atendimento
   * online, a franqueza sobre os limites é o que constrói confiança.
   */
  limites: {
    titulo: "O que costuma ser possível a distância — e o que não é",
    nota:
      "O enquadramento abaixo é geral e indica tendências. Cada procedimento tem exigências próprias, e a análise do caso é o que define o caminho.",
    possivel: {
      titulo: "Costuma ser possível sem viajar",
      itens: [
        "Acompanhamento de processo judicial já em curso",
        "Inventário conduzido por procurador devidamente constituído",
        "Divórcio consensual, quando preenchidos os requisitos legais",
        "Levantamento de documentos e certidões no Brasil",
        "Assinatura eletrônica, nos atos em que a legislação admite",
        "Reuniões por videochamada e acompanhamento por escrito",
      ],
    },
    exige: {
      titulo: "Costuma exigir providência presencial ou consular",
      itens: [
        "Outorga de procuração, que em regra passa por consulado ou notário local",
        "Apostilamento de documentos emitidos no exterior",
        "Tradução juramentada de documentos em língua estrangeira",
        "Atos que a legislação reserva à presença pessoal do interessado",
        "Situações em que o juízo determina comparecimento",
      ],
    },
  },

  etapas: [
    {
      titulo: "Contato inicial",
      texto:
        "Você descreve a situação por WhatsApp, e-mail ou formulário. Não é preciso reunir documentos nem conhecer termos jurídicos nesse momento.",
    },
    {
      titulo: "Análise da situação",
      texto:
        "O escritório avalia as informações, verifica o que pode ser conduzido a distância e orienta sobre os encaminhamentos possíveis e os documentos envolvidos.",
    },
    {
      titulo: "Acompanhamento jurídico",
      texto:
        "Conforme a natureza da demanda e a contratação dos serviços, o escritório realiza os procedimentos cabíveis e mantém a comunicação sobre o andamento.",
    },
  ],

  faqs: [
    {
      q: "Posso contratar um advogado no Brasil morando no exterior?",
      a: "Sim. A residência fora do país não impede a contratação de advogado inscrito na OAB para atuar em demandas brasileiras. O que costuma ser necessário é organizar a representação, normalmente por procuração, para que o profissional possa praticar os atos em seu nome.",
    },
    {
      q: "É possível realizar um inventário no Brasil residindo em outro país?",
      a: "Em muitos casos, sim. O herdeiro que reside fora pode ser representado por procurador constituído para o ato. A viabilidade e a modalidade — judicial ou em cartório — dependem do consenso entre os herdeiros, da composição do patrimônio e do cumprimento dos requisitos legais, que precisam ser analisados caso a caso.",
    },
    {
      q: "Como funciona um divórcio no Brasil para quem mora fora?",
      a: "O divórcio de brasileiros pode ser processado no Brasil ainda que um ou ambos os cônjuges residam no exterior. Havendo consenso e preenchidos os requisitos legais, pode ser possível a via extrajudicial; havendo divergência, o caminho é judicial. A representação por procuração costuma viabilizar o procedimento sem viagem.",
    },
    {
      q: "Preciso viajar ao Brasil para resolver questões jurídicas?",
      a: "Nem sempre. Boa parte dos procedimentos pode ser conduzida por representação. Alguns atos, porém, exigem providência presencial ou consular — a outorga da procuração, por exemplo, costuma ser feita em consulado brasileiro ou perante notário local, com apostilamento. A análise inicial indica em qual situação o seu caso se enquadra.",
    },
    {
      q: "Como funciona o atendimento jurídico online?",
      a: "O primeiro contato acontece por WhatsApp, e-mail ou formulário. As conversas podem ser feitas por videochamada, em horário combinado considerando o fuso de onde você está. O acompanhamento do andamento é feito por escrito, pelos canais ajustados com você.",
    },
    {
      q: "Posso nomear um representante no Brasil por procuração?",
      a: "Sim, e é o caminho mais comum para quem reside fora. A procuração precisa conter os poderes adequados ao procedimento pretendido e observar os requisitos de forma exigidos no Brasil. O tipo de instrumento e a necessidade de consularização ou apostilamento variam conforme o ato e o país de residência.",
    },
    {
      q: "O escritório orienta sobre a legislação do país onde eu moro?",
      a: "Não. A atuação do escritório é no ordenamento jurídico brasileiro — demandas que tramitam no Brasil ou que produzem efeitos aqui. Questões regidas pela legislação do país onde você reside devem ser tratadas por profissional habilitado naquela jurisdição.",
    },
    {
      q: "Como funciona a comunicação com o escritório?",
      a: "Por WhatsApp, e-mail e videochamada, conforme a sua preferência. O escritório funciona em horário comercial de Brasília, e as reuniões são agendadas considerando a diferença de fuso. Mensagens recebidas fora do expediente são respondidas no dia útil seguinte.",
    },
  ],

  /** Assuntos do formulário. Espelham as áreas acima. */
  assuntos: [
    "Inventário ou herança no Brasil",
    "Divórcio ou Direito de Família",
    "Imóvel ou patrimônio no Brasil",
    "Procuração ou representação",
    "Outro assunto",
    "Ainda não sei dizer",
  ],
} as const;
