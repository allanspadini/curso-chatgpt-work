import React, { useState } from 'react';
import { Database, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

const RAW_ROWS = [
  { row_id: '1', date: '08/01/2026', customer: 'Acme', region: 'North America', category: 'Enterprise', revenue: '"$1,250.00"', issue: 'Data MM/DD/YYYY + Moeda texto' },
  { row_id: '2', date: '2026-08-02', customer: 'Bright Co', region: 'NA', category: 'enterprise', revenue: '"$900"', issue: 'Alias NA + casing enterprise' },
  { row_id: '3', date: '08/03/2026', customer: 'Cascade', region: 'Europe', category: 'Mid Market', revenue: '(blank)', issue: 'Receita vazia genuína (não zerar!)' },
  { row_id: '3', date: '08/03/2026', customer: 'Cascade', region: 'EU', category: 'Mid-market', revenue: '(blank)', issue: 'Duplicata de row_id=3 com alias' },
  { row_id: '4', date: '2026-08-04', customer: 'Delta', region: 'EMEA', category: 'SMB', revenue: '"$475.50"', issue: 'Alias ambíguo EMEA (Europa ou oriente médio?)' },
  { row_id: 'TOTAL', date: '', customer: '', region: '', category: '', revenue: '"$2,625.50"', issue: 'Linha de resumo colada (viola o grão!)' },
];

const CLEAN_ROWS = [
  { row_id: '1', date: '2026-08-01', customer: 'Acme', region: 'North America', category: 'Enterprise', revenue: '1250.00', status: 'Normalizado' },
  { row_id: '2', date: '2026-08-02', customer: 'Bright Co', region: 'North America', category: 'Enterprise', revenue: '900.00', status: 'Alias NA/Enterprise mapeado' },
  { row_id: '3', date: '2026-08-03', customer: 'Cascade', region: 'Europe', category: 'Mid-Market', revenue: 'NULL (Blank)', status: '1 registro mantido; Blank preservado' },
  { row_id: '4', date: '2026-08-04', customer: 'Delta', region: 'EMEA (Unmapped Flag)', category: 'SMB', revenue: '475.50', status: 'EMEA sinalizado sem adivinhar' },
];

export default function MessyExportCleanerSimulator() {
  const [viewMode, setViewMode] = useState('raw'); // 'raw' | 'clean' | 'note'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '10px', justifyContent: 'space-between' }}>
      {/* Top Bar */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '12px',
          padding: '8px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              background: '#C2410C',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.74rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            SIMULADOR INTERATIVO 3 • PRÁTICA CAPÍTULO 11 (RUBRICA 3.5)
          </span>
          <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.92rem' }}>
            Laboratório de Limpeza em Cópia Separada e Reconciliação Contábil
          </span>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          {[
            { id: 'raw', label: '1. Exportação Bruta (6 linhas - Intocada)' },
            { id: 'clean', label: '2. Cópia Limpa (4 registros únicos)' },
            { id: 'note', label: '3. Data-Quality Note & Reconciliação' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setViewMode(tab.id)}
              style={{
                padding: '5px 12px',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 800,
                cursor: 'pointer',
                background: viewMode === tab.id ? '#0A345D' : '#FFFFFF',
                color: viewMode === tab.id ? '#FFFFFF' : '#0A345D',
                border: '1.5px solid #0A345D',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          background: '#FFFFFF',
          border: '2px solid #D0E3F0',
          borderRadius: '14px',
          padding: '14px 18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        {viewMode === 'raw' && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#991B1B' }}>
                Arquivo Original Anexado (`raw_export.csv`) — Preservado Intacto (Somente Leitura)
              </span>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#991B1B', background: '#FEF2F2', border: '1px solid #FCA5A5', padding: '3px 10px', borderRadius: '12px', fontFamily: 'var(--font-mono)' }}>
                6 LINHAS BRUTAS • 5 PROBLEMAS ESTRUTURAIS
              </span>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem' }}>
              <thead>
                <tr style={{ background: '#F1F5F9', color: '#0A345D', textAlign: 'left' }}>
                  <th style={{ padding: '7px 10px', border: '1px solid #CBD5E1' }}>row_id</th>
                  <th style={{ padding: '7px 10px', border: '1px solid #CBD5E1' }}>date</th>
                  <th style={{ padding: '7px 10px', border: '1px solid #CBD5E1' }}>customer</th>
                  <th style={{ padding: '7px 10px', border: '1px solid #CBD5E1' }}>region</th>
                  <th style={{ padding: '7px 10px', border: '1px solid #CBD5E1' }}>category</th>
                  <th style={{ padding: '7px 10px', border: '1px solid #CBD5E1' }}>revenue</th>
                  <th style={{ padding: '7px 10px', border: '1px solid #CBD5E1' }}>Diagnóstico do Perfilamento</th>
                </tr>
              </thead>
              <tbody>
                {RAW_ROWS.map((r, i) => (
                  <tr key={i} style={{ background: r.row_id === 'TOTAL' ? '#FEF2F2' : i % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                    <td style={{ padding: '6px 10px', border: '1px solid #CBD5E1', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>{r.row_id}</td>
                    <td style={{ padding: '6px 10px', border: '1px solid #CBD5E1', fontFamily: 'var(--font-mono)' }}>{r.date}</td>
                    <td style={{ padding: '6px 10px', border: '1px solid #CBD5E1', fontWeight: 700 }}>{r.customer}</td>
                    <td style={{ padding: '6px 10px', border: '1px solid #CBD5E1' }}>{r.region}</td>
                    <td style={{ padding: '6px 10px', border: '1px solid #CBD5E1' }}>{r.category}</td>
                    <td style={{ padding: '6px 10px', border: '1px solid #CBD5E1', fontFamily: 'var(--font-mono)', color: r.revenue === '(blank)' ? '#C2410C' : '#0A345D', fontWeight: 700 }}>{r.revenue}</td>
                    <td style={{ padding: '6px 10px', border: '1px solid #CBD5E1', color: '#991B1B', fontWeight: 700, fontSize: '0.73rem' }}>{r.issue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {viewMode === 'clean' && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#166534' }}>
                Cópia Limpa Gerada (`cleaned_export.csv`) — Grão Homogêneo (1 Linha = 1 Registro de Cliente)
              </span>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#166534', background: '#F0FDF4', border: '1px solid #86EFAC', padding: '3px 10px', borderRadius: '12px', fontFamily: 'var(--font-mono)' }}>
                4 REGISTROS ÚNICOS • 1 BLANK PRESERVADO • TOTAL EXCLUÍDO
              </span>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.79rem' }}>
              <thead>
                <tr style={{ background: '#DCFCE7', color: '#166534', textAlign: 'left' }}>
                  <th style={{ padding: '8px 10px', border: '1px solid #86EFAC' }}>row_id</th>
                  <th style={{ padding: '8px 10px', border: '1px solid #86EFAC' }}>date (ISO)</th>
                  <th style={{ padding: '8px 10px', border: '1px solid #86EFAC' }}>customer</th>
                  <th style={{ padding: '8px 10px', border: '1px solid #86EFAC' }}>region_clean</th>
                  <th style={{ padding: '8px 10px', border: '1px solid #86EFAC' }}>category_clean</th>
                  <th style={{ padding: '8px 10px', border: '1px solid #86EFAC' }}>revenue_num</th>
                  <th style={{ padding: '8px 10px', border: '1px solid #86EFAC' }}>Regra Aplicada (Auditoria)</th>
                </tr>
              </thead>
              <tbody>
                {CLEAN_ROWS.map((r, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                    <td style={{ padding: '8px 10px', border: '1px solid #CBD5E1', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>{r.row_id}</td>
                    <td style={{ padding: '8px 10px', border: '1px solid #CBD5E1', fontFamily: 'var(--font-mono)' }}>{r.date}</td>
                    <td style={{ padding: '8px 10px', border: '1px solid #CBD5E1', fontWeight: 700 }}>{r.customer}</td>
                    <td style={{ padding: '8px 10px', border: '1px solid #CBD5E1', fontWeight: 700, color: r.region.includes('Unmapped') ? '#C2410C' : '#0A345D' }}>{r.region}</td>
                    <td style={{ padding: '8px 10px', border: '1px solid #CBD5E1' }}>{r.category}</td>
                    <td style={{ padding: '8px 10px', border: '1px solid #CBD5E1', fontFamily: 'var(--font-mono)', fontWeight: 800, color: r.revenue.includes('NULL') ? '#C2410C' : '#166534' }}>{r.revenue}</td>
                    <td style={{ padding: '8px 10px', border: '1px solid #CBD5E1', color: '#0369A1', fontWeight: 700, fontSize: '0.74rem' }}>{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {viewMode === 'note' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', height: '100%' }}>
            <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '12px', padding: '12px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 800, fontSize: '0.86rem', color: '#0A345D' }}>
                📋 Data-Quality Note (Contagens Antes vs. Depois)
              </div>
              <div style={{ fontSize: '0.76rem', color: '#1E293B', lineHeight: 1.45 }}>
                • <strong>Linhas na Fonte Bruta:</strong> 6 linhas (sendo 5 registros e 1 linha resumo <code>TOTAL</code>).<br />
                • <strong>Linhas Removidas (2):</strong> 1 duplicata de <code>row_id=3</code> (Cascade) + 1 linha <code>TOTAL</code> separada para não violar o grão nem duplicar a soma.<br />
                • <strong>Mapeamentos Documentados:</strong> <code>NA ➔ North America</code>; <code>EU ➔ Europe</code>; <code>enterprise ➔ Enterprise</code>; <code>Mid Market / Mid-market ➔ Mid-Market</code>.<br />
                • <strong>Valores Não Resolvidos (2):</strong> Receita em branco de <code>Cascade (row_id=3)</code> mantida como <code>NULL</code> (sem inventar R$ 0,00); região <code>EMEA (row_id=4)</code> sinalizada como alias mais amplo que Europe.
              </div>
            </div>

            <div style={{ background: '#F0FDF4', border: '1.5px solid #86EFAC', borderRadius: '12px', padding: '12px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 800, fontSize: '0.86rem', color: '#166534' }}>
                🧮 Reconciliação de Receita (Source vs. Clean)
              </div>
              <div style={{ fontSize: '0.76rem', color: '#1E293B', lineHeight: 1.45 }}>
                • <strong>Soma dos Registros Válidos:</strong> <code>$1,250.00 + $900.00 + $475.50 = $2,625.50</code>.<br />
                • <strong>Valor na Linha TOTAL da Fonte:</strong> <code>$2,625.50</code>.<br />
                • <strong>Por que o Total da Fonte não fecha o caso?</strong> Apesar de <code>$2,625.50</code> bater aritmeticamente com os 3 registros preenchidos, o registro <code>row_id=3 (Cascade)</code> possui receita ausente (blank). Logo, o total real da carteira é <strong>$2,625.50 + [Receita Pendente da Cascade]</strong>!
              </div>
            </div>
          </div>
        )}

        {/* Prompt Reference Box */}
        <div style={{ background: '#EFF6FF', border: '1px solid #93C5FD', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={16} color="#0284C7" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: '0.74rem', color: '#0A345D', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
            Prompt Cap. 11: "Inspect the attached export and clean a separate copy. Keep the original unchanged... Convert valid revenue strings to numbers while preserving blank cells... Do not invent missing revenue."
          </span>
        </div>
      </div>
    </div>
  );
}
