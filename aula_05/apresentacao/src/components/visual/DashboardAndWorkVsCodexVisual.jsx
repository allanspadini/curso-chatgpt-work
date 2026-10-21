import React, { useState } from 'react';
import { Play, RotateCcw, LayoutDashboard, Code2, CheckSquare } from 'lucide-react';

export default function DashboardAndWorkVsCodexVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Dashboard Privado no Sites', caption: 'Modelo de informação orientado a decisões, variação absoluta vs. % e área de qualidade' },
    { label: '2. ChatGPT Work vs. Codex', caption: 'Quando usar síntese interativa de arquivos vs. pipeline técnico reprodutível em repositório' },
    { label: '3. Checklist de Revisão (12 Pontos)', caption: 'Auditoria completa da pergunta inicial até o controle de publicação e compartilhamento' },
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
              background: '#7E22CE',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            CAPÍTULO 11 • DASHBOARDS (SITES) & WORK VS. CODEX (RUBRICA 3.6)
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
        {/* Col 1: Private Dashboard on Sites */}
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
            <LayoutDashboard size={18} color="#0284C7" />
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0369A1', fontFamily: 'var(--font-mono)' }}>
                1. DASHBOARD PRIVADO (SITES) • RUBRICA 3.6
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0A345D' }}>
                Modelo de Informação & Atualização
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '7px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.76rem', color: '#0A345D' }}>Elementos do Dashboard Orientado a Decisão</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                Métricas claras, evolução no tempo, filtros de data/segmento, <strong>frescor da fonte (freshness)</strong>, cálculos de suporte e <strong>área visível de qualidade de dados</strong> (mostrando contagem e valor de unmatched!).
              </div>
            </div>

            <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '8px', padding: '7px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.76rem', color: '#9A3412' }}>Variação Absoluta ($) vs. Percentual (%)</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                Maior mudança absoluta = maior impacto financeiro; maior mudança % = segmento menor mais acelerado. <strong>Mostre ambos!</strong>
              </div>
            </div>

            <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '7px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.76rem', color: '#991B1B' }}>Quem Atualiza & Controle de Visibilidade</div>
              <div style={{ fontSize: '0.71rem', color: '#7F1D1D', marginTop: '2px' }}>
                • Uma <strong>Scheduled Task do Work</strong> (não o Site sozinho!) checa a fonte e atualiza com limiar de alerta.<br />
                • Manter Site privado! Publicar/compartilhar exige mostrar configuração atual, audiência proposta e link antes da aprovação.
              </div>
            </div>
          </div>
        </div>

        {/* Col 2: ChatGPT Work vs Codex */}
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
            <Code2 size={18} color="#7E22CE" />
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#7E22CE', fontFamily: 'var(--font-mono)' }}>
                2. FRONTEIRA ARQUITETURAL
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0A345D' }}>
                ChatGPT Work vs. Codex em Dados
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ background: '#EFF6FF', border: '1px solid #93C5FD', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.77rem', color: '#0369A1' }}>ChatGPT Work (Artefatos de Negócio)</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                Começa com arquivos anexados/conectados e termina em Doc, Sheet, Deck, Relatório ou Site. Ideal para inspeção interativa e síntese sem configurar ambiente de programação.
              </div>
            </div>

            <div style={{ background: '#FAF5FF', border: '1px solid #D8B4FE', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.77rem', color: '#7E22CE' }}>Codex (Projeto Técnico Reprodutível)</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                Múltiplos scripts reutilizáveis, gestão de dependências, testes automatizados, controle de versão (Git), notebooks reexecutáveis e worktrees isoladas.
              </div>
            </div>

            <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.77rem', color: '#166534' }}>Complementaridade com Fronteira Visível</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                Work enquadra a decisão e cria o artefato executivo; Codex implementa e testa o pipeline repetível. O relatório nunca se descola do código!
              </div>
            </div>
          </div>
        </div>

        {/* Col 3: 12-Point Data Workflow Review Checklist */}
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
            <CheckSquare size={18} color="#166534" />
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#166534', fontFamily: 'var(--font-mono)' }}>
                3. DATA-WORKFLOW REVIEW CHECKLIST
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0A345D' }}>
                Os 12 Pontos de Auditoria Final
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4px' }}>
            {[
              '1. Pergunta de decisão e audiência explícitas',
              '2. Fontes brutas intocadas (identificadas por origem e período)',
              '3. Grão da tabela, chaves, missing, duplicatas e ranges inspecionados',
              '4. Regras de limpeza e casos não resolvidos documentados',
              '5. Joins reportam taxas de match, duplicatas e excluídos',
              '6. Totais e contagens de linhas reconciliam entre transformações',
              '7. Gráficos e modelos respondem sem exagerar causalidade',
              '8. Premissas, incerteza e sensibilidade visíveis',
              '9. Números rastreáveis aos campos de origem e cálculos',
              '10. Arquivos de saída nomeados e revisáveis',
              '11. Agendamentos usam fontes aprovadas e limiar de mudança',
              '12. Publicação, compartilhamento e edição exigem aprovação',
            ].map((chk, idx) => (
              <div key={idx} style={{ fontSize: '0.68rem', color: '#1E293B', fontWeight: 600, background: '#F8FAFC', padding: '3px 8px', borderRadius: '5px', border: '1px solid #E2E8F0' }}>
                ✓ {chk}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
          <strong>Tese Central do Capítulo 11:</strong> Dados confiáveis não nascem pedindo certeza ao modelo, mas preservando o caminho da fonte até a decisão.
        </span>
      </div>
    </div>
  );
}
