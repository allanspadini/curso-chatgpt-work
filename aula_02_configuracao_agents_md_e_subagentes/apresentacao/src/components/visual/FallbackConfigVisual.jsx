import React from 'react';
import { Settings, FolderSymlink, Terminal, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FallbackConfigVisual() {
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
          <Settings size={20} color="#0A345D" />
          <span style={{ fontSize: '0.9rem', color: '#0A345D', fontWeight: 700 }}>
            Solução de Engenharia:
          </span>
          <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 500 }}>
            Configuração Avançada do Codex: Fallbacks para Repositórios Legados e Isolamento com CODEX_HOME.
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
          CONFIG.TOML
        </span>
      </div>

      {/* Main Grid: Fallback Sequence vs CODEX_HOME Isolation */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '18px',
          flex: 1,
          alignItems: 'stretch',
        }}
      >
        {/* Left: Fallback Configuration & Walkthrough */}
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
              1. Tratamento de Arquivos Legados via Fallback
            </span>

            {/* TOML Snippet */}
            <div
              style={{
                margin: '10px 0',
                background: '#061F38',
                borderRadius: '8px',
                padding: '10px 14px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: '#F8FAFC',
                lineHeight: '1.45',
              }}
            >
              <div style={{ color: '#64D9EF' }}># ~/.codex/config.toml ou .codex/config.toml</div>
              <div>project_doc_fallback_filenames = [<span style={{ color: '#86EFAC' }}>"TEAM_GUIDE.md"</span>, <span style={{ color: '#86EFAC' }}>".agents.md"</span>]</div>
              <div>project_doc_max_bytes = <span style={{ color: '#FDBA74' }}>65536</span></div>
            </div>

            {/* Step-by-Step Priority Chain */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#475569' }}>
                ORDEM EXATA DE VERIFICAÇÃO EM CADA DIRETÓRIO:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '4px', padding: '6px', textAlign: 'center', fontSize: '0.72rem' }}>
                  <div style={{ fontWeight: 800, color: '#C2410C' }}>1º</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem' }}>.override.md</div>
                </div>
                <div style={{ background: '#EDF5FA', border: '1px solid #D0E3F0', borderRadius: '4px', padding: '6px', textAlign: 'center', fontSize: '0.72rem' }}>
                  <div style={{ fontWeight: 800, color: '#0A345D' }}>2º</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem' }}>AGENTS.md</div>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '4px', padding: '6px', textAlign: 'center', fontSize: '0.72rem' }}>
                  <div style={{ fontWeight: 800, color: '#475569' }}>3º</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem' }}>TEAM_GUIDE.md</div>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '4px', padding: '6px', textAlign: 'center', fontSize: '0.72rem' }}>
                  <div style={{ fontWeight: 800, color: '#475569' }}>4º</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem' }}>.agents.md</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', padding: '8px 12px', borderRadius: '6px', fontSize: '0.74rem', color: '#166534' }}>
            ✓ O primeiro arquivo existente da lista é adotado; arquivos posteriores no mesmo diretório são ignorados.
          </div>
        </div>

        {/* Right: CODEX_HOME Isolation for CI/CD */}
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
              2. Perfis Isolados com CODEX_HOME
            </span>

            <p style={{ fontSize: '0.8rem', color: '#334155', margin: '8px 0 10px', lineHeight: '1.4' }}>
              Por padrão, o Codex lê <code>~/.codex</code>. Ao usar a variável de ambiente, é possível isolar completamente o perfil de execução:
            </p>

            <div
              style={{
                background: '#061F38',
                borderRadius: '8px',
                padding: '10px 12px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: '#64D9EF',
                marginBottom: '10px',
              }}
            >
              $ CODEX_HOME=/opt/ci/.codex \<br />
              &nbsp;&nbsp;codex exec "Audit PR rules"
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 10px', fontSize: '0.74rem' }}>
                <strong style={{ color: '#0A345D' }}>Ambiente de CI/CD:</strong> Impede que regras locais do desenvolvedor afetem a esteira oficial da empresa.
              </div>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 10px', fontSize: '0.74rem' }}>
                <strong style={{ color: '#0A345D' }}>Auditoria de Conformidade:</strong> Garante que robôs de segurança utilizem apenas chaves e regras homologadas.
              </div>
            </div>
          </div>

          <div style={{ background: '#EDF5FA', padding: '6px 10px', borderRadius: '4px', fontSize: '0.73rem', color: '#0369A1', fontWeight: 700, textAlign: 'center' }}>
            Isolamento de processos corporativos com zero contaminação de ambiente.
          </div>
        </div>
      </div>
    </div>
  );
}
