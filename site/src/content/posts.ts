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
    slug: "plano-negou-medicamento-de-alto-custo",
    title: "Plano negou medicamento de alto custo: por onde começar",
    category: "Plano de Saúde",
    date: "2026-09-08",
    excerpt:
      "Medicamento caro, importado ou fora do rol da ANS: entenda os motivos mais comuns da recusa e o que pode ser reunido para uma análise.",
    relatedArea: "medicamentos-alto-custo",
    body: [
      "Poucas notícias assustam tanto quanto a de que o medicamento indicado pelo médico não será custeado pelo plano. Quando o tratamento é contínuo ou urgente, a preocupação com o custo se soma à preocupação com a saúde.",
      "As recusas costumam vir por alguns motivos recorrentes: o medicamento não constar no Rol da ANS, ser prescrito para uso diferente daquele previsto na bula, ser de uso domiciliar, ou ainda não ter registro na Anvisa. Cada um desses fundamentos tem um tratamento jurídico diferente, e é por isso que a negativa por escrito é tão importante.",
      "Desde a Lei 14.454/2022, o rol da ANS deixou de ser tratado como uma lista fechada em toda e qualquer hipótese. A norma passou a admitir a cobertura de tratamentos fora do rol quando presentes determinados requisitos, como a prescrição fundamentada do médico assistente e a existência de comprovação científica de eficácia. Isso não significa que toda negativa seja indevida — significa que ela pode ser analisada.",
      "Há também situações com regra própria. Medicamentos antineoplásicos de uso oral domiciliar, por exemplo, têm previsão específica de cobertura na legislação. Já os medicamentos sem registro na Anvisa seguem um caminho mais restrito, com entendimento consolidado nos tribunais superiores sobre quando o fornecimento pode ser exigido.",
      "Para uma análise, costumam ajudar: o relatório médico fundamentado — indicando o diagnóstico, o medicamento, a posologia e por que outras alternativas não servem —, a prescrição, a negativa da operadora por escrito, os exames relacionados, o contrato e a carteirinha.",
      "Quando há risco concreto de agravamento pela demora, o pedido de urgência pode ser avaliado. Cada caso, porém, depende da situação clínica, do contrato e da fundamentação médica.",
      "Se você recebeu uma negativa, guarde tudo por escrito e busque orientação. Entender o motivo da recusa já é meio caminho para saber o que fazer.",
    ],
  },
  {
    slug: "reajuste-por-faixa-etaria-quando-pode-ser-questionado",
    title: "Reajuste por faixa etária: quando pode ser questionado?",
    category: "Plano de Saúde",
    date: "2026-09-08",
    excerpt:
      "Mudar de faixa etária pode aumentar a mensalidade legalmente. Mas existem limites — e é neles que mora a discussão.",
    relatedArea: "reajuste-abusivo-plano-saude",
    body: [
      "Poucos aumentos causam tanto susto quanto o que vem junto com o aniversário. A mensalidade que cabia no orçamento passa a não caber, e a dúvida é sempre a mesma: isso pode?",
      "A resposta curta é que o reajuste por faixa etária é permitido. A resposta útil é que ele não é livre — existem limites, e é justamente aí que a discussão acontece.",
      "O primeiro limite é a idade. O Estatuto do Idoso veda o aumento da mensalidade em razão da idade a partir dos 60 anos. Reajustes aplicados depois dessa faixa, sob o rótulo de faixa etária, costumam ser questionados.",
      "O segundo limite é a estrutura do próprio reajuste. A regulação da ANS organiza os contratos em dez faixas etárias e impõe travas à variação entre elas: o valor da última faixa não pode ser desproporcional em relação ao da primeira, e os aumentos não podem se concentrar nas faixas mais avançadas. Quando o desenho do contrato concentra o peso no fim da vida do beneficiário, há o que analisar.",
      "O terceiro ponto é a transparência. Os tribunais superiores têm entendido que o reajuste por faixa etária é válido quando previsto em contrato de forma clara, com percentuais informados desde o início e sem valores desarrazoados. Aumento aplicado sem previsão expressa, ou em percentual que não se explica, é diferente de aumento previsto e proporcional.",
      "Contratos coletivos e por adesão seguem lógica própria e também podem ser analisados, considerando suas particularidades.",
      "Para avaliar, costumam ajudar: os boletos antes e depois do aumento, o contrato, a tabela de faixas etárias, o comunicado de reajuste e os comprovantes de pagamento.",
      "Antes de parar de pagar, vale entender o caso. A interrupção pode gerar consequências contratuais, e existem caminhos para discutir o valor sem correr esse risco.",
    ],
  },
  {
    slug: "itcd-em-minas-gerais-prazo-e-custo-do-atraso",
    title: "ITCD em Minas Gerais: o imposto do inventário e o custo de atrasar",
    category: "Inventário",
    date: "2026-09-08",
    excerpt:
      "Antes de transferir os bens aos herdeiros é preciso acertar o ITCD. Entenda o que é o imposto, quem paga e por que a demora costuma sair cara.",
    relatedArea: "inventario",
    body: [
      "Todo inventário passa por um imposto estadual: o ITCD, sigla para Imposto sobre Transmissão Causa Mortis e Doação. Ele incide sobre a herança e sobre as doações, e sem a sua quitação os bens não são transferidos para o nome dos herdeiros.",
      "Em Minas Gerais o imposto é regulado por lei estadual própria e a alíquota é de 5% sobre o valor dos bens transmitidos. O cálculo considera a avaliação dos bens, o que faz diferença quando há imóveis, participações societárias ou aplicações financeiras no espólio.",
      "O ponto que costuma pegar as famílias de surpresa é o prazo. A abertura do inventário tem prazo previsto na legislação processual, e o recolhimento do imposto tem prazo próprio na legislação estadual. Perder esses prazos não impede o inventário, mas encarece: a legislação mineira prevê multa sobre o imposto devido em caso de atraso, e prevê também desconto para o recolhimento feito com antecedência. Ou seja, o mesmo patrimônio custa valores diferentes conforme a data.",
      "Há ainda um efeito silencioso da demora. Enquanto o inventário não é concluído, os bens permanecem em nome de quem faleceu. Não é possível vender o imóvel, transferir o veículo, movimentar contas ou regularizar a posse. Despesas continuam correndo, e a base de cálculo do imposto pode ser atualizada.",
      "O inventário pode ser judicial ou extrajudicial. O extrajudicial, feito em cartório, é possível quando há consenso entre os herdeiros, todos são maiores e capazes e não há testamento — e costuma ser mais rápido. Em ambos os caminhos é necessário o acompanhamento de advogado.",
      "Existem hipóteses de isenção e de redução previstas na legislação, que dependem do tipo de bem, do valor e da situação dos herdeiros. Vale verificar antes de recolher, porque nem sempre elas são informadas.",
      "Para começar, costumam ser úteis: a certidão de óbito, os documentos dos herdeiros e do falecido, a documentação dos bens, certidões negativas, extratos bancários e, havendo testamento, o próprio testamento.",
      "Se o falecimento é recente, a orientação inicial ajuda a organizar a ordem das providências. Se já se passou algum tempo, ainda assim vale entender a situação: quanto antes o caminho é definido, menor tende a ser o custo.",
    ],
  },
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
