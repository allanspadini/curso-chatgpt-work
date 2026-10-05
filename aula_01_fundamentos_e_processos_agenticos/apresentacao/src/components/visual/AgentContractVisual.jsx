import React from 'react';
import { Target, FileSpreadsheet, Ban, CheckSquare, FileSignature, Check } from 'lucide-react';

export default function AgentContractVisual() {
  const pillars = [
    {
      title: '1. Desfecho (Outcome)',
      subtitle: 'O Estado Final Acabado',
      chips: ['Artefato Concreto (.docx/.xlsx)', 'Objetivo Mensurável', 'Não é Verbo Vago'],
      icon: Target,
      color: 'var(--infnet-dark-blue)',
      badge: 'Definição',
    },
    {
      title: '2. Contexto (Context)',
      subtitle: 'Evidência & Parâmetros',
      chips: ['Fontes Autorizadas', 'Decisões Homologadas', 'Glossário & Personas'],
      icon: FileSpreadsheet,
      color: 'var(--infnet-cyan)',
      badge: 'Ancoragem',
    },
    {
      title: '3. Restrições (Constraints)',
      subtitle: 'Fronteiras e Linhas Vermelhas',
      chips: ['Não Contatar Clientes', 'Não Alterar Dados Mestres', 'Marcar "Não Especificado"'],
      icon: Ban,
      color: 'var(--infnet-orange)',
      badge: 'Segurança',
    },
    {
      title: '4. Critérios de Aceite',
      subtitle: 'Checklist de Inspeção',
      chips: ['100% de Rastreabilidade', 'Donos e Prazos Preenchidos', 'Validação Humana HITL'],
      icon: CheckSquare,
      color: 'var(--infnet-green-accent)',
      badge: 'Auditoria',
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
      {/* 4 Pillars Modular Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          alignItems: 'stretch',
          flex: 1,
          marginBottom: '12px',
        }}
      >
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="card-base"
              style={{
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `6px solid ${p.color}`,
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 900, color: p.color }}>
                    PILAR 0{idx + 1}
                  </span>
                  <div style={{ background: '#F8FAFC', padding: '8px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <Icon size={22} color={p.color} />
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--infnet-dark-blue)', fontWeight: 800, marginBottom: '4px' }}>
                  {p.title}
                </h3>

                <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600, display: 'block', marginBottom: '16px' }}>
                  {p.subtitle}
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {p.chips.map((chip, cIdx) => (
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
                      <Check size={14} color={p.color} />
                      <span>{chip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '10px', borderTop: '1px solid #F1F5F9', textAlign: 'right' }}>
                <span className="badge-pill" style={{ background: '#F1F5F9', color: p.color, fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
                  {p.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contract Synthesis Banner */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FileSignature size={22} color="var(--infnet-dark-blue)" />
          <span style={{ fontSize: '0.88rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
            Engenharia de Contratos: Substitui a adivinhação do modelo por governança determinística
          </span>
        </div>
        <span className="badge-pill" style={{ background: 'var(--infnet-dark-blue)', color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
          Engenharia de Contratos
        </span>
      </div>
    </div>
  );
}
