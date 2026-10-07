import React from 'react';
import { GitBranch, Clock, ArrowRight, ShieldCheck, CheckCircle2, Terminal, Eye, Layers } from 'lucide-react';

export default function LifecycleOrchestrationVisual() {
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
            Teoria & Formalismo:
          </span>
          <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 500 }}>
            O Protocolo de Orquestração: Spawning, Concorrência, Barreira Wait-for-All e Consolidação Final.
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
          WAIT-FOR-ALL BARRIER
        </span>
      </div>

      {/* Main 4 Phases Cascade Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '14px',
          flex: 1,
          alignItems: 'stretch',
        }}
      >
        {/* Phase 1 */}
        <div
          className="card-base"
          style={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '4px solid #0A345D',
            background: '#FFFFFF',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0A345D', fontFamily: 'var(--font-mono)' }}>FASE 01</span>
              <span style={{ fontSize: '0.68rem', background: '#EDF5FA', color: '#0369A1', padding: '1px 6px', borderRadius: '4px', fontWeight: 700 }}>Disparo</span>
            </div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', marginBottom: '8px' }}>
              Spawning & Despacho
            </h4>
            <p style={{ fontSize: '0.76rem', color: '#334155', lineHeight: '1.45', marginBottom: '10px' }}>
              O orquestrador identifica tarefas independentes e instancia subagentes em threads dedicadas.
            </p>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '8px', fontSize: '0.72rem' }}>
              <strong>Triggers oficiais:</strong><br />
              • Prompt: "Spawn one agent per point"<br />
              • AGENTS.md / SKILL.md<br />
              • Inteligência Proativa (Ultra)
            </div>
          </div>
          <div style={{ background: '#EDF5FA', padding: '6px', borderRadius: '4px', fontSize: '0.7rem', color: '#0A345D', textAlign: 'center', fontWeight: 600 }}>
            Alocação de PID / Thread ID
          </div>
        </div>

        {/* Phase 2 */}
        <div
          className="card-base"
          style={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '4px solid #0369A1',
            background: '#FFFFFF',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0369A1', fontFamily: 'var(--font-mono)' }}>FASE 02</span>
              <span style={{ fontSize: '0.68rem', background: '#EFF6FF', color: '#1E40AF', padding: '1px 6px', borderRadius: '4px', fontWeight: 700 }}>Paralelo</span>
            </div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', marginBottom: '8px' }}>
              Execução Concorrente
            </h4>
            <p style={{ fontSize: '0.76rem', color: '#334155', lineHeight: '1.45', marginBottom: '10px' }}>
              Subagentes executam simultaneamente em sandboxes isoladas, consumindo ferramentas independentes.
            </p>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '8px', fontSize: '0.72rem' }}>
              <strong>Controle de Concorrência:</strong><br />
              <code>agents.max_concurrent_threads_per_session</code><br />
              (Padrão: 6 a 8 threads simultâneas)
            </div>
          </div>
          <div style={{ background: '#EFF6FF', padding: '6px', borderRadius: '4px', fontSize: '0.7rem', color: '#1E40AF', textAlign: 'center', fontWeight: 600 }}>
            Inspeção no CLI via /agent
          </div>
        </div>

        {/* Phase 3 */}
        <div
          className="card-base"
          style={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '4px solid #C2410C',
            background: '#FFFFFF',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#C2410C', fontFamily: 'var(--font-mono)' }}>FASE 03</span>
              <span style={{ fontSize: '0.68rem', background: '#FFF7ED', color: '#9A3412', padding: '1px 6px', borderRadius: '4px', fontWeight: 700 }}>Barreira</span>
            </div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', marginBottom: '8px' }}>
              Barreira Wait-for-All
            </h4>
            <p style={{ fontSize: '0.76rem', color: '#334155', lineHeight: '1.45', marginBottom: '10px' }}>
              O orquestrador suspende a emissão de respostas até que TODAS as threads concluam suas avaliações.
            </p>
            <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '6px', padding: '8px', fontSize: '0.72rem', color: '#7C2D12' }}>
              <strong>Sincronização Estrita:</strong><br />
              Impede respostas fragmentadas ou alucinações baseadas em dados parciais não homologados.
            </div>
          </div>
          <div style={{ background: '#FFF7ED', padding: '6px', borderRadius: '4px', fontSize: '0.7rem', color: '#9A3412', textAlign: 'center', fontWeight: 600 }}>
            Join Barrier Síncrono
          </div>
        </div>

        {/* Phase 4 */}
        <div
          className="card-base"
          style={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '4px solid #166534',
            background: '#FFFFFF',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#166534', fontFamily: 'var(--font-mono)' }}>FASE 04</span>
              <span style={{ fontSize: '0.68rem', background: '#F0FDF4', color: '#166534', padding: '1px 6px', borderRadius: '4px', fontWeight: 700 }}>Consolidação</span>
            </div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', marginBottom: '8px' }}>
              Destilação & Entrega
            </h4>
            <p style={{ fontSize: '0.76rem', color: '#334155', lineHeight: '1.45', marginBottom: '10px' }}>
              A thread principal unifica os resumos destilados, categoriza os achados e apresenta o resultado limpo.
            </p>
            <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '6px', padding: '8px', fontSize: '0.72rem', color: '#14532D' }}>
              <strong>Artefato Consolidado:</strong><br />
              • Tabela com severidades<br />
              • Links diretos de arquivo e linha<br />
              • Sugestão unificada de ação
            </div>
          </div>
          <div style={{ background: '#F0FDF4', padding: '6px', borderRadius: '4px', fontSize: '0.7rem', color: '#166534', textAlign: 'center', fontWeight: 600 }}>
            Fechamento de Threads
          </div>
        </div>
      </div>

      {/* Surface Controls Footer */}
      <div
        style={{
          background: '#F8FAFC',
          border: '1px solid #CBD5E1',
          borderRadius: '6px',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
        }}
      >
        <span style={{ fontWeight: 700, color: '#0A345D' }}>Controles de Inspeção por Superfície:</span>
        <span style={{ color: '#334155' }}>
          <strong>CLI:</strong> <code>/agent</code> alterna entre threads • <strong>Desktop App:</strong> Painel lateral Subagents • <strong>IDE:</strong> Background-Agent Panel com Stop / Open.
        </span>
      </div>
    </div>
  );
}
