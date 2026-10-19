import React, { useState } from 'react';
import MathView from '../MathView';
import { Play, RotateCcw, ShieldCheck, AlertOctagon, Layers } from 'lucide-react';

export default function PluginLifecycleGovernanceVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Os 7 Critérios de Instalação', caption: 'Instalar com propósito: avaliar escopo, risco e recuperação antes de aprovar' },
    { label: '2. Rollout Gradual (Read ➔ Write)', caption: 'Começar com leitura e rascunhos; liberar escrita só após testar exceções' },
    { label: '3. Não-Transitividade em 5 Camadas', caption: 'Aprovar em uma camada administrativa NÃO aprova silenciosamente as demais' },
  ];

  const checklist = [
    { num: '01', title: 'Business Outcome', desc: 'Qual resultado de negócio real suporta?' },
    { num: '02', title: 'Owner & Source', desc: 'Quem é o dono e a origem do pacote?' },
    { num: '03', title: 'Components Added', desc: 'Quais Skills, Conectores, MCP e Hooks inclui?' },
    { num: '04', title: 'Accounts & Scopes', desc: 'Quais contas e dados externos acessa?' },
    { num: '05', title: 'Read vs. Write', desc: 'É somente leitura ou altera outro sistema?' },
    { num: '06', title: 'Recovery Path', desc: 'Como reverter uma ação incorreta?' },
    { num: '07', title: 'Lifecycle Owner', desc: 'Quem mantém, revisa e remove o plugin?' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '10px', justifyContent: 'space-between' }}>
      {/* Top Step Controls */}
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
              background: '#166534',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            2 & 3. GOVERNANÇA & TEORIA • RUBRICA 3.2
          </span>
          <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.92rem' }}>
            {steps[step].caption}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setStep(idx)}
              style={{
                padding: '5px 11px',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: idx === step ? '2px solid #0284C7' : '1px solid #CBD5E1',
                background: idx <= step ? '#EFF6FF' : '#FFFFFF',
                color: idx <= step ? '#0369A1' : '#64748B',
              }}
            >
              {s.label}
            </button>
          ))}
          <button
            onClick={() => setStep((prev) => (prev < 2 ? prev + 1 : 0))}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '5px 12px',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer',
              border: '1px solid #0A345D',
              background: '#0A345D',
              color: '#FFFFFF',
            }}
          >
            {step < 2 ? <Play size={13} /> : <RotateCcw size={13} />}
            {step < 2 ? 'Próximo Passo' : 'Reiniciar'}
          </button>
        </div>
      </div>

      {/* Main Content Split */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '14px' }}>
        {/* Left: Step 1 - The 7-Point Installation Gate */}
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0A345D', fontFamily: 'var(--font-mono)' }}>
              PORTÃO DE AUDITORIA PRÉ-INSTALAÇÃO (7 PONTOS)
            </span>
            <span style={{ background: '#EFF6FF', color: '#0369A1', padding: '3px 10px', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 800 }}>
              Install with Purpose
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
            {checklist.map((item, idx) => (
              <div
                key={idx}
                style={{
                  gridColumn: idx === 6 ? 'span 2' : 'span 1',
                  background: idx === 4 || idx === 5 ? '#FFF7ED' : '#F8FAFC',
                  border: idx === 4 || idx === 5 ? '1.5px solid #FDBA74' : '1px solid #CBD5E1',
                  borderRadius: '9px',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    background: idx === 4 || idx === 5 ? '#EA580C' : '#0A345D',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    padding: '3px 7px',
                    borderRadius: '6px',
                  }}
                >
                  {item.num}
                </span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#0A345D' }}>{item.title}</div>
                  <div style={{ fontSize: '0.74rem', color: '#475569' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Step 2: Rollout Progression */}
          <div
            style={{
              opacity: step >= 1 ? 1 : 0.25,
              transition: 'opacity 0.35s',
              background: '#F0FDF4',
              border: '1.5px solid #86EFAC',
              borderRadius: '10px',
              padding: '9px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#166534' }}>
              Rollout Recomendado:
            </span>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0A345D', fontFamily: 'var(--font-mono)' }}>
              1º Read-Only & Rascunhos ➔ 2º Testar Exceções ➔ 3º Escrita Aprovada
            </span>
          </div>
        </div>

        {/* Right: Step 3 - 5 Independent Workspace Admin Layers */}
        <div
          style={{
            opacity: step >= 2 ? 1 : 0.25,
            transition: 'opacity 0.35s',
            background: '#FFFFFF',
            border: '2px solid #D0E3F0',
            borderRadius: '14px',
            padding: '12px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 800, fontSize: '0.86rem', color: '#0A345D', fontFamily: 'var(--font-mono)' }}>
              5 CAMADAS DE CONTROLE DO WORKSPACE ADMIN
            </span>
            <span style={{ background: '#FEF2F2', color: '#991B1B', padding: '3px 9px', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 800 }}>
              Não-Transitivas
            </span>
          </div>

          <svg viewBox="0 0 500 225" style={{ width: '100%', height: '220px' }}>
            {[
              { l: 'Camada 1: Disponibilidade do Plugin no Catálogo', c: '#EFF6FF', b: '#0284C7', t: '#0369A1' },
              { l: 'Camada 2: Permissão de Uso das Skills Inclusas', c: '#F0FDF4', b: '#16A34A', t: '#166534' },
              { l: 'Camada 3: Acesso Autenticado ao Conector (OAuth)', c: '#FFF7ED', b: '#EA580C', t: '#C2410C' },
              { l: 'Camada 4: Ações Permitidas do Conector (Read vs Write)', c: '#FAF5FF', b: '#7E22CE', t: '#6B21A8' },
              { l: 'Camada 5: Permissões de Runtime & Sandbox Ativo', c: '#FEF2F2', b: '#DC2626', t: '#991B1B' },
            ].map((layer, i) => {
              const y = i * 43 + 6;
              return (
                <g key={i}>
                  <rect x="10" y={y} width="480" height="35" rx="8" fill={layer.c} stroke={layer.b} strokeWidth="1.8" />
                  <text x="26" y={y + 22} fill={layer.t} fontSize="12" fontWeight="800">
                    {layer.l}
                  </text>
                  <rect x="405" y={y + 6} width="74" height="22" rx="6" fill="#FFFFFF" stroke={layer.b} />
                  <text x="442" y={y + 21} textAnchor="middle" fill={layer.t} fontSize="10" fontWeight="800" fontFamily="var(--font-mono)">
                    ISOLADA
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Formal Non-Transitivity Axiom */}
          <div
            style={{
              background: '#F8FAFC',
              border: '1.5px solid #CBD5E1',
              borderRadius: '10px',
              padding: '8px 12px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', marginBottom: '2px' }}>
              Teorema da Independência de Camadas Administrativas:
            </div>
            <MathView
              tex="\forall i \neq j \in \{1..5\}: \quad \text{Approve}(\text{Layer}_i) \;\not\Rightarrow\; \text{Approve}(\text{Layer}_j)"
              inline={true}
            />
          </div>
        </div>
      </div>

      {/* Bottom Summary Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={16} color="#0284C7" />
          <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Início Prático:</strong> E-mail, Calendário, Docs e Colaboração.
          </span>
        </div>
        <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertOctagon size={16} color="#EA580C" />
          <span style={{ fontSize: '0.8rem', color: '#9A3412', fontWeight: 700 }}>
            <strong>Higiene:</strong> Remover plugins de teste ao concluir o fluxo.
          </span>
        </div>
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Layers size={16} color="#166534" />
          <span style={{ fontSize: '0.8rem', color: '#166534', fontWeight: 700 }}>
            <strong>Defesa:</strong> Aprovar o plugin não libera escrita automática.
          </span>
        </div>
      </div>
    </div>
  );
}
