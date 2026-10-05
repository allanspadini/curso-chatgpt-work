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
