# 🛠️ Guia da Prática (Aula 04): Construindo do Zero uma Skill de Relatório Oficial da Infnet

**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet — Pós-Graduação em IA e Engenharia de Software  
**Professor:** Prof. Dr. Allan Segovia-Spadini  
**Tema do Relatório a Produzir:** *Engenharia de Skills, Divulgação Progressiva e Delegação Estruturada no ChatGPT Work* (Conteúdo da Aula 3)

---

## 🎯 1. O Desafio Prático (Situação-Problema)

Na **Aula 3**, você aprendeu que equipes de alta performance não reinventam instruções complexas a cada semana no chat solto: elas empacotam métodos validados em **Skills reutilizáveis** seguindo a anatomia canônica (`SKILL.md`, `references/`, `scripts/` e `assets/`).

Nesta prática da **Aula 4**, a Coordenação Acadêmica da **Faculdade Infnet** entregou a você uma pasta contendo **apenas os insumos brutos, diretrizes visuais, dados de benchmark, templates e um script validador** — mas **NÃO entregou a Skill pronta (`SKILL.md`)**.

> **Sua Missão:**  
> Construir do zero uma **Skill completa e governada** (ex.: `relatorio-tecnico-infnet`) que capacite o agente do **ChatGPT Work** a gerar um **Relatório Técnico-Executivo Oficial da Infnet** sobre o tema **"Engenharia de Skills"** (conteúdo da Aula 3), respeitando rigorosamente o Design System da Infnet e os **12 Pequenos Elementos Obrigatórios de Estrutura**.

---

## 📦 2. O Que Há Nesta Pasta de Insumos?

Observe que os arquivos abaixo estão todos na raiz desta pasta aguardando que você os organize na estrutura canônica da sua Skill:

| Arquivo Fornecido | O Que Contém | Onde Deve Ficar na Sua Skill? |
| :--- | :--- | :--- |
| `GUIA_DA_PRATICA_CONSTRUCAO_SKILL.md` | Este roteiro com o passo a passo da atividade prática. | Raiz do projeto (Guia do Aluno) |
| `especificacao_identidade_e_estrutura_infnet.md` | Manual completo do Design System Infnet (Paleta Tema 100% Claro, fontes `Outfit`/`Inter`/`Fira Code`, Metodologia Problema ➔ Solução ➔ Teoria) e especificação dos **12 pequenos elementos de estrutura obrigatórios** do relatório. | `references/` |
| `insumo_teorico_skills_aula03.md` | Base de conhecimento oficial sobre o tema **"Skills"** (Escala de Autonomia, Agent Loop, Anatomia `SKILL.md`, Frontmatter YAML, Divulgação Progressiva em 3 Níveis, Regra 85/15, Casca Determinística vs. Núcleo Dinâmico, VisiCalc, Red-Teaming e os 5 Anti-Padrões). | `references/` |
| `dados_benchmark_skills_infnet.json` | Dados numéricos de um estudo de caso em 4 setores da Infnet comparando processos antes e depois do uso de Skills (tempo em minutos, consumo de tokens e conformidade). | `references/` |
| `validar_relatorio_infnet.py` | **Casca Determinística em Python**: calcula sem alucinação as médias do JSON de benchmark (`--modo calcular`) e audita se o relatório gerado contém todos os 12 elementos obrigatórios de estrutura e respeita o Tema Claro (`--modo auditar`). | `scripts/` |
| `template_relatorio_infnet.html` | Template HTML + CSS com a identidade visual oficial da Infnet (onda SVG cyan no topo, paleta oficial e suporte a impressão em PDF). | `assets/` |
| `template_relatorio_infnet.md` | Template equivalente em Markdown estruturado com todos os marcadores das 12 seções/elementos obrigatórios. | `assets/` |
| `infnet_logo.png` | Logotipo oficial do Instituto Infnet para exibição no cabeçalho do relatório. | `assets/` (e na pasta onde o HTML final for salvo) |

---

## 🧩 3. Os 12 Pequenos Elementos de Estrutura que o Relatório Deve Seguir

Para que o relatório produzido pela sua Skill seja aprovado pela auditoria da Infnet, ele **precisa conter obrigatoriamente estes 12 pequenos elementos estruturais** (detalhados no arquivo `especificacao_identidade_e_estrutura_infnet.md`):

1. **`[HEADER-INFNET]` — Cabeçalho Institucional Oficial:** Onda SVG cyan superior (`#1BB5D8`), logotipo `infnet_logo.png`, nome da instituição/disciplina (`[26E4_2]`) e código de protocolo exato **`REL-INFNET-2026-SKL`**.
2. **`[META-BAR]` — Barra de Metadados Técnicos:** Quatro pílulas/badges identificando Autor, Data de Emissão, Classificação (`TÉCNICO-EXECUTIVO`) e Política Visual (`TEMA 100% CLARO`).
3. **`[TLDR-3-PILULAS]` — Resumo Executivo (TL;DR Box):** Caixa de síntese no topo com exatamente **3 pílulas concisas** (máximo de 25 palavras por item): *Dor Operacional*, *Arquitetura da Solução* e *Impacto Mensurável* (proibido *Reporting Slop*).
4. **`[TRIADE-RET]` — A Tríade Pedagógica Infnet (Problema ➔ Solução ➔ Teoria):** Três blocos/cards destacados com as cores oficiais da Infnet:
   - Card Laranja (`#FF7043`): **1. Situação-Problema do Mundo Real**;
   - Card Ciano (`#1BB5D8`): **2. Solução de Engenharia**;
   - Card Roxo (`#AB47BC`): **3. Teoria e Formalismo Rigoroso** (incluindo a fórmula $\mathcal{C} = \langle \text{Outcome}, \text{Context}, \text{Constraints}, \text{Acceptance Criteria} \rangle$).
5. **`[TABELA-AUTONOMIA]` — Tabela da Escala de Autonomia:** Quadro comparativo contrastando *Prompt Engineering*, *Tool Calling* e *Agente de Trabalho com Skills* em 4 dimensões (Escopo de Turno, Estado/Memória, Ferramentas e Papel Humano).
6. **`[ANATOMIA-SKILL]` — Árvore Canônica de Diretórios e YAML Frontmatter:** Bloco em fonte monoespaçada (`Fira Code`) ilustrando a estrutura física `/minha-skill` (`SKILL.md`, `references/`, `scripts/`, `assets/`) e o exemplo de cabeçalho YAML (`name` e `description`).
7. **`[DIVULGACAO-3-NIVEIS]` — Escada de Divulgação Progressiva em 3 Níveis:** Explicação estruturada do **Nível 1 (Descoberta no YAML)**, **Nível 2 (Ativação do `SKILL.md`)** e **Nível 3 (Recursos sob demanda em `references/`, `scripts/` e `assets/`)** para proteção da janela de contexto.
8. **`[MATRIZ-85-15]` — Quadro de Calibração da Regra 85/15:** Divisão clara entre **85% de Automação Mecânica/Determinística** (Agente + Scripts) e **15% de Julgamento Crítico Humano (Portão HITL)**.
9. **`[CASCA-VS-NUCLEO]` — Arquitetura Casca Determinística vs. Núcleo Dinâmico:** Comparação técnica entre o que não pode variar (código Python, schemas, templates) e o raciocínio em prosa do modelo, citando a analogia do **VisiCalc / Compressão da Costura ($A \to C$)**.
10. **`[ANTI-PADROES-5]` — Catálogo dos 5 Anti-Padrões + Regras de Ouro:** Os 5 anti-padrões clássicos (*Mega-Skill Monolítica*, *Reporting Slop*, *Lavagem de Intuição por Score de IA*, *Armadilha do Copiar-Colar* e *Skills de Estranhos Sem Auditoria*) + Callout com as regras **"Corrija a Skill, Não a Saída"** e **"Don't Average Your Experts"**.
11. **`[TABELA-METRICAS]` — Tabela de Benchmark Quantitativo Auditado:** Tabela apresentando os números exatos dos 4 setores da Infnet e as médias globais calculadas pelo script `validar_relatorio_infnet.py --modo calcular`.
12. **`[HOMOLOGACAO-4-CAMADAS]` — Checklist de Revisão em 4 Camadas e Rodapé de Rastreabilidade:** Quadro final de auditoria humana (*1. Decisão*, *2. Fatos e Números*, *3. Completude dos 12 Elementos*, *4. Formato e Identidade Infnet*) + rodapé listando as fontes consultadas.

---

## 🚀 4. Passo a Passo para Construir e Testar Sua Skill

### Etapa 1: Organizar a Anatomia Física da Skill
Crie uma subpasta para a sua Skill (por exemplo, `skill_relatorio_infnet/`) e organize os arquivos fornecidos seguindo o padrão aberto da Aula 3:

```text
skill_relatorio_infnet/
├── SKILL.md                                         <-- (VOCÊ VAI CRIAR ESTE ARQUIVO!)
├── references/
│   ├── especificacao_identidade_e_estrutura_infnet.md
│   ├── insumo_teorico_skills_aula03.md
│   └── dados_benchmark_skills_infnet.json
├── scripts/
│   └── validar_relatorio_infnet.py
└── assets/
    ├── infnet_logo.png
    ├── template_relatorio_infnet.html
    └── template_relatorio_infnet.md
```

### Etapa 2: Escrever o `SKILL.md` (O Cérebro do Método)
Crie o arquivo `skill_relatorio_infnet/SKILL.md` contendo:
1. **Frontmatter YAML obrigatório** no topo (`---`) com:
   - `name: relatorio-tecnico-infnet`
   - `description:` Uma descrição de ativação precisa dizendo **o que** a skill faz e **quando** o agente deve acioná-la (gatilhos como *"gerar relatório da Infnet"*, *"relatório técnico sobre Skills"*, *"documento no padrão visual Infnet"*).
2. **Fluxo de Execução em Etapas (Divulgação Progressiva):**
   - Instrua o agente a ler `references/especificacao_identidade_e_estrutura_infnet.md` e `references/insumo_teorico_skills_aula03.md`;
   - Instrua o agente a executar primeiro a **Casca Determinística** para calcular as métricas sem erro:
     ```bash
     uv run python skill_relatorio_infnet/scripts/validar_relatorio_infnet.py --modo calcular --entrada skill_relatorio_infnet/references/dados_benchmark_skills_infnet.json --saida metricas_consolidadas.json
     ```
   - Instrua o agente a preencher o template oficial (`assets/template_relatorio_infnet.html` e/ou `assets/template_relatorio_infnet.md`) garantindo a presença dos **12 elementos obrigatórios de estrutura** e mantendo o **Tema 100% Claro**;
   - Instrua o agente a rodar a **auditoria determinística** sobre o relatório gerado antes de entregá-lo ao usuário:
     ```bash
     uv run python skill_relatorio_infnet/scripts/validar_relatorio_infnet.py --modo auditar --relatorio relatorio_skills_infnet.html
     ```
   - Defina o **Portão Humano (Regra 85/15)** ao final para revisão em 4 camadas.

### Etapa 3: Delegar a Geração do Relatório no ChatGPT Work
Com a pasta da sua Skill pronta, abra o **ChatGPT Work** (ou seu agente no workspace da pasta) e peça:
> *"Utilizando a nossa skill de relatórios oficiais da Infnet, produza o Relatório Técnico-Executivo completo sobre o tema 'Engenharia de Skills e Delegação Estruturada no ChatGPT Work' (em HTML e Markdown), valide o resultado com o script determinístico e apresente o resumo para minha homologação."*

### Etapa 4: Aplicar a Regra de Ouro ("Corrija a Skill, Não a Saída")
Se o script `validar_relatorio_infnet.py --modo auditar` apontar que algum dos 12 elementos estruturais ficou faltando ou que houve violação visual:
- **NÃO edite o arquivo final manualmente!**
- Aprimore a instrução dentro do seu `SKILL.md` e peça para o agente regerar o relatório até atingir **12/12 (100% de Conformidade Infnet)**.

---

## 🏆 5. Entregáveis Esperados da Prática
1. A pasta `skill_relatorio_infnet/` estruturada com o seu arquivo **`SKILL.md`** autoral.
2. O relatório final gerado (`relatorio_skills_infnet.html` e/ou `relatorio_skills_infnet.md`).
3. O log/laudo de aprovação `12/12` emitido pelo script `validar_relatorio_infnet.py --modo auditar`.
