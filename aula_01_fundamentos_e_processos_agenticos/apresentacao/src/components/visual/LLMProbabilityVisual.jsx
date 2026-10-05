import React from 'react';
import MathView from '../MathView';
import { AlertTriangle, CheckCircle, Database, Cpu, Sparkles, ArrowRight } from 'lucide-react';

export default function LLMProbabilityVisual() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '6px 0',
      }}
    >
      {/* Top Mathematical Formulation Header */}
      <div
        className="card-base"
        style={{
          padding: '14px 24px',
          background: '#FFFFFF',
          borderTop: '5px solid var(--infnet-dark-blue)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Cpu size={22} color="var(--infnet-dark-blue)" />
          <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.2rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
            Mecanismo Autorregressivo de Inferência de Tokens
          </h3>
        </div>

        <div style={{ background: '#F8FAFC', padding: '6px 18px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <MathView
            math="P(w_t \mid w_1, \dots, w_{t-1}, \mathcal{C}) = \text{softmax}\left(\frac{z_t}{\tau}\right)"
          />
        </div>

        <span className="badge-pill" style={{ background: '#EDF5FA', color: '#0369A1', fontFamily: 'var(--font-mono)' }}>
          Next-Token Sampling
        </span>
      </div>

      {/* Main Wide Architecture Flowchart */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '260px 36px 1fr 36px 260px',
          alignItems: 'center',
          margin: '12px 0',
          flex: 1,
        }}
      >
        {/* Step 1: Input Sequence */}
        <div
          className="card-base"
          style={{
            padding: '20px',
            textAlign: 'center',
            borderTop: '4px solid #64748B',
            height: '210px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', fontWeight: 800 }}>
            ENTRADA DE CONTEXTO
          </span>
          <div style={{ padding: '10px', background: '#F8FAFC', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--infnet-dark-blue)', fontWeight: 700 }}>
              [w₁, w₂, ..., wₜ₋₁]
            </span>
            <span style={{ fontSize: '0.72rem', color: '#64748B', display: 'block', marginTop: '4px' }}>
              Janela de Contexto &#x2208; &#x211D;^(B &#xD7; T)
            </span>
          </div>
          <span className="badge-pill" style={{ background: '#F1F5F9', color: '#334155', alignSelf: 'center', fontSize: '0.72rem' }}>
            Embedding + Posição
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ArrowRight size={24} color="#CBD5E1" />
        </div>

        {/* Step 2: Transformer Blocks */}
        <div
          className="card-base"
          style={{
            padding: '20px 24px',
            textAlign: 'center',
            borderTop: '4px solid var(--infnet-cyan)',
            height: '210px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 100%)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#0369A1', fontWeight: 800 }}>
              CAMADAS TRANSFORMER
            </span>
            <span className="badge-pill" style={{ background: '#DCFCE7', color: '#166534', fontSize: '0.7rem' }}>
              N Camadas de Atenção
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              margin: '8px 0',
            }}
          >
            <div style={{ padding: '8px', background: '#FFFFFF', borderRadius: '6px', border: '1px solid #CBD5E1' }}>
              <strong style={{ fontSize: '0.8rem', color: 'var(--infnet-dark-blue)', display: 'block' }}>Multi-Head Attention</strong>
              <span style={{ fontSize: '0.7rem', color: '#64748B' }}>Padrões de Coocorrência</span>
            </div>
            <div style={{ padding: '8px', background: '#FFFFFF', borderRadius: '6px', border: '1px solid #CBD5E1' }}>
              <strong style={{ fontSize: '0.8rem', color: 'var(--infnet-dark-blue)', display: 'block' }}>Feed-Forward (MLP)</strong>
              <span style={{ fontSize: '0.7rem', color: '#64748B' }}>Memória Paramétrica</span>
            </div>
          </div>

          <div style={{ padding: '6px', background: '#FFFFFF', borderRadius: '4px', border: '1px solid #93C5FD' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#0369A1', fontWeight: 700 }}>
              Vetor de Logits zₜ &#x2208; &#x211D;^|V|
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ArrowRight size={24} color="#CBD5E1" />
        </div>

        {/* Step 3: Sampled Token */}
        <div
          className="card-base"
          style={{
            padding: '20px',
            textAlign: 'center',
            borderTop: '4px solid var(--infnet-green-accent)',
            height: '210px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#166534', fontWeight: 800 }}>
            SAÍDA GERADA
          </span>
          <div style={{ padding: '10px', background: '#F0FDF4', borderRadius: '6px', border: '1px solid #86EFAC' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#166534', fontWeight: 800 }}>
              Token wₜ
            </span>
            <span style={{ fontSize: '0.72rem', color: '#15803D', display: 'block', marginTop: '4px' }}>
              argmax P(wₜ | Contexto)
            </span>
          </div>
          <span className="badge-pill" style={{ background: '#DCFCE7', color: '#166534', alignSelf: 'center', fontSize: '0.72rem' }}>
            Amostragem Estocástica
          </span>
        </div>
      </div>

      {/* Golden Rule Big Highlight Banner */}
      <div
        style={{
          background: 'linear-gradient(90deg, #FEF2F2 0%, #FFFFFF 50%, #F0FDF4 100%)',
          border: '2px solid #D5E3EC',
          borderRadius: '10px',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertTriangle size={20} color="#991B1B" />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#991B1B' }}>
            Fluência = Convergência dos Pesos
          </span>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.25rem',
            fontWeight: 900,
            color: 'var(--infnet-dark-blue)',
            letterSpacing: '-0.01em',
          }}
        >
          Confiança de Expressão ≠ Exatidão Factual
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle size={20} color="#166534" />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#166534' }}>
            Exatidão = Ancoragem em Fontes
          </span>
        </div>
      </div>
    </div>
  );
}
