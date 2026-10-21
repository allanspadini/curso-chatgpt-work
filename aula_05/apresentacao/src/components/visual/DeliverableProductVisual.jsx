import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, Play, RotateCcw } from 'lucide-react';

export default function DeliverableProductVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Pedido de Formato (Falha)', caption: 'Arquivos tecnicamente válidos que falham na decisão real' },
    { label: '2. Entregável como Produto', caption: 'Audiência + Decisão + Fontes + Formato + Camada Imutável' },
    { label: '3. Revisão Dupla (Conteúdo + Render)', caption: 'Plano intermediário antes da geração e inspeção do arquivo final' },
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
              background: '#EFF6FF',
              color: '#0369A1',
              border: '1px solid #BAE6FD',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            CAPÍTULO 9 • PENSE EM ENTREGÁVEIS
          </span>
          <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.93rem' }}>
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

      {/* Main SVG Diagram */}
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
            <marker id="arrow-cyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284C7" />
            </marker>
          </defs>

          {/* STEP 1: The Trap of File-Type Requests (Left) */}
          <g style={{ opacity: 1, transition: 'opacity 0.3s' }}>
            <rect x="20" y="30" width="350" height="330" rx="14" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2.5" />
            <rect x="40" y="46" width="310" height="32" rx="8" fill="#991B1B" />
            <text x="195" y="67" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
              1. PEDIDO INGÊNUO ("FAÇA UM ARQUIVO")
            </text>

            <rect x="40" y="92" width="310" height="72" rx="10" fill="#FFFFFF" stroke="#FCA5A5" strokeWidth="1.5" />
            <text x="195" y="116" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="800">
              📄 Documento Válido, Hierarquia Quebrada
            </text>
            <text x="195" y="136" textAnchor="middle" fill="#475569" fontSize="11.5">
              Texto fluente, mas esconde a decisão e riscos
            </text>
            <text x="195" y="153" textAnchor="middle" fill="#7F1D1D" fontSize="11" fontWeight="700">
              ✗ Altera cláusulas legais ao tentar "melhorar estilo"
            </text>

            <rect x="40" y="176" width="310" height="72" rx="10" fill="#FFFFFF" stroke="#FCA5A5" strokeWidth="1.5" />
            <text x="195" y="200" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="800">
              📊 Planilha Bonita, Fórmula Oculta Errada
            </text>
            <text x="195" y="220" textAnchor="middle" fill="#475569" fontSize="11.5">
              Mistura dado bruto, premissa e cálculo na mesma aba
            </text>
            <text x="195" y="237" textAnchor="middle" fill="#7F1D1D" fontSize="11" fontWeight="700">
              ✗ Pesos arbitrários geram falsa precisão numérica
            </text>

            <rect x="40" y="260" width="310" height="82" rx="10" fill="#FFFFFF" stroke="#FCA5A5" strokeWidth="1.5" />
            <text x="195" y="284" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="800">
              📽️ Deck Persuasivo, Evidência Distorcida
            </text>
            <text x="195" y="304" textAnchor="middle" fill="#475569" fontSize="11.5">
              Títulos de tópico vagos ("Resultados Q3")
            </text>
            <text x="195" y="324" textAnchor="middle" fill="#7F1D1D" fontSize="11" fontWeight="700">
              ✗ Texto cortado (overflow) no slide renderizado
            </text>
          </g>

          {/* STEP 2: Deliverable as a Product with a Purpose (Center) */}
          <g style={{ opacity: step >= 1 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <path d="M 374 195 L 414 195" stroke="#0284C7" strokeWidth="3" markerEnd="url(#arrow-cyan)" />
            <rect x="420" y="30" width="365" height="330" rx="14" fill="#EFF6FF" stroke="#0284C7" strokeWidth="2.5" />
            <rect x="440" y="46" width="325" height="32" rx="8" fill="#0A345D" />
            <text x="602" y="67" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
              2. O ENTREGÁVEL COMO PRODUTO (5 ELEMENTOS)
            </text>

            {[
              { title: '1. Audiência (Audience)', desc: 'Quem vai ler, aprovar ou operar o arquivo?' },
              { title: '2. Decisão (Decision)', desc: 'Qual ação ou escolha o entregável destrava?' },
              { title: '3. Conjunto de Fontes (Source Set)', desc: 'Notas, planilhas e templates aprovados' },
              { title: '4. Formato & Plano Intermediário', desc: 'Rascunho/Outline antes de gerar o arquivo pesado' },
              { title: '5. Elementos Imutáveis (Unchanged)', desc: 'Headings, cláusulas, layouts e definições fixas' },
            ].map((item, i) => {
              const y = 90 + i * 51;
              return (
                <g key={i}>
                  <rect x="440" y={y} width="325" height="44" rx="8" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.5" />
                  <text x="455" y={y + 18} fill="#0A345D" fontSize="12.5" fontWeight="800">
                    {item.title}
                  </text>
                  <text x="455" y={y + 35} fill="#334155" fontSize="11">
                    {item.desc}
                  </text>
                </g>
              );
            })}
          </g>

          {/* STEP 3: Dual Review — Content + Rendered Output (Right) */}
          <g style={{ opacity: step >= 2 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <path d="M 789 195 L 829 195" stroke="#0284C7" strokeWidth="3" markerEnd="url(#arrow-cyan)" />
            <rect x="835" y="30" width="325" height="330" rx="14" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
            <rect x="855" y="46" width="285" height="32" rx="8" fill="#166534" />
            <text x="997" y="67" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
              3. DUPLA INSPEÇÃO OBRIGATÓRIA
            </text>

            <rect x="855" y="92" width="285" height="110" rx="10" fill="#FFFFFF" stroke="#86EFAC" strokeWidth="1.5" />
            <text x="997" y="116" textAnchor="middle" fill="#166534" fontSize="13" fontWeight="800">
              Camada A: Lógica & Conteúdo
            </text>
            <text x="997" y="138" textAnchor="middle" fill="#334155" fontSize="11.5">
              • Fatos citados ≠ Achados ≠ Recomendações
            </text>
            <text x="997" y="158" textAnchor="middle" fill="#334155" fontSize="11.5">
              • Fórmulas reconciliadas manualmente
            </text>
            <text x="997" y="178" textAnchor="middle" fill="#334155" fontSize="11.5">
              • Rastreabilidade direta para a fonte
            </text>

            <rect x="855" y="216" width="285" height="124" rx="10" fill="#FFFFFF" stroke="#86EFAC" strokeWidth="1.5" />
            <text x="997" y="240" textAnchor="middle" fill="#0A345D" fontSize="13" fontWeight="800">
              Camada B: Arquivo Renderizado
            </text>
            <text x="997" y="262" textAnchor="middle" fill="#334155" fontSize="11.5">
              • Abrir o DOCX / XLSX / PPTX final
            </text>
            <text x="997" y="282" textAnchor="middle" fill="#334155" fontSize="11.5">
              • Checar quebras de página e células truncadas
            </text>
            <text x="997" y="302" textAnchor="middle" fill="#334155" fontSize="11.5">
              • Testar como a audiência vai usar (Tela vs Leave-behind)
            </text>
            <text x="997" y="324" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="800" fontFamily="var(--font-mono)">
              ✓ APROVAÇÃO HUMANA CONSCIENTE
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertTriangle size={16} color="#DC2626" />
          <span style={{ fontSize: '0.8rem', color: '#991B1B', fontWeight: 700 }}>
            <strong>Anti-Padrão:</strong> Pedir apenas "crie uma apresentação sobre X" sem definir decisão, fontes e plano.
          </span>
        </div>
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={16} color="#166534" />
          <span style={{ fontSize: '0.8rem', color: '#166534', fontWeight: 700 }}>
            <strong>Regra do Cap. 9:</strong> Especifique o entregável como um produto com propósito e exija um plano intermediário.
          </span>
        </div>
      </div>
    </div>
  );
}
