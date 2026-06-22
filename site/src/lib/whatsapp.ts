import { site } from "./site";

// Geração de links de WhatsApp contextuais (MASTER §20.2).
// Cada página passa a própria área, de modo que a mensagem já chega
// dizendo de onde a pessoa veio: "vim do site do escritório, na área de X".

const messages: Record<string, string> = {
  geral:
    "Olá, vim pelo site do escritório Flávia Machado Advogados e gostaria de uma orientação inicial.",
  mediacao:
    "Olá, vim pelo site do escritório, na área de Mediação de Conflitos, e gostaria de orientação inicial.",
  "direito-da-saude":
    "Olá, vim pelo site do escritório, na área de Direito da Saúde, e gostaria de entender os próximos passos do meu caso.",
  "negativa-plano-saude":
    "Olá, vim pelo site do escritório, na área de Negativa de Plano de Saúde, e gostaria de orientação inicial.",
  "reajuste-abusivo-plano-saude":
    "Olá, vim pelo site do escritório, na área de Reajuste de Plano de Saúde, e gostaria de orientação inicial.",
  "tea-aba-plano-saude":
    "Olá, vim pelo site do escritório, na área de Terapias para TEA, e gostaria de orientação.",
  "medicamentos-alto-custo":
    "Olá, vim pelo site do escritório, na área de Medicamentos de Alto Custo, e gostaria de orientação inicial.",
  "home-care":
    "Olá, vim pelo site do escritório, na área de Home Care, e gostaria de orientação inicial.",
  inventario:
    "Olá, vim pelo site do escritório, na área de Inventário e Sucessões, e gostaria de orientação inicial.",
  "planejamento-sucessorio":
    "Olá, vim pelo site do escritório, na área de Planejamento Sucessório, e gostaria de orientação inicial.",
  "direito-de-familia":
    "Olá, vim pelo site do escritório, na área de Direito de Família, e gostaria de orientação inicial.",
  "direito-da-mulher":
    "Olá, vim pelo site do escritório, na área de Direito da Mulher, e gostaria de uma orientação sigilosa.",
  "direitos-lgbtqia":
    "Olá, vim pelo site do escritório, na área de Direitos LGBTQIA+, e gostaria de orientação inicial.",
};

export type WhatsAppContext = keyof typeof messages;

export function whatsappLink(context: string = "geral"): string {
  const text = encodeURIComponent(messages[context] ?? messages.geral);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export const whatsappAriaLabel =
  "Abrir conversa no WhatsApp com a equipe do escritório";
