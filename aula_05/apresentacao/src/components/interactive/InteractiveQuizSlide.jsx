import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

const QUESTIONS = [
  {
    q: '1. (Cap. 9) Ao criar ou editar documentos, planilhas e apresentações no ChatGPT Work, qual é a abordagem recomendada pelo processo em 3 passagens (Three-Pass Workflow)?',
    options: [
      'Gerar o arquivo final em um único prompt curto e compartilhá-lo imediatamente sem abrir o arquivo renderizado.',
      'Pass 1 (Plan): confirmar audiência, fontes, números e outline aguardando aprovação; Pass 2 (Build): construir preservando rastreabilidade e camadas imutáveis; Pass 3 (Verify): inspecionar lógica/fórmulas e falhas visuais no arquivo renderizado.',
      'Em planilhas, substituir automaticamente todas as células em branco por zero e misturar dados brutos e fórmulas na mesma aba.',
      'Pedir para "melhorar a política" permitindo que o agente reescreva cláusulas legais e numeração livremente.',
    ],
    correct: 1,
    explanation:
      'Correto! O Capítulo 9 estabelece que entregáveis substanciais devem seguir Plan ➔ Build ➔ Verify, separando a revisão de conteúdo da inspeção visual do arquivo renderizado.',
  },
  {
    q: '2. (Cap. 10) Como deve ser estruturado um Briefing Diário no estilo Work Chief of Staff e como funciona seu Limiar de Mudança Relevante (Meaningful-Change Threshold)?',
    options: [
      'Organizado em seções separadas por aplicativo ("E-mail", "Slack", "Agenda") e reenviado a cada hora mesmo quando nada mudou.',
      'Organizado em torno de ação e compromissos (Top Priorities, Meaningful Changes, Upcoming Commitments, Responses Required, Blocked, Can Wait, Prepared Next Steps), interrompendo apenas quando houver mudança material e permanecendo em silêncio caso contrário.',
      'Configurado para responder e-mails, mover reuniões e assumir compromissos automaticamente em nome do usuário.',
      'Sempre que uma fonte como a Agenda ou o Tracker estiver indisponível, o agente deve inventar os compromissos prováveis para não deixar lacunas.',
    ],
    correct: 1,
    explanation:
      'Perfeito! O briefing consolida evidências por projeto/ação, reporta fontes indisponíveis sem adivinhar, mantém rascunhos não enviados e usa o limiar de mudança relevante para evitar ruído.',
  },
  {
    q: '3. (Cap. 10) Quando uma iniciativa cresce além da thread diária do Chief of Staff e exige uma tarefa de projeto separada, como o contexto deve ser delegado?',
    options: [
      'Copiar todo o histórico pessoal de e-mails e mensagens do usuário para todas as tasks de projeto.',
      'Criar uma nova task duplicada a cada dia para o mesmo projeto.',
      'Passar apenas o contexto mínimo necessário (objetivo, fontes relevantes, decisões já tomadas, restrições, questões abertas, entregável e limites de aprovação) e reutilizar a task existente do projeto.',
      'Transferir autoridade irrestrita de envio externo para a nova task.',
    ],
    correct: 2,
    explanation:
      'Exato! Copiar todo o histórico gera risco de privacidade e dilui prioridades. O Chief of Staff mantém a visão transversal, enquanto tasks focadas operam em contexto isolado.',
  },
  {
    q: '4. (Cap. 11) Na limpeza e junção (join) de dados para relatórios confiáveis, quais são as regras inegociáveis do Capítulo 11?',
    options: [
      'Sobrescrever o arquivo CSV original, converter valores em branco para zero e excluir silenciosamente registros sem match (unmatched).',
      'Preservar o arquivo bruto intocado (limpar em cópia separada), verificar o grão da tabela (grain), preservar células vazias como vazias, remover linhas de TOTAL coladas, validar a unicidade das chaves antes do join e quantificar registros unmatched.',
      'Inventar identificadores faltantes para forçar 100% de match entre duas tabelas.',
      'Esconder todas as limitações e premissas no último apêndice do relatório.',
    ],
    correct: 1,
    explanation:
      'Correto! Proteger a fonte original, respeitar o grão, não transformar blank em zero, emitir a Data-Quality Note e quantificar registros unmatched são pilares da Rubrica 3.5.',
  },
  {
    q: '5. (Cap. 11) Sobre Dashboards Privados (Sites) e a escolha entre ChatGPT Work e Codex em fluxos de dados, assinale a correta:',
    options: [
      'O Site atualiza os dados sozinho sem precisar de uma tarefa agendada e já nasce público para toda a internet.',
      'Uma tarefa agendada do ChatGPT Work atualiza o dashboard; o Site permanece privado até aprovação explícita de acesso; usa-se Work para síntese e artefatos de negócio e Codex quando o projeto exige scripts reutilizáveis, testes, Git e reexecução.',
      'O Codex só serve para criar apresentações de slides, enquanto o ChatGPT Work só roda em terminais Linux sem interface.',
      'Em um dashboard executivo, deve-se ocultar a área de qualidade de dados e mostrar apenas variação percentual.',
    ],
    correct: 1,
    explanation:
      'Excelente! Uma Scheduled Task do Work atualiza o Site com limiar de mudança, mudanças de visibilidade exigem aprovação explícita, e Work + Codex se complementam com fronteira clara.',
  },
];

export default function InteractiveQuizSlide() {
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState({});

  const current = QUESTIONS[qIdx];
  const chosen = selected[qIdx];
  const isAnswered = chosen !== undefined;
  const totalCorrect = Object.keys(selected).filter((k) => selected[k] === QUESTIONS[k].correct).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Top Quiz Header */}
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
            QUIZ INTERATIVO DE FIXAÇÃO • AULA 5 (CAP. 9, 10 E 11)
          </span>
          <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.92rem' }}>
            Placar: {totalCorrect} / {QUESTIONS.length} acertos
          </span>
        </div>

        <div style={{ display: 'flex', gap: '6px' }}>
          {QUESTIONS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setQIdx(idx)}
              style={{
                padding: '5px 12px',
                borderRadius: '8px',
                fontSize: '0.76rem',
                fontWeight: 800,
                cursor: 'pointer',
                border: idx === qIdx ? '2px solid #0284C7' : '1px solid #CBD5E1',
                background:
                  selected[idx] !== undefined
                    ? selected[idx] === QUESTIONS[idx].correct
                      ? '#DCFCE7'
                      : '#FEE2E2'
                    : idx === qIdx
                    ? '#EFF6FF'
                    : '#FFFFFF',
                color: '#0A345D',
              }}
            >
              Q{idx + 1}
            </button>
          ))}
          <button
            onClick={() => {
              setSelected({});
              setQIdx(0);
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '5px 10px',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer',
              background: '#F8FAFC',
              border: '1px solid #CBD5E1',
              color: '#475569',
            }}
          >
            <RotateCcw size={13} /> Limpar
          </button>
        </div>
      </div>

      {/* Main Question Card */}
      <div
        style={{
          flex: 1,
          background: '#FFFFFF',
          border: '2px solid #D0E3F0',
          borderRadius: '14px',
          padding: '16px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <HelpCircle size={22} color="#0284C7" />
          <div style={{ fontWeight: 800, fontSize: '1.0rem', color: '#0A345D' }}>{current.q}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
          {current.options.map((opt, oIdx) => {
            const isThisChosen = chosen === oIdx;
            const isCorrectOpt = oIdx === current.correct;
            let bg = '#F8FAFC';
            let border = '#CBD5E1';
            let color = '#1E293B';

            if (isAnswered) {
              if (isCorrectOpt) {
                bg = '#F0FDF4';
                border = '#16A34A';
                color = '#166534';
              } else if (isThisChosen) {
                bg = '#FEF2F2';
                border = '#DC2626';
                color = '#991B1B';
              }
            }

            return (
              <button
                key={oIdx}
                onClick={() => setSelected((prev) => ({ ...prev, [qIdx]: oIdx }))}
                style={{
                  textAlign: 'left',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  background: bg,
                  border: `2px solid ${border}`,
                  color,
                  fontWeight: isAnswered && (isCorrectOpt || isThisChosen) ? 800 : 600,
                  fontSize: '0.83rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}
              >
                <span>
                  <strong>{String.fromCharCode(65 + oIdx)}.</strong> {opt}
                </span>
                {isAnswered && isCorrectOpt && <CheckCircle2 size={18} color="#16A34A" style={{ flexShrink: 0 }} />}
                {isAnswered && isThisChosen && !isCorrectOpt && <XCircle size={18} color="#DC2626" style={{ flexShrink: 0 }} />}
              </button>
            );
          })}
        </div>

        {/* Feedback Box */}
        <div
          style={{
            background: isAnswered ? (chosen === current.correct ? '#F0FDF4' : '#FFF7ED') : '#EFF6FF',
            border: `1.5px solid ${isAnswered ? (chosen === current.correct ? '#86EFAC' : '#FDBA74') : '#BAE6FD'}`,
            borderRadius: '10px',
            padding: '10px 16px',
            fontSize: '0.8rem',
            color: '#0A345D',
            fontWeight: 700,
          }}
        >
          {isAnswered
            ? current.explanation
            : '👆 Selecione uma alternativa acima para validar seu domínio sobre os Capítulos 9, 10 e 11.'}
        </div>
      </div>
    </div>
  );
}
