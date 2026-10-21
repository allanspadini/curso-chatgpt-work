import React, { useState } from 'react';
import { Presentation, Play, RotateCcw, CheckCircle2, Eye } from 'lucide-react';

export default function PresentationsAndThreePassVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Sequência Skill Lab (4 Etapas)', caption: 'Investigate ➔ Narrate ➔ Generate ➔ Review (nunca gerar em 1 único prompt)' },
    { label: '2. Slide Plan & Títulos de Evidência', caption: 'Aprovar o plano antes do deck; títulos comunicam a conclusão, não apenas o tópico' },
    { label: '3. Workflow de 3 Passagens (Rubrica 3.3)', caption: 'Pass 1: Plan (Aprovação) ➔ Pass 2: Build (Rastreável) ➔ Pass 3: Verify (QA Visual)' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Step Header */}
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
            CAPÍTULO 9 • RUBRICA 3.3
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

      {/* Main SVG Progressive Workflow */}
      <div
        style={{
          flex: 1,
          background: '#FFFFFF',
          border: '2px solid #D0E3F0',
          borderRadius: '14px',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <svg viewBox="0 0 1180 390" style={{ width: '100%', height: '100%', maxHeight: '390px' }}>
          <defs>
            <marker id="arrow-dk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0A345D" />
            </marker>
          </defs>

          {/* STEP 1: Top Pipeline — Investigate -> Narrate -> Generate -> Review */}
          <g style={{ opacity: 1, transition: 'opacity 0.3s' }}>
            <text x="25" y="28" fill="#0A345D" fontSize="13" fontWeight="800" fontFamily="var(--font-mono)">
              1. PIPELINE DE APRESENTAÇÕES (OPENAI ACADEMY SKILL LAB):
            </text>
            {[
              { x: 25, title: '1. INVESTIGATE', desc: 'Reunir fontes, decks passados e métricas', bg: '#EFF6FF', border: '#0284C7', color: '#0369A1' },
              { x: 315, title: '2. NARRATE', desc: 'Definir mensagem central, audiência e sequência', bg: '#FAF5FF', border: '#7E22CE', color: '#6B21A8' },
              { x: 605, title: '3. GENERATE', desc: 'Converter Slide Plan aprovado em arquivo', bg: '#FFF7ED', border: '#EA580C', color: '#9A3412' },
              { x: 895, title: '4. REVIEW (QA)', desc: 'Testar suporte factual, leitura e visual', bg: '#F0FDF4', border: '#16A34A', color: '#166534' },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y="40" width="260" height="68" rx="10" fill={b.bg} stroke={b.border} strokeWidth="2" />
                <text x={b.x + 130} y="65" textAnchor="middle" fill={b.color} fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
                  {b.title}
                </text>
                <text x={b.x + 130} y="88" textAnchor="middle" fill="#1E293B" fontSize="11.5" fontWeight="600">
                  {b.desc}
                </text>
                {i < 3 && (
                  <path d={`M ${b.x + 264} 74 L ${b.x + 286} 74`} stroke="#0A345D" strokeWidth="2.5" markerEnd="url(#arrow-dk)" />
                )}
              </g>
            ))}
          </g>

          {/* STEP 2: Slide Plan Checkpoint & Evidence-Led Headlines */}
          <g style={{ opacity: step >= 1 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="25" y="128" width="550" height="242" rx="14" fill="#F8FAFC" stroke="#0284C7" strokeWidth="2" />
            <rect x="45" y="142" width="510" height="28" rx="6" fill="#0284C7" />
            <text x="300" y="161" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              2. CHECKPOINT DO SLIDE PLAN & TEMPLATE REUTILIZÁVEL
            </text>

            <rect x="45" y="180" width="510" height="58" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <text x="60" y="201" fill="#0A345D" fontSize="12" fontWeight="800">
              Anatomia de Cada Slide Planejado (4 itens antes de gerar):
            </text>
            <text x="60" y="222" fill="#0369A1" fontSize="11.5" fontWeight="700" fontFamily="var(--font-mono)">
              [1. Purpose]  •  [2. Headline]  •  [3. Evidence]  •  [4. Visual Concept]
            </text>

            <rect x="45" y="248" width="248" height="54" rx="8" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5" />
            <text x="169" y="269" textAnchor="middle" fill="#991B1B" fontSize="11.5" fontWeight="800">
              ✗ Título de Tópico (Fraco)
            </text>
            <text x="169" y="288" textAnchor="middle" fill="#7F1D1D" fontSize="11">
              "Custos de Logística no Q3"
            </text>

            <rect x="307" y="248" width="248" height="54" rx="8" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.5" />
            <text x="431" y="269" textAnchor="middle" fill="#166534" fontSize="11.5" fontWeight="800">
              ✓ Headline de Evidência (Forte)
            </text>
            <text x="431" y="288" textAnchor="middle" fill="#166534" fontSize="11">
              "Frete aéreo elevou o custo Q3 em 18%"
            </text>

            <rect x="45" y="310" width="510" height="46" rx="8" fill="#EFF6FF" stroke="#BAE6FD" strokeWidth="1.5" />
            <text x="300" y="330" textAnchor="middle" fill="#0A345D" fontSize="11.5" fontWeight="800">
              Reference File (exemplo pontual) ≠ Reusable Template (exemplo + instruções + output)
            </text>
            <text x="300" y="347" textAnchor="middle" fill="#475569" fontSize="10.5">
              Preservar no Master Deck: layouts, tipografia, cores, logos, ordem de seções e proporção 16:9
            </text>
          </g>

          {/* STEP 3: The Three-Pass Workflow + Visual QA (Right) */}
          <g style={{ opacity: step >= 2 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="605" y="128" width="550" height="242" rx="14" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
            <rect x="625" y="142" width="510" height="28" rx="6" fill="#166534" />
            <text x="880" y="161" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              3. WORKFLOW EM 3 PASSAGENS (THREE-PASS WORKFLOW)
            </text>

            <rect x="625" y="180" width="510" height="52" rx="8" fill="#FFFFFF" stroke="#86EFAC" strokeWidth="1.5" />
            <text x="640" y="201" fill="#0369A1" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
              PASS 1 — PLAN (Planejar & Pausar):
            </text>
            <text x="640" y="220" fill="#334155" fontSize="11.5">
              Confirmar audiência, fontes, números, mensagem central, ressalvas e outline. Aguardar aprovação!
            </text>

            <rect x="625" y="240" width="510" height="52" rx="8" fill="#FFFFFF" stroke="#86EFAC" strokeWidth="1.5" />
            <text x="640" y="261" fill="#9A3412" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
              PASS 2 — BUILD (Construir com Restrições):
            </text>
            <text x="640" y="280" fill="#334155" fontSize="11.5">
              1 ideia por slide, títulos guiados por evidência, gráficos legíveis, notas de fonte e speaker notes.
            </text>

            <rect x="625" y="300" width="510" height="56" rx="8" fill="#FFFFFF" stroke="#16A34A" strokeWidth="2" />
            <text x="640" y="321" fill="#166534" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
              PASS 3 — VERIFY (Renderizar & Inspecionar QA Visual):
            </text>
            <text x="640" y="340" fill="#334155" fontSize="11.5">
              Checar overflow, texto cortado, baixo contraste, sobreposição e reconciliar ≥ 2 números com a planilha.
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Bar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Presentation size={16} color="#0284C7" />
          <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Teste dos Títulos:</strong> Um colega deve entender a história lendo apenas os títulos dos slides!
          </span>
        </div>
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Eye size={16} color="#166534" />
          <span style={{ fontSize: '0.8rem', color: '#166534', fontWeight: 700 }}>
            <strong>Segurança na Prática:</strong> Retornar arquivo final + relatório de QA. <em>"Do not share it."</em>
          </span>
        </div>
      </div>
    </div>
  );
}
