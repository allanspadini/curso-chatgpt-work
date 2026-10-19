import React, { useState } from 'react';
import { Play, RotateCcw, Send, Archive, Trash2, Cloud, Monitor } from 'lucide-react';

export default function UnbundledApprovalsScheduleVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Desagregação de Ações', caption: 'Enviar, Arquivar e Deletar possuem riscos e retenções diferentes — NUNCA agrupar!' },
    { label: '2. Log Conciso de Auditoria', caption: 'Registrar a regra aplicada, mensagens afetadas e o resultado de cada operação' },
    { label: '3. Agendamento Cloud vs Desktop', caption: 'Browser Schedule roda com laptop desligado; Desktop Schedule exige máquina ligada' },
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
            3. TEORIA & GOVERNANÇA • INBOX & SCHEDULES
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
          {/* STEP 1: Unbundled Approvals (Left) */}
          <g style={{ opacity: step >= 0 ? 1 : 0.25, transition: 'opacity 0.3s' }}>
            <rect x="15" y="15" width="540" height="245" rx="14" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
            <rect x="35" y="30" width="500" height="30" rx="8" fill="#0A345D" />
            <text x="285" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              1. DESAGREGAÇÃO DE APROVAÇÕES (SEND ≠ ARCHIVE ≠ DELETE)
            </text>

            {/* Box A: Archive */}
            <rect x="35" y="74" width="158" height="170" rx="10" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2" />
            <text x="114" y="100" textAnchor="middle" fill="#166534" fontSize="13" fontWeight="800">📥 ARCHIVE</text>
            <text x="114" y="122" textAnchor="middle" fill="#334155" fontSize="11">Alta Reversibilidade</text>
            <text x="114" y="142" textAnchor="middle" fill="#334155" fontSize="10.5">E-mail continua</text>
            <text x="114" y="158" textAnchor="middle" fill="#334155" fontSize="10.5">100% pesquisável.</text>
            <rect x="47" y="198" width="134" height="32" rx="6" fill="#FFFFFF" stroke="#86EFAC" />
            <text x="114" y="218" textAnchor="middle" fill="#166534" fontSize="10.5" fontWeight="800">Gate de Lote Revisado</text>

            {/* Box B: Draft vs Send */}
            <rect x="206" y="74" width="158" height="170" rx="10" fill="#EFF6FF" stroke="#0284C7" strokeWidth="2" />
            <text x="285" y="100" textAnchor="middle" fill="#0369A1" fontSize="13" fontWeight="800">✉ SEND REPLY</text>
            <text x="285" y="122" textAnchor="middle" fill="#334155" fontSize="11">Efeito Externo</text>
            <text x="285" y="142" textAnchor="middle" fill="#334155" fontSize="10.5">Cria rascunho primeiro;</text>
            <text x="285" y="158" textAnchor="middle" fill="#334155" fontSize="10.5">envio altera relação.</text>
            <rect x="218" y="198" width="134" height="32" rx="6" fill="#FFFFFF" stroke="#93C5FD" />
            <text x="285" y="218" textAnchor="middle" fill="#0369A1" fontSize="10.5" fontWeight="800">Gate Individual de Envio</text>

            {/* Box C: Delete / Trash */}
            <rect x="377" y="74" width="158" height="170" rx="10" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
            <text x="456" y="100" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="800">🗑 DELETE / TRASH</text>
            <text x="456" y="122" textAnchor="middle" fill="#7F1D1D" fontSize="11" fontWeight="700">Risco de Perda</text>
            <text x="456" y="142" textAnchor="middle" fill="#334155" fontSize="10.5">Retenção e expurgo</text>
            <text x="456" y="158" textAnchor="middle" fill="#334155" fontSize="10.5">diferem do arquivo!</text>
            <rect x="389" y="198" width="134" height="32" rx="6" fill="#FFFFFF" stroke="#FCA5A5" />
            <text x="456" y="218" textAnchor="middle" fill="#991B1B" fontSize="10.5" fontWeight="800">Gate Separado Crítico</text>
          </g>

          {/* STEP 2: Concise Action Log (Bottom Left) */}
          <g style={{ opacity: step >= 1 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="15" y="272" width="540" height="102" rx="14" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2" />
            <text x="35" y="298" fill="#9A3412" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
              2. LOG CONCISO DE AÇÃO OBRIGATÓRIO:
            </text>
            <rect x="35" y="308" width="500" height="52" rx="8" fill="#FFFFFF" stroke="#FDBA74" />
            <text x="50" y="330" fill="#0A345D" fontSize="11.5" fontWeight="700" fontFamily="var(--font-mono)">
              [Regra: CI Builds &gt; 7d] ➔ [Afetados: 42 threads] ➔ [Resultado: Arquivados]
            </text>
            <text x="50" y="349" fill="#475569" fontSize="11">
              Garante rastreabilidade imediata caso o usuário precise recuperar algum item.
            </text>
          </g>

          {/* STEP 3: Durable Scheduled Reviews (Right) */}
          <g style={{ opacity: step >= 2 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="580" y="15" width="585" height="360" rx="16" fill="#EFF6FF" stroke="#0284C7" strokeWidth="2.5" />
            <rect x="600" y="30" width="545" height="32" rx="8" fill="#0284C7" />
            <text x="872" y="51" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
              3. REVISÕES AGENDADAS DURÁVEIS (CLOUD vs. DESKTOP)
            </text>

            {/* Browser / Cloud Schedule */}
            <rect x="600" y="76" width="545" height="112" rx="12" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.8" />
            <text x="620" y="102" fill="#0369A1" fontSize="13.5" fontWeight="800">
              ☁ Browser-Based Schedule (Nuvem / Conectores Web)
            </text>
            <text x="620" y="126" fill="#334155" fontSize="12">
              • Continua executando mesmo com o <strong>laptop desligado</strong>.
            </text>
            <text x="620" y="148" fill="#334155" fontSize="12">
              • Ideal para conectores em nuvem (Gmail, Outlook, Google Drive).
            </text>
            <text x="620" y="170" fill="#166534" fontSize="11.5" fontWeight="700" fontFamily="var(--font-mono)">
              ✓ Alta disponibilidade independente da máquina local
            </text>

            {/* Desktop Schedule */}
            <rect x="600" y="200" width="545" height="112" rx="12" fill="#FFFFFF" stroke="#D8B4FE" strokeWidth="1.8" />
            <text x="620" y="226" fill="#7E22CE" fontSize="13.5" fontWeight="800">
              🖥 Desktop Schedule (Aplicativos ou Arquivos Locais)
            </text>
            <text x="620" y="250" fill="#334155" fontSize="12">
              • Depende de arquivos locais ou aplicativos instalados no computador.
            </text>
            <text x="620" y="272" fill="#991B1B" fontSize="12" fontWeight="700">
              • Exige que o computador permaneça LIGADO e o ChatGPT em execução!
            </text>
            <text x="620" y="294" fill="#6B21A8" fontSize="11.5" fontWeight="700" fontFamily="var(--font-mono)">
              ⚠ Configurar explicitamente via chat (depende do plano e workspace)
            </text>

            {/* Signal vs Noise Threshold */}
            <rect x="600" y="322" width="545" height="38" rx="8" fill="#DCFCE7" stroke="#4ADE80" strokeWidth="1.5" />
            <text x="872" y="346" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="800">
              🔕 Limiar de Silêncio: Sinalizar mudanças relevantes e ficar QUIETO quando nada exigir atenção!
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Summary Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Archive size={16} color="#166534" />
          <span style={{ fontSize: '0.78rem', color: '#166534', fontWeight: 700 }}>
            <strong>Arquivo:</strong> Permanece buscável.
          </span>
        </div>
        <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Send size={16} color="#0284C7" />
          <span style={{ fontSize: '0.78rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Rascunho:</strong> Sem envio automático.
          </span>
        </div>
        <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '10px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Trash2 size={16} color="#DC2626" />
          <span style={{ fontSize: '0.78rem', color: '#991B1B', fontWeight: 700 }}>
            <strong>Lixeira:</strong> Aprovação separada.
          </span>
        </div>
        <div style={{ background: '#FAF5FF', border: '1px solid #D8B4FE', borderRadius: '10px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Cloud size={16} color="#7E22CE" />
          <span style={{ fontSize: '0.78rem', color: '#581C87', fontWeight: 700 }}>
            <strong>Schedule:</strong> Só avisa se houver delta.
          </span>
        </div>
      </div>
    </div>
  );
}
