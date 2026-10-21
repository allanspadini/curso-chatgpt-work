import React, { useState } from 'react';
import { Award, CheckCircle2, Play, RotateCcw, FileCheck } from 'lucide-react';

export default function ProjectRubricsAlignmentVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Rubricas 3.3 e 3.4 (Artefatos & Brief)', caption: 'Documento em 3 passagens + Mapa de Fontes e Briefing com Limiar de Mudança' },
    { label: '2. Rubricas 3.5 e 3.6 (Dados & Dashboard)', caption: 'Perfilamento em cópia, validação de joins, rastreabilidade e modelo de informação' },
    { label: '3. Pacote de Evidências (100% Bloco 3)', caption: 'Checklist exato de capturas e artefatos para o Relatório PDF e Vídeo Final' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Top Header */}
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
            PROJETO DA DISCIPLINA • RUBRICAS 3.3 A 3.6
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

      {/* Main 3-Column Grid */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
        {/* Col 1: Rubrics 3.3 and 3.4 */}
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
          <div style={{ background: '#EFF6FF', border: '1px solid #93C5FD', borderRadius: '8px', padding: '7px 10px' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0369A1', fontFamily: 'var(--font-mono)' }}>
              CAPÍTULOS 9 E 10
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0A345D' }}>
              Rubricas 3.3 (Artefatos) e 3.4 (Chief of Staff)
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#0A345D' }}>Rubrica 3.3 — Artefato em 3 Passagens</div>
              <div style={{ fontSize: '0.72rem', color: '#334155', marginTop: '2px' }}>
                Produzir um documento, planilha ou apresentação com <strong>arquitetura de conteúdo explícita</strong> e revisão nas 3 passagens (<em>Plan ➔ Build ➔ Verify</em>).
              </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#0A345D' }}>Rubrica 3.4 — Mapa de Fontes & Brief</div>
              <div style={{ fontSize: '0.72rem', color: '#334155', marginTop: '2px' }}>
                Configurar o <strong>mapa de fontes da equipe</strong> e estruturar um <strong>briefing decisório</strong> organizado por prioridade/ação com <strong>limiar de mudança relevante</strong> (<em>meaningful-change threshold</em>).
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.72rem', color: '#0369A1', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
            ✓ Use os Simuladores 1 e 2 como modelo
          </div>
        </div>

        {/* Col 2: Rubrics 3.5 and 3.6 */}
        <div
          style={{
            opacity: step >= 1 ? 1 : 0.22,
            transition: 'opacity 0.35s',
            background: '#FFFFFF',
            border: '2px solid #EA580C',
            borderRadius: '14px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '8px', padding: '7px 10px' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#C2410C', fontFamily: 'var(--font-mono)' }}>
              CAPÍTULO 11
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0A345D' }}>
              Rubricas 3.5 (Dados) e 3.6 (Agendamento & Painel)
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#0A345D' }}>Rubrica 3.5 — Fluxo de Dados Confiável</div>
              <div style={{ fontSize: '0.72rem', color: '#334155', marginTop: '2px' }}>
                Perfilar a fonte <strong>preservando o arquivo original intacto</strong>, validar <strong>chaves de junção</strong> antes do merge e estruturar relatório com <strong>rastreabilidade e limitações explícitas</strong>.
              </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#0A345D' }}>Rubrica 3.6 — Recorrência & Dashboard</div>
              <div style={{ fontSize: '0.72rem', color: '#334155', marginTop: '2px' }}>
                Definir o fluxo como tarefa recorrente/agendada com dono e limite de aprovação, e definir o <strong>modelo de informação do dashboard</strong> (perguntas de decisão, frescor e área de qualidade).
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.72rem', color: '#C2410C', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
            ✓ Use o Simulador 3 e o Slide 10 como guia
          </div>
        </div>

        {/* Col 3: Evidence Checklist */}
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
          <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '8px', padding: '7px 10px' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#166534', fontFamily: 'var(--font-mono)' }}>
              ENTREGÁVEIS CONCRETOS DA AULA 5
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0A345D' }}>
              O Que Incluir no PDF e no Vídeo
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            {[
              'Artefato (Doc, Sheet ou Deck) com print do Pass 1 (Outline), Pass 2 (Build) e Pass 3 (QA Report)',
              'Tabela do Mapa de Fontes + Briefing Decisório em 7 blocos + Regra de Limiar de Mudança Relevante',
              'Data-Quality Note provando preservação do arquivo bruto, validação de chaves de join e limitações',
              'Especificação do Modelo de Informação do Dashboard (Sites) + Tarefa Agendada com Dono e Aprovação',
            ].map((ev, i) => (
              <div
                key={i}
                style={{
                  background: '#F0FDF4',
                  border: '1px solid #86EFAC',
                  borderRadius: '8px',
                  padding: '7px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <CheckCircle2 size={15} color="#16A34A" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.72rem', color: '#1E293B', fontWeight: 700, lineHeight: 1.3 }}>{ev}</span>
              </div>
            ))}
          </div>

          <div style={{ fontSize: '0.73rem', color: '#166534', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
            🏆 100% do Bloco 3 do Projeto Concluído!
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Award size={16} color="#0284C7" />
          <span style={{ fontSize: '0.79rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Integração Aulas 4 + 5:</strong> Com os Plugins (Aula 4) e os Fluxos de Documentos, Produtividade e Dados (Aula 5), você fecha todo o Bloco 3!
          </span>
        </div>
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileCheck size={16} color="#166534" />
          <span style={{ fontSize: '0.79rem', color: '#166534', fontWeight: 700 }}>
            <strong>Próximo Slide:</strong> Vamos testar a fixação dos Capítulos 9, 10 e 11 no Quiz Interativo!
          </span>
        </div>
      </div>
    </div>
  );
}
