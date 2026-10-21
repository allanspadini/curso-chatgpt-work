import React, { useState } from 'react';
import { Play, RotateCcw, Database, FileSpreadsheet, ShieldCheck } from 'lucide-react';

export default function DataWorkflowCleaningVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Os 4 Estágios Confiáveis', caption: 'Começar pela decisão (não pelo gráfico!): Profile & Clean ➔ Join & Analyze ➔ Communicate ➔ Maintain' },
    { label: '2. Proteger Fonte & Grão (Grain)', caption: 'Nunca sobrescrever o arquivo bruto! Inventariar origem, período e o que 1 linha representa' },
    { label: '3. Limpeza Sistemática em Cópia', caption: '6 regras determinísticas + Data-Quality Note com contagens antes/depois' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Top Bar */}
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
              background: '#C2410C',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            CAPÍTULO 11 • WORKFLOWS DE DADOS (RUBRICA 3.5)
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

      {/* Main SVG Diagram */}
      <div
        style={{
          flex: 1,
          background: '#FFFFFF',
          border: '2px solid #D0E3F0',
          borderRadius: '14px',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <svg viewBox="0 0 1180 390" style={{ width: '100%', height: '100%', maxHeight: '390px' }}>
          <defs>
            <marker id="arrow-data" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0A345D" />
            </marker>
          </defs>

          {/* STEP 1: The 4 Stages of a Dependable Data Workflow */}
          <g style={{ opacity: 1, transition: 'opacity 0.3s' }}>
            <text x="25" y="26" fill="#0A345D" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
              1. OS 4 ESTÁGIOS DE UM FLUXO DE DADOS CONFIÁVEL (COMECE PELA DECISÃO, NÃO PELO GRÁFICO):
            </text>
            {[
              { x: 25, t: '1. PROFILE & CLEAN', d: 'Entender fontes e limpar em cópia separada', bg: '#EFF6FF', b: '#0284C7', c: '#0369A1' },
              { x: 315, t: '2. JOIN & ANALYZE', d: 'Validar chaves, testar premissas e explorar', bg: '#FFF7ED', b: '#EA580C', c: '#9A3412' },
              { x: 605, t: '3. COMMUNICATE', d: 'Resposta primeiro + cálculos e linhagem', bg: '#FAF5FF', b: '#7E22CE', c: '#6B21A8' },
              { x: 895, t: '4. MAINTAIN', d: 'Atualizar com limiar e aprovação de acesso', bg: '#F0FDF4', b: '#16A34A', c: '#166534' },
            ].map((s, i) => (
              <g key={i}>
                <rect x={s.x} y="38" width="260" height="64" rx="10" fill={s.bg} stroke={s.b} strokeWidth="2" />
                <text x={s.x + 130} y="62" textAnchor="middle" fill={s.c} fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
                  {s.t}
                </text>
                <text x={s.x + 130} y="84" textAnchor="middle" fill="#1E293B" fontSize="11" fontWeight="600">
                  {s.d}
                </text>
                {i < 3 && (
                  <path d={`M ${s.x + 264} 70 L ${s.x + 286} 70`} stroke="#0A345D" strokeWidth="2.5" markerEnd="url(#arrow-data)" />
                )}
              </g>
            ))}
          </g>

          {/* STEP 2: Protect Raw Source & Define Table Grain (Left Bottom) */}
          <g style={{ opacity: step >= 1 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="25" y="122" width="545" height="250" rx="14" fill="#F8FAFC" stroke="#0284C7" strokeWidth="2" />
            <rect x="45" y="136" width="505" height="28" rx="6" fill="#0A345D" />
            <text x="297" y="155" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              2. PROTEÇÃO DA FONTE BRUTA & INVENTÁRIO DE GRÃO (GRAIN)
            </text>

            <rect x="45" y="174" width="505" height="54" rx="8" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5" />
            <text x="60" y="195" fill="#991B1B" fontSize="12" fontWeight="800">
              Regra de Ouro: NUNCA sobrescrever a única cópia de uma exportação!
            </text>
            <text x="60" y="214" fill="#7F1D1D" fontSize="11">
              Manter entradas brutas intocadas; gravar dados limpos, unidos e derivados separadamente.
            </text>

            <rect x="45" y="238" width="505" height="62" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <text x="60" y="258" fill="#0A345D" fontSize="12" fontWeight="800">
              O Que é o Grão da Tabela (Apparent Grain)?
            </text>
            <text x="60" y="276" fill="#334155" fontSize="11">
              Define o que 1 linha representa: 1 cliente, 1 pedido, 1 saldo mensal ou 1 evento.
            </text>
            <text x="60" y="292" fill="#C2410C" fontSize="10.8" fontWeight="700">
              ⚠️ Unir tabelas com nomes de coluna iguais mas grãos diferentes multiplica linhas e infla somas!
            </text>

            <rect x="45" y="308" width="505" height="50" rx="8" fill="#EFF6FF" stroke="#BAE6FD" strokeWidth="1.5" />
            <text x="297" y="328" textAnchor="middle" fill="#0369A1" fontSize="11.5" fontWeight="800">
              Inventário Pré-Análise: Origem, Período, Formato, Linhas/Colunas, IDs, Missing, Duplicatas e Linhas de Total
            </text>
            <text x="297" y="346" textAnchor="middle" fill="#1E293B" fontSize="10.5">
              Se o agente não souber explicar o que a fonte representa, não deve construir um modelo em silêncio!
            </text>
          </g>

          {/* STEP 3: Systematic Cleaning on a Copy + Data-Quality Note (Right Bottom) */}
          <g style={{ opacity: step >= 2 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="595" y="122" width="560" height="250" rx="14" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
            <rect x="615" y="136" width="520" height="28" rx="6" fill="#166534" />
            <text x="875" y="155" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              3. AS 6 REGRAS DE LIMPEZA SISTEMÁTICA + DATA-QUALITY NOTE
            </text>

            {[
              '1. Datas: Normalizar datas válidas (YYYY-MM-DD) e sinalizar datas ambíguas',
              '2. Moedas e Vazios: Converter strings ("$1,250") em número SEM trocar vazio genuíno por zero!',
              '3. Duplicatas: Remover duplicatas exatas/confirmadas preservando source row_id',
              '4. Aliases de Categoria/Região: Mapear aliases conhecidos (NA ➔ North America) e listar não mapeados',
              '5. Linhas de Resumo (TOTAL): Mover ou excluir linhas coladas que violam o grão da tabela',
              '6. Valores Incertos: Deixar inalterados ou em branco em vez de inventar correção',
            ].map((rule, idx) => {
              const y = 172 + idx * 25;
              return (
                <text key={idx} x="625" y={y + 14} fill="#1E293B" fontSize="11.2" fontWeight="700">
                  ✓ {rule}
                </text>
              );
            })}

            <rect x="615" y="324" width="520" height="36" rx="8" fill="#FFFFFF" stroke="#16A34A" strokeWidth="1.5" />
            <text x="875" y="346" textAnchor="middle" fill="#166534" fontSize="11.5" fontWeight="800" fontFamily="var(--font-mono)">
              SAÍDA OBRIGATÓRIA: Arquivo Limpo + Data-Quality Note (Contagens Antes/Depois & Regras)
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Strip */}
      <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '10px', padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.8rem', color: '#9A3412', fontWeight: 700 }}>
          <strong>Erro Clássico em Dados:</strong> Converter célula de receita vazia (blank) em <code>0</code> distorce médias e esconde falhas de exportação!
        </span>
        <span style={{ fontSize: '0.75rem', color: '#C2410C', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
          PRESERVE BLANK AS BLANK
        </span>
      </div>
    </div>
  );
}
