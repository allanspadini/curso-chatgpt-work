# 🧭 Guia da Prática 02 (Capítulo 10 — Rubricas 3.4 e 3.6): Work Chief of Staff, Briefing Decisório em 7 Blocos e Limiar de Mudança Relevante

**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet — Pós-Graduação em IA e Engenharia de Software  
**Professor:** Prof. Dr. Allan Segovia-Spadini  
**Base Bibliográfica:** Capítulo 10 — *Productivity and Collaboration* (`10-productivity-and-collaboration.md`)  
**Rubricas Atendidas:**
- **Rubrica 3.4:** *"O aluno configurou um mapa de fontes de equipe e estruturou um briefing decisório com limiar de mudança relevante?"*
- **Rubrica 3.6 (Parte 1):** *"O aluno definiu o fluxo como tarefa recorrente e agendada com dono e aprovação?"*

---

## 📤 Quais Saídas Exigir dos Alunos (O Que Cobrar da Turma)

> **Instrução para o Professor:**  
> Ao lançar os exercícios da Prática 2, não entregue o roteiro de comandos prontos. Os alunos precisam aprender a formular o briefing e o handoff de forma autônoma.  
> **Você deve cobrar deles exclusivamente as seguintes SAÍDAS FINAIS:**

### 🔹 Saída da Prática 2.1 (Slide 11 — Work Chief of Staff Matinal às 08h30):
Exija que o aluno apresente o **Briefing Decisório Matinal nos 7 Blocos Canônicos por Ação**:
1. **Top Priorities:** Desfechos obrigatórios de hoje ajustados à janela real de apenas **2h30 livres de foco matinal**;
2. **Meaningful Changes:** Mudanças de escopo em documentos (corte do Estorno Internacional no doc Apollo v3) e itens fechados (`BUG-309`);
3. **Upcoming Commitments & Colisões de Agenda:** Alerta explícito sobre o conflito de horário às **14h00** (Comitê Executivo Apollo vs. Demo externa);
4. **Responses Required:** Mensagens que necessitam de julgamento humano fundamentado;
5. **Blocked or Waiting:** Dependência crítica do firewall `FW-882` indicando o dono (`Roberto Mendes`);
6. **Can Wait:** Itens informativos ou de baixa urgência (como o artigo compartilhado pelo Diretor/VP sênior);
7. **Prepared Next Steps:** Rascunhos de resposta encenados (*staged*), mas **não enviados**;
+ **Bloco de Limite de Confiança:** Declaração explícita de indisponibilidade da fonte `Tracker-Auditoria-SecOps` (`HTTP 503`), sem inventar dados.

*(Regra de ouro: A saída **não pode** conter divisões por aplicativo como "Resumo do Slack" ou "Resumo do E-mail")*.

🔍 **Como o Professor Audita a Saída da Prática 2.1 (Checklist Rápido):**
- [ ] O briefing está estruturado por desfecho e ação (e não por app de origem)?
- [ ] O artigo da HBR do Diretor Geral (VP) foi alocado em `Can Wait` (aplicando a regra `Urgente ≠ Importante`)?
- [ ] A colisão de horário das 14h00 foi apontada?
- [ ] A falha `HTTP 503` do conector SecOps foi declarada com transparência como limitação de confiança?

---

### 🔹 Saída da Prática 2.2 (Slide 13 — Limiar de Mudança Relevante e Handoff Seguro):
Exija que o aluno apresente **duas saídas complementares**:

1. **Auditoria do Heartbeat das 10h00 + Delta Brief:**
   - Classificação dos 4 eventos: `H-01` e `H-02` como **Suprimidos em Silêncio Operacional**; `H-03` (exigência de assinatura mTLS até 11h30) e `H-04` (volta do conector SecOps revelando incidente `SEC-901`) como **Gatilhos de Interrupção Imediata**;
   - Emissão de um **Delta Brief conciso** reportando apenas o que mudou (sem repetir os itens inalterados das 08h30).

2. **Pacote de Handoff Operacional Seguro para Roberto (DevSecOps) e Camila (QA):**
   - Contexto técnico focado na resolução de `SEC-901` e mTLS do Projeto Apollo;
   - **Lista Explícita de Dados Privados Removidos:** Declaração formal no rodapé confirmando que a nota pessoal de consulta com o pediatra do filho às 12h30 e a negociação do financiamento imobiliário foram **100% expurgadas** por privacidade.

🔍 **Como o Professor Audita a Saída da Prática 2.2 (Checklist Rápido):**
- [ ] Os eventos sem impacto material (`H-01` e `H-02`) foram mantidos em silêncio sem gerar interrupção inútil?
- [ ] O pacote de handoff foi entregue sem nenhum dado privado ou confidencial alheio ao projeto?

---

## 🤖 O Que Passar Para a IA (Para o Professor Entender a Prática)

Para você, professor, entender a mecânica da prática e orientar alunos que tenham dúvidas, estes são os prompts de referência utilizados nos bastidores:

### Prompt de Referência — Prática 2.1 (Slide 11):
```text
Atue como meu Work Chief of Staff seguindo rigorosamente a metodologia do Capítulo 10. Anexei o arquivo "sinais_equipe_manha_21out.md" contendo os sinais das 08h30 vindos de Mensagens (Slack), E-mail, Calendário, Documentos e Trackers. Hoje tenho apenas 2h30 livres de foco pela manhã.

Monte o meu Briefing Decisório Matinal obedecendo a estas 4 regras obrigatórias:
1. Organização por Ação nos 7 Blocos Canônicos (Proibido Agrupar por Aplicativo): Cruze as fontes por iniciativa e estruture em (1) Top Priorities, (2) Meaningful Changes, (3) Upcoming Commitments & Colisões, (4) Responses Required, (5) Blocked or Waiting, (6) Can Wait e (7) Prepared Next Steps (staged, não enviados).
2. Regra "Urgente ≠ Importante": Mensagem informativa (FYI) de líder sênior vai para "6. Can Wait". Priorize bloqueios de equipe e prazos do dia.
3. Higiene de Fim de Thread: Verifique a última mensagem de EM-402 e o BUG-309 para não listar itens resolvidos como abertos.
4. Transparência de Fontes Indisponíveis: Reporte a falha HTTP 503 do conector SecOps como limite de confiança, sem adivinhar dados.
```

### Prompt de Referência — Prática 2.2 (Slide 13):
```text
Continuando na mesma thread (usando o briefing das 08h30 como baseline), anexei o arquivo "atualizacao_heartbeat_10h00.md" com os 4 eventos capturados às 10h00 (H-01 a H-04).

Execute as 2 tarefas abaixo:
1. Filtro do Heartbeat pelo Limiar de Mudança Relevante: Separe quais eventos devem ser suprimidos em silêncio e quais cruzam o limiar de interrupção imediata, emitindo apenas o Delta Brief das 10h00.
2. Pacote de Delegação e Handoff Seguro: Gere um pacote de Handoff para Roberto Mendes (DevSecOps) e Camila (QA) assumirem o SEC-901 e a homologação mTLS, com escopo estritamente técnico do Projeto Apollo, confirmando no rodapé quais informações pessoais foram deliberadamente removidas por privacidade.
```

---

## 🎯 1. Objetivo e Boas Práticas Trabalhadas

No **Capítulo 10**, aprendemos que o trabalho do conhecimento é fragmentado entre mensagens, e-mails, calendário, documentos e trackers. Um mau assistente gera resumos longos divididos por aplicativo (*"Resumo do Slack"*, *"Resumo do E-mail"*), forçando o humano a cruzar tudo de cabeça, ou dispara alertas a cada hora repetindo a mesma lista de tarefas.

Esta prática exercita as **6 grandes boas práticas do Capítulo 10**:
1. **Mapa de Fontes Intencional (5 Perguntas):** Conectar apenas fontes com propósito claro (Mensagens, E-mail, Calendário, Documentos e Trackers) e **declarar explicitamente fontes indisponíveis (`HTTP 503`)** como limite de confiança, sem jamais adivinhar seu conteúdo.
2. **Briefing Decisório em 7 Blocos (Orientado a Ação, Não a Aplicativo):**
   1. `Top Priorities` (Desfechos prioritários de hoje + restrição real de tempo de 2h30)
   2. `Meaningful Changes` (Novas decisões, redução de escopo no doc `DOC-APOLLO-SPEC-v3` e itens fechados como `BUG-309`)
   3. `Upcoming Commitments` (Prazos de hoje às 17h, Comitê às 14h e colisão de agenda às 14h)
   4. `Responses Required` (Mensagens que exigem julgamento humano com contexto verificado)
   5. `Blocked or Waiting` (Marco M3 bloqueado por `FW-882` com dono identificado)
   6. `Can Wait` (Artigo FYI do VP sênior e reunião de baixa prioridade)
   7. `Prepared Next Steps` (Rascunhos encenados e brief de preparo ainda **não enviados**)
3. **Regra Explícita `Urgente ≠ Importante` e Checagem da Última Mensagem:** Um FYI de um VP sênior vai para `Can Wait`, enquanto um bloqueio técnico (`APO-101`) e um prazo contratual (`EM-401`) vão para `Top Priorities`. E threads já resolvidas na última mensagem (`EM-402` e `BUG-309`) não são ressuscitadas como pendência!
4. **Limiar de Mudança Relevante (*Meaningful-Change Threshold*):** No check agendado das 10h00, manter **silêncio operacional** sobre itens inalterados e interromper apenas diante dos gatilhos materiais (`H-03` e `H-04`).
5. **Delegação Enxuta para Task de Projeto Isolada & Handoff Seguro:** Criar um pacote de delegação/handoff para o time de DevSecOps **removendo todo contexto pessoal não relacionado** (como a nota privada de pediatra e financiamento imobiliário presente no final do arquivo!).

---

## 📁 2. Arquivos Disponíveis Nesta Pasta

| Arquivo | Descrição |
| :--- | :--- |
| `sinais_equipe_manha_21out.md` | Consolidado matinal (08h30) das 5 fontes da equipe (Slack, E-mail, Calendário, Docs e Trackers), contendo colisão de agenda, fonte indisponível (`Tracker-Auditoria-SecOps`), FYI de VP, thread já resolvida e nota pessoal privada no anexo. |
| `atualizacao_heartbeat_10h00.md` | Pacote de eventos da checagem agendada das 10h00 (2 eventos irrelevantes/inalterados e 2 gatilhos materiais críticos) para testar o *Meaningful-Change Threshold*. |

---

## 🚀 3. Roteiro Prático em 3 Etapas (Copie e Execute no ChatGPT Work)

### 🔹 ETAPA 1: Construção do Mapa de Fontes e do Briefing Decisório em 7 Blocos (08h30)

Anexe o arquivo **`sinais_equipe_manha_21out.md`** no ChatGPT Work e envie o prompt abaixo:

> **Prompt da Etapa 1 (Briefing Matinal do Work Chief of Staff):**  
> *"Atue como meu **Work Chief of Staff** seguindo rigorosamente a metodologia do Capítulo 10. Anexei o arquivo `sinais_equipe_manha_21out.md` com os sinais das 08h30.*  
>  
> *Entregue o **Briefing Decisório Matinal** obedecendo às seguintes regras:*  
> *1. **Proibido Agrupar por Aplicativo:** Não crie seções 'Slack', 'E-mail' ou 'Jira'. Cruze as evidências por iniciativa e organize estritamente nos **7 Blocos Canônicos**:*  
>    *- (1) **Top Priorities** (considerando minha janela líquida de apenas 2h30 livres hoje pela manhã);*  
>    *- (2) **Meaningful Changes** (incluindo mudanças de escopo em documentos e bugs fechados);*  
>    *- (3) **Upcoming Commitments & Colisões de Agenda** (aponte a colisão das 14h00);*  
>    *- (4) **Responses Required**;*  
>    *- (5) **Blocked or Waiting** (nomeando o dono da dependência);*  
>    *- (6) **Can Wait** (aplicando a regra `Urgente ≠ Importante` mesmo para mensagens de líderes seniores quando forem FYI);*  
>    *- (7) **Prepared Next Steps (Staged Artifacts — Não Enviados)**: prepare o rascunho de resposta para o Jurídico do Grupo Vanguarda (`EM-401`) usando apenas os fatos confirmados (`SEC-ZERO-PII` e `CERT-2026-991`) e o rascunho de escalonamento da regra `FW-882` para Roberto Mendes.*  
> *2. **Higiene de Threads:** Verifique a última mensagem de `EM-402` e de `BUG-309` para não listar itens já resolvidos como pendências abertas.*  
> *3. **Transparência sobre Fontes Indisponíveis:** Destaque explicitamente a falha `HTTP 503` do `Tracker-Auditoria-SecOps` como limitação de confiança da análise, sem adivinhar seu conteúdo."*

---

### 🔹 ETAPA 2: Calibração do Limiar de Mudança Relevante (*Meaningful-Change Threshold* às 10h00)

Na **mesma thread** (como recomenda o Capítulo 10 para manter a linha de base / *baseline*), anexe agora o arquivo **`atualizacao_heartbeat_10h00.md`** e execute:

> **Prompt da Etapa 2 (Teste de Heartbeat Horário com Limiar de Mudança Relevante):**  
> *"Agora são 10h00 e nossa tarefa agendada recorrente (Scheduled Check) rodou sobre o arquivo `atualizacao_heartbeat_10h00.md`, comparando o estado atual com a linha de base das 08h30.*  
> *Aplique o **Limiar de Mudança Relevante (Meaningful-Change Threshold)**:*  
> *1. Mostre uma tabela rápida auditando os 4 eventos (`H-01` a `H-04`), indicando quais devem ser **Suprimidos em Silêncio Operacional** (por não representarem mudança material) e quais **Cruzam o Limiar de Interrupção** (nomeando qual dos 7 gatilhos do Capítulo 10 foi acionado).*  
> *2. Emita apenas o **Delta Brief das 10h00** (sem repetir os itens inalterados das 08h30!) e prepare o próximo passo encenado para o incidente `SEC-901` e a assinatura mTLS das 11h30."*

---

### 🔹 ETAPA 3: Delegação Enxuta para Task de Projeto e Handoff Seguro (Filtro de Privacidade)

Ainda na mesma conversa, teste a regra de ouro de **Colaboração e Handoff de Equipe**:

> **Prompt da Etapa 3 (Pacote de Delegação de Projeto e Handoff sem Vazamento Pessoal):**  
> *"Preciso abrir uma **Task de Projeto Isolada** e enviar um **Handoff Operacional** para o Roberto Mendes (Líder de DevSecOps) e para a Camila (QA Lead) assumirem a resolução conjunta do incidente `SEC-901` e da homologação mTLS do Projeto Apollo.*  
> *Gere o **Contrato de Delegação Enxuta e Handoff** contendo exclusivamente:*  
> *1. Objetivo, Fontes autorizadas do projeto, Decisões já tomadas (como o corte do Estorno Internacional para a Fase 2), Questões abertas, Entregável esperado e Fronteira de Aprovação.*  
> *2. **Filtro Estrito de Privacidade e Escopo:** Confirme explicitamente no rodapé quais informações do pacote original você **removeu deliberadamente** deste handoff (como assuntos pessoais do titular e o contrato jurídico externo do Grupo Vanguarda que não pertence ao escopo de DevSecOps)."*

---

## 🏆 4. Evidências para as Rubricas 3.4 e 3.6 do Projeto da Disciplina
Com esta prática concluída, você tem em mãos o modelo exato para comprovar:
- **Rubrica 3.4:** Mapa de Fontes com as 5 perguntas + Briefing Decisório em 7 blocos + filtro de *Meaningful-Change Threshold* em execução real;
- **Rubrica 3.6:** Definição de recorrência agendada com linha de base (*baseline*), silêncio operacional contra ruído e fronteira de aprovação granular.
