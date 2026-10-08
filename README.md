# Processos Agênticos com ChatGPT Work [26E4_2]

> **Pós-Graduação EAD — Faculdade Infnet**  
> **Docente:** Prof. Dr. Allan Segovia-Spadini  
> 🌐 **Portal & Apresentações Online:** [https://allanspadini.github.io/curso-chatgpt-work/](https://allanspadini.github.io/curso-chatgpt-work/)

---

## 🎯 Sobre a Disciplina

Esta disciplina aborda a transição arquitetural e prática entre o uso conversacional tradicional de Grandes Modelos de Linguagem (LLMs via chat turno a turno) e a engenharia de **Processos Agênticos Corporativos orientados a desfechos** (*Outcome-Based Delegation*).

Exploramos a infraestrutura do **ChatGPT Work & Codex** da OpenAI, conectores OAuth corporativos com sistemas de registro (Google Drive, Slack, GitHub, Jira, ERPs), contratos agênticos formais, calibração de autonomia via **Princípio da Reversibilidade**, portões de auditoria humana (*Human-in-the-Loop* - HITL) e esteiras de maturidade organizacional.

Toda a abordagem pedagógica adota rigorosamente a metodologia **Situação-Problema do Mundo Real ➔ Solução de Engenharia ➔ Teoria Rigorosa**.

---

## 📚 Trilha de Aulas

### [Aula 01: Fundamentos de IA, Mudança de Paradigma e Engenharia de Workflows Agênticos](./aula_01_fundamentos_e_processos_agenticos/)
- **Status:** Disponível
- **Apresentação Interativa:** [Acessar Slides da Aula 1](https://allanspadini.github.io/curso-chatgpt-work/aula_01_fundamentos_e_processos_agenticos/)
- **Download do PDF:** [Baixar aula_01_apresentacao.pdf](https://allanspadini.github.io/curso-chatgpt-work/aula_01_fundamentos_e_processos_agenticos/aula_01_apresentacao.pdf)
- **Tópicos Abordados:**
  1. *A Ilusão da Fluência & Gargalo dos Prompts Pontuais* (alucinação silenciosa e fadiga cognitiva do operador).
  2. *A Natureza Probabilística dos LLMs* (amostragem autorregressiva $P(w_t | w_{<t}, \mathcal{C})$ e os 4 Hábitos Duráveis).
  3. *A Grande Virada: Chat vs. Work* (ruptura de paradigma: unidade de trabalho orientada a desfecho e contexto conectado via conectores corporativos).
  4. *Engenharia de Contratos Agênticos* (os 4 pilares: Desfecho, Contexto, Restrições e Critérios de Aceite; modelagem formal de fluxo em 7 etapas).
  5. *Reversibilidade, Governança e Maturidade* (autonomia proporcional ao risco, portões HITL, protocolo de revisão em 6 camadas e esteira de evolução em 4 estágios).

---

### [Aula 02: Configuração de Agentes com AGENTS.md e Arquitetura de Subagentes Especializados](./aula_02_configuracao_agents_md_e_subagentes/)
- **Status:** Disponível
- **Apresentação Interativa:** [Acessar Slides da Aula 2](https://allanspadini.github.io/curso-chatgpt-work/aula_02_configuracao_agents_md_e_subagentes/)
- **Download do PDF:** [Baixar aula_02_apresentacao.pdf](https://allanspadini.github.io/curso-chatgpt-work/aula_02_configuracao_agents_md_e_subagentes/aula_02_apresentacao.pdf)
- **Tópicos Abordados:**
  1. *Governança Determinística via AGENTS.md* (GitOps de IA, precedência em 3 camadas e soberania do nó folha).
  2. *Gestão de Memória, Fallbacks e Code Review Rules* (teto de 32 KiB / `project_doc_max_bytes`, truncamento seguro e regras de revisão).
  3. *Subagentes Especializados & Combate ao Context Rot* (mitigação da perda de atenção, matriz Sol vs Luna e isolamento de contexto).
  4. *Custom Agents em TOML, Sandboxing e Orquestração* (schema declarativo, barreiras de sincronização e princípio do menor privilégio).

#### 📦 Materiais Práticos da Aula 02 (Downloads em .zip)
| Recurso Prático | Descrição | Link de Download (.zip) |
| :--- | :--- | :--- |
| 📁 **Análise de Concursos** | Pesquisa autônoma na Web, regras de AGENTS.md e geração de Excel | 📥 [Baixar analise-de-concursos.zip](https://github.com/allanspadini/curso-chatgpt-work/raw/main/aula_02_configuracao_agents_md_e_subagentes/analise-de-concursos.zip) |
| 🧾 **Notas Fiscais** | Pipeline multimodal (OCR em JPEG) para extração de dados em JSON | 📥 [Baixar notas_fiscais.zip](https://github.com/allanspadini/curso-chatgpt-work/raw/main/aula_02_configuracao_agents_md_e_subagentes/notas_fiscais.zip) |
| 👥 **Processamento de Reuniões** | Árvore hierárquica de `AGENTS.md` com 4 subpastas especializadas (`atas`, `resumos`, `tarefas`, `dados`) | 📥 [Baixar reunioes.zip](https://github.com/allanspadini/curso-chatgpt-work/raw/main/aula_02_configuracao_agents_md_e_subagentes/reunioes.zip) |
| 📦 **Todos os Recursos** | Pacote unificado com todos os laboratórios práticos da Aula 02 | 📥 [Baixar todos_materiais_praticos_aula_02.zip](https://github.com/allanspadini/curso-chatgpt-work/raw/main/aula_02_configuracao_agents_md_e_subagentes/todos_materiais_praticos_aula_02.zip) |

---

## 🛠️ Tecnologias e Arquitetura

- **Frontend das Apresentações:** React 18, Vite, KaTeX (renderização matemática) e Lucide React.
- **Canvas Canônico:** 16:9 (1366 × 768 px) com auto-scaler responsivo para 1080p, 1440p e 4K.
- **Exportação de PDF:** Playwright + Google Chrome Headless + Pillow (`uv run --with playwright --with pillow python scripts/export_pdf.py`).
- **Automação CI/CD:** GitHub Actions com deploy contínuo para GitHub Pages.

---

## 🚀 Como Executar Localmente

### 1. Clonar o Repositório
```bash
git clone https://github.com/allanspadini/curso-chatgpt-work.git
cd curso-chatgpt-work
```

### 2. Instalar Dependências e Executar a Apresentação
```bash
# Instalar dependências da raiz
npm install

# Instalar dependências da Aula 1
cd aula_01_fundamentos_e_processos_agenticos/apresentacao
npm install

# Iniciar servidor de desenvolvimento da Aula 1
npm run dev
```

### 3. Build Unificado do Portal (GitHub Pages)
```bash
# Na raiz do projeto:
npm run build
npm run preview
```

### 4. Gerar Nova Versão em PDF dos Slides
```bash
uv run --with playwright --with pillow python scripts/export_pdf.py
```

---

## 👨‍🏫 Corpo Docente

- **Prof. Dr. Allan Segovia-Spadini**
  - Doutorado e Mestrado em Ciências pela Universidade de São Paulo (USP), com período sanduíche na Delft University of Technology (TU Delft, Holanda).
  - Especialista em Modelagem Estatística, Machine Learning, Deep Learning e Engenharia de Sistemas Agênticos com LLMs.
  - Docente dos cursos de Pós-Graduação da Faculdade Infnet.

---

## 📄 Licença

Conteúdo pedagógico e material de apoio desenvolvido para os cursos de Pós-Graduação da Faculdade Infnet. © 2026 Instituto Infnet. Todos os direitos reservados.
