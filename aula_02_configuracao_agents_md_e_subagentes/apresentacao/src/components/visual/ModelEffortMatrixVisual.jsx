import React from 'react';
import { Cpu, Zap, ArrowRight, Layers, Sliders, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ModelEffortMatrixVisual() {
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
          <Sliders size={20} color="#0A345D" />
          <span style={{ fontSize: '0.9rem', color: '#0A345D', fontWeight: 700 }}>
            Teoria & Formalismo:
          </span>
          <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 500 }}>
            Matriz de Seleção de Modelos e Calibração de Esforço de Raciocínio (model_reasoning_effort).
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
          SOL vs LUNA
        </span>
      </div>

      {/* Main Grid: 2 Models Comparison + Reasoning Effort Spectrum */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '18px',
          flex: 1,
          alignItems: 'stretch',
        }}
      >
        {/* Left: Model Choice (Sol vs Luna) */}
        <div
          className="card-base"
          style={{
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#FFFFFF',
          }}
        >
          <div>
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
              1. Seleção Canônica de Modelo por Tipo de Carga
            </span>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
              {/* GPT-6.1 Sol */}
              <div
                style={{
                  background: 'linear-gradient(180deg, #EDF5FA 0%, #FFFFFF 100%)',
                  border: '2px solid #0A345D',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Cpu size={20} color="#0A345D" />
                  <div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0A345D' }}>gpt-6.1-sol</div>
                    <div style={{ fontSize: '0.68rem', color: '#0369A1', fontWeight: 600 }}>Máxima Capacidade Cognitiva</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.74rem', color: '#334155', lineHeight: '1.4' }}>
                  • Tarefas ambíguas e multi-etapas<br />
                  • Revisão profunda de segurança<br />
                  • Planejamento e refatorações amplas<br />
                  • Diagnóstico de race conditions
                </div>

                <div style={{ background: '#0A345D', color: '#FFF', padding: '4px 8px', borderRadius: '4px', fontSize: '0.68rem', textAlign: 'center', fontWeight: 700 }}>
                  Perfil: Reviewer, Security, Architect
                </div>
              </div>

              {/* GPT-6 Luna */}
              <div
                style={{
                  background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 100%)',
                  border: '2px solid #166534',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Zap size={20} color="#166534" />
                  <div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#166534' }}>gpt-6-luna</div>
                    <div style={{ fontSize: '0.68rem', color: '#15803D', fontWeight: 600 }}>Velocidade & Baixo Custo</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.74rem', color: '#334155', lineHeight: '1.4' }}>
                  • Varredura rápida de diretórios<br />
                  • Mapeamento de símbolos e AST<br />
                  • Verificação de APIs em docs<br />
                  • Fixes cirúrgicos triviais
                </div>

                <div style={{ background: '#166534', color: '#FFF', padding: '4px 8px', borderRadius: '4px', fontSize: '0.68rem', textAlign: 'center', fontWeight: 700 }}>
                  Perfil: Explorer, Docs, UI Fixer
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: '#EDF5FA', padding: '6px 12px', borderRadius: '4px', fontSize: '0.72rem', color: '#0369A1', fontWeight: 600 }}>
            Hierarquia de Resolução: Prompt explícito ➔ Custom Agent TOML ➔ [agents] default ➔ Herança do pai.
          </div>
        </div>

        {/* Right: Reasoning Effort Spectrum */}
        <div
          className="card-base"
          style={{
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#FFFFFF',
          }}
        >
          <div>
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
              2. Espectro de Esforço de Raciocínio
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
              <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', fontWeight: 700, color: '#1E40AF' }}>
                  <span>low / medium</span>
                  <span>Velocidade Máxima</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#334155', marginTop: '2px' }}>
                  Ideal para tarefas diretas, pesquisas sintáticas e leitura de documentação.
                </div>
              </div>

              <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', fontWeight: 700, color: '#9A3412' }}>
                  <span>high</span>
                  <span>Análise de Casos de Borda</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#334155', marginTop: '2px' }}>
                  Obrigatório para revisão de PRs críticos, refatorações e testes de regressão.
                </div>
              </div>

              <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', fontWeight: 700, color: '#991B1B' }}>
                  <span>xhigh / max / ultra</span>
                  <span>Raciocínio Profundo & Proatividade</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#334155', marginTop: '2px' }}>
                  Permite delegação proativa no ChatGPT Work Web sem necessidade de pedir no prompt.
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '6px 10px',
              background: '#F0FDF4',
              border: '1px solid #86EFAC',
              borderRadius: '4px',
              fontSize: '0.72rem',
              color: '#166534',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            ✓ Calibre Sol + High para auditores; Luna + Low para varredores.
          </div>
        </div>
      </div>
    </div>
  );
}
