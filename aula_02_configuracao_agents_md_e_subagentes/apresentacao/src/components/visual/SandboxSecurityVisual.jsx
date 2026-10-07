import React from 'react';
import { ShieldCheck, Lock, Terminal, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SandboxSecurityVisual() {
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
          <ShieldCheck size={20} color="#0A345D" />
          <span style={{ fontSize: '0.9rem', color: '#0A345D', fontWeight: 700 }}>
            Governança Corporativa:
          </span>
          <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 500 }}>
            Políticas de Sandbox, Princípio do Menor Privilégio e Portões HITL em Subagentes Concorrentes.
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
          LEAST PRIVILEGE
        </span>
      </div>

      {/* Main Grid: Sandbox Isolation vs Approval Interception */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '18px',
          flex: 1,
          alignItems: 'stretch',
        }}
      >
        {/* Left: Least Privilege Matrix */}
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
              1. Princípio do Menor Privilégio em Sandboxes
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
              {/* Read-Only Card */}
              <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '6px', padding: '10px 12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Lock size={16} color="#166534" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#166534' }}>sandbox_mode = "read-only"</span>
                </div>
                <span style={{ fontSize: '0.74rem', color: '#14532D' }}>
                  Obrigatório para <code>explorer</code>, <code>reviewer</code> e <code>docs_researcher</code>. O subagente pode ler código e executar comandos de verificação, mas tem o sistema de arquivos bloqueado para alterações.
                </span>
              </div>

              {/* Workspace-Write Card */}
              <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '6px', padding: '10px 12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Terminal size={16} color="#C2410C" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#9A3412' }}>sandbox_mode = "workspace-write"</span>
                </div>
                <span style={{ fontSize: '0.74rem', color: '#431407' }}>
                  Restrito exclusivamente a agentes de correção e implementação (ex: <code>ui_fixer</code>, <code>worker</code>), apenas após a causa raiz ter sido comprovada por subagentes de leitura.
                </span>
              </div>
            </div>
          </div>

          <div style={{ background: '#EDF5FA', padding: '6px 12px', borderRadius: '4px', fontSize: '0.72rem', color: '#0369A1', fontWeight: 600 }}>
            Regra: Nunca conceda permissão de escrita a agentes cujo propósito seja apenas auditoria ou busca.
          </div>
        </div>

        {/* Right: Approval Interception & Headless Fail-Safe */}
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
              2. Interrupções e Modos de Aprovação
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
              {/* Interactive CLI Approval */}
              <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '10px 12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Terminal size={16} color="#0A345D" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0A345D' }}>Sessão Interativa no CLI</span>
                </div>
                <span style={{ fontSize: '0.74rem', color: '#334155' }}>
                  Se uma thread secundária solicitar uma ação restrita, o CLI sobrepõe o pedido na tela principal. O operador pressiona a tecla <kbd className="kbd-badge">o</kbd> para abrir e auditar a thread do subagente antes de responder.
                </span>
              </div>

              {/* Headless Fail-Safe */}
              <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '6px', padding: '10px 12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <AlertTriangle size={16} color="#DC2626" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#991B1B' }}>Falha Segura em Automações (Fail-Safe)</span>
                </div>
                <span style={{ fontSize: '0.74rem', color: '#450A0A' }}>
                  Em esteiras de CI/CD ou fluxos headless onde o operador não pode ser consultado, qualquer tentativa de ação que demande nova aprovação <strong>falha imediatamente</strong> e reporta o erro ao orquestrador.
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '6px 12px',
              background: '#F0FDF4',
              borderRadius: '4px',
              fontSize: '0.72rem',
              color: '#166534',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            ✓ Princípio da Reversibilidade: Governança rígida garantindo que agentes não ajam no escuro.
          </div>
        </div>
      </div>
    </div>
  );
}
