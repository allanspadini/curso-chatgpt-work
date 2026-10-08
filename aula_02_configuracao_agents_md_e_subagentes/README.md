# Aula 02: Configuração de Agentes com AGENTS.md e Arquitetura de Subagentes Especializados

> **Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
> **Instituição:** Pós-Graduação EAD — Faculdade Infnet  
> **Docente:** Prof. Dr. Allan Segovia-Spadini  
> 🌐 **Slides Interativos:** [Acessar Apresentação](https://allanspadini.github.io/curso-chatgpt-work/aula_02_configuracao_agents_md_e_subagentes/)  
> 📄 **Slides em PDF:** [Baixar aula_02_apresentacao.pdf](https://allanspadini.github.io/curso-chatgpt-work/aula_02_configuracao_agents_md_e_subagentes/aula_02_apresentacao.pdf)

---

## 📦 Downloads dos Materiais Práticos (.zip)

Para praticar os conceitos da aula com o **ChatGPT Work**, você pode baixar os arquivos de cada recurso prático individualmente em formato `.zip` ou o pacote completo:

| Recurso Prático | Descrição do Caso Real | Link de Download Direto (.zip) |
| :--- | :--- | :--- |
| 📁 **1. Análise de Concursos** | Pesquisa autônoma de editais com web browsing, filtros de elegibilidade e consolidação em planilha Excel (`.xlsx`). | 📥 [Baixar analise-de-concursos.zip](https://github.com/allanspadini/curso-chatgpt-work/raw/main/aula_02_configuracao_agents_md_e_subagentes/analise-de-concursos.zip) |
| 🧾 **2. Notas Fiscais** | Extração multimodal (OCR em imagens `.jpeg`) para arquivos estruturados `.json` validados, com regras rígidas de tipagem monetária e CNPJ. | 📥 [Baixar notas_fiscais.zip](https://github.com/allanspadini/curso-chatgpt-work/raw/main/aula_02_configuracao_agents_md_e_subagentes/notas_fiscais.zip) |
| 👥 **3. Processamento de Reuniões** | Arquitetura hierárquica completa de `AGENTS.md` com 4 subpastas especializadas (`atas/`, `resumos_executivos/`, `tarefas/`, `dados/`) processando transcrições reais. | 📥 [Baixar reunioes.zip](https://github.com/allanspadini/curso-chatgpt-work/raw/main/aula_02_configuracao_agents_md_e_subagentes/reunioes.zip) |
| 📦 **Todos os Recursos (Completo)** | Pacote unificado com todos os laboratórios e materiais da Aula 02. | 📥 [Baixar todos_materiais_praticos_aula_02.zip](https://github.com/allanspadini/curso-chatgpt-work/raw/main/aula_02_configuracao_agents_md_e_subagentes/todos_materiais_praticos_aula_02.zip) |

> 💡 **Nota alternativa via GitHub Pages:**  
> Os mesmos arquivos também podem ser baixados diretamente pelo espelho web do curso:
> - [analise-de-concursos.zip](https://allanspadini.github.io/curso-chatgpt-work/aula_02_configuracao_agents_md_e_subagentes/analise-de-concursos.zip)
> - [notas_fiscais.zip](https://allanspadini.github.io/curso-chatgpt-work/aula_02_configuracao_agents_md_e_subagentes/notas_fiscais.zip)
> - [reunioes.zip](https://allanspadini.github.io/curso-chatgpt-work/aula_02_configuracao_agents_md_e_subagentes/reunioes.zip)
> - [todos_materiais_praticos_aula_02.zip](https://allanspadini.github.io/curso-chatgpt-work/aula_02_configuracao_agents_md_e_subagentes/todos_materiais_praticos_aula_02.zip)

---

## 🛠️ Detalhamento dos Recursos Práticos

### 1. `analise-de-concursos/`
Demonstra a configuração de um contrato agêntico determinístico para pesquisa e extração na Web:
- **`AGENTS.md`**: Define regras de desambiguação ("data do edital" vs "data da notícia"), campos obrigatórios (órgão, vagas, remuneração, banca) e critério de aceite com tabela e ranqueamento das maiores remunerações.
- **`outputs/levantamento_05-10-2026/concursos_publicados_2026-10-05.xlsx`**: Planilha modelo com os dados consolidados gerados pelo agente.

### 2. `notas_fiscais/`
Demonstra o pipeline multimodal de processamento documental:
- **`nota1.jpeg`, `nota2.jpeg`, `nota3.jpeg`, `nota4.jpeg`**: Notas fiscais reais/simuladas com diferentes leiautes de fornecedores.
- **`AGENTS.md`**: Instruções de extração para o modelo de visão com proibição de inferência de campos ausentes (`null`), preservação de zeros à esquerda em CNPJ/CPF e separação estrita de tributos e itens.
- **`json/`**: Arquivos JSON gerados individualmente por nota fiscal (`nota1.json` a `nota4.json`).

### 3. `reunioes/`
Demonstra na prática a **Resolução Hierárquica de `AGENTS.md` em Árvore** e o princípio da **Soberania do Nó Folha** ensinados no Módulo 01 da Aula:
- **`reunioes/AGENTS.md`** (Raiz do Workspace): Define as diretrizes globais de interpretação das transcrições, regras anti-alucinação ("sugestão não é decisão", "possibilidade não é tarefa") e o mapeamento dos 4 desfechos esperados.
- **`entrada/`**: Transcrições brutas de reuniões corporativas de áreas distintas (`reuniao_marketing.txt`, `reuniao_operacoes.txt`, `reuniao_produto.txt`, `reuniao_financeiro.txt`).
- **Subdiretórios Especializados (Nós Folha com seus próprios `AGENTS.md`)**:
  - `atas/AGENTS.md`: Especialista na estrutura formal da ata da reunião (`.md`).
  - `resumos_executivos/AGENTS.md`: Especialista em síntese executiva condensada para diretoria (`.md`).
  - `tarefas/AGENTS.md`: Especialista em extração tabular estrita de plano de ação (`.csv`).
  - `dados/AGENTS.md`: Especialista no schema canônico de dados (`.json`).

---

## 🚀 Como Utilizar no ChatGPT Work

1. Baixe o arquivo `.zip` desejado da tabela acima.
2. Descompacte a pasta no seu computador.
3. Abra o **ChatGPT Work** (ou ambiente compatível com a especificação `AGENTS.md`).
4. Conecte ou aponte a pasta descompactada como diretório de trabalho do agente.
5. Inicie a delegação observando como as instruções hierárquicas guiam o comportamento e a execução das ferramentas do modelo.
