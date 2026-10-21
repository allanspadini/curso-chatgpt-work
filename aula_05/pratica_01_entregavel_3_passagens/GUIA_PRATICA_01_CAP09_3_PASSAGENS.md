# 📄 Guia da Prática 01 (Capítulo 9 — Rubrica 3.3): Entregáveis como Produtos e o Workflow em 3 Passagens (`Plan ➔ Build ➔ Verify`)

**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet — Pós-Graduação em IA e Engenharia de Software  
**Professor:** Prof. Dr. Allan Segovia-Spadini  
**Base Bibliográfica:** Capítulo 9 — *Documents, Spreadsheets, and Presentations* (`09-documents-spreadsheets-and-presentations.md`)  
**Rubrica Atendida:** **Rubrica 3.3** (*"O aluno produziu um documento com arquitetura de conteúdo e revisão em três passagens?"*)

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
