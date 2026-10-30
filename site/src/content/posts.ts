// Posts do blog (MASTER §19). Conteúdo informativo, sóbrio, sem promessa de resultado.
// Estrutura simples e tipada — pode migrar para MDX depois.

/**
 * Bloco de conteúdo de um artigo.
 *
 * String continua valendo como parágrafo, então os artigos antigos seguem
 * funcionando sem mudança. Os blocos nomeados existem para artigos com
 * estrutura de verdade — título de seção conta como sinal de busca e sem eles
 * o texto longo vira um paredão.
 *
 * Dentro de parágrafos e itens de lista vale a sintaxe [texto](/caminho) para
 * link. Caminho começando com "/" vira navegação interna; com "http", link
 * externo que abre em outra aba.
 */
export type Bloco =
  | string
  | { h2: string }
  | { h3: string }
  | { lista: string[] }
  | { destaque: string };

export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  excerpt: string;
  relatedArea?: string; // slug em /areas
  body: Bloco[];
  /** Perguntas frequentes do artigo. Geram o FAQPage no JSON-LD. */
  faqs?: { q: string; a: string }[];
  /** Fontes oficiais citadas, exibidas no fim do artigo. */
  referencias?: { titulo: string; url: string }[];
}

export const posts: Post[] = [
  {
    slug: "divorcio-em-cartorio-com-filhos-menores",
    title: "Divórcio em cartório com filhos menores: é possível?",
    category: "Direito de Família",
    date: "2026-10-28",
    excerpt:
      "Saiba quando é possível fazer divórcio em cartório com filhos menores, quais são os requisitos e o que precisa ser resolvido judicialmente.",
    relatedArea: "direito-de-familia",
    body: [
      "O fim de um casamento costuma trazer diversas dúvidas. Além das questões emocionais, o casal precisa decidir como organizar a divisão dos bens, a guarda dos filhos, a pensão alimentícia e a convivência familiar.",
      "Uma das perguntas mais frequentes nesse momento é: quem tem filhos menores de idade pode fazer o divórcio diretamente em cartório?",
      {
        destaque:
          "A resposta é sim, em determinadas circunstâncias. Desde a Resolução nº 571/2024 do Conselho Nacional de Justiça, tornou-se possível realizar o divórcio consensual em cartório mesmo quando o casal possui filhos menores ou incapazes.",
      },
      "Entretanto, existem requisitos importantes. As questões relacionadas à guarda, à convivência familiar e à pensão alimentícia dos filhos precisam ter sido previamente resolvidas judicialmente.",
      { h2: "O que é o divórcio extrajudicial?" },
      "O divórcio extrajudicial é aquele realizado diretamente em um Tabelionato de Notas, mediante escritura pública. Diferentemente do divórcio judicial, esse procedimento não exige que o próprio divórcio seja decretado por um juiz.",
      "Ele é utilizado quando existe consenso entre os cônjuges e os demais requisitos legais estão presentes. Em geral, o divórcio em cartório pode oferecer algumas vantagens, como menor burocracia e maior previsibilidade do procedimento.",
      "Contudo, isso não significa que seja adequado para todas as famílias. A existência de conflitos patrimoniais, divergências sobre os filhos ou situações de vulnerabilidade pode exigir uma abordagem diferente.",
      "É importante destacar que a participação de advogado ou defensor público é obrigatória, mesmo quando os cônjuges estão completamente de acordo. Essa exigência está prevista no artigo 733, § 2º, do Código de Processo Civil.",
      { h2: "Quem tem filhos menores pode se divorciar em cartório?" },
      "Sim. A possibilidade foi ampliada pela Resolução CNJ nº 571/2024, que alterou a Resolução nº 35/2007. Anteriormente, a existência de filhos menores ou incapazes impedia, como regra, a realização do divórcio extrajudicial.",
      "Com a alteração, o artigo 34, § 2º, da Resolução nº 35/2007 passou a admitir a escritura pública de divórcio mesmo nessas situações. Entretanto, existe uma condição fundamental: é preciso comprovar a prévia resolução judicial de todas as questões referentes à guarda, à visitação e aos alimentos dos filhos menores ou incapazes — e isso deve ficar consignado no corpo da escritura, não apenas apresentado ao tabelião.",
      "Isso significa que o cartório não substitui o Poder Judiciário na definição dessas questões. O casal pode formalizar o divórcio por escritura pública, mas precisa comprovar que os direitos dos filhos já foram tratados judicialmente.",
      "A mudança procura simplificar a dissolução do casamento sem afastar a proteção jurídica de crianças e adolescentes. Tanto é assim que o § 3º do mesmo artigo determina que, havendo dúvida quanto às questões de interesse do menor ou do incapaz, o tabelião submeta o caso à apreciação do juiz que proferiu a decisão.",
      { h2: "Quais são os requisitos para realizar o divórcio em cartório?" },
      { h3: "1. O divórcio deve ser consensual" },
      "Os cônjuges precisam concordar com a realização do divórcio e com os termos que serão formalizados na escritura. Se uma das partes não concordar com a solução proposta, será necessário avaliar a via judicial. O consenso também precisa ser livre, sem coação ou constrangimento.",
      { h3: "2. As questões dos filhos devem estar resolvidas judicialmente" },
      "Quando existem filhos menores ou incapazes, é necessário comprovar a prévia resolução judicial das questões relacionadas a:",
      {
        lista: [
          "Guarda dos filhos",
          "Convivência familiar e visitas",
          "Pensão alimentícia",
        ],
      },
      "O acordo judicial deve contemplar as necessidades dos filhos e observar seus direitos. A simples existência de um acordo verbal entre os pais não substitui essa exigência.",
      { h3: "3. É obrigatória a assistência jurídica" },
      "O procedimento exige acompanhamento de advogado ou defensor público. Dependendo das circunstâncias, os cônjuges podem ser assistidos pelo mesmo profissional ou por profissionais diferentes.",
      "A assistência jurídica é importante para verificar as consequências da separação, especialmente quando existem imóveis, dívidas, empresas ou outras questões patrimoniais.",
      { h3: "4. Devem ser observadas as demais exigências legais" },
      "O tabelião verificará os documentos e os requisitos necessários à lavratura da escritura.",
      {
        destaque:
          "Há uma vedação expressa que permanece: o artigo 733 do Código de Processo Civil condiciona o divórcio por escritura pública à inexistência de nascituro. Havendo gravidez, a via extrajudicial não é admitida, e o divórcio deve seguir pelo Poder Judiciário.",
      },
      "Dúvidas sobre a vontade das partes ou outras particularidades familiares também exigem avaliação específica. A escritura não deve ser utilizada para contornar a necessidade de proteção judicial de pessoas vulneráveis.",
      { h2: "Como funciona o divórcio em cartório com filhos menores?" },
      "Imagine um casal de Juiz de Fora que decidiu encerrar o casamento de maneira amigável. Eles possuem dois filhos, de 8 e 12 anos, e já chegaram a um entendimento sobre a guarda compartilhada, a convivência familiar e a pensão alimentícia. Nesse cenário, o procedimento pode ser organizado em etapas.",
      { h3: "Primeiro passo: resolver judicialmente as questões dos filhos" },
      "O acordo sobre guarda, convivência e alimentos deve ser submetido ao Poder Judiciário. Essa etapa permite que os interesses das crianças sejam examinados conforme as exigências legais. Após a resolução judicial dessas questões, o casal poderá avaliar a possibilidade de realizar o divórcio em cartório.",
      { h3: "Segundo passo: organizar os documentos" },
      "Será necessário reunir a documentação pessoal e familiar, além dos documentos relativos ao patrimônio, quando houver. Também será preciso apresentar a comprovação da resolução judicial das questões dos filhos.",
      { h3: "Terceiro passo: preparar os termos do divórcio" },
      "Com assistência jurídica, os cônjuges poderão organizar os termos da escritura, incluindo as disposições patrimoniais pertinentes. A partilha de bens deve observar o regime matrimonial e os direitos de cada parte.",
      { h3: "Quarto passo: formalizar a escritura pública" },
      "Cumpridos os requisitos, o divórcio poderá ser formalizado no Tabelionato de Notas. A escritura pública não depende de homologação judicial. Depois, deverá ser providenciada a averbação do divórcio no registro civil competente. Quando houver partilha de imóveis ou outros bens sujeitos a registro, também poderão ser necessários procedimentos adicionais.",
      { h2: "É possível fazer o divórcio sem dividir os bens imediatamente?" },
      "Sim. O divórcio e a partilha patrimonial são questões relacionadas, mas não precisam necessariamente ser concluídas no mesmo momento. O artigo 1.581 do Código Civil estabelece que o divórcio pode ser concedido sem prévia partilha de bens.",
      "Isso pode ser relevante quando o casal deseja formalizar o encerramento do casamento, mas ainda precisa avaliar imóveis, investimentos, dívidas ou outros elementos patrimoniais. Por exemplo, dois cônjuges podem concordar com o divórcio, mas ainda não ter definido como será feita a divisão de um imóvel financiado.",
      "Nesse caso, a possibilidade de deixar a partilha para momento posterior deve ser analisada juridicamente, considerando as consequências patrimoniais e tributárias. A ausência de partilha imediata não elimina os direitos de cada cônjuge sobre o patrimônio.",
      { h2: "Quanto custa fazer um divórcio em cartório?" },
      "O custo depende das características do procedimento. Entre os fatores que podem influenciar o valor estão os emolumentos cartorários, os honorários advocatícios e os eventuais tributos relacionados à transferência patrimonial. Também podem existir despesas com certidões, registros e averbações.",
      "Em Minas Gerais, os emolumentos são disciplinados por normas estaduais e tabelas aplicáveis aos serviços notariais e registrais. Por isso, não existe um valor único que possa ser indicado para todos os divórcios. A análise do patrimônio e dos documentos permite identificar quais despesas podem estar envolvidas.",
      { h2: "Por que alguns cartórios ainda têm dúvida sobre esse procedimento?" },
      "Vale conhecer um ponto em discussão, porque ele pode aparecer na prática.",
      "O artigo 733 do Código de Processo Civil, que é lei federal, prevê o divórcio por escritura pública \"não havendo nascituro ou filhos incapazes\". A Resolução nº 571/2024, por sua vez, é um ato do Conselho Nacional de Justiça — editada a partir de decisão do plenário do CNJ em pedido apresentado pelo Instituto Brasileiro de Direito de Família — e passou a admitir a escritura justamente nas situações em que há filhos menores ou incapazes.",
      "Parte da doutrina questiona se uma resolução pode ampliar hipótese que a lei restringe. O próprio Colégio Notarial do Brasil publicou análise levantando a discussão sobre a constitucionalidade da norma, ao entender que o CNJ teria inovado em matéria reservada ao legislador, em vez de apenas regulamentar.",
      "Outra corrente sustenta que a resolução não contraria a lei, porque não dispensa a proteção judicial: as questões sensíveis dos filhos continuam sendo decididas pelo juiz, e ao cartório cabe apenas formalizar o divórcio depois disso.",
      {
        destaque:
          "Na prática, o que isso significa para quem vai se divorciar: a resolução está em vigor e é aplicada, mas a interpretação ainda está se assentando. Um tabelião pode entender que falta algum requisito e recusar a lavratura, e o próprio § 3º do artigo 34 prevê que a dúvida seja levada ao juiz.",
      },
      "Por isso a análise prévia dos documentos e da decisão judicial existente faz diferença: ela indica se o caso reúne com segurança os requisitos da via extrajudicial ou se o caminho judicial tende a ser mais previsível.",
      { h2: "Quando o divórcio judicial continua sendo necessário?" },
      "Embora a via extrajudicial tenha sido ampliada, o divórcio judicial continua sendo importante em diversas situações. Ele pode ser necessário quando não existe consenso, quando as questões dos filhos ainda precisam ser resolvidas ou quando as circunstâncias exigem intervenção judicial.",
      "Também merece atenção especial a existência de violência doméstica, ameaças, dependência econômica ou possíveis situações de coação. Nesses casos, a prioridade deve ser a proteção dos direitos envolvidos e a avaliação de medidas juridicamente adequadas. A tentativa de acordo não deve comprometer a segurança de qualquer integrante da família.",
      "Para conhecer outras questões relacionadas à separação, guarda e pensão, consulte a página de [Direito de Família](/areas/direito-de-familia) do escritório.",
      { h2: "A mediação pode ajudar durante o divórcio?" },
      "A mediação é um método de resolução de conflitos que busca facilitar o diálogo entre as partes. Em determinadas situações, pode contribuir para a construção de acordos sobre questões patrimoniais e familiares.",
      "Entretanto, o mediador não substitui a atuação judicial necessária para proteger os direitos dos filhos menores. Além disso, a mediação deve ser avaliada com cautela quando existem violência, intimidação ou desequilíbrio significativo entre as partes.",
      "O escritório também disponibiliza informações sobre [mediação de conflitos em Juiz de Fora](/mediacao).",
      { h2: "Conclusão" },
      "O divórcio em cartório com filhos menores é possível no Brasil, desde que sejam observadas as condições estabelecidas pelo Conselho Nacional de Justiça. A principal exigência é que as questões relativas à guarda, à convivência familiar e à pensão alimentícia estejam previamente resolvidas judicialmente.",
      "A mudança representa uma alternativa para casais que desejam formalizar consensualmente o encerramento do casamento, preservando a proteção jurídica dos filhos.",
      "Entretanto, cada família possui particularidades. A escolha entre o procedimento judicial e o extrajudicial deve considerar os direitos das partes, a situação patrimonial e, principalmente, os interesses das crianças e adolescentes envolvidos.",
      "Se precisa compreender quais procedimentos são aplicáveis à sua situação, o escritório atua em Direito de Família com atendimento presencial em Juiz de Fora e online. Conheça os canais na [página de contato](/contato).",
    ],
    faqs: [
      {
        q: "Posso me divorciar em cartório se tiver um filho de 5 anos?",
        a: "Sim, desde que o divórcio seja consensual, as questões de guarda, convivência e alimentos estejam previamente resolvidas judicialmente e os demais requisitos sejam cumpridos.",
      },
      {
        q: "Preciso contratar um advogado para fazer o divórcio em cartório?",
        a: "Sim. A legislação exige assistência de advogado ou defensor público, mesmo quando os cônjuges estão de acordo.",
      },
      {
        q: "Meu cônjuge não quer se divorciar. O que fazer?",
        a: "A falta de concordância não impede que o divórcio seja solicitado judicialmente. A via extrajudicial consensual, porém, não é adequada nessa situação.",
      },
      {
        q: "É obrigatório dividir todos os bens no momento do divórcio?",
        a: "Não necessariamente. A legislação permite que o divórcio seja realizado antes da partilha patrimonial, conforme o artigo 1.581 do Código Civil.",
      },
      {
        q: "Estou grávida. Posso fazer o divórcio em cartório?",
        a: "Não. O artigo 733 do Código de Processo Civil condiciona o divórcio por escritura pública à inexistência de nascituro. Durante a gravidez, o divórcio deve ser conduzido pela via judicial.",
      },
      {
        q: "Posso fazer o divórcio em cartório em Juiz de Fora?",
        a: "Sim, desde que estejam presentes os requisitos legais. A escolha do tabelião de notas é livre, conforme a regulamentação nacional aplicável.",
      },
    ],
    referencias: [
      {
        titulo: "Resolução CNJ nº 571/2024",
        url: "https://atos.cnj.jus.br/atos/detalhar/5496",
      },
      {
        titulo: "Resolução CNJ nº 35/2007",
        url: "https://atos.cnj.jus.br/atos/detalhar/179",
      },
      {
        titulo:
          "Colégio Notarial do Brasil — análise da Resolução 571/24",
        url: "https://www.notariado.org.br/resolucao-571-24-cnj-inventario-extrajudicial-envolvendo-menores-e-incapazes/",
      },
      {
        titulo: "Código de Processo Civil, Lei nº 13.105/2015",
        url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm",
      },
      {
        titulo: "Código Civil, Lei nº 10.406/2002",
        url: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm",
      },
    ],
  },
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
