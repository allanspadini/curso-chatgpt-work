import React from 'react';
import { AlertTriangle, TrendingDown, Layers, FileWarning, EyeOff, ShieldAlert } from 'lucide-react';

export default function ContextRotVisual() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        gap: '12px',
      }}
    >
      {/* Top Banner Notice */}
      <div
        style={{
          background: '#FEF2F2',
          border: '1px solid #FCA5A5',
          borderRadius: '8px',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <AlertTriangle size={20} color="#991B1B" />
          <span style={{ fontSize: '0.9rem', color: '#991B1B', fontWeight: 700 }}>
            Situação-Problema do Mundo Real:
          </span>
          <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 500 }}>
            As Patologias da Janela de Contexto: Context Pollution (Ruído Intermediário) e Context Rot (Degradação de Atenção).
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#991B1B',
            background: '#FEE2E2',
            padding: '3px 8px',
            borderRadius: '4px',
          }}
        >
          CHROMA RESEARCH
        </span>
      </div>

      {/* Main Grid: Saturação Visual e Degradação de Curva */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '18px',
          flex: 1,
          alignItems: 'stretch',
        }}
      >
        {/* Left: The Single-Thread Pollution Trap */}
        <div
          className="card-base"
          style={{
            padding: '18px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#FFFFFF',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#991B1B', textTransform: 'uppercase' }}>
                1. Context Pollution (Poluição de Contexto)
              </span>
              <span style={{ fontSize: '0.74rem', background: '#FEF2F2', color: '#DC2626', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
                Thread Única
              </span>
            </div>

            <p style={{ fontSize: '0.8rem', color: '#334155', lineHeight: '1.45', marginBottom: '12px' }}>
              Ao executar tudo em uma única sessão, saídas ruidosas soterram as diretrizes e regras contratuais essenciais:
            </p>

            {/* Inundation Visual Blocks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ background: '#DCFCE7', border: '1px solid #86EFAC', borderRadius: '4px', padding: '6px 10px', fontSize: '0.74rem', color: '#166534', fontWeight: 700 }}>
                ✓ Regras de Negócio Iniciais & Contrato (2.000 tokens)
              </div>
              <div style={{ background: '#FEE2E2', border: '1px dashed #F87171', borderRadius: '4px', padding: '6px 10px', fontSize: '0.74rem', color: '#991B1B' }}>
                ⚠️ 1.500 linhas de logs de build do webpack (25.000 tokens)
              </div>
              <div style={{ background: '#FEE2E2', border: '1px dashed #F87171', borderRadius: '4px', padding: '6px 10px', fontSize: '0.74rem', color: '#991B1B' }}>
                ⚠️ Leitura integral de 14 arquivos não relacionados (40.000 tokens)
              </div>
              <div style={{ background: '#FEE2E2', border: '1px dashed #F87171', borderRadius: '4px', padding: '6px 10px', fontSize: '0.74rem', color: '#991B1B' }}>
                ⚠️ Stack traces duplicados de 40 testes falhando (30.000 tokens)
              </div>
            </div>
          </div>

          <div style={{ background: '#FEF2F2', padding: '8px 12px', borderRadius: '6px', border: '1px solid #FCA5A5', fontSize: '0.75rem', color: '#991B1B', fontWeight: 600 }}>
            Resultado: 97% da janela de contexto ocupada por ruído descartável.
          </div>
        </div>

        {/* Right: Context Rot Curve (Chroma Research) */}
        <div
          className="card-base"
          style={{
            padding: '18px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#FFFFFF',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
                2. Context Rot (Pesquisa Empírica Chroma)
              </span>
              <span style={{ fontSize: '0.74rem', background: '#FFF7ED', color: '#C2410C', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
                Decaimento da Atenção
              </span>
            </div>

            {/* SVG Graph Representing Attention Decay vs Noise */}
            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '8px',
                padding: '10px 14px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <svg width="100%" height="130" viewBox="0 0 380 130" fill="none">
                {/* Axes */}
                <line x1="40" y1="110" x2="360" y2="110" stroke="#94A3B8" strokeWidth="2" />
                <line x1="40" y1="20" x2="40" y2="110" stroke="#94A3B8" strokeWidth="2" />

                {/* Grid ticks */}
                <text x="35" y="25" fill="#64748B" fontSize="9" textAnchor="end">100%</text>
                <text x="35" y="70" fill="#64748B" fontSize="9" textAnchor="end">50%</text>
                <text x="35" y="112" fill="#64748B" fontSize="9" textAnchor="end">0%</text>

                {/* Axis Labels */}
                <text x="200" y="125" fill="#475569" fontSize="9" textAnchor="middle">Volume de Tokens de Ruído (0 ➔ 100k)</text>

                {/* Attention Retention Curve (Falling steeply) */}
                <path
                  d="M 40 25 Q 120 30, 180 65 T 350 102"
                  stroke="#DC2626"
                  strokeWidth="3.5"
                  fill="none"
                />

                {/* Critical Point Annotation */}
                <circle cx="180" cy="65" r="5" fill="#DC2626" />
                <text x="190" y="55" fill="#991B1B" fontSize="9" fontWeight="bold">Zona de Amnésia / Alucinação</text>
              </svg>
              <div style={{ fontSize: '0.7rem', color: '#64748B', marginTop: '4px', textAlign: 'center' }}>
                Curva de Fidelidade: A capacidade de resgatar fatos no meio do prompt decai drasticamente com o ruído.
              </div>
            </div>

            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#334155' }}>
                <EyeOff size={15} color="#DC2626" />
                <span><strong>Lost-in-the-Middle:</strong> O modelo prioriza início e fim, ignorando o miolo poluído.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#334155' }}>
                <ShieldAlert size={15} color="#DC2626" />
                <span><strong>Alucinações Confiantes:</strong> O modelo preenche lacunas esquecidas com suposições falsas.</span>
              </div>
            </div>
          </div>

          <div style={{ background: '#EDF5FA', padding: '6px 12px', borderRadius: '4px', fontSize: '0.74rem', color: '#0369A1', fontWeight: 700, textAlign: 'center' }}>
            A conclusão científica: Manter tudo na mesma thread destrói a confiabilidade do agente.
          </div>
        </div>
      </div>
    </div>
  );
}
