import React from 'react';
import { FolderGit2, Play, ShieldAlert, CheckCircle2, Lock, FileSpreadsheet, Eye } from 'lucide-react';

export default function ExecutionProjectSecurityVisual() {
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
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '8px',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FolderGit2 size={20} color="var(--infnet-dark-blue)" />
          <div>
            <span style={{ fontWeight: 700, color: 'var(--infnet-dark-blue)', fontSize: '0.92rem' }}>
              Execução Operacional no ChatGPT Work Instalado Localmente
            </span>
            <span style={{ display: 'block', fontSize: '0.78rem', color: '#475569' }}>
              Transição da conversa avulsa para o ambiente de trabalho durável, delegação com critérios de aceite e governança de risco.
            </span>
          </div>
        </div>
        <span
          style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            background: '#FFFFFF',
            color: '#0369A1',
            padding: '4px 10px',
            borderRadius: '6px',
            border: '1px solid #BAE6FD',
          }}
        >
          Passo 3 de 3 da Prática
        </span>
      </div>

      {/* 3 Action Columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr 0.95fr',
          gap: '14px',
          flex: 1,
        }}
      >
        {/* Column 1: Local Project as Durable Context (Rubric 2.2) */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #D5E3EC',
            borderRadius: '10px',
            padding: '16px',
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
                Rubrica 2.2 • Contexto Durável
              </span>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#64748B' }}>Configuração Local</span>
            </div>

            <h4
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.02rem',
                fontWeight: 700,
                color: 'var(--infnet-dark-blue)',
                marginBottom: '10px',
              }}
            >
              1. Criar Project no ChatGPT Work
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#0A345D', marginBottom: '2px' }}>
                  A. Criação do Project
                </div>
                <div style={{ fontSize: '0.74rem', color: '#334155', lineHeight: 1.35 }}>
                  Nome: <em>"Auditoria de Fornecedores 2026"</em>. Vincular pasta local do projeto.
                </div>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#0A345D', marginBottom: '2px' }}>
                  B. Inclusão dos Arquivos Base
                </div>
                <div style={{ fontSize: '0.74rem', color: '#334155', lineHeight: 1.35 }}>
                  Anexar os 3 PDFs de propostas e o arquivo <code>AGENTS.md</code> como instruções duráveis.
                </div>
              </div>

              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#166534', marginBottom: '2px' }}>
                  C. O Ganho do Contexto Durável
                </div>
                <div style={{ fontSize: '0.73rem', color: '#14532D', lineHeight: 1.35 }}>
                  Elimina a necessidade de reinserir arquivos e regras a cada nova interação da equipe.
                </div>
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.74rem', color: '#0369A1', fontWeight: 600, marginTop: '8px' }}>
            ✓ Capturar print do Project criado com arquivos
          </div>
        </div>

        {/* Column 2: Delegation & Acceptance Criteria (Rubric 2.1) */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #86EFAC',
            borderRadius: '10px',
            padding: '16px',
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
                Rubrica 2.1 • Delegação Real
              </span>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#166534' }}>Modo Work</span>
            </div>

            <h4
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.02rem',
                fontWeight: 700,
                color: '#166534',
                marginBottom: '10px',
              }}
            >
              2. Executar Delegação no Modo Work
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ background: '#F0FDF4', border: '1px solid #DCFCE7', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#166534', marginBottom: '2px' }}>
                  Decisão de Ferramenta: Por que Work?
                </div>
                <div style={{ fontSize: '0.73rem', color: '#14532D', lineHeight: 1.35 }}>
                  Exige navegação multi-arquivos e produção de um artefato final inspecionável (não é chat rápido).
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#0A345D', marginBottom: '4px' }}>
                  Critérios de Aceite Explícitos da Tarefa:
                </div>
                <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.72rem', color: '#334155', lineHeight: 1.4 }}>
                  <li>Tabela confrontando Preço, Prazo, SLA e Penalidades;</li>
                  <li>Destaque explícito de itens que ultrapassam R$ 50.000;</li>
                  <li>Mínimo de 2 riscos identificados por fornecedor;</li>
                  <li>Duas perguntas técnicas para esclarecimento com o fornecedor líder.</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.74rem', color: '#166534', fontWeight: 700, marginTop: '8px' }}>
            ✓ Executar no Work e inspecionar o arquivo gerado
          </div>
        </div>

        {/* Column 3: Apps Risk & Evidence Checklist (Rubric 2.2b + Checklist) */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #D5E3EC',
            borderRadius: '10px',
            padding: '16px',
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
                  background: '#FFF7ED',
                  color: '#9A3412',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  border: '1px solid #FDBA74',
                }}
              >
                Risco de Apps
              </span>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#9A3412' }}>Governança</span>
            </div>

            <h4
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.02rem',
                fontWeight: 700,
                color: 'var(--infnet-dark-blue)',
                marginBottom: '8px',
              }}
            >
              3. Permissões de Escrita & Checklist
            </h4>

            <div
              style={{
                background: '#FFF7ED',
                border: '1px solid #FED7AA',
                borderRadius: '6px',
                padding: '8px 10px',
                marginBottom: '10px',
              }}
            >
              <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#9A3412', marginBottom: '2px' }}>
                Avaliação de Risco de Escrita (Write Permissions):
              </div>
              <div style={{ fontSize: '0.72rem', color: '#7C2D12', lineHeight: 1.35 }}>
                Conceder escrita a Apps (Drive/Slack/ERP) pode sobrescrever contratos originais ou disparar mensagens externas. Manter <strong>Read-Only</strong> até a homologação.
              </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 10px' }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#0A345D', marginBottom: '4px' }}>
                📋 5 Evidências para Entrega do Projeto:
              </div>
              <div style={{ fontSize: '0.71rem', color: '#334155', lineHeight: 1.35 }}>
                1. Texto pré-IA de problema e métricas (1.1, 1.2)<br />
                2. Print comparativo sem fonte vs com fonte (1.3)<br />
                3. Mapa de fluxo e <code>AGENTS.md</code> com contrato (1.4, 1.5, 1.6)<br />
                4. Print do Project com arquivos locais (2.2)<br />
                5. Entregável final do Work com critérios de aceite (2.1)
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.74rem', color: '#0A345D', fontWeight: 700, marginTop: '8px' }}>
            🎯 100% das 8 Rubricas Cobertas com Sucesso!
          </div>
        </div>
      </div>
    </div>
  );
}
