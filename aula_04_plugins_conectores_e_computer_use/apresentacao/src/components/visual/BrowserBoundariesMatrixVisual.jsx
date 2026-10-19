import React, { useState } from 'react';
import { Play, RotateCcw, Globe, ShieldAlert, PauseOctagon } from 'lucide-react';

export default function BrowserBoundariesMatrixVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. As 3 Fronteiras de Browser', caption: 'Signed-in Chrome (@Chrome) vs Built-in Browser vs Cloud Browser' },
    { label: '2. Controles Operacionais & Pausas', caption: 'Pausar antes de enviar, comprar, submeter, mudar permissões ou deletar' },
    { label: '3. Visibilidade de Estado Salvo', caption: 'Edições em apps desktop só aparecem na revisão após salvas — exigir resumo!' },
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
              background: '#0A345D',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            3. TEORIA RIGOROSA • FRONTEIRAS DE BROWSER & CONTENÇÃO
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
          {/* STEP 1: The 3 Browser Isolation Tiers (Top Row) */}
          <g style={{ opacity: step >= 0 ? 1 : 0.25, transition: 'opacity 0.3s' }}>
            {/* Browser 1: Signed-in Chrome */}
            <rect x="15" y="15" width="370" height="205" rx="14" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2.5" />
            <rect x="33" y="30" width="334" height="28" rx="7" fill="#EA580C" />
            <text x="200" y="49" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              1. SIGNED-IN CHROME (@Chrome)
            </text>
            <text x="35" y="80" fill="#0A345D" fontSize="12" fontWeight="800">• Usa o perfil real logado do usuário</text>
            <text x="35" y="102" fill="#334155" fontSize="11.5">• Acessa abas abertas e sessões autenticadas</text>
            <text x="35" y="124" fill="#9A3412" fontSize="11.5" fontWeight="700">• Ações = realizadas na conta do titular!</text>
            <rect x="33" y="142" width="334" height="62" rx="8" fill="#FEF2F2" stroke="#FCA5A5" />
            <text x="200" y="164" textAnchor="middle" fill="#991B1B" fontSize="11" fontWeight="800">
              ⚠ Alto Risco de Efeito Externo
            </text>
            <text x="200" y="182" textAnchor="middle" fill="#7F1D1D" fontSize="10.5">
              Páginas podem conter instruções enganosas;
            </text>
            <text x="200" y="196" textAnchor="middle" fill="#7F1D1D" fontSize="10.5">
              cliques/submissões alteram sistemas reais.
            </text>

            {/* Browser 2: Built-in Browser */}
            <rect x="405" y="15" width="370" height="205" rx="14" fill="#EFF6FF" stroke="#0284C7" strokeWidth="2.5" />
            <rect x="423" y="30" width="334" height="28" rx="7" fill="#0284C7" />
            <text x="590" y="49" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              2. BUILT-IN BROWSER (SESSÃO SEPARADA)
            </text>
            <text x="425" y="80" fill="#0A345D" fontSize="12" fontWeight="800">• Opera em sessão isolada do Chrome pessoal</text>
            <text x="425" y="102" fill="#334155" fontSize="11.5">• Ideal para sites locais (localhost) ou públicos</text>
            <text x="425" y="124" fill="#0369A1" fontSize="11.5" fontWeight="700">• Não expõe cookies do perfil principal</text>
            <rect x="423" y="142" width="334" height="62" rx="8" fill="#FFFFFF" stroke="#93C5FD" />
            <text x="590" y="166" textAnchor="middle" fill="#0369A1" fontSize="11" fontWeight="800">
              ✓ Equilíbrio Local / Isolamento
            </text>
            <text x="590" y="186" textAnchor="middle" fill="#334155" fontSize="10.5">
              Excelente para testar interfaces locais sem risco de
            </text>
            <text x="590" y="200" textAnchor="middle" fill="#334155" fontSize="10.5">
              contaminar sessões corporativas abertas.
            </text>

            {/* Browser 3: Cloud Browser */}
            <rect x="795" y="15" width="370" height="205" rx="14" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
            <rect x="813" y="30" width="334" height="28" rx="7" fill="#16A34A" />
            <text x="980" y="49" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              3. CLOUD BROWSER (REMOTO SIGNED-OUT)
            </text>
            <text x="815" y="80" fill="#0A345D" fontSize="12" fontWeight="800">• Navegação pública sem login (signed-out)</text>
            <text x="815" y="102" fill="#334155" fontSize="11.5">• Isolado da rede e do disco da máquina local</text>
            <text x="815" y="124" fill="#166534" fontSize="11.5" fontWeight="700">• Máxima contenção para pesquisa pública</text>
            <rect x="813" y="142" width="334" height="62" rx="8" fill="#FFFFFF" stroke="#86EFAC" />
            <text x="980" y="164" textAnchor="middle" fill="#991B1B" fontSize="11" fontWeight="800">
              ✗ Limite Estrito (Não Substitui Local):
            </text>
            <text x="980" y="182" textAnchor="middle" fill="#334155" fontSize="10.5">
              Sem acesso a arquivos locais, abas abertas,
            </text>
            <text x="980" y="196" textAnchor="middle" fill="#334155" fontSize="10.5">
              extensões, senhas salvas ou fluxos de pagamento.
            </text>
          </g>

          {/* STEP 2 & 3: Mandatory Pause Gates & Unsaved State Rule (Bottom Row) */}
          <g style={{ opacity: step >= 1 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="15" y="236" width="675" height="140" rx="14" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
            <text x="35" y="262" fill="#991B1B" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
              2. PROTOCOLO DE SUPERVISÃO E PAUSA OBRIGATÓRIA EM COMPUTER USE:
            </text>
            <text x="35" y="286" fill="#1E293B" fontSize="11.5" fontWeight="700">
              • Pausar ANTES de: Enviar (Sending) • Comprar (Buying) • Submeter (Submitting) • Mudar Permissões • Deletar • Alterar Dados
            </text>
            <text x="35" y="308" fill="#1E293B" fontSize="11.5">
              • Manter aplicativos sensíveis fechados; permanecer presente em ajustes de conta, segurança, privacidade, credenciais, rede ou pagamento.
            </text>
            <text x="35" y="330" fill="#991B1B" fontSize="11.5" fontWeight="800">
              • Interromper imediatamente (STOP) se o agente entrar na janela errada!
            </text>
            <text x="35" y="354" fill="#0369A1" fontSize="11" fontWeight="700" fontFamily="var(--font-mono)">
              Regra: Dar 1 alvo claro por vez (One clear target at a time).
            </text>
          </g>

          <g style={{ opacity: step >= 2 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="708" y="236" width="457" height="140" rx="14" fill="#F8FAFC" stroke="#0A345D" strokeWidth="2" />
            <text x="728" y="262" fill="#0A345D" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
              3. ESTADO EM MEMÓRIA vs. ARQUIVO SALVO:
            </text>
            <rect x="728" y="274" width="417" height="86" rx="8" fill="#FFFFFF" stroke="#CBD5E1" />
            <text x="742" y="298" fill="#9A3412" fontSize="11.5" fontWeight="800">
              ⚠ Mudanças feitas via UI Desktop não aparecem em
            </text>
            <text x="742" y="316" fill="#9A3412" fontSize="11.5" fontWeight="800">
              revisão de arquivos (file diff) até serem SALVAS!
            </text>
            <text x="742" y="342" fill="#166534" fontSize="11.5" fontWeight="800">
              ✓ Exigir resumo final: App + Registros + Arquivos alterados.
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Summary Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Globe size={16} color="#EA580C" />
          <span style={{ fontSize: '0.8rem', color: '#9A3412', fontWeight: 700 }}>
            <strong>@Chrome:</strong> Age com sua sessão autenticada real.
          </span>
        </div>
        <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PauseOctagon size={16} color="#DC2626" />
          <span style={{ fontSize: '0.8rem', color: '#991B1B', fontWeight: 700 }}>
            <strong>Presença Humana:</strong> Em credenciais, rede e pagamentos.
          </span>
        </div>
        <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldAlert size={16} color="#0284C7" />
          <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Auditoria Final:</strong> Resumo obrigatório de estados salvos.
          </span>
        </div>
      </div>
    </div>
  );
}
