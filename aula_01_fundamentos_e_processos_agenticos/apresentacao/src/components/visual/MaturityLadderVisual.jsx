import React from 'react';
import { Compass, FileCheck, Package, Cpu, ArrowUpRight, Check } from 'lucide-react';

export default function MaturityLadderVisual() {
  const stages = [
    {
      level: 'NÍVEL 01',
      title: 'Tarefa Guiada',
      chips: ['Supervisão Turno a Turno', 'Uploads Manuais', 'Validação Contínua'],
      icon: Compass,
      color: '#64748B',
      badge: 'Manual',
    },
    {
      level: 'NÍVEL 02',
      title: 'Entregável Delegado',
      chips: ['Contrato de Delegação', 'Execução Multi-Etapas', 'Artefato Final Revisável'],
      icon: FileCheck,
      color: 'var(--infnet-dark-blue)',
      badge: 'Contrato',
    },
    {
      level: 'NÍVEL 03',
      title: 'Fluxo Reutilizável',
      chips: ['Skills no Workspace', 'Templates Padronizados', 'Escala para o Time'],
      icon: Package,
      color: 'var(--infnet-cyan)',
      badge: 'Skills',
    },
    {
      level: 'NÍVEL 04',
      title: 'Operação Monitorada',
      chips: ['Gatilhos & Agendamento', 'Trilha de Auditoria', 'Portões HITL Periódicos'],
      icon: Cpu,
      color: 'var(--infnet-green-accent)',
      badge: 'Automação',
    },
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
      {/* 4 Stages Ascending Staircase */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          alignItems: 'flex-end',
          flex: 1,
          marginBottom: '14px',
        }}
      >
        {stages.map((st, idx) => {
          const Icon = st.icon;
          return (
            <div
              key={idx}
              className="card-base"
              style={{
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `6px solid ${st.color}`,
                height: `${280 + idx * 30}px`,
                boxShadow: idx === 3 ? '0 8px 24px rgba(124, 179, 66, 0.25)' : 'var(--shadow-sm)',
                background: idx === 3 ? 'linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 100%)' : '#FFFFFF',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 900, color: st.color }}>
                    {st.level}
                  </span>
                  <div style={{ background: '#F8FAFC', padding: '8px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <Icon size={22} color={st.color} />
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--infnet-dark-blue)', fontWeight: 800, marginBottom: '14px' }}>
                  {st.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {st.chips.map((chip, cIdx) => (
                    <div
                      key={cIdx}
                      style={{
                        padding: '6px 10px',
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: '#334155',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Check size={14} color={st.color} />
                      <span>{chip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '10px', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="badge-pill" style={{ background: '#F1F5F9', color: st.color, fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
                  {st.badge}
                </span>
                <ArrowUpRight size={18} color={st.color} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Synthesis Ribbon */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '10px',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontSize: '0.85rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
          Regra de Ouro: Nunca salte etapas. A automação no Nível 4 só é viável após a validação no Nível 2 e 3.
        </span>
        <span className="badge-pill" style={{ background: 'var(--infnet-dark-blue)', color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
          Esteira de 4 Estágios
        </span>
      </div>
    </div>
  );
}
