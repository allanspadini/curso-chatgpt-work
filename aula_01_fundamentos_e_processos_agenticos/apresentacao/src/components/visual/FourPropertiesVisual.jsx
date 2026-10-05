import React from 'react';
import { ShieldCheck, Calendar, Filter, FileCode2, AlertOctagon, Check } from 'lucide-react';

export default function FourPropertiesVisual() {
  const properties = [
    {
      title: '1. Autoritativo',
      source: 'Sistemas Oficiais de Registro',
      tags: ['ERP / CRM', 'Atas Homologadas', 'Políticas Assinadas'],
      icon: ShieldCheck,
      color: 'var(--infnet-dark-blue)',
    },
    {
      title: '2. Atual',
      source: 'Vigência Temporal Auditada',
      tags: ['Data de Emissão', 'Versão Ativa Q3', 'Exclusão de Obsoletos'],
      icon: Calendar,
      color: 'var(--infnet-cyan)',
    },
    {
      title: '3. Delimitado (Scoped)',
      source: 'Sinal Cirúrgico > Ruído',
      tags: ['Trechos Relevantes', 'Eliminação de Lixo', 'Foco no Escopo'],
      icon: Filter,
      color: 'var(--infnet-purple)',
    },
    {
      title: '4. Interpretável',
      source: 'Semântica & Glossário Mapeados',
      tags: ['Definição de Siglas', 'Convenções de Métricas', 'Jargões Explicados'],
      icon: FileCode2,
      color: 'var(--infnet-green-accent)',
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
      {/* 4 Pillars Grid */}
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
        {properties.map((p, idx) => {
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
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: p.color }}>
                    PILAR 0{idx + 1}
                  </span>
                  <div style={{ background: '#F8FAFC', padding: '8px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <Icon size={22} color={p.color} />
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--infnet-dark-blue)', fontWeight: 800, marginBottom: '6px' }}>
                  {p.title}
                </h3>

                <span style={{ fontSize: '0.8rem', color: '#0369A1', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
                  {p.source}
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {p.tags.map((tag, tIdx) => (
                    <div
                      key={tIdx}
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
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '10px', borderTop: '1px solid #F1F5F9', textAlign: 'right' }}>
                <span className="badge-pill" style={{ background: '#F1F5F9', color: p.color, fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  Critério de Aceite
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Conflict Protocol Ribbon (Visual) */}
      <div
        style={{
          background: '#FFF7ED',
          border: '2px solid #FDBA74',
          borderRadius: '10px',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <AlertOctagon size={22} color="#C2410C" />
          <strong style={{ fontSize: '0.9rem', color: '#9A3412' }}>
            Protocolo de Conflito: Exigir Rotulação Explícita de Discrepâncias
          </strong>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span className="badge-pill" style={{ background: '#FFFFFF', border: '1px solid #FDBA74', color: '#9A3412', fontWeight: 700 }}>
            Proibido Forçar Consenso Falso
          </span>
          <span className="badge-pill" style={{ background: '#9A3412', color: '#FFFFFF', fontWeight: 700 }}>
            Marcar: "Não Especificado"
          </span>
        </div>
      </div>
    </div>
  );
}
