# Implementação — Hero + SEO da Home
> Pronto para aplicar no WordPress. Última atualização: junho 2026.

---

## 1. SEO — Rank Math PRO (fazer primeiro, leva 2 min)

**Onde:** WP Admin → Rank Math → Títulos e Meta → Página Inicial
Ou: editar a página Home no Elementor → aba Rank Math no painel lateral → Meta

**Meta Title:**
```
Flávia Machado Advogados Associados | Advocacia em Juiz de Fora
```
*(63 caracteres — dentro do limite ideal do Google)*

**Meta Description:**
```
Escritório de advocacia em Juiz de Fora com atendimento humanizado. Atuação em Direito à Saúde, Família, Consumidor, Violência contra a Mulher e Direitos LGBTQIA+. Entre em contato.
```
*(183 caracteres — dentro do limite)*

> Remover qualquer referência a "Salvador Allende" em qualquer campo de SEO do site.

---

## 2. Hero — Conteúdo para o Elementor

### Título principal (H1)
```
Orientação jurídica com atenção a cada caso.
```

### Subtítulo
```
O escritório Flávia Machado Advogados Associados atua nas áreas de Direito à Saúde, Família, Consumidor e mais — com escuta atenta e condução responsável de cada caso em Juiz de Fora, MG.
```

### Botão 1 (primário — fundo azul #192A52, texto branco)
```
Fale com o escritório
```
Link: `https://wa.me/5532999885341`

### Botão 2 (secundário — contorno azul, texto azul)
```
Conheça as áreas de atuação
```
Link: `/areas-de-atuacao` (ou a página correspondente no WP)

### Foto recomendada
Usar foto profissional da Dra. Flávia (já existe no site atual, na seção "Nossa Equipe"). 
Remover o slideshow com imagens de banco de fotos genéricas.

---

## 3. Como aplicar no Elementor (passo a passo)

### SEO (Rank Math)
1. Acessar WP Admin
2. Ir em **Rank Math → Títulos e Meta → Página Inicial**
3. Colar o **Meta Title** no campo "Título"
4. Colar a **Meta Description** no campo "Descrição"
5. Salvar

### Hero
1. Acessar WP Admin → Páginas → Home → **Editar com Elementor**
2. Localizar a seção Hero (provavelmente o primeiro bloco)
3. Clicar no elemento de texto do título → substituir pelo **Título principal** acima
4. Clicar no elemento de texto do subtítulo → substituir pelo **Subtítulo** acima
5. Clicar no botão "Falar Conosco" (ou equivalente):
   - Texto: `Fale com o escritório`
   - Link: `https://wa.me/5532999885341`
6. Ajustar ou adicionar segundo botão se não existir:
   - Texto: `Conheça as áreas de atuação`
   - Link: página de Áreas de Atuação
7. Trocar a imagem do hero pela foto da Dra. Flávia
8. **Publicar**

---

## 4. Cores dos botões (para garantir consistência)

| Botão | Fundo | Texto | Estado hover |
|-------|-------|-------|--------------|
| Primário | #192A52 | #FFFFFF | #2B4A8A |
| Secundário | Transparente | #192A52 | fundo #F4F7FB |

---

## 5. Verificação pós-implementação

Depois de publicar, verificar:
- [ ] Google → pesquisar `site:advogadojuizdefora.com.br` e confirmar que o meta description não é mais "Salvador Allende"
- [ ] Abrir o site em aba anônima e ver o hero como visitante novo
- [ ] Clicar no botão WhatsApp e confirmar que abre o número (32) 99988-5341
- [ ] Inspecionar o título H1 da página (F12 → Elements → buscar `<h1>`)

---

## Próximo passo depois do hero e SEO

Atualizar as **Áreas de Atuação** — reorganizar a lista de 21 serviços em 5 cards por área prioritária.
