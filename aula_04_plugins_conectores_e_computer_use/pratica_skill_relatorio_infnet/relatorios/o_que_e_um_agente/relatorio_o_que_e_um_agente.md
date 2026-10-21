<!-- [HEADER-INFNET] -->
![Instituto Infnet](infnet_logo.png)

# O que é um agente de inteligência artificial?

**Instituto Infnet — Pós-Graduação em IA e Engenharia de Software**  
**Professor(a):** Professor(a) não informado(a)  
**Disciplina:** Disciplina não informada  
**Protocolo:** Não informado

<!-- [META-BAR] -->
| Autor / Responsável | Emissão | Classificação | Política visual |
| :--- | :--- | :--- | :--- |
| Não informado; elaboração assistida por IA | 19/10/2026 | TÉCNICO-EXECUTIVO | TEMA 100% CLARO |

<!-- [TLDR-3-PILULAS] -->
## 1. Resumo executivo

- **Dor operacional:** Tarefas com várias etapas exigem interpretar informações, escolher ações e conferir resultados.
- **Solução:** Um agente de IA conduz um ciclo de observação, decisão e ação orientado a um objetivo e limitado por instruções.
- **Impacto:** Pode entregar trabalho verificável; este relatório não apresenta benchmark nem comprova ganhos quantitativos.

<!-- [TRIADE-RET] -->
## 2. Problema → solução → teoria

### Situação-problema

Uma pessoa precisa preparar um relatório a partir de arquivos. Pedir um resumo resolve apenas parte do trabalho: ainda é necessário localizar documentos, conferir dados, organizar o texto e salvar a entrega.

### Solução de engenharia

Um agente pode conduzir essas etapas, observar se os arquivos existem e ajustar o caminho diante de uma falha. Sua atuação depende das ferramentas e permissões disponíveis. O exemplo ilustra uma possibilidade de projeto; não descreve um experimento realizado.

### Definição e formalismo

No contexto deste relatório, **agente de IA é um sistema que usa um modelo para selecionar ações, executá-las e avaliar seus resultados em busca de um objetivo**. A Anthropic distingue agentes, que decidem dinamicamente o percurso, de fluxos cujas etapas são predefinidas. Essa é uma convenção arquitetural útil; o termo “agente” admite definições diferentes. [Fonte 1](https://www.anthropic.com/engineering/building-effective-agents).

Uma representação didática é **observação → decisão → ação → nova observação**. O objetivo e os limites podem ser explicitados pelo contrato **C = ⟨Outcome, Context, Constraints, Acceptance Criteria⟩**: resultado esperado, contexto, restrições e critérios de aceitação. Essa notação organiza o pedido; não constitui uma definição universal de agente.

<!-- [TABELA-AUTONOMIA] -->
## 3. Conversa, automação e agente

| Abordagem | Quem define o próximo passo? | Estado durante a tarefa | Ferramentas | Papel humano |
| :--- | :--- | :--- | :--- | :--- |
| Conversa simples | Normalmente a pessoa | Histórico disponível | Podem existir | Conduzir cada solicitação |
| Fluxo predefinido | Código ou regras do fluxo | Variáveis do processo | Conforme a implementação | Definir e revisar o fluxo |
| Agente baseado em modelo | Modelo, dentro dos limites configurados | Contexto e resultados intermediários | Conforme necessidade e acesso | Definir objetivo, limites e revisar o resultado |

Esta tabela é uma síntese didática da distinção da [Fonte 1](https://www.anthropic.com/engineering/building-effective-agents). As categorias podem coexistir no mesmo produto: uma interface de chat pode iniciar um agente.

<!-- [ANATOMIA-AGENTE] -->
## 4. Componentes de um agente

A documentação do Agents SDK descreve um agente como um modelo configurado com instruções, ferramentas e comportamentos opcionais de execução. [Fonte 2](https://openai.github.io/openai-agents-python/agents/).

| Componente | Função | Exemplo didático |
| :--- | :--- | :--- |
| Modelo | Interpretar o contexto e selecionar passos | Decidir qual documento consultar |
| Instruções | Definir objetivo e limites | Não inventar dados ausentes |
| Ferramentas | Permitir interação com recursos | Ler arquivos e salvar o relatório |
| Estado de execução | Manter informações intermediárias | Documentos já examinados |
| Controle de execução | Aplicar paradas e verificações | Encerrar após salvar e conferir a entrega |

Memória permanente, acesso à internet e múltiplos agentes dependem do projeto; não devem ser presumidos. Uma skill pode fornecer um método reutilizável, mas não substitui todo o sistema de execução.

<!-- [CICLO-EXECUCAO] -->
## 5. O ciclo de execução na prática

A [Fonte 1](https://www.anthropic.com/engineering/building-effective-agents) destaca a importância do retorno do ambiente e de condições de parada.

```text
Receber objetivo e contexto
          ↓
Observar informações disponíveis
          ↓
Escolher e executar uma ação permitida
          ↓
Conferir o retorno da ferramenta
          ↓
Concluiu? → Sim: apresentar resultado e evidências
    ↓ Não
Continuar, solicitar informação ou parar conforme os limites
```

Planejar uma ação não comprova sua execução. Por exemplo, só afirmar que um arquivo foi salvo após verificar sua existência e seu conteúdo.

<!-- [GOVERNANCA] -->
## 6. Autonomia com limites

A OpenAI Academy apresenta agentes de trabalho por gatilho, processo e ferramentas, com instruções e governança. O modelo interpreta contexto e toma decisões delimitadas. [Fonte 3](https://openai.com/academy/workspace-agents/).

Para o exemplo deste relatório, propõe-se o seguinte contrato operacional:

- **Objetivo:** produzir um documento introdutório com fontes identificadas.
- **Ações permitidas:** consultar materiais e criar arquivos de saída.
- **Limites:** preservar originais e declarar lacunas de informação.
- **Parada:** encerrar quando a entrega estiver verificada ou quando faltar uma condição indispensável.
- **Revisão humana:** avaliar adequação e autorizar eventual publicação.

Esse contrato é uma proposta didática, sem proporção fixa de automação ou julgamento humano.

<!-- [EXEMPLO-APLICADO] -->
## 7. Exemplo aplicado: relatório a partir de arquivos

**Pedido ilustrativo:** “Leia os documentos desta pasta e prepare um relatório com as principais conclusões.”

1. Inventariar os documentos e identificar os formatos disponíveis.
2. Ler os materiais pertinentes ao objetivo.
3. Registrar informações confirmadas e lacunas.
4. Elaborar a análise, distinguindo evidência de interpretação.
5. Salvar o relatório no formato solicitado.
6. Conferir se o arquivo abre, se as fontes estão presentes e se a conclusão corresponde aos materiais.

**Adaptação possível:** se uma planilha estiver ausente, registrar a lacuna e limitar a análise. **Critério de aceitação proposto:** documento legível, fontes rastreáveis e nenhuma afirmação quantitativa sem origem. O exemplo é autoral e não representa resultado medido.

<!-- [LIMITES-E-FALHAS] -->
## 8. Limitações e falhas a considerar

| Falha possível | Consequência no exemplo | Controle proposto |
| :--- | :--- | :--- |
| Interpretar um documento incorretamente | Conclusão inadequada | Conferir trechos que sustentam os achados |
| Ferramenta retornar erro | Arquivo incompleto ou ausente | Ler o retorno e verificar a saída |
| Informação necessária não existir | Análise sem base suficiente | Declarar a lacuna |
| Repetir tentativas sem progresso | Consumo sem entrega | Definir condições de parada |
| Executar além do pedido | Alterações indesejadas | Delimitar permissões e revisão |

A tabela apresenta hipóteses de falha e controles para o exemplo, sem estimar frequência ou eficácia.

<!-- [TABELA-METRICAS] -->
## 9. Como avaliar um agente

**Dados não fornecidos; impacto quantitativo não avaliado.** Não há evidência neste relatório para afirmar economia de tempo, custo ou aumento de qualidade.

Para um futuro teste do exemplo, propõem-se indicadores: proporção de entregas que atendem aos critérios, afirmações sem fonte, tempo por entrega aceita e correções exigidas pelo revisor. Registrar a amostra e aplicar os mesmos critérios ao processo de comparação. Esses indicadores são uma proposta de avaliação, não resultados obtidos.

<!-- [HOMOLOGACAO-4-CAMADAS] -->
## 10. Conclusão e revisão

Um agente de IA conecta interpretação e ação em um processo orientado a objetivos. Para avaliá-lo, observar o que efetivamente fez, como verificou o resultado e em quais condições encerrou a tarefa.

| Camada de revisão humana | Situação |
| :--- | :--- |
| Decisão: utilidade e adequação ao público | Pendente |
| Fatos: definições, fontes e exemplos | Pendente |
| Completude: cobertura do tema e lacunas | Pendente |
| Formato: identidade visual e legibilidade | Pendente |

**Escopo editorial:** estrutura adaptada ao tema “agentes de IA”; não representa auditoria dos 12 elementos temáticos de Skills nem homologação institucional. Autor, professor, disciplina e protocolo não foram informados.

## Fontes consultadas

1. [Anthropic — Building effective agents](https://www.anthropic.com/engineering/building-effective-agents). Definição arquitetural, retorno do ambiente e condições de parada. Publicado em 19/12/2024; utilizado para conceitos, não para versões atuais de ferramentas.
2. [OpenAI — Agents SDK: Agents](https://openai.github.io/openai-agents-python/agents/). Componentes e configuração de um agente.
3. [OpenAI Academy — Workspace agents](https://openai.com/academy/workspace-agents/). Gatilho, processo, ferramentas e governança.

Consulta em 19/10/2026. Identidade visual baseada na especificação e no template locais da skill `relatorio-tecnico-infnet`. Exemplos, contrato operacional e proposta de avaliação são elaboração didática deste relatório.
