# 🎨 Especificação de Identidade Visual, Design System e Estrutura de Relatórios — Faculdade Infnet

**Documento Normativo de Referência (Insumo para `references/`)**  
**Código da Norma:** `DS-INFNET-REL-2026`  
**Origem Arquitetural:** Padrão Visual Oficial Infnet (`infnet-presentations` & Diretrizes Acadêmicas da Pós-Graduação `[26E4_2]`)

---

## 1. Filosofia Visual e Editorial (Regras Inegociáveis)

Os relatórios técnicos e executivos da **Faculdade Infnet** seguem exatamente o mesmo rigor visual e pedagógico das apresentações interativas da instituição:

1. **Proibido Usar Fundos Escuros (Tema 100% Claro — Light Mode Only):**
   - **Nunca** utilize fundos escuros (`#061F38`, `#081D33`, `#041221`, `#0B2545`, `#000000` ou similares) em páginas, seções, cartões, tabelas ou caixas de código do relatório.
   - Todas as superfícies devem usar **fundos claros e limpos**:
     - Fundo principal do documento/página: `#FFFFFF` ou `#F8FAFC`
     - Fundo de cartões neutros e blocos de código: `#F8FAFC` ou `#F1F5F9`
     - Fundo de callouts semânticos claros: `#EFF6FF` (Azul/Ciano claro), `#F0FDF4` (Verde claro), `#FFF7ED` (Laranja claro), `#FAF5FF` (Roxo claro)
     - Bordas suaves: `#CBD5E1` e `#E2E8F0`
     - Textos de alto contraste: `#0A345D` (títulos), `#1E293B` (corpo principal) e `#334155` (subtítulos/legendas).

2. **Metodologia Pedagógica Central (Problema ➔ Solução ➔ Teoria):**
   - Nenhum conceito técnico deve ser jogado no vácuo. A explicação central do relatório deve obrigatoriamente percorrer as 3 etapas:
     1. **Situação-Problema do Mundo Real (A Dor Prática)**;
     2. **Solução de Engenharia (A Sacada Prática & Intuição)**;
     3. **Teoria e Formalismo Rigoroso (Matemática, Contratos e Arquitetura)**.

3. **Tolerância Zero a "Reporting Slop":**
   - É proibido preencher o relatório com parágrafos vagos, adjetivos vazios (*"revolucionário"*, *"incrível"*, *"sinergia disruptiva"*) ou textos prolixos sem substância técnica.
   - Priorize tabelas comparativas, árvores de diretório, listas numeradas objetivas, fórmulas explícitas e métricas auditadas.

---

## 2. Design System Oficial Infnet (Tokens CSS & Tipografia)

### 2.1. Paleta Oficial de Cores
```css
:root {
  /* Fundos e Superfícies (100% Tema Claro) */
  --infnet-bg-page: #F8FAFC;
  --infnet-bg-card: #FFFFFF;
  --infnet-bg-subtle: #F1F5F9;
  --infnet-border: #CBD5E1;

  /* Cores Institucionais Principais */
  --infnet-dark-blue: #0A345D;     /* Títulos H1/H2, cabeçalhos e textos de autoridade */
  --infnet-blue-accent: #0E4E8A;   /* Subtítulos H3, bordas de destaque */
  --infnet-cyan: #1BB5D8;          /* Onda SVG superior, badges técnicos, Solução de Engenharia */
  --infnet-cyan-dark: #0284C7;     /* Links e rótulos ciano de alto contraste */

  /* Cores Semânticas e Pedagógicas */
  --infnet-green-accent: #7CB342;  /* Indicadores positivos, automação 85%, conformidade */
  --infnet-green-dark: #2E7D32;    /* Texto de status aprovado */
  --infnet-orange: #FF7043;        /* Alertas, Situação-Problema, Anti-Padrões */
  --infnet-orange-dark: #D84315;   /* Texto de alerta e glosa */
  --infnet-purple: #AB47BC;        /* Teoria Rigorosa, Fórmulas, Variáveis e Pesos */
  --infnet-purple-dark: #7E22CE;   /* Destaque matemático/formal */
}
```

### 2.2. Tipografia Oficial (Google Fonts)
- **Títulos e Cabeçalhos (`h1`, `h2`, `h3`, badges):** `'Outfit'`, sans-serif (pesos 600, 700, 800).
- **Corpo de Texto, Tabelas e Listas (`body`, `p`, `td`, `li`):** `'Inter'`, sans-serif (pesos 400, 500, 600).
- **Código, Árvores de Arquivos, YAML e Expressões Formais (`code`, `pre`):** `'Fira Code'`, monospace.

---

## 3. Os 12 Pequenos Elementos Obrigatórios de Estrutura do Relatório

Todo relatório oficial gerado sobre o tema **"Skills"** deve conter **exatamente os 12 elementos estruturais abaixo**, identificados por seus respectivos marcadores/âncoras (para permitir auditoria automatizada pelo script `validar_relatorio_infnet.py`):

### Elemento 01 — Cabeçalho Institucional com Onda SVG Cyan e Logo (`[HEADER-INFNET]`)
- Deve ficar no topo do documento contendo:
  - A onda decorativa SVG em tons de ciano (`#1BB5D8` e `#0E4E8A`);
  - O logotipo oficial (`infnet_logo.png`);
  - A identificação institucional: **Instituto Infnet — Pós-Graduação em IA e Engenharia de Software**;
  - O nome da disciplina: **Processos Agênticos com ChatGPT Work [26E4_2]**;
  - O Código de Protocolo obrigatório: **`REL-INFNET-2026-SKL`**.

### Elemento 02 — Barra de Metadados Técnicos (`[META-BAR]`)
- Bloco horizontal logo abaixo do cabeçalho exibindo 4 metadados explícitos:
  1. **Autor / Engenheiro Responsável**;
  2. **Data de Emissão**;
  3. **Classificação:** `TÉCNICO-EXECUTIVO`;
  4. **Padrão Visual:** `TEMA 100% CLARO (INFNET LIGHT)`.

#
