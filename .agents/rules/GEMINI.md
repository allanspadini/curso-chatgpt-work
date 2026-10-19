Este é um projeto de aulas sobre o ChatGPT Work para um curso de pós-graduação EAD da Faculdade Infnet. O nome da disciplina é **Processos Agênticos com ChatGPT Work [26E4_2]**. O ChaGPT Work é uma novidade da OpenAI parecida com o Antigravity, não assuma que é simplesmente o Chagpt. Você pode conferir e tirar dúvidas nesse material. 
https://github.com/fernandoferreira-me/chatgpt-work-book

Devemos passar conceitos avançados e complexos com o máximo de clareza didática e profundidade técnica, utilizando estritamente a metodologia **Situação-Problema do Mundo Real ➔ Solução de Engenharia ➔ Teoria Rigorosa**.

---

### 🎯 Metodologia Pedagógica Central: Problema ➔ Solução ➔ Teoria

Todo conceito, módulo arquitetural ou técnica deve ser introduzido seguindo rigorosamente estas 3 etapas:

1. **1. Situação-Problema do Mundo Real (A Dor Prática)**:
   - **Nunca introduzir teoria no vácuo ou fórmulas abstratas sem motivação concreta.**
   - Começar SEMPRE com um gargalo real enfrentado em projetos e na indústria:
     - *Exemplos:* Saturação de gradientes ao multiplicar vetores em alta dimensão ($d_k=512$); palavras raras explodindo o vocabulário (erros de OOV); degradação de acurácia ao empilhar camadas profundas em CNNs; perda de detalhes espaciais finos em segmentação de imagens médicas; lentidão e custo quadrático de memória GPU $O(T^2)$ em contextos longos; impossibilidade de paralelizar RNNs no treino; etc.

2. **2. Solução de Engenharia (A Sacada Prática & Intuição)**:
   - Apresentar a solução conceitual e o insight de design criado pelos autores para contornar o problema:
     - *Exemplos:* Fator de escala $1/\sqrt{d_k}$ para estabilizar a variância; algoritmo Byte-Pair Encoding (BPE); atalhos residuais $x + F(x)$ na ResNet; conexões densas de atalho na U-Net; projeções em subespaços de Query/Key/Value; paralelização com *Teacher Forcing* e máscara causal; computação em blocos SRAM no FlashAttention; fatiamento de imagens em patches no ViT.

3. **3. Teoria e Formalismo Rigoroso (Matemática, Tensores e Código)**:
   - Formalizar o conceito com rigor matemático completo, rastreamento de tensores em PyTorch ($[B, T, d_{\text{model}}]$, $[B, h, T, d_k]$, etc.), formulação algébrica, derivadas parciais e implementação prática.

---

### 📁 Estrutura Obrigatória de Cada Aula (`aula_XX_<nome_da_aula>/`)

Cada aula deve ficar em uma pasta dedicada contendo a seguinte estrutura de arquivos:
- `apresentacao/` (Aplicação React + Vite com os slides interativos)
- `falas_apresentador.md` (Roteiro de narração slide por slide para o professor, com profundidade máxima)
- `plano_aula.md` (Plano pedagógico da aula detalhando objetivos, blocos e competências)
- outros — podem surgir outros arquivos (como notebooks `.ipynb` ou exemplos práticos) conforme a necessidade

**Sincronia Total de Documentos**: Sempre que um slide for adicionado, removido ou alterado, sincronize simultaneamente `slidesData`, `falas_apresentador.md` e `plano_aula.md`.

---

### 💻 Padrão para Apresentações (`apresentacao/`) — Skill `infnet-presentations`

Para criar, estruturar, editar, revisar ou exportar apresentações de slides na pasta `apresentacao/`, **utilize obrigatoriamente a skill `infnet-presentations`**.

A skill `infnet-presentations` já define todas as regras de arquitetura React + Vite, identidade visual e paleta de cores da Infnet (tema 100% claro), viewport 16:9 (`1366x768`), atalhos de navegação, construção progressiva de gráficos/diagramas passo a passo, baixa densidade de texto nos slides e espelhamento integral das explicações detalhadas nas falas do apresentador (`notes` e `falas_apresentador.md`).

Complementos específicos para as aulas desta disciplina:
- Divida o conteúdo em cerca de **18 a 25 slides** por apresentação, incluindo de **3 a 5 componentes/simuladores interativos** e encerrando diretamente no Quiz Interativo de Fixação ou último conteúdo prático (sem slide genérico de síntese final).
- Todo o aprofundamento conceitual da metodologia **Problema ➔ Solução ➔ Teoria** deve estar completamente detalhado nas falas do professor (`falas_apresentador.md` / `notes`).

---


### 📦 Gerenciadores de Pacotes e Execução

- **🐍 Ecossistema Python**:
  - Utilize **estritamente o `uv`** para instalar pacotes Python, gerenciar ambientes virtuais e executar scripts Python locais (ex: `uv run python script.py`, `uv pip install ...`, `uv add ...`).
  - **Nunca utilize `pip` ou `python` diretamente sem o `uv`**.
  
- **🌐 Ecossistema Frontend / Apresentações (React + Vite)**:
  - Utilize o **`npm`** (Node.js) para gerenciar dependências e scripts do frontend:
    - Instalar pacotes: `npm install`
    - Servidor de desenvolvimento: `npm run dev`
    - Build de validação e produção: `npm run build`


 
