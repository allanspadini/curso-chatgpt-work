# AGENTS.md

## Finalidade

Esta pasta contém a representação estruturada completa de cada reunião em formato JSON.

Esses arquivos são destinados principalmente a processamento por software, análises posteriores, integrações e automações.

## Arquivos

Para:

```text
entrada/reuniao_financeiro.txt
```

gere:

```text
dados/reuniao_financeiro.json
```

## Schema obrigatório

Cada arquivo deve seguir esta estrutura:

```json
{
  "reuniao": {
    "nome": "Nome da reunião",
    "data": "2026-09-30",
    "participantes": [
      "Participante 1",
      "Participante 2"
    ]
  },
  "assuntos": [
    {
      "titulo": "Título do assunto",
      "resumo": "Resumo objetivo da discussão"
    }
  ],
  "decisoes": [
    {
      "descricao": "Descrição da decisão"
    }
  ],
  "tarefas": [
    {
      "descricao": "Descrição da tarefa",
      "responsavel": "Nome",
      "prazo": "2026-10-07",
      "status": "Pendente"
    }
  ],
  "propostas_em_avaliacao": [
    {
      "descricao": "Descrição da proposta"
    }
  ],
  "riscos": [
    {
      "descricao": "Descrição do risco"
    }
  ],
  "questoes_em_aberto": [
    {
      "descricao": "Descrição da questão"
    }
  ]
}
```

## Valores ausentes

Quando uma propriedade possuir significado, mas seu valor não estiver disponível, utilize:

```json
null
```

Exemplo:

```json
{
  "descricao": "Analisar impacto da antecipação do pagamento",
  "responsavel": "Marcelo Andrade",
  "prazo": null,
  "status": "Pendente"
}
```

Quando uma categoria não possuir itens, utilize uma lista vazia:

```json
"riscos": []
```

Nunca utilize strings como:

```json
"prazo": "não informado"
```

ou:

```json
"prazo": ""
```

Prefira:

```json
"prazo": null
```

## Decisões

Inclua apenas decisões explicitamente aprovadas durante a reunião.

Não inclua nessa lista:

- sugestões;
- possibilidades;
- propostas ainda em análise;
- ações condicionadas a uma aprovação futura.

Esses itens devem ser representados em `propostas_em_avaliacao` ou `questoes_em_aberto`.

## Tarefas

Cada tarefa deve representar um encaminhamento explícito.

Use:

```json
{
  "descricao": "...",
  "responsavel": null,
  "prazo": null,
  "status": "Pendente"
}
```

quando responsável ou prazo não forem informados.

## Datas

Utilize datas no formato:

```text
AAAA-MM-DD
```

Converta datas relativas somente quando a conversão for inequívoca a partir da data da reunião.

## Validade do JSON

O arquivo final deve ser JSON válido.

Não inclua:

- comentários;
- Markdown;
- blocos de código;
- texto antes ou depois do objeto JSON.

## Consistência

A lista `tarefas` deve representar as mesmas tarefas presentes no CSV correspondente em `tarefas/`.

As decisões devem ser compatíveis com a ata e com o resumo executivo.

Este JSON deve funcionar como a representação estruturada mais completa da reunião.
