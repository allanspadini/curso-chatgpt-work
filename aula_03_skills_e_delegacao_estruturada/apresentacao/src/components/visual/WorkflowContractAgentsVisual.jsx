import React from 'react';
import { GitCommit, FileCode, CheckSquare, ArrowRight, Shield, Layers, UserCheck } from 'lucide-react';

export default function WorkflowContractAgentsVisual() {
  const steps = [
    { num: '1', name: 'Gatilho', desc: 'Chegada dos 3 PDFs de propostas comerciais na pasta local', icon: '📥' },
    { num: '2', name: 'Fontes', desc: 'proposta_alpha.pdf, beta.pdf, gamma.pdf + politica_compras.md', icon: '📁' },
    { num: '3', name: 'Transformações', desc: 'Extração tabular, confronto c/ teto orçamentário (R$ 50k) e matriz de SLA', icon: '⚙️' },
    { num: '4', name: 'Saída', desc: 'parecer_aquisicao.md estruturado com tabela, prós, contras e riscos', icon: '📄' },
    { num: '5', name: 'Aprovações', desc: 'Portão HITL: Gerência e Diretoria aprovam antes da contratação', icon: '👤' },
  ];

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
      {/* Top Section: Workflow Pipeline (Rubric 1.5) */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #D5E3EC',
          borderRadius: '10px',
          padding: '12px 18px',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                background: '#EFF6FF',
                color: '#1E40AF',
                padding: '3px 8px',
                borderRadius: '4px',
                border: '1px solid #BFDBFE',
              }}
            >
              Rubrica 1.5
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.98rem',
                fontWeight: 700,
                color: 'var(--infnet-dark-blue)',
              }}
            >
              Mapeamento do Fluxo de Trabalho (Pipeline em 5 Fases)
            </h3>
          </div>
          <span style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 600 }}>
            Mapear antes de propor automatizar
          </span>
        </div>

        {/* 5-step Flow Ribbon */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
          {steps.map((st, i) => (
            <div
              key={i}
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '6px',
                padding: '8px 10px',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.85rem' }}>{st.icon}</span>
                <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#0A345D' }}>
                  {st.num}. {st.name}
                </span>
              </div>
              <div style={{ fontSize: '0.71rem', color: '#334155', lineHeight: 1.3 }}>
                {st.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: 2 Columns (Rubrics 1.6 & 1.4) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '14px',
          flex: 1,
        }}
      >
        {/* Left Column: AGENTS.md local contract (Rubric 1.6) */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #D5E3EC',
            borderRadius: '10px',
            padding: '14px 16px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  background: '#F0FDF4',
                  color: '#166534',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  border: '1px solid #86EFAC',
                }}
              >
                Rubrica 1.6 • Contrato Agêntico
              </span>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#0369A1' }}>
                Arquivo: <code>AGENTS.md</code> na pasta local
              </span>
            </div>

            <h4
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.98rem',
                fontWeight: 700,
                color: 'var(--infnet-dark-blue)',
                marginBottom: '8px',
              }}
            >
              Contrato Agêntico Completo no Projeto Local
            </h4>

            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '6px',
                padding: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.73rem',
                color: '#1E293B',
                lineHeight: 1.4,
              }}
            >
              <div style={{ color: '#0A345D', fontWeight: 700, marginBottom: '4px' }}>
                # AGENTS.md — Contrato de Auditoria de Propostas
              </div>
              <div style={{ marginBottom: '6px' }}>
                <span style={{ color: '#0369A1', fontWeight: 600 }}>## Outcome (Resultado):</span>
                <span style={{ color: '#334155' }}> Parecer executivo comparativo (parecer_aquisicao.md) com tabela de conformidade técnica e orçamentária.</span>
              </div>
              <div style={{ marginBottom: '6px' }}>
                <span style={{ color: '#166534', fontWeight: 600 }}>## Context (Contexto):</span>
                <span style={{ color: '#334155' }}> Teto orçamentário rígido de R$ 50.000,00; prazo máximo de entrega: 60 dias; SLA mínimo: 99.5%.</span>
              </div>
              <div>
                <span style={{ color: '#991B1B', fontWeight: 600 }}>## Constraints (Restrições):</span>
                <span style={{ color: '#7F1D1D' }}> SOMENTE LEITURA nos PDFs originais. NUNCA enviar e-mails ou mensagens. Parar e perguntar se faltar valor de imposto.</span>
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.74rem', color: '#166534', fontWeight: 600, marginTop: '8px' }}>
            ✓ Salvar arquivo AGENTS.md na raiz da pasta de trabalho
          </div>
        </div>

        {/* Right Column: Work Spec & Layered Review (Rubric 1.4) */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #D5E3EC',
            borderRadius: '10px',
            padding: '14px 16px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  background: '#EFF6FF',
                  color: '#1E40AF',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  border: '1px solid #BFDBFE',
                }}
              >
                Rubrica 1.4 • Work Spec
              </span>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#64748B' }}>Revisão em Camadas</span>
            </div>

            <h4
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.98rem',
                fontWeight: 700,
                color: 'var(--infnet-dark-blue)',
                marginBottom: '8px',
              }}
            >
              Plano de Revisão em 4 Camadas
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '6px 8px' }}>
                <strong style={{ fontSize: '0.74rem', color: '#0A345D' }}>1. Camada de Decisão:</strong>
                <span style={{ fontSize: '0.72rem', color: '#334155' }}> O relatório responde claramente à dúvida do Diretor Financeiro?</span>
              </div>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '6px 8px' }}>
                <strong style={{ fontSize: '0.74rem', color: '#0369A1' }}>2. Camada Factual / Numérica:</strong>
                <span style={{ fontSize: '0.72rem', color: '#334155' }}> Cada preço, desconto e multa bate 100% com os PDFs citados?</span>
              </div>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '6px 8px' }}>
                <strong style={{ fontSize: '0.74rem', color: '#166534' }}>3. Camada de Completude:</strong>
                <span style={{ fontSize: '0.72rem', color: '#334155' }}> Os 3 concorrentes e os 5 critérios de risco foram analisados?</span>
              </div>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '6px 8px' }}>
                <strong style={{ fontSize: '0.74rem', color: '#7C2D12' }}>4. Camada de Formato & Ação:</strong>
                <span style={{ fontSize: '0.72rem', color: '#334155' }}> Layout em tabela limpa, sem links quebrados e sem dados confidenciais expostos.</span>
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.74rem', color: '#0369A1', fontWeight: 600, marginTop: '8px' }}>
            ✓ Registrar o plano de revisão por escrito no relatório
          </div>
        </div>
      </div>
    </div>
  );
}
