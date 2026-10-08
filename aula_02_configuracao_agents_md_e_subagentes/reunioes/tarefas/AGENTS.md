# AGENTS.md

## Finalidade

Esta pasta contém arquivos CSV com as tarefas e ações explicitamente definidas nas reuniões.

Cada linha representa uma tarefa independente.

## Arquivos

Para:

```text
entrada/reuniao_produto.txt
```

gere:

```text
tarefas/reuniao_produto.csv
```

## Schema obrigatório

O CSV deve conter exatamente estas colunas, nesta ordem:

```csv
reuniao,tarefa,responsavel,prazo,status
```

## Exemplo

```csv
reuniao,tarefa,responsavel,prazo,status
Produto,Consultar compliance sobre coleta de endereço,Diego Santos,2026-10-02,Pendente
Produto,Realizar entrevistas de usabilidade,Camila Rocha,2026-10-09,Pendente
Produto,Levantar pedidos relacionados ao modo escuro,Beatriz Lima,,Pendente
```

## Regras de extração

Crie uma linha somente quando houver uma ação ou encaminhamento explícito.

Não transforme em tarefa:

- sugestões sem encaminhamento;
- ideias levantadas;
- hipóteses;
- perguntas;
- decisões que não exijam execução posterior.

## Responsável

Registre o responsável somente quando ele estiver explicitamente identificado.

Se não houver responsável:

```csv
Produto,Avaliar impacto da nova funcionalidade,,,Pendente
```

Não deduza que quem propôs uma ação será necessariamente seu responsável.

## Prazo

Utilize:

`AAAA-MM-DD`

quando uma data inequívoca estiver disponível.

Quando não houver prazo, deixe o campo vazio.

Nunca invente um prazo.

## Status

Para todas as tarefas extraídas diretamente de uma reunião, utilize inicialmente:

`Pendente`

Não tente inferir se uma tarefa já foi concluída posteriormente.

## Formatação CSV

Garanta que o arquivo seja um CSV válido.

Campos contendo vírgulas devem ser corretamente delimitados por aspas.

Não inclua comentários, explicações ou Markdown dentro do arquivo CSV.
