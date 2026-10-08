# AGENTS.md

## Finalidade

Esta pasta contém as atas detalhadas das reuniões.

Para cada arquivo processado em `entrada/`, crie um arquivo Markdown com o mesmo nome-base.

Exemplo:

```text
entrada/reuniao_operacoes.txt
```

gera:

```text
atas/reuniao_operacoes.md
```

## Objetivo da ata

A ata deve permitir que uma pessoa compreenda:

- quem participou;
- o que foi discutido;
- quais decisões foram tomadas;
- quais ações foram definidas;
- quais riscos foram identificados;
- quais assuntos permanecem em aberto.

A ata deve ser mais detalhada que o resumo executivo, mas não deve reproduzir a transcrição integralmente.

## Formato obrigatório

Use esta estrutura:

```markdown
# [Nome da reunião]

**Data:** [data]

## Participantes

- [participante]
- [participante]

## Assuntos discutidos

### [Assunto 1]

[Resumo objetivo da discussão]

### [Assunto 2]

[Resumo objetivo da discussão]

## Decisões tomadas

- [decisão]

## Tarefas e próximos passos

- [tarefa]. Responsável: [responsável]. Prazo: [prazo].

## Propostas em avaliação

- [proposta]

## Riscos identificados

- [risco]

## Questões em aberto

- [questão]
```

## Regras

Não reproduza diálogos completos.

Sintetize as discussões preservando o significado original.

Não apresente propostas ou sugestões como decisões tomadas.

Se nenhuma decisão tiver sido tomada, mantenha a seção e informe:

`Nenhuma decisão explícita registrada.`

Se uma tarefa não possuir responsável ou prazo, não invente essas informações.

Exemplo:

```markdown
- Avaliar custos de armazenamento adicional. Responsável: Roberto. Prazo: não definido.
```

Se não houver responsável:

```markdown
- Revisar política de fornecedores. Responsável: não definido. Prazo: 2026-10-15.
```

Use linguagem objetiva e profissional.

Evite avaliações subjetivas sobre participantes ou decisões.
