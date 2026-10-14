import React from 'react';
import TitleSlide from '../components/visual/TitleSlide';
import RoadmapSlide from '../components/visual/RoadmapSlide';
import MarketProblemSourcesVisual from '../components/visual/MarketProblemSourcesVisual';
import WorkflowContractAgentsVisual from '../components/visual/WorkflowContractAgentsVisual';
import ExecutionProjectSecurityVisual from '../components/visual/ExecutionProjectSecurityVisual';
import AgentLoopVisual from '../components/visual/AgentLoopVisual';
import SkillProblemExpenseVisual from '../components/visual/SkillProblemExpenseVisual';
import SkillAnatomyVisual from '../components/visual/SkillAnatomyVisual';
import WorkCompressionProblemVisual from '../components/visual/WorkCompressionProblemVisual';
import SeamCompressionVisual from '../components/visual/SeamCompressionVisual';
import DeterministicShellVisual from '../components/visual/DeterministicShellVisual';
import ViewpointSimulatorVisual from '../components/visual/ViewpointSimulatorVisual';
import WorkPrimitivesVisual from '../components/visual/WorkPrimitivesVisual';
import FixTheSkillVisual from '../components/visual/FixTheSkillVisual';
import SkillAntiPatternsVisual from '../components/visual/SkillAntiPatternsVisual';
import SkillEconomyVisual from '../components/visual/SkillEconomyVisual';

export const slidesData = [
  {
    id: 1,
    type: 'title',
    title: 'Processos Agênticos com ChatGPT Work',
    subtitle: 'Aula 3: Engenharia de Skills, Contexto Durável e Delegação Estruturada',
    component: TitleSlide,
    notes: `Sejam muito bem-vindos à terceira aula da nossa disciplina de Processos Agênticos com ChatGPT Work, sob o código [26E4_2], aqui na pós-graduação do Instituto Infnet. Eu sou o Professor Allan Spadini.

Nas nossas duas primeiras aulas, nós construímos os alicerces fundamentais da disciplina: desmistificamos a ilusão de fluência dos modelos de linguagem, entendemos por que um prompt conversacional não resolve problemas de negócio complexos, e aprendemos a governar instruções na máquina local através do arquivo AGENTS.md e da orquestração de subagentes.

Hoje, nós damos o grande salto para a maturidade agêntica: a engenharia de Skills. Uma Skill nada mais é do que empacotar um método de trabalho validado em um formato reutilizável, modular e auditável, para que a sua empresa não precise reinventar a roda a cada nova tarefa.

Porém, antes de entrarmos na sintaxe técnica de arquivos SKILL.md e YAML, eu fiz questão de estruturar o início desta aula com uma prática guiada completa de mercado. Eu conversei com vários de vocês e sei que muitos alunos — especialmente colegas com muita bagagem corporativa e de vida, que não são programadores de formação — sentiram certa insegurança com os conceitos das aulas anteriores. 

Por isso, vamos iniciar com uma prática de consolidação, usando o ChatGPT Work instalado na máquina de vocês, para resolver um problema real de escritório. Ao final desses 3 passos práticos, vocês terão em mãos exatamente as evidências necessárias para gabaritar as oito primeiras rubricas do projeto final da nossa disciplina. Vamos juntos, passo a passo!`
  },
  {
    id: 2,
    type: 'roadmap',
    title: 'Roadmap da Aula 3: Trilha Pedagógica',
    subtitle: 'Da Consolidação Prática de Mercado à Engenharia Formal de Skills Reutilizáveis',
    component: RoadmapSlide,
    notes: `Observem o mapa da nossa jornada de hoje, dividido estrategicamente em 4 módulos interdependentes:

No Módulo 1 — Prática de Mercado & Fixação —, nós começamos no chão de fábrica do escritório. Vamos aplicar todo o ferramental das Aulas 1 e 2 no ChatGPT Work instalado localmente, enfrentando um caso clássico de compras e análise de fornecedores. Essa prática foi desenhada sob medida para que vocês dominem a ferramenta com segurança e preencham com tranquilidade as 8 primeiras rubricas do Projeto da Disciplina: desde a definição pré-IA até a governança de permissões de Apps.

No Módulo 2 — Autonomia & Vocabulário de Skills —, nós construiremos a fundamentação teórica sólida sobre o que é uma Skill. Diferenciaremos formalmente Engenharia de Prompt, Tool Calling e Agentes Autônomos, entendendo o exato nível de independência que uma Skill confere ao sistema.

No Módulo 3 — Anatomia do SKILL.md & Regra 85/15 —, entraremos na engenharia de especificação. Estudaremos o padrão aberto SKILL.md, o cabeçalho YAML com metadados de descoberta, o princípio da Divulgação Progressiva em 3 níveis (para nunca poluir o contexto da IA) e a Regra 85/15, que define o que deve ser automatizado e o que exige julgamento humano.

E no Módulo 4 — Padrões de Trabalho & Primitivas de Skills —, nós estudamos a fundo os padrões avançados do Capítulo 4 do nosso livro-base: a compressão do trabalho intermediário de 40 horas para minutos, a separação entre casca determinística e núcleo dinâmico, os simuladores de pontos de vista para red-teaming, as novas rotinas de brain dumping e despacho matinal com checkpoints, a regra inegociável de corrigir a skill em vez de arrumar a saída na mão, os 5 grandes anti-padrões e a economia corporativa emergente de skills como runbooks vivos.

Vejam que trilha consistente e acolhedora. Vamos iniciar imediatamente pelo Módulo 1 com a nossa prática guiada!`
  },
  {
    id: 3,
    type: 'visual-component',
    title: 'Situação-Problema: Triagem e Auditoria de Fornecedores',
    subtitle: 'Situação-Problema do Mundo Real • A Dor da Análise Manual e o Risco de Alucinação sem Fontes Conectadas',
    component: MarketProblemSourcesVisual,
    notes: `Vejam com atenção o bloco central do nosso slide: esta é a situação-problema real que nós vamos resolver juntos nesta prática.

Pensem comigo: vocês receberam 3 propostas comerciais em PDF com tabelas de custos no meio do texto. Como automatizar a extração dos valores, calcular a soma dos itens e auditar o teto orçamentário de R$ 50.000 sem fazer contas manuais e sem confiar em um chat que alucina números?

Observem os quatro dados do nosso desafio destacados no rodapé do bloco:
Primeiro: a nossa entrada bruta são 3 arquivos PDFs curtos com tabelas (Alpha Tech, Beta Cloud e Gamma Solutions). Vocês já têm esse pacote disponível para download no portal no arquivo propostas_fornecedores.zip.
Segundo: a operação exigida é simples e direta: localizar a tabela de custos dispersa no texto, extrair os itens individuais (como licença, migração, setup e suporte) e somar os valores.
Terceiro: a regra corporativa inegociável da diretoria é o teto de R$ 50.000,00 e o prazo máximo de 60 dias úteis. Propostas que ultrapassarem esse valor devem ser sinalizadas em vermelho!
Quarto: a nossa meta é um parecer executivo comparativo 100% auditável para a tomada de decisão da diretoria.

Para enfrentar esse desafio e já garantir as três primeiras rubricas do projeto de vocês, o passo a passo é simples e acolhedor:

1. Antes de qualquer uso do ChatGPT — atendendo às Rubricas 1.1 e 1.2: abram um editor de texto simples e redijam a intenção e a expectativa da automação. Descrevam o processo de compras, a necessidade de extrair e somar os itens das 3 tabelas e a meta de concluir em 15 minutos com precisão matemática. Logo abaixo, registrem a diferença conceitual: uma conversa exploratória seria pedir 'dicas de como avaliar preços'; já a delegação real é encarregar a ferramenta de ler os 3 PDFs locais, somar as tabelas, checar o teto de 50 mil e gerar o parecer comparativo.

2. O teste de fontes conectadas no Chat simples — atendendo à Rubrica 1.3: façam o teste sem fonte no ChatGPT comum, perguntando sem anexar arquivos 'qual é o valor total somando todos os itens da Alpha Tech?'. O modelo alucina e inventa valores fictícios. Em seguida, no mesmo chat, anexem o PDF oficial da Alpha Tech: o modelo localiza a tabela, extrai os 4 itens, calcula a soma correta de R$ 42.500,00 e cita a Cláusula 4.1 da página do documento.

Tirem um print desse teste comparativo lado a lado e guardem na pasta local. Com isso, vocês liquidam com nota máxima as rubricas 1.1, 1.2 e 1.3!`
  },
  {
    id: 4,
    type: 'visual-component',
    title: 'Prática Guiada: Mapeamento do Fluxo, Contrato Agêntico e AGENTS.md',
    subtitle: 'Arquitetura do Processo • Modelagem do Pipeline em 5 Fases e Governança Local por Código (Passo 2 de 3)',
    component: WorkflowContractAgentsVisual,
    notes: `Agora que provamos na prática a superioridade das fontes autoritativas sobre a alucinação de memória, avançamos para o segundo passo fundamental: estruturar o método e a governança antes de automatizar.

Observem a parte superior do slide. A Rubrica 1.5 do nosso projeto exige explicitamente: o aluno mapeou o fluxo de trabalho antes de propor automatizá-lo? E o que é mapear um fluxo? É responder com precisão cirúrgica a cinco perguntas sequenciais:
1. Qual é o Gatilho? A chegada dos 3 PDFs de propostas comerciais na pasta local de compras.
2. Quais são as Fontes de Entrada? Os arquivos proposta_alpha.pdf, proposta_beta.pdf, proposta_gamma.pdf e o documento interna politica_compras.md.
3. Quais são as Transformações necessárias? Extrair os itens da proposta, tabular valores e prazos, confrontar os preços com o teto de 50 mil reais estabelecido pela diretoria, e cruzar os índices de SLA.
4. Qual é o Formato de Saída? Um relatório executivo em Markdown, chamado parecer_aquisicao.md, contendo uma matriz comparativa e os prós e contras de cada fornecedor.
5. Quem precisa Aprovar o resultado? A alçada humana decisória: o Diretor Financeiro e o Gerente de TI precisam assinar a homologação antes de qualquer contrato ser emitido.

Com esse fluxo desenhado, olhem agora para o card inferior esquerdo: a Rubrica 1.6 exige a redação de um Contrato de Agente completo, contendo Resultado, Contexto e Restrições. E onde nós salvamos esse contrato para quem está usando o ChatGPT Work instalado na própria máquina? No arquivo AGENTS.md, criado na raiz da pasta do projeto!

Vejam a clareza do nosso AGENTS.md:
Na seção Outcome, definimos o entregável: produzir o parecer_aquisicao.md com a tabela comparativa.
Na seção Context, passamos as premissas duráveis: teto orçamentário rígido de 50 mil reais, prazo limite de entrega de 60 dias, e SLA mínimo exigido de 99.5%.
E na seção Constraints — o pilar da segurança —, estabelecemos limites inegociáveis: os arquivos originais dos fornecedores são estritamente somente leitura; o agente está proibido de enviar e-mails ou mensagens para qualquer pessoa; e caso falte alguma informação sobre tributos ou garantias, ele deve parar a execução e solicitar esclarecimento humano.

Por fim, no card inferior direito, atendemos à Rubrica 1.4 estruturando a instrução como uma Especificação de Trabalho completa com Plano de Revisão em 4 Camadas:
Primeira camada: a entrega atende à decisão estratégica da diretoria?
Segunda camada: cada número, data e alíquota bate 100% com a página citada do PDF?
Terceira camada: todos os 3 concorrentes e os 5 critérios de risco foram contemplados?
Quarta camada: a formatação final está limpa, sem links quebrados ou vazamento de dados sigilosos?

Guardem o mapa do fluxo e o arquivo AGENTS.md salvo na pasta do projeto. Eles são as evidências que comprovam as rubricas 1.4, 1.5 e 1.6!`
  },
  {
    id: 5,
    type: 'visual-component',
    title: 'Prática Guiada: Execução no ChatGPT Work, Project e Riscos de Apps',
    subtitle: 'Operação Local • Delegação Orientada a Desfechos, Contexto Durável e Critérios de Aceite (Passo 3 de 3)',
    component: ExecutionProjectSecurityVisual,
    notes: `Chegamos ao terceiro e último passo da nossa prática de fixação: colocar o ChatGPT Work para rodar localmente no computador de vocês, com total governança e segurança.

Olhem para a primeira coluna da tela — atendendo à Rubrica 2.2:
No aplicativo do ChatGPT Work instalado na máquina de vocês, vocês vão clicar em 'New Project' e criar um ambiente com o nome 'Auditoria de Fornecedores 2026'. Dentro desse Project, vocês vão apontar para a pasta local onde estão salvos os PDFs das propostas e o arquivo AGENTS.md que acabamos de redigir. 
Por que isso é chamado na literatura e no exame de 'ambiente de contexto durável'? Porque esses documentos e regras passam a ser o alicerce estável de toda a equipe. Qualquer membro do time que abrir uma nova tarefa dentro desse Project não precisará mais digitar regras do zero; o agente já herda o contexto, a identidade e as restrições automaticamente.

Agora, olhem para a segunda coluna — cumprindo a Rubrica 2.1:
Nós fazemos a escolha consciente entre Chat e ChatGPT Work. Por que não usar o Chat? Porque uma tarefa multi-documento que envolve comparar três propostas, cruzar limites orçamentários e gerar um arquivo estruturado de parecer não cabe em uma conversa turno a turno. Nós acionamos o modo Work e executamos uma delegação real, estabelecendo critérios de aceite explícitos:
Critério 1: Criar tabela comparando preço total, prazo de entrega, SLA e multas contratuais.
Critério 2: Destacar explicitamente qualquer item ou adicional que faça a proposta ultrapassar R$ 50.000,00.
Critério 3: Listar no mínimo dois riscos operacionais para cada um dos três fornecedores.
Critério 4: Formular duas perguntas técnicas pertinentes para envio de esclarecimento ao fornecedor líder.

O ChatGPT Work local entra em ação, percorre os arquivos do seu computador em modo seguro e entrega o arquivo parecer_aquisicao.md totalmente formatado e pronto para inspeção humana.

E na terceira coluna, nós fechamos com chave de ouro a Rubrica 2.2 avaliando criticamente os riscos de permissões de escrita de Apps. Se o seu projeto estiver conectado a um App como Google Drive, SharePoint, Slack ou ERP de compras, você JAMAIS deve conceder permissão de escrita (Write Permissions) em um fluxo novo. Se você der permissão de escrita, o agente poderia inadvertidamente sobrescrever a proposta original do fornecedor ou disparar um e-mail de contratação antes do aval da diretoria. Mantenha o App estritamente em Leitura (Read-Only)!

Vejam o quadro verde ao final da tela: ao concluir esses 3 passos, você terá na pasta do seu projeto as 5 evidências que liquidam com perfeição as 8 primeiras rubricas da disciplina! 

Isso prova para todos vocês que, com método e clareza, a engenharia agêntica é perfeitamente acessível e transforma o trabalho do dia a dia. Agora que dominamos essa base prática, estamos 100% prontos para avançar para o Módulo 2 e aprender o que são Skills!`
  },
  {
    id: 6,
    type: 'visual-component',
    title: 'O Mecanismo de Execução: The Agent Loop',
    subtitle: 'Teoria Rigorosa • O Ciclo Fechado entre Usuário, Modelo de Linguagem e Ferramentas',
    component: AgentLoopVisual,
    notes: `Entramos agora no Módulo 2 da nossa aula, e antes de mergulharmos na prática de Skills, nós precisamos compreender o mecanismo fundamental que separa um simples Chat de um Agente de Trabalho: o que a literatura consagra como The Agent Loop (O Ciclo Agêntico).

Observem com muita atenção o diagrama central da nossa tela: ele representa a dinâmica operacional que roda nos bastidores do ChatGPT Work.

Pensem comigo: como funciona o Chat tradicional que a maioria das pessoas usa?
No Chat comum, a interação é uma linha reta unidirecional: o usuário envia um prompt, o modelo prevê a próxima sequência de palavras e cospe um texto na tela. Se você pedir para conferir 30 recibos ou calcular limites de diárias com regras tributárias, o modelo é obrigado a 'chutar' de cabeça e alucinar, porque ele está isolado do mundo exterior e não tem ferramentas para validar nada.

Agora, olhem para a tela e acompanhem como o Agent Loop resolve isso em 4 etapas circulares:

Primeira etapa — O Prompt: O usuário humano (à esquerda) define a intenção ou entrega os arquivos de entrada para o agente.
Segunda etapa — A Chamada de Ferramenta (Tool Call): A LLM (o bloco central) analisa a instrução e percebe que não deve inventar dados. Ela emite uma chamada de ferramenta — a linha horizontal laranja —, acionando um script de cálculo, uma consulta a documentos ou uma API no computador.
Terceira etapa — O Retorno da Ferramenta (Tool Output): A ferramenta executa a tarefa com precisão matemática e devolve os dados exatos. Olhem o arco superior laranja: ele retorna diretamente para a LLM, que lê o resultado, reavalia a situação e verifica se a meta foi atingida.
Quarta etapa — A Resposta Final (Response): Quando o ciclo de raciocínio e validação termina, a LLM gera a entrega consolidada. Olhem o arco inferior verde: a resposta oficial é entregue ao Usuário, fechando o loop com total governança e sem alucinações.

E o mais importante para quem não é programador: vocês não precisam codificar esse ciclo! O ChatGPT Work gerencia esse loop de forma autônoma.

Agora que dominamos o motor teórico do Agent Loop, vamos ver no próximo slide o problema prático real onde esse mecanismo faz toda a diferença!`
  },
  {
    id: 7,
    type: 'visual-component',
    title: 'Situação-Problema: Prestação de Contas e Reembolsos',
    subtitle: 'Situação-Problema do Mundo Real • A Dor da Conferência Manual de Notas e o Desafio de Empacotar o Método',
    component: SkillProblemExpenseVisual,
    notes: `Agora que entendemos como o Agent Loop funciona na teoria, vamos olhar para uma dor real que acontece em qualquer empresa: a auditoria de prestação de contas e reembolsos de viagens corporativas.

Pensem no dia a dia dos escritórios: todo fim de mês, analistas, consultores, equipes comerciais e executivos que viajaram a trabalho enviam pastas lotadas de comprovantes. São dezenas de recibos de táxi ou aplicativo, cupons fiscais amassados de restaurantes, comprovantes de pedágio e notas fiscais de hospedagem.

Como conferir cada um desses gastos contra as regras internas da organização, barrar despesas indevidas ou proibidas e preencher o formulário oficial em Word exigido pela contabilidade, sem perder dias inteiros somando números na calculadora?

Reparem nos 4 elementos destacados no rodapé do nosso slide:
Primeiro, a nossa Entrada Bruta: um pacote desorganizado com dezenas de recibos, fotos de comprovantes e arquivos em PDF.
Segundo, a Operação Exigida: inspecionar cada item, checar datas, horários de expediente e confrontar com os limites permitidos.
Terceiro, as Regras da Empresa: a política corporativa de despesas, que estipula, por exemplo, o teto de R$ 85,00 para o almoço, proíbe expressamente o reembolso de bebidas alcoólicas e exige que a hospedagem respeite o teto da cidade.
E quarto, a nossa Meta de Entrega: o Formulário Oficial em Word, devidamente preenchido, formatado com o logotipo da empresa e pronto para a assinatura da diretoria.

Agora vem a reflexão de ouro:
Todo departamento financeiro ou controladoria tem um gestor ou auditor sênior experiente. Ele tem o que chamamos de 'julgamento do dia bom'.
Num dia bom, com foco total, esse especialista bate o olho na comanda e repara que há uma cerveja artesanal camuflada no rodízio; ele percebe que a corrida de táxi ocorreu no sábado à meia-noite sem justificativa; ele nota que anexaram um simples canhoto de maquininha sem Nota Fiscal com CNPJ; e ele sabe que em São Paulo a diária do hotel tem teto de R$ 350,00, glosando o excedente.

Mas e quando esse especialista está sobrecarregado, ou quando essa tarefa é delegada para um estagiário ou analista novato? Despesas ilegítimas passam batidas e a empresa toma prejuízo financeiro.

Se você jogar tudo no ChatGPT comum, ele erra somas de centavos e devolve texto solto, quando a contabilidade exige o formulário Word oficial com o logotipo institucional.

É exatamente aqui que entra a engenharia de Skills: como empacotar esse conhecimento do especialista para alimentar o Agent Loop que acabamos de estudar? Vamos ver no próximo slide a anatomia completa de uma Skill!`
  },
  {
    id: 8,
    type: 'visual-component',
    title: 'A Anatomia de uma Skill: O Empacotamento do Método',
    subtitle: 'Solução de Engenharia • Estrutura de Diretórios e a Função dos Arquivos no Padrão Aberto',
    component: SkillAnatomyVisual,
    notes: `No slide anterior, nós sentimos na pele a dor de auditar dezenas de recibos de viagens sem um método padronizado. Agora, olhem para a tela: esta é a solução de engenharia adotada no ChatGPT Work para alimentar o Agent Loop: a Anatomia Canônica de uma Skill.

Para quem não vem da área técnica de programação, a palavra 'Skill' pode parecer um código misterioso. Mas olhem para esta estrutura: uma Skill nada mais é do que uma pasta de arquivos comum no seu computador ou no seu projeto do ChatGPT Work, com um nome descritivo (como /my-skill ou /auditoria-reembolsos), contendo exatamente um arquivo central e três pastas de apoio.

Vamos dissecar cada um desses componentes:

O primeiro item — e o único estritamente obrigatório de toda a estrutura — é o arquivo SKILL.md. Notem que o nome é escrito obrigatoriamente em letras MAIÚSCULAS. Essa é uma convenção rígida para que o sistema do agente localize o arquivo de forma determinística e imediata. Dentro dele, em português claro, fica o 'cérebro' da operação: no topo, um cabeçalho simples chamado YAML com as palavras que avisam o agente quando a skill deve ser usada; e logo abaixo, a receita de bolo completa, passo a passo, registrando o julgamento do especialista num dia bom.

A primeira pasta opcional de apoio chama-se references/. Ela funciona como a biblioteca particular do agente. Aqui dentro colocamos arquivos como style_guide.pdf ou a política de despesas da empresa. Por que isso é uma sacada genial de engenharia? Porque o agente NÃO precisa ler esses manuais o tempo todo! Ele só abre essa pasta se bater uma dúvida pontual sobre uma regra específica. Isso poupa tempo, evita lentidão e não gasta o limite de memória do chat à toa.

A segunda pasta chama-se scripts/. Ela guarda pequenos utilitários executáveis prontos (como validate.py ou convert.sh). E aqui eu reforço: vocês e a equipe de vocês NÃO precisam saber programar! Esses scripts são pequenas calculadoras e validadores automáticos fornecidos prontos. Eles servem para que a inteligência artificial não alucine contas matemáticas de centavos. O agente executa a rotina nos bastidores através do Tool Call que vimos no Agent Loop, e recebe o cálculo exato sem que ninguém precise programar nada.

E a terceira pasta chama-se assets/. Ela é o almoxarifado visual da sua empresa: modelos em Word (.docx) com o cabeçalho oficial da diretoria, logotipos (.png) e temas visuais. O agente pega o modelo Word pronto, preenche as tabelas auditadas e entrega o documento oficial pronto para impressão ou assinatura.

Vejam que elegância: 1 arquivo obrigatório (SKILL.md) e 3 pastas opcionais de apoio (references/, scripts/ e assets/). Agora que compreendemos o ciclo e a anatomia, vamos abrir a pasta prática com os arquivos reais que preparei para vocês resolverem!`
  },
  {
    id: 9,
    type: 'visual-component',
    title: 'Situação-Problema: A Compressão do Trabalho e o Risco de "Reporting Slop"',
    subtitle: 'Situação-Problema do Mundo Real • 50 Entrevistas de Clientes, 40 Horas de Triagem e a Nova Fronteira Agêntica',
    component: WorkCompressionProblemVisual,
    notes: `Entramos agora no nosso Módulo 4, trazendo os padrões avançados de trabalho com Skills diretamente do Capítulo 4 do nosso livro-base. E como manda a nossa metodologia pedagógica central, nós NUNCA começamos pela teoria abstrata. Começamos SEMPRE por uma situação-problema real, do chão de fábrica da gestão corporativa.

Imaginem o seguinte cenário, muito comum na rotina de gerentes de produto, consultores de marketing, analistas de ouvidoria e gestores de RH:
Sua empresa realizou uma pesquisa de satisfação profunda e você tem em mãos cinquenta transcrições de entrevistas qualitativas com clientes. Cada entrevista tem páginas e páginas de conversas com dores, reclamações, sugestões e elogios.

Até 2024, como funcionava esse trabalho?
A equipe precisava passar por uma trilha manual dolorosa em três etapas:
Ponto A: As 50 entrevistas brutas salvas numa pasta.
Ponto B: O gargalo manual (a chamada 'costura do trabalho'). Um analista ou gestor precisava gastar cerca de quarenta horas — uma semana inteira de trabalho estressante — lendo cada transcrição, anotando palavras-chave, preenchendo planilhas de frequência manualmente e tentando consolidar os temas. O ponto B era onde a pessoa sentia que estava 'trabalhando duro'.
Ponto C: O entregável final: um plano de ação executivo com as 5 principais dores ranqueadas e um painel para a diretoria.

Agora, olhem para a nossa pergunta central no slide:
Hoje, com o ChatGPT Work e Skills bem estruturadas, nós conseguimos jogar a pasta com as 50 entrevistas para o agente e obter a síntese e os painéis em menos de dez minutos! Nós colapsamos o Ponto B. O caminho virou diretamente A ➔ C.

Mas aí surge a pergunta de ouro que tira o sono dos diretores:
Como fazer essa compressão espetacular de 40 horas para minutos SEM cair na armadilha do chamado 'Reporting Slop' — que são aqueles relatórios gerados por IA que parecem lindos e profissionais por fora, mas são completamente ocos e sem valor por dentro — e sem abdicar do julgamento e da responsabilidade humana?

Esse é o grande dilema corporativo moderno. Vamos entender no próximo slide a solução de engenharia por trás dessa mudança histórica!`
  },
  {
    id: 10,
    type: 'visual-component',
    title: 'A Compressão da Costura: Do VisiCalc à IA & A Lei da Amplificação',
    subtitle: 'Solução de Engenharia • O Colapso do Trabalho Intermediário (A → C) e o Papel do Julgamento Humano',
    component: SeamCompressionVisual,
    notes: `Para entendermos a solução desse problema, nós precisamos olhar para a história da tecnologia. Nós já vimos esse exato fenômeno acontecer antes no mundo dos negócios!

Olhem para o card da esquerda na nossa tela: em 1979, antes da invenção da planilha eletrônica (o VisiCalc), os contadores e analistas financeiros passavam semanas inteiras calculando livros-razão à mão com lápis, régua e borracha. Se um diretor perguntasse 'e se aumentarmos os preços em 10%?', o analista demorava três dias refazendo todas as linhas e colunas dependentes.

Quando a planilha eletrônica surgiu, o trabalho manual mecânico de somar colunas no papel simplesmente desapareceu. O contador perdeu o emprego? Não! Ele deixou de ser um calculador braçal e se transformou no 'analista financeiro' como conhecemos hoje. Ele passou a rodar dez cenários simulados antes do almoço e a focar no que realmente importa: a estratégia de precificação.

É exatamente isso que está acontecendo agora com as Skills no ChatGPT Work! Olhem para o diagrama central: o Ponto B — que era a costura manual de ler, colar e tabular — dissolve-se em minutos. O trabalho intermediário desapareceu, restando a entrada (A) e o artefato decisório (C).

Mas agora prestem muita atenção na Lei da Amplificação do Julgamento Humano, destacada no quadro da direita:
Uma Skill NÃO substitui o conhecimento de quem a utiliza; ela AMPLIFICA o que você já é!
Um gestor ou analista sênior, com profundo domínio de mercado, usando uma Skill bem projetada, produz dez vezes mais resultados estratégicos com nível sênior. Mas um profissional desatento, sem critérios ou confuso, usando uma Skill, vai produzir dez vezes mais resultados confusos e vazios, só que muito mais rápido!

A ferramenta potencializa o seu julgamento. O que muda não é a inteligência da pessoa, mas a distância entre o pensamento do especialista e o artefato que ele entrega. Vamos ver agora como desenhar Skills que garantem essa qualidade!`
  },
  {
    id: 11,
    type: 'visual-component',
    title: 'Casca Determinística vs. Núcleo Dinâmico & Divulgação Progressiva',
    subtitle: 'Padrões de Autoria de Skills • Separação entre Código Rígido (Shell) e Julgamento em Prosa (Core)',
    component: DeterministicShellVisual,
    notes: `Entramos agora nos padrões práticos de autoria de Skills do Capítulo 4, e o primeiro e mais importante princípio arquitetural é o que chamamos de Casca Determinística versus Núcleo Dinâmico.

Quando você vai criar uma Skill para a sua empresa, você precisa dividir tudo o que acontece nela em duas categorias absolutamente distintas:

De um lado, olhem para o bloco azul à esquerda: a Casca Determinística (o Shell). Aqui fica tudo aquilo que NÃO PODE VARIAR de uma execução para a outra. Por exemplo: o nome e o caminho exato onde o relatório deve ser salvo; o formato rígido das colunas de uma planilha; as fórmulas matemáticas e contábeis que não admitem arredondamentos criativos; e os modelos de documentos Word ou timbrados da diretoria. Essa parte determinística deve ser amarrada com templates fixos na pasta assets/ ou scripts prontos na pasta scripts/. A IA nunca deve tentar 'adivinhar' uma fórmula contábil ou inventar onde salvar um arquivo!

Do outro lado, olhem para o bloco verde à direita: o Núcleo Dinâmico (o Core). Aqui fica tudo aquilo que realmente exige cognição, sensibilidade de negócios e julgamento contextual. É aqui que entra o tom de voz da resposta — se deve ser um comunicado formal para o conselho ou um alinhamento informal para a equipe —, o enquadramento de um risco crítico e a avaliação de trade-offs. Essa parte fica em texto puro, em prosa, dentro do corpo do SKILL.md, para que a LLM possa raciocinar com inteligência.

E como redigir o corpo do SKILL.md? Aplicando a técnica da Divulgação Progressiva como disciplina de escrita. Pensem assim: cada linha que você escreve no SKILL.md cobra um 'imposto de contexto' (gasta tokens e memória do chat). Então, faça a si mesmo a pergunta de ouro para cada frase: 'O agente precisa dessa regra para DECIDIR o que fazer, ou apenas para FAZER BEM FEITO?'.
Se ele precisa apenas para decidir, mantenha no SKILL.md. Se ele só precisa para fazer bem feito depois de acionada a tarefa, jogue para um arquivo separado dentro de references/!

E se bater a dúvida: coloco como arquivo em references/ ou crio uma Skill separada? A regra é cristalina: se for contexto passivo que apenas informa o modelo (como um manual de marca), é um arquivo de referência. Se for uma decisão ativa de negócio com critérios próprios de julgamento, é uma Skill nova. Simples, robusto e elegante!`
  },
  {
    id: 12,
    type: 'visual-component',
    title: 'Simulador de Pontos de Vista & "Não Média seus Especialistas"',
    subtitle: 'Padrões de Autoria de Skills • Red-Teaming, Perspectivas Cirúrgicas e Riscos de Consenso Artificial',
    component: ViewpointSimulatorVisual,
    notes: `O segundo grande padrão de autoria do Capítulo 4 é uma das aplicações mais poderosas que existem no mundo corporativo: o Simulador de Pontos de Vista, focado em 'Red-Teaming' de planos e projetos.

No dia a dia das organizações, quando alguém escreve uma proposta comercial, um plano de reestruturação ou um novo projeto, o erro mais comum ao usar inteligência artificial é pedir: 'ChatGPT, revise este documento e me dê um feedback'.
Essa instrução genérica gera uma resposta morna, elogiosa e superficial.

Em vez disso, o padrão do Simulador de Pontos de Vista ensina você a empacotar papéis de especialistas extremamente afiados e implacáveis em Skills dedicadas.
Olhem para o lado esquerdo da nossa tela:
Você pode ter uma Skill chamada 'Auditor Financeiro Cético', cuja única missão na vida é duvidar das suas projeções de receita, caçar custos ocultos e atacar premissas de ROI otimistas demais.
Ao lado dela, você cria outra Skill: o 'Guardião de Risco & Compliance', que inspeciona o mesmo documento procurando brechas na LGPD, riscos regulatórios e passivos trabalhistas.
E uma terceira: o 'Operador Pragmático de Campo', que questiona se a sua equipe tem braço para implantar o projeto no prazo ou se os clientes vão se revoltar com a mudança de layout.

Agora, olhem para o aviso em vermelho à direita: a regra inegociável 'Don't Average Your Experts' — Não faça a média dos seus especialistas!
A tentação de quem começa a usar IA é tentar juntar as 5 personas dentro do mesmo prompt para simular uma 'reunião de diretoria virtual'. E o que acontece na prática quando você faz isso? Os pesos neurais do modelo misturam as opiniões e produzem um consenso burocrático e aguado! As arestas críticas — que eram justamente onde morava o perigo do projeto — são lixadas e desaparecem.

A boa engenharia de processos ensina: crie Skills separadas para cada olhar crítico, execute uma por vez sobre o seu plano, e você, o líder humano, lê as três avaliações e toma a decisão final com visão panorâmica de 360 graus!`
  },
  {
    id: 13,
    type: 'visual-component',
    title: 'Novas Primitivas de Trabalho: Brain Dumping & Despacho Assíncrono',
    subtitle: 'Novos Padrões Operacionais • O Colapso do Atrito Manual e a Rotina de Checkpoints',
    component: WorkPrimitivesVisual,
    notes: `Depois de dominar os padrões internos de como escrever uma Skill, nós avançamos para a segunda metade do Capítulo 4: como a própria rotina de trabalho dos gestores muda quando essas Skills estão instaladas. Surgem o que o autor chama de 'Novas Primitivas de Trabalho'.

A primeira grande primitiva é o Brain Dumping — o despejo de pensamentos.
Pensem comigo: quantas reuniões na semana você participa onde as pessoas gastam duas horas falando e, no fim, ninguém redige a ata, ninguém cobra as tarefas e tudo se perde?
Com o Brain Dumping, o trabalho muda: você grava um áudio espontâneo de cinco minutos no celular relatando o que precisa ser feito, ou pega a gravação crua de uma reunião, e joga para o ChatGPT Work com a sua Skill de processos. O agente transcreve, filtra o ruído e entrega a ata estruturada com prazos, responsáveis e e-mails de acompanhamento já rascunhados. A dor de ficar redigindo e formatando texto do zero acabou!

E existe a variação genial chamada Brain Dumping Reativo: em vez de agendar uma reunião com 8 diretores para colher feedback de um novo sistema, você envia o link do projeto e pede para cada um gravar um áudio de 2 minutos com suas impressões honestas. Uma Skill processa esses áudios e gera em segundos uma matriz com os pontos de consenso e as principais objeções. Todos foram ouvidos e ninguém perdeu a manhã inteira em reuniões improdutivas.

A segunda primitiva é o Despacho Assíncrono das 6h da Manhã (Async Delegation).
Antes de sair para a sua rotina matinal — tomar seu café, fazer seus exercícios físicos ou levar os filhos na escola —, você dispara quatro ou cinco tarefas independentes no seu ChatGPT Work local: triagem dos e-mails da noite, conferência de notas fiscais, resumo de notícias do setor e atualização de tabelas.
Quando você volta e senta na sua mesa de trabalho às 8h30 ou 9h, o trabalho mecânico já foi concluído pelo agente e está esperando a sua inspeção!

E aqui nós aprendemos a lição de ouro de um cirurgião citado no livro: 'O seu recurso escasso não é o tempo; é a sua capacidade de tomar decisões de qualidade!'.
Você preserva a sua energia mental para os momentos de Checkpoint Humano, onde você avalia os resultados e dá a palavra final.`
  },
  {
    id: 14,
    type: 'visual-component',
    title: 'A Regra de Ouro: Corrija a Skill, Não a Saída',
    subtitle: 'Manutenção e Estado Durável • Ciclos de Auto-Aperfeiçoamento e Gestão de Sessões (status.md)',
    component: FixTheSkillVisual,
    notes: `Chegamos agora a um dos slides mais importantes de todo o nosso curso: a Regra de Ouro da engenharia de processos agênticos: Corrija a Skill, Nunca a Saída Isolada!

Olhem para o card da esquerda. Este é o erro número um que quase todos os profissionais cometem quando começam a trabalhar com agentes:
O ChatGPT Work executa uma tarefa e gera um relatório. Você abre o documento e percebe que ele errou uma alíquota de imposto ou usou uma formatação diferente da que a sua diretoria exige. O que a maioria das pessoas faz?
Abre o Word, altera o texto manualmente na pressa e envia para a diretoria.

Se você fizer isso, você caiu na pior armadilha de produtividade que existe. Sabe por quê? Porque três dias depois, quando você pedir outro relatório, a IA vai cometer exatamente o mesmo erro pela quarta vez! Você gastou o seu conhecimento sênior corrigindo um documento descartável, enquanto a 'fábrica' que produz os documentos continuou com defeito.

Agora, olhem para a postura correta à direita:
Toda vez que a IA cometer um deslize, trate esse erro como um presente! Ele é o sinal claro de que havia uma regra de negócio que estava apenas na sua cabeça e ainda não tinha sido documentada.
O que você faz? Abre o arquivo SKILL.md e insere uma frase de instrução corrigindo a falha, ou pede ao próprio agente: 'Atualize o SKILL.md para que este tipo de erro nunca mais aconteça'.

A partir desse segundo, aquela falha foi eliminada para sempre. Ela nunca mais vai se repetir para você, nem para o seu colega de equipe, nem para ninguém nos próximos cinco anos! A especificação é o único ativo que acumula valor na organização.

E vejam no rodapé do slide o truque operacional do arquivo status.md: quando você estiver trabalhando em projetos longos que duram vários dias, peça ao agente no fim do expediente para resumir o estado em um arquivo status.md (o que foi feito, o que está pendente e onde retomar). Na manhã seguinte, o agente lê esse arquivo e continua exatamente de onde parou em dez segundos!`
  },
  {
    id: 15,
    type: 'visual-component',
    title: 'Os 5 Grandes Anti-Padrões de Skills no Mundo Corporativo',
    subtitle: 'Armadilhas de Implementação • O Lado Sombrio da Automação Ilusória e Como se Proteger',
    component: SkillAntiPatternsVisual,
    notes: `Todo avanço tecnológico traz consigo armadilhas para quem o utiliza sem método. No Capítulo 4, o autor sistematiza os 5 Grandes Anti-Padrões de Skills — hábitos que parecem produtivos por fora, mas sabotam silenciosamente a qualidade do trabalho da sua empresa.

Vamos conhecer cada um deles para blindar a operação de vocês:

O primeiro é a Mega-Skill Monolítica. É aquela skill gigantesca onde alguém tenta fazer tudo num só arquivo: 'leia os e-mails, faça a triagem, calcule as métricas, escreva a proposta, dispare para os clientes e avise no Slack'. Por que isso é um desastre? Porque se houver um erro na primeira etapa, esse erro vai envenenar todo o restante do fluxo e você não terá a oportunidade de inspecionar o resultado intermediário. A regra de ouro é: uma boa Skill tem responsabilidade única! Se você precisa da palavra 'e' para explicar o que ela faz, divida em duas skills.

O segundo anti-padrão é o Reporting Slop — os relatórios vazios. É quando a IA produz um documento visualmente deslumbrante, cheio de tabelas elegantes e linguagem executiva confiante, mas que não tem nenhuma substância ou dado real por trás. É uma camuflagem de competência que induz a erros estratégicos graves.

O terceiro é a Lavagem de Intuição por Score. É quando um analista cria um sistema de pontuação na IA, a IA discorda da intuição dele, e ele fica mexendo nos pesos matemáticos até a IA concordar com o que ele já pensava antes. Isso destrói o valor da análise: a discordância entre a máquina e o seu sentimento de mercado é exatamente a informação mais rica para reflexão!

O quarto é Tratar Saídas como Copiar e Colar. Lembrem-se sempre: toda saída de inteligência artificial é, por definição, um rascunho (um draft). O polimento visual da IA é uma armadilha que faz parecer pronto o que ainda exige conferência humana.

E o quinto é o perigo de Baixar Skills Aleatórias de Estranhos na Internet. Quando você copia uma Skill de um repositório desconhecido para o seu computador, você está dando permissão para um script e um prompt de terceiros rodarem na sua máquina com acesso aos seus documentos locais! Apliquem sempre o nosso checklist de higiene: quem é o autor? Quantas avaliações tem? Você abriu e leu o SKILL.md antes de instalar? Acessa seus dados confidenciais? Se você não instalaria um programa desconhecido no seu computador de trabalho, nunca instale uma Skill sem ler!`
  },
  {
    id: 16,
    type: 'visual-component',
    title: 'A Economia Emergente de Skills: Do Mercado Informal ao Catálogo Corporativo',
    subtitle: 'Evolução Organizacional • Como o Conhecimento se Espalha e Transforma a Carreira Executiva',
    component: SkillEconomyVisual,
    notes: `Chegamos ao nosso último slide da aula de hoje, e ele fecha com chave de ouro a visão estratégica de como as Skills transformam as empresas e a carreira de cada um de vocês: a Economia Emergente de Skills.

Parem para pensar: no final das contas, uma Skill é apenas uma pasta de arquivos com instruções claras em Markdown, modelos e scripts. Mas uma pasta de arquivos é um ativo transferível! No instante em que ela sai do seu computador, ela ganha vida própria na organização.

Nós vemos essa evolução acontecendo em três fases bem nítidas no mercado:

A Fase 1 é o Mercado Informal — o que o livro chama de 'Shadow Skills'. Os colegas de trabalho começam a reparar que você entrega relatórios impecáveis em 15 minutos e passam a te mandar mensagens privadas: 'Oi, você pode me mandar a Skill que você usou para auditar os fornecedores?'. A autoria de boas Skills torna-se uma das maiores fontes de influência e autoridade corporativa da atualidade: você passa a orientar e treinar dezenas de colaboradores sem precisar estar presente na mesma sala!

A Fase 2 é a transição para os Catálogos Corporativos Oficiais. As empresas percebem o valor desse conhecimento e criam repositórios homologados de Skills com governança e controle de versão, como já fazem a Anthropic e as grandes consultorias globais. 'Pedir para a Maria pelo chat' vira 'baixar a Skill oficial da pasta corporativa'.

E a Fase 3 é a consagração das Skills como Runbooks Vivos. Todos nós já sofremos nas empresas com aqueles manuais de procedimentos em PDF esquecidos na intranet que ninguém lê e que ficam desatualizados em dois meses. Uma Skill é um novo tipo de documentação revolucionário: ela é legível por humanos e executável por agentes ao mesmo tempo! Se um procedimento mudar, a Skill falha no primeiro teste, forçando a equipe a atualizar o método imediatamente.

E fechamos com a tese fundamental do nosso curso, estampada na faixa inferior da tela:
O objetivo da engenharia agêntica NUNCA foi afastar o ser humano do trabalho porque ele é descartável. O objetivo é encolher a área de contato do ser humano com a burocracia mecânica, até que TUDO o que você toque no seu dia seja genuinamente estratégico, criativo e insubstituível para a sua organização.

Parabéns a todos por terem completado esta aula com excelência técnica e visão executiva de futuro! Nos vemos na nossa próxima aula!`
  }
];
