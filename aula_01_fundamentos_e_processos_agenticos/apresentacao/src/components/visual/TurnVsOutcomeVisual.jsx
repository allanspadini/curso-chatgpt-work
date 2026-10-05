import React from 'react';
import { MessageSquare, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TurnVsOutcomeVisual() {
  const rows = [
    {
      dim: 'Unidade de Trabalho',
      chat: 'Turno Conversacional (Turn)',
      work: 'Desfecho Completo (Outcome)',
    },
    {
      dim: 'Acesso ao Contexto',
      chat: 'Upload Manual & Recortes Colados',
      work: 'Conectores OAuth (@Drive, @Slack, @Jira)',
    },
    {
      dim: 'Papel do Humano',
      chat: 'Barramento Manual entre Sistemas',
      work: 'Diretor do Contrato & Auditor Final',
    },
    {
      dim: 'Saída Gerada',
      chat: 'Texto Efêmero na Janela de Chat',
      work: 'Artefatos Nativos (.docx, .xlsx, Sites)',
    },
    {
      dim: 'Mecanismo de Execução',
      chat: '1 Interação = 1 Resposta Isolada',
      work: 'Plano Multi-Etapas com Auto-Correção',
    },
  ];

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
          display: 'grid',
          gridTemplateColumns: '260px 1fr 1fr',
          gap: '16px',
        }}
      >
        <div style={{ padding: '8px 16px', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 800, color: 'var(--infnet-dark-blue)' }}>
            MATRIZ COMPARATIVA
          </span>
        </div>

        <div
          className="card-base"
          style={{
            padding: '10px 16px',
            background: '#F8FAFC',
            borderTop: '4px solid #94A3B8',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <MessageSquare size={18} color="#475569" />
          <strong style={{ fontSize: '0.92rem', color: 'var(--infnet-dark-blue)' }}>ChatGPT Tradicional (Chat)</strong>
        </div>

        <div
          className="card-base"
          style={{
            padding: '10px 16px',
            background: '#EFF6FF',
            borderTop: '4px solid var(--infnet-cyan)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Briefcase size={18} color="var(--infnet-cyan)" />
          <strong style={{ fontSize: '0.92rem', color: 'var(--infnet-dark-blue)' }}>ChatGPT Work (Agente)</strong>
        </div>
      </div>

      {/* Main Table Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, margin: '10px 0' }}>
        {rows.map((r, idx) => (
          <div
            key={idx}
            style={{
              display: 'grid',
              gridTemplateColumns: '260px 1fr 1fr',
              gap: '16px',
              alignItems: 'center',
              flex: 1,
            }}
          >
            {/* Dimension */}
            <div
              style={{
                padding: '10px 16px',
                background: '#F1F5F9',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: 'var(--infnet-dark-blue)',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {r.dim}
            </div>

            {/* Chat Value */}
            <div
              className="card-base"
              style={{
                padding: '10px 16px',
                background: '#FFFFFF',
                fontSize: '0.82rem',
                color: '#475569',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                borderLeft: '4px solid #CBD5E1',
              }}
            >
              {r.chat}
            </div>

            {/* Work Value */}
            <div
              className="card-base"
              style={{
                padding: '10px 16px',
                background: '#F0FDF4',
                fontSize: '0.82rem',
                color: '#166534',
                fontWeight: 700,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                borderLeft: '4px solid var(--infnet-green-accent)',
              }}
            >
              <CheckCircle2 size={16} color="var(--infnet-green-accent)" style={{ marginRight: '8px', flexShrink: 0 }} />
              {r.work}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Synthesis Ribbon */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '8px',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontSize: '0.82rem', color: 'var(--infnet-dark-blue)', fontWeight: 700 }}>
          A virada da disciplina: de pedir respostas no chat para delegar entregáveis corporativos auditáveis
        </span>
        <span className="badge-pill" style={{ background: 'var(--infnet-dark-blue)', color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
          Shift Arquitetural
        </span>
      </div>
    </div>
  );
}
