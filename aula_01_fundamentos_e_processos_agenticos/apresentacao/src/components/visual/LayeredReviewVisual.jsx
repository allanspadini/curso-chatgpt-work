import React from 'react';
import { CheckSquare2, FileCheck, Search, HelpCircle, MonitorCheck, ShieldAlert, ArrowUp } from 'lucide-react';

export default function LayeredReviewVisual() {
  const layers = [
    { num: '06', title: 'Autorização Externa', tag: 'Homologação Humana HITL', icon: ShieldAlert, color: 'var(--infnet-green-accent)' },
    { num: '05', title: 'Inspeção na Mídia Final', tag: 'Diagramação, Layout e Links', icon: MonitorCheck, color: '#0369A1' },
    { num: '04', title: 'Validação de Premissas', tag: 'Fato Comprovado vs. Hipótese', icon: HelpCircle, color: 'var(--infnet-orange)' },
    { num: '03', title: 'Completude de Casos', tag: 'Casos-Limite e Dados Ausentes', icon: Search, color: 'var(--infnet-purple)' },
    { num: '02', title: 'Confronto Fonte-Dado', tag: 'Rastreamento 1:1 de Números', icon: FileCheck, color: 'var(--infnet-cyan)' },
    { num: '01', title: 'Adequação ao Público', tag: 'Alinhamento com o Decisor', icon: CheckSquare2, color: 'var(--infnet-dark-blue)' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '6px 0',
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '10px',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontSize: '0.9rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
          Metodologia de Auditoria: Inspeção Sistemática em 6 Camadas Ascendentes
        </span>
        <span className="badge-pill" style={{ background: 'var(--infnet-dark-blue)', color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
          Layered Review Protocol
        </span>
      </div>

      {/* Main 6-Layer Vertical Architectural Stack */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          margin: '10px 0',
          flex: 1,
          justifyContent: 'space-around',
        }}
      >
        {layers.map((l, idx) => {
          const Icon = l.icon;
          return (
            <div
              key={idx}
              className="card-base"
              style={{
                padding: '10px 20px',
                display: 'grid',
                gridTemplateColumns: '120px 40px 1fr 280px',
                alignItems: 'center',
                gap: '16px',
                borderLeft: `6px solid ${l.color}`,
                background: idx === 0 ? '#F0FDF4' : idx === 4 ? '#EFF6FF' : '#FFFFFF',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 900,
                  color: l.color,
                  background: '#F1F5F9',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  textAlign: 'center',
                }}
              >
                CAMADA {l.num}
              </span>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Icon size={20} color={l.color} />
              </div>

              <div>
                <strong style={{ fontSize: '0.95rem', color: 'var(--infnet-dark-blue)' }}>
                  {l.title}
                </strong>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span
                  className="badge-pill"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #CBD5E1',
                    color: '#334155',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  {l.tag}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Synthesis Ribbon */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid var(--border-light)',
          borderRadius: '8px',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontSize: '0.82rem', color: 'var(--infnet-dark-blue)', fontWeight: 700 }}>
          Revisão não é um olhar superficial de formatação: ela é embutida na engenharia do próprio processo.
        </span>
        <span className="badge-pill" style={{ background: '#DCFCE7', color: '#166534', fontWeight: 800 }}>
          Checklist de Governança Conforme
        </span>
      </div>
    </div>
  );
}
