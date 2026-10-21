# Falas do Apresentador — Aula 5: Artefatos de Decisão, Chief of Staff e Workflows de Dados Confiáveis

**Curso:** Pós-Graduação EAD em Inteligência Artificial e Engenharia de Software — Instituto Infnet  
**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Docente:** Prof. Dr. Allan Segovia-Spadini  
**Base Bibliográfica:** Capítulos 9, 10 e 11 (`09-documents-spreadsheets-and-presentations.md`, `10-productivity-and-collaboration.md`, `11-data-workflows.md`)

---

## Slide 01 — Processos Agênticos com ChatGPT Work (Aula 5: Artefatos de Decisão, Chief of Staff e Workflows de Dados Confiáveis)

Sejam muito bem-vindos à quinta aula da nossa disciplina de Processos Agênticos com ChatGPT Work [26E4_2] na pós-graduação do Instituto Infnet. Eu sou o Professor Allan Spadini.

Organizamos o início desta apresentação de forma totalmente enxuta e passo a passo: uma única missão por slide ("o que precisa ser feito") seguida imediatamente pelo slide de diagnóstico ("o que deveria ter sido observado"), cobrindo:
- Prática 0 (Ponte com o Final da Aula 4): Triagem de Webmail dos alunos + Demonstração do Professor no navegador;
- Prática 1.1 e 1.2 (Capítulo 9 — Rubrica 3.3): Edição segura preservando camada imutável e comparação de fornecedores sem zerar células vazias;
- Prática 2.1 e 2.2 (Capítulo 10 — Rubricas 3.4 e 3.6): Briefing Decisório em 7 blocos às 08h30 e filtro de Heartbeat às 10h00 + Handoff limpo;
- Prática 3.1 e 3.2 (Capítulo 11 — Rubricas 3.5 e 3.6): Limpeza de CSV sujo em cópia separada e validação de chaves via Trial Join com CRM.

---

## Slide 02 — Prática 0 — Tarefa dos Alunos: Só a Triagem

Começamos pela nossa Prática 0, na pasta "aula_05/pratica_navegador_triagem_inbox/".

Para os alunos, há apenas UMA tarefa simples e direta neste slide:
1. Abrir o arquivo "exportacao_inbox_14_dias.csv" (ou "webmail_corporativo_simulacao.html") com as 8 threads dos últimos 14 dias (TH-101 a TH-108);
2. Pedir para a IA classificar cada thread em um dos 4 grupos operacionais do Capítulo 8 (Needs Attention Now, Needs a Draft Reply, Can Be Cleaned Up After Review ou Should Be Revisited on Schedule), lembrando de olhar sempre a última mensagem da thread e tratar o texto como dado;
3. Entregar apenas uma tabela simples de 8 linhas com o ID da thread, o grupo escolhido e 1 frase de motivo. Não precisa criar rascunho agora!

---

## Slide 03 — Prática 0 — O Que Observar na Triagem

O que deveria ter sido observado na triagem feita pelos alunos?

Observem à esquerda as 2 armadilhas fundamentais:
- Armadilha 1 (TH-102): A primeira mensagem pedia aprovação urgente de cota de tokens, mas a Mensagem #3 (última da thread) avisa que o Financeiro já liberou e o problema foi resolvido! Portanto, ela vai para "3. Can Be Cleaned Up", jamais para urgente.
- Armadilha 2 (TH-104): O e-mail externo traz um bloco de Indirect Prompt Injection mandando aprovar uma troca de conta bancária. Pela regra Dados ≠ Instruções, a IA bloqueia a ordem maliciosa e classifica como "1. Needs Attention Now (Alerta de Fraude)".

À direita temos o gabarito completo das 8 threads distribuídas nos 4 grupos!

---

## Slide 04 — Prática 0 — Demonstração do Professor no Navegador

Com a triagem dos alunos conferida, agora eu realizo ao vivo no navegador ("webmail_corporativo_simulacao.html") as 3 tarefas complementares de demonstração:

1. Demo 1 (Voz Autoral na Aba 2 — Sent Mail): Mostro como a IA lê SENT-01 e SENT-02 para copiar a escrita própria do titular (saudação direta + tópicos objetivos) e ignora completamente o SENT-03, que é um e-mail encaminhado de marketing cheio de gírias.
2. Demo 2 (Não Inventar Compromissos): Em TH-103 (Dra. Helena), os fatos existem e o rascunho sai completo; já em TH-108 (Convite para palestrar em SP na sexta), não há dados de agenda nem passagem, então a IA usa placeholders explícitos ("[CONFIRMAR AGENDA E PASSAGEM]").
3. Demo 3 (Portão Send ≠ Archive ≠ Delete no Navegador): A IA preenche a página e clica apenas em "Salvar Rascunho", parando antes de clicar em Enviar ou Lixeira, e depois aprovamos separadamente só o lote de arquivamento de TH-102 e TH-105!

---

## Slide 05 — Prática 1.1 (Cap. 9) — O Que Precisa Ser Feito

Entramos na Prática 1 (pasta "aula_05/pratica_01_entregavel_3_passagens/"), dividida em duas missões atômicas.

Qual é a missão única desta Prática 1.1?
1. Anexar o arquivo "politica_corporativa_reembolso_v1.md";
2. Pedir para a IA reescrever a Seção 1 (que está prolixa e confusa) em linguagem executiva clara, MAS mantendo a Seção 2 (Cláusulas 2.1 a 2.5) 100% IMUTÁVEL em seus valores, prazos e numeração;
3. Gerar o Decision Brief sobre os dados da Seção 3 separando com rótulos explícitos o que é [Fato Citado da Fonte], [Achado Derivado] e [Recomendação].

---

## Slide 06 — Prática 1.1 (Cap. 9) — O Que Deveria Ter Sido Observado

O que deveria ter sido observado como resultado da Prática 1.1?

1. Camada Imutável Intacta: O texto explicativo da Seção 1 ficou claro e direto, enquanto todos os parâmetros normativos da Seção 2 (prazo de 10 dias úteis, alimentação de R$ 145,00, hotel de R$ 520,00 e alçada de 15%) permaneceram intocados.
2. Achado Derivado Reconciliado: O agente calculou corretamente que 420 pedidos × 18 min = 126 horas manuais vs. 420 × 3,5 min = 24,5 horas assistidas, gerando uma economia de 101,5 horas (-80,5%), rotulada como [Achado Derivado].
3. Incerteza Declarada: A limitação de 11% de recibos em municípios sem padrão nacional de NFS-e (que falharam no OCR em baixa luz) apareceu destacada na recomendação, exigindo manter revisão humana!

---

## Slide 07 — Prática 1.2 (Cap. 9) — O Que Precisa Ser Feito

Qual é a missão única da segunda parte da Prática 1 (Prática 1.2)?

1. Anexar o arquivo "matriz_fornecedores_incompleta.csv" (que traz 4 fornecedores de OCR: VEND-01 a VEND-04);
2. Pedir para o agente estruturar a comparação preservando células vazias como ausentes (Blank ≠ Zero na latência do VEND-03) e simulando 2 cenários de pesos (Equilíbrio Operacional vs. Compliance Máximo) para evitar falsa precisão;
3. Gerar o ranking comparativo mostrando como a escolha muda conforme o peso!

---

## Slide 08 — Prática 1.2 (Cap. 9) — O Que Deveria Ter Sido Observado

O que deveria ter sido observado na Prática 1.2?

Olhem o quadro à esquerda: no CSV original, o fornecedor VEND-03 (GovShield) está com a latência em branco porque ainda não concluiu o benchmark sul-americano.
- Se a IA convertesse vazio em 0,0 segundo, o VEND-03 pareceria instantâneo (mais rápido que os 0,9s do VEND-02) e ganharia nota máxima falsa!
- Se convertesse para nota zero, puniria o fornecedor sem evidência técnica. O correto é preservar como NULL / Não Auditado!

À direita vemos o resultado nos 2 cenários: no Cenário 1 (operação imediata equilibrada), vence o VEND-01 (DocuMind — US$ 1.850, 97,4% OCR e 1,8s); no Cenário 2 (compliance máximo LGPD 100), o VEND-03 lidera, mas fica condicionado à homologação da latência.

---

## Slide 09 — Prática 2.1 (Cap. 10) — O Que Precisa Ser Feito

Passamos agora para a Prática 2 (pasta "aula_05/pratica_02_chief_of_staff_briefing/"), também dividida em duas missões simples.

Qual é a missão única da Prática 2.1?
1. Anexar o arquivo "sinais_equipe_manha_21out.md" (com sinais das 08h30 vindos de Slack, E-mail, Calendário, Docs e Jira, sabendo que o líder só tem 2h30 livres pela manhã);
2. Pedir ao ChatGPT Work para montar o Briefing Decisório nos 7 blocos canônicos do Capítulo 10 orientados a ação — sem criar seções separadas por aplicativo ("Slack", "E-mail");
3. Exigir que qualquer conector indisponível seja declarado explicitamente como limite de confiança, sem adivinhar seu conteúdo.

---

## Slide 10 — Prática 2.1 (Cap. 10) — O Que Deveria Ter Sido Observado

O que deveria ter sido observado no Briefing Matinal da Prática 2.1?

1. Prioridade Real vs. Cargo (Urgente ≠ Importante): Nas 2h30 livres, o topo (Top Priorities) é ocupado pelo desbloqueio do firewall FW-882 e pelo prazo contratual de hoje às 17h (EM-401). Já o artigo da Harvard Business Review enviado pelo Diretor Geral (VP) como FYI vai para o Bloco 6 (Can Wait)!
2. Cruzamento de Fontes: O agente detecta a colisão de horário às 14h00 (Comitê Executivo Apollo vs. Demo de fornecedor), registra que o Estorno Internacional foi movido para a Fase 2 no Doc v3, e não ressuscita o reboot (EM-402) nem o BUG-309 que já fecharam ontem.
3. Fonte Indisponível Declarada: O conector "Tracker-Auditoria-SecOps" retornou erro HTTP 503 (token OAuth expirado), e o agente reporta essa cegueira parcial como limite de confiança!

---

## Slide 11 — Prática 2.2 (Cap. 10) — O Que Precisa Ser Feito

Qual é a missão única da Prática 2.2?

1. Na MESMA conversa (para manter as 08h30 como baseline), anexar o arquivo "atualizacao_heartbeat_10h00.md" com os 4 eventos capturados às 10h00 (H-01 a H-04);
2. Pedir para o agente aplicar o Limiar de Mudança Relevante (Meaningful-Change Threshold): manter silêncio operacional sobre o que não mudou e emitir apenas o Delta Brief para o que cruzou o limiar;
3. Pedir um pacote enxuto de Handoff para Roberto (DevSecOps) e Camila (QA), removendo informações pessoais do titular.

---

## Slide 12 — Prática 2.2 (Cap. 10) — O Que Deveria Ter Sido Observado

O que deveria ter sido observado na Prática 2.2?

À esquerda vemos o filtro do Heartbeat das 10h00:
- Suprimidos em Silêncio: H-01 (14 reações de emoji "👏" no post do VP no Slack) e H-02 (reunião das 16h inalterada) não geram interrupção!
- Disparam Interrupção Imediata: H-03 (o firewall FW-882 foi liberado, mas surgiu um prazo novo exigindo assinatura digital mTLS até as 11h30 de hoje!) e H-04 (o conector SecOps voltou a operar e revelou o incidente crítico SEC-901 em staging).

À direita vemos o filtro de privacidade no Handoff: o pacote enviado para Roberto e Camila contém apenas os dados técnicos do Projeto Apollo e barra 100% a nota pessoal privada do titular (ligar para o pediatra do Pedro às 12h30 e renegociar financiamento imobiliário)!

---

## Slide 13 — Prática 3.1 (Cap. 11) — O Que Precisa Ser Feito

Chegamos à Prática 3 (pasta "aula_05/pratica_03_dados_joins_e_dashboard/"), dividida em duas missões diretas.

Qual é a missão única da Prática 3.1?
1. Anexar o arquivo "exportacao_vendas_bruta_suja.csv" (declarando o grão aparente: 1 linha = 1 pedido fechado);
2. Pedir uma cópia limpa que remova a duplicata de row_id=3, separe a linha TOTAL do rodapé, mantenha a receita em branco da cliente Cascade como NULL (Blank ≠ Zero) e sinalize datas e regiões ambíguas;
3. Exigir uma Data-Quality Note reconciliando a soma antes e depois da limpeza.

---

## Slide 14 — Prática 3.1 (Cap. 11) — O Que Deveria Ter Sido Observado

O que deveria ter sido observado na Prática 3.1?

Olhem o quadro à esquerda — o grande achado da reconciliação:
- Somando as 5 contas que possuem receita preenchida ($1.250 + $900 + $475,50 + $1.100 + $620), chegamos exatamente aos US$ 4.345,50 da linha TOTAL!
- Porém, a 6ª conta única — CUST-103 (Cascade) — está com a receita em branco (NULL)! Logo, US$ 4.345,50 é apenas a soma parcial conhecida e jamais pode ser reportada como o faturamento completo sem essa ressalva!

À direita vemos as ambiguidades sinalizadas sem adivinhação: a data "04/05/2026" da AuroraTech (pode ser 5 de abril ou 4 de maio), a região "EMEA" da Solstice (mais ampla que Europe) e o espaço em branco em "'cust-102 '".

---

## Slide 15 — Prática 3.2 (Cap. 11) — O Que Precisa Ser Feito

Qual é a missão única da Prática 3.2?

1. Anexar o segundo arquivo da pasta: "cadastro_clientes_crm.csv";
2. Antes de fazer o merge final com a cópia limpa de vendas, pedir ao agente para rodar um Trial Join auditando se há chaves duplicadas no CRM, quanto um join ingênuo inflaria a receita e quais vendas ficam sem correspondência (Unmatched);
3. Abrir no navegador o protótipo "dashboard_privado_sites_preview.html" para inspecionar como esses números aparecem no Dashboard Privado do Sites.

---

## Slide 16 — Prática 3.2 (Cap. 11) — O Que Deveria Ter Sido Observado

O que deveria ter sido observado no Trial Join da Prática 3.2?

1. Chave Duplicada no CRM (Multiply Match): A conta CUST-105 (AuroraTech) aparece 2 vezes no arquivo do CRM (um registro ativo e um registro órfão de migração). Se fizéssemos um LEFT JOIN ingênuo sem deduplicar antes, a venda de US$ 1.100,00 seria duplicada e a receita saltaria de US$ 4.345,50 para US$ 5.445,50 (+US$ 1.100,00 de inflação artificial)!
2. Registro Sem Par (Unmatched): A conta CUST-999 (VanguardGhost, US$ 620,00 — 14,3% do total) está nas vendas, mas não existe no CRM. Um INNER JOIN silencioso esconderia 14,3% do faturamento!
3. Resultado Reconciliado no Sites: O relatório e o Dashboard Privado mostram lado a lado US$ 3.725,50 (Matched no CRM) + US$ 620,00 (Unmatched fora do CRM) = US$ 4.345,50 (com a ressalva de Cascade NULL)!

---

## Slide 17 — Cap. 9 — Pense em Entregáveis como Produtos com Propósito

Entramos agora na revisão conceitual estruturada do Capítulo 9 ("Documents, Spreadsheets, and Presentations"): Think in deliverables.

No Passo 1 ("1. Pedido de Formato - Falha"), vemos a dor real: o ChatGPT Work cria e edita documentos, planilhas, apresentações e relatórios a partir de instruções, materiais-fonte e templates. Porém, pedir apenas um tipo de arquivo ("faça um doc" ou "crie um deck") falha silenciosamente: um documento tecnicamente válido pode fracassar por hierarquia incorreta; uma planilha correta na aparência pode esconder erro em uma fórmula; um deck persuasivo pode distorcer a evidência.

No Passo 2 ("2. Entregável como Produto"), aplicamos a solução de engenharia: descrever o entregável como um produto com propósito, nomeando 5 elementos: (1) Audiência (audience), (2) Decisão (decision), (3) Conjunto de fontes (source set), (4) Formato + pedido de plano/rascunho intermediário quando o artefato for substancial, e (5) Elementos que devem permanecer inalterados (unchanged).

No Passo 3 ("3. Revisão Dupla"), estabelecemos a regra de ouro: revisar tanto o conteúdo quanto o arquivo renderizado final!

