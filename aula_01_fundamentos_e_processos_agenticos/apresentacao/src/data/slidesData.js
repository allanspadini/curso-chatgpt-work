import React from 'react';
import TitleSlide from '../components/visual/TitleSlide';
import InstructorSlide from '../components/visual/InstructorSlide';
import RoadmapSlide from '../components/visual/RoadmapSlide';
import IllusionOfFluencyVisual from '../components/visual/IllusionOfFluencyVisual';
import LLMProbabilityVisual from '../components/visual/LLMProbabilityVisual';
import FourHabitsVisual from '../components/visual/FourHabitsVisual';
import WorkSpecVisual from '../components/visual/WorkSpecVisual';
import FourPropertiesVisual from '../components/visual/FourPropertiesVisual';
import ContextInspector from '../components/interactive/ContextInspector';
import TurnBottleneckVisual from '../components/visual/TurnBottleneckVisual';
import TurnVsOutcomeVisual from '../components/visual/TurnVsOutcomeVisual';
import ConnectedContextVisual from '../components/visual/ConnectedContextVisual';
import ChatVsWorkComparator from '../components/interactive/ChatVsWorkComparator';
import AgentContractVisual from '../components/visual/AgentContractVisual';
import AgentContractBuilder from '../components/interactive/AgentContractBuilder';
import WorkflowMappingVisual from '../components/visual/WorkflowMappingVisual';
import ReversibilityVisual from '../components/visual/ReversibilityVisual';
import ReversibilityMatrixSimulator from '../components/interactive/ReversibilityMatrixSimulator';
import LayeredReviewVisual from '../components/visual/LayeredReviewVisual';
import MaturityLadderVisual from '../components/visual/MaturityLadderVisual';
import FixationQuiz from '../components/interactive/FixationQuiz';

export const slidesData = [
  {
    id: 1,
    type: 'title',
    title: 'Processos Agênticos com ChatGPT Work',
    subtitle: 'Aula 1: Fundamentos de IA, Mudança de Paradigma e Engenharia de Workflows Agênticos',
    component: TitleSlide,
    notes: `Sejam muito bem-vindos à nossa pós-graduação no Instituto Infnet. Eu sou o Professor Allan Spadini e hoje iniciamos a disciplina de Processos Agênticos com ChatGPT Work, sob o código [26E4_2].

Esta aula inaugural marca uma transição essencial de maturidade técnica e profissional. Nos últimos anos, o mercado se acostumou a interagir com modelos de linguagem como meros assistentes de bate-papo: você digita uma dúvida, recebe um texto, tenta corrigir no turno seguinte e faz o trabalho braçal de copiar, colar e formatar os dados.

O ChatGPT Work, integrado à infraestrutura do Codex e aos conectores corporativos da OpenAI, representa uma ruptura estrutural com essa dinâmica ingênua. Não estamos mais lidando apenas com um bot que responde a turnos de conversa. Estamos projetando e operando agentes autônomos orientados a desfechos — isto é, sistemas capazes de receber um contrato de delegação bem definido, consultar ferramentas autenticadas onde o trabalho da empresa realmente reside, raciocinar em múltiplas etapas intermediárias e devolver um artefato pronto, auditável e homologável.

Ao longo desta disciplina, construiremos uma ponte rigorosa entre a teoria probabilística dos modelos de linguagem e a engenharia de software aplicada a fluxos corporativos. Vamos aprender a especificar o trabalho com precisão cirúrgica, a delimitar o contexto para erradicar o ruído, a calibrar a autonomia do agente com base no Princípio da Reversibilidade e a instituir portões de auditoria humana onde a responsabilidade legal e operacional for decisiva. Vamos dar início à nossa jornada!`
  },
  {
    id: 2,
    type: 'instructor',
    title: 'Apresentação do Docente',
    subtitle: 'Prof. Dr. Allan Segovia-Spadini • Trajetória Acadêmica e Atuação em Engenharia de IA',
    component: InstructorSlide,
    notes: `Gostaria de me apresentar formalmente para que vocês conheçam a bagagem acadêmica e prática que sustentará nossas aulas.

Sou o Allan Segovia-Spadini. Minha formação de pós-graduação foi construída no Instituto de Astronomia, Geofísica e Ciências Atmosféricas da Universidade de São Paulo (USP), onde concluí meu mestrado e meu doutorado em Ciências na área de Geofísica Aplicada e Computacional, com período de estágio de doutorado sanduíche na Delft University of Technology (TU Delft), na Holanda. 

No meu percurso de pesquisa acadêmica, sempre trabalhei com métodos numéricos, processamento digital de sinais e imagens, inversão tomográfica de dados e formulação estatística avançada. Quando a revolução do Deep Learning e dos Grandes Modelos de Linguagem ganhou força, essa base quantitativa me permitiu transitar com naturalidade para a Ciência de Dados, o Machine Learning e, mais recentemente, para a arquitetura de sistemas agênticos.

Minha atuação profissional e de pesquisa concentra-se na modelagem estatística, Machine Learning, Deep Learning e na engenharia de sistemas agênticos com Grandes Modelos de Linguagem. Aqui na Faculdade Infnet, conduzo com muito orgulho esta disciplina avançada de Processos Agênticos com ChatGPT Work.

O meu compromisso com vocês é claro: não ficaremos em 'receitas de bolo' superficiais ou dicas mágicas de prompt. Trataremos os modelos agênticos com rigor de engenharia: entendendo a matemática por trás da amostragem, modelando os grafos de tarefas, programando conectores seguros e implementando governança empresarial sólida.`
  },
  {
    id: 3,
    type: 'roadmap',
    title: 'Roadmap da Aula 1: Trilha Pedagógica',
    subtitle: 'Da Teoria Probabilística à Orquestração de Agentes Orientados a Desfechos',
    component: RoadmapSlide,
    notes: `Vejamos o mapa de navegação da nossa aula de hoje. Para estruturar o conteúdo de forma sólida, dividimos nossa sessão em 4 blocos interdependentes:

No Módulo 1 — Fundamentos de IA e a Natureza dos LLMs —, começamos pela dor prática da indústria: por que prompts pontuais falham miseravelmente em ambientes corporativos? Analisaremos o mecanismo autorregressivo de predição de tokens e formalizaremos os 4 hábitos duráveis da nossa metodologia de engenharia de interação com IA.

No Módulo 2 — A Grande Virada: Chat vs. Work —, investigaremos o gargalo da orquestração manual turno a turno. Veremos a ruptura que o ChatGPT Work traz ao mudar a unidade de delegação de 'turn' para 'outcome', bem como a transição do contexto fornecido estático para o contexto conectado via plugins e conectores corporativos.

No Módulo 3 — Engenharia de Contratos e Mapeamento de Workflows —, aprenderemos a modelar o fluxo de negócio antes de encostar em qualquer ferramenta de IA. Dissecaremos os 4 pilares do Contrato Agêntico: Desfecho, Contexto, Restrições e Critérios de Aceitação.

Por fim, no Módulo 4 — Reversibilidade, Governança e Maturidade —, formalizaremos o Princípio da Reversibilidade para calibrar a autonomia do agente, desenharemos portões Human-in-the-Loop (HITL), aprenderemos o protocolo de revisão em 6 camadas e traçaremos a esteira de maturidade agêntica em 4 fases.

Em cada bloco, contaremos com laboratórios visuais e simuladores interativos para fixar os conceitos com aplicação prática direta.`
  },
  {
    id: 4,
    type: 'visual-component',
    title: 'A Ilusão da Fluência: O Colapso dos Prompts Pontuais',
    subtitle: 'Situação-Problema do Mundo Real • A Dor Prática da Eloquência sem Ancoragem',
    component: IllusionOfFluencyVisual,
    notes: `Vamos iniciar com a nossa Situação-Problema do Mundo Real: por que a abordagem amadora de 'tentar prompts criativos' quebra tão rápido quando levada para fluxos de negócio na indústria?

A primeira grande dor prática enfrentada por equipes corporativas é o que chamamos de 'A Ilusão da Fluência'. Quando um analista digita um prompt vago como 'analise estas propostas e me dê um relatório', o modelo responde com parágrafos elegantes, vocabulário rebuscado, excelente coesão gramatical e um tom extremamente assertivo. O cérebro humano é evolutivamente treinado para associar eloquência verbal à competência técnica e veracidade factual.

Contudo, ao inspecionar os detalhes, surgem alucinações silenciosas: números trocados, premissas não informadas inventadas pelo modelo, metas obsoletas aplicadas como vigentes e citações fantasmas. 

O resultado operacional é devastador: o operador humano gasta mais horas checando cada linha, tentando detectar inconsistências sutis e reescrevendo comandos do que gastaria redigindo o relatório por conta própria. Gera-se uma fadiga extrema do operador, associada a uma tremenda fragilidade de execução: se uma palavra for alterada no prompt no dia seguinte, a saída pode mudar de forma imprevisível.

Essa dor prática prova que prompts pontuais não sustentam processos de negócios. Precisamos de especificações formais de trabalho e ancoragem factual inegociável.`
  },
  {
    id: 5,
    type: 'visual-component',
    title: 'A Natureza dos LLMs: Padrões Estatísticos sem Consciência',
    subtitle: 'Formalismo Teórico • Amostragem Autorregressiva vs. Sistemas de Registro',
    component: LLMProbabilityVisual,
    notes: `Para solucionar esse problema com mentalidade de engenharia, precisamos entender o que um modelo de linguagem realmente é por baixo do capô.

Matematicamente, um Large Language Model opera sob o mecanismo autorregressivo de previsão do próximo token. Dada uma sequência de entrada composta pelo prompt e pelo histórico de contexto C, a rede projeta os estados ocultos em logits z_t no espaço do vocabulário e calcula uma distribuição de probabilidade através de uma função softmax escalada por uma temperatura tau:
P(w_t | w_1, ..., w_{t-1}, C) = softmax(z_t / tau).

O modelo otimiza exclusivamente a verossimilhança estatística de padrões linguísticos que ele observou em petabytes de dados de pré-treinamento. Ele não 'sabe' o que é um balanço patrimonial, ele não tem experiência de chão de fábrica, ele não possui responsabilidade civil ou legal sobre uma decisão equivocada, e ele não possui nenhuma consciência situacional dos stakeholders da sua empresa, a menos que você forneça essa informação de forma estruturada.

Por isso, guardem com vocês a Regra de Ouro da disciplina: 'Confiança de Expressão não é evidência de Exatidão Factual'. A segurança e o tom firme da resposta decorrem apenas da convergência probabilística dos pesos neurais. A exatidão factual, por outro lado, decorre unicamente da ancoragem estrita em fontes e evidências autoritativas.`
  },
  {
    id: 6,
    type: 'visual-component',
    title: 'Os 4 Hábitos Duráveis da Interação com IA',
    subtitle: 'Solução de Engenharia • Os 4 Hábitos Duráveis da Interação Corporativa',
    component: FourHabitsVisual,
    notes: `Como contornamos a limitação probabilística dos modelos e garantimos previsibilidade em ambiente de produção? A resposta da engenharia reside na adoção de quatro hábitos duráveis, estabelecidos nas melhores práticas de engenharia agêntica:

Hábito 1: Instruções Claras. Em vez de comandos vagos ou subjetivos, tratamos cada interação como uma especificação compacta de trabalho, definindo meta, público, formato e limites.

Hábito 2: Contexto Delimitado. Mais arquivos não geram uma resposta melhor; geram ruído e contradições cognitivas. O contexto deve ser selecionado cirurgicamente, priorizando fontes oficiais e declarando a precedência entre elas.

Hábito 3: Revisão em Camadas. Não fazemos um 'olhar rápido de diagramação'. Conduzimos uma auditoria estruturada: confrontando números contra as fontes, caçando omissões de casos extremos e separando fatos verificados de inferências feitas pela IA.

Hábito 4: Uso Responsável Situacional. Governança aplicada caso a caso. Avaliamos a sensibilidade dos dados, as políticas de conformidade do workspace corporativo e o impacto potencial de erro em cada etapa do processo.

Para enxergar o poder desses quatro hábitos, cliquem na aba 'Caso Prático: Refatoração do Prompt' no topo do slide. Imaginem uma transcrição de reunião real de alinhamento logístico entre Carlos, Mariana e Roberto: Mariana rescinde com a TransLog e migra para a RápidoExpress até 22 de agosto; Roberto aprova orçamento emergencial de R$ 45.000; Carlos propõe RFID nas docas e Mariana propõe turno da madrugada, mas não há responsável nem prazo definidos para a cotação; e a licença ambiental de Curitiba segue travada no jurídico.

Se o analista digitar o prompt informal típico: 'Resuma tudo e monte o relatório executivo.', o modelo entrará em colapso nos 4 hábitos: não saberá o formato exigido pela diretoria, alucinará premissas não ditas, tratará meras sugestões como se fossem decisões aprovadas (gerando desinformação operacional) e criará minutas externas sem salvaguarda de governança.

Em contrapartida, vejam a especificação de engenharia adotando os 4 hábitos:
1. Instruções Claras: Relatório de 1 página para a Diretoria estruturado em 4 seções fixas (Decisões Homologadas, Ações/Prazos/Responsáveis, Propostas em Avaliação, Questões em Aberto).
2. Contexto Delimitado: Confinado estritamente à transcrição, declarando 'Pendente / Não especificado' onde não houver responsável ou prazo.
3. Revisão em Camadas: Rastreamento estrito de valores (R$ 45.000 e prazo de 22/08) e isolamento da pendência da licença jurídica.
4. Uso Responsável: Uso interno restrito, proibindo minutas ou contatos externos sem aprovação prévia.

Ao alternarem para a visualização do 'Relatório Gerado', vejam a precisão cirúrgica do entregável: zero ambiguidade, total rastreabilidade e prontidão imediata para tomada de decisão pela liderança.`
  },
  {
    id: 7,
    type: 'visual-component',
    title: 'O Prompt como Especificação de Trabalho (Work Specification)',
    subtitle: 'Engenharia de Instrução • Substituindo Perguntas Vagas por Contratos Executáveis',
    component: WorkSpecVisual,
    notes: `Vamos dissecar o primeiro hábito: transformar o prompt em uma verdadeira Especificação de Trabalho — uma 'Work Specification'.

Reparem no contraste gritante exibido no slide. Quando alguém escreve: 'Resuma as notas da reunião de ontem', o modelo é forçado a assumir premissas não declaradas. Ele não sabe quem vai ler, qual decisão estratégica depende desse resumo, quais dados são confidenciais e quais são irrelevantes. Ele gera um texto prolixo e inútil para a diretoria.

Agora observem a Especificação de Trabalho rigorosa: 'Com base apenas nas notas anexas, gere um briefing de decisão de 1 página para o Diretor de Operações. Separe decisões confirmadas de propostas abertas. Identifique responsável e prazo de cada ação. Indique 'não especificado' quando faltar dado. Finalize com tabela de rastreabilidade de fontes.'

Uma boa especificação responde compulsoriamente a 6 perguntas fundamentais:
1. Qual o desfecho concreto (Outcome)?
2. Quem é a audiência e qual ação ou decisão depende do documento?
3. Quais são as fontes de verdade autorizadas?
4. Quais são as fronteiras estritas de escopo e inclusões/exclusões?
5. Qual a mídia e o formato estrutural esperado?
6. Como o auditor humano inspecionará o resultado?

Quando a especificação é bem construída, não dependemos de adivinhações do modelo.`
  },
  {
    id: 8,
    type: 'visual-component',
    title: 'As 4 Propriedades do Contexto Forte',
    subtitle: 'Teoria e Prática de Engenharia de Contexto • Sinal vs. Ruído nos LLMs',
    component: FourPropertiesVisual,
    notes: `Passamos agora ao segundo hábito: o gerenciamento de contexto. Em engenharia de sistemas agênticos, há uma armadilha clássica: achar que quanto maior a janela de contexto do modelo, mais arquivos devemos anexar indiscriminadamente. Isso é um erro grave que degrada a atenção do Transformer e eleva exponencialmente o risco de alucinação.

Um conjunto de contexto forte deve possuir rigorosamente quatro propriedades:

Primeira: Autoritativo. As informações devem ser provenientes dos sistemas oficiais de registro da organização — ERP, atas homologadas, repositórios auditados —, nunca de notas soltas ou rascunhos informais.

Segunda: Atual. A vigência temporal de cada arquivo deve estar explícita. Se você anexar uma diretriz de 2023 junto a uma de 2026 sem rotular as datas, o modelo pode fundir as duas ou aplicar uma regra revogada.

Terceira: Delimitado (Scoped). Selecione apenas a evidência que altera a decisão. Trechos cirúrgicos eliminam contradições e mantêm o modelo focado no que importa.

Quarta: Interpretável. As siglas corporativas, convenções contábeis e nomenclaturas internas devem ser mapeadas em um glossário claro para evitar falsas inferências semânticas.

E lembrem-se da nossa regra de governança para conflitos: se duas fontes oficiais divergirem, exija que a IA aponte a contradição explicitamente em vez de forçar um consenso artificial.`
  },
  {
    id: 9,
    type: 'interactive',
    title: 'Laboratório Interativo 1: Inspetor de Contexto',
    subtitle: 'Simulador Dinâmico • Avaliação de Fidelidade, Conflitos e Risco de Alucinação',
    component: ContextInspector,
    notes: `Convido todos a interagirem agora com o nosso primeiro laboratório prático: o Inspetor de Contexto.

Neste simulador, modelamos uma demanda executiva real: a geração de um briefing de orçamento para expansão de infraestrutura de TI. À esquerda, vocês encontram os seletores para as 4 propriedades do contexto: Autoritativo, Atual, Delimitado e Interpretável.

Experimentem desligar a propriedade 'Atual'. Notem como a barra de fidelidade cai imediatamente e o simulador exibe na saída do agente que ele aplicou o teto orçamentário obsoleto de 2023, criando um passivo financeiro na proposta!

Agora desliguem 'Autoritativo'. O agente passa a citar opiniões colhidas em fóruns informais como se fossem políticas deliberadas pela diretoria.

Reparem no indicador inferior: quando as 4 propriedades estão ligadas, a fidelidade atinge 100%, os números são estritamente ancorados na ata oficial e os dados ausentes são rotulados honestamente como 'não especificado'.

Essa dinâmica ilustra por que o papel do engenheiro de IA em ChatGPT Work não é 'escrever texto bonito', mas sim atuar como um curador implacável da qualidade da evidência fornecida ao sistema.`
  },
  {
    id: 10,
    type: 'visual-component',
    title: 'O Gargalo Conversacional: A Prisão do Turno a Turno',
    subtitle: 'Situação-Problema do Mundo Real • A Fadiga do Operador como Barramento Manual de Dados',
    component: TurnBottleneckVisual,
    notes: `Vamos examinar agora a segunda grande dor prática da indústria, que prepara o terreno para a introdução do ChatGPT Work: o gargalo do modelo conversacional tradicional, ou a 'Prisão do Turno a Turno' (Turn Trap).

No uso cotidiano de interfaces de chat simples, o usuário humano acaba virando um 'escravo operacional' do fluxo de trabalho. Observem o ciclo:
No turno 1, você faz uma pergunta preliminar. A IA responde de forma genérica.
No turno 2, você precisa sair da janela do chat, abrir o Google Drive da empresa, encontrar a proposta comercial mais recente, baixá-la no disco, voltar ao chat e anexar o PDF.
No turno 3, você nota que a IA usou valores errados, então você abre o Slack, copia as discussões recentes da equipe de engenharia e cola outro bloco de texto pedindo correções.
No turno 4, o modelo gera uma tabela longa em texto, mas você ainda tem que copiar aquilo, abrir o Word ou o Excel e diagramar o relatório final manualmente.

Percebam a ironia: a IA gerou o texto em frações de segundo, mas o fluxo inteiro de trabalho demorou 40 minutos porque o operador humano foi o barramento manual de dados entre ferramentas e o agendador de tarefas.

É exatamente esse gargalo que o ChatGPT Work foi projetado para eliminar.`
  },
  {
    id: 11,
    type: 'visual-component',
    title: 'A Grande Virada: De Conversação a Desfecho Delegado',
    subtitle: 'Solução de Engenharia • Arquitetura Comparativa: Chat vs. ChatGPT Work',
    component: TurnVsOutcomeVisual,
    notes: `Chegamos ao ponto de inflexão da nossa aula: a grande virada de paradigma entre o Chat tradicional e o ChatGPT Work.

No Chat tradicional, a unidade de trabalho é o Turno (Turn). Cada interação exige que o humano analise a saída, decida o próximo passo, forneça novos dados e mantenha o raciocínio na própria cabeça. É um ambiente fantástico para brainstorming, exploração aberta de ideias e redação de e-mails rápidos.

No ChatGPT Work, a unidade de trabalho é o Desfecho (Outcome). O agente recebe a responsabilidade de conduzir um processo multi-etapas com início, meio e fim. Ele elabora internamente um plano de execução, consulta as ferramentas conectadas homologadas, inspeciona arquivos estruturados, valida suas próprias etapas e entrega um artefato completo — uma planilha auditada, uma apresentação com narrativa consistente ou um relatório técnico.

Reparem que isso não elimina o julgamento humano. Pelo contrário: eleva o julgamento humano para o nível estratégico. Em vez de perder tempo com micro-comandos de cópia e cola, o profissional passa a definir o Contrato de Trabalho, estabelecer as fronteiras de segurança e auditar o artefato final entregue pelo agente.`
  },
  {
    id: 12,
    type: 'visual-component',
    title: 'Do Contexto Fornecido ao Contexto Conectado',
    subtitle: 'Engenharia de Sistemas • Integração Autenticada via Plugins e Conectores Corporativos',
    component: ConnectedContextVisual,
    notes: `Para que um agente consiga entregar um desfecho autônomo na prática corporativa, ele não pode depender de uploads manuais em cada sessão. É aqui que entra a evolução do 'Contexto Fornecido' para o 'Contexto Conectado'.

O Contexto Fornecido é estático: você pega um arquivo que está no seu computador e sobe para o chat. Ele representa apenas um retrato congelado naquele minuto. Se um colega de equipe atualizar a proposta no Drive dez minutos depois, o chat continuará operando sobre a versão velha.

O ChatGPT Work introduz o Contexto Conectado por meio de Plugins e Conectores de Workspace. O agente conecta-se via OAuth autenticado diretamente aos repositórios onde o trabalho corporativo acontece: Google Drive (Docs, Sheets, Slides), Slack, Teams, Jira, GitHub e bancos de dados institucionais.

Mais importante ainda: toda essa conectividade opera sob rigorosa governança empresarial. O plugin não dá ao agente acesso irrestrito; ele herda com exatidão os privilégios do usuário logado e as políticas de segurança da organização. Além disso, adotamos a regra de engenharia de priorizar ações estritamente de leitura (read-only) em fases iniciais, impedindo alterações acidentais em arquivos compartilhados.`
  },
  {
    id: 13,
    type: 'interactive',
    title: 'Laboratório Interativo 2: Comparador Chat vs. Work',
    subtitle: 'Simulador Dinâmico • Comparação de Esforço Cognitivo, Fluxo de Estados e Automação',
    component: ChatVsWorkComparator,
    notes: `Vamos testar essa mudança de mentalidade na prática no nosso segundo laboratório interativo: o Comparador Chat vs. Work.

No topo da tela, vocês podem escolher entre dois casos clássicos de negócios: a elaboração de um Briefing de Reunião com Cliente ou o Onboarding de um Cliente Enterprise. 

Ao clicarem no botão 'Simular Comparação', observem como a execução se desenrola passo a passo nas duas colunas. À esquerda, no modo Chat, o humano precisa intervir em cada um dos 5 turnos: subindo arquivos, pedindo correções, copiando textos e diagramando na mão. O risco de fadiga é altíssimo.

À direita, no ChatGPT Work, o operador dispara um único contrato estruturado com menções aos conectores necessários (@Google Drive e @Slack). O agente assume a execução em cadeia: localiza o arquivo mais recente, cruza as decisões pendentes, produz o artefato nativo e estaciona com segurança no portão de homologação humana.

O tempo economizado chega a 75%, e o índice de rastreabilidade salta para 100%. É essa a diferença entre 'brincar de conversar com a IA' e 'delegar trabalho com padrão de engenharia'.`
  },
  {
    id: 14,
    type: 'visual-component',
    title: 'O Contrato do Agente: Os 4 Pilares de Delegação',
    subtitle: 'Engenharia de Contratos • A Estrutura Formal de Delegação Agêntica',
    component: AgentContractVisual,
    notes: `Como garantimos que o agente execute exatamente o que a organização precisa, sem fugir do escopo ou tomar decisões perigosas? A resposta da engenharia é o Contrato do Agente (Agent's Contract), desenvolvido na nossa metodologia de governança agêntica.

Um contrato de delegação substitui suposições por quatro pilares formais e inegociáveis:

1. Desfecho (Outcome): O estado final acabado e observável. Nunca instrua com verbos vagos como 'pense sobre o projeto'. Declare o artefato: 'Um plano de marcos e riscos em Markdown com 5 seções estruturadas'.

2. Contexto (Context): Todas as fontes oficiais e parâmetros de negócio que o agente necessita para interpretar as regras: atas homologadas, canal de comunicação aprovado, personas e definições de métricas.

3. Restrições (Constraints): As fronteiras operacionais e 'linhas vermelhas'. O agente deve saber o que NÃO pode fazer: não alterar registros mestres, não disparar comunicações externas a terceiros e rotular omissões como 'não especificado'.

4. Critérios de Aceitação (Acceptance Criteria): A lista de checagem objetiva que o revisor humano usará para homologar a entrega: 100% dos dados rastreados à evidência, todas as premissas identificadas e formatação conforme o padrão da empresa.

Essa formalização contratual transforma a IA de uma caixa preta instável em um executor confiável e auditável.`
  },
  {
    id: 15,
    type: 'interactive',
    title: 'Laboratório Interativo 3: Construtor de Contratos',
    subtitle: 'Simulador Dinâmico • Montagem e Validação de Especificações Agênticas Seguras',
    component: AgentContractBuilder,
    notes: `Chegamos ao nosso terceiro laboratório interativo: o Construtor e Validador de Contratos Agênticos.

Aqui vocês assumem o papel de arquitetos de processos. Temos os 4 pilares: Outcome, Context, Constraints e Acceptance Criteria. Para cada pilar, vocês têm uma cláusula fraca (vaga, ruidosa ou arriscada) e uma cláusula forte com padrão de engenharia.

Testem marcar cláusulas fracas. Reparem como o 'Índice de Solidez Contratual' cai e o painel à direita acusa as vulnerabilidades: o agente fica sem limites de escopo, vasculha pastas irrelevantes ou produz relatórios opinativos sem dados rastreáveis.

Agora, selecionem todas as opções com padrão de engenharia (B). O índice atinge 100 pontos, e o simulador compila em tempo real a especificação de contrato em Markdown, pronta para ser copiada e utilizada em fluxos reais do ChatGPT Work.

Esse é o padrão de excelência que vocês devem exigir em qualquer projeto agêntico que liderarem em suas empresas.`
  },
  {
    id: 16,
    type: 'visual-component',
    title: 'Modelagem de Workflows antes da Automação',
    subtitle: 'Arquitetura de Processos • O Grafo Formal de 7 Etapas',
    component: WorkflowMappingVisual,
    notes: `Antes de encostar em qualquer ferramenta de IA ou ativar qualquer automação, existe um mandamento que nenhum engenheiro pode violar: 'Automatizar um processo confuso e caótico apenas reproduz a ambiguidade em maior velocidade'.

Antes de delegar ao agente, precisamos mapear e simplificar a mecânica do processo em 7 etapas mínimas:
1. Gatilho (Trigger): Qual é o evento ou cronograma que dispara a necessidade da execução?
2. Fontes de Entrada: Quais são os sistemas de registro e arquivos que contêm a evidência oficial?
3. Transformações e Decisões: Quais operações lógicas, filtros, cruzamentos e regras de negócio devem ocorrer?
4. Aprovações Humanas (HITL): Onde estão os pontos críticos que exigem autorização humana antes de prosseguir?
5. Checagens de Aceite: Quais testes validam que a saída atende aos requisitos de qualidade?
6. Saída e Audiência: Qual é o artefato final entregue e quem é o consumidor daquela informação?
7. Responsável Final (Owner): Quem é o profissional humano que assina o entregável e responde pelo resultado perante a governança?

Se o seu processo contiver etapas manuais obsoletas ou regras não documentadas, conserte o processo primeiro. Só depois construa o contrato agêntico.`
  },
  {
    id: 17,
    type: 'visual-component',
    title: 'O Princípio da Reversibilidade e Portões HITL',
    subtitle: 'Governança & Segurança • Concedendo Autonomia em Proporção Direta ao Risco',
    component: ReversibilityVisual,
    notes: `Nem todas as ações de um fluxo de trabalho corporativo possuem o mesmo perfil de risco. Como desenhar a autoridade do agente para que ele seja veloz sem colocar a empresa em risco jurídico ou financeiro?

A resposta formal de engenharia é o Princípio da Reversibilidade: 'Conceda autonomia em proporção direta à reversibilidade da operação'.

Vejam o slide:
À esquerda, temos operações com Alta Reversibilidade e Baixo Risco: ler documentos, pesquisar bases públicas, sintetizar rascunhos em arquivos locais e gerar tabelas comparativas. Se o modelo cometer um erro nessas tarefas, o impacto é nulo: basta descartar o rascunho e refazer. Para essas operações, concedemos Autonomia Total e execução contínua ao agente.

À direita, temos operações com Baixa Reversibilidade e Alto Impacto: enviar e-mails para clientes, sobrescrever registros em bancos de produção ou ERPs, debitar APIs pagas e aprovar despesas. Se o agente errar aqui, o estrago pode ser irreparável. Para essas operações, é mandatório instituir um Portão Humano (Human-in-the-Loop - HITL), onde o agente é obrigado a pausar e aguardar confirmação explícita.

Essa dosagem é o que distingue uma automação madura de uma aventura perigosa.`
  },
  {
    id: 18,
    type: 'interactive',
    title: 'Laboratório Interativo 4: Matriz de Reversibilidade',
    subtitle: 'Simulador Dinâmico • Calibração de Autonomia, Portões HITL e Risco Operacional',
    component: ReversibilityMatrixSimulator,
    notes: `Vamos testar essa calibração de governança no nosso quarto laboratório interativo: o Simulador da Matriz de Reversibilidade e Autonomia.

Temos cinco ações cotidianas de um processo empresarial, ordenadas do menor para o maior impacto: leitura de arquivos, síntese de rascunhos, criação de arquivos internos, atualização de CRM e disparo de e-mails para clientes.

Para cada ação, vocês podem escolher entre três níveis de controle: Autônomo, Notificar ou Portão HITL.

Façam dois experimentos cruciais:
Primeiro, marquem 'Portão HITL' nas ações 1 e 2. Reparem no diagnóstico à direita: o simulador acusa 'Fadiga por Microgerenciamento'. O operador humano será interrompido a cada leitura simples, destruindo os ganhos de produtividade da IA.
Agora, marquem 'Autônomo' nas ações 4 e 5. O simulador acusa imediatamente 'Risco Crítico de Governança', pois o agente tem carta branca para alterar bancos de dados e contatar clientes sem validação humana.

Cliquem no botão 'Configuração Recomendada' para observar o equilíbrio ótimo preconizado pelas melhores práticas de governança agêntica.`
  },
  {
    id: 19,
    type: 'visual-component',
    title: 'Revisão Estruturada em 6 Camadas (Layered Review)',
    subtitle: 'Auditoria de Entregáveis • A Metodologia de Inspeção Sistemática',
    component: LayeredReviewVisual,
    notes: `Quando o agente conclui a execução e devolve o artefato para homologação, como o revisor humano deve conduzir a auditoria?

Nunca faça uma 'leitura diagonal de formatação'. Adotamos na disciplina a Revisão Estruturada em 6 Camadas:

Camada 1: Adequação e Público. O documento responde à pergunta formulada e atende às necessidades estratégicas daquela audiência específica?
Camada 2: Checagem Fonte-Dado. Esta é a camada técnica mais rigorosa: cada número, data, citação ou valor financeiro presente no texto é confrontado diretamente contra o arquivo fonte oficial.
Camada 3: Completude e Casos Extremos. O relatório considerou todas as categorias, departamentos ou cenários, ou omitiu dados silenciosamente?
Camada 4: Validação de Premissas e Raciocínio. Fatos comprovados estão claramente separados de interpretações e hipóteses sugeridas pelo modelo?
Camada 5: Inspeção na Mídia Final. Como o documento se comporta em sua mídia de destino? Há links quebrados, colunas cortadas ou descontinuidade visual?
Camada 6: Autorização de Ações Externas. Qualquer ação com efeitos colaterais externos foi homologada por um profissional legalmente responsável?

Essa auditoria em camadas garante conformidade irrestrita e constrói confiança institucional na IA.`
  },
  {
    id: 20,
    type: 'visual-component',
    title: 'A Esteira de Evolução Agêntica em 4 Estágios',
    subtitle: 'Maturidade Organizacional • Da Tarefa Guiada à Operação Monitorada em Escala',
    component: MaturityLadderVisual,
    notes: `Para fechar nossa fundamentação teórica, precisamos enxergar a esteira de maturidade organizacional na adoção de processos agênticos. Toda equipe deve percorrer quatro estágios progressivos:

Estágio 1: Tarefa Guiada (Guided Task). O profissional humano atua como mentor próximo: fornece os documentos manualmente, supervisiona cada passo intermediário e valida os raciocínios turno a turno.

Estágio 2: Entregável Delegado (Delegated Deliverable). O humano formula um contrato completo e delega o desfecho. O agente realiza a execução multi-etapas de forma autônoma e devolve o artefato para auditoria.

Estágio 3: Fluxo Reutilizável (Reusable Workflow). As instruções, templates, conectores e critérios de aceite são empacotados em 'Skills' institucionais e Projects no ChatGPT Work, permitindo que qualquer membro da equipe execute a tarefa com qualidade idêntica.

Estágio 4: Operação Monitorada (Monitored Operation). O fluxo opera acionado por gatilhos ou cronogramas recorrentes, com trilha de auditoria persistente, portões HITL automatizados e monitoramento periódico de métricas de sucesso.

A regra de ouro da maturidade é: 'Nunca dê o salto direto para o Estágio 4'. Um fluxo automatizado que não foi provado e depurado nos estágios guiados é uma bomba-relógio corporativa.`
  },
  {
    id: 21,
    type: 'interactive',
    title: 'Laboratório Interativo 5: Quiz de Fixação e Avaliação',
    subtitle: 'Avaliação Formativa • 4 Questões de Alto Nível de Pós-Graduação com Feedback Imediato',
    component: FixationQuiz,
    notes: `Chegamos ao final da nossa primeira aula com o Laboratório Interativo 5: o nosso Quiz de Fixação e Avaliação Formativa de Competências.

Preparei quatro questões desafiadoras de nível de pós-graduação, abordando diretamente os pontos centrais que discutimos hoje:
1. A mudança estrutural na unidade de delegação entre o Chat tradicional e o ChatGPT Work.
2. A mecânica probabilística dos LLMs e por que confiança de expressão não prova exatidão factual.
3. A aplicação prática do Princípio da Reversibilidade na governança de portões Human-in-the-Loop.
4. As quatro propriedades fundamentais de um conjunto de contexto forte.

Ao responderem cada questão, o sistema fornecerá validação instantânea e exibirá a justificativa técnica detalhada baseada no formalismo técnico da disciplina. 

Aproveitem este momento para consolidar os conceitos fundamentais. Na nossa próxima aula, entraremos a fundo na interface do ChatGPT Work, explorando o Codex, o gerenciamento de arquivos em sandboxes isoladas e a criação das nossas primeiras Skills de trabalho. Muito obrigado pela atenção e bom quiz a todos!`
  }
];
