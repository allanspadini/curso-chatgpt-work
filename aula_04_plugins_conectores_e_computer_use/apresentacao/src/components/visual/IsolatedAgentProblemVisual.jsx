import React, { useState } from 'react';
import { AlertTriangle, ArrowRight, Play, RotateCcw } from 'lucide-react';

export default function IsolatedAgentProblemVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Agente Geral Isolado', caption: 'Raciocina sobre a tarefa, mas não enxerga onde os fatos vivem' },
    { label: '2. Silos Externos de Trabalho', caption: 'E-mails, arquivos, planilhas de RH e apps locais desconectados' },
    { label: '3. Gargalo da Ponte Manual', caption: 'Operador humano vira "copiador de contexto" sem governança de ação' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Step-by-Step Controls Header */}
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
              fontSize: '0.76rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            1. SITUAÇÃO-PROBLEMA
          </span>
          <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.94rem' }}>
            {steps[step].caption}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setStep(idx)}
              style={{
                padding: '5px 12px',
                borderRadius: '8px',
                fontSize: '0.76rem',
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
              fontSize: '0.76rem',
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

      {/* Main Progressive SVG Diagram */}
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
            <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
            </marker>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284C7" />
            </marker>
          </defs>

          {/* STEP 1: Isolated General Agent (Left) */}
          <g style={{ opacity: 1, transition: 'opacity 0.3s' }}>
            <rect x="25" y="65" width="310" height="260" rx="16" fill="#EFF6FF" stroke="#0284C7" strokeWidth="2.5" />
            <rect x="45" y="85" width="270" height="34" rx="8" fill="#0A345D" />
            <text x="180" y="107" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800" fontFamily="var(--font-mono)">
              AGENTE GERAL (SEM PLUGINS)
            </text>

            <rect x="48" y="135" width="264" height="52" rx="10" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
            <text x="180" y="158" textAnchor="middle" fill="#0A345D" fontSize="13" fontWeight="800">
              ✓ Raciocínio & Planejamento
            </text>
            <text x="180" y="177" textAnchor="middle" fill="#475569" fontSize="11.5">
              Decompõe tarefas e aplica Skills
            </text>

            <rect x="48" y="200" width="264" height="52" rx="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5" />
            <text x="180" y="223" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="800">
              ✗ Cego para Sistemas Externos
            </text>
            <text x="180" y="242" textAnchor="middle" fill="#7F1D1D" fontSize="11.5">
              Sem leitura direta de Gmail/Drive/RH
            </text>

            <rect x="48" y="264" width="264" height="44" rx="10" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1.5" />
            <text x="180" y="291" textAnchor="middle" fill="#9A3412" fontSize="12.5" fontWeight="800">
              ✗ Incapaz de Executar Ações
            </text>
          </g>

          {/* STEP 3: The Manual Copy-Paste Bottleneck Wall (Center) */}
          <g style={{ opacity: step >= 2 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            {/* Wall Barrier */}
            <rect x="425" y="40" width="270" height="310" rx="14" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="8 5" />
            <rect x="450" y="26" width="220" height="28" rx="14" fill="#DC2626" />
            <text x="560" y="45" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              FRONTEIRA DE ISOLAMENTO
            </text>

            {/* Broken Manual Arrows */}
            <path d="M 335 140 L 420 140" stroke="#DC2626" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#arrow-red)" />
            <path d="M 700 140 L 785 140" stroke="#DC2626" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#arrow-red)" />

            <rect x="448" y="75" width="224" height="68" rx="10" fill="#FFFFFF" stroke="#FCA5A5" strokeWidth="1.5" />
            <text x="560" y="100" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="800">
              1. Ctrl+C / Ctrl+V Manual
            </text>
            <text x="560" y="120" textAnchor="middle" fill="#475569" fontSize="11.5">
              Contexto truncado e desatualizado
            </text>

            <rect x="448" y="158" width="224" height="68" rx="10" fill="#FFFFFF" stroke="#FCA5A5" strokeWidth="1.5" />
            <text x="560" y="183" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="800">
              2. Vazamento de Escopo
            </text>
            <text x="560" y="203" textAnchor="middle" fill="#475569" fontSize="11.5">
              Colagem acidental de PII e salários
            </text>

            <rect x="448" y="241" width="224" height="84" rx="10" fill="#FFFFFF" stroke="#FCA5A5" strokeWidth="1.5" />
            <text x="560" y="266" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="800">
              3. Zero Rastreabilidade
            </text>
            <text x="560" y="286" textAnchor="middle" fill="#475569" fontSize="11.5">
              Sem vínculo com a fonte oficial
            </text>
            <text x="560" y="305" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="700" fontFamily="var(--font-mono)">
              RISCO DE ALUCINAÇÃO & ERRO
            </text>
          </g>

          {/* STEP 2: External Enterprise Silos (Right) */}
          <g style={{ opacity: step >= 1 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="790" y="40" width="365" height="310" rx="16" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
            <text x="972" y="70" textAnchor="middle" fill="#0A345D" fontSize="14" fontWeight="800" fontFamily="var(--font-mono)">
              ONDE O TRABALHO REAL VIVE
            </text>

            {/* Silo 1: Gmail / Outlook */}
            <rect x="815" y="88" width="315" height="54" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <circle cx="845" cy="115" r="16" fill="#EFF6FF" />
            <text x="845" y="120" textAnchor="middle" fill="#0284C7" fontSize="13" fontWeight="800">✉</text>
            <text x="875" y="111" fill="#0A345D" fontSize="13" fontWeight="800">Gmail / Outlook Corporativo</text>
            <text x="875" y="129" fill="#475569" fontSize="11.5">Threads de clientes, alertas e compromissos</text>

            {/* Silo 2: Google Drive / Docs / Sheets */}
            <rect x="815" y="152" width="315" height="54" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <circle cx="845" cy="179" r="16" fill="#F0FDF4" />
            <text x="845" y="184" textAnchor="middle" fill="#166534" fontSize="13" fontWeight="800">📁</text>
            <text x="875" y="175" fill="#0A345D" fontSize="13" fontWeight="800">Google Drive & Planilhas de RH</text>
            <text x="875" y="193" fill="#475569" fontSize="11.5">Rosters de onboarding, trackers e políticas</text>

            {/* Silo 3: Collaboration (Slack / Teams) */}
            <rect x="815" y="216" width="315" height="54" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <circle cx="845" cy="243" r="16" fill="#FFF7ED" />
            <text x="845" y="248" textAnchor="middle" fill="#C2410C" fontSize="13" fontWeight="800">#</text>
            <text x="875" y="239" fill="#0A345D" fontSize="13" fontWeight="800">Canais de Colaboração & Equipe</text>
            <text x="875" y="257" fill="#475569" fontSize="11.5">Espaços de boas-vindas, avisos a gestores</text>

            {/* Silo 4: Local Desktop Apps & Browser */}
            <rect x="815" y="280" width="315" height="54" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <circle cx="845" cy="307" r="16" fill="#FAF5FF" />
            <text x="845" y="312" textAnchor="middle" fill="#7E22CE" fontSize="13" fontWeight="800">🖥</text>
            <text x="875" y="303" fill="#0A345D" fontSize="13" fontWeight="800">Apps Desktop & Sessões Chrome</text>
            <text x="875" y="321" fill="#475569" fontSize="11.5">Sistemas sem API, notas locais e UI gráfica</text>
          </g>
        </svg>
      </div>

      {/* Bottom Synthesis Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <AlertTriangle size={18} color="#DC2626" />
          <span style={{ fontSize: '0.82rem', color: '#1E293B', fontWeight: 700 }}>
            <strong>Dor Real:</strong> Desfechos dependem de dados e ações fora do chat.
          </span>
        </div>
        <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ArrowRight size={18} color="#C2410C" />
          <span style={{ fontSize: '0.82rem', color: '#9A3412', fontWeight: 700 }}>
            <strong>Limitação da Skill Pura:</strong> Ensina o método, mas não autentica na API.
          </span>
        </div>
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ArrowRight size={18} color="#166534" />
          <span style={{ fontSize: '0.82rem', color: '#166534', fontWeight: 700 }}>
            <strong>Próximo Passo:</strong> Equipar o agente com <strong>Plugins Governados</strong>.
          </span>
        </div>
      </div>
    </div>
  );
}
