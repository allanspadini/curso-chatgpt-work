import React, { useState } from 'react';
import {
  Target,
  FileSearch,
  CheckSquare,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
  Sparkles,
  XCircle,
  CheckCircle2,
  FileText,
  AlertTriangle,
  X,
  Layers,
  Clock,
  UserCheck
} from 'lucide-react';

export default function FourHabitsVisual() {
  const [activeTab, setActiveTab] = useState('framework'); // 'framework' | 'casopratico'
  const [caseSubTab, setCaseSubTab] = useState('prompt'); // 'prompt' | 'output'
  const [showTranscriptModal, setShowTranscriptModal] = useState(false);

  const habits = [
    {
      num: '01',
      title: 'Instruções Claras',
      badge: 'Work Specification',
      chips: ['Desfecho (Outcome)', 'Público & Decisão', 'Formato Estruturado'],
      icon: Target,
      color: 'var(--infnet-dark-blue)',
    },
    {
      num: '02',
      title: 'Contexto Delimitado',
      badge: 'Scoped Evidence',
      chips: ['Fontes Autoritativas', 'Sinal > Ruído', 'Precedência em Conflitos'],
      icon: FileSearch,
      color: 'var(--infnet-cyan)',
    },
    {
      num: '03',
      title: 'Revisão em Camadas',
      badge: 'Layered Audit',
      chips: ['Rastreamento Fonte-Dado', 'Completude de Casos', 'Fato vs. Inferência'],
      icon: CheckSquare,
      color: 'var(--infnet-purple)',
    },
    {
      num: '04',
      title: 'Uso Responsável',
      badge: 'Governance',
      chips: ['Políticas do Workspace', 'Classificação de Risco', 'Portão Human-in-the-Loop'],
      icon: ShieldCheck,
      color: 'var(--infnet-green-accent)',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '4px 0',
        position: 'relative',
      }}
    >
      {/* Top Tab Bar Switcher */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setActiveTab('framework')}
            style={{
              padding: '6px 16px',
              borderRadius: '8px',
              border: activeTab === 'framework' ? '2px solid var(--infnet-dark-blue)' : '1px solid #CBD5E1',
              background: activeTab === 'framework' ? '#EDF5FA' : '#FFFFFF',
              color: activeTab === 'framework' ? 'var(--infnet-dark-blue)' : '#475569',
              fontWeight: 800,
              fontSize: '0.84rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
            }}
          >
            <Layers size={16} color="var(--infnet-dark-blue)" />
            1. Framework dos 4 Hábitos
          </button>

          <button
            onClick={() => setActiveTab('casopratico')}
            style={{
              padding: '6px 16px',
              borderRadius: '8px',
              border: activeTab === 'casopratico' ? '2px solid var(--infnet-cyan)' : '1px solid #CBD5E1',
              background: activeTab === 'casopratico' ? '#F0FDF4' : '#FFFFFF',
              color: activeTab === 'casopratico' ? '#166534' : '#475569',
              fontWeight: 800,
              fontSize: '0.84rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
            }}
          >
            <Sparkles size={16} color="var(--infnet-green-accent)" />
            2. Caso Prático: Refatoração do Prompt (Reunião Q3)
          </button>
        </div>

        {activeTab === 'casopratico' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => setShowTranscriptModal(true)}
              style={{
                padding: '5px 12px',
                borderRadius: '6px',
                border: '1px solid #CBD5E1',
                background: '#FFFFFF',
                color: 'var(--infnet-dark-blue)',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <FileText size={14} color="var(--infnet-cyan)" />
              Ver Transcrição Original (14/08/2026)
            </button>

            <div style={{ display: 'flex', background: '#F1F5F9', padding: '3px', borderRadius: '6px' }}>
              <button
                onClick={() => setCaseSubTab('prompt')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '4px',
                  border: 'none',
                  background: caseSubTab === 'prompt' ? '#FFFFFF' : 'transparent',
                  color: caseSubTab === 'prompt' ? 'var(--infnet-dark-blue)' : '#64748B',
                  fontWeight: caseSubTab === 'prompt' ? 800 : 600,
                  fontSize: '0.76rem',
                  cursor: 'pointer',
                  boxShadow: caseSubTab === 'prompt' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                }}
              >
                Comparativo de Prompts
              </button>
              <button
                onClick={() => setCaseSubTab('output')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '4px',
                  border: 'none',
                  background: caseSubTab === 'output' ? '#FFFFFF' : 'transparent',
                  color: caseSubTab === 'output' ? 'var(--infnet-dark-blue)' : '#64748B',
                  fontWeight: caseSubTab === 'output' ? 800 : 600,
                  fontSize: '0.76rem',
                  cursor: 'pointer',
                  boxShadow: caseSubTab === 'output' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                }}
              >
                Relatório Gerado
              </button>
            </div>
          </div>
        )}
      </div>

      {/* VIEW 1: FRAMEWORK DOS 4 HÁBITOS */}
      {activeTab === 'framework' && (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
          {/* 4 Quadrants Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '14px',
              alignItems: 'stretch',
              flex: 1,
              marginBottom: '12px',
            }}
          >
            {habits.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div
                  key={idx}
                  className="card-base"
                  style={{
                    padding: '20px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderTop: `6px solid ${h.color}`,
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '1.1rem',
                          fontWeight: 900,
                          color: h.color,
                        }}
                      >
                        HÁBITO {h.num}
                      </span>
                      <div
                        style={{
                          background: '#F8FAFC',
                          padding: '7px',
                          borderRadius: '8px',
                          border: '1px solid #E2E8F0',
                        }}
                      >
                        <Icon size={20} color={h.color} />
                      </div>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-title)',
                        fontSize: '1.2rem',
                        color: 'var(--infnet-dark-blue)',
                        fontWeight: 800,
                        marginBottom: '12px',
                      }}
                    >
                      {h.title}
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      {h.chips.map((chip, cIdx) => (
                        <div
                          key={cIdx}
                          style={{
                            padding: '7px 10px',
                            background: '#F8FAFC',
                            border: '1px solid #E2E8F0',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: '#1E293B',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: h.color }} />
                          <span>{chip}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: '14px', paddingTop: '8px', borderTop: '1px solid #F1F5F9', textAlign: 'right' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: h.color,
                        background: '#F1F5F9',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {h.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Improvement Loop Banner */}
          <div
            style={{
              background: '#EDF5FA',
              border: '1px solid #D0E3F0',
              borderRadius: '10px',
              padding: '10px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <RefreshCw size={18} color="var(--infnet-cyan)" />
              <span style={{ fontSize: '0.88rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
                Loop de Engenharia:
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700, fontSize: '0.84rem' }}>
              <span className="badge-pill" style={{ background: '#FFFFFF', color: 'var(--infnet-dark-blue)', border: '1px solid #CBD5E1' }}>
                1. Executar
              </span>
              <ArrowRight size={14} color="#94A3B8" />
              <span className="badge-pill" style={{ background: '#FFFFFF', color: 'var(--infnet-cyan)', border: '1px solid #CBD5E1' }}>
                2. Revisar
              </span>
              <ArrowRight size={14} color="#94A3B8" />
              <span className="badge-pill" style={{ background: '#FFFFFF', color: 'var(--infnet-purple)', border: '1px solid #CBD5E1' }}>
                3. Diagnosticar
              </span>
              <ArrowRight size={14} color="#94A3B8" />
              <span className="badge-pill" style={{ background: '#FFFFFF', color: 'var(--infnet-green-accent)', border: '1px solid #CBD5E1' }}>
                4. Refinar
              </span>
            </div>

            <span className="badge-pill" style={{ background: 'var(--infnet-dark-blue)', color: '#FFFFFF', fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
              Engenharia Agêntica
            </span>
          </div>
        </div>
      )}

      {/* VIEW 2: CASO PRÁTICO - REFATORAÇÃO DE PROMPT */}
      {activeTab === 'casopratico' && caseSubTab === 'prompt' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: '16px',
            alignItems: 'stretch',
            flex: 1,
          }}
        >
          {/* Left Column: Bad Prompt */}
          <div
            className="card-base"
            style={{
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderTop: '6px solid var(--status-danger-text)',
              background: '#FFFDFD',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span
                  className="badge-pill"
                  style={{
                    background: 'var(--status-danger-bg)',
                    color: 'var(--status-danger-text)',
                    border: '1px solid var(--status-danger-border)',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                  }}
                >
                  <XCircle size={14} style={{ marginRight: '4px' }} />
                  PROMPT INFORMAL / VAGO
                </span>
                <span style={{ fontSize: '0.72rem', color: '#991B1B', fontWeight: 700 }}>Chat Tradicional</span>
              </div>

              {/* The exact bad prompt */}
              <div
                style={{
                  background: '#FEF2F2',
                  border: '1px solid #FCA5A5',
                  borderRadius: '8px',
                  padding: '12px 14px',
                  marginBottom: '14px',
                }}
              >
                <div style={{ fontSize: '0.72rem', color: '#7F1D1D', fontWeight: 700, marginBottom: '4px', textTransform: 'uppercase' }}>
                  Comando Digitado pelo Operador:
                </div>
                <code
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                    color: '#991B1B',
                    fontWeight: 800,
                    display: 'block',
                  }}
                >
                  "Resuma tudo e monte o relatório executivo."
                </code>
              </div>

              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', marginBottom: '8px' }}>
                Colapso dos 4 Hábitos na Prática:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div
                  style={{
                    padding: '8px 10px',
                    background: '#FFFFFF',
                    border: '1px solid #FECACA',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    color: '#7F1D1D',
                  }}
                >
                  <strong>❌ Hábito 1 (Sem Instrução Clara):</strong> Não define seções, público-alvo nem critérios de decisão. O que é "executivo"?
                </div>

                <div
                  style={{
                    padding: '8px 10px',
                    background: '#FFFFFF',
                    border: '1px solid #FECACA',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    color: '#7F1D1D',
                  }}
                >
                  <strong>❌ Hábito 2 (Sem Limites de Contexto):</strong> O modelo inventa responsáveis e prazos para suprir as lacunas do diálogo.
                </div>

                <div
                  style={{
                    padding: '8px 10px',
                    background: '#FFFFFF',
                    border: '1px solid #FECACA',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    color: '#7F1D1D',
                  }}
                >
                  <strong>❌ Hábito 3 (Alucinação Factual):</strong> Mistura decisões homologadas com meras sugestões (RFID vira projeto aprovado).
                </div>

                <div
                  style={{
                    padding: '8px 10px',
                    background: '#FFFFFF',
                    border: '1px solid #FECACA',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    color: '#7F1D1D',
                  }}
                >
                  <strong>❌ Hábito 4 (Sem Governança):</strong> Gera minutas definitivas que podem ser disparadas sem aprovação do comitê.
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '10px',
                padding: '6px 10px',
                background: '#FEE2E2',
                borderRadius: '6px',
                textAlign: 'center',
                fontSize: '0.72rem',
                color: '#991B1B',
                fontWeight: 700,
              }}
            >
              Resultado Operacional: 40 min de retrabalho humano auditando cada palavra.
            </div>
          </div>

          {/* Right Column: Engineered Prompt with 4 Habits */}
          <div
            className="card-base"
            style={{
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderTop: '6px solid var(--infnet-cyan)',
              background: '#FFFFFF',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span
                  className="badge-pill"
                  style={{
                    background: 'var(--status-success-bg)',
                    color: 'var(--status-success-text)',
                    border: '1px solid var(--status-success-border)',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                  }}
                >
                  <CheckCircle2 size={14} style={{ marginRight: '4px' }} />
                  ESPECIFICAÇÃO DE ENGENHARIA (4 HÁBITOS ADOTADOS)
                </span>
                <span style={{ fontSize: '0.72rem', color: '#0369A1', fontWeight: 700 }}>ChatGPT Work Ready</span>
              </div>

              {/* Formatted prompt blocks mapping the 4 habits */}
              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: '0.76rem',
                  lineHeight: 1.35,
                }}
              >
                {/* Habit 1 */}
                <div style={{ borderLeft: '3px solid var(--infnet-dark-blue)', paddingLeft: '8px' }}>
                  <span style={{ color: 'var(--infnet-dark-blue)', fontWeight: 800, fontSize: '0.72rem' }}>
                    [HÁBITO 1: INSTRUÇÃO CLARA & ESTRUTURA]
                  </span>
                  <div style={{ color: '#1E293B', marginTop: '2px' }}>
                    "Atue como analista sênior de operações. A partir da transcrição de 14/08/2026, gere um <strong>Relatório Executivo de 1 página para a Diretoria</strong> estruturado estritamente em 4 seções: <em>1. Decisões Homologadas</em>, <em>2. Ações, Prazos e Responsáveis</em>, <em>3. Propostas em Avaliação</em>, <em>4. Questões em Aberto</em>."
                  </div>
                </div>

                {/* Habit 2 */}
                <div style={{ borderLeft: '3px solid var(--infnet-cyan)', paddingLeft: '8px' }}>
                  <span style={{ color: '#0369A1', fontWeight: 800, fontSize: '0.72rem' }}>
                    [HÁBITO 2: CONTEXTO DELIMITADO]
                  </span>
                  <div style={{ color: '#1E293B', marginTop: '2px' }}>
                    "Restrinja-se <strong>exclusivamente</strong> às falas explícitas na transcrição. Onde o dado não estiver definido (ex: responsável e prazo para cotar turno noturno), declare explicitamente: <code>'Pendente / Não especificado'</code>. Proibido inventar dados."
                  </div>
                </div>

                {/* Habit 3 */}
                <div style={{ borderLeft: '3px solid var(--infnet-purple)', paddingLeft: '8px' }}>
                  <span style={{ color: 'var(--infnet-purple)', fontWeight: 800, fontSize: '0.72rem' }}>
                    [HÁBITO 3: REVISÃO EM CAMADAS & PRECISÃO]
                  </span>
                  <div style={{ color: '#1E293B', marginTop: '2px' }}>
                    "Separe fatos aprovados (Rescisão TransLog até 22/08 por Mariana; R$ 45.000 emergencial) de meras sugestões (RFID por Carlos; turno noturno por Mariana). Aponte a licença do galpão B como <code>'Aguardando posicionamento jurídico'</code>."
                  </div>
                </div>

                {/* Habit 4 */}
                <div style={{ borderLeft: '3px solid var(--infnet-green-accent)', paddingLeft: '8px' }}>
                  <span style={{ color: '#15803D', fontWeight: 800, fontSize: '0.72rem' }}>
                    [HÁBITO 4: USO RESPONSÁVEL & GOVERNANÇA]
                  </span>
                  <div style={{ color: '#1E293B', marginTop: '2px' }}>
                    "Documento para alinhamento interno prévio. <strong>Não redija minutas externas</strong> nem dispare notificações para transportadoras sem homologação formal da diretoria."
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '10px',
                padding: '6px 12px',
                background: '#EDF5FA',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: '0.74rem', color: 'var(--infnet-dark-blue)', fontWeight: 700 }}>
                Índice de Ambiguidade: <strong>0%</strong> | Rastreabilidade: <strong>100%</strong>
              </span>
              <button
                onClick={() => setCaseSubTab('output')}
                style={{
                  background: 'var(--infnet-cyan)',
                  color: 'var(--infnet-dark-blue)',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '3px 8px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                Ver Relatório Gerado ➔
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2 (SUBTAB): RELATÓRIO EXECUTIVO GERADO PELO PROMPT */}
      {activeTab === 'casopratico' && caseSubTab === 'output' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '14px',
            alignItems: 'stretch',
            flex: 1,
          }}
        >
          {/* Card 1: Decisões Homologadas */}
          <div
            className="card-base"
            style={{
              padding: '16px 18px',
              borderLeft: '5px solid var(--infnet-green-accent)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <CheckCircle2 size={18} color="var(--infnet-green-accent)" />
                <h4 style={{ margin: 0, fontSize: '0.92rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
                  1. Decisões Homologadas
                </h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.78rem', color: '#1E293B', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>
                  <strong>Rescisão TransLog:</strong> Aprovada rescisão contratual imediata devido a atrasos no Sul; rota migrada 100% para a RápidoExpress.
                </li>
                <li>
                  <strong>Orçamento Emergencial:</strong> Aprovado teto financeiro de <strong>R$ 45.000</strong> para a transição dos galpões no próximo mês (confirmado por Roberto).
                </li>
              </ul>
            </div>
            <div style={{ textAlign: 'right', borderTop: '1px solid #F1F5F9', paddingTop: '6px' }}>
              <span className="badge-pill" style={{ background: '#DCFCE7', color: '#166534', fontSize: '0.68rem' }}>
                Fato Deliberado (100% Ancorado)
              </span>
            </div>
          </div>

          {/* Card 2: Ações, Prazos e Responsáveis */}
          <div
            className="card-base"
            style={{
              padding: '16px 18px',
              borderLeft: '5px solid var(--infnet-cyan)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Clock size={18} color="var(--infnet-cyan)" />
                <h4 style={{ margin: 0, fontSize: '0.92rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
                  2. Ações, Prazos & Responsáveis
                </h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.78rem', color: '#1E293B', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>
                  <strong>Notificação Formal de Rescisão:</strong> Emitir e despachar comunicado formal para a TransLog.
                </li>
                <li>
                  <strong>Responsável Homologada:</strong> Mariana (Supply Chain).
                </li>
                <li>
                  <strong>Prazo Fatal Inegociável:</strong> Até <strong>22 de agosto de 2026</strong>.
                </li>
              </ul>
            </div>
            <div style={{ textAlign: 'right', borderTop: '1px solid #F1F5F9', paddingTop: '6px' }}>
              <span className="badge-pill" style={{ background: '#E0F2FE', color: '#0369A1', fontSize: '0.68rem' }}>
                Compromisso Nominal Rastreado
              </span>
            </div>
          </div>

          {/* Card 3: Propostas em Avaliação */}
          <div
            className="card-base"
            style={{
              padding: '16px 18px',
              borderLeft: '5px solid var(--infnet-orange)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <AlertTriangle size={18} color="var(--infnet-orange)" />
                <h4 style={{ margin: 0, fontSize: '0.92rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
                  3. Propostas em Avaliação Preliminar
                </h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.78rem', color: '#1E293B', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>
                  <strong>Leitores RFID nas Docas (Carlos):</strong> Proposta preliminar para reduzir erros de triagem. Requer análise de viabilidade técnica.
                </li>
                <li>
                  <strong>Terceirização de Turno Noturno (Mariana):</strong> Proposta para pico de demanda.
                </li>
                <li>
                  <span style={{ color: '#C2410C', fontWeight: 700 }}>Ponto Crítico de Controle:</span> Cotação de fornecedores está <strong>PENDENTE de definição de responsável e prazo</strong>.
                </li>
              </ul>
            </div>
            <div style={{ textAlign: 'right', borderTop: '1px solid #F1F5F9', paddingTop: '6px' }}>
              <span className="badge-pill" style={{ background: '#FFEDD5', color: '#C2410C', fontSize: '0.68rem' }}>
                Não Confundir com Decisão Aprovada
              </span>
            </div>
          </div>

          {/* Card 4: Questões em Aberto */}
          <div
            className="card-base"
            style={{
              padding: '16px 18px',
              borderLeft: '5px solid var(--infnet-purple)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <UserCheck size={18} color="var(--infnet-purple)" />
                <h4 style={{ margin: 0, fontSize: '0.92rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
                  4. Questões em Aberto & Bloqueios
                </h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.78rem', color: '#1E293B', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>
                  <strong>Licença Ambiental de Curitiba (Galpão B):</strong> Status legal permanece <strong>em aberto</strong>.
                </li>
                <li>
                  <strong>Bloqueador Identificado:</strong> O setor jurídico interno ainda não respondeu ao chamado de Mariana.
                </li>
                <li>
                  <strong>Ação Recomendada:</strong> Escalar chamado jurídico antes de avaliar recurso na justiça estadual.
                </li>
              </ul>
            </div>
            <div style={{ textAlign: 'right', borderTop: '1px solid #F1F5F9', paddingTop: '6px' }}>
              <span className="badge-pill" style={{ background: '#F3E8FF', color: '#7E22CE', fontSize: '0.68rem' }}>
                Bloqueio Formal Declarado
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TRANSCRIPT MODAL POPUP */}
      {showTranscriptModal && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(6, 31, 56, 0.75)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(3px)',
          }}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '12px',
              width: '90%',
              maxWidth: '850px',
              maxHeight: '90%',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-lg)',
              border: '2px solid var(--infnet-cyan)',
              overflow: 'hidden',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '14px 20px',
                background: '#EDF5FA',
                borderBottom: '1px solid #D0E3F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <strong style={{ fontSize: '0.95rem', color: 'var(--infnet-dark-blue)', display: 'block' }}>
                  Transcrição da Reunião: Alinhamento Operacional e Logística Q3
                </strong>
                <span style={{ fontSize: '0.78rem', color: '#475569' }}>
                  Data: 14 de agosto de 2026 | Participantes: Carlos (Operações), Mariana (Supply Chain), Roberto (Finanças)
                </span>
              </div>
              <button
                onClick={() => setShowTranscriptModal(false)}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  borderRadius: '6px',
                  padding: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={18} color="#475569" />
              </button>
            </div>

            {/* Modal Body: Dialogue text */}
            <div
              style={{
                padding: '18px 24px',
                overflowY: 'auto',
                fontSize: '0.82rem',
                lineHeight: 1.5,
                color: '#1E293B',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <p style={{ margin: 0 }}>
                <strong>Carlos:</strong> Bom dia, pessoal. Vamos direto aos pontos críticos da nossa malha de distribuição para fechar o plano da diretoria.
              </p>
              <p style={{ margin: 0, background: '#F0FDF4', padding: '6px 10px', borderRadius: '4px', borderLeft: '3px solid #166534' }}>
                <strong>Mariana:</strong> Perfeito. Primeiro ponto sobre a transportadora terceirizada: após os atrasos no Sul, nós batemos o martelo. Ficou decidido rescindir o contrato com a TransLog e migrar a rota inteira para a RápidoExpress.
              </p>
              <p style={{ margin: 0, background: '#F0FDF4', padding: '6px 10px', borderRadius: '4px', borderLeft: '3px solid #166534' }}>
                <strong>Carlos:</strong> Ótimo, essa decisão já era esperada. Mas precisamos formalizar isso. Mariana, você consegue emitir a notificação formal de rescisão até 22 de agosto?
              </p>
              <p style={{ margin: 0, background: '#F0FDF4', padding: '6px 10px', borderRadius: '4px', borderLeft: '3px solid #166534' }}>
                <strong>Mariana:</strong> Sim, já anotei aqui. 22 de agosto eu envio a notificação.
              </p>
              <p style={{ margin: 0, background: '#EFF6FF', padding: '6px 10px', borderRadius: '4px', borderLeft: '3px solid #1E40AF' }}>
                <strong>Roberto:</strong> Sobre custos: nós aprovamos o teto de gastos emergenciais. Ficou decidido o orçamento emergencial de R$ 45.000 para a transição dos galpões no próximo mês.
              </p>
              <p style={{ margin: 0, background: '#FFF7ED', padding: '6px 10px', borderRadius: '4px', borderLeft: '3px solid #C2410C' }}>
                <strong>Carlos:</strong> Fechado. Agora, sobre automação de estoque: eu sugiro implementarmos leitores RFID em todas as docas de entrada para reduzir erros de triagem. É apenas uma proposta por enquanto, precisamos ver a viabilidade.
              </p>
              <p style={{ margin: 0, background: '#FFF7ED', padding: '6px 10px', borderRadius: '4px', borderLeft: '3px solid #C2410C' }}>
                <strong>Mariana:</strong> Faz sentido. Outra proposta que quero colocar na mesa: terceirizar temporariamente o turno da madrugada durante o pico de demanda para evitar gargalos.
              </p>
              <p style={{ margin: 0, background: '#FFF7ED', padding: '6px 10px', borderRadius: '4px', borderLeft: '3px solid #C2410C' }}>
                <strong>Carlos:</strong> Concordo que devemos avaliar essa terceirização. Alguém precisa cotar as empresas terceirizadas de turno noturno para vermos se cabe no orçamento.
              </p>
              <p style={{ margin: 0, background: '#FFF7ED', padding: '6px 10px', borderRadius: '4px', borderLeft: '3px solid #C2410C' }}>
                <strong>Roberto:</strong> Isso precisa ser feito logo, mas ainda não definimos quem vai cotar isso e nem até quando.
              </p>
              <p style={{ margin: 0, background: '#FFF7ED', padding: '6px 10px', borderRadius: '4px', borderLeft: '3px solid #C2410C' }}>
                <strong>Carlos:</strong> Certo, deixamos pendente o responsável. Por fim, sobre a questão das licenças ambientais do novo depósito de Curitiba: afinal, a licença do galpão B já saiu ou teremos que recorrer à justiça estadual?
              </p>
              <p style={{ margin: 0, background: '#FAF5FF', padding: '6px 10px', borderRadius: '4px', borderLeft: '3px solid #7E22CE' }}>
                <strong>Mariana:</strong> Essa pergunta continua em aberto. O setor jurídico ainda não respondeu nosso chamado e não temos clareza do status legal até agora.
              </p>
              <p style={{ margin: 0 }}>
                <strong>Carlos:</strong> Perfeito. Temos o suficiente por hoje.
              </p>
            </div>

            {/* Modal Footer */}
            <div
              style={{
                padding: '10px 20px',
                background: '#F8FAFC',
                borderTop: '1px solid #E2E8F0',
                textAlign: 'right',
              }}
            >
              <button
                onClick={() => setShowTranscriptModal(false)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '6px',
                  background: 'var(--infnet-dark-blue)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Fechar Transcrição
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
