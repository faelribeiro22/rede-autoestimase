# 📱 Guia de Ajustes de Responsividade Mobile

## 🎯 Objetivo
Melhorar a experiência mobile do projeto Rede Autoestima-se, corrigindo problemas de:
- Textos colados nas laterais em resoluções pequenas
- Tamanhos de fonte não otimizados para mobile
- Barras de rolagem horizontal indevidas
- Elementos que extrapolam a viewport

---

## 📊 Análise dos Problemas Identificados

### 1. **Padding Excessivo em Mobile**
**Problema:** Muitas seções usam padding fixo (135px, 120px) que não se adaptam bem a telas pequenas.

**Arquivos afetados:**
- `src/app/[locale]/styles.module.scss` - `.homeAbout { padding: 120px 135px }`
- `src/components/Sponsors/styles.module.scss` - `padding: 120px 136px`
- Diversas páginas em `src/app/[locale]/pages/*/styles.module.scss`

**Impacto:** Textos colados nas laterais em celulares (<=768px)

---

### 2. **Tamanhos de Fonte Não Responsivos**
**Problema:** Fontes fixas (36px, 28px) que não escalam adequadamente.

**Locais críticos:**
- Títulos H1 em todas as páginas
- Textos de descrição
- Botões e labels

**Impacto:** Textos muito grandes em mobile, ocupando espaço desnecessário

---

### 3. **Overflow Horizontal (Barra de Rolagem)**
**Problema:** Elementos com largura fixa ou sem `max-width` causam overflow-x.

**Arquivos com `overflow: hidden` (tentativa de correção):**
- `src/app/[locale]/pages/iniciativas/vozes-do-bem-estar/styles.module.scss`
- `src/app/[locale]/pages/iniciativas/fundo-autoviver/styles.module.scss`
- `src/app/[locale]/pages/o-que-fazemos/voluntariado/styles.module.scss`

**Causas comuns:**
- Imagens sem `max-width: 100%`
- Containers com `width` fixo
- Padding/margin excessivos que somam >100vw

---

### 4. **Breakpoints Atuais**
```scss
$breakpoints: (
  "phone": 360px,    // Muito pequeno para maioria dos smartphones modernos
  "tablet": 768px,
  "desktop": 1366px,
  "LGdesktop": 1920px
)
```

**Problema:** Gap entre 360px e 768px é muito grande. Dispositivos entre 375px-414px (iPhone 12/13/14) não têm otimizações específicas.

---

## 🛠️ Plano de Ação - Etapas de Implementação

### **Etapa 1: Configuração Global de Responsividade**

#### 1.1. Adicionar Proteção Global contra Overflow
**Arquivo:** `src/app/globals.scss`

```scss
// Adicionar após as configurações existentes
* {
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  max-width: 100vw;
  position: relative;
}

// Garantir que imagens não causem overflow
img,
picture,
video,
iframe {
  max-width: 100%;
  height: auto;
}
```

**Comando para agent:**
```
Adicione as regras de proteção contra overflow no arquivo src/app/globals.scss após as configurações existentes de font-family
```

---

#### 1.2. Criar Breakpoint Intermediário
**Arquivo:** `src/app/_breakpoints.scss`

```scss
$breakpoints: (
  "phone": 360px,
  "mobile": 414px,    // NOVO: iPhone 12/13/14 Pro
  "tablet": 768px,
  "desktop": 1366px,
  "LGdesktop": 1920px
) !default;
```

**Comando para agent:**
```
Adicione o breakpoint "mobile": 414px no mapa $breakpoints em src/app/_breakpoints.scss, entre "phone" e "tablet"
```

---

### **Etapa 2: Ajustes de Padding/Margin - Página Home**

#### 2.1. Home About Section
**Arquivo:** `src/app/[locale]/styles.module.scss`

**Problema atual:**
```scss
.homeAbout {
  padding: 120px 135px; // Muito padding lateral
}
```

**Solução:**
```scss
.homeAbout {
  padding: 120px 135px;
  
  @include breakpoints.media("<desktop") {
    padding: 80px 40px; // Tablet
  }
  
  @include breakpoints.media("<tablet") {
    padding: 60px 24px; // Mobile
  }
  
  @include breakpoints.media("<mobile") {
    padding: 40px 16px; // Celulares pequenos
  }
}
```

**Comando para agent:**
```
No arquivo src/app/[locale]/styles.module.scss, adicione media queries responsivas para a classe .homeAbout com padding reduzido: 80px 40px para <desktop, 60px 24px para <tablet, e 40px 16px para <mobile
```

---

#### 2.2. Acolhimento Section
**Problema atual:**
```scss
.acolhimento {
  .acolhimentoHeader {
    padding: 100px 0 0; // Sem padding lateral, texto cola nas bordas
  }
}
```

**Solução:**
```scss
.acolhimentoHeader {
  padding: 100px 0 0;
  
  @include breakpoints.media("<tablet") {
    padding: 60px 24px 0; // Adicionar padding lateral mobile
  }
  
  @include breakpoints.media("<mobile") {
    padding: 40px 16px 0;
  }
  
  div, h1 {
    padding: 0 24px; // Padding interno para textos
    
    @include breakpoints.media("<mobile") {
      padding: 0 16px;
    }
  }
}
```

**Comando para agent:**
```
No arquivo src/app/[locale]/styles.module.scss, adicione padding lateral responsivo para .acolhimentoHeader: 60px 24px 0 para <tablet e 40px 16px 0 para <mobile. Adicione também padding interno para div e h1 dentro de acolhimentoHeader
```

---

### **Etapa 3: Ajustes de Tipografia Responsiva**

#### 3.1. Sistema de Tipografia Escalável
**Arquivo:** `src/app/globals.scss`

```scss
// Adicionar variáveis de tipografia fluida
:root {
  // ... variáveis existentes ...
  
  // Tamanhos de fonte responsivos
  --font-size-h1-mobile: clamp(24px, 5vw, 32px);
  --font-size-h1-desktop: clamp(32px, 3vw, 42px);
  
  --font-size-h2-mobile: clamp(20px, 4vw, 24px);
  --font-size-h2-desktop: clamp(24px, 2.5vw, 32px);
  
  --font-size-body-mobile: clamp(14px, 3.5vw, 16px);
  --font-size-body-desktop: 16px;
  
  --line-height-mobile: 1.5;
  --line-height-desktop: 1.75;
}

// Aplicar globalmente
h1 {
  font-size: var(--font-size-h1-mobile);
  line-height: var(--line-height-mobile);
  
  @media (min-width: 768px) {
    font-size: var(--font-size-h1-desktop);
    line-height: var(--line-height-desktop);
  }
}

h2 {
  font-size: var(--font-size-h2-mobile);
  line-height: var(--line-height-mobile);
  
  @media (min-width: 768px) {
    font-size: var(--font-size-h2-desktop);
    line-height: var(--line-height-desktop);
  }
}

p {
  font-size: var(--font-size-body-mobile);
  line-height: var(--line-height-mobile);
  
  @media (min-width: 768px) {
    font-size: var(--font-size-body-desktop);
    line-height: var(--line-height-desktop);
  }
}
```

**Comando para agent:**
```
Adicione variáveis CSS de tipografia fluida no :root do arquivo src/app/globals.scss e crie regras globais para h1, h2 e p que usem essas variáveis com media queries para desktop
```

---

### **Etapa 4: Corrigir Overflows Específicos**

#### 4.1. Card Container (Home)
**Arquivo:** `src/app/[locale]/styles.module.scss`

**Problema:** Cards podem causar overflow em mobile

**Solução:**
```scss
.cardContainer {
  // ... estilos existentes ...
  
  @include breakpoints.media("<tablet") {
    width: 100%;
    max-width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    
    .cardElement {
      max-width: 100%;
      margin: 0 auto;
    }
  }
}
```

**Comando para agent:**
```
No arquivo src/app/[locale]/styles.module.scss, adicione media query <tablet para .cardContainer com width: 100%, max-width: 100%, padding: 0 16px e box-sizing: border-box. Dentro, adicione .cardElement com max-width: 100%
```

---

#### 4.2. Banner Component
**Arquivo:** `src/components/Banner/styles.module.scss`

**Problema atual:**
```scss
.banner {
  overflow: hidden; // Esconde problema ao invés de resolver
  padding: 1% 10% 0 10%;
}
```

**Solução:**
```scss
.banner {
  overflow: hidden;
  padding: 1% 10% 0 10%;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  
  @include breakpoints.media("<tablet") {
    padding: 2% 5% 0 5%;
  }
  
  @include breakpoints.media("<mobile") {
    padding: 3% 16px 0 16px;
  }
  
  img, video {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
```

**Comando para agent:**
```
No arquivo src/components/Banner/styles.module.scss, adicione width: 100%, max-width: 100vw e box-sizing: border-box na classe .banner. Adicione media queries <tablet com padding: 2% 5% 0 5% e <mobile com padding: 3% 16px 0 16px. Adicione regras para img e video com width: 100% e object-fit: cover
```

---

### **Etapa 5: Ajustes de Componentes Específicos**

#### 5.1. Header
**Arquivo:** `src/components/Header/styles.modules.scss`

**Problema:** Padding fixo 138px

**Solução:**
```scss
.header {
  padding: 0 138px;
  
  @include breakpoints.media("<desktop") {
    padding: 0 40px;
  }
  
  @include breakpoints.media("<tablet") {
    padding: 0 24px;
  }
  
  @include breakpoints.media("<mobile") {
    padding: 0 16px;
  }
}
```

**Comando para agent:**
```
No arquivo src/components/Header/styles.modules.scss, adicione media queries responsivas para a classe .header reduzindo o padding: 0 40px para <desktop, 0 24px para <tablet, e 0 16px para <mobile
```

---

#### 5.2. Footer
**Arquivo:** Similar ao Header

**Comando para agent:**
```
Aplique os mesmos ajustes de padding responsivo do Header para o componente Footer
```

---

### **Etapa 6: Páginas Internas - Padrão Geral**

#### 6.1. Template de Ajuste para Páginas
Para **TODAS** as páginas em `src/app/[locale]/pages/*/styles.module.scss`:

**Padrão a aplicar:**
```scss
.section {
  // Desktop: manter padding atual
  // Tablet (<desktop): reduzir para 60-80px lateral
  // Mobile (<tablet): reduzir para 24px lateral
  // Phone (<mobile): reduzir para 16px lateral
  
  @include breakpoints.media("<desktop") {
    padding-left: 40px;
    padding-right: 40px;
  }
  
  @include breakpoints.media("<tablet") {
    padding-left: 24px;
    padding-right: 24px;
  }
  
  @include breakpoints.media("<mobile") {
    padding-left: 16px;
    padding-right: 16px;
  }
}
```

**Lista de arquivos para aplicar:**
- ✅ `src/app/[locale]/pages/acolhimento/styles.module.scss`
- ✅ `src/app/[locale]/pages/doe/styles.module.scss`
- ✅ `src/app/[locale]/pages/sobre-nos/styles.module.scss`
- ✅ `src/app/[locale]/pages/transparencia/styles.module.scss`
- ✅ `src/app/[locale]/pages/o-que-fazemos/como-fazemos/styles.module.scss`
- ✅ `src/app/[locale]/pages/o-que-fazemos/empresas/styles.module.scss`
- ✅ `src/app/[locale]/pages/o-que-fazemos/voluntariado/styles.module.scss`
- ✅ `src/app/[locale]/pages/o-que-fazemos/instituicoes-de-ensino/styles.module.scss`
- ✅ `src/app/[locale]/pages/iniciativas/atendimento-para-ativistas/styles.module.scss`
- ✅ `src/app/[locale]/pages/iniciativas/fundo-autoviver/styles.module.scss`
- ✅ `src/app/[locale]/pages/iniciativas/saude-mental-na-amazonia/styles.module.scss`
- ✅ `src/app/[locale]/pages/iniciativas/vozes-do-bem-estar/styles.module.scss`

**Comando para agent (por arquivo):**
```
No arquivo [CAMINHO_DO_ARQUIVO], identifique todas as classes com padding horizontal fixo (acima de 40px) e adicione media queries responsivas: <desktop com 40px, <tablet com 24px, e <mobile com 16px de padding lateral
```

---

### **Etapa 7: Testes e Validação**

#### 7.1. Checklist de Testes
**Dispositivos/Resoluções para testar:**
- [ ] 320px (iPhone SE)
- [ ] 360px (Android pequeno)
- [ ] 375px (iPhone 12/13 mini)
- [ ] 414px (iPhone 12/13 Pro Max)
- [ ] 768px (iPad portrait)
- [ ] 1024px (iPad landscape)
- [ ] 1366px (Desktop padrão)

**O que verificar em cada resolução:**
- [ ] Nenhuma barra de rolagem horizontal aparece
- [ ] Textos têm no mínimo 16px de espaçamento das laterais
- [ ] Fontes são legíveis (min 14px)
- [ ] Botões são clicáveis (min 44x44px)
- [ ] Imagens não estouram o container
- [ ] Cards não se sobrepõem

---

## 🎯 Comandos Resumidos para Agents

### Comando Completo - Etapa 1 (Global)
```
1. No arquivo src/app/globals.scss, adicione após as regras de body:
   - box-sizing: border-box para *
   - overflow-x: hidden para html e body
   - max-width: 100vw para body
   - max-width: 100% e height: auto para img, picture, video, iframe

2. No arquivo src/app/_breakpoints.scss, adicione "mobile": 414px no mapa $breakpoints entre "phone" e "tablet"
```

### Comando Completo - Etapa 2 (Home)
```
No arquivo src/app/[locale]/styles.module.scss:
1. Adicione media queries para .homeAbout: <desktop com padding 80px 40px, <tablet com 60px 24px, <mobile com 40px 16px
2. Adicione media queries para .acolhimentoHeader: <tablet com padding 60px 24px 0, <mobile com 40px 16px 0
3. Adicione padding interno para div e h1 dentro de .acolhimentoHeader: 0 24px (padrão), 0 16px (<mobile)
```

### Comando Completo - Etapa 3 (Tipografia)
```
No arquivo src/app/globals.scss, adicione no :root:
- Variáveis CSS: --font-size-h1-mobile: clamp(24px, 5vw, 32px), --font-size-h1-desktop: clamp(32px, 3vw, 42px)
- Variáveis CSS: --font-size-h2-mobile: clamp(20px, 4vw, 24px), --font-size-h2-desktop: clamp(24px, 2.5vw, 32px)
- Variáveis CSS: --font-size-body-mobile: clamp(14px, 3.5vw, 16px), --font-size-body-desktop: 16px
- Variáveis CSS: --line-height-mobile: 1.5, --line-height-desktop: 1.75

Adicione regras globais:
- h1 usa --font-size-h1-mobile, com @media (min-width: 768px) usa --font-size-h1-desktop
- h2 usa --font-size-h2-mobile, com @media (min-width: 768px) usa --font-size-h2-desktop
- p usa --font-size-body-mobile, com @media (min-width: 768px) usa --font-size-body-desktop
```

### Comando Completo - Etapa 4 (Components)
```
1. No arquivo src/components/Header/styles.modules.scss, adicione media queries para .header:
   <desktop: padding 0 40px
   <tablet: padding 0 24px
   <mobile: padding 0 16px

2. No arquivo src/components/Banner/styles.module.scss, adicione na classe .banner:
   width: 100%, max-width: 100vw, box-sizing: border-box
   Media queries: <tablet padding 2% 5% 0 5%, <mobile padding 3% 16px 0 16px
   Regras para img/video: width 100%, height auto, object-fit cover
```

---

## 📝 Priorização de Implementação

### **ALTA PRIORIDADE** (Impacto imediato na UX mobile)
1. ✅ Etapa 1.1 - Proteção global overflow
2. ✅ Etapa 2 - Padding Home page
3. ✅ Etapa 5.1 - Header padding
4. ✅ Etapa 3 - Tipografia responsiva

### **MÉDIA PRIORIDADE** (Melhora experiência específica)
5. ✅ Etapa 4 - Corrigir overflows cards/banner
6. ✅ Etapa 6 - Páginas mais acessadas (acolhimento, sobre-nos, doe)

### **BAIXA PRIORIDADE** (Refinamento)
7. ✅ Etapa 6 - Demais páginas internas
8. ✅ Etapa 1.2 - Breakpoint intermediário
9. ✅ Etapa 7 - Testes completos

---

## 🔍 Como Identificar Novos Problemas

### Ferramenta: Chrome DevTools
```bash
# No console do navegador, execute:
document.querySelectorAll('*').forEach(el => {
  if (el.scrollWidth > document.documentElement.clientWidth) {
    console.log('Overflow horizontal:', el);
  }
});
```

### Checklist Visual Rápido
- Abra a página em 375px width
- Segure Shift e arraste a tela horizontalmente
- Se arrastar → tem overflow
- Inspecione o elemento e verifique:
  - `width` fixo sem `max-width`
  - `padding` ou `margin` muito grande
  - Imagem sem `max-width: 100%`

---

## 📚 Referências

- [MDN - Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [CSS Tricks - Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Web.dev - Responsive Web Design Basics](https://web.dev/responsive-web-design-basics/)
- [Material Design - Layout](https://m3.material.io/foundations/layout/understanding-layout/overview)

---

## ✅ Template de Validação (Copiar para Issues/PRs)

```markdown
## Checklist de Responsividade Mobile

### Testes Realizados
- [ ] 320px - iPhone SE (texto legível, sem overflow)
- [ ] 375px - iPhone 12 mini (padding adequado)
- [ ] 414px - iPhone 12 Pro Max (layout balanceado)
- [ ] 768px - iPad (transição suave)

### Validações
- [ ] Nenhuma barra de rolagem horizontal
- [ ] Padding lateral mínimo de 16px em mobile
- [ ] Fontes legíveis (≥14px)
- [ ] Imagens responsivas (max-width: 100%)
- [ ] Botões com área de toque adequada (≥44x44px)

### Arquivos Modificados
- [ ] src/app/globals.scss
- [ ] src/app/[locale]/styles.module.scss
- [ ] src/components/Header/styles.modules.scss
- [ ] [Liste outros arquivos]

### Screenshots
[Adicionar screenshots antes/depois em 375px]
```

---

**Documento criado em:** 17/11/2025  
**Versão:** 1.0  
**Última atualização:** 17/11/2025
