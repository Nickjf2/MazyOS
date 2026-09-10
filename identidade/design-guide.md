# Identidade visual

> Como a marca aparece em tudo que o MazyOS gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.

---

## Cores

- **Fundo principal:** Branco (#FFFFFF)
- **Azul institucional (principal):** #192A52 — extraído do header do site atual e confirmado pela logo
- **Azul médio (secundário):** #2B4A8A — para subtítulos, bordas, detalhes
- **Texto principal:** #1A1A2E (quase preto com toque azul)
- **Fundo alternativo / cards:** #F4F7FB (azul muito suave, quase branco)
- **Cor de destaque / CTA:** #192A52 com hover em #2B4A8A
- **Cor proibida:** Laranja (#F0A500) e vermelho (#CF2E2E) — usados no site antigo, não representam a marca

> Logo existe em 3 versões: quadrada (balança + coroa + nome), horizontal (para header) e monograma FM.
> Todos em azul escuro #192A52 sobre fundo branco.

---

## Tipografia

- **Títulos e destaques:** Lora (serifada) — contraste moderado entre traço fino e grosso, então funciona tanto num título de 60px quanto num rótulo de cartão de 18px
- **Corpo, subtítulos e botões:** Inter (sem serifa) — legibilidade alta em tela e em tamanho pequeno
- **Peso do título:** Bold / SemiBold para hierarquia clara

> Definido em 10/09/2026. Antes era Playfair Display, trocada por ter contraste
> alto demais: as hastes finas sumiam nos títulos menores e o resultado lia mais
> como marca de moda que como escritório de advocacia.
>
> As duas fontes entram por variável CSS (`--font-display` e `--font-body`) em
> `site/src/app/layout.tsx`. As variáveis não citam o nome da fonte, então trocar
> a face no futuro não exige mexer no Tailwind nem no CSS.

---

## Estilo geral

Advocacia boutique moderna. Elegante, limpo, com hierarquia visual clara. Não parece escritório
pesado de brasão dourado — parece escritório contemporâneo de alta credibilidade. Espaçamento
generoso, respiro entre seções, fotografia profissional, ícones discretos.

Referências de estilo: advocacia boutique, escritório moderno, institucional sofisticado.

---

## Elementos-chave

- Bordas: ausência ou bordas sutis (sem exagero decorativo)
- Border-radius dos cards: suave — 8px a 12px
- Botões: fundo azul institucional, texto branco, sem borda arredondada exagerada
- Sombras: suaves, para dar profundidade sem peso visual

---

## O que NUNCA fazer

- Usar gradientes chamativas ou cores saturadas
- Usar elementos pesados de brasão jurídico tradicional
- Usar linguagem visual de "promoção" ou "oferta"
- Misturar muitas fontes (máximo 2)
- Poluir seções com excesso de texto ou ícones
- Usar imagens de banco de fotos genéricas (balança da justiça, martelo) sem critério

---

## Logo

- **Arquivo:** *(pendente — solicitar logo em PNG/SVG)*
- **Versão pra fundo escuro:** *(pendente)*
- **Onde usar:** Header, rodapé, slide final de carrosséis, materiais institucionais
- **Tamanho sugerido:** largura entre 120-180px em headers

---

## Observações adicionais

A marca já possui identidade em azul institucional. O redesign deve preservar reconhecimento
da marca enquanto moderniza a aparência. Evitar aparência antiga e pesada — simplificar.
