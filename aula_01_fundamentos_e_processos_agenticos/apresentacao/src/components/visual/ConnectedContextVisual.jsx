import React from 'react';
import { Paperclip, Network, HardDrive, MessageSquare, Lock, ArrowRight, ShieldCheck, Database, GitBranch } from 'lucide-react';

export default function ConnectedContextVisual() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '320px 48px 1fr',
        gap: '20px',
        height: '100%',
        alignItems: 'center',
      }}
    >
      {/* Left: Supplied Context (Static Silo) */}
      <div
        className="card-base"
        style={{
          padding: '24px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderTop: '5px solid #94A3B8',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', fontWeight: 800 }}>
              PARADIGMA 01
            </span>
            <Paperclip size={20} color="#64748B" />
          </div>

          <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
            Contexto Fornecido
          </h3>
          <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600, display: 'block', marginBottom: '20px' }}>
            Uploads Manuais & Snapshots Estáticos
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ padding: '10px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', textAlign: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#334155', fontWeight: 600 }}>
                relatorio_v2_final.pdf
              </span>
            </div>
            <div style={{ padding: '10px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', textAlign: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#334155', fontWeight: 600 }}>
                dados_clientes_temp.csv
              </span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <span className="badge-pill" style={{ background: '#FEE2E2', color: '#991B1B', fontWeight: 700, fontSize: '0.75rem' }}>
            Silo Isolado & Sem Sincronia
          </span>
        </div>
      </div>

      {/* Center Transition */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ArrowRight size={32} color="#CBD5E1" />
      </div>

      {/* Right: Connected Context (Live OAuth Network) */}
      <div
        className="card-base"
        style={{
          padding: '24px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderTop: '5px solid var(--infnet-cyan)',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#0369A1', fontWeight: 800 }}>
              PARADIGMA 02 (CHATGPT WORK)
            </span>
            <Network size={22} color="var(--infnet-cyan)" />
          </div>

          <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
            Contexto Conectado
          </h3>
          <span style={{ fontSize: '0.8rem', color: '#0369A1', fontWeight: 600, display: 'block', marginBottom: '20px' }}>
            Conectores Autenticados com Sistemas de Registro
          </span>

          {/* 4 Connected System Nodes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div
              style={{
                padding: '12px',
                background: '#EFF6FF',
                border: '1px solid #BFDBFE',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <HardDrive size={20} color="#1E40AF" />
              <div>
                <strong style={{ fontSize: '0.82rem', color: 'var(--infnet-dark-blue)', display: 'block' }}>@Google Drive</strong>
                <span style={{ fontSize: '0.7rem', color: '#0369A1' }}>Docs, Sheets, Slides</span>
              </div>
            </div>

            <div
              style={{
                padding: '12px',
                background: '#FAF5FF',
                border: '1px solid #E9D5FF',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <MessageSquare size={20} color="#6B21A8" />
              <div>
                <strong style={{ fontSize: '0.82rem', color: 'var(--infnet-dark-blue)', display: 'block' }}>@Slack / Teams</strong>
                <span style={{ fontSize: '0.7rem', color: '#7E22CE' }}>Canais & Mensagens</span>
              </div>
            </div>

            <div
              style={{
                padding: '12px',
                background: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <GitBranch size={20} color="#15803D" />
              <div>
                <strong style={{ fontSize: '0.82rem', color: 'var(--infnet-dark-blue)', display: 'block' }}>@Jira / GitHub</strong>
                <span style={{ fontSize: '0.7rem', color: '#166534' }}>Tasks, PRs & Commits</span>
              </div>
            </div>

            <div
              style={{
                padding: '12px',
                background: '#FFF7ED',
                border: '1px solid #FED7AA',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Database size={20} color="#C2410C" />
              <div>
                <strong style={{ fontSize: '0.82rem', color: 'var(--infnet-dark-blue)', display: 'block' }}>@ERP / DB</strong>
                <span style={{ fontSize: '0.7rem', color: '#9A3412' }}>APIs Corporativas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Rule Badge */}
        <div
          style={{
            padding: '8px 16px',
            background: '#F0FDF4',
            border: '1px solid #86EFAC',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} color="#166534" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#166534' }}>
              Governança: Herança estrita de permissões do usuário logado via OAuth 2.0
            </span>
          </div>
          <span className="badge-pill" style={{ background: '#DCFCE7', color: '#166534', fontSize: '0.7rem', fontWeight: 800 }}>
            Read-Only First
          </span>
        </div>
      </div>
    </div>
  );
}
