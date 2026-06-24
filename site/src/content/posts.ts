// Posts do blog (MASTER §19). Conteúdo informativo, sóbrio, sem promessa de resultado.
// Estrutura simples e tipada — pode migrar para MDX depois.

export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  excerpt: string;
  relatedArea?: string; // slug em /areas
  body: string[]; // parágrafos
}

export const posts: Post[] = [
  {
    slug: "plano-de-saude-negou-cirurgia-o-que-fazer",
    title: "O que fazer quando o plano de saúde nega uma cirurgia?",
    category: "Plano de Saúde",
    date: "2026-05-20",
    excerpt:
      "A negativa de cirurgia é uma das situações mais angustiantes para o paciente. Entenda os primeiros passos e o que pode ser analisado juridicamente.",
    relatedArea: "negativa-plano-saude",
    body: [
      "Receber a notícia de que o plano de saúde negou uma cirurgia indicada pelo médico é uma situação angustiante, especialmente quando há urgência. O primeiro ponto importante é manter a calma e reunir as informações sobre o caso.",
      "A negativa nem sempre é definitiva. Em muitas situações, é possível questionar a recusa, sobretudo quando existe prescrição médica fundamentada e quando o procedimento é necessário para a saúde do paciente.",
      "Para uma análise jurídica, costumam ajudar: o relatório ou prescrição do médico, a negativa da operadora (de preferência por escrito), a carteirinha do plano, o contrato e os exames relacionados. Mesmo sem todos os documentos, é possível iniciar uma conversa e entender o caminho.",
      "Em casos de urgência ou risco à saúde, a via judicial pode ser analisada como uma alternativa para buscar uma decisão rápida. Cada situação, no entanto, depende de uma avaliação individual.",
      "Se você está passando por isso, busque orientação. O primeiro passo é entender o seu caso com clareza.",
    ],
  },
  {
    slug: "plano-negou-terapia-aba-tea",
    title: "O que fazer se o plano negar terapia ABA para TEA?",
    category: "TEA e ABA",
    date: "2026-05-10",
    excerpt:
      "Limitação de sessões, coparticipação elevada ou negativa de ABA: entenda o que pode ser avaliado quando o plano dificulta o tratamento.",
    relatedArea: "tea-aba-plano-saude",
    body: [
      "O tratamento de crianças e adultos com Transtorno do Espectro Autista (TEA) costuma envolver terapias contínuas, como ABA, fonoaudiologia, terapia ocupacional e fisioterapia. Cada sessão faz diferença no desenvolvimento.",
      "Por isso, a limitação do número de sessões, a coparticipação elevada, a rede credenciada insuficiente ou a negativa direta do tratamento geram preocupação real nas famílias.",
      "Quando há prescrição médica indicando as terapias e o número de sessões, a limitação imposta pelo plano pode ser questionada em diversos casos. A análise considera o contrato, a indicação médica e a situação clínica.",
      "Documentos que ajudam: relatório e prescrição médica, laudo com indicação das terapias, a negativa ou limitação da operadora, a carteirinha e o contrato.",
      "Famílias, mães, pais e responsáveis podem buscar orientação com acolhimento e sigilo. O atendimento também pode ser feito de forma online.",
    ],
  },
  {
    slug: "qual-prazo-para-abrir-inventario",
    title: "Qual o prazo para abrir inventário?",
    category: "Inventário",
    date: "2026-04-28",
    excerpt:
      "Existe um prazo legal para abertura do inventário, e a perda dele pode gerar custos. Entenda como funciona e por onde começar.",
    relatedArea: "inventario",
    body: [
      "Após o falecimento de uma pessoa, o patrimônio que ela deixou precisa ser formalmente transferido aos herdeiros. Esse procedimento é o inventário.",
      "A legislação prevê um prazo para a abertura do inventário, e a perda desse prazo pode gerar multa sobre o imposto de transmissão. Por isso, é importante buscar orientação assim que possível.",
      "O inventário pode ser judicial ou extrajudicial. O extrajudicial, feito em cartório, é possível em alguns casos, quando há consenso entre os herdeiros e não há testamento ou herdeiros incapazes. Em ambos os caminhos, é necessário acompanhamento de advogado.",
      "Para começar, costumam ser úteis: a certidão de óbito, os documentos dos herdeiros, os documentos dos bens, certidões, escrituras e extratos. Havendo testamento, ele também deve ser apresentado.",
      "Se você precisa iniciar ou organizar um inventário, a equipe pode orientar o caminho mais adequado para o seu caso.",
    ],
  },
  {
    slug: "uniao-estavel-homoafetiva-direitos-patrimoniais",
    title: "União estável homoafetiva: direitos patrimoniais",
    category: "Direitos LGBTQIAPN+",
    date: "2026-04-15",
    excerpt:
      "A união estável homoafetiva é reconhecida e gera direitos. Entenda como funciona a proteção patrimonial e sucessória do casal.",
    relatedArea: "direitos-lgbtqia",
    body: [
      "A união estável homoafetiva é reconhecida no Brasil e gera direitos equivalentes aos das demais uniões estáveis, incluindo direitos patrimoniais e sucessórios.",
      "Isso significa que o casal pode ter direitos sobre o patrimônio construído durante a relação e proteção em situações de sucessão, dependendo do regime aplicável e da forma como a relação se constituiu.",
      "A formalização da união, por escritura, e o planejamento patrimonial e sucessório são ferramentas que trazem mais segurança ao casal, prevenindo conflitos futuros.",
      "Cada situação é diferente e merece uma análise individual, conduzida com respeito, confidencialidade e linguagem clara.",
      "Se você deseja entender melhor seus direitos, pode buscar orientação de forma sigilosa, presencial ou online.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
