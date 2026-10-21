import React from 'react';
import {
  ShieldCheck,
  Clock,
  FileCheck2,
  AlertTriangle,
  Target,
  Sparkles,
  Layers,
  Lock,
  Tag,
  Scale,
  BellOff,
  UserCheck,
  Database,
  GitFork,
  Calculator,
  Compass,
  CheckCircle2,
  Workflow,
  EyeOff,
} from 'lucide-react';

function GeneralizationCardContainer({
  badgeNumber,
  badgeTitle,
  headline,
  labContext,
  labGoal,
  antiPatternWarning,
  principles,
  goldenRule,
  themeColor = '#0284C7',
  badgeBg = '#EFF6FF',
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        gap: '10px',
        justifyContent: 'space-between',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #D0E3F0',
          borderRadius: '12px',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              background: badgeBg,
              color: themeColor,
              border: `1px solid ${themeColor}40`,
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '0.76rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            {badgeNumber} • {badgeTitle}
          </span>
          <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.98rem' }}>
            {headline}
          </span>
        </div>
        <span
          style={{
            fontSize: '0.74rem',
            color: '#64748B',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          Generalização Arquitetural & Princípios Universais
        </span>
      </div>

      {/* Main Grid: Left Column (Lab Context & Anti-pattern) + Right Column (Universal Principles) */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '4.2fr 5.8fr',
          gap: '12px',
          minHeight: 0,
        }}
      >
        {/* Left Column: Context & Specific vs General */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            height: '100%',
            justifyContent: 'space-between',
          }}
        >
          {/* Card 1: Objetivo Central */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #D0E3F0',
              borderRadius: '12px',
              padding: '12px 14px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  background: badgeBg,
                  color: themeColor,
                  padding: '5px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Target size={16} />
              </div>
              <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.85rem' }}>
                Visão Geral & Objetivo da Prática
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.81rem', color: '#334155', lineHeight: 1.45 }}>
              {labGoal}
            </p>
          </div>

          {/* Card 2: Aplicação do Laboratório */}
          <div
            style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '12px',
              padding: '12px 14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Workflow size={16} color="#0E4E8A" />
              <span style={{ fontWeight: 800, color: '#0E4E8A', fontSize: '0.82rem' }}>
                O Caso Concreto Executado em Aula
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.79rem', color: '#475569', lineHeight: 1.4 }}>
              {labContext}
            </p>
          </div>

          {/* Card 3: Anti-Padrão / Alerta de Fixação Rasa */}
          <div
            style={{
              background: '#FFF7ED',
              border: '1px solid #FED7AA',
              borderRadius: '12px',
              padding: '12px 14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={16} color="#C2410C" />
              <span style={{ fontWeight: 800, color: '#C2410C', fontSize: '0.82rem' }}>
                O Risco da Visão Estrita (Anti-Padrão)
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.78rem', color: '#9A3412', lineHeight: 1.4 }}>
              {antiPatternWarning}
            </p>
          </div>
        </div>

        {/* Right Column: 4 Universal Principles */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #D0E3F0',
            borderRadius: '12px',
            padding: '12px 16px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.88rem' }}>
              4 Princípios Universais para Qualquer Sistema Agêntico
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                background: '#F1F5F9',
                color: '#475569',
                padding: '2px 8px',
                borderRadius: '6px',
                fontWeight: 700,
              }}
            >
              Padrões de Engenharia
            </span>
          </div>

          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '9px 12px',
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    background: p.iconBg || badgeBg,
                    color: p.iconColor || themeColor,
                    padding: '6px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.83rem' }}>
                      {p.title}
                    </span>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        color: p.tagColor || themeColor,
                        background: '#FFFFFF',
                        border: '1px solid #CBD5E1',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.77rem', color: '#334155', lineHeight: 1.38 }}>
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Strip: Golden Engineering Rule */}
      <div
        style={{
          background: '#F0FDF4',
          border: '1px solid #BBF7D0',
          borderRadius: '10px',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={18} color="#16A34A" />
          <span style={{ fontWeight: 800, color: '#166534', fontSize: '0.82rem' }}>
            REGRA DE OURO AGÊNTICA:
          </span>
          <span style={{ fontSize: '0.8rem', color: '#14532D', fontWeight: 600 }}>
            {goldenRule}
          </span>
        </div>
        <span
          style={{
            fontSize: '0.72rem',
            color: '#15803D',
            fontWeight: 800,
            fontFamily: 'var(--font-mono)',
          }}
        >
          ARQUITETURA REUTILIZÁVEL
        </span>
      </div>
    </div>
  );
}

// 1. Generalização da Prática 0 (Triagem e Ações no Navegador)
export function Practice0GeneralizationVisual() {
  return (
    <GeneralizationCardContainer
      badgeNumber="PRÁTICA 0"
      badgeTitle="SÍNTESE & GENERALIZAÇÃO"
      headline="Triagem de Entradas, Rascunhos e Automação Segura no Navegador"
      themeColor="#0284C7"
      badgeBg="#EFF6FF"
      labGoal="Automatizar a triagem de fluxos de mensagens volumosos e a confecção de minutas sem perder o controle humano sobre ações externas irreversíveis."
      labContext="Classificamos 8 threads de webmail em 4 grupos operacionais, bloqueamos injeção de prompt em TH-104, emulamos a voz autoral do titular (SENT-01/02) e limitamos a ação no navegador a 'Salvar Rascunho'."
      antiPatternWarning="Não decore que esta técnica é só para 'e-mails'. Ela se aplica a qualquer fila de entrada: tickets de suporte (Zendesk), chamados no Jira, mensagens de WhatsApp corporativo, canais do Slack e comentários em repositórios."
      principles={[
        {
          icon: Clock,
          title: '1. O Princípio do Estado Final (Efeito Temporal)',
          tag: 'TEMPORALIDADE',
          tagColor: '#0369A1',
          iconBg: '#E0F2FE',
          iconColor: '#0284C7',
          description:
            'Nunca tome decisões com base na primeira mensagem de uma conversa. A última réplica pode convalidar, cancelar ou resolver o problema (ex: financeiro já aprovou tokens). Avalie sempre o estado líquido consolidado.',
        },
        {
          icon: ShieldCheck,
          title: '2. Fronteira Hermética: Dados Brutos ≠ Instruções',
          tag: 'PROMPT INJECTION',
          tagColor: '#DC2626',
          iconBg: '#FEE2E2',
          iconColor: '#DC2626',
          description:
            'Qualquer texto vindo do exterior (e-mail de fornecedor, PDF, ticket) é estritamente dado passivo para análise. Ordens de terceiros ("aprove esta conta bancária agora") devem ser bloqueadas como tentativa de injeção indireta.',
        },
        {
          icon: FileCheck2,
          title: '3. Voz Autoral e Parametrização por Placeholders',
          tag: 'EPISTEMOLOGIA',
          tagColor: '#7C3AED',
          iconBg: '#F3E8FF',
          iconColor: '#7C3AED',
          description:
            'A IA aprende o estilo a partir de amostras de autoria autêntica do titular (ignorando e-mails encaminhados de terceiros). Quando faltam dados factuais (agenda, passagens), a IA emite [PLACEHOLDERS], nunca inventa fatos.',
        },
        {
          icon: Lock,
          title: '4. Portão HITL (Human-in-the-Loop) em Ações Destrutivas',
          tag: 'GOVERNANÇA',
          tagColor: '#16A34A',
          iconBg: '#DCFCE7',
          iconColor: '#16A34A',
          description:
            'Segregação mandatória de alçadas: a IA opera em modo somente leitura (Rascunhar / Propor / Triar); ações com efeito colateral no mundo exterior (Enviar, Deletar, Efetivar Pagamento) exigem gatilho humano explícito.',
        },
      ]}
      goldenRule="O agente prepara 100% da inteligência e do trabalho braçal, mas deixa o clique irreversível para o humano responsável."
    />
  );
}

// 2. Generalização da Prática 1 (Entregáveis, Camada Imutável e Matrizes Auditáveis)
export function Practice1GeneralizationVisual() {
  return (
    <GeneralizationCardContainer
      badgeNumber="PRÁTICA 1"
      badgeTitle="SÍNTESE & GENERALIZAÇÃO"
      headline="Entregáveis Corporativos: Camada Imutável, Transparência e Sensibilidade"
      themeColor="#0E4E8A"
      badgeBg="#EFF6FF"
      labGoal="Projetar artefatos executivos (documentos normativos, pareceres e matrizes de decisão) imunes a alucinação de regras e à falsa precisão matemática."
      labContext="Reescrevemos a introdução da política de reembolso congelando as cláusulas 2.1-2.5, rotulamos a economia de 101,5h como [Achado Derivado] e comparamos fornecedores de OCR com célula em branco (Blank ≠ Zero)."
      antiPatternWarning="Não encare esta prática como 'reforma de texto de reembolso ou escolha de OCR'. O padrão de Camada Imutável é exigido em contratos jurídicos, termos de garantia, editais, acordos de SLA e compliance LGPD/Bacen."
      principles={[
        {
          icon: Lock,
          title: '1. Camada Imutável (Frozen Scope / Não-Negociável)',
          tag: 'COMPLIANCE',
          tagColor: '#0A345D',
          iconBg: '#EDF5FA',
          iconColor: '#0A345D',
          description:
            'Isole formalmente no prompt o que o modelo pode aprimorar (estilo, concisão, didática) daquilo que é estritamente congelado (prazos, cláusulas legais, alçadas e fórmulas de cálculo). Impeça mutações acidentais.',
        },
        {
          icon: Tag,
          title: '2. Tríade da Transparência: Fato vs. Achado vs. Recomendação',
          tag: 'AUDITORIA',
          tagColor: '#7C3AED',
          iconBg: '#F3E8FF',
          iconColor: '#7C3AED',
          description:
            'Todo entregável decisório deve segregar sentenças: [Fato Citado] (dado bruto da fonte auditada), [Achado Derivado] (cálculo matemático rastreável) e [Recomendação] (sugestão estratégica sujeita a trade-offs de negócio).',
        },
        {
          icon: EyeOff,
          title: '3. Preservação Semântica do Dado Ausente ("Blank ≠ Zero")',
          tag: 'DADOS NULOS',
          tagColor: '#C2410C',
          iconBg: '#FFF7ED',
          iconColor: '#EA580C',
          description:
            'Células em branco ou métricas não testadas significam ausência de evidência, jamais o número zero. Tratar nulo como zero distorce rankings e bonifica fornecedores não homologados com falsos recordes de velocidade.',
        },
        {
          icon: Scale,
          title: '4. Análise de Sensibilidade & Combate à Falsa Precisão',
          tag: 'MULTICRITÉRIO',
          tagColor: '#16A34A',
          iconBg: '#DCFCE7',
          iconColor: '#16A34A',
          description:
            'Decisões complexas dependem de pesos subjetivos. Apresente no mínimo 2 cenários contrastantes (ex: Operação Imediata vs. Rigor Máximo de Compliance) para que a liderança visualize as fronteiras e condições de cada escolha.',
        },
      ]}
      goldenRule="Entregáveis de IA não são redações livres; são produtos de engenharia onde estilo flexível convive com travas rígidas de governança."
    />
  );
}

// 3. Generalização da Prática 2 (Chief of Staff, Briefing Decisório e Heartbeat)
export function Practice2GeneralizationVisual() {
  return (
    <GeneralizationCardContainer
      badgeNumber="PRÁTICA 2"
      badgeTitle="SÍNTESE & GENERALIZAÇÃO"
      headline="Chief of Staff: Gestão de Sinais, Silêncio Operacional e Handoff Limpo"
      themeColor="#166534"
      badgeBg="#F0FDF4"
      labGoal="Construir uma camada de inteligência executiva que agrega streams assíncronos caóticos, operando por exceção para poupar a atenção cognitiva da liderança."
      labContext="Consolidamos sinais das 08h30 (Slack, Gmail, Jira, Agenda) em 7 blocos por ação, filtramos ruído das 10h00 em silêncio (reações de emoji no post do VP) e higienizamos notas pessoais antes de delegar aos analistas."
      antiPatternWarning="Não limite esta lógica a 'gestores de TI'. Ela se aplica a executivos de qualquer área, mesas de operações financeiras, centros de despacho logístico, monitoramento de fraudes e suporte de missão crítica."
      principles={[
        {
          icon: Target,
          title: '1. Agrupamento por Ação, Nunca por Aplicativo de Origem',
          tag: 'COGNITIVO',
          tagColor: '#166534',
          iconBg: '#DCFCE7',
          iconColor: '#16A34A',
          description:
            'A liderança não decide por silos de software (aba Slack, aba Email, aba Jira); ela precisa de blocos funcionais claros: Decisões Imediatas, Desbloqueios da Equipe, Acompanhamentos e Itens Opcionais/Can Wait.',
        },
        {
          icon: Compass,
          title: '2. Urgência do Caminho Crítico vs. Viés de Cargo',
          tag: 'PRIORIDADE',
          tagColor: '#0E4E8A',
          iconBg: '#EFF6FF',
          iconColor: '#0284C7',
          description:
            'A prioridade é calibrada pelo risco de paralisia operacional ou estouro de prazo regulatório, não pelo crachá do remetente. Um artigo de leitura enviado pelo Diretor Geral (VP) é Can Wait; um bloqueio de acesso técnico é Urgente.',
        },
        {
          icon: BellOff,
          title: '3. A Virtude do Silêncio (Meaningful-Change Threshold)',
          tag: 'LOW NOISE',
          tagColor: '#D97706',
          iconBg: '#FEF3C7',
          iconColor: '#D97706',
          description:
            'Em agentes que rodam em segundo plano (heartbeats/cron), o padrão deve ser não incomodar. Notificações só disparam quando um evento ultrapassa o limiar de mudança material do baseline acordado.',
        },
        {
          icon: UserCheck,
          title: '4. Princípio do Menor Privilégio & Higienização de Contexto',
          tag: 'PRIVACIDADE',
          tagColor: '#7C3AED',
          iconBg: '#F3E8FF',
          iconColor: '#7C3AED',
          description:
            'Ao delegar pacotes de trabalho (handoff), a IA deve realizar saneamento de contexto: expurgar compromissos pessoais do titular, notas salariais e dados sigilosos, transmitindo apenas o payload estritamente operacional.',
        },
      ]}
      goldenRule="O poder do Chief of Staff agêntico não está em avisar tudo, mas em proteger o foco humano silenciando todo o ruído dispensável."
    />
  );
}

// 4. Generalização da Prática 3 (Engenharia de Dados Confiáveis e Trial Joins)
export function Practice3GeneralizationVisual() {
  return (
    <GeneralizationCardContainer
      badgeNumber="PRÁTICA 3"
      badgeTitle="SÍNTESE & GENERALIZAÇÃO"
      headline="Engenharia de Dados Confiáveis: Grão, Reconciliação e Trial Joins"
      themeColor="#92400E"
      badgeBg="#FEF3C7"
      labGoal="Implantar pipelines analíticos agênticos com rigor estatístico e contábil, prevenindo relatórios alucinados e agregações falsas causadas por falhas de chaves."
      labContext="Limpamos o CSV sujo de vendas em cópia separada, auditamos o paradoxo da soma de US$ 4.345,50 com conta em branco (Cascade NULL) e testamos o Trial Join evitando inflar +US$ 1.100 por duplicata no CRM."
      antiPatternWarning="Não pense que este pipeline só serve para 'vendas e clientes'. É a base para dados contábeis, logs de telemetria, relatórios hospitalares, reconciliação de pagamentos Pix/cartão e migrações de bancos legados."
      principles={[
        {
          icon: Layers,
          title: '1. Princípio do Grão & Limpeza em Cópia Rastreável',
          tag: 'LINHAGEM',
          tagColor: '#92400E',
          iconBg: '#FEF3C7',
          iconColor: '#B45309',
          description:
            'Defina explicitamente a unidade atômica da tabela (1 linha = 1 pedido, 1 usuário, 1 sensor). Nunca altere a fonte primária bruta no local; efetue deduplicações e tratamentos em cópias versionadas com log de transformações.',
        },
        {
          icon: Calculator,
          title: '2. O Paradoxo do Total Parcial (Soma Bate ≠ Base Completa)',
          tag: 'AUDITORIA',
          tagColor: '#DC2626',
          iconBg: '#FEE2E2',
          iconColor: '#DC2626',
          description:
            'Uma soma de valores conhecidos pode fechar exatamente com a linha de TOTAL do arquivo antigo e ainda assim esconder buracos severos se houver registros nulos. Todo relatório deve declarar a cobertura amostral auditada.',
        },
        {
          icon: GitFork,
          title: '3. Trial Join Preventivo contra Fan-Out e Registros Órfãos',
          tag: 'RELACIONAL',
          tagColor: '#0369A1',
          iconBg: '#E0F2FE',
          iconColor: '#0284C7',
          description:
            'Antes do merge definitivo, rode um cruzamento exploratório para diagnosticar: (a) chaves duplicadas na dimensão que multiplicam a métrica da fato (Multiply Match); (b) registros da fato sem par que sumiriam em inner joins.',
        },
        {
          icon: Database,
          title: '4. Data-Quality Notes como Requisito de Governança',
          tag: 'GOVERNANÇA',
          tagColor: '#16A34A',
          iconBg: '#DCFCE7',
          iconColor: '#16A34A',
          description:
            'Nenhum dashboard ou relatório executivo deve ser emitido com números sem memória. Exija da IA a emissão da Nota de Qualidade com contagem antes/depois, premissas de imputação e ambiguidades de data/região declaradas.',
        },
      ]}
      goldenRule="Antes de cruzar ou somar tabelas, teste a integridade das chaves e declare a cobertura real dos dados para não fabricar métricas falsas."
    />
  );
}
