import React from 'react';
import { ArrowRight, Zap, CheckCircle2, AlertOctagon, TrendingUp, Table } from 'lucide-react';

export default function SeamCompressionVisual() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        padding: '0 6px',
        gap: '14px',
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '12px',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              backgroundColor: '#0A345D',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.78rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.5px',
            }}
          >
            A NOVA COSTURA DO TRABALHO
          </span>
          <span style={{ fontSize: '0.92rem', color: '#0A345D', fontWeight: 700 }}>
            Compressão da Costura: Do Fluxo Tradicional (A➔B➔C) ao Fluxo Agêntico (A➔C)
          </span>
        </div>

        <span
          style={{
            backgroundColor: '#F0FDF4',
            color: '#166534',
            padding: '4px 12px',
            borderRadius: '16px',
            fontSize: '0.76rem',
            fontWeight: 700,
            border: '1px solid #86EFAC',
          }}
        >
          ANALOGIA HISTÓRICA: A PLANILHA DE 1979
        </span>
      </div>

      {/* Main Two Columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '16px',
          alignItems: 'stretch',
        }}
      >
        {/* Left Column: Visual Flow Comparison (2024 vs 2026) */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #D0E3F0',
            borderRadius: '14px',
            padding: '18px 22px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '14px',
          }}
        >
          {/* 2024 Flow: A -> B -> C */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#991B1B', fontFamily: 'var(--font-mono)' }}>
                EM 2024 • O TRABALHO DE FORÇA BRUTA (A ➔ B ➔ C)
              </span>
              <span style={{ fontSize: '0.72rem', color: '#991B1B', background: '#FEF2F2', padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>
                1 Semana de Trabalho Manual
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ flex: 1, background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '10px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 700 }}>PONTO A</div>
                <div style={{ fontSize: '0.88rem', color: '#0A345D', fontWeight: 800 }}>50 Entrevistas Brutas</div>
              </div>

              <ArrowRight size={18} color="#94A3B8" />

              <div style={{ flex: 1.4, background: '#FEF2F2', border: '2px dashed #FCA5A5', borderRadius: '8px', padding: '10px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.74rem', color: '#991B1B', fontWeight: 800 }}>ETAPA B (GARGALO)</div>
                <div style={{ fontSize: '0.88rem', color: '#991B1B', fontWeight: 800 }}>Triagem & Planilha Manual</div>
                <div style={{ fontSize: '0.72rem', color: '#7F1D1D' }}>Parecia o "trabalho real"</div>
              </div>

              <ArrowRight size={18} color="#94A3B8" />

              <div style={{ flex: 1, background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '10px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 700 }}>PONTO C</div>
                <div style={{ fontSize: '0.88rem', color: '#0A345D', fontWeight: 800 }}>Relatório & Dashboard</div>
              </div>
            </div>
          </div>

          {/* 2026 Flow: A -> C with Dissolved B */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#166534', fontFamily: 'var(--font-mono)' }}>
                EM 2026 • O FLUXO AGÊNTICO DE ALTA ALAVANCAGEM (A ➔ C)
              </span>
              <span style={{ fontSize: '0.72rem', color: '#166534', background: '#F0FDF4', padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>
                Menos de 10 Minutos
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ flex: 1, background: '#EDF5FA', border: '1px solid #BAE6FD', borderRadius: '8px', padding: '10px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.74rem', color: '#0369A1', fontWeight: 700 }}>PONTO A</div>
                <div style={{ fontSize: '0.88rem', color: '#0A345D', fontWeight: 800 }}>Entrevistas na Pasta</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 4px' }}>
                <Zap size={22} color="#16A34A" />
                <span style={{ fontSize: '0.66rem', color: '#166534', fontWeight: 800 }}>SKILL</span>
              </div>

              <div style={{ flex: 1.4, background: '#F0FDF4', border: '2px solid #86EFAC', borderRadius: '8px', padding: '10px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.74rem', color: '#166534', fontWeight: 800 }}>ETAPA B DISSOLVIDA</div>
                <div style={{ fontSize: '0.88rem', color: '#166534', fontWeight: 800 }}>Execução Automatizada</div>
                <div style={{ fontSize: '0.72rem', color: '#14532D' }}>O esforço braçal desapareceu</div>
              </div>

              <ArrowRight size={18} color="#16A34A" />

              <div style={{ flex: 1, background: '#EDF5FA', border: '1px solid #BAE6FD', borderRadius: '8px', padding: '10px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.74rem', color: '#0369A1', fontWeight: 700 }}>PONTO C</div>
                <div style={{ fontSize: '0.88rem', color: '#0A345D', fontWeight: 800 }}>Dashboard Interativo</div>
              </div>
            </div>
          </div>

          {/* Golden Takeaway Box */}
          <div
            style={{
              background: '#FFFBEB',
              border: '1px solid #FDE68A',
              borderRadius: '8px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <AlertOctagon size={20} color="#D97706" style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: '0.82rem', color: '#92400E', lineHeight: 1.4, fontWeight: 600 }}>
              <strong>A Lei da Amplificação:</strong> Skills multiplicam a expertise existente, mas jamais compensam a falta de conhecimento. Um especialista sênior com Skills produz resultados sêniores mais rápido; um profissional confuso produz confusão mais rápido.
            </p>
          </div>
        </div>

        {/* Right Column: The Spreadsheet Analogy (1979 vs 2026) */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #D0E3F0',
            borderRadius: '14px',
            padding: '18px 20px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Table size={20} color="#0A345D" />
            <span style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '0.98rem', color: '#0A345D' }}>
              Já Vivemos Essa Mudança Antes
            </span>
          </div>

          {/* Subcard 1: 1979 */}
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0369A1', fontFamily: 'var(--font-mono)' }}>
                1979 • A Planilha Eletrônica (VisiCalc)
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#475569', lineHeight: 1.4 }}>
              Recalcular livros-razão à mão levava semanas. A planilha eliminou o trabalho braçal e criou um novo hábito: <strong>simular 10 cenários antes do almoço</strong>.
            </p>
          </div>

          {/* Subcard 2: 2026 */}
          <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '8px', padding: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#166534', fontFamily: 'var(--font-mono)' }}>
                2026 • As Skills Agênticas
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#166534', lineHeight: 1.4 }}>
              Não é só fazer tarefas antigas mais rápido: surgem <strong>novas primitivas de trabalho</strong> (despejo de pensamentos, simulação de pontos de vista, checkpoints de decisão).
            </p>
          </div>

          {/* Bottom Summary Badge */}
          <div style={{ background: '#EDF5FA', borderRadius: '8px', padding: '8px 12px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.76rem', color: '#0A345D', fontWeight: 700 }}>
              O julgamento humano não desapareceu: a costura entre o pensamento e o artefato é que encolheu.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
