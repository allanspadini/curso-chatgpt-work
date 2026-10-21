# 📊 Guia da Prática 03 (Capítulo 11 — Rubricas 3.5 e 3.6): Limpeza de Dados em Cópia, Validação de Joins (*Trial Joins*) e Dashboard Privado no Sites

**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet — Pós-Graduação em IA e Engenharia de Software  
**Professor:** Prof. Dr. Allan Segovia-Spadini  
**Base Bibliográfica:** Capítulo 11 — *Data Workflows: From Messy Files to Trusted Reports* (`11-data-workflows.md`)  
**Rubricas Atendidas:**
- **Rubrica 3.5:** *"O aluno perfilou uma fonte de dados preservando o original, validou chaves de junção e estruturou um relatório com rastreabilidade e limitações?"*
- **Rubrica 3.6 (Parte 2):** *"O aluno definiu o fluxo como tarefa recorrente e agendada com dono e aprovação, e definiu o modelo de informação de um dashboard quando aplicável?"*

---

## 📤 Quais Saídas Exigir dos Alunos (O Que Cobrar da Turma)

> **Instrução para o Professor:**  
> Ao lançar os desafios de dados do Capítulo 11, não forneça o script nem o prompt pronto. O objetivo pedagógico é que o aluno aprenda a comandar o agente para limpar e validar fontes sem gerar alucinação nem corrupção de dados.  
> **Você deve cobrar deles exclusivamente as seguintes SAÍDAS FINAIS:**

### 🔹 Saída da Prática 3.1 (Slide 16 — Limpeza em Cópia e Data-Quality Note):
Exija que o aluno apresente um documento (ou relatório analítico formatado) contendo **três saídas obrigatórias**:

1. **A Declaração do Grão da Tabela (*Table Grain*):**
   - Definição explícita de que o Grão Aparente da fonte é: `1 linha = 1 pedido fechado (transação única)`;
   - Identificação de que a linha `TOTAL` no rodapé do CSV bruto **viola o grão transacional** e deve ser extraída do corpo de dados.

2. **A Tabela de Vendas Limpa em Cópia Separada:**
   - Com a duplicata exata de `row_id=3` removida;
   - Sem a linha de `TOTAL` colada na tabela;
   - Com o valor de `revenue` da cliente `Cascade` preservado estritamente como **`NULL / Blank`** (**`Blank ≠ Zero`**, proibido colocar $0,00);
   - Espaços da chave normalizados (`"cust-102 "` ➔ `"CUST-102"`);
   - A data `04/05/2026` apontada e sinalizada como ambígua (pode ser 4 de maio ou 5 de abril);
   - O código de região `EMEA` mantido e sinalizado como não mapeado.

3. **A *Data-Quality Note* Reconciliando o Paradoxo do TOTAL:**
   - Demonstração matemática de que a soma das 5 linhas válidas (`$1.250,00 + $900,00 + $475,50 + $1.100,00 + $620,00`) totaliza exatamente os **`$4.345,50`** da linha `TOTAL` da fonte bruta;
   - **O Ponto Crítico:** Explicação técnica de por que esse valor é um **TOTAL INCOMPLETO** (pois a 6ª conta única — Cascade — teve receita não informada / NULL) e jamais pode ser apresentado à diretoria sem ressalva.

🔍 **Como o Professor Audita a Saída da Prática 3.1 (Checklist Rápido):**
- [ ] O CSV bruto original foi mantido 100% intacto?
- [ ] A receita da Cascade está como `NULL` (e não como zero)?
- [ ] O paradoxo da linha TOTAL ($4.345,50 como soma incompleta) foi explicado com clareza?

---

### 🔹 Saída da Prática 3.2 (Slide 18 — Trial Join com CRM e Governança do Sites):
Exija que o aluno apresente o relatório de validação cruzada contendo **duas saídas obrigatórias**:

1. **O Relatório de Trial Join Reconciliado (Vendas ⋈ CRM):**
   - **Diagnóstico da Chave Duplicada no CRM:** Demonstração de que `CUST-105 (AuroraTech)` aparece 2 vezes no CRM, o que causaria uma relação `1:2` e **inflaria artificialmente o faturamento em +$1.100,00** (a receita saltaria incorretamente de `$4.345,50` para `$5.445,50`);
   - **Quantificação de Matched e Unmatched:**
     • Contas *Matched* no CRM: `$3.725,50` (+ 1 conta com receita `NULL`);
     • Conta *Unmatched* nas vendas: `CUST-999 (VanguardGhost)` representando **`$620,00` (14,3% da receita total)**, explicando que um `INNER JOIN` ingênuo apagaria 14% do faturamento da empresa;
     • Conta do CRM sem vendas: `CUST-108`.

2. **O Contrato de Governança da Scheduled Task (Dashboard no Sites — Rubrica 3.6):**
   - Especificação em 4 tópicos: (a) Dono da rotina, (b) Gatilho de alerta material (>5% unmatched ou nova chave duplicada) vs. silêncio operacional semanal, (c) Portão de aprovação humana antes de alterar visibilidade do Site, e (d) Critério de transição de Work para Codex.

🔍 **Como o Professor Audita a Saída da Prática 3.2 (Checklist Rápido):**
- [ ] O aluno calculou a inflação de `+$1.100,00` pela duplicata do CRM?
- [ ] O valor de `$620,00` (14,3%) do cliente sem cadastro no CRM foi destacado?
- [ ] A tarefa agendada possui critérios claros de silêncio vs. alerta material?

---

## 🤖 O Que Passar Para a IA (Para o Professor Entender a Prática)

Para você, professor, entender a mecânica da prática e orientar alunos que tenham dúvidas, estes são os prompts de referência utilizados nos bastidores:

### Prompt de Referência — Prática 3.1 (Slide 16):
```text
Atue como analista de fluxos de dados confiáveis do ChatGPT Work seguindo o Estágio 1 do Capítulo 11 ("Profile and Clean"). Anexei o arquivo "exportacao_vendas_bruta_suja.csv".

Sem alterar o arquivo bruto original, execute os 3 passos abaixo:
1. Perfil da Fonte e Grão da Tabela (Table Grain): Informe a contagem bruta de linhas e colunas, o período coberto e o Grão Aparente da tabela (o que 1 linha representa), apontando qual linha viola esse grão.
2. Limpeza Sistemática em Cópia Separada: Apresente a tabela limpa aplicando as 6 regras: remova duplicatas exatas mantendo row_id; separe o TOTAL; converta revenue para número mantendo vazios como NULL (Blank ≠ Zero!); normalize espaços ("cust-102 "); aponte datas ambíguas ("04/05/2026"); normalize aliases e mantenha "EMEA" sinalizado sem adivinhar.
3. Data-Quality Note & Reconciliação: Mostre a soma das 5 contas com receita ($4,345.50) e explique por que, embora bata com a linha TOTAL, trata-se de um TOTAL INCOMPLETO.
```

### Prompt de Referência — Prática 3.2 (Slide 18):
```text
Continuando na mesma thread, anexei a segunda fonte: "cadastro_clientes_crm.csv". Antes de realizarmos o merge final com a nossa cópia limpa de vendas, execute o Protocolo de Validação de Chaves de Junção (Trial Join — Estágio 2 do Capítulo 11):
1. Auditoria de Unicidade e Risco de Multiplicação: Verifique se a chave crm_account_id é única. Mostre o que aconteceria com a receita da cliente CUST-105 ($1,100.00) e com a receita total se fizéssemos um LEFT JOIN direto sem deduplicar o CRM antes (de $4,345.50 para quanto saltaria?).
2. Relatório de Trial Join (Matched vs. Unmatched): Apresente o resumo informando contas/dólares Matched ($3,725.50 + 1 NULL), a conta Unmatched fora do CRM (CUST-999 VanguardGhost com $620.00 e 14,3%) e a conta do CRM sem vendas (CUST-108).
3. Governança do Dashboard no Sites: Especifique o contrato da Scheduled Task semanal (Dono, Gatilho material vs. silêncio, Portão de aprovação antes de alterar visibilidade, e momento de migrar para o Codex).
```

---

## 🎯 1. Objetivo e Boas Práticas Trabalhadas

No **Capítulo 11**, aprendemos que um gráfico bonito jamais prova que uma análise de dados é confiável. Sobrescrever a exportação original destrói a evidência bruta, converter células em branco para zero distorce médias, esquecer uma linha `TOTAL` no meio da tabela duplica somas, e fazer um `JOIN` sem testar unicidade multiplica linhas e infla receitas silenciosamente.

Esta prática exercita as **6 grandes boas práticas do Capítulo 11**:
1. **Proteger a Fonte Original & Identificar o Grão Aparente (*Apparent Grain*):** Manter `exportacao_vendas_bruta_suja.csv` e `cadastro_clientes_crm.csv` 100% intocados e declarar o que cada linha representa antes de qualquer cálculo.
2. **Limpeza Sistemática em Cópia Separada + *Data-Quality Note*:**
   - Normalizar datas válidas para ISO `YYYY-MM-DD`, mas **sinalizar datas ambíguas (`04/05/2026` — 4 de maio ou 5 de abril?) sem adivinhar**;
   - Converter moedas de texto (`"$1,250.00"`) para número, mantendo **células vazias como `NULL/Blank` (`Blank ≠ Zero` na cliente `Cascade`)**;
   - Remover a duplicata exata de `row_id=3` preservando a rastreabilidade;
   - Padronizar aliases (`"NA"` ➔ `"North America"`, `"EU"` ➔ `"Europe"`, `"enterprise"` ➔ `"Enterprise"`) e **sinalizar `"EMEA"` sem forçar mapeamento incerto**;
   - Separar a linha `TOTAL` do corpo da tabela e reconciliar os valores.
3. **Protocolo de Validação de Chaves de Junção (*Trial Joins*):**
   - Detectar diferenças de formatação na chave (`"cust-102 "` com letras minúsculas e espaço no final vs. `"CUST-102"`);
   - Detectar a **chave duplicada no CRM (`CUST-105` aparece 2 vezes!)** que causaria um join `1:2` e inflaria a receita da AuroraTech em `+$1,100.00`;
   - Quantificar os registros **`Unmatched`** (`CUST-999 VanguardGhost` = `$620.00` na tabela de vendas sem par no CRM, e `CUST-108` no CRM sem vendas).
4. **Exploração Diagnóstica e `Associação ≠ Causalidade`:** Declarar o que os dados permitem estimar e realizar análise de sensibilidade (com/sem registros incertos).
5. **Modelo de Informação de Dashboard Privado no Sites e Decisão `ChatGPT Work vs. Codex`:** Inspecionar o protótipo `dashboard_privado_sites_preview.html` no navegador e especificar a tarefa agendada de manutenção.

---

## 📁 2. Arquivos Disponíveis Nesta Pasta

| Arquivo | Descrição |
| :--- | :--- |
| `exportacao_vendas_bruta_suja.csv` | Exportação bruta de vendas contendo 8 linhas (6 transações únicas, 1 duplicata de `row_id=3`, 1 célula de receita vazia, datas mistas/ambíguas, aliases de região e 1 linha `TOTAL` colada no rodapé). |
| `cadastro_clientes_crm.csv` | Base do CRM para praticar *Trial Joins*, contendo chave duplicada de migração (`CUST-105`) e ausência da conta `CUST-999`. |
| `dashboard_privado_sites_preview.html` | Protótipo interativo para abrir no navegador mostrando a arquitetura exata de um **Dashboard Privado no Sites** com *Source Freshness*, *Unmatched Card* e *Data-Quality Note*. |

---

## 🚀 3. Roteiro Prático em 3 Etapas (Copie e Execute no ChatGPT Work)

### 🔹 ETAPA 1: Perfilamento da Fonte (*Profile*) e Limpeza em Cópia com *Data-Quality Note*

Anexe o arquivo **`exportacao_vendas_bruta_suja.csv`** no ChatGPT Work e envie o prompt abaixo:

> **Prompt da Etapa 1 (Profile & Clean em Cópia Separada — Capítulo 11):**  
> *"Atue como engenheiro de fluxos de dados do ChatGPT Work seguindo rigorosamente o Estágio 1 do Capítulo 11 (**Profile and Clean**). Anexei o arquivo `exportacao_vendas_bruta_suja.csv`.*  
>  
> *1. **Perfil da Fonte Bruta (Sem alterar o original):** Declare a contagem bruta de linhas e colunas, o período coberto e o **Grão Aparente (Apparent Grain)** da tabela, apontando qual linha viola esse grão.*  
> *2. **Tabela Limpa em Cópia Separada:** Gere a tabela limpa aplicando estritamente estas regras:*  
>    *- Remova duplicatas exatas preservando o `row_id` original;*  
>    *- Separe a linha `TOTAL` dos registros transacionais;*  
>    *- Converta `revenue` para numérico decimal, mas **preserve valores ausentes como `NULL/Blank` (jamais converta vazio em zero!)**;*  
>    *- Padronize `close_date` para `YYYY-MM-DD`, mas **sinalize qualquer data ambígua (como `04/05/2026` quando comparada a `03/02/2026`) sem adivinhar silenciosamente**;*  
>    *- Padronize `region` (`NA` ➔ `North America`, `EU` ➔ `Europe`) e `segment` (`enterprise` ➔ `Enterprise`, `Mid-market` ➔ `Mid-Market`), mas **mantenha `EMEA` sinalizado como código amplo não mapeado**.*  
> *3. **Data-Quality Note & Reconciliação:** Explique por que, embora a soma das 5 linhas com receita preenchida (`$1,250 + $900 + $475.50 + $1,100 + $620 = $4,345.50`) coincida exatamente com a linha `TOTAL` da exportação, esse valor não pode ser apresentado como o faturamento completo do período sem ressalva."*

---

### 🔹 ETAPA 2: Protocolo de Validação de Chaves de Junção (*Trial Joins*) antes do Merge

Na mesma thread, anexe agora o segundo arquivo **`cadastro_clientes_crm.csv`** e execute o protocolo de *Trial Join*:

> **Prompt da Etapa 2 (Validação de Chaves e Trial Join — Vendas ⋈ CRM):**  
> *"Anexei agora a segunda fonte: `cadastro_clientes_crm.csv`. Antes de realizar a junção final com a nossa cópia limpa de vendas, execute o **Protocolo de Validação de Joins (Estágio 2 do Capítulo 11)**:*  
> *1. **Auditoria de Unicidade e Formatação de Chaves:** Teste se `customer_id` (em Vendas) e `crm_account_id` (no CRM) são únicos e aponte problemas de caixa/espaços em branco (ex.: `'cust-102 '`) e chaves duplicadas (ex.: `CUST-105`).*  
> *2. **Simulação do Erro de Join Ingênuo (Multiply Matched):** Mostre matematicamente o que aconteceria com a soma da receita se fizéssemos um `LEFT JOIN` direto sem deduplicar o `CUST-105` no CRM (de `$4,345.50` para quanto a receita seria inflada?).*  
> *3. **Relatório de Trial Join (Matched vs. Unmatched):** Após normalizar a chave em uma coluna derivada e tratar a duplicata do CRM, apresente a tabela reconciliada informando:*  
>    *- Quantos registros e quantos dólares ($) ficaram **Matched**;*  
>    *- Quantos registros e quantos dólares ($) da tabela de vendas ficaram **Unmatched** (`CUST-999 VanguardGhost`), mantendo esse valor visível na conclusão;*  
>    *- Quantos registros do CRM não tiveram vendas no período (`CUST-108`)."*

---

### 🔹 ETAPA 3: Relatório Fundamentado, Dashboard Privado no Sites e Fronteira Work vs. Codex

Abra também no seu navegador o arquivo **`dashboard_privado_sites_preview.html`** para visualizar o resultado final e envie o último prompt:

> **Prompt da Etapa 3 (Empacotamento do Relatório, Dashboard no Sites e Governança Recorrente — Rubricas 3.5 e 3.6):**  
> *"Para fecharmos os Estágios 3 (**Communicate**) e 4 (**Maintain**) do Capítulo 11:*  
> *1. **Relatório com Resposta Primeiro e Análise de Sensibilidade:** Escreva o sumário executivo colocando a conclusão principal no primeiro parágrafo, mostrando a receita total sob dois cenários (Cenário 1: Apenas clientes Matched no CRM = `$3,725.50` vs. Cenário 2: Incluindo Unmatched `CUST-999` = `$4,345.50` + ressalva da receita `NULL` de `Cascade`). Explique também por que observar maior nota de onboarding (`onboarding_score`) nos clientes `Platinum` representa uma **associação observacional e não prova causalidade**.*  
> *2. **Especificação do Dashboard Privado no Sites e Agendamento (Rubrica 3.6):** Defina o contrato da **Scheduled Task** semanal no ChatGPT Work que atualizará este dashboard (Dono, Frequência, Gatilhos de Alerta Material vs. Silêncio, e o Portão de Aprovação Humana antes de alterar a visibilidade privada do Site).*  
> *3. **Decisão Arquitetural ChatGPT Work vs. Codex:** Justifique em 1 parágrafo por que este fluxo inicial de exploração e dashboard executivo roda no **ChatGPT Work**, e em que momento exato deveríamos migrar o pipeline de limpeza para um repositório versionado com testes automatizados no **Codex**."*

---

## 🏆 4. Evidências para as Rubricas 3.5 e 3.6 do Projeto da Disciplina
Ao concluir esta prática, você terá todos os elementos exigidos nas duas rubricas finais do Bloco 3:
- **Rubrica 3.5:** Preservação do CSV bruto intacto, definição do grão da tabela, limpeza em cópia separada (`Blank ≠ Zero`), protocolo de *Trial Join* quantificando *Matched / Multiply Matched / Unmatched* e relatório com limitações visíveis;
- **Rubrica 3.6:** Modelo de informação do Dashboard Privado no Sites + especificação completa da tarefa recorrente agendada com dono, limiar de alerta e portão de aprovação de compartilhamento.
