---
name: auditoria-reembolsos
description: Executa a auditoria contábil, fiscal e regulamentar de prestações de contas e relatórios de reembolsos de despesas de viagens corporativas. Use sempre que o usuário anexar comprovantes de viagem, relatórios de despesas, notas fiscais de hotel/refeição/transporte, ou solicitar para "auditar despesas", "conferir reembolso", "aplicar política de viagens" ou "gerar parecer de prestação de contas".
---

# Auditoria de Prestação de Contas e Reembolsos de Viagens

## Visão Geral
Esta skill transforma comprovantes e notas de despesas de viagem em um Parecer Oficial de Prestação de Contas devidamente auditado, checando tetos por cidade, barrando itens proibidos (bebidas alcoólicas e despesas pessoais) e garantindo conformidade com a política corporativa de 2026.

## Fluxo de Execução Obrigatório

### Passo 1: Extração e Triagem dos Comprovantes
1. Leia o relatório de viagem ou as notas fiscais anexadas pelo usuário.
2. Extraia para cada despesa:
   - Data e horário da emissão;
   - Tipo de estabelecimento e CNPJ do emissor;
   - Descrição detalhada dos itens (separando alimentos de bebidas);
   - Tipo de documento (NFS-e, NFC-e, Recibo Eletrônico de App ou Canhoto de Cartão);
   - Valor total do comprovante.
3. Classifique a categoria: `hotel`, `refeicao`, `transporte`, `pessoal` ou `outros`.

### Passo 2: Execução do Script Determinístico nos Bastidores
Para evitar qualquer erro ou alucinação aritmética na soma dos centavos e cálculo dos tetos:
1. Monte o arquivo JSON intermediário com os itens extraídos.
2. Execute o script de cálculo matemático via terminal:
```bash
uv run python skill_auditoria_reembolsos/scripts/validar_reembolso.py --dados dados_extraidos.json --politica skill_auditoria_reembolsos/references/tabela_tetos_cidades.json --saida resultado_auditoria.json
```
3. Leia o arquivo `resultado_auditoria.json` com os valores consolidados.

### Passo 3: Auditoria Normativa contra a Política
Consulte o arquivo `skill_auditoria_reembolsos/references/politica_viagens_2026.md` para fundamentar as seguintes regras inegociáveis:
- **Hospedagem:** Verificar teto da cidade de destino (ex: São Paulo = R$ 350/diária). Glosar qualquer excedente.
- **Alimentação:** Teto de R$ 85,00 por refeição.
- **Bebidas Alcoólicas:** **PROIBIDAS.** Glosar integralmente qualquer valor de cerveja, vinho ou bebida destilada.
- **Transporte Noturno:** Corridas aos finais de semana ou fora de expediente comercial sem justificativa de trabalho devem ser glosadas.
- **Comprovantes Sem NF:** Canhotos de cartão de débito/crédito sem CNPJ devem ser apontados como pendência documental (glosa preventiva).

### Passo 4: Geração do Formulário Oficial
1. Utilize o modelo disponível em `skill_auditoria_reembolsos/assets/modelo_formulario_prestacao_contas.md`.
2. Substitua os campos com as informações apuradas pelo script determinístico.
3. Salve o documento final com o nome `parecer_prestacao_contas_[nome_colaborador].md`.

### Passo 5: Portão Humano de Decisão (Regra 85/15)
- Apresente um resumo claro na tela para o gestor com:
  1. Total Solicitado vs. Total Aprovado e Total Glosado;
  2. Lista dos itens glosados e os motivos objetivos;
  3. Solicitação de aval humano antes de liberar o pagamento no sistema bancário.
