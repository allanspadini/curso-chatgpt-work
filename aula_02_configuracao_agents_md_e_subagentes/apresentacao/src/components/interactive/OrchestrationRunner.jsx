import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle2, Clock, GitPullRequest, ShieldAlert, FileText, Check, Cpu, Terminal } from 'lucide-react';

export default function OrchestrationRunner() {
  const [status, setStatus] = useState('idle'); // idle | running | barrier | completed
  const [progress, setProgress] = useState({ explorer: 0, reviewer: 0, docs: 0 });
  const [activeInspector, setActiveInspector] = useState('summary');

  const startOrchestration = () => {
    setStatus('running');
    setProgress({ explorer: 0, reviewer: 0, docs: 0 });
    setActiveInspector('summary');
  };

  const resetOrchestration = () => {
    setStatus('idle');
    setProgress({ explorer: 0, reviewer: 0, docs: 0 });
    setActiveInspector('summary');
  };

  useEffect(() => {
    let timer;
    if (status === 'running') {
      timer = setInterval(() => {
        setProgress((prev) => {
          const nextExplorer = Math.min(100, prev.explorer + 18);
          const nextDocs = Math.min(100, prev.docs + 12);
          const nextReviewer = Math.min(100, prev.reviewer + 8);

          if (nextExplorer === 100 && nextDocs === 100 && nextReviewer === 100) {
            setStatus('barrier');
            setTimeout(() => setStatus('completed'), 900);
          }
          return { explorer: nextExplorer, reviewer: nextReviewer, docs: nextDocs };
        });
      }, 150);
    }
    return () => clearInterval(timer);
  }, [status]);

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
      {/* Left Control Panel & Worker Threads */}
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
              Orquestrador Concorrente
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '4px',
                background: status === 'completed' ? '#DCFCE7' : status === 'running' ? '#FEF3C7' : '#EDF5FA',
                color: status === 'completed' ? '#166534' : status === 'running' ? '#92400E' : '#0369A1',
              }}
            >
              {status === 'idle' ? 'Pronto' : status === 'running' ? 'Executando em Paralelo' : status === 'barrier' ? 'Wait-for-All Barrier' : 'Consolidado'}
            </span>
          </div>

          <p style={{ fontSize: '0.76rem', color: '#475569', marginBottom: '14px' }}>
            Dispare o padrão Triplo PR Review para acompanhar o spawning simultâneo, avanço das threads e a barreira de sincronização.
          </p>

          {/* Action Trigger Buttons */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <button
              onClick={startOrchestration}
              disabled={status === 'running' || status === 'barrier'}
              style={{
                flex: 1,
                padding: '8px 12px',
                background: status === 'running' ? '#CBD5E1' : '#0A345D',
                color: '#FFFFFF',
                borderRadius: '6px',
                border: 'none',
                fontSize: '0.76rem',
                fontWeight: 700,
                cursor: status === 'running' ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <Play size={14} /> Disparar Orquestração
            </button>
            <button
              onClick={resetOrchestration}
              style={{
                padding: '8px 12px',
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '6px',
                fontSize: '0.76rem',
                color: '#475569',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <RotateCcw size={14} />
            </button>
          </div>

          {/* Parallel Threads Live Progress Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Thread 1: Explorer */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700, color: '#0A345D' }}>1. pr_explorer (Luna)</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#475569' }}>{progress.explorer}%</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${progress.explorer}%`, height: '100%', background: '#0A345D', transition: 'width 0.15s ease' }} />
              </div>
            </div>

            {/* Thread 2: Reviewer */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700, color: '#9A3412' }}>2. reviewer (Sol)</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#475569' }}>{progress.reviewer}%</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${progress.reviewer}%`, height: '100%', background: '#C2410C', transition: 'width 0.15s ease' }} />
              </div>
            </div>

            {/* Thread 3: Docs Researcher */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700, color: '#166534' }}>3. docs_researcher (MCP)</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#475569' }}>{progress.docs}%</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${progress.docs}%`, height: '100%', background: '#166534', transition: 'width 0.15s ease' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Barrier Status Pill */}
        <div
          style={{
            background: status === 'barrier' ? '#FEF3C7' : '#F8FAFC',
            border: status === 'barrier' ? '1px solid #FDBA74' : '1px solid #E2E8F0',
            borderRadius: '6px',
            padding: '8px 10px',
            fontSize: '0.72rem',
            textAlign: 'center',
            color: status === 'barrier' ? '#92400E' : '#64748B',
            fontWeight: 600,
          }}
        >
          {status === 'barrier' ? '⏳ Wait-for-All: Aguardando sincronização de todas as threads...' : 'Barreira ativa: Resposta ao usuário só após conclusão total.'}
        </div>
      </div>

      {/* Right Side: Consolidated Report Inspector */}
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
          {/* Header Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
              Parecer Consolidado do PR (Branch feature/auth vs main)
            </span>
            <span style={{ fontSize: '0.72rem', color: '#0369A1', fontWeight: 700 }}>
              Soberania do Agente Principal
            </span>
          </div>

          {status !== 'completed' ? (
            <div
              style={{
                height: '280px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#F8FAFC',
                border: '1px dashed #CBD5E1',
                borderRadius: '8px',
                color: '#64748B',
                gap: '8px',
              }}
            >
              <Cpu size={32} color="#94A3B8" />
              <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>
                {status === 'idle' ? 'Clique em "Disparar Orquestração" para iniciar o review multi-agente.' : 'Subagentes processando dados em threads isoladas...'}
              </span>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Finding 1: Security Risk */}
              <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '6px', padding: '10px 12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldAlert size={16} color="#DC2626" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#991B1B' }}>
                      [ALTO RISCO] Race Condition em Sessão Concorrente
                    </span>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#475569', fontFamily: 'var(--font-mono)' }}>services/auth/token.ts:58</span>
                </div>
                <div style={{ fontSize: '0.74rem', color: '#450A0A' }}>
                  Identificado por <strong>reviewer</strong>: A rotação do token não utiliza transação atômica no Redis, permitindo reutilização durante 200ms de latência de rede.
                </div>
              </div>

              {/* Finding 2: Code Scope */}
              <div style={{ background: '#EDF5FA', border: '1px solid #D0E3F0', borderRadius: '6px', padding: '10px 12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FileText size={16} color="#0A345D" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0A345D' }}>
                      [ESCOPO] 4 Arquivos Afetados Mapeados
                    </span>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#475569', fontFamily: 'var(--font-mono)' }}>pr_explorer</span>
                </div>
                <div style={{ fontSize: '0.74rem', color: '#334155' }}>
                  Alterações contidas em <code>auth/token.ts</code>, <code>middleware/verify.ts</code>, <code>types/session.d.ts</code> e teste unitário em <code>tests/auth.test.ts</code>.
                </div>
              </div>

              {/* Finding 3: Docs Verification */}
              <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '6px', padding: '10px 12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={16} color="#166534" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#166534' }}>
                      [MCP COMPLIANCE] Compatibilidade com OpenAPI 3.1
                    </span>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#475569', fontFamily: 'var(--font-mono)' }}>docs_researcher</span>
                </div>
                <div style={{ fontSize: '0.74rem', color: '#14532D' }}>
                  Verificado via docs MCP: Os novos cabeçalhos de autorização cumprem a especificação vigente sem breaking changes na API pública.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Final Audit Summary Badge */}
        <div
          style={{
            background: '#F8FAFC',
            border: '1px solid #CBD5E1',
            borderRadius: '6px',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.74rem',
          }}
        >
          <span style={{ color: '#0A345D', fontWeight: 700 }}>Veredito do Orquestrador:</span>
          <span style={{ color: '#334155' }}>
            {status === 'completed' ? 'Aprovação bloqueada até mitigação da Race Condition em token.ts. Relatório pronto para envio ao GitHub PR.' : 'Aguardando execução dos subagentes.'}
          </span>
        </div>
      </div>
    </div>
  );
}
