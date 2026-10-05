import React, { useState } from 'react';
import { ShieldCheck, Calendar, Filter, FileCode2, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';

export default function ContextInspector() {
  const [authoritative, setAuthoritative] = useState(true);
  const [current, setCurrent] = useState(true);
  const [scoped, setScoped] = useState(true);
  const [interpretable, setInterpretable] = useState(true);

  const activeCount = (authoritative ? 1 : 0) + (current ? 1 : 0) + (scoped ? 1 : 0) + (interpretable ? 1 : 0);
  const fidelity = Math.round((activeCount / 4) * 100);
  const hallucinationRisk = 100 - fidelity;

  const resetAll = () => {
    setAuthoritative(true);
    setCurrent(true);
    setScoped(true);
    setInterpretable(true);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '380px 1fr',
        gap: '20px',
        height: '100%',
        alignItems: 'stretch',
      }}
    >
      {/* Controls Column */}
      <div
        className="card-base"
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.15rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
              Controle das 4 Propriedades
            </h3>
            <button
              onClick={resetAll}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#0369A1',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem',
                fontWeight: 600,
              }}
            >
              <RefreshCw size={14} /> Restaurar
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Toggle 1: Autoritativo */}
            <div
              onClick={() => setAuthoritative(!authoritative)}
              style={{
                padding: '12px 14px',
                borderRadius: '8px',
                border: authoritative ? '2px solid var(--infnet-dark-blue)' : '1px solid #CBD5E1',
                background: authoritative ? '#EFF6FF' : '#F8FAFC',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={20} color={authoritative ? 'var(--infnet-dark-blue)' : '#94A3B8'} />
                <div>
                  <strong style={{ fontSize: '0.85rem', color: authoritative ? 'var(--infnet-dark-blue)' : '#475569' }}>
                    Autoritativo
                  </strong>
                  <span style={{ fontSize: '0.72rem', color: '#64748B', display: 'block' }}>
                    {authoritative ? 'ERP Homologado' : 'Fórum Informal'}
                  </span>
                </div>
              </div>
              <span className={`kbd-badge ${authoritative ? 'active' : ''}`} style={{ background: authoritative ? 'var(--infnet-dark-blue)' : '#E2E8F0', color: authoritative ? '#FFFFFF' : '#64748B' }}>
                {authoritative ? 'ON' : 'OFF'}
              </span>
            </div>

            {/* Toggle 2: Atual */}
            <div
              onClick={() => setCurrent(!current)}
              style={{
                padding: '12px 14px',
                borderRadius: '8px',
                border: current ? '2px solid var(--infnet-cyan)' : '1px solid #CBD5E1',
                background: current ? '#EFF6FF' : '#F8FAFC',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Calendar size={20} color={current ? 'var(--infnet-cyan)' : '#94A3B8'} />
                <div>
                  <strong style={{ fontSize: '0.85rem', color: current ? 'var(--infnet-dark-blue)' : '#475569' }}>
                    Atual (Vigente)
                  </strong>
                  <span style={{ fontSize: '0.72rem', color: '#64748B', display: 'block' }}>
                    {current ? 'Versão Q3-2026' : 'Diretriz 2023'}
                  </span>
                </div>
              </div>
              <span className={`kbd-badge ${current ? 'active' : ''}`} style={{ background: current ? 'var(--infnet-cyan)' : '#E2E8F0', color: current ? '#FFFFFF' : '#64748B' }}>
                {current ? 'ON' : 'OFF'}
              </span>
            </div>

            {/* Toggle 3: Delimitado */}
            <div
              onClick={() => setScoped(!scoped)}
              style={{
                padding: '12px 14px',
                borderRadius: '8px',
                border: scoped ? '2px solid var(--infnet-purple)' : '1px solid #CBD5E1',
                background: scoped ? '#EFF6FF' : '#F8FAFC',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Filter size={20} color={scoped ? 'var(--infnet-purple)' : '#94A3B8'} />
                <div>
                  <strong style={{ fontSize: '0.85rem', color: scoped ? 'var(--infnet-dark-blue)' : '#475569' }}>
                    Delimitado (Scoped)
                  </strong>
                  <span style={{ fontSize: '0.72rem', color: '#64748B', display: 'block' }}>
                    {scoped ? 'Trechos Cirúrgicos' : '50 Páginas Ruído'}
                  </span>
                </div>
              </div>
              <span className={`kbd-badge ${scoped ? 'active' : ''}`} style={{ background: scoped ? 'var(--infnet-purple)' : '#E2E8F0', color: scoped ? '#FFFFFF' : '#64748B' }}>
                {scoped ? 'ON' : 'OFF'}
              </span>
            </div>

            {/* Toggle 4: Interpretável */}
            <div
              onClick={() => setInterpretable(!interpretable)}
              style={{
                padding: '12px 14px',
                borderRadius: '8px',
                border: interpretable ? '2px solid var(--infnet-green-accent)' : '1px solid #CBD5E1',
                background: interpretable ? '#EFF6FF' : '#F8FAFC',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FileCode2 size={20} color={interpretable ? 'var(--infnet-green-accent)' : '#94A3B8'} />
                <div>
                  <strong style={{ fontSize: '0.85rem', color: interpretable ? 'var(--infnet-dark-blue)' : '#475569' }}>
                    Interpretável
                  </strong>
                  <span style={{ fontSize: '0.72rem', color: '#64748B', display: 'block' }}>
                    {interpretable ? 'Glossário Mapeado' : 'Siglas Ambíguas'}
                  </span>
                </div>
              </div>
              <span className={`kbd-badge ${interpretable ? 'active' : ''}`} style={{ background: interpretable ? 'var(--infnet-green-accent)' : '#E2E8F0', color: interpretable ? '#FFFFFF' : '#64748B' }}>
                {interpretable ? 'ON' : 'OFF'}
              </span>
            </div>
          </div>
        </div>

        {/* Meters */}
        <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '6px' }}>
            <span style={{ fontWeight: 700, color: 'var(--infnet-dark-blue)' }}>Fidelidade Operacional:</span>
            <strong style={{ fontFamily: 'var(--font-mono)', color: fidelity > 70 ? '#166534' : '#C2410C' }}>
              {fidelity}%
            </strong>
          </div>
          <div style={{ height: '8px', background: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${fidelity}%`,
                height: '100%',
                background: fidelity > 70 ? 'var(--infnet-green-accent)' : 'var(--infnet-orange)',
                transition: 'width 0.25s ease',
              }}
            />
          </div>
        </div>
      </div>

      {/* Live Output Inspector Column */}
      <div
        className="card-base"
        style={{
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#0369A1',
              fontWeight: 800,
              background: '#EDF5FA',
              padding: '3px 10px',
              borderRadius: '6px',
            }}
          >
            INSPEÇÃO VISUAL DE SAÍDA DO AGENTE
          </span>
          <span className="badge-pill" style={{ background: activeCount === 4 ? '#DCFCE7' : '#FEE2E2', color: activeCount === 4 ? '#166534' : '#991B1B' }}>
            {activeCount === 4 ? 'Status: 100% Homologado' : `Risco de Alucinação: ${hallucinationRisk}%`}
          </span>
        </div>

        {/* Terminal Window with Color Tokens */}
        <div
          style={{
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '10px',
            padding: '16px',
            flex: 1,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            lineHeight: 1.6,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {activeCount === 4 ? (
            <div>
              <div style={{ color: '#166534', fontWeight: 700, marginBottom: '10px' }}>
                [ARTEFATO HOMOLOGADO • FONTE: ERP v3.2 / ATA OFICIAL]
              </div>
              <p style={{ color: '#1E293B' }}>
                1. Decisão: Expansão de cluster aprovada em 15% (Ref: Ata 42/26, pág. 4)
              </p>
              <p style={{ color: '#1E293B' }}>
                2. Responsável: Roberto Silva (DevOps) | Prazo: 30/Nov/2026
              </p>
              <p style={{ color: '#1E293B' }}>
                3. Teto Orçamentário: R$ 45.000/mês mantido conforme Diretriz Q3
              </p>
              <p style={{ color: '#0369A1', fontWeight: 600 }}>
                4. Informações Omissas: "Provedor secundário: Não especificado"
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ color: '#991B1B', fontWeight: 700 }}>
                [ALERTA DE DEGRADAÇÃO DE CONTEXTO]
              </div>
              {!authoritative && (
                <div style={{ padding: '6px 10px', background: '#FEF2F2', borderRadius: '4px', color: '#991B1B' }}>
                  ✖ Falha de Origem: Dados informais de fóruns injetados como decisão oficial.
                </div>
              )}
              {!current && (
                <div style={{ padding: '6px 10px', background: '#FFF7ED', borderRadius: '4px', color: '#9A3412' }}>
                  ✖ Falha de Vigência: Teto obsoleto de 2023 (R$ 30.000) adotado pelo modelo.
                </div>
              )}
              {!scoped && (
                <div style={{ padding: '6px 10px', background: '#FFF7ED', borderRadius: '4px', color: '#9A3412' }}>
                  ✖ Sobrecarga de Ruído: Propostas rejeitadas fundidas no texto final.
                </div>
              )}
              {!interpretable && (
                <div style={{ padding: '6px 10px', background: '#FEF2F2', borderRadius: '4px', color: '#991B1B' }}>
                  ✖ Ambiguidade Semântica: Sigla interna inferida com significado incorreto.
                </div>
              )}
            </div>
          )}
        </div>

        <div
          style={{
            marginTop: '12px',
            padding: '8px 16px',
            background: '#EDF5FA',
            borderRadius: '6px',
            fontSize: '0.75rem',
            color: 'var(--infnet-dark-blue)',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>Regra de Engenharia: Contexto selecionado e auditável &gt; Volume bruto de arquivos</span>
          <CheckCircle size={16} color="var(--infnet-cyan)" />
        </div>
      </div>
    </div>
  );
}
