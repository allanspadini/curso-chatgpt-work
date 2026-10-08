# AGENTS.md

## Objetivo

Este projeto processa transcrições de reuniões armazenadas na pasta `entrada/` e gera artefatos estruturados para diferentes finalidades.

Cada arquivo `.txt` encontrado em `entrada/` representa uma reunião independente.

Para cada reunião processada, devem ser geradas quatro saídas correspondentes:

- uma ata detalhada em `atas/`;
- um resumo executivo em `resumos_executivos/`;
- uma lista estruturada de tarefas em `tarefas/`;
- uma representação estruturada completa em `dados/`.

## Estrutura do projeto

```text
projeto/
├── AGENTS.md
│
├── entrada/
│   └── *.txt
│
├── atas/
│   ├── AGENTS.md
│   └── *.md
│
├── resumos_executivos/
│   ├── AGENTS.md
│   └── *.md
│
├── tarefas/
│   ├── AGENTS.md
│   └── *.csv
│
└── dados/
    ├── AGENTS.md
    └── *.json
```

## Processo

Para cada arquivo `.txt` presente em `entrada/`:

1. leia integralmente a transcrição;
2. identifique o nome ou tema da reunião;
3. identifique a data;
4. identifique os participantes;
5. identifique os principais assuntos discutidos;
6. identifique decisões explicitamente tomadas;
7. identifique tarefas e próximos passos;
8. identifique responsáveis;
9. identifique prazos;
10. identifique riscos;
11. identifique propostas ainda em avaliação;
12. identifique questões em aberto;
13. gere os quatro artefatos correspondentes.

## Regras globais

Use exclusivamente informações presentes na transcrição.

Não invente ou complete informações ausentes.

Em particular, não deduza:

- responsáveis;
- prazos;
- valores;
- datas;
- decisões;
- aprovações.

Diferencie sempre:

- decisão aprovada;
- sugestão;
- proposta em avaliação;
- tarefa explicitamente atribuída;
- questão em aberto.

Uma sugestão feita durante a reunião não é uma decisão.

Uma possibilidade discutida não é uma tarefa, salvo quando houver encaminhamento explícito para alguém executá-la.

Quando uma informação não estiver disponível:

- utilize `null` nas estruturas JSON;
- deixe o campo vazio em arquivos CSV;
- indique de forma natural sua ausência apenas quando necessário nos documentos Markdown.

## Nomes dos arquivos

O nome-base do arquivo original deve ser preservado.

Exemplo:

```text
entrada/reuniao_operacoes.txt
```

deve produzir:

```text
atas/reuniao_operacoes.md
resumos_executivos/reuniao_operacoes.md
tarefas/reuniao_operacoes.csv
dados/reuniao_operacoes.json
```

## Normalização de datas

Sempre que possível, utilize datas no formato:

`AAAA-MM-DD`

Expressões relativas podem ser convertidas somente quando a data puder ser determinada de maneira inequívoca a partir da data da reunião.

Exemplo:

Se a reunião ocorreu em `2026-09-14`, a expressão:

`sexta-feira, dia 18 de setembro`

pode ser convertida para:

`2026-09-18`

Não faça conversões quando houver ambiguidade.

## Consistência

As quatro saídas referentes à mesma reunião devem representar os mesmos fatos.

Uma tarefa presente em `tarefas/` deve também existir em `dados/`.

Uma decisão presente em `dados/` deve ser compatível com a ata correspondente.

Não introduza fatos novos em apenas um dos artefatos.

## Instruções específicas

Cada pasta de saída contém seu próprio arquivo `AGENTS.md`.

Antes de criar um artefato em uma pasta, leia e siga as instruções específicas definidas no `AGENTS.md` daquela pasta.

As instruções específicas complementam estas regras globais.

Em caso de conflito, preserve sempre os princípios globais de:

1. não inventar informações;
2. não transformar propostas em decisões;
3. não inferir responsáveis ou prazos;
4. manter consistência entre todas as saídas.
