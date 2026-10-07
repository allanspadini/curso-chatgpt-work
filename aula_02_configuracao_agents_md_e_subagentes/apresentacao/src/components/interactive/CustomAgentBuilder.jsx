import React, { useState } from 'react';
import { Terminal, CheckCircle2, Copy, Check, FileCode, Sliders, RefreshCw, Lock } from 'lucide-react';

export default function CustomAgentBuilder() {
  const presets = {
    reviewer: {
      name: 'reviewer',
      description: 'PR reviewer focused on correctness, security, and missing tests.',
      model: 'gpt-6.1-sol',
      reasoningEffort: 'medium',
      sandboxMode: 'read-only',
      instructions: `Review code like an owner.
Prioritize correctness, security, behavior regressions, and missing test coverage.
Lead with concrete findings, include reproduction steps when possible, and avoid style-only comments unless they hide a real bug.`,
    },
    pr_explorer: {
      name: 'pr_explorer',
      description: 'Read-only codebase explorer for gathering evidence before changes are proposed.',
      model: 'gpt-6-luna',
      reasoningEffort: 'high',
      sandboxMode: 'read-only',
      instructions: `Stay in exploration mode.
Trace the real execution path, cite files and symbols, and avoid proposing fixes unless the parent agent asks for them.
Prefer fast search and targeted file reads over broad scans.`,
    },
    docs_researcher: {
      name: 'docs_researcher',
      description: 'Documentation specialist that uses the docs MCP server to verify APIs and framework behavior.',
      model: 'gpt-6-luna',
      reasoningEffort: 'high',
      sandboxMode: 'read-only',
      instructions: `Use the docs MCP server to confirm APIs, options, and version-specific behavior.
Return concise answers with links or exact references when available.
Do not make code changes.`,
    },
  };

  const [activePreset, setActivePreset] = useState('reviewer');
  const [formData, setFormData] = useState(presets.reviewer);
  const [copied, setCopied] = useState(false);

  const selectPreset = (key) => {
    setActivePreset(key);
    setFormData(presets[key]);
  };

  const isValid = formData.name.trim() !== '' && formData.description.trim() !== '' && formData.instructions.trim() !== '';

  const generatedToml = `name = "${formData.name}"
description = "${formData.description}"
model = "${formData.model}"
model_reasoning_effort = "${formData.reasoningEffort}"
sandbox_mode = "${formData.sandboxMode}"

developer_instructions = """
${formData.instructions}
"""`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedToml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '420px 1fr',
        gap: '18px',
        height: '100%',
        alignItems: 'stretch',
      }}
    >
      {/* Left Form Editor */}
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
              Configurador Declarativo
            </span>
            <span style={{ fontSize: '0.72rem', background: '#EDF5FA', color: '#0369A1', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
              Custom Agent TOML
            </span>
          </div>

          {/* Preset Buttons */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
            {Object.keys(presets).map((key) => (
              <button
                key={key}
                onClick={() => selectPreset(key)}
                style={{
                  flex: 1,
                  padding: '5px 8px',
                  borderRadius: '4px',
                  border: activePreset === key ? '2px solid #0369A1' : '1px solid #CBD5E1',
                  background: activePreset === key ? '#EFF6FF' : '#F8FAFC',
                  color: activePreset === key ? '#0369A1' : '#334155',
                  fontSize: '0.72rem',
                  fontWeight: activePreset === key ? 700 : 500,
                  cursor: 'pointer',
                }}
              >
                {key}
              </button>
            ))}
          </div>

          {/* Form Fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#475569', marginBottom: '2px' }}>
                NAME (OBRIGATÓRIO):
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '5px 8px',
                  borderRadius: '4px',
                  border: '1px solid #CBD5E1',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#1E293B',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#475569', marginBottom: '2px' }}>
                DESCRIPTION (PARA O ORQUESTRADOR):
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                style={{
                  width: '100%',
                  padding: '5px 8px',
                  borderRadius: '4px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.75rem',
                  color: '#1E293B',
                }}
              />
            </div>

            {/* Model & Reasoning Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#475569', marginBottom: '2px' }}>
                  MODELO:
                </label>
                <select
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '5px 8px',
                    borderRadius: '4px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.72rem',
                    color: '#1E293B',
                    background: '#FFFFFF',
                  }}
                >
                  <option value="gpt-6.1-sol">gpt-6.1-sol</option>
                  <option value="gpt-6-luna">gpt-6-luna</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#475569', marginBottom: '2px' }}>
                  REASONING EFFORT:
                </label>
                <select
                  value={formData.reasoningEffort}
                  onChange={(e) => setFormData({ ...formData, reasoningEffort: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '5px 8px',
                    borderRadius: '4px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.72rem',
                    color: '#1E293B',
                    background: '#FFFFFF',
                  }}
                >
                  <option value="low">low</option>
                  <option value="medium">medium</option>
                  <option value="high">high</option>
                  <option value="xhigh">xhigh</option>
                </select>
              </div>
            </div>

            {/* Sandbox Mode */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#475569', marginBottom: '2px' }}>
                POLÍTICA DE SANDBOX:
              </label>
              <select
                value={formData.sandboxMode}
                onChange={(e) => setFormData({ ...formData, sandboxMode: e.target.value })}
                style={{
                  width: '100%',
                  padding: '5px 8px',
                  borderRadius: '4px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.72rem',
                  color: '#1E293B',
                  background: '#FFFFFF',
                }}
              >
                <option value="read-only">read-only (Bloqueio total de escrita)</option>
                <option value="workspace-write">workspace-write (Permite edição controlada)</option>
              </select>
            </div>

            {/* Instructions */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#475569', marginBottom: '2px' }}>
                DEVELOPER_INSTRUCTIONS:
              </label>
              <textarea
                rows={4}
                value={formData.instructions}
                onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                style={{
                  width: '100%',
                  padding: '6px 8px',
                  borderRadius: '4px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.72rem',
                  color: '#1E293B',
                  fontFamily: 'var(--font-mono)',
                  resize: 'none',
                }}
              />
            </div>
          </div>
        </div>

        {/* Validation Status */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {isValid ? (
              <span style={{ color: '#166534', fontSize: '0.72rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={14} color="#166534" /> Schema Oficial Válido
              </span>
            ) : (
              <span style={{ color: '#991B1B', fontSize: '0.72rem', fontWeight: 700 }}>
                ⚠️ Preencha os campos obrigatórios
              </span>
            )}
          </div>
          <span style={{ fontSize: '0.7rem', color: '#64748B' }}>.codex/agents/{formData.name || 'agent'}.toml</span>
        </div>
      </div>

      {/* Right Side: Live TOML File Preview */}
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
              Arquivo TOML Compilado
            </span>
            <button
              onClick={handleCopy}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                background: copied ? '#F0FDF4' : '#EDF5FA',
                border: copied ? '1px solid #86EFAC' : '1px solid #D0E3F0',
                borderRadius: '4px',
                color: copied ? '#166534' : '#0A345D',
                fontSize: '0.72rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copiado!' : 'Copiar TOML'}
            </button>
          </div>

          {/* Syntax Highlighted Box */}
          <div
            style={{
              background: '#061F38',
              borderRadius: '8px',
              padding: '14px 18px',
              color: '#F8FAFC',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              lineHeight: '1.5',
              height: '310px',
              overflowY: 'auto',
              boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.4)',
            }}
          >
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{generatedToml}</pre>
          </div>
        </div>

        {/* Bottom Integration Tip */}
        <div
          style={{
            background: '#F0FDF4',
            border: '1px solid #86EFAC',
            borderRadius: '6px',
            padding: '8px 12px',
            fontSize: '0.73rem',
            color: '#166534',
            fontWeight: 600,
          }}
        >
          ✓ Salve este arquivo em <code>.codex/agents/{formData.name}.toml</code>. O Codex o carregará automaticamente como camada de sessão isolada.
        </div>
      </div>
    </div>
  );
}
