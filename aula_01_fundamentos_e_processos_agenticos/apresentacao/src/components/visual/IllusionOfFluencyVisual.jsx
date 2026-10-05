import React from 'react';
import { AlertTriangle, Clock, RefreshCw, FileX, ArrowRight, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export default function IllusionOfFluencyVisual() {
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
      {/* Top Banner Alert (Clean, Short, Visual) */}
      <div
        style={{
          background: 'var(--status-danger-bg)',
          border: '1px solid var(--status-danger-border)',
          borderRadius: '10px',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShieldAlert size={22} color="var(--status-danger-text)" />
          <strong style={{ fontSize: '1rem', color: 'var(--status-danger-text)' }}>
            A Dor Prática na Indústria: O Colapso dos "Prompts Pontuais"
          </strong>
        </div>
        <span
          className="badge-pill"
          style={{
            background: '#FFFFFF',
            border: '1px solid #FCA5A5',
            color: '#991B1B',
            fontFamily: 'var(--font-mono)',
          }}
        >
          PROBLEMA REAL
        </span>
      </div>

      {/* Central Wide Architecture Diagram: Input ➔ Transformer ➔ Dissonance ➔ Failure */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '260px 48px 1fr 48px 300px',
          alignItems: 'center',
          margin: '12px 0',
          flex: 1,
        }}
      >
        {/* Stage 1: Amador Input */}
        <div
          className="card-base"
          style={{
            padding: '20px',
            textAlign: 'center',
            borderTop: '5px solid #EF4444',
            height: '240px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#991B1B', fontWeight: 800 }}>
              ESTÁGIO 01
            </span>
            <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', color: 'var(--infnet-dark-blue)', marginTop: '6px', fontWeight: 700 }}>
              Prompt Vago
            </h4>
          </div>

          <div
            style={{
              padding: '12px',
              background: '#FEF2F2',
              border: '1px dashed #FCA5A5',
              borderRadius: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: '#991B1B',
            }}
          >
            "Resuma tudo e monte o relatório executivo."
          </div>

          <span className="badge-pill" style={{ background: '#FEE2E2', color: '#991B1B', alignSelf: 'center', fontSize: '0.72rem' }}>
            Zero Especificação
          </span>
        </div>

        {/* Transition Arrow */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ArrowRight size={28} color="#CBD5E1" />
        </div>

        {/* Stage 2: The Core Paradox Gauges (Visual in center!) */}
        <div
          className="card-base"
          style={{
            padding: '20px 24px',
            borderTop: '5px solid var(--infnet-dark-blue)',
            height: '240px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
              ESTÁGIO 02: INFERÊNCIA DO LLM
            </span>
            <Cpu size={20} color="var(--infnet-dark-blue)" />
          </div>

          {/* Dissonance Meters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700, color: 'var(--infnet-dark-blue)' }}>Coerência Linguística & Fluência:</span>
                <strong style={{ color: '#166534', fontFamily: 'var(--font-mono)' }}>99% (Alta Eloquência)</strong>
              </div>
              <div style={{ height: '10px', background: '#E2E8F0', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '99%', height: '100%', background: 'var(--infnet-green-accent)' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700, color: '#991B1B' }}>Ancoragem Factual em Sistemas Oficiais:</span>
                <strong style={{ color: '#991B1B', fontFamily: 'var(--font-mono)' }}>35% (Alucinação Silenciosa)</strong>
              </div>
              <div style={{ height: '10px', background: '#E2E8F0', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '35%', height: '100%', background: '#EF4444' }} />
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '8px 14px',
              background: '#FFF7ED',
              border: '1px solid #FDBA74',
              borderRadius: '6px',
              fontSize: '0.8rem',
              color: '#9A3412',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            Paradoxo Crítico: Tom convincente mascarando dados falsos
          </div>
        </div>

        {/* Transition Arrow */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ArrowRight size={28} color="#CBD5E1" />
        </div>

        {/* Stage 3: Operational Collapse Badges */}
        <div
          className="card-base"
          style={{
            padding: '20px',
            borderTop: '5px solid #DC2626',
            height: '240px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#991B1B', fontWeight: 800 }}>
              ESTÁGIO 03
            </span>
            <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', color: 'var(--infnet-dark-blue)', marginTop: '4px', fontWeight: 700 }}>
              Colapso em Produção
            </h4>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 10px',
                background: '#FEF2F2',
                borderRadius: '6px',
                border: '1px solid #FECACA',
                color: '#991B1B',
                fontSize: '0.78rem',
                fontWeight: 600,
              }}
            >
              <FileX size={16} />
              <span>Dados Fantasmas & Risco Legal</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 10px',
                background: '#FFF7ED',
                borderRadius: '6px',
                border: '1px solid #FED7AA',
                color: '#9A3412',
                fontSize: '0.78rem',
                fontWeight: 600,
              }}
            >
              <Clock size={16} />
              <span>Fadiga Extrema do Operador</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 10px',
                background: '#F1F5F9',
                borderRadius: '6px',
                border: '1px solid #CBD5E1',
                color: '#334155',
                fontSize: '0.78rem',
                fontWeight: 600,
              }}
            >
              <RefreshCw size={16} />
              <span>Variabilidade Incontrolável</span>
            </div>
          </div>

          <span className="badge-pill" style={{ background: '#991B1B', color: '#FFFFFF', alignSelf: 'center', fontSize: '0.72rem', fontWeight: 700 }}>
            Inviável para Processos Críticos
          </span>
        </div>
      </div>

      {/* Bottom Visual Bar */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '8px',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontSize: '0.85rem', color: 'var(--infnet-dark-blue)', fontWeight: 700 }}>
          Solução de Engenharia: Substituir o prompting informal por Especificação de Trabalho e Contratos Agênticos
        </span>
        <span className="badge-pill" style={{ background: 'var(--infnet-cyan)', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
          Padrão de Engenharia Agêntica
        </span>
      </div>
    </div>
  );
}
