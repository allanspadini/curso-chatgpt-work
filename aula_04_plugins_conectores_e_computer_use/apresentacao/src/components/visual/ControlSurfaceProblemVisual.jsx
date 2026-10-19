import React, { useState } from 'react';
import { Play, RotateCcw, Code2, Monitor, CheckCircle2 } from 'lucide-react';

export default function ControlSurfaceProblemVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Rota Estruturada (Plugin)', caption: 'Operações tipadas: busca mensagens como mensagens, arquivos como arquivos' },
    { label: '2. Rota Gráfica (Computer Use)', caption: 'Opera a UI visível quando não há plugin ou o fluxo cruza apps locais' },
    { label: '3. Regra de Ouro de Escolha', caption: 'Não é hierarquia de inteligência; é escolha de Superfície de Controle' },
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
              fontSize: '0.76rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            1. SITUAÇÃO-PROBLEMA 2
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

      {/* Main Comparison Diagram */}
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
          {/* LEFT: Structured Plugin / Connector */}
          <g style={{ opacity: step >= 0 ? 1 : 0.25, transition: 'opacity 0.3s' }}>
            <rect x="20" y="20" width="440" height="350" rx="16" fill="#EFF6FF" stroke="#0284C7" strokeWidth="2.5" />
            <rect x="40" y="38" width="400" height="36" rx="8" fill="#0284C7" />
            <text x="240" y="61" textAnchor="middle" fill="#FFFFFF" fontSize="13.5" fontWeight="800" fontFamily="var(--font-mono)">
              ROTA A: PLUGIN / CONECTOR ESTRUTURADO
            </text>

            {/* Visual Schema Flow */}
            <rect x="45" y="92" width="175" height="62" rx="10" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.5" />
            <text x="132" y="118" textAnchor="middle" fill="#0A345D" fontSize="12.5" fontWeight="800">Operação Definida</text>
            <text x="132" y="138" textAnchor="middle" fill="#0369A1" fontSize="11" fontFamily="var(--font-mono)">search_messages(q)</text>

            <text x="240" y="128" textAnchor="middle" fill="#0284C7" fontSize="22" fontWeight="800">➔</text>

            <rect x="260" y="92" width="175" height="62" rx="10" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.5" />
            <text x="347" y="118" textAnchor="middle" fill="#0A345D" fontSize="12.5" fontWeight="800">Objeto Estruturado</text>
            <text x="347" y="138" textAnchor="middle" fill="#166534" fontSize="11" fontFamily="var(--font-mono)">{"{ id, thread, from }"}</text>

            {/* Properties List */}
            <rect x="45" y="172" width="390" height="178" rx="10" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
            <text x="65" y="200" fill="#0A345D" fontSize="13" fontWeight="800">✓ Independente de Layout de Página</text>
            <text x="65" y="220" fill="#475569" fontSize="11.5">Mudanças visuais no site não quebram o fluxo</text>

            <text x="65" y="252" fill="#0A345D" fontSize="13" fontWeight="800">✓ Permissões e Escopos Previsíveis</text>
            <text x="65" y="272" fill="#475569" fontSize="11.5">Fácil raciocinar sobre leitura vs. escrita</text>

            <text x="65" y="304" fill="#0A345D" fontSize="13" fontWeight="800">✓ Ideal para Buscas e Ações Repetíveis</text>
            <text x="65" y="324" fill="#0369A1" fontSize="11.5" fontWeight="700">Gmail (mensagens), Drive (arquivos), Calendar</text>
          </g>

          {/* CENTER: Decision Criteria Bridge (Step 3) */}
          <g style={{ opacity: step >= 2 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="480" y="55" width="220" height="280" rx="14" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
            <rect x="498" y="38" width="184" height="30" rx="15" fill="#16A34A" />
            <text x="590" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800" fontFamily="var(--font-mono)">
              CRITÉRIO DE ESCOLHA
            </text>

            <text x="590" y="96" textAnchor="middle" fill="#0A345D" fontSize="12.5" fontWeight="800">
              Superfície de Controle
            </text>
            <text x="590" y="114" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">
              (Não hierarquia de IA!)
            </text>

            <rect x="496" y="130" width="188" height="52" rx="8" fill="#FFFFFF" stroke="#86EFAC" />
            <text x="590" y="152" textAnchor="middle" fill="#0A345D" fontSize="12" fontWeight="800">1. Permissões Claras</text>
            <text x="590" y="170" textAnchor="middle" fill="#475569" fontSize="10.5">Menor privilégio necessário</text>

            <rect x="496" y="192" width="188" height="52" rx="8" fill="#FFFFFF" stroke="#86EFAC" />
            <text x="590" y="214" textAnchor="middle" fill="#0A345D" fontSize="12" fontWeight="800">2. Melhor Evidência</text>
            <text x="590" y="232" textAnchor="middle" fill="#475569" fontSize="10.5">Links e registros verificáveis</text>

            <rect x="496" y="254" width="188" height="62" rx="8" fill="#DCFCE7" stroke="#4ADE80" />
            <text x="590" y="276" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="800">3. Review Path Limpo</text>
            <text x="590" y="295" textAnchor="middle" fill="#166534" fontSize="10.5" fontWeight="700">Prefira a Rota A quando</text>
            <text x="590" y="309" textAnchor="middle" fill="#166534" fontSize="10.5" fontWeight="700">ambas resolverem!</text>
          </g>

          {/* RIGHT: Computer Use (Graphical UI) */}
          <g style={{ opacity: step >= 1 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="720" y="20" width="440" height="350" rx="16" fill="#FAF5FF" stroke="#7E22CE" strokeWidth="2.5" />
            <rect x="740" y="38" width="400" height="36" rx="8" fill="#7E22CE" />
            <text x="940" y="61" textAnchor="middle" fill="#FFFFFF" fontSize="13.5" fontWeight="800" fontFamily="var(--font-mono)">
              ROTA B: COMPUTER USE (INTERFACE GRÁFICA)
            </text>

            {/* Visual UI Flow */}
            <rect x="745" y="92" width="175" height="62" rx="10" fill="#FFFFFF" stroke="#D8B4FE" strokeWidth="1.5" />
            <text x="832" y="118" textAnchor="middle" fill="#0A345D" fontSize="12.5" fontWeight="800">Inspeção Visual</text>
            <text x="832" y="138" textAnchor="middle" fill="#7E22CE" fontSize="11" fontFamily="var(--font-mono)">Screen + @Computer</text>

            <text x="940" y="128" textAnchor="middle" fill="#7E22CE" fontSize="22" fontWeight="800">➔</text>

            <rect x="960" y="92" width="175" height="62" rx="10" fill="#FFFFFF" stroke="#D8B4FE" strokeWidth="1.5" />
            <text x="1047" y="118" textAnchor="middle" fill="#0A345D" fontSize="12.5" fontWeight="800">Ação na Interface</text>
            <text x="1047" y="138" textAnchor="middle" fill="#C2410C" fontSize="11" fontFamily="var(--font-mono)">Click / Type / State</text>

            {/* Properties List */}
            <rect x="745" y="172" width="390" height="178" rx="10" fill="#FFFFFF" stroke="#E9D5FF" strokeWidth="1.5" />
            <text x="765" y="200" fill="#0A345D" fontSize="13" fontWeight="800">✓ Quando Não Há Plugin Adequado</text>
            <text x="765" y="220" fill="#475569" fontSize="11.5">Sistemas internos legados ou portais sem conector</text>

            <text x="765" y="252" fill="#0A345D" fontSize="13" fontWeight="800">✓ Fluxos que Cruzam Apps Locais</text>
            <text x="765" y="272" fill="#475569" fontSize="11.5">Notas no Desktop ➔ Planilha Local ➔ Sessão Browser</text>

            <text x="765" y="304" fill="#9A3412" fontSize="13" fontWeight="800">⚠ Exige Escopo Estreito e Visibilidade</text>
            <text x="765" y="324" fill="#C2410C" fontSize="11.5" fontWeight="700">Opera a mesma interface que o humano usa</text>
          </g>
        </svg>
      </div>

      {/* Bottom Key Takeaway Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Code2 size={18} color="#0284C7" />
          <span style={{ fontSize: '0.82rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Plugin Estruturado:</strong> Prioridade máxima quando disponível.
          </span>
        </div>
        <div style={{ background: '#FAF5FF', border: '1px solid #D8B4FE', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Monitor size={18} color="#7E22CE" />
          <span style={{ fontSize: '0.82rem', color: '#581C87', fontWeight: 700 }}>
            <strong>Computer Use:</strong> Para trabalho dependente de interface visual.
          </span>
        </div>
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <CheckCircle2 size={18} color="#166534" />
          <span style={{ fontSize: '0.82rem', color: '#166534', fontWeight: 700 }}>
            <strong>Foco:</strong> Clareza de permissões, evidência e revisão.
          </span>
        </div>
      </div>
    </div>
  );
}
