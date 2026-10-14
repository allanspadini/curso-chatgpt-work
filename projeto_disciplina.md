Introdução
Um chat assistente ajuda você a pensar, explicar e rascunhar. Um agente de trabalho assume a responsabilidade por um resultado definido: reúne contexto, percorre várias etapas, usa ferramentas aprovadas e devolve algo concreto para revisão. Essa mudança não elimina o julgamento humano, ela o desloca para outro lugar: quem delega o trabalho precisa definir o objetivo, escolher as fontes, estabelecer limites e decidir o que é bom o suficiente para usar.

Um praticante recorre ao ChatGPT Work quando a tarefa envolve múltiplas etapas, fontes diversas ou um entregável revisável, situações em que uma conversa avulsa deixaria de ser suficiente. Skills e Plugins existem para que esse tipo de trabalho não precise ser reinventado a cada vez: uma Skill empacota um método validado em um arquivo que o agente lê e segue; um Plugin conecta o agente a sistemas externos e a outras capacidades instaláveis, de forma governada, com permissões explícitas.

Neste projeto, seu papel é o de responsável por levar um processo real de trabalho, seu ou de uma equipe que você conhece, do estado de tarefa manual até um fluxo delegado, documentado e operando dentro de um workspace do ChatGPT Work. Você escolhe o domínio do processo (um briefing recorrente, uma triagem de mensagens, um relatório periódico, uma automação de documentos), mas o tipo de solução é definido pela disciplina: uma Skill reutilizável, um Plugin configurado e um fluxo de produtividade ou de dados operando de forma governada, com revisão humana nos pontos certos.

Utilizando o ChatGPT com Fontes Externas Conectadas
Antes de qualquer produto ou ferramenta, você precisa de uma base conceitual sólida: um processo real, mapeado, e um contrato de delegação escrito para ele. Este é o ponto de partida do seu projeto.

Escolha um processo recorrente do seu contexto profissional que hoje é feito manualmente ou por meio de conversas avulsas com um assistente de IA. Diferencie explicitamente, para esse processo, o que seria uma simples conversa exploratória e o que seria uma delegação real a um agente de trabalho.

Como primeira etapa escrita do projeto, antes de abrir o ChatGPT: descreva a solução que você pretende construir para esse processo e qual é a sua expectativa para a automação — que problema ela resolve, o que deve mudar na sua rotina de trabalho, e como você vai saber se ela funcionou. Não precisa ser um documento formal, mas precisa ser específico o suficiente para orientar as decisões técnicas das próximas fases, não uma descrição genérica que serviria para qualquer processo.

Antes de qualquer agente, comece ainda no ChatGPT em modo de conversa simples: conecte uma fonte aprovada (por exemplo, o plugin do Google Drive) e peça uma resposta fundamentada nela, somente leitura, sobre um documento real do seu processo. Compare essa resposta com o que você obteria pedindo a mesma coisa sem nenhuma fonte conectada, apenas com o que está na sua cabeça. Esse exercício ainda não é uma delegação a um agente, é a etapa anterior: aprender a fundamentar uma resposta em uma fonte real e confiável antes de automatizar qualquer coisa.

Estruture uma instrução para esse processo como uma especificação de trabalho completa, não como uma pergunta solta, e planeje como você aplicaria uma revisão em camadas ao resultado que essa instrução produziria. Mapeie o fluxo antes de pensar em automatizá-lo: identifique o gatilho, as fontes de entrada, as transformações necessárias, o formato de saída e quem precisa aprovar o quê. A partir desse mapa, redija um contrato de agente completo, com o resultado esperado, o contexto necessário e as restrições que devem ser respeitadas.

O que deve ser evidenciado: a descrição inicial da solução pretendida e da expectativa da automação, a resposta fundamentada em uma fonte conectada obtida ainda em Chat simples (com o comparativo sem fonte conectada), o mapa do processo escolhido e o contrato de agente completo redigido para ele, com resultado, contexto e restrições explícitos.

Escrevendo Skills Reutilizáveis a Partir de uma Delegação Estruturada
Com o contrato definido, é hora de levar o processo para dentro do produto de verdade e transformá-lo em uma Skill reutilizável — esta é a fase mais longa do projeto, e a que integra o maior número de decisões.

Escolha, para o seu processo, entre Chat e ChatGPT Work de acordo com a natureza da tarefa. Delegue então ao ChatGPT Work uma primeira versão real e completa do seu processo, com fontes aprovadas explicitamente indicadas, tratando essa execução como um briefing de trabalho revisável, não como um experimento informal. A partir do resultado obtido, redija uma solicitação de trabalho revisada, com resultado, fontes e restrições explícitos, e defina um limite de ação e critérios de aceite testáveis que qualquer colega conseguiria usar para julgar se o entregável está pronto. Configure um Project no ChatGPT Work como ambiente de contexto durável para esse processo, reunindo os arquivos, instruções e fontes que ele precisa reutilizar a cada execução, e avalie com cuidado os riscos de conceder permissão de escrita a qualquer App conectado que o processo eventualmente precise.

Com a delegação operando, construa o vocabulário de Skill que vai sustentar o restante do projeto: diferencie prompt engineering, tool calling e agente quanto ao nível de autonomia de cada um, e escreva um SKILL.md completo para o seu processo, com frontmatter YAML e divulgação progressiva em três níveis, para não sobrecarregar o agente com informação irrelevante à tarefa do momento. Aplique a regra 85/15 para decidir explicitamente o que nessa Skill deve ser automatizado e o que deve permanecer sob julgamento humano, e valide a Skill com testes usando pelo menos dois casos diferentes antes de considerá-la pronta para compartilhar. Por fim, estruture a versão operacional dessa Skill dentro do ChatGPT Work, a partir do fluxo de trabalho já validado nesta fase, e escreva uma descrição de ativação precisa o suficiente para que o agente saiba reconhecer quando ela deve ser usada.

O que deve ser evidenciado: o Project configurado com o contexto durável do processo, a execução real da delegação estruturada com critérios de aceite explícitos, o SKILL.md testado, e a Skill publicada no ChatGPT Work com sua descrição de ativação.

Construindo um Agente com Skills e Plugins Integrados
O processo já está delegado e empacotado como Skill. Agora você amplia o que ele consegue alcançar, conectando-o a sistemas externos, transformando seus resultados em artefatos confiáveis e tornando-o recorrente.

Comece diferenciando, para o seu processo, o que caracteriza uma Skill e o que caracteriza um Plugin quanto ao propósito de cada um. Avalie então se o processo se beneficia de um conector estruturado, que expõe operações definidas e resultados previsíveis, ou de Computer Use, quando não existe um conector adequado e a tarefa depende de operar diretamente uma interface visual. Configure um Plugin real no ChatGPT Work, relevante para o seu processo, com escopo, permissões e um fluxo de aprovação em camadas definidos de forma explícita antes da instalação, inspirado nos casos completos de onboarding e organização de inbox que a disciplina apresenta como referência. Gerencie o ciclo de vida completo desse Plugin: instale-o conectado a um serviço externo aprovado, documente as permissões concedidas e, ao final do exercício, remova algum plugin de teste que não seja mais necessário para o seu fluxo definitivo.

Com Skills e Plugins operando, garanta que os resultados produzidos sejam artefatos confiáveis. Escolha um artefato de saída do seu processo (um documento, uma planilha ou uma apresentação) e produza-o com arquitetura de conteúdo explícita e revisão em três passagens (investigar, narrar, gerar, revisar). Avalie se o seu processo se presta a funcionar como um fluxo de produtividade no estilo chief de trabalho: configure um mapa de fontes de equipe relevante ao seu contexto, e estruture um briefing decisório organizado por prioridade e ação, com um limiar de mudança relevante definido que justifique gerar um novo briefing em vez de repetir o anterior sem necessidade. Se o seu processo envolve dados, mesmo informais, trate-o como um fluxo de dados completo: perfile a fonte preservando o arquivo original intacto, valide as chaves de junção antes de unir duas fontes diferentes, e estruture o relatório final com rastreabilidade de origem e limitações explícitas.

Para fechar esta fase, defina o seu fluxo de trabalho como uma tarefa recorrente e agendada, com dono explícito e limite de aprovação claro. Se o seu processo produz algum tipo de painel ou relatório vivo, defina o modelo de informação desse dashboard antes de desenhar a interface, priorizando as perguntas reais que quem consulta o painel precisa responder.

O que deve ser evidenciado: o Plugin instalado com escopo e permissões documentados, o artefato de documento produzido com o processo de três passagens, o fluxo de produtividade ou de dados operando com rastreabilidade e limitações explícitas, e o fluxo de trabalho automatizado e agendado.

Implementando Workflows Completos e Governados com Controles de Acesso
Você chega à fase final do projeto: o fluxo que você construiu precisa deixar de depender de você executá-lo manualmente toda vez, e precisa estar pronto para ser compartilhado, avaliado e sustentado por uma equipe.

Adapte o mesmo padrão agêntico que você aplicou ao seu processo às fontes e verificações específicas de uma outra função de negócio da sua organização, mostrando que o padrão generaliza além do caso original. Pensando na equipe que vai herdar esse fluxo, estruture um plano de rollout em estágios para a adoção do que você construiu, e configure papéis e grupos de acesso adequados no ChatGPT Work para quem vai operar ou apenas consultar o resultado. Avalie criticamente pelo menos um App ou Plugin do seu fluxo quanto a permissões e risco, como faria um responsável pela governança de um workspace real.

Para fechar, construa o cartão do fluxo de trabalho completo antes de considerá-lo pronto para operação contínua, revise o resultado final com base em evidências e critérios de aceitação explícitos, e operacionalize o fluxo validado com um dono definido e uma data de auditoria marcada.

O que deve ser evidenciado: a adaptação do padrão a uma outra função, o plano de rollout e de controle de acesso para a equipe, e o cartão de fluxo final com dono e data de auditoria definidos.

Entregáveis
Descreva os entregáveis finais que você deve submeter. Seja específico sobre formato e conteúdo.

1. Artefatos do ChatGPT Work
O Project configurado, a Skill publicada com sua descrição de ativação, o Plugin instalado com escopo documentado e a tarefa agendada, todos exportados ou capturados de forma que o professor consiga verificar cada um sem precisar de acesso ao seu workspace pessoal.

2. Relatório técnico (PDF)
Documento estruturado cobrindo:

Definição do processo escolhido e caracterização do contexto profissional
Decisões técnicas e sua justificativa, fase a fase, do contrato de delegação ao fluxo automatizado final
Resultados obtidos e análise crítica da confiabilidade e do valor do fluxo em operação
Limitações e possíveis melhorias
Nomeie o arquivo seguindo o padrão: nome_sobrenome_automacao-chatgpt-claude_skills-chatgpt-work.pdf

3. SKILL.md e Cartão de Fluxo de Trabalho
O arquivo SKILL.md final da sua Skill, já testado e pronto para compartilhamento, e o cartão de fluxo de trabalho completo produzido na última fase, com dono, gatilho, fontes, limite de aprovação e data de auditoria definidos.

4. Vídeo de Demonstração
Uma gravação em vídeo mostrando você operando o fluxo completo dentro do ChatGPT Work. O vídeo precisa mostrar uma execução real, não roteirizada em texto: a Skill sendo ativada, o Plugin em uso durante a tarefa, e a tarefa agendada ou o resultado final sendo revisado com os critérios de aceitação definidos ao longo do projeto.

Código funcional, isoladamente, não é suficiente. A avaliação considera a qualidade da análise, a coerência das decisões técnicas e a capacidade de justificar escolhas.

Sumário de avaliação
Oculto para estudantes	Não
Participantes	48
Enviado	0
Precisa de avaliação	0
Data de entrega	segunda, 9 nov 2026, 23:59
Tempo restante	27 dias 7 horas
Status da entrega
Esta tarefa aceitará envios a partir de segunda, 9 nov 2026, 07:00
Número da tentativa	Esta é a tentativa 1 (2 tentativas permitidas).
Status da entrega	Nenhuma tentativa
Status da avaliação	Não avaliado
Data de entrega	segunda, 9 nov 2026, 23:59
Tempo restante	27 dias 7 horas
Rubrica	
Template de Rubrica para ser utilizado com a extensão Rubricator

1. Utilizar o ChatGPT com fontes externas conectadas e um contrato para delegação a um agente
 O aluno descreveu, antes de qualquer uso do ChatGPT, a solução pretendida e a expectativa da automação de forma específica ao seu processo?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
1. Utilizar o ChatGPT com fontes externas conectadas e um contrato para delegação a um agente
 O aluno diferenciou, para o processo escolhido, uma conversa exploratória de uma delegação real?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
1. Utilizar o ChatGPT com fontes externas conectadas e um contrato para delegação a um agente
 O aluno fundamentou uma resposta do ChatGPT em uma fonte conectada aprovada, ainda em Chat simples, e comparou com uma resposta sem fonte?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
1. Utilizar o ChatGPT com fontes externas conectadas e um contrato para delegação a um agente
 O aluno estruturou uma instrução como especificação de trabalho completa, com plano de revisão em camadas?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
1. Utilizar o ChatGPT com fontes externas conectadas e um contrato para delegação a um agente
 O aluno mapeou o fluxo de trabalho (gatilho, fontes, transformações, saída, aprovações) antes de propor automatizá-lo?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
1. Utilizar o ChatGPT com fontes externas conectadas e um contrato para delegação a um agente
 O aluno redigiu um contrato de agente completo com resultado, contexto e restrições?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
2. Escrever skills reutilizáveis a partir de uma delegação estruturada e testada no ChatGPT Work
 O aluno escolheu entre Chat e ChatGPT Work e executou uma delegação real com fontes, restrições e critérios de aceite explícitos?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
2. Escrever skills reutilizáveis a partir de uma delegação estruturada e testada no ChatGPT Work
 O aluno configurou um Project como ambiente de contexto durável e avaliou os riscos de permissão de escrita de um App?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
2. Escrever skills reutilizáveis a partir de uma delegação estruturada e testada no ChatGPT Work
 O aluno diferenciou prompt engineering, tool calling e agente quanto à autonomia?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
2. Escrever skills reutilizáveis a partir de uma delegação estruturada e testada no ChatGPT Work
 O aluno escreveu um SKILL.md completo com frontmatter YAML e divulgação progressiva, aplicando a regra 85/15?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
2. Escrever skills reutilizáveis a partir de uma delegação estruturada e testada no ChatGPT Work
 O aluno validou a Skill com testes em pelo menos dois casos antes de publicá-la no ChatGPT Work com uma descrição de ativação precisa?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
3. Construir um agente no ChatGPT Work com skills e plugins integrados para produtividade, documentos, dados e automações recorrentes
 O aluno diferenciou Skill de Plugin quanto ao propósito antes de escolher entre conector estruturado e Computer Use?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
3. Construir um agente no ChatGPT Work com skills e plugins integrados para produtividade, documentos, dados e automações recorrentes
 O aluno configurou um Plugin real com escopo, permissões e fluxo de aprovação em camadas definidos, e gerenciou seu ciclo de vida completo (instalação, permissões, remoção)?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
3. Construir um agente no ChatGPT Work com skills e plugins integrados para produtividade, documentos, dados e automações recorrentes
 O aluno produziu um documento com arquitetura de conteúdo e revisão em três passagens?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
3. Construir um agente no ChatGPT Work com skills e plugins integrados para produtividade, documentos, dados e automações recorrentes
 O aluno configurou um mapa de fontes de equipe e estruturou um briefing decisório com limiar de mudança relevante?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
3. Construir um agente no ChatGPT Work com skills e plugins integrados para produtividade, documentos, dados e automações recorrentes
 O aluno perfilou uma fonte de dados preservando o original, validou chaves de junção e estruturou um relatório com rastreabilidade e limitações?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
3. Construir um agente no ChatGPT Work com skills e plugins integrados para produtividade, documentos, dados e automações recorrentes
 O aluno definiu o fluxo como tarefa recorrente e agendada com dono e aprovação, e definiu o modelo de informação de um dashboard quando aplicável?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
4. Implementar workflows completos e governados no ChatGPT Work, com controles de acesso e avaliação crítica de risco
 O aluno adaptou o padrão agêntico do seu processo às fontes e verificações de uma outra função de negócio?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
4. Implementar workflows completos e governados no ChatGPT Work, com controles de acesso e avaliação crítica de risco
 O aluno estruturou um plano de rollout em estágios e configurou papéis e grupos de acesso para a equipe?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
4. Implementar workflows completos e governados no ChatGPT Work, com controles de acesso e avaliação crítica de risco
 O aluno avaliou criticamente um App ou Plugin quanto a permissões e risco?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
4. Implementar workflows completos e governados no ChatGPT Work, com controles de acesso e avaliação crítica de risco
 O aluno construiu o cartão de fluxo final, revisou o resultado com evidências e critérios de aceitação, e operacionalizou o fluxo com dono e data de auditoria definidos?	
Não demonstrou o item de rubrica
Demonstrou o item de rubrica
