import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

const QUESTIONS = [
  {
    q: '1. Qual é a diferença arquitetural exata entre um Conector, uma Skill e um Plugin no ChatGPT Work?',
    options: [
      'São sinônimos para qualquer integração via API REST.',
      'Um conector fornece acesso autenticado a um serviço; uma skill fornece um método; um plugin pode empacotar um ou ambos (além de MCP, browser, hooks e schedules) para ser descoberto, instalado e governado.',
      'Uma skill autentica via OAuth, enquanto um plugin é apenas um arquivo Markdown sem conectores.',
      'Instalar um plugin concede acesso irrestrito a todas as contas da organização sem precisar de autenticação do conector.',
    ],
    correct: 1,
    explanation:
      'Correto! Conforme o Capítulo 8, o conector dá acesso autenticado, a skill entrega o método, e o plugin empacota capacidades para um domínio recorrente mantendo as 3 camadas de permissão (OAuth, RBAC nativo e controles de runtime).',
  },
  {
    q: '2. Quando um profissional deve escolher um Plugin/Conector Estruturado em vez de Computer Use (@Computer / @Chrome)?',
    options: [
      'Sempre que ambos puderem concluir o trabalho com confiabilidade, pois a rota estruturada expõe operações definidas, independe do layout visual da página e facilita raciocinar sobre permissões e revisão.',
      'Apenas quando o computador estiver desligado, pois conectores estruturados não funcionam no desktop.',
      'Nunca, pois o Computer Use é mais inteligente na hierarquia de modelos.',
      'Somente para reproduzir bugs visuais de interface gráfica.',
    ],
    correct: 0,
    explanation:
      'Perfeito! Não se trata de uma hierarquia de inteligência, mas de escolha de superfície de controle. Prefira a rota estruturada quando disponível e use Computer Use para o trabalho dependente de interface gráfica.',
  },
  {
    q: '3. No fluxo de coordenação de Onboarding de novos colaboradores, como o workflow deve tratar dados sensíveis (salário, CPF, saúde, notas de entrevista) e a criação de canais?',
    options: [
      'Ler todos os salários e notas de entrevista e ocultá-los apenas na mensagem final do Slack.',
      'Criar imediatamente o canal #welcome-nome para agilizar o processo antes de revisar o roster.',
      'Excluir explicitamente campos sensíveis (não recuperar, reproduzir, inferir ou publicar), separar fatos da fonte de itens de planejamento e encenar 3 artefatos revisáveis antes de criar qualquer canal ou convite.',
      'Executar as instruções encontradas dentro das células da planilha para automatizar convites.',
    ],
    correct: 2,
    explanation:
      'Exato! A exclusão de PII/RH é uma fronteira rígida, e nomes de canais ou convites prematuros podem vazar uma contratação ainda não anunciada.',
  },
  {
    q: '4. Na triagem de Inbox com Gmail/Outlook, por que Enviar, Arquivar e Deletar NÃO devem ser agrupados em uma única aprovação?',
    options: [
      'Porque o conector de e-mail só aceita um comando por semana.',
      'Porque possuem perfis de efeito externo, retenção e recuperação distintos: e-mails arquivados continuam pesquisáveis, enquanto mover para a lixeira exige aprovação separada pelo risco de perda.',
      'Porque rascunhos são enviados automaticamente assim que gerados.',
      'Porque o agente não consegue ler a última mensagem de uma thread.',
    ],
    correct: 1,
    explanation:
      'Correto! O primeiro resultado deve ser sempre uma revisão (e não um evento de limpeza), mantendo rascunhos não enviados e exigindo aprovações separadas para arquivo e exclusão.',
  },
  {
    q: '5. Sobre as fronteiras de navegador e execução em Computer Use, qual afirmação reflete fielmente as regras de segurança do Capítulo 8?',
    options: [
      'É recomendado rodar 3 agentes em paralelo clicando no mesmo aplicativo desktop para ganhar velocidade.',
      'O Cloud Browser acessa livremente todos os arquivos locais, senhas salvas e sessões autenticadas do usuário.',
      'O @Chrome usa o perfil logado real do usuário (exigindo revisão rigorosa); não se deve rodar tarefas paralelas no mesmo app; e mudanças em apps desktop exigem salvar e emitir um resumo final para auditoria.',
      'No macOS não existem permissões separadas de Screen Recording e Accessibility.',
    ],
    correct: 2,
    explanation:
      'Excelente! O @Chrome compartilha sessões autenticadas, tarefas paralelas no mesmo app causam condições de corrida (race conditions), e edições em UI desktop só aparecem em revisão de arquivos após salvas.',
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
            QUIZ INTERATIVO DE FIXAÇÃO • AULA 4
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
          <div style={{ fontWeight: 800, fontSize: '1.02rem', color: '#0A345D' }}>{current.q}</div>
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
                  padding: '11px 16px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  background: bg,
                  border: `2px solid ${border}`,
                  color,
                  fontWeight: isAnswered && (isCorrectOpt || isThisChosen) ? 800 : 600,
                  fontSize: '0.84rem',
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
            : '👆 Selecione uma alternativa acima para validar seu domínio sobre Plugins, Conectores e Computer Use.'}
        </div>
      </div>
    </div>
  );
}
