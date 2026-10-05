import React, { useState } from 'react';
import { Target, FileSpreadsheet, Ban, CheckSquare, Sparkles, Check, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function AgentContractBuilder() {
  const [outcomeChoice, setOutcomeChoice] = useState('b');
  const [contextChoice, setContextChoice] = useState('b');
  const [constraintsChoice, setConstraintsChoice] = useState('b');
  const [criteriaChoice, setCriteriaChoice] = useState('b');

  let score = 0;
  if (outcomeChoice === 'b') score += 25;
  if (contextChoice === 'b') score += 25;
  if (constraintsChoice === 'b') score += 25;
  if (criteriaChoice === 'b') score += 25;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '20px',
        height: '100%',
        alignItems: 'stretch',
      }}
    >
      {/* Configuration Column */}
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
              Configuração das 4 Cláusulas do Contrato
            </h4>
            <span className="badge-pill" style={{ background: '#EDF5FA', color: '#0369A1', fontFamily: 'var(--font-mono)' }}>
              Interactive Builder
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Cláusula 1: Outcome */}
            <div className="subcard-base" style={{ padding: '8px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <Target size={16} color="var(--infnet-dark-blue)" />
                <strong style={{ fontSize: '0.82rem', color: 'var(--infnet-dark-blue)' }}>1. Desfecho (Outcome)</strong>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <button
                  onClick={() => setOutcomeChoice('a')}
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    border: outcomeChoice === 'a' ? '2px solid #FCA5A5' : '1px solid #CBD5E1',
                    background: outcomeChoice === 'a' ? '#FEF2F2' : '#FFFFFF',
                    fontSize: '0.72rem',
                    textAlign: 'left',
                    color: outcomeChoice === 'a' ? '#991B1B' : '#475569',
                    cursor: 'pointer',
                    fontWeight: outcomeChoice === 'a' ? 700 : 400,
                  }}
                >
                  ✖ "Pense sobre o status semanal"
                </button>
                <button
                  onClick={() => setOutcomeChoice('b')}
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    border: outcomeChoice === 'b' ? '2px solid #86EFAC' : '1px solid #CBD5E1',
                    background: outcomeChoice === 'b' ? '#F0FDF4' : '#FFFFFF',
                    fontSize: '0.72rem',
                    textAlign: 'left',
                    color: outcomeChoice === 'b' ? '#166534' : '#475569',
                    cursor: 'pointer',
                    fontWeight: outcomeChoice === 'b' ? 700 : 400,
                  }}
                >
                  ✓ "Briefing executivo 1 pág. estruturado"
                </button>
              </div>
            </div>

            {/* Cláusula 2: Context */}
            <div className="subcard-base" style={{ padding: '8px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <FileSpreadsheet size={16} color="var(--infnet-cyan)" />
                <strong style={{ fontSize: '0.82rem', color: 'var(--infnet-dark-blue)' }}>2. Contexto (Context)</strong>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <button
                  onClick={() => setContextChoice('a')}
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    border: contextChoice === 'a' ? '2px solid #FCA5A5' : '1px solid #CBD5E1',
                    background: contextChoice === 'a' ? '#FEF2F2' : '#FFFFFF',
                    fontSize: '0.72rem',
                    textAlign: 'left',
                    color: contextChoice === 'a' ? '#991B1B' : '#475569',
                    cursor: 'pointer',
                    fontWeight: contextChoice === 'a' ? 700 : 400,
                  }}
                >
                  ✖ "Consulte tudo no Drive e Slack"
                </button>
                <button
                  onClick={() => setContextChoice('b')}
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    border: contextChoice === 'b' ? '2px solid #86EFAC' : '1px solid #CBD5E1',
                    background: contextChoice === 'b' ? '#F0FDF4' : '#FFFFFF',
                    fontSize: '0.72rem',
                    textAlign: 'left',
                    color: contextChoice === 'b' ? '#166534' : '#475569',
                    cursor: 'pointer',
                    fontWeight: contextChoice === 'b' ? 700 : 400,
                  }}
                >
                  ✓ "Ata homologada e canal #projeto-alpha"
                </button>
              </div>
            </div>

            {/* Cláusula 3: Constraints */}
            <div className="subcard-base" style={{ padding: '8px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <Ban size={16} color="var(--infnet-orange)" />
                <strong style={{ fontSize: '0.82rem', color: 'var(--infnet-dark-blue)' }}>3. Restrições (Constraints)</strong>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <button
                  onClick={() => setConstraintsChoice('a')}
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    border: constraintsChoice === 'a' ? '2px solid #FCA5A5' : '1px solid #CBD5E1',
                    background: constraintsChoice === 'a' ? '#FEF2F2' : '#FFFFFF',
                    fontSize: '0.72rem',
                    textAlign: 'left',
                    color: constraintsChoice === 'a' ? '#991B1B' : '#475569',
                    cursor: 'pointer',
                    fontWeight: constraintsChoice === 'a' ? 700 : 400,
                  }}
                >
                  ✖ "Sem limites, tome a iniciativa"
                </button>
                <button
                  onClick={() => setConstraintsChoice('b')}
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    border: constraintsChoice === 'b' ? '2px solid #86EFAC' : '1px solid #CBD5E1',
                    background: constraintsChoice === 'b' ? '#F0FDF4' : '#FFFFFF',
                    fontSize: '0.72rem',
                    textAlign: 'left',
                    color: constraintsChoice === 'b' ? '#166534' : '#475569',
                    cursor: 'pointer',
                    fontWeight: constraintsChoice === 'b' ? 700 : 400,
                  }}
                >
                  ✓ "Não alterar dados; marcar 'não especificado'"
                </button>
              </div>
            </div>

            {/* Cláusula 4: Criteria */}
            <div className="subcard-base" style={{ padding: '8px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <CheckSquare size={16} color="var(--infnet-green-accent)" />
                <strong style={{ fontSize: '0.82rem', color: 'var(--infnet-dark-blue)' }}>4. Critérios de Aceite</strong>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <button
                  onClick={() => setCriteriaChoice('a')}
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    border: criteriaChoice === 'a' ? '2px solid #FCA5A5' : '1px solid #CBD5E1',
                    background: criteriaChoice === 'a' ? '#FEF2F2' : '#FFFFFF',
                    fontSize: '0.72rem',
                    textAlign: 'left',
                    color: criteriaChoice === 'a' ? '#991B1B' : '#475569',
                    cursor: 'pointer',
                    fontWeight: criteriaChoice === 'a' ? 700 : 400,
                  }}
                >
                  ✖ "Texto bonito e convincente"
                </button>
                <button
                  onClick={() => setCriteriaChoice('b')}
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    border: criteriaChoice === 'b' ? '2px solid #86EFAC' : '1px solid #CBD5E1',
                    background: criteriaChoice === 'b' ? '#F0FDF4' : '#FFFFFF',
                    fontSize: '0.72rem',
                    textAlign: 'left',
                    color: criteriaChoice === 'b' ? '#166534' : '#475569',
                    cursor: 'pointer',
                    fontWeight: criteriaChoice === 'b' ? 700 : 400,
                  }}
                >
                  ✓ "100% dos dados rastreados à fonte"
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Score Meter */}
        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--infnet-dark-blue)' }}>
            Solidez do Contrato:
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              fontWeight: 900,
              color: score === 100 ? '#166534' : score >= 50 ? '#C2410C' : '#991B1B',
            }}
          >
            {score} / 100 PTS
          </span>
        </div>
      </div>

      {/* Compiled Contract Preview */}
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: '#0369A1',
                fontWeight: 800,
                background: '#EDF5FA',
                padding: '3px 10px',
                borderRadius: '6px',
              }}
            >
              ESPECIFICAÇÃO DE CONTRATO COMPILADA
            </span>
            <Sparkles size={16} color="var(--infnet-cyan)" />
          </div>

          <div
            style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              padding: '14px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              lineHeight: 1.5,
              color: '#1E293B',
              minHeight: '260px',
            }}
          >
            <p style={{ color: 'var(--infnet-dark-blue)', fontWeight: 800, marginBottom: '8px' }}>
              # AGENT_CONTRACT_SPEC
            </p>
            <p style={{ color: outcomeChoice === 'b' ? '#166534' : '#991B1B', marginBottom: '8px' }}>
              <strong>[OUTCOME]:</strong> {outcomeChoice === 'b' ? 'Briefing executivo 1 pág. com decisões e prazos.' : 'Pense sobre o status semanal.'}
            </p>
            <p style={{ color: contextChoice === 'b' ? '#166534' : '#991B1B', marginBottom: '8px' }}>
              <strong>[CONTEXT]:</strong> {contextChoice === 'b' ? 'Ata homologada e canal #projeto-alpha.' : 'Todos os arquivos do Drive e Slack.'}
            </p>
            <p style={{ color: constraintsChoice === 'b' ? '#166534' : '#991B1B', marginBottom: '8px' }}>
              <strong>[CONSTRAINTS]:</strong> {constraintsChoice === 'b' ? 'Modo rascunho apenas. Não alterar dados em produção.' : 'Sem restrições operacionais.'}
            </p>
            <p style={{ color: criteriaChoice === 'b' ? '#166534' : '#991B1B' }}>
              <strong>[ACCEPTANCE]:</strong> {criteriaChoice === 'b' ? '100% de rastreabilidade de números à fonte.' : 'Apenas soar convincente.'}
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: '10px',
            padding: '8px 14px',
            borderRadius: '6px',
            background: score === 100 ? '#F0FDF4' : '#FEF2F2',
            border: score === 100 ? '1px solid #86EFAC' : '1px solid #FCA5A5',
            fontSize: '0.78rem',
            color: score === 100 ? '#166534' : '#991B1B',
            textAlign: 'center',
            fontWeight: 700,
          }}
        >
          {score === 100
            ? '✓ Contrato Homologado: Delegação Segura e Auditável'
            : '⚠ Contrato Vulnerável: Corrija as cláusulas em vermelho'}
        </div>
      </div>
    </div>
  );
}
