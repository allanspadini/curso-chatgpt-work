Você trabalha no setor financeiro de uma empresa e recebeu uma pasta contendo notas fiscais de diferentes fornecedores.
Analise todos os documentos e extraia as informações relevantes para uma base consolidada.
Salve o resultado em arquivos JSON separados, um arquivo por nota fiscal, dentro de uma pasta `json/`. Não use Excel como formato padrão.

Cada arquivo JSON deve identificar o arquivo de origem e organizar os dados nestas seções:
- `arquivo`: nome do documento de origem;
- `fornecedor`: `nome` e `cnpj`;
- `nota`: `numero`, `serie`, `data_emissao` no formato `AAAA-MM-DD`, `hora_emissao` quando disponível e `chave_acesso`;
- `destinatario`: `nome` e `cpf_cnpj`;
- `valores`: `produtos`, `servicos` quando houver, `frete`, `desconto`, `impostos` destacados, `tributos_estimados` quando discriminados e `total`;
- `pagamento`: `forma`, `data_vencimento` e `condicao`, quando disponíveis.

Regras de extração:
- Preserve CNPJs, CPFs, números, séries e chaves de acesso como texto, mantendo zeros à esquerda e a formatação legível.
- Registre valores monetários como números decimais em reais.
- Quando um campo não estiver disponível no documento, omita-o ou use `null`; não infira dados ausentes.
- Se houver múltiplos arquivos de origem para a mesma nota, mantenha um JSON por arquivo e informe a duplicidade em `observacao`.
- Valide a sintaxe de todos os JSONs gerados.
