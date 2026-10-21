import React, { useState } from 'react';
import { FileText, Table, Presentation, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';

const ARTIFACT_TYPES = [
  {
    id: 'deck',
    name: 'Apresentação Executiva (8 Slides)',
    icon: Presentation,
    badge: 'Skill Lab Deck',
    color: '#0284C7',
    bg: '#EFF6FF',
    border: '#93C5FD',
    audience: 'Comitê de Investimento / Diretoria',
    decision: 'Aprovar realocação de orçamento Q4 entre canais',
    unchanged: 'Sistema de layout do template oficial, cores, fontes e proporção 16:9',
    pass1: [
      'Inspecionar notas aprovadas e pasta de métricas (workbook)',
      'Verificar números-chave antes de redigir narrativa',
      'Propor mensagem central, evidências, ressalvas e outline dos 8 slides',
      'PAUSAR e aguardar aprovação humana do Slide Plan',
    ],
    pass2: [
      'Usar títulos guiados por evidência (conclusão no título, não apenas tópico)',
      'Máximo de 1 ideia principal por slide + gráficos legíveis',
      'Incluir notas de fonte no rodapé e speaker notes completas',
      'Preservar rigorosamente o sistema de layout do template anexado',
    ],
    pass3: [
      'Renderizar e inspecionar visualmente todos os 8 slides',
      'Corrigir overflow, texto cortado, rótulos ilegíveis e desalinhamento',
      'Reconciliar pelo menos 2 números do deck com a planilha original',
      'Retornar arquivo final + breve QA report (sem compartilhar externamente)',
    ],
    prompt: `Create an eight-slide decision presentation for the Executive Committee using the attached template, notes, and metrics workbook.
Pass 1: inspect the sources, verify the important numbers, and propose the central message, evidence, caveats, and slide outline. Wait for approval.
Pass 2: build the deck. Use evidence-led slide titles, no more than one main idea per slide, readable charts, source notes, and speaker notes. Preserve the template's layout system.
Pass 3: render and inspect every slide for overflow, clipped text, unreadable labels, inconsistent spacing, unsupported claims, and broken visual hierarchy. Correct defects and return the final file plus a brief QA report. Do not share it.`,
  },
  {
    id: 'doc',
    name: 'Documento de Decisão / SOP',
    icon: FileText,
    badge: 'Decision Brief',
    color: '#166534',
    bg: '#F0FDF4',
    border: '#86EFAC',
    audience: 'Liderança de Engenharia e Compliance',
    decision: 'Homologar novo procedimento operacional padrão (SOP)',
    unchanged: 'Cláusulas legais, requisitos normativos, definições, exceções e numeração',
    pass1: [
      'Definir arquitetura de conteúdo (Situação ➔ Evidência ➔ Opções ➔ Riscos ➔ Recomendação)',
      'Mapear fontes aprovadas e identificar lacunas de evidência',
      'Listar explicitamente quais seções e cláusulas são imutáveis',
      'PAUSAR para validação do esqueleto estrutural',
    ],
    pass2: [
      'Redigir distinguindo Fatos Citados, Achados Derivados e Recomendações',
      'Inserir links diretos ou notas de rodapé para afirmações críticas',
      'Sinalizar explicitamente se alguma fonte for incerta',
      'Alterar apenas a camada autorizada (clareza) sem tocar nas regras',
    ],
    pass3: [
      'Inspecionar o documento renderizado (hierarquia, quebras de página e tabelas)',
      'Verificar se a decisão solicitada e os riscos abertos estão inequívocos',
      'Checar legendas, citações, cabeçalhos e acessibilidade de leitura',
      'Entregar arquivo revisado + registro de alterações por seção',
    ],
    prompt: `Create a decision brief / operating procedure for Engineering & Compliance using the attached policy sources.
Pass 1: propose the content architecture (situation, evidence, options, risks, recommendation, next steps) and confirm which legal definitions and numbering must stay unchanged. Wait for approval.
Pass 2: draft the document with strict source traceability. Distinguish quoted facts, derived findings, and recommendations. Rewrite explanatory paragraphs in plain language without changing requirements, definitions, exceptions, or numbering.
Pass 3: inspect the rendered document for heading hierarchy, page breaks, table formatting, and unmistakable decision clarity. Return the final file and a QA summary.`,
  },
  {
    id: 'sheet',
    name: 'Planilha de Avaliação / Modelo',
    icon: Table,
    badge: 'Executable Model',
    color: '#C2410C',
    bg: '#FFF7ED',
    border: '#FDBA74',
    audience: 'Equipe de Operações e Finanças',
    decision: 'Comparar fornecedores e projetar impacto financeiro trimestral',
    unchanged: 'Aba de dados brutos exportados (Raw Data) e IDs de registro originais',
    pass1: [
      'Definir estrutura de abas separadas: Dados Brutos, Premissas, Cálculos e Outputs',
      'Especificar colunas, unidades, convenções de data e método de pontuação',
      'Definir tratamento de dados faltantes (preservar vazios sem zerar!)',
      'PAUSAR para aprovar o desenho do modelo e pesos de critérios',
    ],
    pass2: [
      'Construir fórmulas explícitas, validações de dados e tabelas de reconciliação',
      'Adicionar notas explicando lógicas não óbvias e premissas adotadas',
      'Demonstrar análise de sensibilidade (como mudanças nos pesos afetam o ranking)',
      'Gerar gráficos com títulos, eixos, unidades e intervalos de data claros',
    ],
    pass3: [
      'Revisar fórmulas de forma independente e testar casos de fronteira',
      'Comparar uma amostra de cálculos com resultado manual',
      'Inspecionar a planilha renderizada: larguras de coluna, células congeladas e formatos',
      'Confirmar alterações diretamente no arquivo final conectado',
    ],
    prompt: `Build an inspectable vendor-comparison spreadsheet model for Operations & Finance from the attached export.
Pass 1: define separate tabs for raw data, assumptions, calculations, and presentation. Specify units, date conventions, missing-data rules (preserve missing as blank, never zero), and scoring criteria. Wait for approval.
Pass 2: build the workbook with explicit formulas, reconciliation checks, sensitivity analysis on weights, and notes explaining non-obvious logic.
Pass 3: test boundary cases, verify totals against raw inputs, inspect column widths, number formats, frozen panes, and chart axes/units in the rendered file. Return the workbook plus a formula QA report.`,
  },
];

export default function ThreePassDeliverableSimulator() {
  const [selectedType, setSelectedType] = useState(0);
  const [activePass, setActivePass] = useState(0);

  const current = ARTIFACT_TYPES[selectedType];
  const passes = [
    { title: 'Pass 1: PLAN (Arquitetura & Fontes)', items: current.pass1, badge: 'Portão de Aprovação Humana' },
    { title: 'Pass 2: BUILD (Produção Rastreável)', items: current.pass2, badge: 'Preservação de Restrições' },
    { title: 'Pass 3: VERIFY (QA de Conteúdo & Render)', items: current.pass3, badge: 'Auditoria Visual & Numérica' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '10px', justifyContent: 'space-between' }}>
      {/* Top Bar */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '12px',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              background: '#0284C7',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.74rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            SIMULADOR INTERATIVO 1 • RUBRICA 3.3
          </span>
          <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.9rem' }}>
            Construtor de Entregáveis em 3 Passagens (Plan ➔ Build ➔ Verify)
          </span>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          {ARTIFACT_TYPES.map((t, idx) => {
            const Icon = t.icon;
            const active = idx === selectedType;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setSelectedType(idx);
                  setActivePass(0);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  background: active ? t.bg : '#FFFFFF',
                  color: active ? t.color : '#475569',
                  border: active ? `2px solid ${t.color}` : '1px solid #CBD5E1',
                }}
              >
                <Icon size={14} />
                {t.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '430px 1fr', gap: '14px' }}>
        {/* Left: Product Specification & Pass Selector */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1.5px solid #CBD5E1',
            borderRadius: '14px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: current.color, fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
              ESPECIFICAÇÃO DO PRODUTO ({current.badge.toUpperCase()}):
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '7px 10px' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748B' }}>AUDIÊNCIA & DECISÃO</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0A345D' }}>{current.audience}</div>
                <div style={{ fontSize: '0.74rem', color: '#334155' }}>🎯 {current.decision}</div>
              </div>
              <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '7px 10px' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#991B1B' }}>CAMADA IMUTÁVEL (DO NOT CHANGE)</div>
                <div style={{ fontSize: '0.74rem', color: '#7F1D1D', fontWeight: 600 }}>{current.unchanged}</div>
              </div>
            </div>
          </div>

          {/* Pass Selector Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#475569', fontFamily: 'var(--font-mono)' }}>
              INSPECIONE AS 3 PASSAGENS:
            </div>
            {passes.map((p, pIdx) => {
              const isAct = pIdx === activePass;
              return (
                <button
                  key={pIdx}
                  onClick={() => setActivePass(pIdx)}
                  style={{
                    textAlign: 'left',
                    padding: '9px 12px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    background: isAct ? '#EFF6FF' : '#F8FAFC',
                    border: isAct ? '2px solid #0284C7' : '1px solid #CBD5E1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontWeight: 800, fontSize: '0.82rem', color: '#0A345D' }}>{p.title}</span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      background: isAct ? '#0284C7' : '#E2E8F0',
                      color: isAct ? '#FFFFFF' : '#475569',
                    }}
                  >
                    {p.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Active Pass Checklist + Generated Contract Prompt */}
        <div
          style={{
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
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0A345D' }}>
                {passes[activePass].title} — Critérios de Execução e QA
              </span>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#166534', background: '#F0FDF4', border: '1px solid #86EFAC', padding: '3px 10px', borderRadius: '12px', fontFamily: 'var(--font-mono)' }}>
                PASSAGEM {activePass + 1} DE 3
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {passes[activePass].items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    borderRadius: '8px',
                    padding: '8px 10px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                  }}
                >
                  <CheckCircle2 size={15} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.76rem', color: '#1E293B', fontWeight: 600, lineHeight: 1.35 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prompt Template Box */}
          <div style={{ background: '#F8FAFC', border: '1.5px solid #93C5FD', borderRadius: '10px', padding: '10px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', fontWeight: 800, color: '#0369A1', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
              <Sparkles size={14} /> ESPECIFICAÇÃO DE TRABALHO EM 3 PASSAGENS (PRONTA PARA USO NO PROJETO):
            </div>
            <pre
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: '#0A345D',
                whiteSpace: 'pre-wrap',
                lineHeight: 1.38,
                margin: 0,
              }}
            >
              {current.prompt}
            </pre>
          </div>
        </div>
      </div>

      {/* Bottom Rule */}
      <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '10px', padding: '7px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ShieldAlert size={16} color="#C2410C" />
        <span style={{ fontSize: '0.78rem', color: '#9A3412', fontWeight: 700 }}>
          <strong>Evidência da Rubrica 3.3:</strong> Apresente o artefato final acompanhado do histórico das 3 passagens (Plano aprovado ➔ Construção ➔ Relatório de QA).
        </span>
      </div>
    </div>
  );
}
