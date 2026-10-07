import React from 'react';
import MathView from '../MathView';
import { HardDrive, AlertOctagon, CheckCircle2, Scissors, Layers, ShieldAlert } from 'lucide-react';

export default function ContextLimitVisual() {
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
        className="banner-notice"
        style={{
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <HardDrive size={20} color="#0A345D" />
          <span style={{ fontSize: '0.9rem', color: '#0A345D', fontWeight: 700 }}>
            Teoria & Formalismo Rigoroso:
          </span>
          <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 500 }}>
            Restrições Físicas de Memória: O Limite project_doc_max_bytes e a Prevenção contra Truncamento Silencioso.
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#0A345D',
            background: '#EDF5FA',
            padding: '3px 8px',
            borderRadius: '4px',
          }}
        >
          BUFFER 32 KiB
        </span>
      </div>

      {/* Main Grid: Formal Formulation vs Truncation Pipeline */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '18px',
          flex: 1,
          alignItems: 'stretch',
        }}
      >
        {/* Left: Mathematical Formulation & Memory Buffer */}
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
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
              Formula de Saturação de Instrução
            </span>

            {/* LaTeX Math Container */}
            <div
              style={{
                margin: '12px 0',
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '8px',
                padding: '14px 18px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <MathView
                math="\sum_{i=1}^{k} \text{bytes}(F_i) \le \text{project\_doc\_max\_bytes} = 32.768\text{ B}"
                block={true}
              />
            </div>

            <p style={{ fontSize: '0.82rem', color: '#334155', lineHeight: '1.45', marginBottom: '12px' }}>
              O Codex acumula o tamanho em bytes de cada arquivo <MathView math="F_i" /> encontrado no caminho top-down. Se o arquivo <MathView math="k+1" /> fizer a soma ultrapassar 32 KiB, a concatenação é <strong>interrompida imediatamente</strong>.
            </p>

            {/* Visual Buffer Gauge */}
            <div style={{ background: '#EDF5FA', border: '1px solid #D0E3F0', borderRadius: '8px', padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', marginBottom: '6px' }}>
                <span style={{ fontWeight: 700, color: '#0A345D' }}>Alocação Canônica de Instruções:</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: '#0369A1', fontWeight: 700 }}>Padrão: 32 KiB</span>
              </div>
              <div style={{ display: 'flex', height: '18px', borderRadius: '4px', overflow: 'hidden', border: '1px solid #CBD5E1' }}>
                <div style={{ width: '25%', background: '#0A345D', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '0.66rem', fontWeight: 700 }}>
                  Global (~8KB)
                </div>
                <div style={{ width: '35%', background: '#0369A1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '0.66rem', fontWeight: 700 }}>
                  Repo Root (~11KB)
                </div>
                <div style={{ width: '25%', background: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '0.66rem', fontWeight: 700 }}>
                  Service (~8KB)
                </div>
                <div style={{ width: '15%', background: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', fontSize: '0.66rem' }}>
                  Livre
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', padding: '8px 12px', borderRadius: '6px', fontSize: '0.75rem', color: '#1E40AF' }}>
            💡 Configuração customizável em <code>~/.codex/config.toml</code>: altere para <code>65536</code> (64 KiB) apenas se estritamente justificado.
          </div>
        </div>

        {/* Right: Truncation Risk & Modularization Strategy */}
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
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
              Mecânica de Truncamento vs Modularização
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
              {/* Trap: Giant Monolith */}
              <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '6px', padding: '10px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Scissors size={16} color="#DC2626" />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#991B1B' }}>O Perigo: Arquivo Monolítico Gigante</span>
                </div>
                <span style={{ fontSize: '0.76rem', color: '#450A0A' }}>
                  Se a raiz contiver um AGENTS.md de 40 KiB, o Codex truncará o arquivo e descartará TODOS os AGENTS.md ou overrides de subdiretórios!
                </span>
              </div>

              {/* Solution: Modular Split */}
              <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '6px', padding: '10px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Layers size={16} color="#166534" />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#166534' }}>A Solução: Modularização por Diretórios</span>
                </div>
                <span style={{ fontSize: '0.76rem', color: '#14532D' }}>
                  Mantenha a raiz enxuta (~4 a 8 KiB com regras gerais) e distribua regras de nicho em subpastas. O Codex carrega apenas o que o caminho de execução precisa.
                </span>
              </div>

              {/* Cognitive Attention Reason */}
              <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '6px', padding: '10px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <AlertOctagon size={16} color="#EA580C" />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#9A3412' }}>Por que limitar a 32 KiB?</span>
                </div>
                <span style={{ fontSize: '0.76rem', color: '#431407' }}>
                  Preservar a densidade de atenção. Instruções prolixas degradam a acurácia do modelo e encarecem cada token gerado.
                </span>
              </div>
            </div>
          </div>

          <div style={{ background: '#EDF5FA', padding: '6px 12px', borderRadius: '4px', fontSize: '0.74rem', color: '#0369A1', fontWeight: 700, textAlign: 'center' }}>
            Boas Práticas: Menos texto, mais diretrizes operacionais e links estritos.
          </div>
        </div>
      </div>
    </div>
  );
}
