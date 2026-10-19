# Plano de Aula — Aula 4

**Curso:** Pós-Graduação EAD em Inteligência Artificial e Engenharia de Software  
**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet  
**Professor:** Prof. Dr. Allan Segovia-Spadini  
**Título da Aula:** Plugins em Ação, Conectores Estruturados e Computer Use  
**Base Bibliográfica:** Capítulo 8 — *Plugins in Action* (`08-plugins-in-action.md`)  
**Duração Estimada:** 3 horas (divididas em 4 blocos com 5 laboratórios/simuladores interativos)  

---

## 1. Ementa e Visão Geral da Aula

Nesta quarta aula da disciplina, avançamos da engenharia de Skills isoladas para a integração governada com sistemas corporativos externos através de **Plugins, Conectores Estruturados e Computer Use** no ecossistema **ChatGPT Work & Codex**.

Estudamos como transformar um agente geral em um colega de equipe equipado (*equipped teammate*), diferenciando formalmente **Conector** (acesso autenticado via OAuth), **Skill** (método operacional) e **Plugin** (pacote governável que reúne skills, conectores, ferramentas MCP, capacidades de browser, hooks e templates agendados). Analisamos a escolha estratégica da **Superfície de Controle** (*Control Surface*) entre conectores estruturados e automação de interface gráfica (*Computer Use*), o ciclo de vida de instalação em 7 critérios e a independência administrativa em 5 camadas.

Aplicamos essa arquitetura em três domínios práticos completos:
1. **Coordenação de Onboarding de Novos Colaboradores** (filtro rígido de dados sensíveis de RH/PII, separação entre fatos da fonte e itens de planejamento, encenação de 3 artefatos revisáveis e proteção contra *Indirect Prompt Injection*);
2. **Gestão Governada de Caixa de Entrada — Inbox Zero** (classificação em 4 grupos operacionais, preservação da voz autoral via *Sent Mail*, verificação da última mensagem da thread, aprovação desagregada *Send ≠ Archive ≠ Delete* e agendamentos Cloud vs. Desktop);
3. **Operação Segura via `@Computer` e `@Chrome`** (permissões de sistema operacional *Screen Recording* e *Accessibility*, fronteiras entre *Signed-in Chrome*, *Built-in Browser* e *Cloud Browser*, semântica macOS PiP vs. Windows Foreground e o Padrão Reutilizável de Delegação em 6 Partes).

---

## 2. Metodologia Pedagógica Central: Problema ➔ Solução ➔ Teoria

1. **Situação-Problema do Mundo Real (A Dor Prática):**
   - *Gargalo 1 (Agente Isolado vs. Silos Corporativos):* O agente raciocina bem, mas os fatos e ações vivem em e-mails, pastas do Drive, planilhas de RH e apps locais, forçando o humano a copiar e colar contexto sem rastreabilidade.
   - *Gargalo 2 (Vazamentos e Automações Cegas em Onboarding e Inbox):* Planilhas de RH misturam campos operacionais com salários/CPF/dados médicos; canais criados antes da hora revelam contratações sigilosas; automações de e-mail apagam mensagens críticas ou respondem inventando compromissos.
   - *Gargalo 3 (Riscos de Interface Gráfica e Prompt Injection):* Páginas web e células de planilhas podem conter instruções ocultas, e agentes operando a UI gráfica em paralelo geram condições de corrida (*race conditions*).

2. **Solução de Engenharia (A Sacada Prática & Intuição):**
   - *Solução 1 (Plugins Governados & Escolha de Superfície de Controle):* Empacotamento de capacidades instaláveis com preferência por conectores estruturados e uso cirúrgico de Computer Use (`@Computer` / `@Chrome`).
   - *Solução 2 (Staged Artifacts & Desagregação de Ações):* Primeira passagem 100% *Read-Only*, encenação de 3 artefatos revisáveis no onboarding e separação estrita entre enviar, arquivar e excluir na inbox.
   - *Solução 3 (Padrão de Delegação em 6 Partes):* Contrato universal cobrindo *Outcome, Sources, Classification, Read-Only First Pass, Approval Boundary e Completion Report*.

3. **Teoria e Formalismo Rigoroso:**
   - Interseção de autorização em 3 camadas: $\text{Permissão Efetiva}(a) = \text{Auth}_{\text{Conector}}(a) \cap \text{RBAC}_{\text{Serviço}}(u,a) \cap \text{Gate}_{\text{Runtime}}(a)$.
   - Teorema da Não-Transitividade nas 5 camadas administrativas do Workspace.
   - Isolamento formal entre Canal de Controle e Canal de Dados (*Data ≠ Instructions*): $\frac{\partial \text{Policy}}{\partial \mathcal{D}_{\text{External}}} = 0$.

---

## 3. Alinhamento com as Rubricas do Projeto da Disciplina (Bloco 3)

| Rubrica | Critério Avaliado | Cobertura na Aula 4 |
| :--- | :--- | :--- |
| **3.1** | O aluno diferenciou Skill de Plugin quanto ao propósito antes de escolher entre conector estruturado e Computer Use? | Slides 03, 05, 06 (Simulador 1) e 19. |
| **3.2** | O aluno configurou um Plugin real com escopo, permissões e fluxo de aprovação em camadas definidos, e gerenciou seu ciclo de vida completo (instalação, permissões, remoção)? | Slides 04, 07, 10, 14, 17, 18 e 19. |

---

## 4. Mapa de Slides da Apresentação (20 Slides)

- **Slide 01:** Capa — *Plugins em Ação, Conectores Estruturados e Computer Use* (`TitleSlide`)
- **Slide 02:** Situação-Problema 1 — *O Agente Isolado vs. Sistemas Dispersos* (`IsolatedAgentProblemVisual`)
- **Slide 03:** Solução de Engenharia — *A Tríade Arquitetural: Conector vs. Skill vs. Plugin* (`SkillConnectorPluginVisual`)
- **Slide 04:** Teoria Rigorosa — *Defesa em Profundidade: As 3 Camadas de Permissão* (`PluginDefenseLayersVisual`)
- **Slide 05:** Situação-Problema 2 — *O Dilema da Integração: Rota Estruturada vs. Interface Gráfica* (`ControlSurfaceProblemVisual`)
- **Slide 06 [Interativo 1]:** *Simulador: Plugin Estruturado vs. Computer Use* (`StructuredVsComputerUseSimulator`)
- **Slide 07:** Solução & Teoria — *Instalar com Propósito: Ciclo de Vida e 5 Camadas Admin* (`PluginLifecycleGovernanceVisual`)
- **Slide 08:** Situação-Problema 3 — *O Risco Oculto no Onboarding de Equipe* (`OnboardingProblemVisual`)
- **Slide 09 [Interativo 2]:** *Simulador: Firewall de Dados & Fatos vs. Planejamento* (`OnboardingDataFirewallSimulator`)
- **Slide 10:** Solução de Engenharia — *Onboarding Governado: Os 3 Artefatos Encenados* (`OnboardingStagedArtifactsVisual`)
- **Slide 11:** Teoria Rigorosa — *Invariante de Segurança: Conteúdo Externo é Dado, Não Instrução* (`IndirectPromptInjectionVisual`)
- **Slide 12:** Situação-Problema 4 — *Gestão de Inbox Sem Ceder o Julgamento* (`InboxOverloadProblemVisual`)
- **Slide 13 [Interativo 3]:** *Simulador: Os 4 Grupos Operacionais de Triagem de Inbox* (`InboxTriageInteractiveSimulator`)
- **Slide 14:** Teoria & Governança — *Aprovações Desagregadas e Revisões Agendadas Duráveis* (`UnbundledApprovalsScheduleVisual`)
- **Slide 15:** Solução de Engenharia — *Operando o Computador com ChatGPT: `@Computer` e `@Chrome`* (`ComputerUseArchitectureVisual`)
- **Slide 16:** Teoria Rigorosa — *Fronteiras de Isolamento de Navegador e Protocolo de Pausa* (`BrowserBoundariesMatrixVisual`)
- **Slide 17 [Interativo 4]:** *O Padrão Reutilizável de Delegação em 6 Partes* (`SixPartDelegationBuilder`)
- **Slide 18:** Laboratório Prático — *Prática Guiada: Triagem Read-Only de Inbox (14 Dias)* (`PracticeInboxZeroLabVisual`)
- **Slide 19:** Avaliação — *Alinhamento com o Projeto da Disciplina: Rubricas 3.1 e 3.2* (`ProjectRubricsAlignmentVisual`)
- **Slide 20 [Interativo 5]:** *Quiz Interativo de Fixação — Aula 4* (`InteractiveQuizSlide`)
