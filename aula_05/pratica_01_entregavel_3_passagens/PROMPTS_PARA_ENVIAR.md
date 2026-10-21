# 📋 Prompts Prontos para Copiar e Enviar — Prática 1 (Capítulo 9 / Rubrica 3.3)

**Pasta:** `aula_05/pratica_01_entregavel_3_passagens/`  
**Arquivos utilizados:**
- `politica_corporativa_reembolso_v1.md` (para a Prática 1.1 — Slide 05)
- `matriz_fornecedores_incompleta.csv` (para a Prática 1.2 — Slide 07)

---

## 1️⃣ Prompt do Slide 05 — Prática 1.1: Reescrever a Seção 1 Mantendo as Cláusulas 2.1–2.5 Imutáveis + Decision Brief
**O que anexar:** Anexe o arquivo `politica_corporativa_reembolso_v1.md`.

```text
Anexei o arquivo "politica_corporativa_reembolso_v1.md". Preciso preparar uma versão revisada desta política e um Decision Brief executivo para o CFO e o Comitê de Compliance avaliarem os resultados do piloto de automação no Q3/2026.

Execute esta tarefa obedecendo rigorosamente às 3 regras de engenharia documental do Capítulo 9:

1. Edição Segura por Camada (Camada Imutável):
   - Reescreva a Seção 1 ("Objetivo e Escopo"), que está prolixa e informal, transformando-a em um parágrafo executivo claro e objetivo.
   - Mantenha a Seção 2 ("Regras e Tetos Normativos" — Cláusulas 2.1 a 2.5) 100% IMUTÁVEL. É estritamente proibido alterar qualquer valor monetário (R$ 145,00 e R$ 520,00), prazo (10 dias úteis), percentual de alçada (15%), vedações ou numeração de cláusulas.

2. Arquitetura de Decision Brief com Distinção Epistemológica:
   - Com base nos dados da Seção 3, estruture um Decision Brief nas 6 seções canônicas: Situação ➔ Evidência ➔ Opções ➔ Riscos ➔ Recomendação ➔ Próximos Passos.
   - Rotule explicitamente cada afirmação como [Fato Citado da Fonte], [Achado Derivado / Cálculo] (reconciliando matematicamente o total de horas economizadas no Q3) ou [Recomendação].

3. Transparência de Limitações:
   - Destaque de forma visível na Recomendação a limitação observada nos municípios sem padrão nacional de NFS-e (11% da amostra), explicando por que não devemos prometer 100% de automação sem revisão humana.
```

---

## 2️⃣ Prompt do Slide 07 — Prática 1.2: Comparar os 4 Fornecedores de OCR Sem Zerar Célula Vazia (`Blank ≠ Zero`)
**O que anexar:** Anexe o arquivo `matriz_fornecedores_incompleta.csv`.

```text
Anexei o arquivo "matriz_fornecedores_incompleta.csv" com os dados de 4 fornecedores de OCR (VEND-01 a VEND-04) candidatos a automatizar nossa triagem de notas fiscais no Q4/2026.

Construa um modelo comparativo inspecionável seguindo rigorosamente as boas práticas de planilhas do Capítulo 9:

1. Tratamento de Dados Ausentes (Regra Blank ≠ Zero):
   - Inspecione a linha do fornecedor VEND-03 (GovShield OCR Pro) e observe que a coluna "latencia_media_seg" está em branco.
   - Explique explicitamente o que aconteceria de errado se convertêssemos essa célula vazia em zero (0,0s de latência pareceria instantâneo, ou nota 0 puniria sem evidência) e preserve o valor como NULL / Não Auditado.

2. Combate à Falsa Precisão (Análise de Sensibilidade em 2 Cenários de Pesos):
   - Separe a apresentação em 4 blocos claros: (a) Dados Brutos, (b) Premissas e Pesos, (c) Cálculos e (d) Tabela de Ranking Final.
   - Compare o ranking sob 2 cenários distintos de pesos:
     • Cenário 1 (Equilíbrio Operacional Imediato): priorizando custo mensal, velocidade já comprovada e precisão;
     • Cenário 2 (Rigor Máximo de Compliance e Precisão): priorizando score LGPD e acurácia de OCR.
   - Indique qual fornecedor vence em cada cenário e qual condição obrigatória deve ser exigida antes de assinar com o VEND-03.
```
