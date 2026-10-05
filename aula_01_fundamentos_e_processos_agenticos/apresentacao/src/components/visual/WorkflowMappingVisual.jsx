import React from 'react';
import { Zap, Database, Cpu, ShieldAlert, CheckSquare, FileText, UserCheck, ArrowRight } from 'lucide-react';

export default function WorkflowMappingVisual() {
  const steps = [
    { num: '01', title: 'Gatilho (Trigger)', tag: 'Evento Disparador', icon: Zap, color: 'var(--infnet-dark-blue)' },
    { num: '02', title: 'Fontes Oficiais', tag: 'Sistemas de Registro', icon: Database, color: 'var(--infnet-cyan)' },
    { num: '03', title: 'Transformações', tag: 'Regras de Negócio', icon: Cpu, color: 'var(--infnet-purple)' },
    { num: '04', title: 'Portão HITL', tag: 'Aprovação Crítica', icon: ShieldAlert, color: '#DC2626', isCritical: true },
    { num: '05', title: 'Checagens', tag: 'Critérios de Aceite', icon: CheckSquare, color: 'var(--infnet-cyan)' },
    { num: '06', title: 'Artefato', tag: 'Saída Entregável', icon: FileText, color: 'var(--infnet-dark-blue)' },
    { num: '07', title: 'Dono (Owner)', tag: 'Assinatura Humana', icon: UserCheck, color: 'var(--infnet-green-accent)', isCritical: true },
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
          background: '#FFF7ED',
          border: '1px solid #FDBA74',
          borderRadius: '10px',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShieldAlert size={22} color="#C2410C" />
          <strong style={{ fontSize: '0.92rem', color: '#9A3412' }}>
            Regra Fundamental: Automatizar um processo caótico apenas reproduz erros em maior velocidade
          </strong>
        </div>
        <span className="badge-pill" style={{ background: '#9A3412', color: '#FFFFFF', fontWeight: 800 }}>
          Simplificar Antes de Automatizar
        </span>
      </div>

      {/* Main 7 Steps Horizontal Pipeline */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '10px',
          alignItems: 'stretch',
          margin: '14px 0',
          flex: 1,
        }}
      >
        {steps.map((st, idx) => {
          const Icon = st.icon;
          return (
            <div
              key={idx}
              className="card-base"
              style={{
                padding: '20px 12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `6px solid ${st.color}`,
                background: st.isCritical ? '#EFF6FF' : '#FFFFFF',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 900,
                    color: st.color,
                    background: '#F1F5F9',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    display: 'inline-block',
                    marginBottom: '12px',
                  }}
                >
                  PASSO {st.num}
                </span>

                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: st.isCritical ? '#DBEAFE' : '#F8FAFC',
                    border: `1px solid ${st.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px auto',
                  }}
                >
                  <Icon size={22} color={st.color} />
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '0.95rem',
                    color: 'var(--infnet-dark-blue)',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    marginBottom: '6px',
                  }}
                >
                  {st.title}
                </h4>
              </div>

              <div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: st.isCritical ? '#0369A1' : '#64748B',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    padding: '3px 8px',
                    borderRadius: '12px',
                    display: 'inline-block',
                  }}
                >
                  {st.tag}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-9px',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    background: '#FFFFFF',
                    borderRadius: '50%',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  <ArrowRight size={14} color="#94A3B8" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Synthesis Ribbon */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '8px',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontSize: '0.82rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
          Mapeamento Pré-Agêntico: Apenas fluxos com regras e portões HITL explícitos podem ser delegados com segurança
        </span>
        <span className="badge-pill" style={{ background: 'var(--infnet-dark-blue)', color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
          Workflow Blueprint 7
        </span>
      </div>
    </div>
  );
}
