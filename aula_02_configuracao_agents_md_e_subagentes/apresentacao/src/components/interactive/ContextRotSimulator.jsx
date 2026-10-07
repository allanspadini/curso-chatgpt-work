import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, RefreshCw, Cpu, Layers, Flame, TrendingDown, Eye, FileText } from 'lucide-react';

export default function ContextRotSimulator() {
  const [noiseLevel, setNoiseLevel] = useState(1); // 1 to 4 steps
  const [activeTab, setActiveTab] = useState('comparison');

  const noiseSteps = [
    { name: '1. Leitura de Contrato & Setup', singleTokens: 2500, multiTokens: 1200, logSnippet: 'Carregado AGENTS.md e contrato de serviço.' },
    { name: '2. Exploração de 60 Arquivos', singleTokens: 28000, multiTokens: 1800, logSnippet: '42 arquivos TypeScript lidos na íntegra no contexto.' },
    { name: '3. Execução de Suíte de Testes (120 testes)', singleTokens: 58000, multiTokens: 2400, logSnippet: '850 linhas de stack traces e asserções falhas inseridas.' },
    { name: '4. Logs de Build & Webpack Bundler', singleTokens: 92000, multiTokens: 3100, logSnippet: '2.400 linhas de logs de compilação intermediários despejados.' },
  ];

  const currentStep = noiseSteps[noiseLevel - 1];

  // Mathematical approximation of Attention Retention based on token saturation
  // Single-agent drops exponentially with tokens
  const singleAttention = Math.max(15, Math.round(100 - (currentStep.singleTokens / 95000) * 82));
  // Multi-subagent stays consistently high because noise is kept off-thread
  const multiAttention = Math.max(92, Math.round(100 - (currentStep.multiTokens / 10000) * 8));

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '360px 1fr',
        gap: '18px',
        height: '100%',
        alignItems: 'stretch',
      }}
    >
      {/* Left Control Panel */}
      <div
        className="card-base"
        style={{
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FFFFFF',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
              Simulador de Carga Cognitiva
            </span>
            <span style={{ fontSize: '0.72rem', background: '#FEF2F2', color: '#991B1B', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
              Context Rot Lab
            </span>
          </div>

          <p style={{ fontSize: '0.78rem', color: '#475569', marginBottom: '14px' }}>
            Avance o fluxo de depuração para observar a saturação da janela de contexto e a degradação dos pesos de atenção no LLM.
          </p>

          {/* Stepper Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            <label style={{ fontSize: '0.74rem', fontWeight: 700, color: '#0A345D' }}>
              ETAPA DA INVESTIGAÇÃO:
            </label>
            {noiseSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setNoiseLevel(idx + 1)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: noiseLevel === idx + 1 ? '2px solid #0369A1' : '1px solid #CBD5E1',
                  background: noiseLevel === idx + 1 ? '#EFF6FF' : '#F8FAFC',
                  color: noiseLevel === idx + 1 ? '#0369A1' : '#334155',
                  fontSize: '0.76rem',
                  fontWeight: noiseLevel === idx + 1 ? 700 : 500,
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {step.name}
              </button>
            ))}
          </div>

          {/* Live Action Log Snippet */}
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 10px' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748B' }}>DADOS INSERIDOS NA ETAPA:</div>
            <div style={{ fontSize: '0.74rem', color: '#1E293B', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
              {currentStep.logSnippet}
            </div>
          </div>
        </div>

        <button
          onClick={() => setNoiseLevel(1)}
          style={{
            padding: '8px 12px',
            background: '#EDF5FA',
            border: '1px solid #D0E3F0',
            borderRadius: '6px',
            fontSize: '0.76rem',
            color: '#0A345D',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          <RefreshCw size={14} /> Reiniciar Experimento
        </button>
      </div>

      {/* Right Side: Side-by-Side Live Metric Comparison */}
      <div
        className="card-base"
        style={{
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FFFFFF',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* Column 1: Single-Agent (Degraded) */}
          <div
            style={{
              background: singleAttention < 50 ? '#FEF2F2' : '#FFF7ED',
              border: singleAttention < 50 ? '2px solid #FCA5A5' : '1px solid #FDBA74',
              borderRadius: '8px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#991B1B' }}>
                  SINGLE-AGENT (MONOLÍTICO)
                </span>
                <Flame size={18} color="#DC2626" />
              </div>

              {/* Metric 1: Tokens */}
              <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#475569' }}>
                  <span>Volume na Janela Principal:</span>
                  <span style={{ fontWeight: 800, color: '#991B1B', fontFamily: 'var(--font-mono)' }}>
                    {currentStep.singleTokens.toLocaleString()} tokens
                  </span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '4px', overflow: 'hidden', marginTop: '3px' }}>
                  <div style={{ width: `${Math.min(100, (currentStep.singleTokens / 95000) * 100)}%`, height: '100%', background: '#DC2626' }} />
                </div>
              </div>

              {/* Metric 2: Attention Fidelity */}
              <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#475569' }}>
                  <span>Fidelidade de Atenção (Chroma Index):</span>
                  <span style={{ fontWeight: 800, color: singleAttention < 50 ? '#991B1B' : '#EA580C' }}>
                    {singleAttention}%
                  </span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '4px', overflow: 'hidden', marginTop: '3px' }}>
                  <div style={{ width: `${singleAttention}%`, height: '100%', background: singleAttention < 50 ? '#DC2626' : '#EA580C' }} />
                </div>
              </div>
            </div>

            {/* Diagnostic Alert */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '6px',
                padding: '8px 10px',
                border: '1px solid #CBD5E1',
                fontSize: '0.72rem',
                color: '#334155',
              }}
            >
              {singleAttention < 50 ? (
                <div style={{ color: '#991B1B', fontWeight: 700 }}>
                  🚨 Alerta Crítico: Lost-in-the-Middle! O modelo esqueceu restrições do contrato e gerou código com falha de segurança.
                </div>
              ) : (
                <div>Início de poluição: instruções originais ainda recuperáveis com degradação leve.</div>
              )}
            </div>
          </div>

          {/* Column 2: Multi-Subagent (Protected) */}
          <div
            style={{
              background: '#F0FDF4',
              border: '2px solid #86EFAC',
              borderRadius: '8px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#166534' }}>
                  MULTI-SUBAGENT (DESACOPLADO)
                </span>
                <CheckCircle2 size={18} color="#166534" />
              </div>

              {/* Metric 1: Tokens */}
              <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#475569' }}>
                  <span>Volume na Janela Principal:</span>
                  <span style={{ fontWeight: 800, color: '#166534', fontFamily: 'var(--font-mono)' }}>
                    {currentStep.multiTokens.toLocaleString()} tokens
                  </span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '4px', overflow: 'hidden', marginTop: '3px' }}>
                  <div style={{ width: `${(currentStep.multiTokens / 95000) * 100}%`, height: '100%', background: '#166534' }} />
                </div>
              </div>

              {/* Metric 2: Attention Fidelity */}
              <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#475569' }}>
                  <span>Fidelidade de Atenção (Chroma Index):</span>
                  <span style={{ fontWeight: 800, color: '#166534' }}>
                    {multiAttention}%
                  </span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '4px', overflow: 'hidden', marginTop: '3px' }}>
                  <div style={{ width: `${multiAttention}%`, height: '100%', background: '#166534' }} />
                </div>
              </div>
            </div>

            {/* Diagnostic Success */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '6px',
                padding: '8px 10px',
                border: '1px solid #86EFAC',
                fontSize: '0.72rem',
                color: '#166534',
                fontWeight: 600,
              }}
            >
              ✓ Contexto principal blindado. Subagentes absorveram 88.900 tokens em threads descartáveis e retornaram apenas síntese destilada.
            </div>
          </div>
        </div>

        {/* Bottom Takeaway */}
        <div
          style={{
            marginTop: '12px',
            padding: '8px 14px',
            background: '#EDF5FA',
            borderRadius: '6px',
            fontSize: '0.75rem',
            color: '#0A345D',
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          Economia de Contexto: 96,6% menos tokens na thread principal • Custo operacional menor e raciocínio 100% ancorado.
        </div>
      </div>
    </div>
  );
}
