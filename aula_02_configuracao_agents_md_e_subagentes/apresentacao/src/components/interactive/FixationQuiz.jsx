import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw } from 'lucide-react';

export default function FixationQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'Como o Codex resolve conflitos de regras quando existem arquivos de instruções no escopo global (~/.codex), na raiz do repositório e em um subdiretório local?',
      options: [
        { id: 'A', text: 'O arquivo global substitui silenciosamente todos os arquivos do repositório, descartando regras locais.', isCorrect: false },
        { id: 'B', text: 'O Codex concatena os arquivos de cima para baixo (top-down), de modo que o arquivo mais próximo do diretório atual de trabalho (CWD) aparece por último no prompt combinado e tem precedência semântica.', isCorrect: true },
        { id: 'C', text: 'O modelo faz uma média ponderada dos tokens e sorteia aleatoriamente qual linter utilizar.', isCorrect: false },
        { id: 'D', text: 'Apenas arquivos com o nome AGENTS.override.md são carregados; todos os demais são ignorados por padrão.', isCorrect: false },
      ],
      explanation: 'O Codex unifica as diretrizes de forma linear Top-Down: Global ➔ Raiz ➔ Subdiretórios até o CWD. Como os modelos de linguagem processam texto sequencialmente, instruções no final do prompt combinado possuem maior peso de atenção, garantindo soberania ao nó mais específico.',
    },
    {
      id: 2,
      question: 'O que ocorre quando o tamanho acumulado das instruções na cadeia AGENTS.md atinge o teto definido por project_doc_max_bytes (32 KiB por padrão)?',
      options: [
        { id: 'A', text: 'O Codex encerra o processo com erro fatal e aborta a execução do agente.', isCorrect: false },
        { id: 'B', text: 'O Codex para de adicionar arquivos à cadeia; arquivos subsequentes ou de diretórios mais profundos são descartados, evitando saturação de memória.', isCorrect: true },
        { id: 'C', text: 'O modelo comprime automaticamente os arquivos adicionais com gzip no contexto do prompt.', isCorrect: false },
        { id: 'D', text: 'O limite é meramente consultivo e não tem nenhum impacto na quantidade de bytes injetada.', isCorrect: false },
      ],
      explanation: 'O Codex impõe um limite rígido (32.768 bytes por padrão) para preservar a densidade de atenção e o custo de inferência. Se a soma dos arquivos atingir esse teto, arquivos adicionais no caminho são sumariamente omitidos.',
    },
    {
      id: 3,
      question: 'Qual o principal benefício arquitetural de decompor tarefas volumosas (como testes e exploração de código) em subagentes em vez de rodar tudo na thread principal?',
      options: [
        { id: 'A', text: 'Eliminar a necessidade de modelos de linguagem, utilizando apenas expressões regulares.', isCorrect: false },
        { id: 'B', text: 'Prevenir Context Pollution e Context Rot na thread principal, executando tarefas ruidosas em threads isoladas e devolvendo apenas resumos destilados ao orquestrador.', isCorrect: true },
        { id: 'C', text: 'Permitir que o agente edite arquivos de produção sem passar por controle de versão.', isCorrect: false },
        { id: 'D', text: 'Reduzir a zero o consumo de tokens em toda a infraestrutura corporativa.', isCorrect: false },
      ],
      explanation: 'Subagentes desacoplam o processamento ruidoso (milhares de linhas de logs, compilações e leituras de arquivos). Eles retêm o ruído em suas próprias threads e devolvem apenas resumos estruturados com citações pontuais, mantendo o contexto principal limpo e focado.',
    },
    {
      id: 4,
      question: 'Quais são os três campos obrigatórios que todo arquivo declarativo de Custom Agent (.codex/agents/*.toml) deve possuir segundo a especificação oficial?',
      options: [
        { id: 'A', text: 'api_key, database_url e max_retries.', isCorrect: false },
        { id: 'B', text: 'name, description e developer_instructions.', isCorrect: true },
        { id: 'C', text: 'author, version e license.', isCorrect: false },
        { id: 'D', text: 'endpoint, timeout_sec e memory_limit.', isCorrect: false },
      ],
      explanation: 'Conforme a documentação oficial da OpenAI, todo custom agent em TOML requer obrigatoriamente "name" (identificador do agente), "description" (orientação para o orquestrador sobre quando usá-lo) e "developer_instructions" (diretrizes de comportamento).',
    },
    {
      id: 5,
      question: 'Em relação à segurança e integridade de repositórios corporativos, como deve ser calibrada a política de sandbox para subagentes exploradores e revisores?',
      options: [
        { id: 'A', text: 'Devem receber sempre privilégios totais de root e workspace-write para acelerar a correção de arquivos.', isCorrect: false },
        { id: 'B', text: 'Devem ser configurados estritamente com sandbox_mode = "read-only", assegurando o Princípio do Menor Privilégio e impedindo edições indevidas no código.', isCorrect: true },
        { id: 'C', text: 'A sandbox só deve ser ativada caso o subagente solicite explicitamente ao usuário.', isCorrect: false },
        { id: 'D', text: 'Subagentes não respeitam configurações de sandbox, pois operam fora do ambiente do Codex.', isCorrect: false },
      ],
      explanation: 'Pelo Princípio do Menor Privilégio, agentes cujo escopo é apenas mapeamento, auditoria de segurança ou pesquisa de documentação nunca devem ter permissão de escrita. Devem rodar travados em "read-only".',
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
          background: '#FFFFFF',
        }}
      >
        <div>
          {/* Progress Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle size={20} color="#0A345D" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--infnet-dark-blue)',
                }}
              >
                QUESTÃO {currentQuestion + 1} DE {questions.length}
              </span>
            </div>
            <span
              style={{
                fontSize: '0.74rem',
                color: '#0369A1',
                background: '#EDF5FA',
                padding: '2px 8px',
                borderRadius: '4px',
                fontWeight: 700,
              }}
            >
              Aula 2: AGENTS.md & Subagentes
            </span>
          </div>

          <h3
            style={{
              fontSize: '1rem',
              fontWeight: 800,
              color: 'var(--infnet-dark-blue)',
              fontFamily: 'var(--font-title)',
              lineHeight: '1.35',
              marginBottom: '16px',
            }}
          >
            {currentQ.question}
          </h3>

          {/* Options List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {currentQ.options.map((opt) => {
              const isSelected = userChoice === opt.id;
              let borderStyle = '1px solid #CBD5E1';
              let bgStyle = '#F8FAFC';
              let textStyle = '#1E293B';

              if (showFeedback) {
                if (opt.isCorrect) {
                  borderStyle = '2px solid #86EFAC';
                  bgStyle = '#F0FDF4';
                  textStyle = '#166534';
                } else if (isSelected && !opt.isCorrect) {
                  borderStyle = '2px solid #FCA5A5';
                  bgStyle = '#FEF2F2';
                  textStyle = '#991B1B';
                }
              } else if (isSelected) {
                borderStyle = '2px solid var(--infnet-cyan)';
                bgStyle = '#EFF6FF';
                textStyle = '#0369A1';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  disabled={showFeedback}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '9px 12px',
                    borderRadius: '8px',
                    border: borderStyle,
                    background: bgStyle,
                    color: textStyle,
                    textAlign: 'left',
                    cursor: showFeedback ? 'default' : 'pointer',
                    fontSize: '0.78rem',
                    lineHeight: '1.35',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      minWidth: '22px',
                      color: isSelected ? 'inherit' : '#64748B',
                    }}
                  >
                    {opt.id})
                  </span>
                  <span style={{ flex: 1 }}>{opt.text}</span>
                  {showFeedback && opt.isCorrect && (
                    <CheckCircle2 size={16} color="#166534" style={{ flexShrink: 0, marginTop: '2px' }} />
                  )}
                  {showFeedback && isSelected && !opt.isCorrect && (
                    <XCircle size={16} color="#991B1B" style={{ flexShrink: 0, marginTop: '2px' }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Next / Reset Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
          {showFeedback && currentQuestion < questions.length - 1 && (
            <button
              onClick={handleNext}
              style={{
                padding: '8px 16px',
                background: 'var(--infnet-dark-blue)',
                color: '#FFFFFF',
                borderRadius: '6px',
                border: 'none',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Próxima Questão ➔
            </button>
          )}
          {showFeedback && currentQuestion === questions.length - 1 && (
            <button
              onClick={handleReset}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                background: '#EDF5FA',
                border: '1px solid #D0E3F0',
                color: '#0A345D',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              <RotateCcw size={14} /> Refazer Quiz
            </button>
          )}
        </div>
      </div>

      {/* Right Column: Score & Detailed Pedagogical Feedback */}
      <div
        className="card-base"
        style={{
          padding: '20px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FFFFFF',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
              Desempenho & Fixação
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Award size={18} color="#7CB342" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.86rem', fontWeight: 800, color: '#0A345D' }}>
                {score} / {questions.length} Acertos
              </span>
            </div>
          </div>

          {/* Detailed Explanation */}
          {showFeedback ? (
            <div
              style={{
                background: currentQ.options.find(o => o.id === userChoice)?.isCorrect ? '#F0FDF4' : '#FFF7ED',
                border: currentQ.options.find(o => o.id === userChoice)?.isCorrect ? '1px solid #86EFAC' : '1px solid #FDBA74',
                borderRadius: '8px',
                padding: '14px',
              }}
            >
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: currentQ.options.find(o => o.id === userChoice)?.isCorrect ? '#166534' : '#9A3412',
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {currentQ.options.find(o => o.id === userChoice)?.isCorrect ? (
                  <>
                    <CheckCircle2 size={16} color="#166534" />
                    Resposta Exata!
                  </>
                ) : (
                  <>
                    <XCircle size={16} color="#991B1B" />
                    Atenção à Justificativa Técnica:
                  </>
                )}
              </div>
              <p style={{ fontSize: '0.76rem', color: '#1E293B', lineHeight: '1.45' }}>
                {currentQ.explanation}
              </p>
            </div>
          ) : (
            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '18px',
                textAlign: 'center',
                color: '#64748B',
                fontSize: '0.78rem',
              }}
            >
              Selecione uma alternativa para inspecionar o gabarito comentado e a fundamentação formal de engenharia.
            </div>
          )}
        </div>

        {/* Master Competencies Checklist */}
        <div style={{ background: '#EDF5FA', border: '1px solid #D0E3F0', borderRadius: '8px', padding: '12px' }}>
          <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0A345D', marginBottom: '6px' }}>
            CHECKLIST DE DOMÍNIO DA AULA 2:
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.72rem', color: '#334155' }}>
            <div>✓ Cadeia de precedência Top-Down (CWD wins)</div>
            <div>✓ Limite de 32 KiB (project_doc_max_bytes)</div>
            <div>✓ Isolamento de ruído com subagentes (Chroma)</div>
            <div>✓ TOML Schema oficial de Custom Agents</div>
            <div>✓ Sandbox Least Privilege em read-only</div>
          </div>
        </div>
      </div>
    </div>
  );
}
