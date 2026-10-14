import React from 'react';
import { RefreshCw, FileText, CheckCircle2, AlertOctagon, ArrowRight, RotateCcw, GitPullRequest, FileCheck } from 'lucide-react';

export default function FixTheSkillVisual() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '2px 8px',
        gap: '12px',
      }}
    >
      {/* Banner Superior Explicativo */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '12px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: '#0A345D',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <RotateCcw size={20} color="#1BB5D8" />
          </div>
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0A345D' }}>
              A Regra de Ouro: Corrija a Skill, Nunca a Saída Isolada
            </div>
            <div style={{ fontSize: '0.82rem', color: '#475569' }}>
              O erro gerado pelo agente não é uma interrupção, mas o combustível exato para tornar sua Skill imbatível para o futuro.
            </div>
          </div>
        </div>
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #CBD5E1',
            borderRadius: '20px',
            padding: '4px 14px',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#0A345D',
            fontFamily: 'var(--font-mono)',
          }}
        >
          CICLO DE RETROALIMENTAÇÃO
        </div>
      </div>

      {/* Grid Principal: Comparação do Comportamento */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          flex: 1,
        }}
      >
        {/* Card 1: A Armadilha da Correção Manual */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #FCA5A5',
            borderRadius: '14px',
            padding: '18px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span
                style={{
                  background: '#FEF2F2',
                  color: '#991B1B',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid #FCA5A5',
                }}
              >
                A ARMADILHA COMUM
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#991B1B' }}>
                Corrigir a Saída Downstream na Mão
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#991B1B',
                marginBottom: '10px',
              }}
            >
              Desperdício de Conhecimento em Artefatos Descartáveis
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '12px' }}>
              <div
                style={{
                  background: '#FEF2F2',
                  border: '1px solid #FECACA',
                  borderRadius: '8px',
                  padding: '10px 14px',
                }}
              >
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#991B1B', marginBottom: '4px' }}>
                  1. A IA comete um deslize
                </div>
                <div style={{ fontSize: '0.76rem', color: '#7F1D1D' }}>
                  Esqueceu de conferir uma retenção de tributo ou gerou uma tabela com formatação imperfeita.
                </div>
              </div>

              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                }}
              >
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                  2. A reação errada do usuário
                </div>
                <div style={{ fontSize: '0.76rem', color: '#64748B' }}>
                  Abre o Word ou Markdown gerado e arruma o texto manualmente para entregar rápido para a chefia.
                </div>
              </div>

              <div
                style={{
                  background: '#FEF2F2',
                  border: '1px solid #FECACA',
                  borderRadius: '8px',
                  padding: '10px 14px',
                }}
              >
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#991B1B', marginBottom: '4px' }}>
                  3. O resultado desastroso
                </div>
                <div style={{ fontSize: '0.76rem', color: '#7F1D1D' }}>
                  Na semana seguinte, a IA comete exatamente o mesmo erro pela quarta vez, porque nunca aprendeu a regra!
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: '#FFF1F2',
              border: '1px solid #FECDD3',
              borderRadius: '8px',
              padding: '8px 12px',
              fontSize: '0.78rem',
              color: '#9F1239',
              fontWeight: 600,
            }}
          >
            <strong>Custo Oculto:</strong> Você vira o "revisor eterno" de saídas medíocres da máquina.
          </div>
        </div>

        {/* Card 2: A Solução de Engenharia: Corrigir a Skill */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #86EFAC',
            borderRadius: '14px',
            padding: '18px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span
                style={{
                  background: '#F0FDF4',
                  color: '#166534',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid #86EFAC',
                }}
              >
                A PRÁTICA EXECUTIVA CORRETA
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#166534' }}>
                Refinamento no Lócus Central (SKILL.md)
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#166534',
                marginBottom: '10px',
              }}
            >
              A Especificação é o Único Ativo que se Acumula
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '12px' }}>
              <div
                style={{
                  background: '#F0FDF4',
                  border: '1px solid #BBF7D0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                }}
              >
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#166534', marginBottom: '4px' }}>
                  1. Identifique o desvio imediatamente
                </div>
                <div style={{ fontSize: '0.76rem', color: '#14532D' }}>
                  Trate a falha como evidência de uma regra de domínio não documentada.
                </div>
              </div>

              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                }}
              >
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#0A345D', marginBottom: '4px' }}>
                  2. Atualize o arquivo SKILL.md
                </div>
                <div style={{ fontSize: '0.76rem', color: '#475569' }}>
                  Insira uma instrução de uma linha ou peça ao próprio agente: <em>"Atualize a Skill para nunca mais esquecer a regra X."</em>
                </div>
              </div>

              <div
                style={{
                  background: '#F0FDF4',
                  border: '1px solid #BBF7D0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                }}
              >
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#166534', marginBottom: '4px' }}>
                  3. O ganho permanente
                </div>
                <div style={{ fontSize: '0.76rem', color: '#14532D' }}>
                  A correção se torna definitiva para você, para a equipe e para todas as execuções dos próximos 5 anos!
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: '#F0FDF4',
              border: '1px solid #86EFAC',
              borderRadius: '8px',
              padding: '8px 12px',
              fontSize: '0.78rem',
              color: '#166534',
              fontWeight: 600,
            }}
          >
            <strong>A Especificação como Ativo:</strong> Saídas são descartáveis; a Skill acumula o cérebro da empresa.
          </div>
        </div>
      </div>

      {/* Faixa Inferior: O Truque Operacional do status.md */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '10px',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileCheck size={18} color="#0369A1" />
          <span style={{ fontSize: '0.82rem', color: '#0A345D', fontWeight: 700 }}>
            Ponte Entre Sessões Longas (<code style={{ fontFamily: 'var(--font-mono)' }}>status.md</code>):
          </span>
        </div>
        <div style={{ fontSize: '0.8rem', color: '#334155', fontWeight: 600 }}>
          Ao final do dia, salve o estado: <span style={{ color: '#0369A1' }}>[Concluído]</span>, <span style={{ color: '#C2410C' }}>[Pendente]</span> e <span style={{ color: '#15803D' }}>[Próximos Passos]</span>. A próxima sessão retoma em segundos!
        </div>
      </div>
    </div>
  );
}
