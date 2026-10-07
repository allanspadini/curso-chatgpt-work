import React from 'react';
import { GitPullRequest, Bug, Layers, ArrowRight, ShieldCheck, Cpu, Terminal, CheckCircle2 } from 'lucide-react';

export default function IndustryPatternsVisual() {
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
          <Layers size={20} color="#0A345D" />
          <span style={{ fontSize: '0.9rem', color: '#0A345D', fontWeight: 700 }}>
            Engenharia Aplicada:
          </span>
          <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 500 }}>
            Padrões Arquiteturais Canônicos da OpenAI: Triplo PR Review e Frontend Integration Debugging.
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
          BEST PRACTICES
        </span>
      </div>

      {/* Main Grid: Pattern 1 vs Pattern 2 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '18px',
          flex: 1,
          alignItems: 'stretch',
        }}
      >
        {/* Pattern 1: Triple PR Review */}
        <div
          className="card-base"
          style={{
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#FFFFFF',
            borderTop: '4px solid #0A345D',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <GitPullRequest size={18} color="#0A345D" />
                <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0A345D' }}>
                  PADRÃO 1: TRIPLO PR REVIEW
                </span>
              </div>
              <span style={{ fontSize: '0.68rem', background: '#EDF5FA', color: '#0369A1', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                Read-Only Audit
              </span>
            </div>

            <p style={{ fontSize: '0.76rem', color: '#475569', marginBottom: '10px' }}>
              Auditoria de alta precisão em Pull Requests corporativos decomposta em 3 papéis não conflitantes:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#0A345D' }}>
                  <span>pr_explorer (Luna • High • Read-Only)</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#475569', marginTop: '2px' }}>
                  Varre o repositório, mapeia arquivos afetados e coleta evidências sem propor correções.
                </div>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#9A3412' }}>
                  <span>reviewer (Sol • Medium • Read-Only)</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#475569', marginTop: '2px' }}>
                  Focado em riscos reais, segurança, regressões de comportamento e falta de testes.
                </div>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#166534' }}>
                  <span>docs_researcher (Luna • High • MCP Server)</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#475569', marginTop: '2px' }}>
                  Consulta o servidor MCP da documentação oficial para conferir versões de APIs e parâmetros.
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: '#EDF5FA', padding: '6px 10px', borderRadius: '4px', fontSize: '0.72rem', color: '#0369A1', fontWeight: 600, textAlign: 'center' }}>
            Prompt: "Review this branch against main using pr_explorer, reviewer and docs_researcher."
          </div>
        </div>

        {/* Pattern 2: Frontend Integration Debugging */}
        <div
          className="card-base"
          style={{
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#FFFFFF',
            borderTop: '4px solid #166534',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Bug size={18} color="#166534" />
                <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#166534' }}>
                  PADRÃO 2: FRONTEND DEBUGGING
                </span>
              </div>
              <span style={{ fontSize: '0.68rem', background: '#F0FDF4', color: '#166534', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                Evidence ➔ Fix
              </span>
            </div>

            <p style={{ fontSize: '0.76rem', color: '#475569', marginBottom: '10px' }}>
              Resolução de falhas de interface e testes ponta-a-ponta com captura real de evidências:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#0A345D' }}>
                  <span>browser_debugger (Sol • Chrome DevTools MCP)</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#475569', marginTop: '2px' }}>
                  Abre o navegador headless, reproduz o erro, captura screenshots e logs de rede/console.
                </div>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#0369A1' }}>
                  <span>code_mapper (Luna • High • Read-Only)</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#475569', marginTop: '2px' }}>
                  Rastreia o componente React e a rota de API responsável pela falha comprovada.
                </div>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#C2410C' }}>
                  <span>ui_fixer (Luna • Workspace-Write)</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#475569', marginTop: '2px' }}>
                  Apenas após a evidência ser isolada, edita o arquivo alvo com a menor alteração defensável.
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: '#F0FDF4', padding: '6px 10px', borderRadius: '4px', fontSize: '0.72rem', color: '#166534', fontWeight: 600, textAlign: 'center' }}>
            Princípio da Reversibilidade: Só altera código quando a falha estiver reproduzida com provas.
          </div>
        </div>
      </div>
    </div>
  );
}
