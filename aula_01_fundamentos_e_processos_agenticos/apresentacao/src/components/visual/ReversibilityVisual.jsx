import React from 'react';
import { ShieldCheck, AlertCircle, ArrowRight, UserCheck, CheckCircle2, Zap, Lock } from 'lucide-react';

export default function ReversibilityVisual() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '6px 0',
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '10px',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShieldCheck size={22} color="var(--infnet-dark-blue)" />
          <strong style={{ fontSize: '0.95rem', color: 'var(--infnet-dark-blue)' }}>
            O Princípio da Reversibilidade: Autonomia Proporcional ao Risco
          </strong>
        </div>
        <span className="badge-pill" style={{ background: 'var(--infnet-cyan)', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
          Governança de Autonomia
        </span>
      </div>

      {/* Main 2-Pillar Spectrum Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          margin: '14px 0',
          alignItems: 'stretch',
          flex: 1,
        }}
      >
        {/* Left: Alta Reversibilidade */}
        <div
          className="card-base"
          style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '6px solid var(--infnet-green-accent)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span className="badge-pill" style={{ background: '#F0FDF4', color: '#166534', border: '1px solid #86EFAC', fontWeight: 800 }}>
                100% REVERSÍVEL • RISCO NULO
              </span>
              <Zap size={22} color="var(--infnet-green-accent)" />
            </div>

            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.35rem', color: 'var(--infnet-dark-blue)', fontWeight: 800, marginBottom: '6px' }}>
              Autonomia Plena ao Agente
            </h3>
            <span style={{ fontSize: '0.8rem', color: '#166534', fontWeight: 700, display: 'block', marginBottom: '18px' }}>
              Execução Contínua sem Interrupção
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ padding: '10px 14px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={16} color="var(--infnet-green-accent)" />
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1E293B' }}>Leitura e Consulta de Documentos Homologados</span>
              </div>
              <div style={{ padding: '10px 14px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={16} color="var(--infnet-green-accent)" />
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1E293B' }}>Pesquisa Web & Extração de Evidências</span>
              </div>
              <div style={{ padding: '10px 14px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={16} color="var(--infnet-green-accent)" />
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1E293B' }}>Síntese de Rascunhos e Tabelas Comparativas Locais</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
            <span className="badge-pill" style={{ background: '#DCFCE7', color: '#166534', fontWeight: 800 }}>
              ✓ Sem bloqueios: Velocidade Máxima
            </span>
          </div>
        </div>

        {/* Right: Baixa Reversibilidade */}
        <div
          className="card-base"
          style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '6px solid #DC2626',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span className="badge-pill" style={{ background: '#FEF2F2', color: '#991B1B', border: '1px solid #FCA5A5', fontWeight: 800 }}>
                BAIXA REVERSIBILIDADE • ALTO IMPACTO
              </span>
              <Lock size={22} color="#DC2626" />
            </div>

            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.35rem', color: 'var(--infnet-dark-blue)', fontWeight: 800, marginBottom: '6px' }}>
              Portão Humano Obrigatório (HITL)
            </h3>
            <span style={{ fontSize: '0.8rem', color: '#991B1B', fontWeight: 700, display: 'block', marginBottom: '18px' }}>
              Parada Mandatória para Homologação
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ padding: '10px 14px', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertCircle size={16} color="#DC2626" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#991B1B' }}>Disparo de E-mails / Mensagens a Clientes Externos</span>
              </div>
              <div style={{ padding: '10px 14px', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertCircle size={16} color="#DC2626" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#991B1B' }}>Atualização em Banco de Dados / CRM / ERP de Produção</span>
              </div>
              <div style={{ padding: '10px 14px', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertCircle size={16} color="#DC2626" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#991B1B' }}>Aprovação Financeira, Contratos ou Débito em APIs</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
            <span className="badge-pill" style={{ background: '#FEE2E2', color: '#991B1B', fontWeight: 800 }}>
              🛑 Parada Obrigatória: Risco e Conformidade Legal
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Synthesis Ribbon */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid var(--border-light)',
          borderRadius: '8px',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontSize: '0.82rem', color: 'var(--infnet-dark-blue)', fontWeight: 700 }}>
          Balanço Ótimo: Confirmação excessiva gera microgerenciamento; ausência de portões gera passivo legal.
        </span>
        <span className="badge-pill" style={{ background: 'var(--infnet-dark-blue)', color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
          HITL Governance
        </span>
      </div>
    </div>
  );
}
