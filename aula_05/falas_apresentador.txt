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

---

## Slide 18 — Cap. 9 — Documentos (Estrutura) e Planilhas (Lógica Inspecionável)

Avançamos no Capítulo 9 para as regras práticas de Documentos e Planilhas.

No Passo 1 ("1. Documentos: Estrutura antes do Polimento"), todo documento começa com uma arquitetura de conteúdo:
- Para um Decision Brief: Situação ➔ Evidência ➔ Opções ➔ Riscos ➔ Recomendação ➔ Próximos Passos.
- Para um Procedimento Operacional (SOP): Propósito ➔ Escopo ➔ Pré-requisitos ➔ Passos ➔ Exceções ➔ Controles ➔ Ownership.
Exija rastreabilidade (links diretos, notas de rodapé ou referências) e peça ao Work para distinguir Fatos Citados, Achados Derivados e Recomendações. Se a fonte for incerta, o documento deve declarar isso. Ao editar um documento existente, dê permissão apenas na camada desejada: pedir "melhore esta política" é perigoso; pedir "reescreva os parágrafos explicativos em linguagem simples sem alterar requisitos, definições, exceções ou numeração" cria uma edição segura!

No Passo 2 ("2. Planilhas: Lógica Inspecionável"), uma planilha é tanto um entregável quanto um pequeno modelo executável. Separe quando possível em 4 camadas/abas: Dados Brutos (Raw Data), Premissas (Assumptions), Cálculos (Calculations) e Apresentação (Outputs). Defina unidades, convenções de data, validações, reconciliações e notas que expliquem lógicas não óbvias.

No Passo 3 ("3. Falsa Precisão & Auditoria"), em comparações com score ponderado, pesos arbitrários criam falsa precisão. O Work deve preservar informações faltantes como faltantes (nunca zerar!), explicar premissas e mostrar como mudanças nos pesos afetam o resultado. Revise fórmulas de forma independente (casos de fronteira, totais, referências e amostra manual) e revise gráficos (títulos, eixos, unidades, legendas e datas). Seja gerando arquivo ou operando Excel/Google Workspace conectado, o sistema conectado e o arquivo final são o lugar para confirmar o que de fato mudou.

---

## Slide 19 — Cap. 9 — Apresentações, QA Visual e o Workflow em 3 Passagens

Fechando a teoria do Capítulo 9, chegamos ao método de Apresentações, QA Visual e ao famoso Workflow em 3 Passagens (Rubrica 3.3 do Projeto).

No Passo 1 ("1. Sequência Skill Lab"), o OpenAI Academy Presentation Skill Lab define uma apresentação forte como uma sequência de 4 estágios (nunca um pedido único de geração):
1. Investigate: reunir documentos-fonte, apresentações passadas e contexto;
2. Narrate: decidir o que a audiência deve entender, acreditar ou fazer (mensagem central, evidências, sequência e transições);
3. Generate: converter a narrativa em um Slide Plan e depois no arquivo;
4. Review: testar suporte factual, storytelling, legibilidade e execução visual.

No Passo 2 ("2. Slide Plan & Títulos de Evidência"), peça o plano de slides ANTES do deck! Cada slide planejado deve ter: Purpose, Headline, Evidence e Visual Concept. O título do slide (headline) deve comunicar o ponto/conclusão, e não apenas nomear um tópico. Além disso, diferencie Reference File (exemplo para o pedido atual) de Reusable Template (combina exemplo + instruções + saída esperada para repetição), preservando layouts, fontes, cores, logos, ordem e proporção.

No Passo 3 ("3. Workflow de 3 Passagens"), consolidamos o padrão universal para entregáveis substanciais:
- Pass 1 (Plan): confirmar audiência, fontes, números, outline, definições e critérios de aceite (aguardar aprovação!);
- Pass 2 (Build): criar o artefato preservando rastreabilidade e restrições;
- Pass 3 (Verify): inspecionar o output renderizado (hierarquia/quebras em docs; valores/fórmulas/larguras em planilhas; objetos cortados/sobrepostos, baixo contraste e excesso de texto em slides) e testar pelo uso real da audiência.

---

## Slide 20 — Simulador 1: Entregáveis em 3 Passagens (Plan ➔ Build ➔ Verify)

Aqui temos nosso primeiro Simulador Interativo da Aula 5, desenhado para vocês praticarem e copiarem diretamente a estrutura da Rubrica 3.3 do Projeto da Disciplina!

Alternem entre os 3 tipos de entregáveis no topo:
1. Apresentação Executiva de 8 Slides (a prática oficial do Capítulo 9): observem como o Pass 1 inspeciona as fontes, verifica números e propõe mensagem central, evidências, ressalvas e outline esperando aprovação; o Pass 2 constrói o deck com títulos guiados por evidência, 1 ideia por slide e speaker notes; e o Pass 3 renderiza e inspeciona cada slide contra overflow/texto cortado, reconciliando pelo menos 2 números com a planilha e testando se um colega entende a história apenas pelos títulos!
2. Documento de Decisão / SOP: com arquitetura de conteúdo e edição restrita à camada autorizada.
3. Planilha Executável: com abas separadas, preservação de células vazias e auditoria de fórmulas.

---

## Slide 21 — Cap. 10 — Produtividade, Colaboração e o Work Chief of Staff

Entramos agora no Capítulo 10 ("Productivity and Collaboration").

No Passo 1 ("1. Trabalho Fragmentado & Ambientes"), qual é a dor real? O trabalho do conhecimento nunca mora em um só lugar: uma decisão começa em uma reunião, continua no e-mail, ganha detalhe em um documento e vira compromisso em um project tracker. O objetivo do ChatGPT Work NÃO é gerar um resumo longo de tudo o que aconteceu, mas uma visão operacional compacta: o que mudou, o que importa, o que está bloqueado, quais decisões se aproximam e o que fazer a seguir. Aqui já introduzimos a distinção de ambiente: ChatGPT Work para fluxos guiados por arquivos conectados terminando em docs, planilhas, decks, relatórios ou Sites; Codex quando o projeto precisa de repositório, scripts reutilizáveis, testes, worktrees isoladas e reexecução.

No Passo 2 ("2. Mapa de Fontes - 5 Perguntas"), para construir um Work Chief of Staff, não conecte fontes apenas porque estão disponíveis! Nomeie o Mapa de Fontes onde cada conexão responde a uma pergunta conhecida:
- Mensagens: pedidos, decisões, bloqueios e compromissos informais;
- E-mail: conversas formais e externas que exigem resposta;
- Calendário: timing, reuniões, necessidades de preparo e colisões;
- Documentos: planos, definições e evidências da iniciativa;
- Trackers: trabalho atribuído, status, dependências e prazos.

No Passo 3 ("3. Baseline, Falhas & Mesma Thread"), três regras fundamentais:
1. Peça ao agente para reportar fontes indisponíveis em vez de adivinhar seu conteúdo (uma agenda ou tracker inacessível faz parte do resultado porque limita a confiança);
2. Na primeira passagem (baseline), corrija erros, marque itens resolvidos e explique regras de prioridade continuando na MESMA thread, para que checagens futuras diferenciem mudança de repetição;
3. O Chief of Staff monitora e prepara, mas não transfere autoridade para fazer promessas ou falar pelo usuário.

---

## Slide 22 — Cap. 10 — Briefing Decisório em 7 Blocos e Limiar de Mudança

Este slide é o coração técnico da Rubrica 3.4 do Projeto da Disciplina!

No Passo 1 ("1. Os 7 Blocos do Brief Decisório"), um briefing diário útil é organizado em torno de AÇÃO e compromisso, nunca separado por aplicativo ("seção de e-mail", "seção de Slack"). Ele consolida evidências nos 7 blocos:
1. Top priorities (desfechos prioritários de hoje + restrição de tempo);
2. Meaningful changes (novas decisões, mudanças de escopo, itens resolvidos);
3. Upcoming commitments (prazos, reuniões, respostas prometidas e preparo);
4. Responses required (mensagens que exigem julgamento humano com contexto);
5. Blocked or waiting (trabalho dependente de outra pessoa, informação ou evento);
6. Can wait (trabalho legítimo que não merece interrupção hoje);
7. Prepared next steps (rascunhos de resposta, briefs de reunião, checklists ou handoffs ainda não enviados!).

No Passo 2 ("2. Urgente vs. Importante & Checagem"), a diferença entre urgente e importante vem de regras explícitas: uma mensagem de alguém sênior não é automaticamente a maior prioridade — um incidente de produção, prazo contratual, compromisso com cliente ou decisão que bloqueia várias pessoas pode ser mais consequente. Além disso, inspecione sempre as respostas mais recentes antes de ressurgir um pedido antigo e não repita um item inalterado.

No Passo 3 ("3. Limiar de Mudança Relevante - Meaningful-Change Threshold"), checagens frequentes só ajudam quando reduzem o custo de atenção. Um heartbeat horário que repete a mesma lista vira ruído! Configure o agente para interromper APENAS quando houver mudança material (os 7 gatilhos na tela) e permanecer em silêncio caso contrário. E lembre-se da superfície: agendamento Browser/Cloud roda com laptop desligado; agendamento Desktop que usa arquivos/apps locais exige computador ligado e app rodando.

---

## Slide 23 — Cap. 10 — Aprovações Granulares, Delegação de Projeto e Rollout

Concluímos os tópicos do Capítulo 10 com três pilares de governança e trabalho em equipe:

No Passo 1 ("1. Preparar sem Agir - Aprovação Granular"), o Chief of Staff reduz o custo da próxima decisão preparando rascunhos, briefs de reunião e handoffs encenados (staged artifacts). Mantenha aprovações granulares: permissão para rodar um check Read-Only horário NÃO é permissão para criar outra task, editar documento, mover reunião, contatar colega ou assumir compromisso. Da mesma forma, aprovar o envio de UMA resposta revisada não autoriza respostas futuras na mesma thread!

No Passo 2 ("2. Delegação de Projeto Focada"), quando um trabalho cresce além da thread diária, crie ou continue uma task separada no app desktop passando apenas o contexto necessário (objetivo, fontes relevantes, decisões já tomadas, restrições, questões abertas, entregável e fronteiras de aprovação). NUNCA copie todo o histórico de trabalho do usuário para cada task de projeto (risco de privacidade e confusão de prioridades) e nunca crie task duplicada quando já existir uma!

No Passo 3 ("3. Colaboração, Handoff & Rollout Piloto"), um fluxo pessoal só vira fluxo de equipe quando colegas conseguem inspecionar o resultado e entender sua base (fontes, donos, datas, premissas, decisão registrada vs. recomendação do agente). Ao preparar um handoff, remova contexto pessoal não relacionado e restrinja informações ao que o destinatário tem autorização para ver. Quando o brief falhar, diagnostique a causa e atualize a camada certa (conexão, project instruction, skill, schedule ou task request). E no rollout prático: comece pequeno (1 usuário, poucas fontes, brief Read-Only, 1 período de revisão) antes de agendar ou delegar ações externas.

---

## Slide 24 — Simulador 2: Work Chief of Staff & Limiar de Mudança Relevante

No nosso segundo Simulador Interativo da aula, colocamos o Work Chief of Staff em operação real para consolidar a Rubrica 3.4!

Cliquem nos 4 sinais recebidos à esquerda:
- Sinal 1 (Bloqueio no gateway de pagamento): atinge o Limiar de Mudança Relevante (bloqueio em marco comprometido + prazo amanhã). Entra em Top Priorities e Blocked, separando fato confirmado (Jira ENG-402) da interpretação e preparando rascunho não enviado.
- Sinal 2 (E-mail FYI de um VP): aplica a regra explícita Urgente ≠ Importante. Apesar de vir de um líder sênior, não exige decisão hoje — vai para "Can Wait" e mantém silêncio no heartbeat horário.
- Sinal 3 (Pedido antigo já respondido ontem): demonstra a inspeção da última mensagem da thread. Como já foi resolvido, não é repetido como pendência.
- Sinal 4 (Conector do Tracker indisponível): aplica a regra de transparência de falhas — reporta a fonte indisponível como mudança material que limita a confiança, sem jamais adivinhar o conteúdo!

---

## Slide 25 — Cap. 11 — Fluxos de Dados: Proteger a Fonte e Limpar em Cópia

Entramos agora diretamente no Capítulo 11 ("Data Workflows: From Messy Files to Trusted Reports").

No Passo 1 ("1. Os 4 Estágios Confiáveis"), a premissa central é: comece pela decisão, não pelo gráfico! Um gráfico bonito não prova que a análise é confiável. O fluxo robusto tem 4 estágios:
1. Profile and clean (entender cada fonte e corrigir problemas sistemáticos em uma cópia);
2. Join and analyze (validar chaves, testar premissas, explorar com gráficos e usar modelo interpretável quando útil);
3. Communicate (colocar a resposta primeiro preservando cálculos, ressalvas e linhagem);
4. Maintain (atualizar de fontes aprovadas, detectar mudança material e manter compartilhamento sob aprovação).

No Passo 2 ("2. Proteger Fonte & Grão"), NUNCA comece sobrescrevendo a única cópia de uma exportação! Mantenha os dados brutos inalterados e grave resultados limpos e unidos separadamente. Para cada arquivo, registre origem, período, formato, contagem de linhas/colunas e o Grão Aparente (Apparent Grain) — o que uma linha representa (um cliente, um pedido, um saldo mensal ou um evento). Duas fontes podem ter colunas com o mesmo nome mas grãos diferentes, e uni-las ingenuamente multiplica linhas e infla medidas!

No Passo 3 ("3. Limpeza Sistemática em Cópia"), aplicamos as 6 regras explícitas em uma cópia separada: normalizar datas válidas (sinalizando ambíguas), converter moedas sem transformar vazios genuínos em zero, remover duplicatas preservando source row IDs, mapear aliases conhecidos listando não mapeados, separar linhas de resumo (TOTAL) que violam o grão, e deixar valores incertos em branco sem inventar correção. Sempre exigir uma Data-Quality Note com contagens antes e depois!

---

## Slide 26 — Cap. 11 — Validação de Joins, Exploração e Relatórios Rastreáveis

Avançamos no Capítulo 11 para os estágios mais críticos de uma análise de dados: Joins, Exploração e Empacotamento do Relatório.

No Passo 1 ("1. Validar Joins Antes de Unir"), unir fontes é um dos passos mais perigosos porque a chave pode não ser única, diferenças de formatação impedem o match ou um join N:M duplica medidas. Antes do merge final:
- Teste a unicidade em cada fonte e meça taxas de nulos;
- Normalize caixa/espaços em campo derivado (mantendo o campo original);
- Rode Trial Joins reportando registros matched, unmatched e multiply matched;
- Compare contagens de linhas e totais importantes antes e depois;
- Nunca invente identificador faltante para forçar match! E atenção: registros Unmatched pertencem à análise — quantifique sua contagem e valor e declare como o cálculo final os trata.

No Passo 2 ("2. Explorar Antes de Modelar"), gráficos são ferramentas de diagnóstico antes de serem ferramentas de comunicação. Lembre-se: Associação NÃO é Causalidade (o exemplo do livro sobre preços de imóveis perto de rodovias reflete também bairro, tamanho, época e seleção). Declare o que a análise estima, o que ela não estabelece e aplique checagens de sensibilidade (remover outlier, variar limiar, comparar regras de match e rodar com/sem registros incertos).

No Passo 3 ("3. Relatório Fundamentado - 9 Itens"), coloque a resposta primeiro e mostre as evidências para desafiá-la. Nunca esconda ressalvas (caveats) no apêndice quando elas puderem mudar a decisão! Inclua dicionário de dados, tabela curta de cálculo e escolha o artefato conforme o consumidor (Markdown/Notebook para técnicos; planilha/CSV para operações; Doc/PDF para decisores; Dashboard no Sites para perguntas recorrentes).

---

## Slide 27 — Cap. 11 — Dashboards Privados (Sites), Work vs. Codex e Checklist

Concluímos a sequência do Capítulo 11 cobrindo Dashboards Privados no Sites, a decisão entre ChatGPT Work e Codex, e o Checklist de 12 Pontos.

No Passo 1 ("1. Dashboard Privado no Sites - Rubrica 3.6"), o ChatGPT Work pode combinar planilhas/CSVs aprovados com o Sites para criar um dashboard interativo privado:
- Se nenhuma fonte for anexada ou colada (link aprovado do Drive/Sheets), o agente deve pedir a fonte em vez de adivinhar;
- Desenhe o dashboard em torno de decisões: métricas claras, evolução temporal, filtros de data/segmento, frescor da fonte (source freshness), cálculos de suporte e uma área visível de qualidade de dados;
- Mostre tanto a variação absoluta ($) quanto a variação percentual (%) quando a distinção importar, e exiba a contagem e valor de registros unmatched ao lado do resultado;
- Quem atualiza o dashboard é uma Scheduled Task do ChatGPT Work (não o Site sozinho!), com alertas materiais e silêncio quando nada importante mudar;
- Mantenha o Site privado durante a revisão: publicar, mudar visibilidade ou convidar pessoas exige mostrar a configuração atual, audiência proposta e link antes da aprovação!

No Passo 2 ("2. ChatGPT Work vs. Codex"), use ChatGPT Work quando a análise começa com arquivos de negócio e termina em doc, planilha, deck, relatório ou Site sem exigir ambiente de programação; use Codex quando a análise precisa viver como projeto técnico reprodutível (scripts reutilizáveis, dependências, testes automatizados, Git, notebooks reexecutáveis e worktrees isoladas). Os dois se complementam mantendo a fronteira visível!

No Passo 3 ("3. Checklist de Revisão de 12 Pontos"), temos a lista completa de auditoria de ponta a ponta antes de confiar em qualquer resultado de dados.

---

## Slide 28 — Simulador 3: Limpeza de Exportação Suja e Reconciliação (Cap. 11)

Nosso terceiro Simulador Interativo reproduz exatamente a prática oficial do final do Capítulo 11 ("Practice: clean and validate a messy export")!

Cliquem nas 3 abas no topo:
1. Na Aba "1. Exportação Bruta (6 linhas)", vemos o CSV original intocado: datas misturadas (MM/DD/YYYY e YYYY-MM-DD), moedas como texto ("$1,250.00"), aliases ("NA", "EU", "EMEA", "enterprise", "Mid-market"), a duplicata de row_id=3 (Cascade) com receita em branco, e a linha TOTAL colada no final.
2. Na Aba "2. Cópia Limpa (4 registros únicos)", vemos o resultado após aplicar as regras em cópia separada: 4 registros únicos, datas em ISO YYYY-MM-DD, linha TOTAL excluída da tabela de registros, receita vazia da Cascade preservada como NULL/Blank (nunca transformada em zero!) e EMEA sinalizado sem adivinhar.
3. Na Aba "3. Data-Quality Note & Reconciliação", vemos a descoberta crítica: embora a soma dos 3 registros preenchidos ($1.250 + $900 + $475,50) dê exatamente os $2.625,50 da linha TOTAL da fonte, esse total não pode ser tratado ingenuamente como o total completo porque a cliente Cascade (row_id=3) está com receita ausente!

---

## Slide 29 — Alinhamento com o Projeto da Disciplina: Rubricas 3.3, 3.4, 3.5 e 3.6

Conectamos agora diretamente tudo o que vimos nos Capítulos 9, 10 e 11 com as quatro rubricas restantes do Bloco 3 do Projeto da Disciplina:

- Rubrica 3.3 (Capítulo 9): produzir um documento, planilha ou apresentação do seu processo com arquitetura de conteúdo explícita e revisão em 3 passagens (Plan ➔ Build ➔ Verify);
- Rubrica 3.4 (Capítulo 10): configurar um mapa de fontes de equipe e estruturar um briefing decisório organizado por prioridade e ação, com limiar de mudança relevante (meaningful-change threshold);
- Rubrica 3.5 (Capítulo 11): perfilar uma fonte de dados preservando o arquivo original intacto, validar chaves de junção antes do merge e estruturar o relatório final com rastreabilidade de origem e limitações explícitas;
- Rubrica 3.6 (Capítulos 10 e 11): definir o fluxo como tarefa recorrente e agendada com dono e limite de aprovação claro, e definir o modelo de informação de um dashboard quando aplicável.

---

## Slide 30 — Quiz Interativo de Fixação — Aula 5 (Capítulos 9, 10 e 11)

Para encerrar nossa Aula 5 diretamente na prática, temos o nosso Quiz Interativo de Fixação com 5 questões cobrindo os pontos essenciais dos Capítulos 9, 10 e 11:
- Questão 1: O processo em 3 passagens (Plan, Build, Verify) e a revisão dupla (conteúdo + arquivo renderizado);
- Questão 2: A estrutura de 7 blocos do briefing decisório do Work Chief of Staff e o limiar de mudança relevante;
- Questão 3: A delegação enxuta para tasks de projeto isoladas sem copiar todo o histórico pessoal;
- Questão 4: A proteção do arquivo bruto, preservação de células vazias (blank ≠ zero), remoção de linhas TOTAL coladas e validação de joins;
- Questão 5: O funcionamento dos dashboards privados no Sites (atualizados por Scheduled Task do Work) e a escolha complementar entre ChatGPT Work e Codex.

Bons estudos e excelente trabalho na construção dos artefatos do Bloco 3 do projeto!
