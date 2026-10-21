# 📋 Prompts Prontos para Copiar e Enviar — Prática 3 (Capítulo 11 / Rubricas 3.5 e 3.6)

**Pasta:** `aula_05/pratica_03_dados_joins_e_dashboard/`  
**Arquivos utilizados:**
- `exportacao_vendas_bruta_suja.csv` (para a Prática 3.1 — Slide 13)
- `cadastro_clientes_crm.csv` e `dashboard_privado_sites_preview.html` (para a Prática 3.2 — Slide 15)

---

## 1️⃣ Prompt do Slide 13 — Prática 3.1: Limpar `exportacao_vendas_bruta_suja.csv` em Cópia Separada e Emitir *Data-Quality Note*
**O que anexar:** Anexe o arquivo `exportacao_vendas_bruta_suja.csv`.

```text
Atue como analista de fluxos de dados confiáveis do ChatGPT Work seguindo o Estágio 1 do Capítulo 11 ("Profile and Clean"). Anexei o arquivo "exportacao_vendas_bruta_suja.csv".

Sem alterar o arquivo bruto original, execute os 3 passos abaixo:

1. Perfil da Fonte e Grão da Tabela (Table Grain):
   - Informe a contagem bruta de linhas e colunas, o período coberto e o Grão Aparente da tabela (o que 1 linha representa), apontando qual linha do arquivo viola esse grão.

2. Limpeza Sistemática em Cópia Separada:
   - Apresente a tabela limpa aplicando estritamente as 6 regras do Capítulo 11:
     • Remova duplicatas exatas preservando o row_id original;
     • Separe a linha TOTAL do corpo de registros transacionais;
     • Converta "revenue" para número decimal, mas preserve células genuinamente em branco como NULL/Blank (JAMAIS converta vazio em zero!);
     • Normalize espaços nas chaves ("cust-102 " ➔ "CUST-102");
     • Padronize datas válidas para YYYY-MM-DD, mas SINALIZE datas ambíguas (como "04/05/2026" na conta AuroraTech) sem adivinhar silenciosamente;
     • Padronize aliases conhecidos ("NA" ➔ "North America", "EU" ➔ "Europe", "enterprise" ➔ "Enterprise", "Mid-market" ➔ "Mid-Market") e mantenha "EMEA" sinalizado como código amplo não mapeado.

3. Data-Quality Note & Reconciliação do Total:
   - Mostre a soma das 5 contas com receita preenchida ($1,250 + $900 + $475.50 + $1,100 + $620 = $4,345.50) e explique por que, embora esse número bata exatamente com a linha TOTAL do CSV bruto, ele é um TOTAL INCOMPLETO que não pode ser reportado sem ressalva.
```

---

## 2️⃣ Prompt do Slide 15 — Prática 3.2: Executar um *Trial Join* entre Vendas Limpas e o CRM
**O que anexar:** Na mesma conversa, anexe agora o arquivo `cadastro_clientes_crm.csv` (e abra `dashboard_privado_sites_preview.html` no navegador para conferência visual).

```text
Continuando na mesma thread, anexei a segunda fonte de dados: "cadastro_clientes_crm.csv". Antes de realizarmos o merge final com a nossa cópia limpa de vendas, execute o Protocolo de Validação de Chaves de Junção (Trial Join — Estágio 2 do Capítulo 11):

1. Auditoria de Unicidade de Chaves e Risco de Multiplicação (Multiply Matched):
   - Verifique se a chave "crm_account_id" é única no arquivo do CRM.
   - Mostre o que aconteceria com a receita da cliente CUST-105 (AuroraTech — $1,100.00) e com a receita total se fizéssemos um LEFT JOIN ingênuo sem deduplicar o CRM antes (de $4,345.50 para quanto a soma saltaria?).

2. Relatório de Trial Join (Matched vs. Unmatched):
   - Após deduplicar o registro órfão de migração do CRM e normalizar a chave "CUST-102", apresente o resumo reconciliado informando:
     • Quantas contas e quantos dólares ($) ficaram Matched no CRM ($3,725.50 + 1 conta com receita NULL);
     • Qual conta de vendas ficou Unmatched fora do CRM (CUST-999 VanguardGhost), quantos dólares ela representa ($620.00) e qual a sua fatia percentual (14,3%), explicando por que um INNER JOIN silencioso esconderia essa receita;
     • Qual conta ativa do CRM não teve vendas no período (CUST-108).

3. Governança do Dashboard Privado no Sites (Rubrica 3.6):
   - Especifique em 4 tópicos curtos o contrato da Scheduled Task semanal que atualizará nosso Dashboard Privado no Sites: (a) Dono do fluxo, (b) Gatilho de alerta material (>5% unmatched ou nova chave duplicada) vs. silêncio operacional, (c) Portão de aprovação humana antes de publicar/mudar a visibilidade privada do Site, e (d) Quando migrar este fluxo do ChatGPT Work para o Codex.
```
