import React from 'react';
import { GitBranch, CheckCircle2, ShieldCheck, Terminal, FolderTree, Cpu, Sparkles } from 'lucide-react';

export default function DeterministicConfigVisual() {
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
          background: '#F0FDF4',
          border: '1px solid #86EFAC',
          borderRadius: '8px',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <CheckCircle2 size={20} color="#166534" />
          <span style={{ fontSize: '0.9rem', color: '#166534', fontWeight: 700 }}>
            Solução de Engenharia:
          </span>
          <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 500 }}>
            Governança Agêntica como Código (GitOps): O padrão aberto AGENTS.md com compilação determinística no startup.
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#166534',
            background: '#DCFCE7',
            padding: '3px 8px',
            borderRadius: '4px',
          }}
        >
          PADRÃO ABERTO OPENAI
        </span>
      </div>

      {/* Main Visual: The GitOps Pipeline to Codex Runtime */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '18px',
          flex: 1,
          alignItems: 'stretch',
        }}
      >
        {/* Left: Git Repository Structure with AGENTS.md */}
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
                1. Arquivos Versionados no Git
              </span>
              <span style={{ fontSize: '0.75rem', color: '#0369A1', fontWeight: 700, background: '#EDF5FA', padding: '2px 8px', borderRadius: '4px' }}>
                Infraestrutura como Código
              </span>
            </div>

            {/* Visual File Tree */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '8px',
                padding: '12px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                color: '#1E293B',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0A345D', fontWeight: 700 }}>
                <FolderTree size={16} /> repo-root/
              </div>
              <div style={{ paddingLeft: '20px', display: 'flex', alignItems: 'center', gap: '6px', color: '#166534', fontWeight: 700 }}>
                <span style={{ background: '#DCFCE7', border: '1px solid #86EFAC', padding: '1px 6px', borderRadius: '4px' }}>
                  📄 AGENTS.md
                </span>
                <span style={{ color: '#64748B', fontSize: '0.72rem' }}>← Diretrizes Globais do Projeto (Lint, PRs)</span>
              </div>
              <div style={{ paddingLeft: '20px', color: '#475569' }}>
                📁 services/
              </div>
              <div style={{ paddingLeft: '40px', color: '#475569' }}>
                📁 payments/
              </div>
              <div style={{ paddingLeft: '60px', display: 'flex', alignItems: 'center', gap: '6px', color: '#9A3412', fontWeight: 700 }}>
                <span style={{ background: '#FFEDD5', border: '1px solid #FDBA74', padding: '1px 6px', borderRadius: '4px' }}>
                  📄 AGENTS.override.md
                </span>
                <span style={{ color: '#64748B', fontSize: '0.72rem' }}>← Regras Estritas do Microserviço</span>
              </div>
              <div style={{ paddingLeft: '60px', color: '#64748B', fontSize: '0.74rem' }}>
                📄 index.ts, api.ts, tests/
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: '10px',
              padding: '8px 12px',
              background: '#F0FDF4',
              borderRadius: '6px',
              border: '1px solid #86EFAC',
              fontSize: '0.76rem',
              color: '#166534',
              fontWeight: 600,
            }}
          >
            ✓ Versionado no GitHub com PR review, rastreabilidade de autor e histórico de alterações.
          </div>
        </div>

        {/* Right: Automated Runtime Compilation */}
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
                2. Compilação Determinística no Startup
              </span>
              <span style={{ fontSize: '0.75rem', color: '#166534', fontWeight: 700, background: '#F0FDF4', padding: '2px 8px', borderRadius: '4px' }}>
                Uma Vez por Sessão
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '10px 12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Terminal size={16} color="#0A345D" />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0A345D' }}>Todas as Superfícies Sincronizadas</span>
                </div>
                <span style={{ fontSize: '0.76rem', color: '#475569' }}>
                  ChatGPT Work Web, Desktop App, Codex CLI e Extensões de IDE (VS Code / JetBrains) carregam exatamente as mesmas regras.
                </span>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '10px 12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Cpu size={16} color="#0369A1" />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0369A1' }}>Injeção Automática no Contexto</span>
                </div>
                <span style={{ fontSize: '0.76rem', color: '#475569' }}>
                  O motor do Codex concatena as regras antes da primeira interação do modelo, eliminando prompts manuais redundantes.
                </span>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '10px 12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <ShieldCheck size={16} color="#166534" />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#166534' }}>Sem Cache Obsoleto</span>
                </div>
                <span style={{ fontSize: '0.76rem', color: '#475569' }}>
                  A cadeia é reconstruída a cada nova execução; editar um arquivo reflete imediatamente na próxima sessão.
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: '10px',
              padding: '6px 12px',
              background: '#EDF5FA',
              borderRadius: '4px',
              fontSize: '0.76rem',
              color: '#0369A1',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            Zero intervenção manual: o desenvolvedor apenas entra na pasta e executa o Codex.
          </div>
        </div>
      </div>
    </div>
  );
}
