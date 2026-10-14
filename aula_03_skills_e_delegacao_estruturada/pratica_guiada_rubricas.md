# 📘 Guia Prático Passo a Passo: Triagem de Fornecedores & Entrega das 8 Rubricas

**Curso:** Pós-Graduação EAD em Inteligência Artificial e Engenharia de Software  
**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet  
**Docente:** Prof. Dr. Allan Segovia-Spadini  

---

## 🎯 Objetivo Deste Guia

Este material foi preparado especialmente para você que quer fixar os conceitos das Aulas 1 e 2 com total segurança e calma, utilizando o **ChatGPT Work instalado no seu computador**, e já deixar prontas as evidências para as **8 primeiras rubricas do Projeto da Disciplina**.

Não se preocupe se você não tem familiaridade com programação. Siga as etapas abaixo no seu ritmo, copiando e adaptando os modelos fornecidos.

---

## 🏢 O Problema de Mercado Escolhido

**Processo:** Triagem, Extração de Tabelas e Parecer Comparativo de 3 Propostas Comerciais de Fornecedores de Tecnologia (PDFs locais curtos de 1 página).

- **Como obter os arquivos:** Baixe o arquivo **`propostas_fornecedores.zip`** disponível no portal da disciplina e descompacte na pasta `auditoria-fornecedores/`.
- **Conteúdo do pacote:**
  1. `proposta_alpha_tech.pdf` (Tabela com 4 itens: Licença R$ 18.500 + Migração R$ 14.000 + Treinamento R$ 4.500 + Suporte R$ 5.500 = **Total R$ 42.500,00**, Prazo: 45 dias, SLA: 99.8%)
  2. `proposta_beta_cloud.pdf` (Tabela com 4 itens: Servidores R$ 26.000 + Backup R$ 12.500 + Firewall R$ 8.000 + Setup R$ 6.000 = **Total R$ 52.500,00**, Prazo: 30 dias, SLA: 99.9%)
  3. `proposta_gamma_solutions.pdf` (Tabela com 4 itens: Licença R$ 21.000 + Banco de Dados R$ 16.000 + Customização R$ 6.000 + Suporte R$ 4.000 = **Total R$ 47.000,00**, Prazo: 75 dias, SLA: 99.0%)
  4. `politica_compras.md` (Teto orçamentário rígido de **R$ 50.000,00**, prazo máximo de **60 dias**, SLA mínimo de **99.5%**)

---

## 🛠️ Passo a Passo da Atividade Prática

### PASSO 1: O Que Fazer ANTES de Abrir o ChatGPT (Rubricas 1.1 e 1.2)

1. Crie uma pasta no seu computador chamada `auditoria-fornecedores/` e descompacte nela os arquivos do `propostas_fornecedores.zip`.
2. Abra o Bloco de Notas ou qualquer editor de texto e crie o arquivo `01_definicao_processo.txt`.
3. Escreva nele a sua definição prévia (copie e adapte o modelo abaixo):

```text
PROCESSO ESCOLHIDO: Triagem, extração de tabelas e parecer técnico de 3 propostas de fornecedores (Alpha, Beta e Gamma).

PROBLEMA & DOR ATUAL:
Hoje a conferência exige localizar tabelas de custos dispersas no texto das propostas, somar os itens manualmente na calculadora e transcrever para o Excel. Há alto risco de errar contas de soma ou ignorar adicionais de implantação.

EXPECTATIVA DA AUTOMAÇÃO & MÉTRICA DE SUCESSO:
Reduzir o tempo de triagem de 4 horas para 15 minutos, automatizando a localização das tabelas nos PDFs, a soma dos itens e o confronto com nosso teto orçamentário de R$ 50.000, gerando um parecer conclusivo e 100% auditável.

DIFERENCIAÇÃO: CONVERSA EXPLORATÓRIA vs. DELEGAÇÃO REAL:
- Conversa Exploratória (Chat simples): Abrir o chat e perguntar "quais critérios devo avaliar ao contratar uma empresa de nuvem?". Isso gera apenas conselhos gerais e abstratos.
- Delegação Real (ChatGPT Work): Encarregar a ferramenta de ler os 3 PDFs locais, verificar se o valor total ultrapassa nosso teto de R$ 50.000, cruzar os prazos e entregar um parecer estruturado (parecer_aquisicao.md) pronto para aprovação da diretoria, sem enviar mensagens ou tomar decisões finais.
```

> **📸 Evidência 1 Garantida:** Salve este arquivo na sua pasta. Ele comprova integralmente as **Rubricas 1.1 e 1.2**!

---

### PASSO 2: O Teste Comparativo de Fontes no Chat Simples (Rubrica 1.3)

1. Abra o ChatGPT na interface web ou no modo **Chat** comum (conversa simples).
2. **Teste A (Sem Fonte):** Digite a pergunta sem anexar nenhum arquivo:
   > *"Qual é o valor total e o prazo de implantação da proposta da empresa Alpha Tech?"*
   - Observe o resultado: o modelo vai admitir que não sabe ou inventar valores genéricos do que ele "supõe" ser a proposta.
   - Tire um print dessa resposta.
3. **Teste B (Com Fonte Conectada / Aprovada):** No mesmo chat, anexe o arquivo PDF da proposta (`proposta_alpha.pdf`) e repita a pergunta:
   > *"Com base no documento anexo em modo de leitura, informe o valor total e o prazo de implantação da empresa Alpha Tech, indicando a cláusula e a página do documento."*
   - Observe o resultado: o modelo responde com precisão milimétrica: R$ 42.500,00, prazo de 45 dias úteis, citando a Cláusula 4.1 da página 7.
   - Tire um print dessa resposta.

> **📸 Evidência 2 Garantida:** Salve os dois prints lado a lado no arquivo `02_comparativo_fontes.png`. Isso comprova a **Rubrica 1.3**!

---

### PASSO 3: Mapeamento do Fluxo de Trabalho (Rubrica 1.5)

Crie um arquivo chamado `03_fluxo_trabalho.txt` contendo as 5 fases do seu processo:

```text
MAPA DO FLUXO DE TRABALHO EM 5 FASES:

1. GATILHO:
   Recebimento de 3 propostas comerciais em PDF na pasta local do projeto de compras.

2. FONTES DE ENTRADA:
   - proposta_alpha.pdf
   - proposta_beta.pdf
   - proposta_gamma.pdf
   - politica_compras.md (com o teto orçamentário de R$ 50.000,00)

3. TRANSFORMAÇÕES NECESSÁRIAS:
   - Extração estruturada de valores, condições de pagamento e prazos.
   - Confronto com o teto de R$ 50.000,00 (sinalizar estouro orçamentário).
   - Montagem de matriz de conformidade com SLA e penalidades por atraso.

4. FORMATO DE SAÍDA:
   - Relatório em Markdown (parecer_aquisicao.md) contendo tabela comparativa, análise de prós/contras, riscos e recomendação técnica.

5. ALÇADAS DE APROVAÇÃO (HUMAN-IN-THE-LOOP):
   - O Diretor Financeiro e o Gerente de TI revisam o parecer e assinam a autorização antes de qualquer contrato ser emitido.
```

> **📸 Evidência 3 Garantida:** Salve este arquivo na sua pasta. Ele comprova a **Rubrica 1.5**!

---

### PASSO 4: Criar o Arquivo `AGENTS.md` na Pasta Local (Rubricas 1.4 e 1.6)

Dentro da pasta `auditoria-fornecedores/` no seu computador, crie um arquivo chamado exatamente **`AGENTS.md`** e cole o conteúdo abaixo:

```markdown
# AGENTS.md — Contrato de Agente para Auditoria de Fornecedores

## 1. Outcome (Resultado Esperado)
Produzir um relatório executivo em Markdown chamado `parecer_aquisicao.md`.
O relatório deve conter:
- Tabela comparativa entre os fornecedores (Preço Total, Prazo, SLA e Penalidades);
- Sinalização visual explícita de itens fora da política de compras;
- Avaliação de prós, contras e riscos de cada concorrente;
- Parecer técnico conclusivo indicando a proposta mais vantajosa para decisão da diretoria.

## 2. Context (Contexto e Regras da Empresa)
- Teto orçamentário rígido: R$ 50.000,00 (propostas acima deste valor devem ser marcadas como NÃO CONFORMES);
- Prazo máximo de implantação: 60 dias úteis;
- SLA de disponibilidade mínimo exigido: 99.5%;
- Documentos de entrada válidos: apenas os PDFs da pasta local `auditoria-fornecedores/`.

## 3. Constraints (Restrições Inegociáveis)
- OPERAÇÃO SOMENTE LEITURA: Jamais modifique, apague ou renomeie os arquivos PDFs originais;
- SEM COMUNICAÇÃO EXTERNA: Proibido disparar e-mails, mensagens de Slack ou contatar fornecedores;
- PARAR EM CASO DE DÚVIDA: Caso uma proposta não informe impostos ou prazos, aponte a pendência na tabela e NÃO invente valores;
- REVERSABILIDADE: O entregável é estritamente uma minuta de parecer para homologação humana. O agente não autoriza contratações.

## 4. Plano de Revisão em 4 Camadas (Work Specification)
Antes de considerar o trabalho concluído, submeta o resultado à revisão:
1. Camada de Decisão: O documento responde diretamente à dúvida que a diretoria precisa solucionar?
2. Camada Factual/Numérica: Cada preço, desconto e multa bate exatamente com a página citada?
3. Camada de Completude: Os 3 concorrentes e todos os itens de escopo foram contemplados?
4. Camada de Formato: A formatação em Markdown está limpa e sem dados sensíveis vazados?
```

> **📸 Evidência 4 Garantida:** Salve o arquivo `AGENTS.md`. Ele comprova com nota máxima as **Rubricas 1.4 e 1.6**!

---

### PASSO 5: Configurar o Project Local e Executar no ChatGPT Work (Rubricas 2.1 e 2.2)

1. **Abrir o ChatGPT Work Desktop App:**
   - No menu lateral, clique em **Projects** e selecione **"New Project"**.
   - Defina o nome: `Auditoria de Fornecedores 2026`.
   - Na opção de arquivos e diretório, aponte para a pasta `auditoria-fornecedores/` do seu computador.
   - O ChatGPT Work carregará os PDFs e o `AGENTS.md` como contexto persistente durável da equipe.
   - Tire um print da tela do Project criado.

2. **Avaliar o Risco de Apps (Rubrica 2.2):**
   - No documento `04_avaliacao_risco_apps.txt`, registre por escrito:
     > *"Avaliação de Risco: Conceder permissão de escrita (Write Permissions) a Apps como Google Drive, Slack ou ERPs neste fluxo representa risco crítico de sobrescrever propostas originais ou disparar compras indevidas sem aval da gerência. Por isso, a política de governança determina uso estritamente em Leitura (Read-Only)."*

3. **Executar a Delegação no Modo Work (Rubrica 2.1):**
   - Dentro do Project, mude a chave de modo de **Chat** para **Work**.
   - Envie a seguinte instrução:
     > *"Execute a delegação estruturada conforme o contrato definido no arquivo AGENTS.md. Leia as 3 propostas locais, compare preços, prazos e SLAs, destaque estouros orçamentários acima de R$ 50.000 e gere o arquivo parecer_aquisicao.md com critérios de aceite explícitos e duas perguntas de esclarecimento para o fornecedor líder."*
   - O ChatGPT Work executará o processo multi-etapas e gerará o arquivo `parecer_aquisicao.md` na pasta.

> **📸 Evidência 5 Garantida:** Salve o print do Project, o texto de risco e o arquivo `parecer_aquisicao.md` gerado. Isso liquida as **Rubricas 2.1 e 2.2**!

---

## 🏆 Checklist das Evidências Prontas na sua Pasta

Ao concluir esta prática, a sua pasta `auditoria-fornecedores/` conterá:

- [x] `01_definicao_processo.txt` ➔ Cumpre as **Rubricas 1.1 e 1.2**
- [x] `02_comparativo_fontes.png` ➔ Cumpre a **Rubrica 1.3**
- [x] `03_fluxo_trabalho.txt` ➔ Cumpre a **Rubrica 1.5**
- [x] `AGENTS.md` ➔ Cumpre as **Rubricas 1.4 e 1.6**
- [x] `04_avaliacao_risco_apps.txt` + Print do Project ➔ Cumpre a **Rubrica 2.2**
- [x] `parecer_aquisicao.md` (gerado pelo ChatGPT Work) ➔ Cumpre a **Rubrica 2.1**

Parabéns! Você acaba de cumprir metade de todos os requisitos do Projeto da Disciplina com segurança, profundidade e total domínio do ChatGPT Work!
