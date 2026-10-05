import React from 'react';
import { Repeat, ArrowRight, ArrowDown, Cpu, FileCheck, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function TurnBottleneckVisual() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        height: '100%',
        alignItems: 'stretch',
      }}
    >
      {/* Left: The Turn Trap Diagram */}
      <div
        className="card-base"
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderTop: '5px solid #F97316',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Repeat size={22} color="#EA580C" />
              <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
                A Prisão do Turno a Turno
              </h3>
            </div>
            <span className="badge-pill" style={{ background: '#FFF7ED', color: '#C2410C', border: '1px solid #FDBA74' }}>
              Turn-by-Turn Trap
            </span>
          </div>

          {/* Sequential Step Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="kbd-badge" style={{ background: '#E2E8F0' }}>01</span>
                <strong style={{ fontSize: '0.85rem', color: '#1E293B' }}>Prompt Inicial no Chat</strong>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Resposta Genérica</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ArrowDown size={18} color="#94A3B8" />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                background: '#FFF7ED',
                border: '1px solid #FDBA74',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="kbd-badge" style={{ background: '#FED7AA', color: '#9A3412' }}>02</span>
                <strong style={{ fontSize: '0.85rem', color: '#9A3412' }}>Cópia/Cola Manual de Arquivos</strong>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#C2410C', fontWeight: 600 }}>Humano como Barramento</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ArrowDown size={18} color="#94A3B8" />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                background: '#FEF2F2',
                border: '1px solid #FCA5A5',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="kbd-badge" style={{ background: '#FEE2E2', color: '#991B1B' }}>03</span>
                <strong style={{ fontSize: '0.85rem', color: '#991B1B' }}>Auditoria & Correção Manual</strong>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#991B1B', fontWeight: 600 }}>Fadiga Cognitiva</span>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: '8px 14px',
            background: '#FFF7ED',
            borderRadius: '6px',
            border: '1px solid #FDBA74',
            fontSize: '0.75rem',
            color: '#9A3412',
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          Gargalo: A tecnologia acelera o texto, mas mantém o processo 100% artesanal
        </div>
      </div>

      {/* Right: The Shift to Outcome Delegation */}
      <div
        className="card-base"
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderTop: '5px solid var(--infnet-cyan)',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Cpu size={22} color="var(--infnet-cyan)" />
              <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
                Delegação por Desfecho (Work)
              </h3>
            </div>
            <span className="badge-pill" style={{ background: '#EDF5FA', color: '#0369A1', border: '1px solid #D0E3F0' }}>
              Outcome-Based Delegation
            </span>
          </div>

          {/* Sequential Step Nodes in Work */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                background: '#EFF6FF',
                border: '1px solid #BFDBFE',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="kbd-badge" style={{ background: 'var(--infnet-dark-blue)', color: '#FFFFFF' }}>01</span>
                <strong style={{ fontSize: '0.85rem', color: 'var(--infnet-dark-blue)' }}>Contrato de Trabalho</strong>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#0369A1', fontWeight: 600 }}>Meta, Limites e Critérios</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ArrowDown size={18} color="var(--infnet-cyan)" />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                background: '#EFF6FF',
                border: '1px solid #BFDBFE',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="kbd-badge" style={{ background: 'var(--infnet-cyan)', color: 'var(--infnet-dark-blue)' }}>02</span>
                <strong style={{ fontSize: '0.85rem', color: 'var(--infnet-dark-blue)' }}>Execução com Conectores</strong>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#0369A1', fontWeight: 600 }}>@Drive + @Slack + Codex</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ArrowDown size={18} color="var(--infnet-green-accent)" />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                background: '#F0FDF4',
                border: '1px solid #86EFAC',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="kbd-badge" style={{ background: 'var(--infnet-green-accent)', color: '#FFFFFF' }}>03</span>
                <strong style={{ fontSize: '0.85rem', color: '#166534' }}>Artefato Estruturado Auditável</strong>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#166534', fontWeight: 700 }}>Homologação Humana</span>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: '8px 14px',
            background: '#F0FDF4',
            borderRadius: '6px',
            border: '1px solid #86EFAC',
            fontSize: '0.75rem',
            color: '#166534',
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          Transformação: O operador vira diretor do contrato e auditor do artefato final
        </div>
      </div>
    </div>
  );
}
