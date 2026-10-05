import React, { useState } from 'react';
import { MessageSquare, Briefcase, Play, ArrowRight, CheckCircle2, Clock, User, Cpu } from 'lucide-react';

export default function ChatVsWorkComparator() {
  const [selectedScenario, setSelectedScenario] = useState('meeting');
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const scenarios = {
    meeting: {
      name: 'Briefing Executivo de Alinhamento',
      chatSteps: [
        'Turno 1: Humano formula pedido de resumo',
        'Turno 2: Humano busca e sobe proposta no Drive',
        'Turno 3: Humano cola trechos de chat do Slack',
        'Turno 4: Humano aponta e corrige alucinações',
        'Turno 5: Humano formata Word manualmente',
      ],
      workSteps: [
        'Passo 1: Contrato Agêntico + @Drive + @Slack',
        'Passo 2: Agente recupera última versão no Drive',
        'Passo 3: Agente cruza pendências do Slack',
        'Passo 4: Agente gera Briefing .docx auditável',
        'Passo 5: Portão HITL: Humano homologa entrega',
      ],
    },
    onboarding: {
      name: 'Onboarding Enterprise de Cliente',
      chatSteps: [
        'Turno 1: Humano sobe escopo preliminar',
        'Turno 2: Humano pede cronograma de marcos',
        'Turno 3: Humano adiciona políticas de segurança',
        'Turno 4: Humano solicita tabela detalhada',
        'Turno 5: Humano transfere dados para o Excel',
      ],
      workSteps: [
        'Passo 1: Especificação de Onboarding enviada',
        'Passo 2: Agente mapeia dependências técnicas',
        'Passo 3: Agente gera cronograma em planilha',
        'Passo 4: Agente audita riscos e premissas',
        'Passo 5: Portão HITL: Humano homologa entrega',
      ],
    },
  };

  const current = scenarios[selectedScenario];

  const runSimulation = () => {
    setIsRunningSim(true);
    setSimStep(1);
    const interval = setInterval(() => {
      setSimStep((prev) => {
        if (prev >= 5) {
          clearInterval(interval);
          setIsRunningSim(false);
          return 5;
        }
        return prev + 1;
      });
    }, 500);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '4px 0',
      }}
    >
      {/* Top Controls Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '10px',
          padding: '8px 20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--infnet-dark-blue)' }}>
            Caso Corporativo:
          </span>
          <button
            onClick={() => { setSelectedScenario('meeting'); setSimStep(0); }}
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              border: selectedScenario === 'meeting' ? '2px solid var(--infnet-cyan)' : '1px solid #CBD5E1',
              background: selectedScenario === 'meeting' ? '#FFFFFF' : 'transparent',
              color: selectedScenario === 'meeting' ? 'var(--infnet-dark-blue)' : '#64748B',
              fontWeight: 700,
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
          >
            Briefing de Reunião
          </button>
          <button
            onClick={() => { setSelectedScenario('onboarding'); setSimStep(0); }}
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              border: selectedScenario === 'onboarding' ? '2px solid var(--infnet-cyan)' : '1px solid #CBD5E1',
              background: selectedScenario === 'onboarding' ? '#FFFFFF' : 'transparent',
              color: selectedScenario === 'onboarding' ? 'var(--infnet-dark-blue)' : '#64748B',
              fontWeight: 700,
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
          >
            Onboarding Enterprise
          </button>
        </div>

        <button
          onClick={runSimulation}
          disabled={isRunningSim}
          style={{
            background: 'var(--infnet-dark-blue)',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 18px',
            fontSize: '0.82rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <Play size={16} />
          {isRunningSim ? 'Executando Pipeline...' : 'Simular Comparação'}
        </button>
      </div>

      {/* Main 2-Track Visual Pipeline */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          margin: '10px 0',
          alignItems: 'stretch',
          flex: 1,
        }}
      >
        {/* Track 1: Chat Mode */}
        <div
          className="card-base"
          style={{
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '5px solid #94A3B8',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={18} color="#475569" />
                <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.05rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
                  Chat: 5 Turnos Manuais
                </h4>
              </div>
              <span className="badge-pill" style={{ background: '#F1F5F9', color: '#475569', fontSize: '0.72rem' }}>
                Turn-by-Turn
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {current.chatSteps.map((step, idx) => {
                const isPassed = simStep > idx;
                return (
                  <div
                    key={idx}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '6px',
                      background: isPassed ? '#F1F5F9' : '#FFFFFF',
                      border: isPassed ? '1px solid #CBD5E1' : '1px dashed #E2E8F0',
                      fontSize: '0.78rem',
                      color: isPassed ? '#1E293B' : '#94A3B8',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span className="kbd-badge" style={{ background: isPassed ? '#CBD5E1' : '#E2E8F0' }}>
                      T{idx + 1}
                    </span>
                    <span style={{ fontWeight: isPassed ? 600 : 400 }}>{step}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 12px',
              background: '#FFF7ED',
              border: '1px solid #FED7AA',
              borderRadius: '6px',
              fontSize: '0.75rem',
              color: '#9A3412',
              fontWeight: 700,
            }}
          >
            <span>Intervenções: 5 Manuais</span>
            <span>Tempo: ~40 minutos</span>
          </div>
        </div>

        {/* Track 2: ChatGPT Work Mode */}
        <div
          className="card-base"
          style={{
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '5px solid var(--infnet-cyan)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Briefcase size={18} color="var(--infnet-cyan)" />
                <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.05rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
                  ChatGPT Work: 1 Delegação
                </h4>
              </div>
              <span className="badge-pill" style={{ background: '#EDF5FA', color: '#0369A1', fontSize: '0.72rem', fontWeight: 800 }}>
                Outcome-Based
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {current.workSteps.map((step, idx) => {
                const isPassed = simStep > idx;
                return (
                  <div
                    key={idx}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '6px',
                      background: isPassed ? '#EFF6FF' : '#FFFFFF',
                      border: isPassed ? '1px solid #93C5FD' : '1px dashed #E2E8F0',
                      fontSize: '0.78rem',
                      color: isPassed ? 'var(--infnet-dark-blue)' : '#94A3B8',
                      fontWeight: isPassed ? 700 : 400,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span
                      style={{
                        background: isPassed ? 'var(--infnet-cyan)' : '#E2E8F0',
                        color: isPassed ? '#FFFFFF' : '#64748B',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                      }}
                    >
                      P0{idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 12px',
              background: '#F0FDF4',
              border: '1px solid #86EFAC',
              borderRadius: '6px',
              fontSize: '0.75rem',
              color: '#166534',
              fontWeight: 800,
            }}
          >
            <span>Intervenções: 1 Contrato + 1 Auditoria</span>
            <span>Tempo: ~2 minutos</span>
          </div>
        </div>
      </div>

      {/* Bottom Visual Metric Ribbon */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid var(--border-light)',
          borderRadius: '8px',
          padding: '8px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontWeight: 800, color: 'var(--infnet-dark-blue)' }}>Rastreabilidade:</span>
          <span className="badge-pill" style={{ background: '#F0FDF4', color: '#166534', border: '1px solid #86EFAC' }}>
            100% Ancorada em Fontes Homologadas
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontWeight: 800, color: 'var(--infnet-dark-blue)' }}>Redução de Esforço:</span>
          <span className="badge-pill" style={{ background: '#EFF6FF', color: '#1E40AF', border: '1px solid #93C5FD' }}>
            -85% Carga Cognitiva no Operador
          </span>
        </div>
      </div>
    </div>
  );
}
