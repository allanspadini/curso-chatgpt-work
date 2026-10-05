# Plano de Aula — Aula 1

**Curso:** Pós-Graduação EAD em Inteligência Artificial e Engenharia de Software  
**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet  
**Professor:** Prof. Dr. Allan Segovia-Spadini  
**Título da Aula:** Fundamentos de IA, Mudança de Paradigma e Engenharia de Workflows Agênticos  
**Duração Estimada:** 3 horas (divididas em 4 blocos com atividades práticas interativas)  

---

## 1. Ementa e Visão Geral da Aula

Nesta primeira aula, estabelecemos as bases conceituais, operacionais e arquiteturais para o trabalho com Inteligência Artificial Agêntica Corporativa, diferenciando o modelo conversacional tradicional (ChatGPT Chat) do novo paradigma de delegação orientada a desfechos do **ChatGPT Work**.

A disciplina parte da desmistificação da "ilusão de fluência" em Modelos de Linguagem de Grande Porte (LLMs), demonstrando por que a confiança verbal não equivale à exatidão factual. A partir de uma metodologia rigorosa de engenharia agêntica, formalizamos a instrução como uma **Especificação de Trabalho** (*Work Specification*), estabelecemos os critérios para **Contexto Forte** (Autoritativo, Atual, Delimitado e Interpretável) e introduzimos o **Contrato do Agente** (*Agent's Contract*). Finalizamos com a calibração de autonomia baseada no **Princípio da Reversibilidade**, portões *Human-in-the-Loop* (HITL) e o modelo de maturidade organizacional em 4 estágios.

---

## 2. Metodologia Pedagógica Central

A condução didática segue estritamente o ciclo **Situação-Problema do Mundo Real ➔ Solução de Engenharia ➔ Teoria e Formalismo Rigoroso**:

1. **Situação-Problema (A Dor Prática):**
   - Demonstração dos gargalos enfrentados na indústria quando profissionais tentam resolver processos empresariais com "prompts soltos", sofrendo com alucinações silenciosas, retrabalho na revisão e exaustão cognitiva ao atuarem como "barramento manual de dados" entre ferramentas.
2. **Solução de Engenharia (A Sacada Prática):**
   - Transição da unidade de trabalho do *Turno* (*Turn*) para o *Desfecho* (*Outcome*), adoção de conexões autenticadas corporativas (Plugins/Conectores como Google Drive e Slack) e desenho de contratos agênticos delimitados.
3. **Teoria e Formalismo Rigoroso:**
   - Modelagem probabilística autorregressiva dos LLMs ($P(w_t \mid w_{<t}, \mathcal{C})$), formulação de grafos de tarefas em 7 etapas, matriz de reversibilidade de risco e protocolo de auditoria em 6 camadas (*Layered Review*).

---

## 3. Objetivos de Aprendizagem

### Objetivo Geral:
Capacitar o aluno de pós-graduação a projetar, especificar e auditar processos agênticos confiáveis no ChatGPT Work, dominando a transição do chat reativo para a delegação de tarefas multi-etapas baseadas em contratos com governança humana.

### Objetivos Específicos:
1. Compreender a natureza estatística dos LLMs e diferenciar rigorosamente coerência linguística de fidelidade factual.
2. Aplicar os 4 hábitos duráveis de interação com IA (*Instruções Claras, Contexto Delimitado, Revisão em Camadas, Uso Responsável Situacional*).
3. Estruturar prompts profissionais como Especificações de Trabalho (*Work Specifications*) contendo desfecho, audiência, fontes, limites, formato e critérios de inspeção.
4. Identificar e validar as 4 propriedades do contexto forte (*Autoritativo, Atual, Delimitado e Interpretável*).
5. Distinguir a arquitetura do ChatGPT Chat tradicional da arquitetura orientada a desfechos do ChatGPT Work.
6. Construir Contratos Agênticos completos (*Outcome, Context, Constraints, Acceptance Criteria*).
7. Mapear fluxos de trabalho corporativos em grafos formais de 7 etapas antes de iniciar qualquer automação.
8. Calibrar o nível de autonomia do agente conforme o Princípio da Reversibilidade, inserindo portões de aprovação humana (*HITL*) em ações irreversíveis ou de impacto externo.
9. Executar a auditoria sistemática de entregáveis por meio da Revisão em 6 Camadas.
10. Diagnosticar a maturidade operacional de fluxos agênticos na escala de 4 níveis.

---

## 4. Matriz de Competências (CHA)

| Dimensão | Competências Desenvolvidas |
| :--- | :--- |
| **Conhecimentos (Saber)** | • Teoria da amostragem autorregressiva em Transformers e sua dissociação de verdade objetiva.<br>• Arquitetura do ecossistema ChatGPT Work e Codex.<br>• Diferença conceitual entre Contexto Fornecido e Contexto Conectado via OAuth.<br>• Princípio da Reversibilidade e teoria de portões de decisão Human-in-the-Loop.<br>• Modelo de maturidade agêntica em 4 estágios. |
| **Habilidades (Saber Fazer)** | • Redigir especificações executáveis de trabalho sem transferir ambiguidades para a IA.<br>• Curar e auditar bases de contexto corporativo, eliminando ruídos e dados obsoletos.<br>• Configurar contratos agênticos contendo fronteiras operacionais explícitas.<br>• Mapear workflows corporativos antes de automatizar, identificando pontos de parada obrigatória.<br>• Auditar entregáveis finais utilizando o protocolo sistemático de 6 camadas. |
| **Atitudes (Saber Ser)** | • Postura crítica e cética frente à eloquência de modelos generativos.<br>• Responsabilidade ética e jurídica na homologação e assinatura de entregáveis de IA.<br>• Foco em simplificação de processos antes de qualquer iniciativa de automação.<br>• Mentalidade de melhoria contínua (*Executar ➔ Revisar ➔ Diagnosticar ➔ Refinar*). |

---

## 5. Estrutura Programática e Cronograma da Aula

### Bloco 1: Fundamentos de IA e a Natureza dos LLMs (Slides 1 a 9) — 45 min
- **Abertura e Apresentação do Professor:** Trajetória acadêmica (USP/TU Delft) e experiência em dados/IA.
- **Situação-Problema:** O colapso dos prompts pontuais na indústria e a ilusão da fluência.
- **Formalismo:** Modelos autorregressivos, logits e probabilidade condicional. Confiança de expressão $\neq$ exatidão factual.
- **Solução de Engenharia:** Os 4 hábitos duráveis de interação, refatoração prática de prompt com caso real (Reunião Q3) e a Especificação de Trabalho (*Work Specification*).
- **Engenharia de Contexto:** As 4 propriedades do contexto forte (*Autoritativo, Atual, Scoped, Interpretável*).
- **Atividade Prática:** *Laboratório Interativo 1 — Inspetor de Contexto e Diagnóstico de Ambiguidade*.

### Bloco 2: A Grande Virada: Chat vs. ChatGPT Work (Slides 10 a 13) — 45 min
- **Situação-Problema:** A prisão do turno a turno (*Turn Trap*) e a exaustão do operador como barramento de dados.
- **Solução de Engenharia:** A mudança da unidade de delegação de *Turn* para *Outcome*.
- **Infraestrutura:** Do contexto fornecido (uploads estáticos) ao contexto conectado (Plugins e Conectores Google Drive, Slack, Jira, GitHub).
- **Atividade Prática:** *Laboratório Interativo 2 — Matriz Comparativa Dinâmica: Chat vs. ChatGPT Work*.

### Bloco 3: Engenharia de Contratos e Mapeamento de Workflows (Slides 14 a 16) — 45 min
- **Engenharia de Contratos:** Os 4 pilares do Contrato Agêntico (*Outcome, Context, Constraints, Acceptance Criteria*).
- **Atividade Prática:** *Laboratório Interativo 3 — Construtor e Validador de Contratos Agênticos*.
- **Arquitetura de Processos:** Mapeamento do grafo formal de 7 etapas antes de automatizar. "Automatizar um processo caótico apenas reproduz a ambiguidade em maior velocidade".

### Bloco 4: Reversibilidade, Governança e Avaliação (Slides 17 a 21) — 45 min
- **Princípio da Reversibilidade:** Calibração de autonomia em proporção direta à facilidade de desfazer o ato.
- **Atividade Prática:** *Laboratório Interativo 4 — Simulador de Matriz de Reversibilidade e Autonomia (evitando microgerenciamento e risco corporativo)*.
- **Auditoria:** Revisão Estruturada em 6 Camadas (*Layered Review*).
- **Maturidade:** A esteira evolutiva em 4 estágios (*Tarefa Guiada ➔ Entregável Delegado ➔ Fluxo Reutilizável ➔ Operação Monitorada*).
- **Atividade Prática Final:** *Laboratório Interativo 5 — Quiz de Fixação com 4 Questões de Pós-Graduação e Justificativas Técnicas*.

---

## 6. Recursos Didáticos e Tecnológicos

- **Ambiente de Apresentação:** Aplicação interativa React + Vite SPA em viewport canônica 16:9 (1366x768) com motor auto-scaler responsivo.
- **Design System Infnet:** Paleta institucional de alto contraste sobre fundo canônico branco, tipografia *Outfit* / *Inter* / *Fira Code* e renderização matemática via KaTeX.
- **Simuladores Embutidos:** 5 laboratórios dinâmicos com manipulação de parâmetros, cálculo em tempo real e feedback imediato.
- **Documentos de Suporte:** Roteiro completo de narração slide por slide (`falas_apresentador.md`) e plano de aula pedagógico (`plano_aula.md`).

---

## 7. Critérios de Avaliação

A avaliação da Aula 1 é formativa e contínua:
1. **Participação e Diagnóstico nos Laboratórios Interativos:** O aluno valida o impacto de cada propriedade de contexto e constrói contratos agênticos equilibrados.
2. **Desempenho no Quiz de Fixação (Slide 21):** Avaliação individual com 4 questões conceituais e práticas de alta complexidade. Espera-se aproveitamento mínimo de 75% (3/4), acompanhado da leitura das justificativas técnicas baseadas no formalismo da disciplina.

---

## 8. Bibliografia e Leituras Recomendadas

1. VASWANI, A. et al. *Attention Is All You Need*. Advances in Neural Information Processing Systems (NeurIPS), 2017.
2. WOOLDRIDGE, M. *An Introduction to MultiAgent Systems*. 2nd ed. John Wiley & Sons, 2009.
3. WEI, J. et al. *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models*. NeurIPS, 2022.
4. RUSSELL, S.; NORVIG, P. *Artificial Intelligence: A Modern Approach*. 4th ed. Pearson, 2020.
5. OPENAI. *ChatGPT Work and Codex Documentation*. Enterprise Workflows Reference, 2025/2026.
