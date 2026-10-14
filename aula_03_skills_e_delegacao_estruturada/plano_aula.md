# Plano de Aula — Aula 3

**Curso:** Pós-Graduação EAD em Inteligência Artificial e Engenharia de Software  
**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet  
**Professor:** Prof. Dr. Allan Segovia-Spadini  
**Título da Aula:** Engenharia de Skills, Contexto Durável e Delegação Estruturada  
**Duração Estimada:** 3 horas (divididas em 4 blocos com prática de mercado guiada e laboratórios de skills)  

---

## 1. Ementa e Visão Geral da Aula

Nesta terceira aula da disciplina, consolidamos a transição entre as delegações operacionais ad-hoc e a engenharia de **Skills Reutilizáveis** no ecossistema **ChatGPT Work**.

A aula é inaugurada com uma **Prática Guiada de Mercado** desenhada especialmente para fixar os conceitos das Aulas 1 e 2 e acolher os estudantes com dificuldades e maior perfil de gestão (incluindo seniores e alunos de terceira idade). Utilizando o **ChatGPT Work instalado localmente** na máquina do estudante e governado por um arquivo **AGENTS.md**, os alunos executam a triagem e auditoria de propostas comerciais de fornecedores em PDF, produzindo as evidências completas para cumprir as **8 primeiras rubricas do Projeto da Disciplina** (Rubricas de Fontes Externas e Delegação Estruturada).

Em seguida, construímos o vocabulário formal de Skills, diferenciando *Prompt Engineering*, *Tool Calling* e *Agentes Autônomos* quanto à autonomia operacional. Dissecamos a anatomia do padrão aberto **SKILL.md**, o frontmatter YAML com metadados de ativação, o princípio cognitivo da **Divulgação Progressiva em 3 Níveis** e a calibração de governança via **Regra 85/15**. Finalizamos com testes em múltiplos cenários e publicação controlada no workspace.

---

## 2. Metodologia Pedagógica Central: Problema ➔ Solução ➔ Teoria

A condução didática segue rigorosamente o ciclo pedagógico da disciplina:

1. **Situação-Problema do Mundo Real (A Dor Prática):**
   - *Gargalo 1 (Insegurança & Alucinação em Processos Críticos):* O analista ou gestor que precisa auditar 3 propostas comerciais extensas em PDF, perdendo 4 horas de digitação manual e enfrentando o perigo da alucinação do chat solto sem fontes conectadas.
   - *Gargalo 2 (Reinvenção Contínua da Roda):* Equipes que precisam repetir instruções complexas de negócio toda semana porque os fluxos não foram empacotados como métodos reutilizáveis (*Skills*).

2. **Solução de Engenharia (A Sacada Prática & Intuição):**
   - *Solução 1 (Governança Local com AGENTS.md e Contexto Durável de Project):* O ChatGPT Work instalado no computador lê arquivos locais em modo seguro (*Read-Only*), guiado por um contrato de delegação com critérios de aceite explícitos.
   - *Solução 2 (Empacotamento em SKILL.md com Divulgação Progressiva):* Transformação do método validado em uma Skill com metadados de ativação em YAML, que só carrega instruções detalhadas quando a tarefa específica é acionada.

3. **Teoria e Formalismo Rigoroso (Matemática, Contratos e Governança):**
   - Formalização do Contrato Agêntico: $\mathcal{C} = \langle \text{Outcome}, \text{Context}, \text{Constraints}, \text{Acceptance Criteria} \rangle$.
   - A Matriz de Reversibilidade e o Princípio do Menor Privilégio para permissões de escrita de Apps.
   - A sintaxe canônica do SKILL.md e a formalização da Regra 85/15 (85% de execução mecânica / 15% de julgamento humano em portões HITL).

---

## 3. Alinhamento com as Rubricas do Projeto da Disciplina

Esta aula garante a entrega e demonstração das seguintes rubricas da avaliação final:

| Rubrica | Critério Avaliado | Atividade Correspondente na Aula 3 |
| :--- | :--- | :--- |
| **1.1** | Descrever a solução pretendida e a expectativa da automação antes de usar a IA. | Passo 1 da Prática: Registro pré-IA do problema, dor e métrica de sucesso (de 4h para 15min). |
| **1.2** | Diferenciar conversa exploratória de delegação real. | Passo 1 da Prática: Contraste explícito entre pedir ideias soltas vs delegar auditoria com limites. |
| **1.3** | Fundamentar resposta em fonte aprovada (Chat simples) e comparar com resposta sem fonte. | Passo 1 da Prática: Teste comparativo lado a lado (alucinação sem anexo vs precisão com PDF local). |
| **1.4** | Estruturar instrução como especificação de trabalho com plano de revisão em camadas. | Passo 2 da Prática: Redação da Work Spec e matriz de revisão em 4 camadas (Decisão, Fatos, Completude, Formato). |
| **1.5** | Mapear fluxo de trabalho (gatilho, fontes, transformações, saída, aprovações). | Passo 2 da Prática: Pipeline em 5 fases do processo de compras de fornecedores. |
| **1.6** | Redigir contrato de agente completo com resultado, contexto e restrições. | Passo 2 da Prática: Arquivo `AGENTS.md` na raiz da pasta local do projeto. |
| **2.1** | Escolher entre Chat e ChatGPT Work e executar delegação real com critérios de aceite. | Passo 3 da Prática: Operação no modo Work com tabela comparativa, prazos e perguntas técnicas. |
| **2.2** | Configurar Project como contexto durável e avaliar riscos de permissão de escrita de Apps. | Passo 3 da Prática: Criação do Project local no ChatGPT Work Desktop e matriz de risco Read-Only vs Write. |

---

## 4. Conteúdo Programático Detalhado (4 Módulos)

### Módulo 1: Prática de Mercado e Consolidação de Processos Agênticos (Slides 03–05)
- **O Caso Real de Mercado:** Triagem, conformidade orçamentária e auditoria de 3 propostas de fornecedores de TI (Alpha, Beta e Gamma).
- **Passo 1 (Antes de Abrir o ChatGPT):** Redação da intenção, dor, métrica de sucesso e separação entre conversa exploratória e delegação real.
- **Passo 1 (O Teste de Fontes no Chat):** O perigo do "achismo" (alucinação sem anexo) vs. a fundamentação em documento PDF local com citação de cláusulas.
- **Passo 2 (Mapeamento do Pipeline em 5 Fases):** Gatilho ➔ Fontes de Entrada ➔ Transformações & Cálculos ➔ Entregável de Saída (`parecer_aquisicao.md`) ➔ Portão Humano de Aprovação (HITL).
- **Passo 2 (Contrato de Agente no `AGENTS.md` Local):** Definição de Outcome, Contexto (teto de R$ 50k, 60 dias) e Restrições rígidas (somente leitura, sem envio de e-mails).
- **Passo 2 (Work Spec & Revisão em 4 Camadas):** Auditoria sistemática de Decisão, Fatos/Números, Completude e Formato.
- **Passo 3 (Operação no ChatGPT Work Local):** Criação do Project como ambiente de contexto durável vinculando a pasta local.
- **Passo 3 (Delegação com Critérios de Aceite):** Execução no modo Work com critérios testáveis e geração do parecer executivo.
- **Passo 3 (Governança e Risco de Apps):** Avaliação de risco de permissões de escrita (*Write Permissions*) e salvamento das 5 evidências do projeto.

### Módulo 2: Autonomia e Vocabulário de Skills (Slides 06–07)
- **O Mecanismo de Execução: The Agent Loop (Slide 06):** O ciclo fechado e autônomo entre Usuário (Prompt), Modelo (LLM), Ferramenta (Tool Call / Tool Output) e Resposta (Response), explicando como a IA aciona ferramentas antes da prática de skills.
- **Situação-Problema do Mundo Real (Slide 07):** Prestação de contas e auditoria de reembolsos corporativos de viagens (a dor da conferência manual de dezenas de recibos, o julgamento tácito do especialista sênior vs. o risco de erro humano e a limitação do chat comum).
- **A Escala de Autonomia em IA:** Diferenciação técnica entre:
  1. *Prompt Engineering:* Otimização de instrução estática para um único turno de interação.
  2. *Tool Calling:* O modelo seleciona funções e ferramentas sob demanda com parâmetros definidos.
  3. *Agente de Trabalho:* Assume a responsabilidade por um desfecho multi-etapas com estado e ciclo de revisão.
- **O Conceito de Skill:** O que é uma Skill? A unidade de método empacotado que o agente lê, compreende e reproduz.
- **Quando Criar uma Skill:** Critérios de recorrência, complexidade procedimental e necessidade de padronização corporativa.

### Módulo 3: Anatomia do SKILL.md e Empacotamento de Especialista (Slides 07–08)
- **Situação-Problema do Mundo Real (Slide 07):** Prestação de contas e auditoria de reembolsos corporativos de viagens (a dor da conferência manual de dezenas de recibos, o julgamento tácito do especialista sênior num dia bom vs. o risco de erro humano e as limitações do chat comum).
- **A Anatomia Canônica de uma Skill (Slide 08):** A estrutura física de diretórios no padrão aberto (`/my-skill`): o arquivo central obrigatório `SKILL.md` e as três pastas opcionais de apoio (`references/`, `scripts/` e `assets/`), desmistificadas para um público leigo em programação.
- **Divulgação Progressiva em Níveis:** Economia de tokens e preservação de contexto mantendo o `SKILL.md` enxuto e delegando documentação passiva para `references/`.
- **A Regra 85/15 de Automação:** 85% de trabalho mecânico executado por scripts e IA; 15% de julgamento crítico retido pelo gestor humano.

### Módulo 4: Padrões de Trabalho, Primitivas & Economia de Skills (Slides 09–16 — Capítulo 4)
- **Situação-Problema 3: A Compressão do Trabalho e "Reporting Slop" (Slide 09):** O desafio de analisar 50 transcrições de clientes e comprimir 40 horas manuais para minutos sem gerar relatórios vazios e sem perder a governança.
- **A Compressão da Costura & Analogia do VisiCalc (Slide 10):** O colapso do trabalho intermediário ($A \to C$) e a Lei da Amplificação do Julgamento Humano ("Skills amplificam o conhecimento existente; nunca compensam a falta dele").
- **Casca Determinística vs. Núcleo Dinâmico (Slide 11):** Separação arquitetural entre o que não pode variar (código, schemas, caminhos) e o julgamento contextual em prosa. Regra de decisão entre arquivo de referência e nova Skill.
- **Simulador de Pontos de Vista & Red-Teaming (Slide 12):** Codificação de perspectivas especializadas implacáveis (auditor cético, compliance, operador). A regra inegociável *"Don't Average Your Experts"* para evitar consensos mornos e burocráticos.
- **Novas Primitivas Operacionais (Slide 13):** *Brain Dumping* (voz/reunião bruta para artefato de ação), *Reactive Brain-Dumping* e o *Despacho Assíncrono das 6h da Manhã* com desenho estratégico de checkpoints humanos.
- **A Regra de Ouro: Corrija a Skill, Não a Saída (Slide 14):** Por que correções manuais na saída desperdiçam conhecimento em artefatos descartáveis. O arquivo `SKILL.md` como ativo cumulativo e gestão de sessões longas com `status.md`.
- **Os 5 Grandes Anti-Padrões de Skills (Slide 15):** A Mega-Skill Monolítica, *Reporting Slop*, Lavagem de Intuição por Score de IA, a Armadilha do Copiar-Colar e Riscos de Segurança de Skills de Estranhos (Checklist de Higiene).
- **A Economia Emergente de Skills (Slide 16):** Do mercado informal via DMs (*Shadow Skills*) aos catálogos corporativos oficiais; Skills como *Runbooks Vivos* executáveis; e a tese final da alavanca executiva máxima.

---

## 5. Competências Desenvolvidas (Matriz CHA)

- **Conhecimentos (Saber):**
  - Entender a taxonomia de autonomia (Prompt vs. Tool Calling vs. Agente).
  - Dominar o padrão declarativo SKILL.md com YAML frontmatter.
  - Conhecer os riscos de segurança de permissões de escrita em conectores e Apps.
- **Habilidades (Saber Fazer):**
  - Operar o ChatGPT Work instalado na máquina local com governança de diretório via `AGENTS.md`.
  - Configurar Projects como contexto durável e auditar entregáveis por meio de revisão em camadas.
  - Mapear fluxos de trabalho corporativos e redigir contratos agênticos completos com critérios de aceite testáveis.
- **Atitudes (Saber Ser):**
  - Postura crítica contra a alucinação de modelos não fundamentados em fontes autoritativas.
  - Prudência e rigor na concessão de privilégios de acesso a dados corporativos.
  - Empatia pedagógica e confiança no domínio prático da tecnologia agêntica.

---

## 6. Recursos Didáticos e Tecnológicos

- Apresentação interativa em React + Vite (1366x768 px) com design system Infnet e suporte a notas do professor (`NotesDrawer`).
- Guia prático de laboratório (`pratica_guiada_rubricas.md`) com templates prontos de `AGENTS.md` e prompts validados.
- ChatGPT Work Desktop App instalado localmente no computador dos alunos.
- 3 PDFs de propostas comerciais de fornecedores simuladas para a atividade de triagem e compras.
