# Plano de Aula — Aula 5

**Curso:** Pós-Graduação EAD em Inteligência Artificial e Engenharia de Software  
**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet  
**Professor:** Prof. Dr. Allan Segovia-Spadini  
**Título da Aula:** Artefatos de Decisão, Chief of Staff e Workflows de Dados Confiáveis (Foco Integral nas Práticas e Generalização de Padrões)  
**Base Bibliográfica:**
- Capítulo 8 (Fechamento Prático no Navegador) — *Plugins in Action* (`08-plugins-in-action.md`)
- Capítulo 9 — *Documents, Spreadsheets, and Presentations* (`09-documents-spreadsheets-and-presentations.md`)
- Capítulo 10 — *Productivity and Collaboration* (`10-productivity-and-collaboration.md`)
- Capítulo 11 — *Data Workflows: From Messy Files to Trusted Reports* (`11-data-workflows.md`)  
**Duração Estimada:** 3 horas (execução ao vivo das missões práticas, diagnósticos orientados a evidências e consolidação dos princípios gerais de engenharia)

---

## 1. Mapa de Slides da Apresentação (21 Slides — Práticas, Diagnósticos & Generalização)

- **Slide 01:** Capa — *Artefatos de Decisão, Chief of Staff e Workflows de Dados Confiáveis* (`TitleSlide`)
- **Slide 02:** Prática 0 — *Tarefa dos Alunos: Só a Triagem das 8 Threads* (`Practice0TaskVisual`)
- **Slide 03:** Prática 0 — *O Que Observar na Triagem (TH-102 e TH-104)* (`Practice0DebriefVisual`)
- **Slide 04:** Prática 0 — *Demonstração do Professor no Navegador (Voz Autoral, Placeholders e HITL)* (`Practice0DemoProfessorVisual`)
- **Slide 05:** Prática 0 — *Visão Geral & Princípios Gerais: Triagem e Automação Agêntica* (`Practice0GeneralizationVisual`)
- **Slide 06:** Prática 1.1 (Cap. 9) — *O Que Fazer: Reescrever Seção 1 Mantendo Cláusulas Imutáveis* (`Practice1TaskVisual`)
- **Slide 07:** Prática 1.1 (Cap. 9) — *O Que Observar: Cláusulas Intactas, -80,5% Horas e 11% Falha OCR* (`Practice1DebriefVisual`)
- **Slide 08:** Prática 1.2 (Cap. 9) — *O Que Fazer: Comparar 4 Fornecedores Sem Zerar Célula Vazia* (`Practice1MatrixTaskVisual`)
- **Slide 09:** Prática 1.2 (Cap. 9) — *O Que Observar: Blank ≠ Zero em VEND-03 e Sensibilidade de Pesos* (`Practice1MatrixDebriefVisual`)
- **Slide 10:** Prática 1 — *Visão Geral & Princípios Gerais: Entregáveis e Modelos Auditáveis* (`Practice1GeneralizationVisual`)
- **Slide 11:** Prática 2.1 (Cap. 10) — *O Que Fazer: Consolidar Sinais das 08h30 nos 7 Blocos por Ação* (`Practice2TaskVisual`)
- **Slide 12:** Prática 2.1 (Cap. 10) — *O Que Observar: FYI do VP em Can Wait, Colisão 14h e HTTP 503* (`Practice2DebriefVisual`)
- **Slide 13:** Prática 2.2 (Cap. 10) — *O Que Fazer: Aplicar Limiar às 10h00 e Gerar Handoff Limpo* (`Practice2HeartbeatTaskVisual`)
- **Slide 14:** Prática 2.2 (Cap. 10) — *O Que Observar: H-01/H-02 em Silêncio, Alerta mTLS/SEC-901 e Privacidade* (`Practice2HeartbeatDebriefVisual`)
- **Slide 15:** Prática 2 — *Visão Geral & Princípios Gerais: Chief of Staff e Gestão de Sinais* (`Practice2GeneralizationVisual`)
- **Slide 16:** Prática 3.1 (Cap. 11) — *O Que Fazer: Limpar exportacao_vendas_bruta_suja.csv em Cópia* (`Practice3TaskVisual`)
- **Slide 17:** Prática 3.1 (Cap. 11) — *O Que Observar: O Paradoxo do TOTAL ($4.345,50 Incompleto)* (`Practice3DebriefVisual`)
- **Slide 18:** Prática 3.2 (Cap. 11) — *O Que Fazer: Executar Trial Join entre Vendas Limpas e CRM* (`Practice3JoinTaskVisual`)
- **Slide 19:** Prática 3.2 (Cap. 11) — *O Que Observar: Inflação +$1.100 (CUST-105) e $620 Unmatched* (`Practice3JoinDebriefVisual`)
- **Slide 20:** Prática 3 — *Visão Geral & Princípios Gerais: Engenharia de Dados Confiáveis* (`Practice3GeneralizationVisual`)
- **Slide 21:** Cap. 9 — *Pense em Entregáveis como Produtos com Propósito* (`DeliverableProductVisual`)

---

## 2. Competências e Princípios Gerais por Prática

1. **Prática 0 (Triagem e Ações no Navegador):**
   - Transição da execução estrita para qualquer fila de mensagens (tickets Jira, Zendesk, WhatsApp corporativo, canais Slack);
   - Domínio do *Princípio do Estado Final* (temporalidade em threads assíncronas);
   - Blindagem contra *Indirect Prompt Injection* pela fronteira Dados Brutos ≠ Instruções de Execução;
   - Humildade epistêmica via parametrização por placeholders;
   - Governança por Portão HITL em ações externas destrutivas.

2. **Prática 1 (Entregáveis, Camada Imutável e Matrizes):**
   - Transição de políticas corporativas e OCR para contratos de serviço, editais, SLAs e compliance;
   - Aplicação de *Camada Imutável (Frozen Scope)* para isolar redação de parâmetros normativos;
   - Auditoria pela *Tríade da Transparência Epistêmica* (`[Fato Citado]`, `[Achado Derivado]`, `[Recomendação]`);
   - Preservação da semântica de dados faltantes (*Blank ≠ Zero*);
   - Análise de sensibilidade multicritério com múltiplos cenários de pesos.

3. **Prática 2 (Chief of Staff e Gestão de Sinais):**
   - Transição de gestão de TI para suporte a qualquer liderança executiva, logística ou mesas de operações;
   - Dissolução de silos de ferramentas via agrupamento por tipo de ação necessária;
   - Hierarquia ontológica do risco no caminho crítico vs. senioridade de crachá de remetentes;
   - Implementação de agentes de baixo ruído via *Limiar de Mudança Relevante (Meaningful-Change Threshold)* e virtude do silêncio;
   - Higienização mandatória de contexto pessoal e sigiloso em pacotes de delegação (*Safe Handoff*).

4. **Prática 3 (Engenharia de Dados Confiáveis e Trial Joins):**
   - Transição de vendas/CRM para dados contábeis, telemetria, logs de auditoria e reconciliações financeiras;
   - Aplicação do *Princípio do Grão* e garantia de linhagem por limpeza em cópia de trabalho versionada;
   - Detecção do *Paradoxo do Total Parcial* (reconciliação matemática que fecha sobre amostras incompletas);
   - Auditoria preventiva de chaves via *Trial Join* para mitigar *Multiply Matches* e *Unmatched Rows*;
   - Governança através de *Data-Quality Notes* obrigatórias com memória de cálculo declarada.
