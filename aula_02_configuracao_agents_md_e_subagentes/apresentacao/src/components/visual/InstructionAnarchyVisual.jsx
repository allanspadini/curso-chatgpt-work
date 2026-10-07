import React from 'react';
import { AlertTriangle, UserX, FileX, Terminal, ShieldAlert, RefreshCw, XCircle } from 'lucide-react';

export default function InstructionAnarchyVisual() {
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
          background: '#FEF2F2',
          border: '1px solid #FCA5A5',
          borderRadius: '8px',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <AlertTriangle size={20} color="#991B1B" />
          <span style={{ fontSize: '0.9rem', color: '#991B1B', fontWeight: 700 }}>
            Situação-Problema do Mundo Real:
          </span>
          <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 500 }}>
            O colapso da governança e confiabilidade quando instruções de IA são tratadas como 'prompts soltos' na interface.
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#991B1B',
            background: '#FEE2E2',
            padding: '3px 8px',
            borderRadius: '4px',
          }}
        >
          FALHA DE ENGENHARIA
        </span>
      </div>

      {/* Main Visual Comparison: The Chaos of Ad-hoc UI Prompts */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '18px',
          flex: 1,
          alignItems: 'stretch',
        }}
      >
        {/* Left Diagram: 3 Devs with Conflicting UI Prompts */}
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
              Cenário Real: Equipe de Engenharia sem AGENTS.md
            </span>
            <span style={{ fontSize: '0.75rem', color: '#991B1B', fontWeight: 700, background: '#FEF2F2', padding: '2px 8px', borderRadius: '4px' }}>
              Prompts Locais Desconectados
            </span>
          </div>

          {/* 3 Developer Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Dev 1 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '110px 1fr 140px',
                alignItems: 'center',
                gap: '12px',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '10px 14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <UserX size={16} color="#475569" />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0A345D' }}>Dev Alpha</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  borderRadius: '4px',
                  padding: '6px 10px',
                  color: '#334155',
                }}
              >
                "Sempre use pnpm e escreva testes com Jest"
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#991B1B', fontSize: '0.74rem', fontWeight: 600 }}>
                <XCircle size={14} color="#DC2626" /> Conflito com npm
              </div>
            </div>

            {/* Dev 2 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '110px 1fr 140px',
                alignItems: 'center',
                gap: '12px',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '10px 14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <UserX size={16} color="#475569" />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0A345D' }}>Dev Beta</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  borderRadius: '4px',
                  padding: '6px 10px',
                  color: '#334155',
                }}
              >
                (Sem prompt customizado - usa padrão genérico)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#991B1B', fontSize: '0.74rem', fontWeight: 600 }}>
                <XCircle size={14} color="#DC2626" /> Viola linters do CI
              </div>
            </div>

            {/* Dev 3 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '110px 1fr 140px',
                alignItems: 'center',
                gap: '12px',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '10px 14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <UserX size={16} color="#475569" />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0A345D' }}>Dev Gamma</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  borderRadius: '4px',
                  padding: '6px 10px',
                  color: '#334155',
                }}
              >
                "Refatore o módulo de pagamentos rapidamente"
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#991B1B', fontSize: '0.74rem', fontWeight: 600 }}>
                <ShieldAlert size={14} color="#DC2626" /> Rotação indevida de API Key
              </div>
            </div>
          </div>

          {/* SVG Connector to Monorepo */}
          <div
            style={{
              marginTop: '12px',
              padding: '8px 12px',
              background: '#FEF2F2',
              borderRadius: '6px',
              border: '1px dashed #F87171',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <RefreshCw size={16} color="#991B1B" />
            <span style={{ fontSize: '0.8rem', color: '#991B1B', fontWeight: 700 }}>
              Gargalo Operacional: Retrabalho de 45% do time corrigindo divergências nos Pull Requests
            </span>
          </div>
        </div>

        {/* Right Panel: The 4 Structural Failures */}
        <div
          className="card-base"
          style={{
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#FFFFFF',
          }}
        >
          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase', marginBottom: '8px' }}>
            Impactos Críticos na Indústria
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '6px', padding: '10px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                <FileX size={16} color="#C2410C" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#9A3412' }}>Zero Versionamento (GitOps Nulo)</span>
              </div>
              <span style={{ fontSize: '0.76rem', color: '#431407' }}>
                Prompts residem na memória do navegador. Impossível auditar histórico ou reverter regras que causaram falhas.
              </span>
            </div>

            <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '6px', padding: '10px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                <ShieldAlert size={16} color="#DC2626" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#991B1B' }}>Violação de Segurança & Compliance</span>
              </div>
              <span style={{ fontSize: '0.76rem', color: '#450A0A' }}>
                Regras de segredos e APIs críticas esquecidas, expondo credenciais corporativas a ferramentas públicas.
              </span>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '10px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                <Terminal size={16} color="#0A345D" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0A345D' }}>Inconsistência em Monorepositórios</span>
              </div>
              <span style={{ fontSize: '0.76rem', color: '#334155' }}>
                Microserviços com pilhas distintas (Python, Go, Node) tratados de forma idêntica e inadequada pelo modelo.
              </span>
            </div>
          </div>

          <div
            style={{
              marginTop: '10px',
              padding: '6px 10px',
              background: '#EDF5FA',
              borderRadius: '4px',
              fontSize: '0.76rem',
              color: '#0369A1',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Regra Fundamental: As regras do agente devem residir no repositório, não na cabeça do operador.
          </div>
        </div>
      </div>
    </div>
  );
}
