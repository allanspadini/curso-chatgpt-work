import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, UserCheck, RefreshCw, CheckCircle2, Zap, Lock } from 'lucide-react';

export default function ReversibilityMatrixSimulator() {
  const [actions, setActions] = useState([
    { id: 1, name: '1. Leitura de PDFs e busca pública', risk: '100% Reversível', mode: 'auto', ideal: 'auto' },
    { id: 2, name: '2. Síntese de rascunhos e tabelas', risk: '100% Reversível', mode: 'auto', ideal: 'auto' },
    { id: 3, name: '3. Criação de arquivo em pasta interna', risk: '80% Reversível', mode: 'notify', ideal: 'notify' },
    { id: 4, name: '4. Atualização de status no ERP/CRM', risk: '20% Reversível', mode: 'hitl', ideal: 'hitl' },
    { id: 5, name: '5. Envio de e-mail ao cliente externo', risk: 'Irreversível', mode: 'hitl', ideal: 'hitl' },
  ]);

  const updateMode = (id, newMode) => {
    setActions(actions.map(a => a.id === id ? { ...a, mode: newMode } : a));
  };

  const resetOptimal = () => {
    setActions(actions.map(a => ({ ...a, mode: a.ideal })));
  };

  let microManagementCount = 0;
  let dangerousAutoCount = 0;

  actions.forEach(a => {
    if ((a.id === 1 || a.id === 2) && a.mode === 'hitl') microManagementCount++;
    if ((a.id === 4 || a.id === 5) && a.mode === 'auto') dangerousAutoCount++;
  });

  let balanceStatus = {
    title: 'Equilíbrio Operacional Ótimo',
    color: '#166534',
    bg: '#F0FDF4',
    border: '#86EFAC',
    badge: 'HOMOLOGADO',
  };

  if (dangerousAutoCount > 0) {
    balanceStatus = {
      title: 'Risco Crítico de Governança',
      color: '#991B1B',
      bg: '#FEF2F2',
      border: '#FCA5A5',
      badge: 'PERIGO: AÇÕES EXTERNAS SEM HITL',
    };
  } else if (microManagementCount > 0) {
    balanceStatus = {
      title: 'Fadiga por Microgerenciamento',
      color: '#9A3412',
      bg: '#FFF7ED',
      border: '#FDBA74',
      badge: 'ALERTA: EXCESSO DE CONFIRMAÇÕES',
    };
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '20px',
        height: '100%',
        alignItems: 'stretch',
      }}
    >
      {/* Table Column */}
      <div
        className="card-base"
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
              Calibração de Autonomia por Ação
            </h4>
            <button
              onClick={resetOptimal}
              style={{
                background: '#EDF5FA',
                border: '1px solid #D0E3F0',
                borderRadius: '6px',
                padding: '4px 10px',
                cursor: 'pointer',
                color: '#0369A1',
                fontSize: '0.72rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <RefreshCw size={12} /> Configuração Recomendada
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {actions.map((act) => (
              <div
                key={act.id}
                className="subcard-base"
                style={{
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <strong style={{ fontSize: '0.82rem', color: 'var(--infnet-dark-blue)', display: 'block' }}>
                    {act.name}
                  </strong>
                  <span style={{ fontSize: '0.72rem', color: act.id >= 4 ? '#991B1B' : '#0369A1', fontWeight: 600 }}>
                    Risco: {act.risk}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '4px' }}>
                  <button
                    onClick={() => updateMode(act.id, 'auto')}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '4px',
                      border: act.mode === 'auto' ? '2px solid #22C55E' : '1px solid #CBD5E1',
                      background: act.mode === 'auto' ? '#DCFCE7' : '#FFFFFF',
                      color: act.mode === 'auto' ? '#14532D' : '#64748B',
                      fontSize: '0.7rem',
                      fontWeight: act.mode === 'auto' ? 800 : 500,
                      cursor: 'pointer',
                    }}
                  >
                    Autônomo
                  </button>
                  <button
                    onClick={() => updateMode(act.id, 'notify')}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '4px',
                      border: act.mode === 'notify' ? '2px solid var(--infnet-cyan)' : '1px solid #CBD5E1',
                      background: act.mode === 'notify' ? '#EDF5FA' : '#FFFFFF',
                      color: act.mode === 'notify' ? 'var(--infnet-dark-blue)' : '#64748B',
                      fontSize: '0.7rem',
                      fontWeight: act.mode === 'notify' ? 800 : 500,
                      cursor: 'pointer',
                    }}
                  >
                    Notificar
                  </button>
                  <button
                    onClick={() => updateMode(act.id, 'hitl')}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '4px',
                      border: act.mode === 'hitl' ? '2px solid #EF4444' : '1px solid #CBD5E1',
                      background: act.mode === 'hitl' ? '#FEE2E2' : '#FFFFFF',
                      color: act.mode === 'hitl' ? '#991B1B' : '#64748B',
                      fontSize: '0.7rem',
                      fontWeight: act.mode === 'hitl' ? 800 : 500,
                      cursor: 'pointer',
                    }}
                  >
                    Portão HITL
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '8px', borderTop: '1px solid #F1F5F9' }}>
          <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
            Regra: Ações reversíveis ganham velocidade; ações irreversíveis ganham controle humano
          </span>
        </div>
      </div>

      {/* Simulator Diagnostic Feedback */}
      <div
        className="card-base"
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#0369A1',
              fontWeight: 800,
              background: '#EDF5FA',
              padding: '3px 10px',
              borderRadius: '6px',
              display: 'inline-block',
              marginBottom: '12px',
            }}
          >
            AVALIAÇÃO DE GOVERNANÇA EM TEMPO REAL
          </span>

          <div
            style={{
              padding: '16px',
              borderRadius: '8px',
              background: balanceStatus.bg,
              border: `2px solid ${balanceStatus.border}`,
              marginBottom: '14px',
              textAlign: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
              {dangerousAutoCount > 0 ? (
                <AlertTriangle size={24} color={balanceStatus.color} />
              ) : microManagementCount > 0 ? (
                <AlertTriangle size={24} color={balanceStatus.color} />
              ) : (
                <CheckCircle2 size={24} color={balanceStatus.color} />
              )}
              <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.15rem', color: balanceStatus.color, fontWeight: 800 }}>
                {balanceStatus.title}
              </h4>
            </div>
            <span className="badge-pill" style={{ background: '#FFFFFF', color: balanceStatus.color, fontWeight: 800, border: `1px solid ${balanceStatus.border}` }}>
              {balanceStatus.badge}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className="subcard-base" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--infnet-dark-blue)' }}>Portões HITL Ativos:</span>
              <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#DC2626' }}>
                {actions.filter(a => a.mode === 'hitl').length} de 5
              </strong>
            </div>
            <div className="subcard-base" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--infnet-dark-blue)' }}>Autonomia Plena:</span>
              <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#166534' }}>
                {actions.filter(a => a.mode === 'auto').length} de 5
              </strong>
            </div>
            <div className="subcard-base" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--infnet-dark-blue)' }}>Notificações Passivas:</span>
              <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#0369A1' }}>
                {actions.filter(a => a.mode === 'notify').length} de 5
              </strong>
            </div>
          </div>
        </div>

        <div style={{ padding: '8px 12px', background: '#EDF5FA', borderRadius: '6px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--infnet-dark-blue)', fontWeight: 700 }}>
            Governança ChatGPT Work: Velocidade no reversível, portão no irreversível
          </span>
        </div>
      </div>
    </div>
  );
}
