# Plano de Aula — Aula 2

**Curso:** Pós-Graduação EAD em Inteligência Artificial e Engenharia de Software  
**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet  
**Professor:** Prof. Dr. Allan Segovia-Spadini  
**Título da Aula:** Configuração de Agentes com AGENTS.md e Arquitetura de Subagentes Especializados  
**Duração Estimada:** 3 horas (divididas em 4 blocos com laboratórios e simuladores interativos)  

---

## 1. Ementa e Visão Geral da Aula

Nesta segunda aula da disciplina, aprofundamos a engenharia de configuração, controle de escopo e decomposição concorrente de sistemas agênticos corporativos no ecossistema **ChatGPT Work** e **Codex**. 

Superamos o amadorismo das instruções manuais em interfaces gráficas e do prompt único saturado. Estruturamos a governança de instruções através do padrão **AGENTS.md**, dissecando sua mecânica formal de descoberta hierárquica (Global ➔ Raiz do Repositório ➔ Subdiretórios até o diretório atual de trabalho), a ordem de concatenação *top-down* e as políticas de truncamento por limites de memória (`project_doc_max_bytes`).

Em seguida, abordamos as patologias críticas de janelas de contexto em LLMs: **Context Pollution** (soterramento de sinais por dados brutos) e **Context Rot** (degradação progressiva da atenção dos modelos de linguagem). Apresentamos a solução arquitetural de ponta: a **Decomposição em Subagentes Especializados**, operando em threads paralelas isoladas, executando tarefas barulhentas (*read-heavy*) e retornando resumos destilados (*distilled summaries*) ao agente orquestrador. Finalizamos com a parametrização formal de **Custom Agents** em arquivos TOML, calibração de modelos (`gpt-6.1-sol` vs. `gpt-6-luna`), esforço de raciocínio (*reasoning effort*), políticas de *sandbox* baseadas no Princípio do Menor Privilégio e padrões de revisão de código e depuração em produção.

---

## 2. Metodologia Pedagógica Central: Problema ➔ Solução ➔ Teoria

A condução didática segue rigorosamente o ciclo pedagógico da disciplina:

1. **Situação-Problema do Mundo Real (A Dor Prática):**
   - *Gargalo 1 (Governança):* A anarquia de prompts ad-hoc configurados individualmente na interface por desenvolvedores e analistas, gerando regras divergentes, vazamento de chaves, desrespeito a convenções de arquitetura e ausência total de auditoria e versionamento em monorepositórios.
   - *Gargalo 2 (Atenção e Escala):* O colapso cognitivo do agente único quando incumbido de tarefas extensas: a execução de testes, exploração de código e leitura de logs despeja milhares de tokens intermediários na thread principal, provocando *Context Pollution* e *Context Rot* (amnésia situacional e alucinações sobre regras de negócio).

2. **Solução de Engenharia (A Sacada Prática & Intuição):**
   - *Solução 1 (Configuração Determinística via GitOps):* Adoção de arquivos versionados `AGENTS.md` e `AGENTS.override.md` distribuídos pela árvore de diretórios, garantindo que o agente herde automaticamente as regras vigentes do projeto e do microserviço em que está operando.
   - *Solução 2 (Isolamento Concorrente com Subagentes):* Segregação de responsabilidades: o agente principal preserva seu contexto limpo para decisões e síntese, enquanto subagentes efêmeros e paralelos absorvem o ruído e devolvem apenas resumos estruturados com citações precisas de arquivos e símbolos.

3. **Teoria e Formalismo Rigoroso (Matemática, Algoritmos e Configuração):**
   - Formalização do algoritmo de descoberta e merge top-down com cálculo de bytes acumulados: $\sum_{i=1}^{k} \text{len}(F_i) \le \text{project\_doc\_max\_bytes}$.
   - Mecânica de degradação da curva de atenção em contextos ruidosos (pesquisa Chroma sobre *Context Rot*).
   - Schema TOML formal de Custom Agents (`name`, `description`, `developer_instructions`, `model`, `model_reasoning_effort`, `sandbox_mode`, `mcp_servers`).
   - Barreira de sincronização (*Wait-for-All Barrier*) e propagação em cascata de permissões e segurança.

---

## 3. Objetivos de Aprendizagem

### Objetivo Geral:
Capacitar o engenheiro e arquiteto de software a governar, configurar e orquestrar fluxos multi-agente determinísticos no ChatGPT Work e Codex, implementando arquiteturas modulares com arquivos AGENTS.md e subagentes concorrentes com isolamento de contexto e segurança de sandbox.

### Objetivos Específicos:
1. Dominar a cadeia de descoberta, precedência e concatenação de instruções em escopo Global, Raiz de Repositório e Subdiretórios locais.
2. Configurar restrições físicas de memória (`project_doc_max_bytes`), fallbacks legados (`project_doc_fallback_filenames`) e perfis isolados (`CODEX_HOME`).
3. Estruturar regras canônicas de revisão de código (`## Code Review Rules`), diferenciando checagens de CI/CD de auditorias semânticas do agente.
4. Identificar e mitigar matematicamente os fenômenos de *Context Pollution* e *Context Rot* por meio da segregação de tarefas em subagentes paralelos.
5. Dimensionar a matriz de inteligência, velocidade e custo entre `gpt-6.1-sol` e `gpt-6-luna`, ajustando os níveis de `model_reasoning_effort`.
6. Desenvolver arquivos declarativos de Custom Agents em TOML com controle estrito de sandbox (`read-only` vs. `workspace-write`) e ferramentas MCP.
7. Implementar padrões arquiteturais da indústria (Triplo PR Review e Frontend Debugging) com barreira de sincronização.

---

## 4. Conteúdo Programático Detalhado (4 Módulos)

### Módulo 1: Governança de Instruções e a Cadeia de Descoberta AGENTS.md
- **A Dor da Fragmentação de Instruções:** Inconsistência de comportamento entre membros de equipe e ausência de rastreabilidade.
- **O Padrão AGENTS.md:** Princípios de configuração determinística como código (IaC/GitOps) para agentes de IA.
- **A Cadeia de Descoberta em 3 Níveis:**
  1. *Escopo Global:* Diretório `~/.codex` (ou `$CODEX_HOME`), avaliando `AGENTS.override.md` e `AGENTS.md`.
  2. *Escopo do Projeto:* Do Git root até o diretório atual de trabalho (`cwd`), avaliando arquivos em cada nó do caminho.
  3. *Ordem de Concatenação (Merge):* Unificação top-down onde arquivos mais próximos do `cwd` aparecem no final do prompt combinado, exercendo precedência semântica natural.
- **Laboratório Interativo 1:** Simulador visual da cadeia de descoberta e precedência em árvore de monorepositório.

### Módulo 2: Restrições de Memória, Truncamento e Customização de Fallbacks
- **A Restrição Física de Bytes:** O parâmetro `project_doc_max_bytes` (padrão 32 KiB) e a prevenção contra saturação precoce da janela de contexto.
- **Estratégias de Modularização:** Divisão de diretrizes extensas entre diretórios de serviços e remoção de redundâncias.
- **Configuração de Fallbacks Legados:** Uso de `project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]` no `config.toml`.
- **Isolamento de Perfis com `CODEX_HOME`:** Customização de ambientes para pipelines automatizados de CI/CD e esteiras de segurança.
- **Sintaxe Formal de Code Review:** A seção `## Code Review Rules`, definindo regras concisas, comportamentos a sinalizar e caminhos seguros (*safe paths*).

### Módulo 3: Degradação de Contexto e a Arquitetura de Subagentes Paralelos
- **As Patologias da Janela de Contexto:** *Context Pollution* (ruído de saídas intermediárias) e *Context Rot* (pesquisa Chroma sobre perda de densidade de atenção).
- **A Engenharia de Subagentes:** Separação entre a thread orquestradora (decisória e limpa) e threads de trabalhadores efêmeros em paralelo.
- **Laboratório Interativo 2:** Simulador de Degradação de Contexto — Comparação direta entre Single-Agent (saturado) e Multi-Subagent (com resumos destilados).
- **Orquestração e Barreira de Sincronização:** Spawning, execução concorrente limitada por `agents.max_concurrent_threads_per_session`, barreira *Wait-for-All* e consolidação de resultados.
- **Matriz de Modelos e Esforço de Raciocínio:**
  - `gpt-6.1-sol` para raciocínio analítico, planejamento e segurança.
  - `gpt-6-luna` para triagem rápida, varreduras de código e baixo consumo de tokens.
  - Escala de `model_reasoning_effort`: de `low` a `ultra`.

### Módulo 4: Custom Agents em TOML, Sandbox e Governança na Prática
- **Schema Declarativo do Custom Agent:**
  - Campos obrigatórios: `name`, `description`, `developer_instructions`.
  - Campos de ambiente: `model`, `model_reasoning_effort`, `sandbox_mode`, `mcp_servers`, `skills.config`.
- **Políticas de Sandbox e Menor Privilégio:** Isolamento estrito com `sandbox_mode = "read-only"` para agentes exploradores e `workspace-write` restrito a implementadores.
- **Laboratório Interativo 3:** Construtor e Validador Interativo de Custom Agents com validação de schema TOML.
- **Padrões de Referência da Indústria:**
  - *Pattern 1: PR Review Triplo:* `pr_explorer` (read-only) + `reviewer` (análise profunda) + `docs_researcher` (MCP de documentação).
  - *Pattern 2: Frontend Integration Debugging:* `browser_debugger` (Chrome DevTools MCP) + `code_mapper` + `ui_fixer`.
- **Laboratório Interativo 4:** Simulador de Execução de Padrão Arquitetural em Tempo Real.
- **Laboratório Interativo 5:** Quiz Interativo de Fixação (5 questões de nível avançado).

---

## 5. Competências e Habilidades Desenvolvidas

Ao término desta aula, o estudante será capaz de:
- **Projetar** arquiteturas de instruções hierárquicas e versionadas para monorepositórios complexos utilizando a especificação AGENTS.md.
- **Diagnosticar e mitigar** degradação de atenção (*Context Rot*) em fluxos de trabalho extensos de IA.
- **Estruturar** equipes de subagentes concorrentes em TOML com isolamento de privilégios (`sandbox_mode`).
- **Otimizar** o custo e a latência de processos agênticos calibrando a matriz de modelos (`gpt-6.1-sol` vs. `gpt-6-luna`) e níveis de raciocínio.
- **Auditar** a cadeia de execução agêntica e implementar portões de aprovação de segurança em ambientes corporativos.

---

## 6. Recursos Didáticos e Tecnológicos

- Aplicação interativa em React + Vite com renderização matemática KaTeX, componentes SVG de alto contraste e layout canônico 16:9 (1366x768).
- 5 Laboratórios interativos com simulação em tempo real de árvore de diretórios, saturação de contexto, editor TOML, orquestrador de subagentes e quiz avaliativo.
- Terminal Codex CLI e ChatGPT Work Desktop App com suporte a `/agent` e inspeção de threads.
- Apresentação completa exportada em formato PDF de alta fidelidade para estudo offline e arquivamento acadêmico.

---

## 7. Critérios de Avaliação

A assimilação dos conteúdos será aferida através do **Quiz Interativo de Fixação** ao final da apresentação e pela resolução dos cenários dos laboratórios interativos, avaliando:
1. Exatidão na resolução da ordem de precedência da cadeia AGENTS.md em múltiplos nós de diretório.
2. Identificação precisa do limite de truncamento `project_doc_max_bytes`.
3. Seleção adequada de modelos e níveis de esforço de raciocínio para subagentes conforme o tipo de carga de trabalho.
4. Aplicação rigorosa do Princípio do Menor Privilégio na parametrização de sandboxes.

---

## 8. Referências Bibliográficas e Documentais Oficiais

1. **OpenAI.** *Custom instructions with AGENTS.md — Codex Documentation.* Disponível em: https://learn.chatgpt.com/docs/agent-configuration/agents-md.
2. **OpenAI.** *Subagents in ChatGPT Work and Codex — Architecture and Reference.* Disponível em: https://learn.chatgpt.com/docs/agent-configuration/subagents.
3. **Chroma Research.** *Context Rot: How Context Saturation Degrades Model Attention in Long Sequences.* Disponível em: https://research.trychroma.com/context-rot.
4. **AGENTS.md Specification.** *The Open Standard for AI Agent Instructions in Code Repositories.* Disponível em: https://agents.md.
5. **Instituto Infnet.** *Processos Agênticos com ChatGPT Work [26E4_2] — Projeto Pedagógico de Pós-Graduação.* Rio de Janeiro, 2026.
