import React, { useState } from 'react';
import { Play, RotateCcw, GitMerge, LineChart, FileCheck2 } from 'lucide-react';

export default function JoinsExplorationReportVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Validar Joins Antes de Unir', caption: 'Testar unicidade, trial joins e quantificar registros sem match (unmatched)' },
    { label: '2. Explorar Antes de Modelar', caption: 'Gráficos diagnósticos, Associação ≠ Causalidade e checagens de sensibilidade' },
    { label: '3. Relatório Fundamentado (9 Itens)', caption: 'Resposta no topo, ressalvas visíveis, linhagem de dados e escolha do formato' },
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
            CAPÍTULO 11 • JOINS, EXPLORAÇÃO E RELATÓRIOS (RUBRICA 3.5)
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

      {/* Main 3-Column Progressive Layout */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
        {/* Col 1: Validate Joins */}
        <div
          style={{
            opacity: step >= 0 ? 1 : 0.25,
            transition: 'opacity 0.3s',
            background: '#FFFFFF',
            border: '2px solid #0284C7',
            borderRadius: '14px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '8px', padding: '7px 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GitMerge size={18} color="#0284C7" />
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0369A1', fontFamily: 'var(--font-mono)' }}>
                1. VALIDATE JOINS BEFORE MERGING
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0A345D' }}>
                Protocolo de Chaves em 6 Passos
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {[
              '1. Testar unicidade da chave candidata em cada fonte (evitar N:M)',
              '2. Medir taxa de nulos e diferenças de formatação/caixa',
              '3. Normalizar casing/espaços em campo derivado (preservando original)',
              '4. Rodar Trial Joins: reportar matched, unmatched e multiply matched',
              '5. Comparar contagem de linhas e totais financeiros antes e depois',
              '6. Quantificar contagem e valor dos registros Unmatched (fazem parte da análise!)',
            ].map((item, idx) => (
              <div key={idx} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '5px 8px', fontSize: '0.72rem', color: '#1E293B', fontWeight: 600 }}>
                {item}
              </div>
            ))}
          </div>

          <div style={{ fontSize: '0.72rem', color: '#991B1B', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
            ✗ Proibido inventar ID faltante para forçar match!
          </div>
        </div>

        {/* Col 2: Explore Before Modeling */}
        <div
          style={{
            opacity: step >= 1 ? 1 : 0.22,
            transition: 'opacity 0.35s',
            background: '#FFFFFF',
            border: '2px solid #7E22CE',
            borderRadius: '14px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#FAF5FF', border: '1px solid #D8B4FE', borderRadius: '8px', padding: '7px 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LineChart size={18} color="#7E22CE" />
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#7E22CE', fontFamily: 'var(--font-mono)' }}>
                2. EXPLORE BEFORE MODELING
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0A345D' }}>
                Diagnóstico, Causalidade & Sensibilidade
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.76rem', color: '#0A345D' }}>Gráficos São Ferramentas de Diagnóstico</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                Inspecionar distribuições, outliers, cobertura temporal e padrões de missing antes de comunicar. Gráficos decorativos inflam confiança sem gerar entendimento.
              </div>
            </div>

            <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.76rem', color: '#9A3412' }}>Associação ≠ Causalidade</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                Ex.: Valor de imóveis perto de rodovias reflete também bairro, tamanho, época de venda e seleção. Declarar o que a análise estima e quais fatores omitidos podem mudar a conclusão.
              </div>
            </div>

            <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.76rem', color: '#0369A1' }}>Checagens de Sensibilidade</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                Remover outlier influente, variar limiar de distância, testar regras alternativas de match e rodar com/sem registros incertos.
              </div>
            </div>
          </div>
        </div>

        {/* Col 3: Source-Backed Report */}
        <div
          style={{
            opacity: step >= 2 ? 1 : 0.22,
            transition: 'opacity 0.35s',
            background: '#FFFFFF',
            border: '2px solid #16A34A',
            borderRadius: '14px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '8px', padding: '7px 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileCheck2 size={18} color="#166534" />
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#166534', fontFamily: 'var(--font-mono)' }}>
                3. PACKAGE A SOURCE-BACKED REPORT
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0A345D' }}>
                Os 9 Elementos + Adequação ao Consumidor
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '8px', padding: '7px 10px', fontSize: '0.71rem', color: '#1E293B', lineHeight: 1.4 }}>
              <strong>1.</strong> Pergunta e resposta concisa no topo • <strong>2.</strong> Fontes, período e unidade de análise • <strong>3.</strong> Checagens de limpeza e join • <strong>4.</strong> Gráficos/tabelas úteis • <strong>5.</strong> Método e cálculos • <strong>6.</strong> Premissas e limitações (nunca esconder no apêndice!) • <strong>7.</strong> Registros excluídos/unmatched • <strong>8.</strong> Decisão recomendada • <strong>9.</strong> Links/nomes dos arquivos criados.
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '7px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.75rem', color: '#0A345D' }}>Artefato Certo para Cada Consumidor</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                • <strong>Técnicos:</strong> Markdown + Notebook<br />
                • <strong>Operações:</strong> Planilha limpa / CSV<br />
                • <strong>Decisores:</strong> Documento conciso / PDF<br />
                • <strong>Pergunta Recorrente:</strong> Dashboard privado (Sites)
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.72rem', color: '#166534', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
            ✓ Dicionário de dados + tabela de cálculo = Confiança
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
          <strong>Regra Editorial de Dados (Cap. 11):</strong> Nunca esconda ressalvas (caveats) em um apêndice quando elas puderem alterar a decisão!
        </span>
      </div>
    </div>
  );
}
