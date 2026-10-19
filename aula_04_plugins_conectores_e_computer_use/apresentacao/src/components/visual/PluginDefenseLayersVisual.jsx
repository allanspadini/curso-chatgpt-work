import React, { useState } from 'react';
import MathView from '../MathView';
import { Play, RotateCcw, Shield, AtSign, Terminal } from 'lucide-react';

export default function PluginDefenseLayersVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Superfícies & Ativação', caption: 'ChatGPT Work Web, Desktop App & Codex (Novo Chat + Seleção ou @mention)' },
    { label: '2. As 3 Barreiras de Segurança', caption: 'Instalar o plugin NÃO concede acesso irrestrito aos dados' },
    { label: '3. Formalismo de Interseção', caption: 'A ação só executa se aprovada simultaneamente nas 3 camadas' },
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
              background: '#0A345D',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.76rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            3. TEORIA RIGOROSA
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

      {/* Main Diagram Area */}
      <div
        style={{
          flex: 1,
          background: '#FFFFFF',
          border: '2px solid #D0E3F0',
          borderRadius: '14px',
          padding: '14px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <svg viewBox="0 0 1180 285" style={{ width: '100%', height: '285px' }}>
          <defs>
            <marker id="arrow-navy" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0A345D" />
            </marker>
          </defs>

          {/* STEP 1: Surfaces & Invocation (Left) */}
          <g style={{ opacity: step >= 0 ? 1 : 0.25, transition: 'opacity 0.3s' }}>
            <rect x="15" y="15" width="320" height="255" rx="14" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
            <rect x="35" y="30" width="280" height="28" rx="8" fill="#0A345D" />
            <text x="175" y="49" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              SUPERFÍCIES & INVOCAÇÃO
            </text>

            <rect x="35" y="70" width="280" height="54" rx="8" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" />
            <text x="175" y="92" textAnchor="middle" fill="#0369A1" fontSize="12.5" fontWeight="800">
              🌐 ChatGPT Work (Web)
            </text>
            <text x="175" y="111" textAnchor="middle" fill="#334155" fontSize="11">
              💻 ChatGPT Work / Codex (Desktop App)
            </text>

            <rect x="35" y="135" width="280" height="54" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <text x="175" y="156" textAnchor="middle" fill="#0A345D" fontSize="12" fontWeight="800">
              1. Seleção por Desfecho (Implícita)
            </text>
            <text x="175" y="175" textAnchor="middle" fill="#475569" fontSize="11">
              Descreva a meta e o agente escolhe o plugin
            </text>

            <rect x="35" y="200" width="280" height="54" rx="8" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.5" />
            <text x="175" y="221" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="800">
              2. Menção Explícita (@Plugin / @Skill)
            </text>
            <text x="175" y="240" textAnchor="middle" fill="#166534" fontSize="11" fontFamily="var(--font-mono)">
              *Requer abrir Novo Chat após instalar!
            </text>
          </g>

          {/* STEP 2: 3 Defense-in-Depth Gates (Center-Right) */}
          <g style={{ opacity: step >= 1 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <path d="M 335 142 L 385 142" stroke="#0A345D" strokeWidth="3" markerEnd="url(#arrow-navy)" />

            {/* Gate 1 */}
            <rect x="395" y="20" width="215" height="245" rx="14" fill="#EFF6FF" stroke="#0284C7" strokeWidth="2.5" />
            <circle cx="502" cy="58" r="20" fill="#0284C7" />
            <text x="502" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="800">L1</text>
            <text x="502" y="100" textAnchor="middle" fill="#0A345D" fontSize="13" fontWeight="800">Autenticação do</text>
            <text x="502" y="118" textAnchor="middle" fill="#0A345D" fontSize="13" fontWeight="800">Conector (OAuth)</text>
            <rect x="412" y="136" width="180" height="110" rx="8" fill="#FFFFFF" stroke="#BAE6FD" />
            <text x="502" y="162" textAnchor="middle" fill="#334155" fontSize="11.5">O conector exige</text>
            <text x="502" y="180" textAnchor="middle" fill="#334155" fontSize="11.5">credencial própria</text>
            <text x="502" y="198" textAnchor="middle" fill="#334155" fontSize="11.5">e escopos OAuth</text>
            <text x="502" y="224" textAnchor="middle" fill="#0369A1" fontSize="11" fontWeight="800" fontFamily="var(--font-mono)">Auth_Connector</text>

            <path d="M 610 142 L 645 142" stroke="#0A345D" strokeWidth="3" markerEnd="url(#arrow-navy)" />

            {/* Gate 2 */}
            <rect x="655" y="20" width="215" height="245" rx="14" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2.5" />
            <circle cx="762" cy="58" r="20" fill="#EA580C" />
            <text x="762" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="800">L2</text>
            <text x="762" y="100" textAnchor="middle" fill="#0A345D" fontSize="13" fontWeight="800">Permissões do</text>
            <text x="762" y="118" textAnchor="middle" fill="#0A345D" fontSize="13" fontWeight="800">Serviço Nativo</text>
            <rect x="672" y="136" width="180" height="110" rx="8" fill="#FFFFFF" stroke="#FDBA74" />
            <text x="762" y="162" textAnchor="middle" fill="#334155" fontSize="11.5">O Drive/Gmail aplica</text>
            <text x="762" y="180" textAnchor="middle" fill="#334155" fontSize="11.5">o RBAC real do usuário</text>
            <text x="762" y="198" textAnchor="middle" fill="#334155" fontSize="11.5">(não vê o que você não vê)</text>
            <text x="762" y="224" textAnchor="middle" fill="#C2410C" fontSize="11" fontWeight="800" fontFamily="var(--font-mono)">RBAC_Service</text>

            <path d="M 870 142 L 905 142" stroke="#0A345D" strokeWidth="3" markerEnd="url(#arrow-navy)" />

            {/* Gate 3 */}
            <rect x="915" y="20" width="245" height="245" rx="14" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
            <circle cx="1037" cy="58" r="20" fill="#16A34A" />
            <text x="1037" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="800">L3</text>
            <text x="1037" y="100" textAnchor="middle" fill="#0A345D" fontSize="13" fontWeight="800">Aprovação & Runtime</text>
            <text x="1037" y="118" textAnchor="middle" fill="#0A345D" fontSize="13" fontWeight="800">ChatGPT Work / Codex</text>
            <rect x="932" y="136" width="210" height="110" rx="8" fill="#FFFFFF" stroke="#86EFAC" />
            <text x="1037" y="162" textAnchor="middle" fill="#334155" fontSize="11.5">Políticas do Workspace,</text>
            <text x="1037" y="180" textAnchor="middle" fill="#334155" fontSize="11.5">bloqueio de escrita e</text>
            <text x="1037" y="198" textAnchor="middle" fill="#334155" fontSize="11.5">confirmação humana HITL</text>
            <text x="1037" y="224" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="800" fontFamily="var(--font-mono)">Gate_Runtime</text>
          </g>
        </svg>

        {/* STEP 3: Formal Intersection Formula Box */}
        <div
          style={{
            opacity: step >= 2 ? 1 : 0.25,
            transition: 'opacity 0.35s',
            background: '#F8FAFC',
            border: '1.5px solid #CBD5E1',
            borderRadius: '12px',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Shield size={20} color="#0A345D" />
            <span style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0A345D' }}>
              Invariante de Autorização Efetiva:
            </span>
          </div>
          <div style={{ color: '#0A345D', fontSize: '0.98rem' }}>
            <MathView
              tex="\text{Permissão Efetiva}(a) = \text{Auth}_{\text{Conector}}(a) \;\cap\; \text{RBAC}_{\text{Serviço}}(u, a) \;\cap\; \text{Gate}_{\text{Runtime}}(a)"
              inline={true}
            />
          </div>
          <span
            style={{
              background: '#DCFCE7',
              color: '#166534',
              padding: '4px 10px',
              borderRadius: '8px',
              fontSize: '0.76rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            ZERO ESCALAÇÃO DE PRIVILÉGIO
          </span>
        </div>
      </div>

      {/* Bottom Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Terminal size={16} color="#0284C7" />
          <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Disponibilidade:</strong> Web (ChatGPT Work) e Desktop (Work/Codex).
          </span>
        </div>
        <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AtSign size={16} color="#EA580C" />
          <span style={{ fontSize: '0.8rem', color: '#9A3412', fontWeight: 700 }}>
            <strong>Pós-instalação:</strong> Sempre inicie um <strong>Novo Chat</strong> para carregar.
          </span>
        </div>
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Shield size={16} color="#166534" />
          <span style={{ fontSize: '0.8rem', color: '#166534', fontWeight: 700 }}>
            <strong>Segurança:</strong> Instalar ≠ Autorizar execução irrestrita.
          </span>
        </div>
      </div>
    </div>
  );
}
