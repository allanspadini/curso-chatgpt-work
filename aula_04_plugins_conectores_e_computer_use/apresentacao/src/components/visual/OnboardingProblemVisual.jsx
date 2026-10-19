import React, { useState } from 'react';
import { Play, RotateCcw, AlertTriangle, EyeOff, Share2 } from 'lucide-react';

export default function OnboardingProblemVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Fontes Fragmentadas', caption: 'Dados espalhados em listas de RH, documentos, mensagens e planilhas' },
    { label: '2. Contaminação por PII/RH', caption: 'Salários, CPF, dados médicos e notas de entrevista misturados na origem' },
    { label: '3. Risco de Anúncio Prematuro', caption: 'Criar canal ou enviar convite sem aprovação revela contratação sigilosa!' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Top Step Bar */}
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
              background: '#FEF2F2',
              color: '#991B1B',
              border: '1px solid #FCA5A5',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            1. SITUAÇÃO-PROBLEMA 3 • ONBOARDING
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

      {/* Main Progressive SVG */}
      <div
        style={{
          flex: 1,
          background: '#FFFFFF',
          border: '2px solid #D0E3F0',
          borderRadius: '14px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <svg viewBox="0 0 1180 390" style={{ width: '100%', height: '100%', maxHeight: '390px' }}>
          <defs>
            <marker id="arrow-danger" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
            </marker>
          </defs>

          {/* STEP 1: Distributed Sources (Left) */}
          <g style={{ opacity: step >= 0 ? 1 : 0.25, transition: 'opacity 0.3s' }}>
            <rect x="20" y="25" width="335" height="340" rx="16" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
            <rect x="40" y="42" width="295" height="32" rx="8" fill="#0A345D" />
            <text x="187" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
              1. FONTES DISPERSAS DE ENTRADA
            </text>

            {[
              { title: '📊 Roster Principal de RH (Sheets)', sub: 'Datas de início, cargos, salários e CPF' },
              { title: '📄 Dossiê de Entrevista (Docs)', sub: 'Feedback de recrutadores e notas privadas' },
              { title: '✉ E-mails de TI & Equipamentos', sub: 'Status de notebook, acessos e endereço' },
              { title: '💬 Threads de Gestores (Slack)', sub: 'Alocação de time, buddy e fuso horário' },
            ].map((src, i) => (
              <g key={i}>
                <rect x="40" y={88 + i * 66} width="295" height="54" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                <text x="56" y={111 + i * 66} fill="#0A345D" fontSize="12.5" fontWeight="800">{src.title}</text>
                <text x="56" y={130 + i * 66} fill="#475569" fontSize="11">{src.sub}</text>
              </g>
            ))}
          </g>

          {/* STEP 2: Mixed Fields Hazard (Center) */}
          <g style={{ opacity: step >= 1 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <path d="M 355 195 L 405 195" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow-danger)" />

            <rect x="415" y="25" width="350" height="340" rx="16" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2.5" />
            <rect x="435" y="42" width="310" height="32" rx="8" fill="#EA580C" />
            <text x="590" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
              2. MISTURA PERIGOSA DE CAMPOS
            </text>

            {/* Operational Box */}
            <rect x="435" y="88" width="310" height="108" rx="10" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.5" />
            <text x="590" y="110" textAnchor="middle" fill="#166534" fontSize="12.5" fontWeight="800">
              ✓ Campos Operacionais (Coordenação)
            </text>
            <text x="590" y="132" textAnchor="middle" fill="#334155" fontSize="11.5">
              Nome preferido • Cargo • Time • Gestor
            </text>
            <text x="590" y="152" textAnchor="middle" fill="#334155" fontSize="11.5">
              Data de início • Fuso/Local • Buddy
            </text>
            <text x="590" y="172" textAnchor="middle" fill="#334155" fontSize="11.5">
              Prontidão de conta e equipamento
            </text>

            {/* Prohibited Toxic Box */}
            <rect x="435" y="210" width="310" height="136" rx="10" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
            <text x="590" y="232" textAnchor="middle" fill="#991B1B" fontSize="12.5" fontWeight="800">
              ✗ Dados Ultrassensíveis (PROIBIDOS)
            </text>
            <text x="590" y="254" textAnchor="middle" fill="#7F1D1D" fontSize="11.5" fontWeight="700">
              Remuneração/Salário • CPF/RG/Passaporte
            </text>
            <text x="590" y="274" textAnchor="middle" fill="#7F1D1D" fontSize="11.5" fontWeight="700">
              Endereço Residencial • Dados Médicos/PCD
            </text>
            <text x="590" y="294" textAnchor="middle" fill="#7F1D1D" fontSize="11.5" fontWeight="700">
              Background Check • Imigração • Demografia
            </text>
            <text x="590" y="314" textAnchor="middle" fill="#7F1D1D" fontSize="11.5" fontWeight="700">
              Feedback de Entrevista & Notas de Performance
            </text>
          </g>

          {/* STEP 3: Unapproved Write Disaster (Right) */}
          <g style={{ opacity: step >= 2 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <path d="M 765 195 L 815 195" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow-danger)" />

            <rect x="825" y="25" width="335" height="340" rx="16" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2.5" />
            <rect x="845" y="42" width="295" height="32" rx="8" fill="#DC2626" />
            <text x="992" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              3. COLAPSO SE EXECUTAR SEM GATE
            </text>

            <rect x="845" y="90" width="295" height="78" rx="10" fill="#FFFFFF" stroke="#FCA5A5" strokeWidth="1.5" />
            <text x="992" y="114" textAnchor="middle" fill="#991B1B" fontSize="12.5" fontWeight="800">
              🚨 Vazamento de Contratação Sigilosa
            </text>
            <text x="992" y="135" textAnchor="middle" fill="#334155" fontSize="11.5">
              Criar o canal #welcome-maria ou enviar
            </text>
            <text x="992" y="152" textAnchor="middle" fill="#334155" fontSize="11.5">
              convites revela vaga ainda não anunciada!
            </text>

            <rect x="845" y="180" width="295" height="78" rx="10" fill="#FFFFFF" stroke="#FCA5A5" strokeWidth="1.5" />
            <text x="992" y="204" textAnchor="middle" fill="#991B1B" fontSize="12.5" fontWeight="800">
              🚨 Exposição de Dados de RH em Canais
            </text>
            <text x="992" y="225" textAnchor="middle" fill="#334155" fontSize="11.5">
              Sem exclusão rígida, o agente copia
            </text>
            <text x="992" y="242" textAnchor="middle" fill="#334155" fontSize="11.5">
              salários ou notas privadas para o tracker
            </text>

            <rect x="845" y="270" width="295" height="76" rx="10" fill="#FFFFFF" stroke="#FCA5A5" strokeWidth="1.5" />
            <text x="992" y="294" textAnchor="middle" fill="#991B1B" fontSize="12.5" fontWeight="800">
              🚨 Confusão Fato vs. Planejamento
            </text>
            <text x="992" y="315" textAnchor="middle" fill="#334155" fontSize="11.5">
              Misturar tarefa proposta com registro
            </text>
            <text x="992" y="332" textAnchor="middle" fill="#334155" fontSize="11.5">
              oficial corrompe a fonte da verdade
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Summary Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Share2 size={16} color="#0A345D" />
          <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Aparente Simplicidade:</strong> Esconde alta dispersão de dados.
          </span>
        </div>
        <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <EyeOff size={16} color="#DC2626" />
          <span style={{ fontSize: '0.8rem', color: '#991B1B', fontWeight: 700 }}>
            <strong>Exclusão Rígida:</strong> Nunca recuperar, inferir ou reproduzir PII/RH.
          </span>
        </div>
        <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertTriangle size={16} color="#EA580C" />
          <span style={{ fontSize: '0.8rem', color: '#9A3412', fontWeight: 700 }}>
            <strong>Zero Ação Prematura:</strong> Encenar 3 artefatos antes de criar canais.
          </span>
        </div>
      </div>
    </div>
  );
}
