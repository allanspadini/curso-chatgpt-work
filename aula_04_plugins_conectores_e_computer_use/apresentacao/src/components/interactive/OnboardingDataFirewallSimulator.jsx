import React, { useState } from 'react';
import { ShieldCheck, ShieldX, Database, CalendarClock } from 'lucide-react';

const FIELDS_DATA = [
  { id: 1, name: 'Preferred Name & Role', category: 'operational', detail: 'Permitido no Tracker, Resumo e Canal de Boas-Vindas' },
  { id: 2, name: 'Team, Manager & Buddy', category: 'operational', detail: 'Essencial para agrupar responsabilidades de preparação' },
  { id: 3, name: 'Start Date & Coarse Timezone', category: 'operational', detail: 'Permite filtrar coorte e planejar agenda sem expor endereço' },
  { id: 4, name: 'Account & Equipment Readiness', category: 'operational', detail: 'Sinaliza pendências operacionais de TI antes do Dia 1' },
  { id: 5, name: 'Compensation & Salary Band', category: 'excluded', detail: 'PROIBIDO recuperar, inferir, resumir ou exibir' },
  { id: 6, name: 'Gov IDs (CPF/SSN) & Home Address', category: 'excluded', detail: 'PROIBIDO em qualquer artefato ou canal de coordenação' },
  { id: 7, name: 'Medical / Disability / Background', category: 'excluded', detail: 'PROIBIDO — sigilo legal estrito fora do fluxo geral' },
  { id: 8, name: 'Interview Feedback & Perf Notes', category: 'excluded', detail: 'PROIBIDO — avaliações privadas não pertencem ao onboarding' },
];

const FACT_VS_PLAN = [
  { text: '"Start date: August 17"', type: 'Source Fact (Fato da Fonte)', color: '#0284C7', bg: '#EFF6FF', desc: 'Registro autoritativo extraído diretamente do Roster aprovado' },
  { text: '"Team: Platform Engineering"', type: 'Source Fact (Fato da Fonte)', color: '#0284C7', bg: '#EFF6FF', desc: 'Atributo factual imutável pelo planejador do agente' },
  { text: '"Create welcome channel by Aug 12"', type: 'Planning Item (Item de Planejamento)', color: '#C2410C', bg: '#FFF7ED', desc: 'Ação proposta para revisão — NÃO confundir com fato consumado!' },
  { text: '"Assign Buddy & confirm laptop"', type: 'Planning Item (Item de Planejamento)', color: '#C2410C', bg: '#FFF7ED', desc: 'Pendência operacional gerada pelo agente para aprovação' },
];

export default function OnboardingDataFirewallSimulator() {
  const [filter, setFilter] = useState('all');

  const visibleFields = FIELDS_DATA.filter((f) => filter === 'all' || f.category === filter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Top Interactive Controls */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '12px',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              background: '#0A345D',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            SIMULADOR INTERATIVO 2 • FIREWALL DE DADOS
          </span>
          <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.92rem' }}>
            Filtro de Exclusão Rígida & Separação entre Fatos da Fonte e Planejamento
          </span>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          {[
            { id: 'all', label: 'Todos os Campos (8)' },
            { id: 'operational', label: '✓ Permitidos (Operacionais)' },
            { id: 'excluded', label: '✗ Excluídos (Hard Boundary)' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              style={{
                padding: '5px 12px',
                borderRadius: '8px',
                fontSize: '0.76rem',
                fontWeight: 800,
                cursor: 'pointer',
                border: filter === btn.id ? '2px solid #0284C7' : '1px solid #CBD5E1',
                background: filter === btn.id ? '#EFF6FF' : '#FFFFFF',
                color: filter === btn.id ? '#0369A1' : '#475569',
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Column Interactive Workspace */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '14px' }}>
        {/* Left: Data Firewall Classifier */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #D0E3F0',
            borderRadius: '14px',
            padding: '12px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontWeight: 800, fontSize: '0.84rem', color: '#0A345D', fontFamily: 'var(--font-mono)' }}>
              1. FIREWALL DE ATRIBUTOS DO ROSTER DE ONBOARDING
            </span>
            <span style={{ fontSize: '0.74rem', color: '#991B1B', fontWeight: 800 }}>
              Exclusão ≠ Preferência de Prompt (Bloqueio Total)
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', flex: 1, alignContent: 'start' }}>
            {visibleFields.map((f) => {
              const isOp = f.category === 'operational';
              return (
                <div
                  key={f.id}
                  style={{
                    background: isOp ? '#F0FDF4' : '#FEF2F2',
                    border: `1.5px solid ${isOp ? '#86EFAC' : '#FCA5A5'}`,
                    borderRadius: '10px',
                    padding: '9px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.82rem', color: isOp ? '#166534' : '#991B1B' }}>
                      {f.name}
                    </span>
                    {isOp ? <ShieldCheck size={16} color="#16A34A" /> : <ShieldX size={16} color="#DC2626" />}
                  </div>
                  <div style={{ fontSize: '0.73rem', color: '#334155', lineHeight: 1.3 }}>
                    {f.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Source Facts vs. Planning Fields Separation */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #D0E3F0',
            borderRadius: '14px',
            padding: '12px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontWeight: 800, fontSize: '0.84rem', color: '#0A345D', fontFamily: 'var(--font-mono)' }}>
            2. SEPARAÇÃO: FATOS DA FONTE VS. CAMPOS DE PLANEJAMENTO
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {FACT_VS_PLAN.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: item.bg,
                  border: `1.5px solid ${item.color}`,
                  borderRadius: '10px',
                  padding: '9px 12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '0.82rem', color: '#0A345D' }}>
                    {item.text}
                  </span>
                  <span
                    style={{
                      background: '#FFFFFF',
                      color: item.color,
                      border: `1px solid ${item.color}`,
                      padding: '2px 8px',
                      borderRadius: '10px',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                    }}
                  >
                    {item.type}
                  </span>
                </div>
                <div style={{ fontSize: '0.74rem', color: '#334155' }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: '#F8FAFC',
              border: '1px solid #CBD5E1',
              borderRadius: '9px',
              padding: '8px 12px',
              fontSize: '0.76rem',
              color: '#0A345D',
              fontWeight: 700,
            }}
          >
            💡 <strong>Por que separar?</strong> Impede que uma ação sugerida pelo agente seja confundida com um registro oficial do RH.
          </div>
        </div>
      </div>

      {/* Bottom Rule Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Database size={16} color="#0284C7" />
          <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>1ª Passagem Read-Only:</strong> Inventariar fontes aprovadas e sinalizar lacunas.
          </span>
        </div>
        <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CalendarClock size={16} color="#EA580C" />
          <span style={{ fontSize: '0.8rem', color: '#9A3412', fontWeight: 700 }}>
            <strong>Regra de Exclusão:</strong> Não recuperar, reproduzir, inferir ou publicar PII/RH.
          </span>
        </div>
      </div>
    </div>
  );
}
