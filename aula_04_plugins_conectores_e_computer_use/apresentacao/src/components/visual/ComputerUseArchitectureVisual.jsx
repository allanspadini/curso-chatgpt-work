import React, { useState } from 'react';
import { Play, RotateCcw, Monitor, Eye, MousePointerClick } from 'lucide-react';

export default function ComputerUseArchitectureVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Dupla Camada de Permissão', caption: 'Aprovação do App no ChatGPT ≠ Permissões do SO (Screen Recording + Accessibility)' },
    { label: '2. Invocação @Computer vs @Chrome', caption: 'Nomear app, arquivos e meta em @Computer; usar @Chrome para perfil logado' },
    { label: '3. Execução macOS vs Windows', caption: 'macOS suporta Background PiP; Windows opera o desktop ativo em primeiro plano' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
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
              background: '#7E22CE',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            2. SOLUÇÃO DE ENGENHARIA • COMPUTER USE
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
          {/* STEP 1: Dual Permission Stack (Left) */}
          <g style={{ opacity: step >= 0 ? 1 : 0.25, transition: 'opacity 0.3s' }}>
            <rect x="15" y="15" width="365" height="360" rx="16" fill="#FAF5FF" stroke="#7E22CE" strokeWidth="2.5" />
            <rect x="35" y="30" width="325" height="32" rx="8" fill="#7E22CE" />
            <text x="197" y="51" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              1. ARQUITETURA DE PERMISSÕES (DESKTOP)
            </text>

            {/* Layer A: ChatGPT App Approval */}
            <rect x="35" y="76" width="325" height="84" rx="10" fill="#FFFFFF" stroke="#D8B4FE" strokeWidth="1.8" />
            <text x="52" y="100" fill="#0A345D" fontSize="12.5" fontWeight="800">
              Camada A: Aprovação no ChatGPT Work / Codex
            </text>
            <text x="52" y="122" fill="#334155" fontSize="11.5">
              • Instalar e habilitar o plugin Computer Use
            </text>
            <text x="52" y="142" fill="#6B21A8" fontSize="11.5" fontWeight="700">
              • Conceder acesso por aplicativo específico
            </text>

            {/* Layer B: OS-Level Permissions */}
            <rect x="35" y="174" width="325" height="184" rx="10" fill="#FFFFFF" stroke="#D8B4FE" strokeWidth="1.8" />
            <text x="52" y="198" fill="#0A345D" fontSize="12.5" fontWeight="800">
              Camada B: Permissões do Sistema Operacional
            </text>
            <rect x="50" y="212" width="295" height="58" rx="8" fill="#EFF6FF" stroke="#93C5FD" />
            <text x="65" y="233" fill="#0369A1" fontSize="12" fontWeight="800">👁 Screen Recording (Gravação de Tela)</text>
            <text x="65" y="253" fill="#334155" fontSize="11">Permite ao ChatGPT VER o aplicativo aprovado</text>

            <rect x="50" y="280" width="295" height="62" rx="8" fill="#FFF7ED" stroke="#FDBA74" />
            <text x="65" y="301" fill="#C2410C" fontSize="12" fontWeight="800">🖱 Accessibility (Acessibilidade)</text>
            <text x="65" y="321" fill="#334155" fontSize="11">Permite OPERAR cliques e teclado no app</text>
          </g>

          {/* STEP 2: @Computer vs @Chrome Targets (Center) */}
          <g style={{ opacity: step >= 1 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="400" y="15" width="380" height="360" rx="16" fill="#EFF6FF" stroke="#0284C7" strokeWidth="2.5" />
            <rect x="420" y="30" width="340" height="32" rx="8" fill="#0284C7" />
            <text x="590" y="51" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              2. INVOCAÇÃO DIRECIONADA & CASOS DE USO
            </text>

            <rect x="420" y="76" width="340" height="72" rx="10" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.5" />
            <text x="438" y="99" fill="#0369A1" fontSize="13" fontWeight="800" fontFamily="var(--font-mono)">@Computer</text>
            <text x="438" y="119" fill="#334155" fontSize="11.5">Nomear explicitamente: aplicativo, arquivos,</text>
            <text x="438" y="136" fill="#334155" fontSize="11.5">fluxo desejado e resultado final esperado.</text>

            <rect x="420" y="158" width="340" height="72" rx="10" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.5" />
            <text x="438" y="181" fill="#C2410C" fontSize="13" fontWeight="800" fontFamily="var(--font-mono)">@Chrome</text>
            <text x="438" y="201" fill="#334155" fontSize="11.5">Quando a tarefa depende do perfil logado do</text>
            <text x="438" y="218" fill="#9A3412" fontSize="11.5" fontWeight="700">usuário, abas abertas e sessões autenticadas.</text>

            {/* 6 High-Value Use Cases */}
            <rect x="420" y="242" width="340" height="118" rx="10" fill="#F8FAFC" stroke="#CBD5E1" />
            <text x="438" y="263" fill="#0A345D" fontSize="12" fontWeight="800">6 Casos Ideais para Computer Use:</text>
            <text x="438" y="282" fill="#334155" fontSize="11">1. Combinar dados de apps locais em um plano</text>
            <text x="438" y="298" fill="#334155" fontSize="11">2. Atualizar-se em projeto (msgs + docs + browser)</text>
            <text x="438" y="314" fill="#334155" fontSize="11">3. Atualizar tracker a partir de notas locais aprovadas</text>
            <text x="438" y="330" fill="#334155" fontSize="11">4. Testar fluxo gráfico ou reproduzir bug visual de UI</text>
            <text x="438" y="346" fill="#334155" fontSize="11">5. Organizar arquivos locais • 6. Sistema sem plugin</text>
          </g>

          {/* STEP 3: macOS vs Windows Runtime Semantics (Right) */}
          <g style={{ opacity: step >= 2 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="800" y="15" width="365" height="360" rx="16" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
            <rect x="820" y="30" width="325" height="32" rx="8" fill="#16A34A" />
            <text x="982" y="51" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              3. SEMÂNTICA DE EXECUÇÃO: macOS vs WINDOWS
            </text>

            {/* macOS Box */}
            <rect x="820" y="76" width="325" height="92" rx="10" fill="#FFFFFF" stroke="#86EFAC" strokeWidth="1.8" />
            <text x="838" y="100" fill="#166534" fontSize="13" fontWeight="800">🍎 macOS: Background + PiP Preview</text>
            <text x="838" y="122" fill="#334155" fontSize="11.5">• Tarefa escopada pode rodar em background</text>
            <text x="838" y="140" fill="#334155" fontSize="11.5">• Exibe janela Picture-in-Picture (PiP) para</text>
            <text x="838" y="156" fill="#166534" fontSize="11.5" fontWeight="700">supervisão visual contínua do operador</text>

            {/* Windows Box */}
            <rect x="820" y="180" width="325" height="92" rx="10" fill="#FFFFFF" stroke="#FDBA74" strokeWidth="1.8" />
            <text x="838" y="204" fill="#C2410C" fontSize="13" fontWeight="800">🪟 Windows: Active Foreground Desktop</text>
            <text x="838" y="226" fill="#334155" fontSize="11.5">• Opera diretamente o desktop ativo</text>
            <text x="838" y="244" fill="#334155" fontSize="11.5">• Move o ponteiro do mouse e digita em</text>
            <text x="838" y="260" fill="#9A3412" fontSize="11.5" fontWeight="700">primeiro plano (foreground compartilhado)</text>

            {/* Anti-Race Condition Warning */}
            <rect x="820" y="284" width="325" height="76" rx="10" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
            <text x="982" y="306" textAnchor="middle" fill="#991B1B" fontSize="12" fontWeight="800">
              🚫 PROIBIDO PARALELISMO NO MESMO APP
            </text>
            <text x="982" y="325" textAnchor="middle" fill="#7F1D1D" fontSize="11">
              Tarefas paralelas geram race conditions,
            </text>
            <text x="982" y="342" textAnchor="middle" fill="#7F1D1D" fontSize="11">
              sobrescrevem estado e impedem revisão!
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Summary Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        <div style={{ background: '#FAF5FF', border: '1px solid #D8B4FE', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Eye size={16} color="#7E22CE" />
          <span style={{ fontSize: '0.8rem', color: '#581C87', fontWeight: 700 }}>
            <strong>Screen Recording:</strong> Permissão para enxergar a janela.
          </span>
        </div>
        <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MousePointerClick size={16} color="#EA580C" />
          <span style={{ fontSize: '0.8rem', color: '#9A3412', fontWeight: 700 }}>
            <strong>Accessibility:</strong> Permissão para clicar e digitar.
          </span>
        </div>
        <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Monitor size={16} color="#0284C7" />
          <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Um Alvo por Vez:</strong> Escopo focado e resumo final de arquivos.
          </span>
        </div>
      </div>
    </div>
  );
}
