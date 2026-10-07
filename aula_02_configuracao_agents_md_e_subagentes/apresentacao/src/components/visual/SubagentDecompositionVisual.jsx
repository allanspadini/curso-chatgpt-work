import React from 'react';
import { Layers, ArrowRight, ShieldCheck, Terminal, Cpu, FileSearch, CheckCircle2 } from 'lucide-react';

export default function SubagentDecompositionVisual() {
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
            Decomposição de Tarefas em Subagentes Especializados com Retorno de Resumos Destilados.
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
          DESACOPLAMENTO CONCORRENTE
        </span>
      </div>

      {/* Main Architecture Diagram: Master Orchestrator + 3 Parallel Subagents */}
      <div
        className="card-base"
        style={{
          padding: '18px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FFFFFF',
          flex: 1,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
            Fluxo de Execução com Barramento de Contexto Limpo
          </span>
          <span style={{ fontSize: '0.74rem', background: '#EDF5FA', color: '#0369A1', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
            Zero Context Pollution
          </span>
        </div>

        {/* Visual Multi-Agent Architecture */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '280px 80px 1fr',
            gap: '12px',
            alignItems: 'center',
            margin: '8px 0',
          }}
        >
          {/* Main Orchestrator Card */}
          <div
            style={{
              background: 'linear-gradient(180deg, #EDF5FA 0%, #FFFFFF 100%)',
              border: '2px solid #0A345D',
              borderRadius: '10px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#0A345D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Cpu size={18} color="#FFFFFF" />
              </div>
              <div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0A345D' }}>Main Agent (Orquestrador)</div>
                <div style={{ fontSize: '0.72rem', color: '#0369A1', fontWeight: 600 }}>Thread Principal • Contexto Limpo</div>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #D0E3F0', borderRadius: '6px', padding: '8px 10px', fontSize: '0.74rem', color: '#334155' }}>
              • Requisitos e restrições do contrato<br />
              • Julgamento de negócios e decisões<br />
              • Síntese e entrega do entregável final
            </div>

            <div style={{ background: '#DCFCE7', border: '1px solid #86EFAC', borderRadius: '4px', padding: '4px 8px', fontSize: '0.7rem', color: '#166534', fontWeight: 700, textAlign: 'center' }}>
              ✓ Fidelidade de Atenção Preservada (&gt; 98%)
            </div>
          </div>

          {/* Spawning & Collection Bridge */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#0369A1', background: '#EFF6FF', padding: '2px 6px', borderRadius: '4px' }}>
              Spawn
            </div>
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
              <path d="M 5 40 C 25 40, 35 15, 55 15" stroke="#0369A1" strokeWidth="2.5" strokeDasharray="3 3" />
              <path d="M 5 40 L 55 40" stroke="#0369A1" strokeWidth="2.5" />
              <path d="M 5 40 C 25 40, 35 65, 55 65" stroke="#0369A1" strokeWidth="2.5" strokeDasharray="3 3" />
            </svg>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#166534', background: '#F0FDF4', padding: '2px 6px', borderRadius: '4px' }}>
              Summary
            </div>
          </div>

          {/* 3 Parallel Subagents Threads */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Subagent 1 */}
            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '8px',
                padding: '8px 12px',
                display: 'grid',
                gridTemplateColumns: '140px 1fr 140px',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileSearch size={16} color="#0A345D" />
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0A345D' }}>pr_explorer</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#475569' }}>
                Lê 42 arquivos e faz AST diff local (35k tokens na thread isolada)
              </div>
              <div style={{ background: '#DCFCE7', border: '1px solid #86EFAC', borderRadius: '4px', padding: '4px 6px', fontSize: '0.7rem', color: '#166534', fontWeight: 700, textAlign: 'center' }}>
                Retorna: Resumo de 200 tokens com rotas alteradas
              </div>
            </div>

            {/* Subagent 2 */}
            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '8px',
                padding: '8px 12px',
                display: 'grid',
                gridTemplateColumns: '140px 1fr 140px',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="#C2410C" />
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#9A3412' }}>reviewer (Security)</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#475569' }}>
                Executa simulação de ataque e race conditions (28k tokens na thread)
              </div>
              <div style={{ background: '#DCFCE7', border: '1px solid #86EFAC', borderRadius: '4px', padding: '4px 6px', fontSize: '0.7rem', color: '#166534', fontWeight: 700, textAlign: 'center' }}>
                Retorna: 1 vulnerabilidade em auth.ts:42
              </div>
            </div>

            {/* Subagent 3 */}
            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '8px',
                padding: '8px 12px',
                display: 'grid',
                gridTemplateColumns: '140px 1fr 140px',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Terminal size={16} color="#0369A1" />
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0369A1' }}>docs_researcher</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#475569' }}>
                Consulta servidor MCP de documentação da OpenAI (15k tokens)
              </div>
              <div style={{ background: '#DCFCE7', border: '1px solid #86EFAC', borderRadius: '4px', padding: '4px 6px', fontSize: '0.7rem', color: '#166534', fontWeight: 700, textAlign: 'center' }}>
                Retorna: Confirmação de compatibilidade v2
              </div>
            </div>
          </div>
        </div>

        {/* Footer Warning & Guideline */}
        <div
          style={{
            background: '#EDF5FA',
            border: '1px solid #D0E3F0',
            borderRadius: '6px',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
          }}
        >
          <span style={{ color: '#0A345D', fontWeight: 700 }}>
            Regra Prática de Engenharia:
          </span>
          <span style={{ color: '#334155' }}>
            Use paralelismo agressivo para tarefas <strong>read-heavy</strong> (exploração, testes, logs, auditoria). Em fluxos <strong>write-heavy</strong>, evite edições simultâneas nos mesmos arquivos para prevenir colisões de estado.
          </span>
        </div>
      </div>
    </div>
  );
}
