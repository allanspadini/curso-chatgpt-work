# 🧭 Guia da Prática 02 (Capítulo 10 — Rubricas 3.4 e 3.6): Work Chief of Staff, Briefing Decisório em 7 Blocos e Limiar de Mudança Relevante

**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet — Pós-Graduação em IA e Engenharia de Software  
**Professor:** Prof. Dr. Allan Segovia-Spadini  
**Base Bibliográfica:** Capítulo 10 — *Productivity and Collaboration* (`10-productivity-and-collaboration.md`)  
**Rubricas Atendidas:**
- **Rubrica 3.4:** *"O aluno configurou um mapa de fontes de equipe e estruturou um briefing decisório com limiar de mudança relevante?"*
- **Rubrica 3.6 (Parte 1):** *"O aluno definiu o fluxo como tarefa recorrente e agendada com dono e aprovação?"*

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
