import React from 'react';
import { ShieldCheck, GitPullRequest, CheckCircle2, XCircle, ArrowRight, Terminal } from 'lucide-react';

export default function CodeReviewRulesVisual() {
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
          <GitPullRequest size={20} color="#0A345D" />
          <span style={{ fontSize: '0.9rem', color: '#0A345D', fontWeight: 700 }}>
            Teoria & Formalismo:
          </span>
          <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 500 }}>
            A Seção Canônica ## Code Review Rules em AGENTS.md e a Separação Estrita de Responsabilidades.
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
          GITHUB REVIEW SPEC
        </span>
      </div>

      {/* Main Grid: Syntax Anatomy vs CI vs Agent Separation */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '18px',
          flex: 1,
          alignItems: 'stretch',
        }}
      >
        {/* Left: Syntax Structure */}
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
              Anatomia Canônica em 3 Partes
            </span>

            {/* Markdown Sample Card */}
            <div
              style={{
                margin: '10px 0',
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '8px',
                padding: '12px 16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: '#1E293B',
                lineHeight: '1.5',
              }}
            >
              <div style={{ color: '#0369A1', fontWeight: 700 }}>## Code Review Rules</div>
              <br />
              <div style={{ color: '#0A345D', fontWeight: 700 }}>### Experiment cohorts</div>
              <div style={{ color: '#991B1B' }}>
                - <strong>[FLAG]:</strong> Do not filter treatment comparisons on post-exposure behavior, including conversion or retention.
              </div>
              <div style={{ color: '#166534' }}>
                &nbsp;&nbsp;<strong>[SAFE PATH]:</strong> Build cohorts from assignment or exposure; report conversion as an outcome.
              </div>
            </div>

            {/* Explanatory Triad */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              <div style={{ background: '#EDF5FA', border: '1px solid #D0E3F0', borderRadius: '6px', padding: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#0A345D' }}>1. TÍTULO</div>
                <div style={{ fontSize: '0.68rem', color: '#475569' }}>Conciso e focado no domínio</div>
              </div>
              <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '6px', padding: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#991B1B' }}>2. SINALIZAÇÃO</div>
                <div style={{ fontSize: '0.68rem', color: '#475569' }}>O que o modelo deve reprovar</div>
              </div>
              <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '6px', padding: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#166534' }}>3. CAMINHO SEGURO</div>
                <div style={{ fontSize: '0.68rem', color: '#475569' }}>Como resolver ou contornar</div>
              </div>
            </div>
          </div>

          <div style={{ background: '#EDF5FA', padding: '6px 12px', borderRadius: '4px', fontSize: '0.73rem', color: '#0369A1', fontWeight: 600 }}>
            Posicionamento: Regras gerais no AGENTS.md da raiz; regras específicas no AGENTS.md do microserviço.
          </div>
        </div>

        {/* Right: Separation of Concerns (CI vs AI) */}
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
              Divisão de Responsabilidades
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
              {/* Linter in CI */}
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '10px 12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px', color: '#475569' }}>
                  <Terminal size={16} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Papel do CI/CD Tradicional:</span>
                </div>
                <span style={{ fontSize: '0.74rem', color: '#475569' }}>
                  Formatação (Prettier), lint sintático (ESLint), tipos (TypeScript) e execução de suíte de testes. É determinístico, rápido e barato.
                </span>
              </div>

              {/* Agent Review */}
              <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '6px', padding: '10px 12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px', color: '#166534' }}>
                  <ShieldCheck size={16} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Papel do Codex Agent Review:</span>
                </div>
                <span style={{ fontSize: '0.74rem', color: '#14532D' }}>
                  Regras semânticas de negócio, regressão comportamental, brechas de concorrência, autorização e fidelidade à arquitetura corporativa.
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '8px 10px',
              background: '#FFF7ED',
              border: '1px solid #FDBA74',
              borderRadius: '6px',
              fontSize: '0.72rem',
              color: '#9A3412',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            ⚠️ Não desperdice tokens do LLM pedindo para conferir espaçamento ou ponto-e-vírgula!
          </div>
        </div>
      </div>
    </div>
  );
}
