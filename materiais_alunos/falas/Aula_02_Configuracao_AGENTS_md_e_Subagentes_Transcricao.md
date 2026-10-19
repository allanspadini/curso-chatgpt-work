# Apostila de Transcrição e Conteúdo Narrado — Aula 2

**Instituição:** Instituto Infnet — Pós-Graduação EAD  
**Curso:** Pós-Graduação EAD em Inteligência Artificial e Engenharia de Software  
**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Professor:** Prof. Dr. Allan Segovia-Spadini  
**Tema da Aula:** Configuração de Agentes com AGENTS.md e Arquitetura de Subagentes Especializados  
**Material de Apoio ao Estudante:** Transcrição na íntegra das explicações do docente para cada slide, desenvolvida para leitura linear, fixação conceitual e consulta durante a execução dos projetos práticos.

---

## Sumário da Aula

1. **Slide 1:** Capa Oficial da Aula 2: Processos Agênticos com ChatGPT Work
2. **Slide 2:** Roadmap da Aula 2: Trilha Pedagógica
3. **Slide 3:** Situação-Problema 1: A Anarquia das Instruções Fragmentadas
4. **Slide 4:** Solução de Engenharia 1: Configuração Determinística com AGENTS.md
5. **Slide 5:** A Cadeia de Descoberta e Precedência em 3 Camadas
6. **Slide 6:** Laboratório Interativo 1: Simulador da Cadeia AGENTS.md
7. **Slide 7:** Teoria e Formalismo: O Limite Físico de Memória de Instrução
8. **Slide 8:** Mapeamento de Fallbacks e Variáveis de Ambiente
9. **Slide 9:** Regras de Code Review em AGENTS.md
10. **Slide 10:** Situação-Problema 2: Context Pollution e Context Rot
11. **Slide 11:** Solução de Engenharia 2: Decomposição em Subagentes Especializados
12. **Slide 12:** Laboratório Interativo 2: Simulador de Context Rot e Subagentes
13. **Slide 13:** Orquestração, Ciclo de Vida e Sincronização
14. **Slide 14:** Matriz de Modelos e Esforço de Raciocínio (*Reasoning Effort*)
15. **Slide 15:** Anatomia Formal do Arquivo Custom Agent (`.toml`)
16. **Slide 16:** Políticas de Sandbox e Modos de Aprovação
17. **Slide 17:** Laboratório Interativo 3: Custom Agent Builder
18. **Slide 18:** Padrões Arquiteturais da Indústria
19. **Slide 19:** Laboratório Interativo 4: PR Review Runner
20. **Slide 20:** Laboratório Interativo 5: Quiz Interativo de Fixação

---

## Slide 1 — Capa Oficial da Aula 2
**Subtítulo:** Aula 2: Configuração de Agentes com AGENTS.md e Arquitetura de Subagentes Especializados

Sejam muito bem-vindos à nossa segunda aula da disciplina de Processos Agênticos com ChatGPT Work, sob o código [26E4_2], aqui na pós-graduação do Instituto Infnet. Eu sou o Professor Allan Spadini.

Na nossa aula inaugural, estabelecemos a ruptura fundamental entre o modelo de chat convencional — baseado em turnos conversacionais e fragmentados — e o paradigma do ChatGPT Work, orientado a desfechos, contratos executáveis e governança. Hoje, avançamos para o núcleo operacional e arquitetural da engenharia agêntica: como governar, configurar e orquestrar agentes em projetos corporativos complexos.

Veremos duas inovações de engenharia indispensáveis. A primeira é o padrão AGENTS.md, que transforma regras de negócio e boas práticas de engenharia em código versionável, eliminando a anarquia das instruções manuais em caixas de diálogo. A segunda é a arquitetura de Subagentes: como combater a poluição e a degradação de contexto — fenômenos conhecidos na literatura científica como *Context Pollution* e *Context Rot* — decompondo tarefas volumosas em trabalhadores concorrentes, especializados e com isolamento de privilégios.

Preparem-se para uma aula densa, prática e de alto nível técnico, combinando teoria rigorosa com laboratórios interativos em tempo real. Vamos em frente!

---

## Slide 2 — Roadmap da Aula 2: Trilha Pedagógica
**Subtítulo:** Da Governança de Instruções Hierárquicas à Concorrência de Subagentes Especializados

Observem a nossa trilha pedagógica de hoje, estruturada em 4 módulos interdependentes:

No **Módulo 1 — Governança de Instruções e a Cadeia de Descoberta AGENTS.md** —, enfrentamos a dor das regras divergentes na equipe. Vamos dissecar o algoritmo de busca do Codex, navegando do escopo global em `~/.codex`, passando pela raiz do repositório, até o diretório atual de trabalho, com um laboratório interativo de resolução de precedência.

No **Módulo 2 — Restrições de Memória, Truncamento e Fallbacks** —, analisaremos a restrição física de 32 KiB imposta por `project_doc_max_bytes`, entendendo o porquê econômico e de atenção desse limite, além de configurar nomes alternativos legados e a sintaxe canônica da seção *Code Review Rules*.

No **Módulo 3 — Degradação de Contexto e Arquitetura de Subagentes** —, entraremos no cerne do problema cognitivo dos LLMs: *Context Pollution* e *Context Rot*. Veremos como o *spawning* de subagentes concorrentes protege a thread principal e analisaremos a matriz de seleção entre GPT-6.1 Sol e GPT-6 Luna, junto com os níveis de *reasoning effort*.

Por fim, no **Módulo 4 — Custom Agents em TOML, Sandbox e Governança** —, aprenderemos a escrever arquivos declarativos de subagentes, aplicando o Princípio do Menor Privilégio com `sandbox_mode` em *read-only* e *workspace-write*, simulando em laboratório padrões reais de PR Review e depuração full-stack com ferramentas MCP.

---

## Slide 3 — Situação-Problema 1: A Anarquia das Instruções Fragmentadas
**Subtítulo:** Situação-Problema do Mundo Real • A Dor Prática das Diretrizes Ad-Hoc e Inconsistentes

Vamos começar pelo primeiro grande gargalo da indústria: o colapso da consistência operacional quando equipes tentam usar agentes de IA sem uma arquitetura centralizada de instruções.

Imaginem um time de engenharia com vinte desenvolvedores trabalhando em um monorepositório corporativo. O desenvolvedor A configura na interface do ChatGPT: *'sempre use pnpm e escreva testes com Jest'*. O desenvolvedor B, no mesmo projeto, esquece de avisar sobre linters e o modelo gera código usando npm e bibliotecas legadas. O desenvolvedor C atua no microserviço de pagamentos e não especifica que chaves de API jamais podem sofrer rotação sem aviso ao time de segurança.

O resultado prático dessa abordagem é o caos: instruções contraditórias, regressões silenciosas de arquitetura, violação de padrões de conformidade, total falta de versionamento e retrabalho contínuo em revisões de código. Ninguém sabe quais regras o agente estava seguindo em determinado momento.

Instruções não podem depender da memória do operador humano ou de caixas de diálogo soltas. Elas precisam ser tratadas como código-fonte de primeira classe.

---

## Slide 4 — Solução de Engenharia 1: Configuração Determinística com AGENTS.md
**Subtítulo:** Solução de Engenharia • O Paradigma de Governança Agêntica como Código (GitOps)

A sacada de engenharia desenvolvida para eliminar de vez esse gargalo foi a padronização do arquivo AGENTS.md, adotada como padrão oficial pelo ChatGPT Work e pelo Codex.

Em vez de digitar regras repetidamente na interface web, você versiona arquivos de instruções diretamente dentro do repositório Git. Isso estabelece o conceito de Governança Agêntica como Código (GitOps). Toda vez que um agente é iniciado — seja na aplicação desktop, na extensão de IDE ou na linha de comando via Codex CLI —, o ambiente compila deterministicamente a cadeia de instruções antes de propor qualquer intervenção no projeto.

Essa abordagem traz três ganhos imediatos de engenharia:
1. **Rastreabilidade absoluta** via histórico de commits;
2. **Uniformidade** entre todos os desenvolvedores da organização, do estagiário ao tech lead;
3. **Granularidade modular**, permitindo que diretrizes gerais da empresa convivam harmoniosamente com regras hiperespecíficas de cada microserviço.

---

## Slide 5 — A Cadeia de Descoberta e Precedência em 3 Camadas
**Subtítulo:** Mecânica Algorítmica • Resolução Hierárquica: Global ➔ Repositório ➔ Subdiretórios

Vamos dissecar o algoritmo exato que o Codex executa ao iniciar uma sessão de trabalho. A descoberta e o merge de instruções seguem uma precedência rigorosa em 3 camadas:

- **Camada 1: Escopo Global.** O Codex busca no diretório home do usuário, por padrão `~/.codex` (ou no caminho apontado por `CODEX_HOME`). Ele procura por `AGENTS.override.md`; se existir e não for vazio, carrega-o; caso contrário, busca `AGENTS.md`. Apenas um arquivo não vazio é lido no nível global.
- **Camada 2: Escopo de Projeto.** A partir da raiz do repositório Git, o Codex desce recursivamente pela árvore de diretórios até o diretório atual de trabalho (`cwd`). Em cada diretório ao longo do caminho, ele busca `AGENTS.override.md`, depois `AGENTS.md`, e por fim eventuais nomes configurados na lista de fallbacks. No máximo um arquivo por diretório é incorporado.
- **Camada 3: Ordem de Merge e Precedência Semântica.** O Codex concatena esses arquivos de cima para baixo (*top-down*), unindo-os por quebras de linha duplas. Como os modelos de linguagem processam texto sequencialmente, as instruções que aparecem mais ao final do prompt combinado possuem maior peso de atenção. Portanto, o arquivo mais próximo do diretório atual de trabalho sempre sobrescreve diretrizes genéricas da raiz.

---

## Slide 6 — Laboratório Interativo 1: Simulador da Cadeia AGENTS.md
**Subtítulo:** Prática Aplicada • Simulador de Resolução de Precedência e Compilação de Prompt

Chegamos ao nosso primeiro laboratório interativo. Desenvolvemos este simulador para que vocês experimentem na prática a resolução algorítmica da cadeia de instruções do Codex.

No painel à esquerda, vocês podem alternar o diretório de trabalho entre a raiz do monorepositório, o módulo `services/payments` e o módulo `services/search`. Experimentem também habilitar a chave 'Ativar AGENTS.override.md' no serviço de pagamentos.

Observem atentamente o painel central e o painel à direita: o simulador renderiza a árvore de arquivos, calcula os nós visitados pelo algoritmo de caminhamento e exibe o prompt final concatenado que o Codex efetivamente injeta no modelo. Notem que quando o override está ativo em payments, a regra de executar `'make test-payments'` substitui o `'npm test'` da raiz, enquanto a proibição de rotacionar chaves de API é inserida no final do contexto, garantindo prioridade semântica máxima. Explorem os diferentes nós e observem o status de compilação.

---

## Slide 7 — Teoria e Formalismo: O Limite Físico de Memória de Instrução
**Subtítulo:** Teoria & Formalismo • O Parâmetro `project_doc_max_bytes` e a Saturação de Atenção

Agora entramos no formalismo teórico e nas restrições físicas de sistema. Por que o Codex não permite concatenar instruções infinitamente em arquivos gigantescos de documentação?

O Codex impõe um limite estrito controlado pelo parâmetro `project_doc_max_bytes`, que por padrão é configurado em 32 KiB — exatamente 32.768 bytes. Quando a soma cumulativa dos arquivos ao longo do caminho atinge esse teto, o algoritmo de leitura é imediatamente interrompido, e arquivos subsequentes são sumariamente descartados.

Matematicamente, a razão para essa barreira é econômica e de densidade de atenção. Embora os LLMs modernos possuam janelas de contexto que chegam a centenas de milhares de tokens, quanto maior o volume de texto não essencial injetado no prefixo do prompt, maior é o custo computacional por turno e maior é o risco de dispersão dos pesos de atenção da auto-atenção. Instruções devem ser concisas e cirúrgicas. Se você ultrapassar 32 KiB, a solução correta de engenharia não é simplesmente inflar o limite, mas sim modularizar as regras em subdiretórios específicos.

---

## Slide 8 — Mapeamento de Fallbacks e Variáveis de Ambiente
**Subtítulo:** Solução de Engenharia • `project_doc_fallback_filenames` e a Variável `CODEX_HOME`

Em ambientes corporativos do mundo real, frequentemente encontramos repositórios legados que já utilizavam arquivos de documentação com outros nomes, como `TEAM_GUIDE.md`, `GUIDELINES.md` ou `.agents.md`. 

Para evitar renomeações em massa que quebrariam esteiras legadas, o Codex disponibiliza a chave `project_doc_fallback_filenames` no arquivo de configuração `~/.codex/config.toml`. Ao declarar uma lista de fallbacks, o motor de busca passa a verificar em cada diretório a seguinte ordem estrita: primeiro `AGENTS.override.md`, depois `AGENTS.md` e, por fim, cada um dos arquivos listados no fallback array.

Além disso, quando configuramos pipelines de integração contínua (CI/CD) ou robôs de automação de segurança, não queremos misturar as preferências da máquina do desenvolvedor com as regras do pipeline. Para isso, utilizamos a variável de ambiente `CODEX_HOME`. Ao exportar `CODEX_HOME=/opt/ci/codex`, o agente isola seu diretório global, permitindo a execução de perfis totalmente segregados para produção, homologação e desenvolvimento local.

---

## Slide 9 — Regras de Code Review em AGENTS.md
**Subtítulo:** Teoria & Formalismo • A Seção Canônica `## Code Review Rules` e Boas Práticas

Um dos usos mais poderosos do AGENTS.md é governar a revisão automatizada de código em pull requests no GitHub. Para isso, a OpenAI padronizou uma seção formal obrigatória: o cabeçalho `## Code Review Rules`.

Toda regra de revisão deve seguir uma estrutura semântica em três partes:
1. O título da regra;
2. O comportamento a ser sinalizado como incorreto;
3. O caminho seguro ou exceção admissível.

*Exemplo:* Em experimentos com coortes, não filtrar comparações por comportamento pós-exposição; caminho seguro: construir coortes baseadas em atribuição ou exposição prévia.

A diretriz de ouro de engenharia aqui é a **separação de responsabilidades**: nunca use AGENTS.md para policiar formatação, espaçamento ou linter sintático. Isso é papel de analisadores estáticos tradicionais no pipeline de CI, que custam frações de milissegundo e rodam deterministicamente. Reserve as *Code Review Rules* para lógica de negócio complexa, prevenção de regressões comportamentais, segurança de concorrência e integridade arquitetural.

---

## Slide 10 — Situação-Problema 2: Context Pollution e Context Rot
**Subtítulo:** Situação-Problema do Mundo Real • A Degradação da Atenção em Contextos Saturados

Chegamos ao nosso segundo grande módulo, introduzido por uma dor prática que afeta diretamente o desempenho dos LLMs: o colapso por saturação de contexto.

Quando colocamos um único agente para investigar um bug complexo, ele precisa ler dezenas de arquivos, executar comandos no terminal, rodar baterias de testes e inspecionar stack traces de centenas de linhas. Tudo isso é despejado diretamente no histórico da conversa principal.

Essa dinâmica gera duas patologias graves:
- A primeira é o **Context Pollution** — as regras contratuais essenciais e decisões de negócio ficam soterradas sob uma montanha de logs irrelevantes.
- A segunda, documentada em profundidade pela pesquisa da Chroma, é o **Context Rot** — conforme o contexto se expande com ruído disperso, a distribuição da matriz de atenção se degrada, o modelo perde a capacidade de correlacionar variáveis distantes, esquece restrições críticas e passa a emitir alucinações confiantes.

Um único agente executando tudo na mesma thread é uma receita para falha operacional.

---

## Slide 11 — Solução de Engenharia 2: Decomposição em Subagentes Especializados
**Subtítulo:** Solução de Engenharia • Isolamento de Threads e Resumos Destilados (Summaries)

A solução de engenharia para erradicar o Context Rot é a arquitetura de Subagentes Especializados, integrada nativamente ao ChatGPT Work e ao Codex.

Em vez de permitir que o agente principal execute comandos barulhentos no seu próprio espaço de memória, ele passa a atuar como um orquestrador de alto nível. Diante de uma tarefa complexa, o orquestrador dispara subagentes delegados em paralelo, cada um confinado em sua própria thread isolada de execução:
- O **subagente A** varre o repositório em busca de pontos de falha;
- O **subagente B** analisa logs de segurança;
- O **subagente C** pesquisa documentações de APIs externas.

Quando concluem, as threads secundárias não despejam seus logs brutos no chat principal. Elas processam, filtram e retornam apenas resumos destilados, com referências pontuais de arquivos e linhas. A thread orquestradora permanece cirúrgica, focada nas decisões de negócio e imune à poluição de contexto.

---

## Slide 12 — Laboratório Interativo 2: Simulador de Context Rot e Subagentes
**Subtítulo:** Prática Aplicada • Comparativo em Tempo Real: Single-Agent Saturado vs. Multi-Subagent

No Simulador de Context Rot, comparamos os dois paradigmas:

À esquerda, temos o modelo Single-Agent tradicional. Conforme arquivos são explorados, testes de integração rodados e logs compilados, o termômetro de tokens dispara e a Fidelidade de Atenção cai drasticamente até atingir a zona de perigo, onde surgem desvios de regras e alucinações.

À direita, temos a orquestração Multi-Subagent. Cada bloco barulhento é delegado para uma thread secundária. A janela de contexto principal consome uma fração mínima de tokens, retendo apenas sínteses de alto valor informativo e mantendo a acurácia de raciocínio próxima a 98%. Este contraste visual comprova por que sistemas agênticos corporativos precisam de subagentes para tarefas de alta intensidade de leitura e pesquisa.

---

## Slide 13 — Orquestração, Ciclo de Vida e Sincronização
**Subtítulo:** Teoria & Formalismo • Spawning, Threads Concorrentes e Barreira Wait-for-All

Vamos formalizar agora o ciclo de vida de uma orquestração multi-agente no ChatGPT Work e no Codex. Esse fluxo é governado por quatro fases sequenciais:

1. **Fase 1: Spawning e Despacho.** O agente orquestrador identifica tarefas independentes e instancia os subagentes. Isso pode ser disparado explicitamente pelo usuário, por diretrizes do AGENTS.md ou de forma proativa quando o nível Ultra de inteligência estiver ativo.
2. **Fase 2: Execução Concorrente Isolada.** Cada subagente trabalha em seu ambiente próprio, limitado globalmente pelo teto `agents.max_concurrent_threads_per_session` para evitar estouro de recursos ou saturação de chamadas de API.
3. **Fase 3: Barreira de Sincronização (Wait-for-All Barrier).** O orquestrador entra em estado de espera síncrona. Ele não emite respostas parciais prematuras ao usuário; ele aguarda que todas as threads delegadas concluam seus processamentos e emitam suas conclusões.
4. **Fase 4: Destilação e Consolidação Final.** O orquestrador coleta as saídas destiladas, cruza as evidências, valida contra os critérios de aceitação do contrato e entrega o artefato final ao usuário.

---

## Slide 14 — Matriz de Modelos e Esforço de Raciocínio (Reasoning Effort)
**Subtítulo:** Teoria & Formalismo • Calibração de Inteligência, Latência e Custo de Tokens

Uma das decisões de engenharia mais refinadas na configuração de subagentes é a escolha do modelo e do nível de esforço de raciocínio. Nem todo trabalhador precisa do mesmo cérebro.

O ecossistema Codex trabalha com dois modelos principais:
- **GPT-6.1 Sol:** O modelo de máxima capacidade. Deve ser selecionado para tarefas ambíguas, planejamento de arquitetura, identificação de vulnerabilidades de segurança e resolução de bugs sutis.
- **GPT-6 Luna:** Otimizado para velocidade extrema e baixo consumo de tokens. É a escolha ideal para varreduras de repositório, mapeamento de símbolos e conferência de sintaxe.

Além do modelo, calibramos o parâmetro `model_reasoning_effort`, que varia de `low` até `ultra`:
- Para tarefas diretas e repetitivas, utilizamos `low` ou `medium`, priorizando resposta rápida.
- Para agentes revisores e auditores de segurança, fixamos em `high` ou superior, permitindo que o modelo rastreie hipóteses concorrentes e testes de borda antes de emitir o veredito.

---

## Slide 15 — Anatomia Formal do Arquivo Custom Agent (.toml)
**Subtítulo:** Teoria & Formalismo • Estrutura Declarativa de Configuração em Arquivos TOML

No Codex, custom agents são definidos através de arquivos com sintaxe TOML, armazenados em `~/.codex/agents/` para escopo pessoal ou em `.codex/agents/` na raiz do repositório para escopo de projeto.

Cada arquivo deve conter obrigatoriamente três campos canônicos:
- `name`: Identifica unicamente o subagente no sistema;
- `description`: Orienta o orquestrador sobre em quais situações aquele agente deve ser acionado;
- `developer_instructions`: Estabelece a persona técnica, as restrições e o comportamento operacional estrito.

O arquivo TOML permite ainda parametrizar chaves avançadas de ambiente, como `model`, `model_reasoning_effort`, `sandbox_mode`, `skills.config` e até servidores MCP exclusivos sob a seção `[mcp_servers]`. Essa estrutura confere ao arquiteto o poder de desenhar um time de especialistas sob medida para o seu domínio tecnológico.

---

## Slide 16 — Políticas de Sandbox e Modos de Aprovação
**Subtítulo:** Governança Corporativa • O Princípio do Menor Privilégio e Portões de Segurança

Na Aula 1 aprendemos o Princípio da Reversibilidade. Aqui, aplicamos diretamente esse conceito na infraestrutura através das políticas de sandbox e permissão.

A regra de ouro é o **Princípio do Menor Privilégio**: subagentes de exploração, pesquisa e revisão devem ter seu ambiente travado em `sandbox_mode = "read-only"`. Se um agente precisa apenas inspecionar o código, conceder permissão de escrita é uma negligência grave de segurança. Apenas o agente final de implementação deve possuir permissão `workspace-write`.

Além disso, o Codex propaga as políticas do turno pai para todos os filhos. Se um subagente em background necessitar de uma aprovação que exige interação humana, o CLI do Codex apresenta uma notificação destacada; o operador pode pressionar a tecla `'o'` para inspecionar a thread filha antes de aprovar ou rejeitar. Em ambientes não interativos (como pipelines automáticos), ações que demandem aprovação não concedida falham de forma segura, garantindo que nenhum subagente opere sem custódia humana.

---

## Slide 17 — Laboratório Interativo 3: Custom Agent Builder
**Subtítulo:** Prática Aplicada • Interface Interativa de Criação e Validação de TOML

No laboratório do Construtor e Validador de Custom Agents, exercitamos a especificação declarativa de novos subagentes corporativos, explorando perfis como *Code Reviewer*, *Security Auditor* e *Docs Researcher*, ou customizando campos de identificação, persona, instruções, modelo e esforço de raciocínio.

A validação em tempo real confere os campos obrigatórios e compila dinamicamente o arquivo TOML pronto para ser salvo em `.codex/agents/`. Notem como a seleção da política de sandbox isola o agente em modo `read-only` e como o prompt de instruções molda o comportamento do agente para que ele nunca fuja do seu escopo delimitado.

---

## Slide 18 — Padrões Arquiteturais da Indústria
**Subtítulo:** Engenharia Aplicada • Estudos de Caso Canônicos da Documentação da OpenAI

Vamos analisar os dois padrões arquiteturais de maior sucesso na indústria, documentados oficialmente pela engenharia da OpenAI:

### 1. O Triplo PR Review
Diante de um Pull Request complexo, o orquestrador não tenta auditar tudo sozinho. Ele dispara três agentes especializados:
- `pr_explorer`: Rodando no rápido GPT-6 Luna em `read-only`, mapeia os caminhos de código afetados;
- `reviewer`: Rodando no potente GPT-6.1 Sol com raciocínio `medium`, audita segurança e regressões lógicas;
- `docs_researcher`: Usando um MCP dedicado de documentação, confere se as APIs públicas foram usadas corretamente.

### 2. O Debugging Full-Stack de UI
Diante de um erro complexo de front-end:
- `browser_debugger`: Utiliza ferramentas de navegador via MCP para reproduzir o bug e capturar screenshots;
- `code_mapper`: Rastreia os componentes responsáveis;
- `ui_fixer`: Instanciado em modo de escrita somente após a causa raiz estar comprovada, aplicando a menor alteração cirúrgica defensável.

Essa é a essência do design agêntico profissional.

---

## Slide 19 — Laboratório Interativo 4: PR Review Runner
**Subtítulo:** Prática Aplicada • Simulação de Spawning, Concorrência e Barreira de Sincronização

No simulador de eventos do Triplo PR Review, acompanhamos o despacho concorrente das threads do `pr_explorer`, do `reviewer` e do `docs_researcher`.

Reparem no momento exato em que a **Barreira Wait-for-All** entra em ação: mesmo que o `pr_explorer` termine primeiro, o orquestrador não fecha a análise; ele aguarda os demais colegas finalizarem seus relatórios e, em seguida, unifica os resumos destilados em um parecer executivo consolidado com referências de arquivos e níveis de severidade. Esta simulação materializa todo o fluxo que estudamos teoricamente.

---

## Slide 20 — Laboratório Interativo 5: Quiz Interativo de Fixação
**Subtítulo:** Avaliação e Fechamento • 5 Questões Avançadas sobre AGENTS.md e Subagentes

Chegamos ao momento decisivo de avaliação e fixação do conhecimento com o nosso Quiz Interativo de Fechamento, cobrindo os conceitos-chave abordados na aula:
1. A ordem de precedência da cadeia AGENTS.md;
2. O limite de bytes de instrução e truncamento (`project_doc_max_bytes = 32 KiB`);
3. A mitigação de Context Rot com resumos destilados (*summaries*);
4. O schema declarativo de Custom Agents em TOML;
5. O Princípio do Menor Privilégio com políticas de sandbox em modo `read-only`.

Com isso, encerramos o conteúdo teórico e prático da nossa Aula 2, plenamente capacitados para projetar, configurar e governar ecossistemas de agentes corporativos de alto desempenho no ChatGPT Work e Codex. Bons estudos e nos vemos na Aula 3!
