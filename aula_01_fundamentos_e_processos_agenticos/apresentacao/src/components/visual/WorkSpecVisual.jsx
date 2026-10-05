import React from 'react';
import { FileText, CheckCircle2, XCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function WorkSpecVisual() {
  const specFields = [
    { tag: '01. OUTCOME', title: 'Desfecho Esperado', value: 'Artefato entregável concreto e observável' },
    { tag: '02. AUDIENCE', title: 'Público & Decisão', value: 'Stakeholder final e ação dependente' },
    { tag: '03. SOURCES', title: 'Fontes Oficiais', value: 'Documentos e sistemas de registro autorizados' },
    { tag: '04. BOUNDARIES', title: 'Fronteiras de Escopo', value: 'Inclusões, exclusões e linhas vermelhas' },
    { tag: '05. FORMAT', title: 'Estrutura & Mídia', value: 'Layout, tabelas, seções e template' },
    { tag: '06. AUDIT', title: 'Critérios de Inspeção', value: 'Checklist objetivo para homologação humana' },
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
      {/* Top Visual Contrast */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
        }}
      >
        {/* Bad: Informal prompt */}
        <div
          className="card-base"
          style={{
            padding: '14px 20px',
            background: 'var(--status-danger-bg)',
            border: '1px solid var(--status-danger-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <XCircle size={20} color="var(--status-danger-text)" />
            <div>
              <strong style={{ fontSize: '0.85rem', color: 'var(--status-danger-text)', display: 'block' }}>
                Prompt Informal (Vago)
              </strong>
              <code style={{ fontSize: '0.8rem', color: '#991B1B', fontFamily: 'var(--font-mono)' }}>
                "Resuma estas notas da reunião."
              </code>
            </div>
          </div>
          <span className="badge-pill" style={{ background: '#FEE2E2', color: '#991B1B', fontSize: '0.72rem', fontWeight: 700 }}>
            Ambiguidade Máxima
          </span>
        </div>

        {/* Good: Work specification */}
        <div
          className="card-base"
          style={{
            padding: '14px 20px',
            background: 'var(--status-success-bg)',
            border: '1px solid var(--status-success-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={20} color="var(--status-success-text)" />
            <div>
              <strong style={{ fontSize: '0.85rem', color: 'var(--status-success-text)', display: 'block' }}>
                Especificação de Trabalho (Work Specification)
              </strong>
              <code style={{ fontSize: '0.8rem', color: '#166534', fontFamily: 'var(--font-mono)' }}>
                "Briefing 1 pág. | Decisões e Prazos | Fontes Rastreadas"
              </code>
            </div>
          </div>
          <span className="badge-pill" style={{ background: '#DCFCE7', color: '#166534', fontSize: '0.72rem', fontWeight: 700 }}>
            Contrato Executável
          </span>
        </div>
      </div>

      {/* Main 6 Slots Architecture Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '14px',
          margin: '12px 0',
          flex: 1,
        }}
      >
        {specFields.map((field, idx) => (
          <div
            key={idx}
            className="card-base"
            style={{
              padding: '18px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderLeft: '5px solid var(--infnet-dark-blue)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#0369A1',
                  background: '#EDF5FA',
                  padding: '2px 8px',
                  borderRadius: '4px',
                }}
              >
                {field.tag}
              </span>
              <FileText size={18} color="var(--infnet-dark-blue)" />
            </div>

            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '1.05rem',
                  color: 'var(--infnet-dark-blue)',
                  fontWeight: 800,
                  margin: '8px 0 4px 0',
                }}
              >
                {field.title}
              </h4>
              <span style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 500 }}>
                {field.value}
              </span>
            </div>

            <div style={{ paddingTop: '8px', borderTop: '1px solid #F1F5F9', textAlign: 'right' }}>
              <span className="badge-pill" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#334155', fontSize: '0.7rem' }}>
                Slot Obrigatório
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Architectural Motto */}
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
          Engenharia de Prompt: O resultado é determinado pela completude da especificação, não por palavras mágicas.
        </span>
        <span className="badge-pill" style={{ background: 'var(--infnet-dark-blue)', color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
          Work Specification Protocol
        </span>
      </div>
    </div>
  );
}
