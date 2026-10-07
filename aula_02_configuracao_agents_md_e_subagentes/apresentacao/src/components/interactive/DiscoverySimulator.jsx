import React, { useState } from 'react';
import { FolderTree, Terminal, CheckCircle2, RefreshCw, Layers, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export default function DiscoverySimulator() {
  const [selectedPath, setSelectedPath] = useState('services/payments');
  const [globalOverride, setGlobalOverride] = useState(false);
  const [paymentsOverride, setPaymentsOverride] = useState(true);
  const [enableFallback, setEnableFallback] = useState(false);

  // Compute active files based on selectedPath and toggles
  const resolveCchain = () => {
    const chain = [];
    let bytes = 0;

    // 1. Global Scope (~/.codex)
    if (globalOverride) {
      chain.push({
        scope: 'Global (~/.codex)',
        file: 'AGENTS.override.md',
        content: '# Global Overrides\n- Always run `npm test` after modifying JS.\n- Ask confirmation for prod dependencies.',
        bytes: 120,
        type: 'override',
      });
    } else {
      chain.push({
        scope: 'Global (~/.codex)',
        file: 'AGENTS.md',
        content: '# Global Agreements\n- Prefer pnpm when installing dependencies.\n- Default linter: ESLint standard.',
        bytes: 98,
        type: 'standard',
      });
    }

    // 2. Repo Root
    if (enableFallback) {
      chain.push({
        scope: 'Repo Root (/)',
        file: 'TEAM_GUIDE.md',
        content: '# Legacy Team Guide (Fallback)\n- Run `npm run lint` before opening PR.\n- Document public utils in docs/.',
        bytes: 115,
        type: 'fallback',
      });
    } else {
      chain.push({
        scope: 'Repo Root (/)',
        file: 'AGENTS.md',
        content: '# Repository Expectations\n- Run `npm run lint` before opening PR.\n- Document public utilities in docs/.',
        bytes: 104,
        type: 'standard',
      });
    }

    // 3. Subdirectories along path
    if (selectedPath.startsWith('services/payments')) {
      if (paymentsOverride) {
        chain.push({
          scope: 'services/payments/',
          file: 'AGENTS.override.md',
          content: '# Payments Service Rules (OVERRIDE)\n- Use `make test-payments` instead of `npm test`.\n- NEVER rotate API keys without notifying security.',
          bytes: 142,
          type: 'override',
        });
      } else {
        chain.push({
          scope: 'services/payments/',
          file: 'AGENTS.md',
          content: '# Payments Base Rules\n- Use `npm test` for integration tests.\n- Maintain 90% coverage on billing.',
          bytes: 110,
          type: 'standard',
        });
      }
    } else if (selectedPath.startsWith('services/search')) {
      chain.push({
        scope: 'services/search/',
        file: 'AGENTS.md',
        content: '# Search Microservice\n- ElasticSearch queries must have 200ms timeout.\n- Always cache frequent search terms.',
        bytes: 125,
        type: 'standard',
      });
    }

    bytes = chain.reduce((acc, f) => acc + f.bytes, 0);
    return { chain, totalBytes: bytes };
  };

  const { chain, totalBytes } = resolveCchain();
  const maxBytes = 32768; // 32 KiB
  const usagePct = ((totalBytes / maxBytes) * 100).toFixed(2);

  const compiledPrompt = chain.map((item) => `<!-- Origem: ${item.scope} (${item.file}) -->\n${item.content}`).join('\n\n');

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '380px 1fr',
        gap: '18px',
        height: '100%',
        alignItems: 'stretch',
      }}
    >
      {/* Left Control Panel: Directory Picker & Toggles */}
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
              Parâmetros de Execução
            </span>
            <span style={{ fontSize: '0.72rem', background: '#EDF5FA', color: '#0369A1', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
              Simulador Interativo
            </span>
          </div>

          {/* Directory Selector */}
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
              DIRETÓRIO ATUAL DE TRABALHO (CWD):
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { label: 'repo-root/ (Raiz do Projeto)', val: 'repo-root' },
                { label: 'services/payments/ (Microserviço Pagamentos)', val: 'services/payments' },
                { label: 'services/search/ (Microserviço Busca)', val: 'services/search' },
              ].map((item) => (
                <button
                  key={item.val}
                  onClick={() => setSelectedPath(item.val)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: selectedPath === item.val ? '2px solid var(--infnet-cyan)' : '1px solid #CBD5E1',
                    background: selectedPath === item.val ? '#EFF6FF' : '#F8FAFC',
                    color: selectedPath === item.val ? '#0369A1' : '#334155',
                    fontSize: '0.78rem',
                    fontWeight: selectedPath === item.val ? 700 : 500,
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  📁 {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Configuration Toggles */}
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
              MODIFICADORES DE DESCOBERTA:
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.76rem', color: '#1E293B', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={globalOverride}
                  onChange={(e) => setGlobalOverride(e.target.checked)}
                />
                <span>Criar <code>~/.codex/AGENTS.override.md</code></span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.76rem', color: '#1E293B', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={paymentsOverride}
                  onChange={(e) => setPaymentsOverride(e.target.checked)}
                />
                <span>Criar <code>payments/AGENTS.override.md</code></span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.76rem', color: '#1E293B', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={enableFallback}
                  onChange={(e) => setEnableFallback(e.target.checked)}
                />
                <span>Ativar fallback <code>TEAM_GUIDE.md</code></span>
              </label>
            </div>
          </div>
        </div>

        {/* Memory Buffer Status Bar */}
        <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '10px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', marginBottom: '4px' }}>
            <span style={{ fontWeight: 700, color: '#0A345D' }}>project_doc_max_bytes:</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: '#0369A1', fontWeight: 700 }}>
              {totalBytes} / {maxBytes} bytes ({usagePct}%)
            </span>
          </div>
          <div style={{ width: '100%', height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${Math.max(4, parseFloat(usagePct) * 10)}%`, height: '100%', background: 'var(--infnet-cyan)' }} />
          </div>
          <div style={{ fontSize: '0.68rem', color: '#64748B', marginTop: '4px' }}>
            Buffer seguro. Truncamento ocorrerá se exceder 32.768 bytes.
          </div>
        </div>
      </div>

      {/* Right Panel: Resolution Chain & Compiled Prompt */}
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
          {/* Header of right panel */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
              Cadeia de Instruções Compilada ({chain.length} arquivos carregados)
            </span>
            <span style={{ fontSize: '0.74rem', color: '#166534', fontWeight: 700, background: '#F0FDF4', padding: '2px 8px', borderRadius: '4px' }}>
              Ordem de Injeção: Top-Down
            </span>
          </div>

          {/* Loaded Files Badges in Precedence Order */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            {chain.map((c, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: c.type === 'override' ? '#FFF7ED' : '#EDF5FA',
                  border: c.type === 'override' ? '1px solid #FDBA74' : '1px solid #D0E3F0',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '0.74rem',
                }}
              >
                <span style={{ fontWeight: 800, color: c.type === 'override' ? '#9A3412' : '#0A345D' }}>#{idx + 1}</span>
                <span style={{ color: '#475569' }}>{c.scope}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#1E293B' }}>{c.file}</span>
                {idx === chain.length - 1 && (
                  <span style={{ background: '#DCFCE7', color: '#166534', fontWeight: 700, fontSize: '0.68rem', padding: '1px 5px', borderRadius: '3px' }}>
                    PRIORIDADE MÁXIMA
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Compiled Output Monospace Preview */}
          <div
            style={{
              background: '#061F38',
              borderRadius: '8px',
              padding: '12px 16px',
              color: '#F8FAFC',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              lineHeight: '1.45',
              height: '240px',
              overflowY: 'auto',
              boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.4)',
            }}
          >
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{compiledPrompt}</pre>
          </div>
        </div>

        {/* Live Rule Verification Box */}
        <div
          style={{
            background: '#F0FDF4',
            border: '1px solid #86EFAC',
            borderRadius: '6px',
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.76rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={16} color="#166534" />
            <span style={{ color: '#166534', fontWeight: 700 }}>Comportamento Resolvido no CWD:</span>
            <span style={{ color: '#1E293B' }}>
              {selectedPath.includes('payments')
                ? paymentsOverride
                  ? 'Comando de teste ativo: `make test-payments` (Regra local sobrescreveu a raiz).'
                  : 'Comando de teste ativo: `npm test` com 90% de cobertura.'
                : 'Comando de teste ativo: regras gerais de testes herdadas da raiz.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
