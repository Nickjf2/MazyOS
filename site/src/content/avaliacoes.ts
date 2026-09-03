// Avaliações públicas do perfil do escritório no Google.
//
// Transcritas literalmente do Perfil da Empresa em 03/09/2026. Não editar o
// texto das pessoas — se uma avaliação precisar de corte, tirar a avaliação
// inteira em vez de reescrever.
//
// Critério de seleção (Provimento 205/2021 da OAB): entram avaliações que
// falam da experiência com o atendimento. Ficam de fora as que descrevem o
// caso concreto ou afirmam resultado obtido, ainda que a pessoa tenha escrito
// por conta própria.
//
// Para atualizar: Perfil da Empresa > Avaliações. O total e a nota ficam no
// topo da tela.

export const avaliacoesGoogle = {
  nota: 5.0,
  total: 57,
  atualizadoEm: "2026-09-03",
  // Link do perfil, para quem quiser conferir a origem.
  perfilUrl:
    "https://search.google.com/local/reviews?placeid=ChIJRWVg3l-bmAARhzw8nbNB9WY",
  avaliarUrl:
    "https://search.google.com/local/writereview?placeid=ChIJRWVg3l-bmAARhzw8nbNB9WY",
} as const;

export interface Avaliacao {
  autor: string;
  texto: string;
  /** como aparece no perfil, ex.: "Há 29 semanas" */
  quando: string;
}

export const avaliacoes: Avaliacao[] = [
  {
    autor: "Marilaine Carmanini",
    texto:
      "Profissionais competentes, atenciosas e cuidadosas com seus clientes.",
    quando: "Há 29 semanas",
  },
  {
    autor: "Adriana Mascarenhas",
    texto: "Só tenho elogios. Profissionalismo, seriedade e empatia!!!",
    quando: "Há 49 semanas",
  },
  {
    autor: "Cristiane Costa",
    texto:
      "Excelentes profissionais neste escritório. Defendem nossos direitos com dedicação e eficiência.",
    quando: "Há 29 semanas",
  },
  {
    autor: "Rodrigo Fontes",
    texto: "Excelentes profissionais e atenciosas.",
    quando: "Há 42 semanas",
  },
];
