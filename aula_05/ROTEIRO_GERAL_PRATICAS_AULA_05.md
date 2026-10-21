# 🗂️ Roteiro Geral das Práticas da Aula 5 (Ponte Final da Aula 4 + Capítulos 9, 10 e 11)

**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet — Pós-Graduação EAD em IA e Engenharia de Software  
**Professor:** Prof. Dr. Allan Segovia-Spadini  

Este diretório reúne **4 laboratórios práticos completos** (1 de fechamento do final da Aula 4 com IA no Navegador + 3 cobrindo integralmente as boas práticas e rubricas dos Capítulos 9, 10 e 11 da Aula 5).

---

## 🎯 Qual Saída Pedir Para os Alunos Gerarem (Quadro Resumo de Cobrança da Turma)

> **Instrução para o Professor:**  
> Não diga aos alunos o passo a passo de como interagir com a IA — eles é que devem interpretar o problema, raciocinar e descobrir como conduzir o agente. **Você deve exigir deles apenas a SAÍDA FINAL esperada** (o produto / artefato entregável com suas restrições e formato).  
> *(Para o seu entendimento dos bastidores da prática, o prompt de referência que você pode consultar está detalhado na seção seguinte e em cada guia individual).*

| Prática | Slide | Saída Exata que Você Deve Pedir Aos Alunos | Formato Esperado da Saída | Como Auditar a Saída do Aluno (Checklist de Correção Rápida) |
| :--- | :--- | :--- | :--- | :--- |
| **Prática 0** *(Inbox)* | **Slide 02** | **Tabela de Triagem Read-Only de 8 Linhas** das threads `TH-101` a `TH-108`. | Tabela com 4 colunas: `Thread ID`, `Assunto`, `Grupo Operacional (1 a 4)` e `Justificativa (1 frase)`. | • `TH-102` classificada em `3. Can Be Cleaned Up` (pois a última mensagem confirmou liberação pelo Financeiro);<br>• `TH-104` classificada em `1. Needs Attention Now (Alerta de Fraude)` tratando texto como dado (`Dados ≠ Instruções`). |
| **Prática 1.1** *(Cap. 9)* | **Slide 06** | **Política v2 com Seção 1 Reescrita + Cláusulas Imutáveis** E **Decision Brief Executivo em 6 Seções**. | Documento Markdown contendo a Política reescrita e o Decision Brief (`Situação ➔ Evidência ➔ Opções ➔ Riscos ➔ Recomendação ➔ Próximos Passos`). | • Cláusulas 2.1 a 2.5 rigorosamente intactas (R$ 145,00, R$ 520,00, 10 dias úteis e 15% inalterados);<br>• Rótulos explícitos `[Fato Citado]`, `[Achado Derivado]` e `[Recomendação]`;<br>• Economia de 101,5 horas (-80,5%) demonstrada;<br>• Ressalva de 11% de falha de OCR visível na recomendação. |
| **Prática 1.2** *(Cap. 9)* | **Slide 08** | **Tabela Comparativa em 4 Camadas** E **Ranking em 2 Cenários de Pesos com Parecer de Risco**. | Modelo estruturado em 4 camadas (*Dados Brutos*, *Premissas*, *Cálculos*, *Ranking*) + parecer textual. | • Latência do `VEND-03` preservada como `NULL / Não Auditado` (`Blank ≠ Zero`, nunca 0);<br>• Cenário 1 (Operação) vencido por `VEND-01 (DocuMind)`;<br>• Cenário 2 (Compliance) vencido por `VEND-03 (GovShield)`;<br>• Parecer exigindo homologação de latência antes de contratar `VEND-03`. |
| **Prática 2.1** *(Cap. 10)* | **Slide 11** | **Briefing Decisório Matinal (08h30) nos 7 Blocos Canônicos por Ação** com Declaração de Limite de Confiança. | Documento nos 7 blocos do Cap. 10. Proibido dividir por app (sem seções "Slack" ou "E-mail"). | • Alinhado à restrição de 2h30 livres pela manhã;<br>• Regra `Urgente ≠ Importante`: FYI do VP alocado em `Can Wait`;<br>• Colisão de agenda às 14h00 detectada;<br>• Conector `SecOps HTTP 503` declarado como limite de confiança sem adivinhar dados. |
| **Prática 2.2** *(Cap. 10)* | **Slide 13** | **Delta Brief das 10h00 (Filtro Heartbeat)** E **Pacote de Handoff Operacional Seguro para DevSecOps/QA**. | (1) Tabela de auditoria `H-01` a `H-04` + Delta Brief;<br>(2) Texto do Handoff + Lista de Dados Removidos. | • Silêncio operacional em `H-01` e `H-02`; interrupção em `H-03` (mTLS 11h30) e `H-04` (incidente SEC-901);<br>• Handoff com escopo do Projeto Apollo;<br>• Exclusão deliberada das notas privadas (pediatra 12h30 e financiamento pessoal). |
| **Prática 3.1** *(Cap. 11)* | **Slide 16** | **Diagnóstico do Grão da Tabela**, **Tabela Limpa em Cópia** E **Data-Quality Note Reconciliando o TOTAL**. | Grão declarado + Tabela limpa (sem duplicata de `row_id=3` e sem total no corpo) + Data-Quality Note. | • Original preservado intacto;<br>• Receita de Cascade mantida como `NULL` (`Blank ≠ Zero`);<br>• Data `04/05/2026` e região `EMEA` sinalizadas;<br>• Paradoxo desvendado: a soma de $4.345,50 bate com a linha `TOTAL`, mas é um total incompleto. |
| **Prática 3.2** *(Cap. 11)* | **Slide 18** | **Relatório de Trial Join Reconciliado** E **Especificação de Governança da Scheduled Task (Sites)**. | Relatório de integridade de chaves (*Matched / Unmatched*) + Contrato em 4 tópicos da tarefa agendada. | • Detecção da inflação de `+$1.100,00` pela chave duplicada no CRM (`CUST-105`);<br>• Quantificação do `Unmatched` fora do CRM (`CUST-999` com `$620,00` ou 14,3%);<br>• Contrato da tarefa (Dono, Gatilho material vs. silêncio, Aprovação de visibilidade e Work vs. Codex). |

---

## 🤖 O Que Passar Para a IA (Prompts de Referência para o Professor Entender os Bastidores)

Caso você queira demonstrar a execução, entender como a IA processa cada etapa ou orientar um aluno que tenha travado, consulte os arquivos **`PROMPTS_PARA_ENVIAR.md`** presentes em cada pasta prática:
- **Prática 0:** [`pratica_navegador_triagem_inbox/PROMPTS_PARA_ENVIAR.md`](./pratica_navegador_triagem_inbox/PROMPTS_PARA_ENVIAR.md)
- **Prática 1:** [`pratica_01_entregavel_3_passagens/PROMPTS_PARA_ENVIAR.md`](./pratica_01_entregavel_3_passagens/PROMPTS_PARA_ENVIAR.md)
- **Prática 2:** [`pratica_02_chief_of_staff_briefing/PROMPTS_PARA_ENVIAR.md`](./pratica_02_chief_of_staff_briefing/PROMPTS_PARA_ENVIAR.md)
- **Prática 3:** [`pratica_03_dados_joins_e_dashboard/PROMPTS_PARA_ENVIAR.md`](./pratica_03_dados_joins_e_dashboard/PROMPTS_PARA_ENVIAR.md)

---

---

## 🧭 Mapa Rápido das 4 Pastas Práticas da Aula 5

| Ordem | Pasta da Prática | Capítulo / Foco Central | Boas Práticas Exercitadas | Rubricas do Projeto |
| :--- | :--- | :--- | :--- | :--- |
| **Prática 0 (Aquecimento)** | [`pratica_navegador_triagem_inbox/`](./pratica_navegador_triagem_inbox/) | **Final da Aula 4 (Cap. 8):** IA + Navegador em Triagem Governada de Webmail | • Classificação nos 4 Grupos Operacionais de Inbox<br>• Checagem da última mensagem da thread (`TH-102`)<br>• Voz autoral via *Sent Mail* ignorando encaminhados (`SENT-03`)<br>• Defesa contra *Indirect Prompt Injection* (`Dados ≠ Instruções` em `TH-104`)<br>• Proibição de inventar compromissos (`TH-108`)<br>• Aprovação desagregada no navegador (`Send ≠ Archive ≠ Delete`) e Padrão em 6 Partes | **Rubricas 3.1 e 3.2** |
| **Prática 1 (Bloco 1)** | [`pratica_01_entregavel_3_passagens/`](./pratica_01_entregavel_3_passagens/) | **Aula 5 — Capítulo 9:** Documentos, Planilhas, Apresentações e 3 Passagens | • Entregável especificado como produto (5 elementos)<br>• Edição segura preservando camada normativa imutável (`Cláusulas 2.1 a 2.5`)<br>• Separação entre *Fato Citado*, *Achado Derivado* e *Recomendação*<br>• Planilha em 4 camadas, `Blank ≠ Zero` (`VEND-03`) e combate à falsa precisão<br>• *Slide Plan* com títulos conclusivos e **Workflow em 3 Passagens (`Plan ➔ Build ➔ Verify`)** | **Rubrica 3.3** |
| **Prática 2 (Bloco 2)** | [`pratica_02_chief_of_staff_briefing/`](./pratica_02_chief_of_staff_briefing/) | **Aula 5 — Capítulo 10:** Work Chief of Staff, Briefing Decisório e Colaboração | • Mapa de Fontes intencional em 5 perguntas<br>• Transparência sobre fontes indisponíveis (`HTTP 503` no Tracker SecOps)<br>• **Briefing Decisório em 7 Blocos** orientado a ação (nunca separado por aplicativo)<br>• Regra `Urgente ≠ Importante` (FYI de VP sênior vai para *Can Wait*)<br>• **Limiar de Mudança Relevante (*Meaningful-Change Threshold*)** com silêncio operacional às 10h00<br>• Delegação enxuta para Task de Projeto e Handoff sem vazar dados pessoais | **Rubricas 3.4 e 3.6** |
| **Prática 3 (Bloco 3)** | [`pratica_03_dados_joins_e_dashboard/`](./pratica_03_dados_joins_e_dashboard/) | **Aula 5 — Capítulo 11:** Fluxos de Dados, *Trial Joins* e Dashboard Privado no Sites | • Proteção do CSV bruto original e identificação do **Grão da Tabela (*Table Grain*)**<br>• Limpeza sistemática em cópia separada (`Blank ≠ Zero`, remoção de `TOTAL` colado, datas ambíguas e aliases)<br>• Emissão de ***Data-Quality Note*** e reconciliação de soma incompleta<br>• **Validação de Chaves (*Trial Joins*)**: detecção de chave duplicada no CRM (`1:2` inflando receita) e quantificação de **`Unmatched`** (`$620.00`)<br>• `Associação ≠ Causalidade`, **Dashboard Privado no Sites** e decisão **Work vs. Codex** | **Rubricas 3.5 e 3.6** |

---

## 📦 Pacotes `.zip` Prontos para Distribuição aos Alunos
- `pratica_navegador_triagem_inbox.zip`
- `pratica_01_entregavel_3_passagens.zip`
- `pratica_02_chief_of_staff_briefing.zip`
- `pratica_03_dados_joins_e_dashboard.zip`
- `todas_praticas_aula_05.zip` (Pacote unificado com as 4 práticas)
