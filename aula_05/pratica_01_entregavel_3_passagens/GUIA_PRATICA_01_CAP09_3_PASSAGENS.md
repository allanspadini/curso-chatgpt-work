# 📄 Guia da Prática 01 (Capítulo 9 — Rubrica 3.3): Entregáveis como Produtos e o Workflow em 3 Passagens (`Plan ➔ Build ➔ Verify`)

**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet — Pós-Graduação em IA e Engenharia de Software  
**Professor:** Prof. Dr. Allan Segovia-Spadini  
**Base Bibliográfica:** Capítulo 9 — *Documents, Spreadsheets, and Presentations* (`09-documents-spreadsheets-and-presentations.md`)  
**Rubrica Atendida:** **Rubrica 3.3** (*"O aluno produziu um documento com arquitetura de conteúdo e revisão em três passagens?"*)

---

## 📤 Quais Saídas Exigir dos Alunos (O Que Cobrar da Turma)

> **Instrução para o Professor:**  
> Não forneça aos alunos os prompts prontos nem o passo a passo de como interagir com o agente. Os alunos precisam desenvolver a competência de arquitetar a instrução por conta própria.  
> **Você deve cobrar deles exclusivamente as seguintes SAÍDAS FINAIS:**

### 🔹 Saída da Prática 1.1 (Slide 06 — Edição Segura e Decision Brief):
Exija que o aluno apresente um documento (ou resposta formatada em Markdown) contendo **duas saídas obrigatórias**:

1. **A Política de Reembolso Revisada:**
   - **Seção 1 ("Objetivo e Escopo"):** Redigida em tom executivo, claro e conciso (eliminando a linguagem informal e prolixa do texto original);
   - **Seção 2 ("Regras e Tetos Normativos" — Cláusulas 2.1 a 2.5):** Rigorosamente **idêntica ao texto original** (sem alterar valores como `R$ 145,00` e `R$ 520,00`, prazos como `10 dias úteis`, alçadas de `15%`, nem a numeração das cláusulas).

2. **O Decision Brief Executivo em 6 Seções Canônicas:**
   - Estruturado em: `Situação ➔ Evidência ➔ Opções ➔ Riscos ➔ Recomendação ➔ Próximos Passos`;
   - Com **rótulos epistemológicos explícitos** em cada afirmação: `[Fato Citado da Fonte]`, `[Achado Derivado / Cálculo]` e `[Recomendação]`.

🔍 **Como o Professor Audita a Saída da Prática 1.1 (Checklist Rápido):**
- [ ] As Cláusulas 2.1 a 2.5 continuam 100% inalteradas na política?
- [ ] Na seção de *Evidência*, há o cálculo formal demonstrando que o piloto reduziu o tempo de 126 horas para 24,5 horas, gerando **economia de 101,5 horas (-80,5%)**, com o rótulo `[Achado Derivado]`?
- [ ] Na *Recomendação*, a limitação dos **11% de notas em municípios sem NFS-e padrão** está explicitamente sinalizada para impedir promessas falsas de 100% de automação?

---

### 🔹 Saída da Prática 1.2 (Slide 08 — Matriz de Fornecedores sem Falsa Precisão):
Exija que o aluno apresente um modelo comparativo de tomada de decisão contendo **duas saídas obrigatórias**:

1. **A Tabela Comparativa Estruturada em 4 Camadas:**
   - *Camada 1: Dados Brutos* (resumo dos 4 fornecedores);
   - *Camada 2: Premissas e Pesos* (definindo pesos distintos para cada cenário);
   - *Camada 3: Cálculos Intermediários*;
   - *Camada 4: Ranking Final*.

2. **O Resultado nos 2 Cenários de Pesos + Parecer de Contratação:**
   - **Cenário 1 (Equilíbrio Operacional Imediato):** Comprovação de que vence o fornecedor `VEND-01 (DocuMind OCR)` (melhor balanço entre custo de $1.850, velocidade de 1,8s e precisão de 97,4%);
   - **Cenário 2 (Rigor Máximo de Compliance LGPD):** Comprovação de que lidera o fornecedor `VEND-03 (GovShield OCR Pro)` (score LGPD 100 e 98,2% acurácia);
   - **Parecer de Risco do `VEND-03`:** Ressalva mandatória de que o `VEND-03` só pode ser contratado **após** a realização de prova de conceito que homologue sua latência média no Brasil.

🔍 **Como o Professor Audita a Saída da Prática 1.2 (Checklist Rápido):**
- [ ] **A regra `Blank ≠ Zero` foi respeitada?** A latência do `VEND-03` está exibida como `NULL / Não Auditado`? *(Se o agente do aluno preencheu `0,0 segundos`, a IA deu nota máxima de velocidade indevidamente; se colocou nota zero, puniu sem teste — ambas as respostas estão erradas!)*.
- [ ] O modelo demonstra claramente a alteração no ranking entre o Cenário 1 e o Cenário 2?

---

## 🤖 O Que Passar Para a IA (Para o Professor Entender a Prática)

Para você, professor, entender a mecânica da prática e orientar alunos que tenham dúvidas, estes são os prompts de referência utilizados nos bastidores:

### Prompt de Referência — Prática 1.1 (Slide 06):
```text
Anexei o arquivo "politica_corporativa_reembolso_v1.md". Preciso preparar uma versão revisada desta política e um Decision Brief executivo para o CFO e o Comitê de Compliance avaliarem os resultados do piloto de automação no Q3/2026.

Execute esta tarefa obedecendo rigorosamente às 3 regras de engenharia documental do Capítulo 9:
1. Edição Segura por Camada (Camada Imutável): Reescreva a Seção 1 ("Objetivo e Escopo") em tom executivo claro. Mantenha a Seção 2 ("Regras e Tetos Normativos" — Cláusulas 2.1 a 2.5) 100% IMUTÁVEL (valores, prazos, alçadas e numeração intocados).
2. Arquitetura de Decision Brief com Distinção Epistemológica: Com base na Seção 3, monte o Decision Brief nas 6 seções canônicas (Situação ➔ Evidência ➔ Opções ➔ Riscos ➔ Recomendação ➔ Próximos Passos), rotulando cada ponto como [Fato Citado da Fonte], [Achado Derivado / Cálculo] (reconciliando matematicamente as horas economizadas) ou [Recomendação].
3. Transparência de Limitações: Destaque na Recomendação a falha observada nos 11% de recibos em municípios sem NFS-e padrão, justificando a retenção de triagem humana.
```

### Prompt de Referência — Prática 1.2 (Slide 08):
```text
Anexei o arquivo "matriz_fornecedores_incompleta.csv" com os dados de 4 fornecedores de OCR (VEND-01 a VEND-04) candidatos a automatizar nossa triagem de notas fiscais no Q4/2026.

Construa um modelo comparativo inspecionável seguindo rigorosamente as boas práticas de planilhas do Capítulo 9:
1. Tratamento de Dados Ausentes (Regra Blank ≠ Zero): Observe que o VEND-03 está com "latencia_media_seg" em branco. Explique o erro de converter vazio em zero e preserve o valor como NULL / Não Auditado.
2. Combate à Falsa Precisão (Análise de Sensibilidade em 2 Cenários): Separe em 4 blocos (Dados Brutos, Premissas/Pesos, Cálculos e Ranking). Compare o ranking sob o Cenário 1 (Equilíbrio Operacional Imediato) e Cenário 2 (Rigor Máximo de Compliance e Precisão), apontando o vencedor de cada um e a condição para contratar o VEND-03.
```

---

## 🎯 1. Objetivo e Boas Práticas Trabalhadas

No **Capítulo 9**, aprendemos que pedir ao ChatGPT Work apenas *"faça um documento"*, *"crie uma planilha"* ou *"gere uma apresentação"* produz arquivos tecnicamente válidos na superfície, mas frágeis na prática corporativa.

Esta prática exercita as **5 grandes boas práticas do Capítulo 9**:
1. **Especificar o Entregável como um Produto com Propósito (5 Elementos):** Definir explicitamente *(1) Audiência*, *(2) Decisão a ser tomada*, *(3) Conjunto de Fontes*, *(4) Formato e pedido de plano intermediário* e *(5) Camada Imutável (o que não pode mudar)*.
2. **Edição Segura de Documentos e Arquitetura de Conteúdo:** Reescrever parágrafos explicativos mantendo intocadas as cláusulas normativas (`Cláusulas 2.1 a 2.5`) e estruturar um **Decision Brief** (`Situação ➔ Evidência ➔ Opções ➔ Riscos ➔ Recomendação ➔ Próximos Passos`) separando **Fatos Citados**, **Achados Derivados** e **Recomendações**.
3. **Planilhas como Modelos Executáveis Inspecionáveis (4 Camadas + Combate à Falsa Precisão):** Organizar em *Dados Brutos*, *Premissas*, *Cálculos* e *Outputs*; preservar células vazias como ausentes (**`Blank ≠ Zero`** no fornecedor `VEND-03`) e demonstrar como a mudança de pesos altera o ranking.
4. **Apresentações Guiadas por Evidência (Sequência Skill Lab):** *Investigate ➔ Narrate ➔ Generate ➔ Review*, exigindo um **Slide Plan** onde cada título (*Headline*) comunica uma conclusão amparada por números.
5. **O Workflow em 3 Passagens (`Pass 1: Plan ➔ Pass 2: Build ➔ Pass 3: Verify`) com Dupla Inspeção:** Aprovar o plano antes da construção e auditar tanto a lógica/números quanto o arquivo final renderizado.

---

## 📁 2. Arquivos Disponíveis Nesta Pasta

| Arquivo | Descrição |
| :--- | :--- |
| `politica_corporativa_reembolso_v1.md` | Documento contendo uma seção explicativa prolixa (autorizada para reescrita), **5 cláusulas normativas imutáveis** (`Cláusulas 2.1 a 2.5`) e os dados reais do piloto do Q3/2026 (incluindo limitações de OCR em 11% dos municípios). |
| `matriz_fornecedores_incompleta.csv` | Base comparativa de 4 fornecedores de OCR (`VEND-01` a `VEND-04`), onde o `VEND-03 (GovShield OCR Pro)` possui a **célula de latência genuinamente em branco** para testar a regra `Blank ≠ Zero` e a análise de sensibilidade de pesos. |

---

## 🚀 3. Roteiro Prático em 3 Passagens (Copie e Execute no ChatGPT Work)

Anexe os arquivos **`politica_corporativa_reembolso_v1.md`** e **`matriz_fornecedores_incompleta.csv`** no ChatGPT Work e execute uma passagem por vez.

### 🔹 PASSAGEM 1: `Pass 1 — Plan` (Planejamento e Alinhamento sem Gerar o Arquivo Final)

> **Prompt da Passagem 1 (Plan):**  
> *"Vamos trabalhar no padrão de 3 Passagens do Capítulo 9 (**Pass 1: Plan ➔ Pass 2: Build ➔ Pass 3: Verify**). Anexei os arquivos `politica_corporativa_reembolso_v1.md` e `matriz_fornecedores_incompleta.csv`.*  
> *Preciso preparar um **Decision Brief Executivo** (e um **Slide Plan de 6 slides**) para o **Comitê Financeiro e de Compliance (CFO e Diretores)** decidir qual fornecedor de OCR contratar para automatizar a triagem da Política `POL-FIN-014` no Q4/2026.*  
>  
> *Nesta **Passagem 1 (Plan)**, NÃO gere o documento final ainda. Entregue apenas para minha aprovação:*  
> *1. **Confirmação de Fontes e Números-Chave:** Liste os números exatos extraídos das duas fontes e aponte qualquer dado faltante ou limitação encontrada (especialmente no `VEND-03` e nos 11% de municípios sem NFS-e).*  
> *2. **Proposta de Arquitetura do Decision Brief:** Apresente o outline nas 6 seções canônicas (`Situação ➔ Evidência ➔ Opções ➔ Riscos ➔ Recomendação ➔ Próximos Passos`).*  
> *3. **Plano de Comparação Quantitativa sem Falsa Precisão:** Explique como você calculará o score dos 4 fornecedores sem transformar a latência vazia do `VEND-03` em zero, e proponha 2 cenários de pesos (Cenário A: Foco em Custo/Velocidade vs. Cenário B: Foco em Compliance/Precisão).*  
> *4. **Slide Plan (Tabela de 6 Slides):** Para cada slide, mostre `Propósito`, `Headline (título conclusivo guiado por evidência)`, `Evidência Numérica` e `Conceito Visual`.*  
> *PARE ao final e aguarde minha aprovação antes de ir para a Passagem 2."*

**O que observar no `Pass 1`:**
- O agente identificou que `VEND-03` tem `latencia_media_seg` em branco e que transformá-lo em `0` distorceria a média ou daria nota máxima indevida de velocidade?
- Os títulos propostos no *Slide Plan* são conclusões completas (ex.: *"Triagem agêntica reduziu o tempo operacional em 80,5% no Q3, economizando 101,5 horas humanas"*) em vez de títulos vagos como *"Resultados do Piloto"*?

---

### 🔹 PASSAGEM 2: `Pass 2 — Build` (Construção Governada com Camada Imutável)

Após revisar e aprovar o plano na mesma thread, envie o comando da segunda passagem:

> **Prompt da Passagem 2 (Build):**  
> *"Plano aprovado! Agora execute a **Passagem 2 (Build)** gerando o documento completo do **Decision Brief + Anexo Normativo Atualizado** e a tabela executável de comparação, obedecendo estritamente às seguintes restrições de governança:*  
> *1. **Edição Segura de Camada:** Reescreva a Seção 1 (`Objetivo e Escopo`) da política em linguagem executiva clara e concisa, mas mantenha a **Seção 2 (`Cláusulas 2.1 a 2.5`) 100% inalterada** em seus valores (`R$ 145,00`, `R$ 520,00`, `10 dias úteis`, `15%`), exceções e numeração.*  
> *2. **Distinção Epistemológica Explícita:** No corpo do Decision Brief, rotule claramente o que é **[Fato Citado da Fonte]**, o que é **[Achado Derivado / Cálculo]** e o que é **[Recomendação do Agente]**.*  
> *3. **Modelo de Planilha em 4 Camadas:** Estruture a análise dos fornecedores separando visualmente: (a) Dados Brutos, (b) Premissas e Pesos dos 2 Cenários, (c) Cálculos com tratamento explícito do `NULL` em `VEND-03`, e (d) Tabela de Saída/Ranking."*

---

### 🔹 PASSAGEM 3: `Pass 3 — Verify` (Auditoria Independente e QA Visual/Numérico)

Com o artefato construído, execute a terceira passagem para auditar o resultado:

> **Prompt da Passagem 3 (Verify):**  
> *"Execute agora a **Passagem 3 (Verify — Dupla Inspeção)** sobre o artefato que você acabou de construir:*  
> *1. **Reconciliação Numérica:** Verifique matematicamente a economia de horas no Q3 (`420 pedidos × 18 min = 126h` vs. `420 × 3,5 min = 24,5h` ➔ economia de `101,5h` ou `80,55%`) e confira se os custos mensais de `VEND-01` (`$1,850`) a `VEND-04` (`$650`) batem exatamente com o CSV original.*  
> *2. **Auditoria da Camada Imutável:** Confirme item por item se nenhuma palavra normativa, prazo ou valor das `Cláusulas 2.1 a 2.5` foi alterado.*  
> *3. **Teste de Leitura Horizontal dos Títulos (Storytelling Test):** Liste apenas os 6 Headlines do Slide Plan em sequência e avalie se um diretor consegue compreender toda a narrativa e a decisão recomendada lendo unicamente os títulos.*  
> *4. **Checklist de Ressalvas Visíveis:** Confirme que a limitação de 11% de falha de OCR em municípios sem padrão nacional e a ausência de benchmark de latência do `VEND-03` estão visíveis na seção principal de decisão (e não escondidas no rodapé)."*

---

## 🏆 4. Evidências para a Rubrica 3.3 do Projeto da Disciplina
Ao concluir esta prática, você terá exercitado exatamente os artefatos exigidos na **Rubrica 3.3**:
- Especificação do entregável pelos 5 elementos de produto;
- Separação entre **Fato Citado**, **Achado Derivado** e **Recomendação**;
- Proteção de camada normativa imutável e preservação de `Blank ≠ Zero` contra falsa precisão;
- Registro completo do ciclo **`Pass 1 (Plan) ➔ Pass 2 (Build) ➔ Pass 3 (Verify)`**.
