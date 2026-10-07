import React from 'react';
import { Terminal, FileCode, CheckCircle2, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function CustomAgentAnatomyVisual() {
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
          <FileCode size={20} color="#0A345D" />
          <span style={{ fontSize: '0.9rem', color: '#0A345D', fontWeight: 700 }}>
            Teoria & Formalismo:
          </span>
          <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 500 }}>
            Anatomia Declarativa de Custom Agents: O Schema Oficial TOML em .codex/agents/*.toml.
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#0369A1',
            background: '#E0F2FE',
            padding: '3px 8px',
            borderRadius: '4px',
          }}
        >
          SCHEMA TOML
        </span>
      </div>

      {/* Main Grid: TOML Code vs Field Specification */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '18px',
          flex: 1,
          alignItems: 'stretch',
        }}
      >
        {/* Left: Complete TOML Code Inspection */}
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
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
                .codex/agents/reviewer.toml
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B' }}>
                Escopo de Projeto
              </span>
            </div>

            <div
              style={{
                background: '#061F38',
                borderRadius: '8px',
                padding: '12px 16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: '#F8FAFC',
                lineHeight: '1.45',
              }}
            >
              <div style={{ color: '#64D9EF' }}># 1. Campos Canônicos Obrigatórios</div>
              <div>name = <span style={{ color: '#86EFAC' }}>"reviewer"</span></div>
              <div>description = <span style={{ color: '#86EFAC' }}>"PR reviewer focused on correctness and security."</span></div>
              <br />
              <div style={{ color: '#64D9EF' }}># 2. Configurações de Modelo e Isolamento</div>
              <div>model = <span style={{ color: '#86EFAC' }}>"gpt-6.1-sol"</span></div>
              <div>model_reasoning_effort = <span style={{ color: '#86EFAC' }}>"medium"</span></div>
              <div>sandbox_mode = <span style={{ color: '#FDBA74' }}>"read-only"</span></div>
              <br />
              <div style={{ color: '#64D9EF' }}># 3. Instruções de Comportamento</div>
              <div>developer_instructions = <span style={{ color: '#FCD34D' }}>"""</span></div>
              <div style={{ color: '#FCD34D' }}>Review code like an owner.</div>
              <div style={{ color: '#FCD34D' }}>Prioritize correctness, security and missing tests.</div>
              <div style={{ color: '#FCD34D' }}>Lead with concrete findings and reproduction steps.</div>
              <div style={{ color: '#FCD34D' }}>"""</div>
            </div>
          </div>

          <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', padding: '6px 12px', borderRadius: '4px', fontSize: '0.72rem', color: '#166534', fontWeight: 600 }}>
            ✓ O campo <code>name</code> é a fonte da verdade para o Codex instanciar o agente.
          </div>
        </div>

        {/* Right: Schema Field Table & Precedence */}
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
          <div>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
              Especificação Formal dos Campos
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
                  <strong style={{ color: '#0A345D' }}>name (Obrigatório)</strong>
                  <span style={{ color: '#C2410C', fontWeight: 700, fontSize: '0.68rem' }}>String</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#475569', marginTop: '2px' }}>
                  Identificador usado no prompt ou em comandos de delegação.
                </div>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
                  <strong style={{ color: '#0A345D' }}>description (Obrigatório)</strong>
                  <span style={{ color: '#C2410C', fontWeight: 700, fontSize: '0.68rem' }}>String</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#475569', marginTop: '2px' }}>
                  Guia para o LLM orquestrador saber quando delegar para este agente.
                </div>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
                  <strong style={{ color: '#0A345D' }}>developer_instructions (Obrigatório)</strong>
                  <span style={{ color: '#C2410C', fontWeight: 700, fontSize: '0.68rem' }}>String</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#475569', marginTop: '2px' }}>
                  Instruções nucleares que governam o comportamento e tom do subagente.
                </div>
              </div>

              <div style={{ background: '#EDF5FA', border: '1px solid #D0E3F0', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
                  <strong style={{ color: '#0369A1' }}>sandbox_mode (Opcional)</strong>
                  <span style={{ color: '#0369A1', fontWeight: 700, fontSize: '0.68rem' }}>read-only | write</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#475569', marginTop: '2px' }}>
                  Sobrescreve a política de isolamento do turno pai.
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: '#F8FAFC', padding: '6px 10px', borderRadius: '4px', fontSize: '0.72rem', color: '#475569', textAlign: 'center' }}>
            Localizações: <code>~/.codex/agents/</code> (pessoal) ou <code>.codex/agents/</code> (projeto).
          </div>
        </div>
      </div>
    </div>
  );
}
