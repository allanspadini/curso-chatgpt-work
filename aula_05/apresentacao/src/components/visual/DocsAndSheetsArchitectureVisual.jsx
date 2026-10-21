import React, { useState } from 'react';
import { FileText, Table, Play, RotateCcw, ShieldCheck } from 'lucide-react';

export default function DocsAndSheetsArchitectureVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Documentos: Estrutura antes do Polimento', caption: 'Arquitetura de conteúdo, separação Fato vs Recomendação e Edição em Camada' },
    { label: '2. Planilhas: Lógica Inspecionável', caption: 'Modelo executável: separar Dados Brutos, Premissas, Cálculos e Apresentação' },
    { label: '3. Falsa Precisão & Auditoria', caption: 'Evitar pesos arbitrários, preservar dados faltantes e revisar fórmulas/gráficos' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Header */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '12px',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              background: '#0A345D',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            CAPÍTULO 9 • DOCUMENTOS & PLANILHAS
          </span>
          <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.92rem' }}>
            {steps[step].caption}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setStep(idx)}
              style={{
                padding: '5px 11px',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: idx === step ? '2px solid #0284C7' : '1px solid #CBD5E1',
                background: idx <= step ? '#EFF6FF' : '#FFFFFF',
                color: idx <= step ? '#0369A1' : '#64748B',
              }}
            >
              {s.label}
            </button>
          ))}
          <button
            onClick={() => setStep((prev) => (prev < 2 ? prev + 1 : 0))}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '5px 12px',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer',
              border: '1px solid #0A345D',
              background: '#0A345D',
              color: '#FFFFFF',
            }}
          >
            {step < 2 ? <Play size={13} /> : <RotateCcw size={13} />}
            {step < 2 ? 'Próximo Passo' : 'Reiniciar'}
          </button>
        </div>
      </div>

      {/* Main 3-Column Progressive Cards */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
        {/* Col 1: Documents */}
        <div
          style={{
            opacity: step >= 0 ? 1 : 0.25,
            transition: 'opacity 0.3s',
            background: '#FFFFFF',
            border: '2px solid #0284C7',
            borderRadius: '14px',
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '8px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={18} color="#0284C7" />
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0369A1', fontFamily: 'var(--font-mono)' }}>
                1. DOCUMENTOS (STRUCTURE FIRST)
              </div>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0A345D' }}>
                Arquitetura de Conteúdo & Camadas
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#0A345D' }}>Esqueleto por Tipo de Decisão</div>
              <div style={{ fontSize: '0.73rem', color: '#334155', marginTop: '2px' }}>
                • <strong>Decision Brief:</strong> Situação ➔ Evidência ➔ Opções ➔ Riscos ➔ Recomendação ➔ Próximos Passos.<br />
                • <strong>SOP (Procedimento):</strong> Propósito ➔ Escopo ➔ Pré-requisitos ➔ Passos ➔ Exceções ➔ Controles ➔ Dono.
              </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#0A345D' }}>Tripla Distinção Epistêmica</div>
              <div style={{ fontSize: '0.73rem', color: '#334155', marginTop: '2px' }}>
                Separar explicitamente: <strong>(1) Fatos Citados</strong> vs. <strong>(2) Achados Derivados</strong> vs. <strong>(3) Recomendações</strong> (com links/notas).
              </div>
            </div>

            <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.77rem', color: '#991B1B' }}>Permissão de Edição por Camada</div>
              <div style={{ fontSize: '0.72rem', color: '#7F1D1D', marginTop: '2px' }}>
                ✗ <em>"Melhore esta política"</em> (perigoso)<br />
                ✓ <em>"Reescreva em linguagem simples sem alterar requisitos, definições, exceções ou numeração."</em>
              </div>
            </div>
          </div>
        </div>

        {/* Col 2: Spreadsheets */}
        <div
          style={{
            opacity: step >= 1 ? 1 : 0.22,
            transition: 'opacity 0.35s',
            background: '#FFFFFF',
            border: '2px solid #16A34A',
            borderRadius: '14px',
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '8px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Table size={18} color="#166534" />
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#166534', fontFamily: 'var(--font-mono)' }}>
                2. PLANILHAS (EXECUTABLE MODEL)
              </div>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0A345D' }}>
                Separação em 4 Abas / Camadas
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            {[
              { tab: 'Aba 1: Dados Brutos (Raw Data)', desc: 'Intocada! Preserva a exportação original para auditoria.', bg: '#F8FAFC', border: '#CBD5E1' },
              { tab: 'Aba 2: Premissas (Assumptions)', desc: 'Parâmetros, taxas, pesos, unidades e convenções de data.', bg: '#EFF6FF', border: '#93C5FD' },
              { tab: 'Aba 3: Cálculos (Calculations)', desc: 'Fórmulas explícitas, validações e reconciliações.', bg: '#FFF7ED', border: '#FDBA74' },
              { tab: 'Aba 4: Apresentação (Outputs)', desc: 'Tabelas-resumo e gráficos limpos para decisão.', bg: '#F0FDF4', border: '#86EFAC' },
            ].map((t, idx) => (
              <div key={idx} style={{ background: t.bg, border: `1px solid ${t.border}`, borderRadius: '8px', padding: '7px 10px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#0A345D' }}>{t.tab}</div>
                <div style={{ fontSize: '0.72rem', color: '#334155' }}>{t.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: '0.73rem', color: '#166534', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
            ✓ Definir colunas, unidades, datas e notas de lógica
          </div>
        </div>

        {/* Col 3: False Precision & Formula Audit */}
        <div
          style={{
            opacity: step >= 2 ? 1 : 0.22,
            transition: 'opacity 0.35s',
            background: '#FFFFFF',
            border: '2px solid #EA580C',
            borderRadius: '14px',
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '8px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} color="#C2410C" />
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#C2410C', fontFamily: 'var(--font-mono)' }}>
                3. AUDITORIA DE MODELO & GRÁFICOS
              </div>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0A345D' }}>
                Contra a Falsa Precisão
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#9A3412' }}>Armadilha do Score Ponderado</div>
              <div style={{ fontSize: '0.72rem', color: '#334155', marginTop: '2px' }}>
                Pesos arbitrários criam <strong>falsa precisão</strong>. Exija que o agente preserve dados faltantes como faltantes (sem zerar!) e mostre sensibilidade.
              </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#0A345D' }}>Revisão Independente de Fórmulas</div>
              <div style={{ fontSize: '0.72rem', color: '#334155', marginTop: '2px' }}>
                • Testar casos de fronteira (boundary cases)<br />
                • Confirmar totais e referências de célula<br />
                • Calcular uma amostra manualmente
              </div>
            </div>

            <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#0369A1' }}>Superfícies Suportadas</div>
              <div style={{ fontSize: '0.72rem', color: '#334155', marginTop: '2px' }}>
                Criação/edição de arquivos ou controle direto de pasta Excel aberta / Google Workspace. <strong>Confirme sempre no arquivo final!</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
          <strong>Síntese Técnica (Cap. 9):</strong> Documentos exigem <em>arquitetura antes do polimento</em>; planilhas exigem <em>lógica inspecionável</em> separada dos dados brutos.
        </span>
        <span style={{ fontSize: '0.76rem', color: '#0284C7', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
          FOCO RUBRICA 3.3
        </span>
      </div>
    </div>
  );
}
