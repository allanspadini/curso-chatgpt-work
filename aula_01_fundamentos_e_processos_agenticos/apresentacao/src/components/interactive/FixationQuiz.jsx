import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw } from 'lucide-react';

export default function FixationQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'Qual a principal diferença na unidade de delegação entre o ChatGPT tradicional (Chat) e o ChatGPT Work?',
      options: [
        { id: 'A', text: 'O ChatGPT Work utiliza apenas um modelo com mais parâmetros, sem alteração na dinâmica de interação.', isCorrect: false },
        { id: 'B', text: 'No Chat a unidade é o turno conversacional (turn), enquanto no Work a unidade é o desfecho acabado (outcome) com execução multi-etapas e conectores corporativos.', isCorrect: true },
        { id: 'C', text: 'O ChatGPT Work elimina completamente a necessidade de julgamento humano e revisão de evidências.', isCorrect: false },
        { id: 'D', text: 'O Chat conecta-se nativamente a ferramentas de escrita corporativa, enquanto o Work é estritamente conversacional.', isCorrect: false },
      ],
      explanation: 'No Chat tradicional, o humano orquestra cada passo e cada turno. No ChatGPT Work, o agente assume a responsabilidade de executar um fluxo orientado a um entregável (outcome) auditável, acessando ferramentas conectadas.',
    },
    {
      id: 2,
      question: 'Por que a "confiança de expressão" de um LLM não pode ser tomada como evidência de correção factual?',
      options: [
        { id: 'A', text: 'Porque o modelo produz respostas por convergência estatística de padrões linguísticos, não por validação factual com sistemas de verdade.', isCorrect: true },
        { id: 'B', text: 'Porque modelos generativos invertem as premissas lógicas de forma proposital quando recebem muitos documentos.', isCorrect: false },
        { id: 'C', text: 'Porque a confiança linguística é gerada apenas quando o modelo não possui contexto no prompt.', isCorrect: false },
        { id: 'D', text: 'Porque todo modelo autorregressivo possui restrição legal de nunca emitir conclusões factuais.', isCorrect: false },
      ],
      explanation: 'Um modelo gera sequências textuais maximizando verossimilhança estatística P(w_t | w_<t). Fluência e clareza de tom decorrem do pré-treino, enquanto a verdade factual depende da ancoragem estrita em fontes confiáveis.',
    },
    {
      id: 3,
      question: 'Qual o papel primordial do "Princípio da Reversibilidade" na arquitetura de governança agêntica?',
      options: [
        { id: 'A', text: 'Exigir que o agente reverta automaticamente os e-mails e pagamentos disparados no passado.', isCorrect: false },
        { id: 'B', text: 'Conceder autonomia em proporção direta à facilidade de reversão da ação, impondo portões de aprovação humana (HITL) para ações irreversíveis ou de impacto externo.', isCorrect: true },
        { id: 'C', text: 'Forçar o usuário a aprovar manualmente todas as leituras de arquivos e pesquisas web.', isCorrect: false },
        { id: 'D', text: 'Garantir que a cada nova pergunta o modelo apague a memória do workspace corporativo.', isCorrect: false },
      ],
      explanation: 'Passos com alta reversibilidade (leitura, rascunho, tabelas locais) devem ter ampla autonomia para preservar velocidade. Passos com baixa reversibilidade (atualizar bancos, contatar clientes externos) exigem aprovação humana explícita.',
    },
    {
      id: 4,
      question: 'Quais são as 4 propriedades obrigatórias de um conjunto de contexto forte em fluxos de trabalho do ChatGPT Work?',
      options: [
        { id: 'A', text: 'Extenso, Acumulativo, Multimodal e Preditivo.', isCorrect: false },
        { id: 'B', text: 'Autoritativo, Atual, Delimitado (Scoped) e Interpretável.', isCorrect: true },
        { id: 'C', text: 'Criptografado, Desestruturado, Sintético e Genérico.', isCorrect: false },
        { id: 'D', text: 'Estritamente acadêmico, Paramétrico, Ilimitado e Autogerado.', isCorrect: false },
      ],
      explanation: 'Conforme a nossa metodologia de processos agênticos, o contexto forte deve ser Autoritativo (sistema oficial de registro), Atual (vigência temporal ativa), Delimitado (apenas evidência que altera a decisão) e Interpretável (semântica e jargões mapeados).',
    },
  ];

  const currentQ = questions[currentQuestion];
  const userChoice = selectedAnswers[currentQuestion];

  const handleSelect = (optionId) => {
    if (showFeedback) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: optionId });
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowFeedback(false);
  };

  // Score count
  const score = Object.entries(selectedAnswers).reduce((acc, [qIdx, ansId]) => {
    const q = questions[parseInt(qIdx)];
    const opt = q.options.find(o => o.id === ansId);
    return opt?.isCorrect ? acc + 1 : acc;
  }, 0);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '20px',
        height: '100%',
        alignItems: 'stretch',
      }}
    >
      {/* Question & Options Card */}
      <div
        className="card-base"
        style={{
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--infnet-dark-blue)',
                background: '#EDF5FA',
                padding: '2px 10px',
                borderRadius: '12px',
                border: '1px solid #D0E3F0',
              }}
            >
              QUESTÃO 0{currentQuestion + 1} DE 0{questions.length}
            </span>

            <div style={{ display: 'flex', gap: '6px' }}>
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background:
                      idx === currentQuestion
                        ? 'var(--infnet-cyan)'
                        : selectedAnswers[idx]
                        ? '#CBD5E1'
                        : '#E2E8F0',
                  }}
                />
              ))}
            </div>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.05rem',
              color: 'var(--infnet-dark-blue)',
              fontWeight: 700,
              lineHeight: 1.35,
              marginBottom: '16px',
            }}
          >
            {currentQ.question}
          </h3>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {currentQ.options.map((opt) => {
              const isSelected = userChoice === opt.id;
              let optionStyle = {
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                background: '#FFFFFF',
                cursor: showFeedback ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.8rem',
                color: '#334155',
                lineHeight: 1.35,
                transition: 'all 0.15s ease',
              };

              if (showFeedback) {
                if (opt.isCorrect) {
                  optionStyle.background = '#F0FDF4';
                  optionStyle.border = '2px solid #86EFAC';
                  optionStyle.color = '#166534';
                  optionStyle.fontWeight = 600;
                } else if (isSelected && !opt.isCorrect) {
                  optionStyle.background = '#FEF2F2';
                  optionStyle.border = '2px solid #FCA5A5';
                  optionStyle.color = '#991B1B';
                }
              } else if (isSelected) {
                optionStyle.border = '2px solid var(--infnet-cyan)';
                optionStyle.background = '#EFF6FF';
              }

              return (
                <div
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  style={optionStyle}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: opt.isCorrect && showFeedback ? '#86EFAC' : '#F1F5F9',
                      color: 'var(--infnet-dark-blue)',
                      flexShrink: 0,
                    }}
                  >
                    {opt.id}
                  </span>
                  <span>{opt.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Action */}
        <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'flex-end' }}>
          {showFeedback && currentQuestion < questions.length - 1 && (
            <button
              onClick={handleNext}
              style={{
                background: 'var(--infnet-dark-blue)',
                color: '#FFFFFF',
                border: 'none',
                padding: '8px 18px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Próxima Questão →
            </button>
          )}

          {showFeedback && currentQuestion === questions.length - 1 && (
            <button
              onClick={handleReset}
              style={{
                background: 'var(--infnet-green-accent)',
                color: '#FFFFFF',
                border: 'none',
                padding: '8px 18px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <RotateCcw size={16} /> Reiniciar Quiz
            </button>
          )}
        </div>
      </div>

      {/* Rationale & Score Card */}
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
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: '#0369A1',
                fontWeight: 700,
                background: '#EDF5FA',
                padding: '2px 8px',
                borderRadius: '4px',
              }}
            >
              PAINEL DE FIXAÇÃO
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Award size={18} color="var(--infnet-dark-blue)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '0.9rem', color: 'var(--infnet-dark-blue)' }}>
                {score} / {questions.length} Acertos
              </span>
            </div>
          </div>

          {showFeedback ? (
            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '14px',
                animation: 'fadeIn 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <CheckCircle2 size={18} color="var(--status-success-text)" />
                <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '0.92rem', color: 'var(--infnet-dark-blue)', fontWeight: 700 }}>
                  Fundamentação Técnica
                </h4>
              </div>
              <p style={{ fontSize: '0.78rem', color: '#334155', lineHeight: 1.45 }}>
                {currentQ.explanation}
              </p>
            </div>
          ) : (
            <div
              style={{
                background: '#F8FAFC',
                border: '1px dashed #CBD5E1',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
                color: '#64748B',
                fontSize: '0.8rem',
              }}
            >
              <HelpCircle size={28} color="#94A3B8" style={{ marginBottom: '8px' }} />
              <p>Selecione uma das opções à esquerda para avaliar sua resposta com o formalismo do curso.</p>
            </div>
          )}
        </div>

        <div
          style={{
            marginTop: '12px',
            padding: '8px 12px',
            background: '#EDF5FA',
            borderRadius: '6px',
            fontSize: '0.72rem',
            color: 'var(--infnet-dark-blue)',
            textAlign: 'center',
          }}
        >
          Processos Agênticos com ChatGPT Work • Pós-Graduação EAD Infnet
        </div>
      </div>
    </div>
  );
}
