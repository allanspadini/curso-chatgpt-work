---
name: relatorio-tecnico-infnet
description: Criar e revisar relatórios técnico-executivos no padrão visual Infnet em HTML e Markdown, com professor e disciplina parametrizáveis. Usar quando solicitado relatório Infnet ou documento nesse padrão institucional.
---

# Relatórios técnico-executivos Infnet

## Entradas e escopo

Identificar tema, objetivo, público, autor, professor(a), disciplina, data e formatos pedidos. Professor e disciplina são variáveis independentes do autor: nunca herdar nomes do guia da atividade. Sem esses dados, usar “Professor(a) não informado(a)” e “Disciplina não informada”, sinalizando a pendência. Usar a data local de emissão. Na ausência de formato pedido, entregar HTML e Markdown equivalentes.

Esta skill é local ao projeto. Resolver os caminhos abaixo a partir desta pasta, não do diretório de execução. Preservar os insumos originais e salvar relatórios em uma pasta de saída do projeto.

## Método

1. Ler [identidade e estrutura](references/especificacao_identidade_e_estrutura_infnet.md) e [checklist e limites](references/checklist.md). Consultar apenas o template necessário em `assets/`.
2. Reunir fontes do tema e evidências fornecidas. Separar fatos, interpretação e recomendações; citar fontes efetivamente consultadas. Não assumir que o guia da aula fornece base teórica ou benchmark.
3. Copiar e preencher `assets/template_relatorio_infnet.html` e/ou `assets/template_relatorio_infnet.md`. Preencher `NOME_PROFESSOR`, `NOME_DISCIPLINA`, `TEMA_RELATORIO`, autor e data. Preservar tema claro, paleta, tipografia, onda SVG e marcadores. Copiar `assets/infnet_logo.png` para junto do HTML. Inserir também uma imagem visível do logo no Markdown se o formato de entrega suportar.
4. Os templates fornecidos tratam de Skills. Para esse tema, seguir os 12 elementos do checklist. Para outros temas, adaptar os conteúdos específicos (autonomia, anatomia, divulgação, arquitetura e anti-padrões) a seções equivalentes pertinentes, mantendo a identidade e explicando que não se trata da conformidade temática de Skills. Não forçar conteúdo sobre Skills em outro assunto.
5. Calcular indicadores com código quando houver dados reais: registrar origem, unidade, fórmula e critério de agregação. Não inventar quatro setores nem médias. Sem benchmark, substituir a tabela de exemplo por “Dados não fornecidos; impacto quantitativo não avaliado” e remover linhas fictícias. A regra 85/15 é uma diretriz pedagógica do material, não uma medição obtida.
6. Validar conteúdo e arquivos conforme checklist. Corrigir problemas recorrentes no método/template e regerar. Conferir visualmente o HTML renderizado e, se houver PDF solicitado, verificar o PDF final. Se não houver recurso de renderização, declarar a limitação.
7. Entregar links dos arquivos, resumo dos achados, verificações realizadas e pendências. Preencher `STATUS_VALIDADOR` com o resultado real e o alcance da verificação. Deixar homologação humana pendente nas quatro camadas; criar o relatório não autoriza publicação nem aprovação institucional.

## Recursos ausentes

Não foram fornecidos `insumo_teorico_skills_aula03.md`, `dados_benchmark_skills_infnet.json` nem `validar_relatorio_infnet.py`, embora citados no guia. Não os referenciar como fontes consultadas e não executar comandos para arquivos inexistentes. Se forem adicionados posteriormente, inspecionar antes de usar. Sem eles, realizar revisão explícita e não alegar auditoria determinística ou aprovação 12/12. A especificação recebida descreve apenas os elementos 01 e 02; os demais foram recuperados do guia e dos templates.
