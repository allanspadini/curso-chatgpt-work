import React, { useState } from 'react';
import { BellRing, BellOff, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

const EVENTS = [
  {
    id: 'prod-incident',
    source: 'Slack #eng-ops + Jira + Pager',
    rawTitle: 'Bloqueio crítico no gateway de pagamento afeta release de amanhã',
    isMaterial: true,
    triggerRule: 'Gatilho 2: Bloqueio ameaça marco comprometido + Gatilho 1: Prazo no próximo dia útil',
    briefSection: '1. Top Priorities & 5. Blocked or Waiting',
    factVsAssumption: 'Fato: Teste de carga falhou com timeout 504 (Jira ENG-402). Interpretação: Exige decisão de rollback até 16h.',
    stagedAction: 'Rascunho de mensagem para liderança + pauta de war-room de 15 min (Não enviados).',
  },
  {
    id: 'senior-fyi',
    source: 'E-mail (VP Comercial)',
    rawTitle: 'VP encaminhou artigo sobre tendências de IA para leitura futura ("FYI")',
    isMaterial: false,
    triggerRule: 'Abaixo do Limiar: Remetente sênior não torna urgente automaticamente se não há decisão ou prazo',
    briefSection: '6. Can Wait (Sem interrupção no heartbeat horário)',
    factVsAssumption: 'Fato: E-mail informativo sem pergunta ou prazo. Regra: Proteger janela de foco.',
    stagedAction: 'Nenhuma interrupção! Agente permanece em silêncio no check horário.',
  },
  {
    id: 'already-resolved',
    source: 'Thread de E-mail (Cliente Acme)',
    rawTitle: 'Pedido urgente de segunda-feira já respondido e fechado ontem às 18h',
    isMaterial: false,
    triggerRule: 'Abaixo do Limiar: Última mensagem da thread confirma resolução (Não repetir item inalterado!)',
    briefSection: '2. Meaningful Changes (Marcado como Resolvido na baseline)',
    factVsAssumption: 'Fato: Resposta final enviada ontem com aceite do cliente. Regra: Inspecionar respostas recentes.',
    stagedAction: 'Silêncio operacional (evita poluir o brief repetindo tarefa já concluída).',
  },
  {
    id: 'tracker-unavailable',
    source: 'Conector Project Tracker (Expirado)',
    rawTitle: 'Conector do Tracker retornou erro 403 / indisponível durante a checagem',
    isMaterial: true,
    triggerRule: 'Gatilho 7: Uma fonte oficial tornou-se indisponível ou inconsistente',
    briefSection: '2. Meaningful Changes & Alerta de Confiança do Brief',
    factVsAssumption: 'Fato: Tracker inacessível às 09:00. Regra: Reportar fonte indisponível em vez de adivinhar conteúdo!',
    stagedAction: 'Aviso explícito de limitação de confiança no topo do brief para reconexão OAuth.',
  },
];

export default function ChiefOfStaffBriefSimulator() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = EVENTS[selectedIdx];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '10px', justifyContent: 'space-between' }}>
      {/* Top Banner */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '12px',
          padding: '8px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              background: '#166534',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.74rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            SIMULADOR INTERATIVO 2 • RUBRICA 3.4
          </span>
          <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.92rem' }}>
            Filtro de Materialidade e Consolidação do Work Chief of Staff
          </span>
        </div>
        <span style={{ fontSize: '0.76rem', color: '#0369A1', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
          Teste os 4 eventos da fila
        </span>
      </div>

      {/* Main Grid */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '420px 1fr', gap: '14px' }}>
        {/* Left: Incoming Signals */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1.5px solid #CBD5E1',
            borderRadius: '14px',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: '0.76rem', fontWeight: 800, color: '#475569', fontFamily: 'var(--font-mono)' }}>
            SINAIS DETECTADOS NAS FONTES CONECTADAS:
          </div>
          {EVENTS.map((ev, idx) => {
            const active = idx === selectedIdx;
            return (
              <button
                key={ev.id}
                onClick={() => setSelectedIdx(idx)}
                style={{
                  textAlign: 'left',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  background: active ? '#EFF6FF' : '#F8FAFC',
                  border: active ? '2px solid #0284C7' : '1px solid #CBD5E1',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0369A1', fontFamily: 'var(--font-mono)' }}>
                    {ev.source}
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      background: ev.isMaterial ? '#FEF2F2' : '#F0FDF4',
                      color: ev.isMaterial ? '#991B1B' : '#166534',
                      border: `1px solid ${ev.isMaterial ? '#FCA5A5' : '#86EFAC'}`,
                    }}
                  >
                    {ev.isMaterial ? '🔔 INTERROMPER' : '🔕 SILÊNCIO'}
                  </span>
                </div>
                <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#0A345D', lineHeight: 1.3 }}>
                  {ev.rawTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Threshold Evaluation & Brief Output */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #D0E3F0',
            borderRadius: '14px',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {/* Decision Banner */}
          <div
            style={{
              background: current.isMaterial ? '#FFF7ED' : '#F0FDF4',
              border: `2px solid ${current.isMaterial ? '#EA580C' : '#16A34A'}`,
              borderRadius: '12px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {current.isMaterial ? <BellRing size={26} color="#C2410C" /> : <BellOff size={26} color="#166534" />}
              <div>
                <div style={{ fontSize: '0.73rem', fontWeight: 800, color: current.isMaterial ? '#C2410C' : '#166534', fontFamily: 'var(--font-mono)' }}>
                  AVALIAÇÃO DO MEANINGFUL-CHANGE THRESHOLD
                </div>
                <div style={{ fontSize: '1.04rem', fontWeight: 800, color: '#0A345D' }}>
                  {current.isMaterial ? 'Mudança Material Detectada ➔ Atualizar Brief' : 'Sem Mudança Material ➔ Manter Silêncio no Heartbeat'}
                </div>
              </div>
            </div>
          </div>

          {/* Diagnostic Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '10px 14px' }}>
              <div style={{ fontSize: '0.73rem', fontWeight: 800, color: '#0369A1', fontFamily: 'var(--font-mono)' }}>
                REGRA DE MATERIALIDADE APLICADA:
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E293B', marginTop: '2px' }}>
                {current.triggerRule}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '10px 14px' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0369A1', fontFamily: 'var(--font-mono)' }}>
                  ALOCAÇÃO NO BRIEF DECISÓRIO:
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0A345D', marginTop: '3px' }}>
                  {current.briefSection}
                </div>
              </div>

              <div style={{ background: '#FAF5FF', border: '1px solid #D8B4FE', borderRadius: '10px', padding: '10px 14px' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#7E22CE', fontFamily: 'var(--font-mono)' }}>
                  SEPARAÇÃO FATO VS. INTERPRETAÇÃO:
                </div>
                <div style={{ fontSize: '0.78rem', color: '#1E293B', marginTop: '3px', lineHeight: 1.35 }}>
                  {current.factVsAssumption}
                </div>
              </div>
            </div>

            <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={20} color="#166534" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#166534', fontFamily: 'var(--font-mono)' }}>
                  PRÓXIMO PASSO PREPARADO (STAGED ARTIFACT — SEM AGIR PREMATURAMENTE):
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1E293B' }}>
                  {current.stagedAction}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Prompt Strip */}
      <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '7px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.78rem', color: '#0A345D', fontWeight: 700 }}>
          <strong>Cláusula de Proteção (Cap. 10):</strong> <em>"Draft useful next steps, but do not send, edit, schedule, create another task, or make a commitment without specific approval."</em>
        </span>
      </div>
    </div>
  );
}
