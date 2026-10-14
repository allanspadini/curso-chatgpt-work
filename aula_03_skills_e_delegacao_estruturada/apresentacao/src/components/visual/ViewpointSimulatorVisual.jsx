import React from 'react';
import { Eye, ShieldAlert, CheckCircle2, XCircle, ArrowRight, UserCheck, Flame, Scale } from 'lucide-react';

export default function ViewpointSimulatorVisual() {
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
            <Eye size={20} color="#1BB5D8" />
          </div>
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0A345D' }}>
              Simulador de Pontos de Vista: Red-Teaming de Propostas e Planos
            </div>
            <div style={{ fontSize: '0.82rem', color: '#475569' }}>
              Codifique perspectivas isoladas e afiadas em vez de pedir revisões genéricas ou "comitês sintéticos" diluídos.
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
          PADRÃO 2 DE AUTORIA
        </div>
      </div>

      {/* Grid Principal: Arquitetura do Padrão */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '16px',
          flex: 1,
        }}
      >
        {/* Lado Esquerdo: As 3 Lentes Afiadas Isoladas */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #D5E3EC',
            borderRadius: '14px',
            padding: '18px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
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
                MÉTODO RECOMENDADO
              </span>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0A345D' }}>
                Skills de Ponto de Vista Único (Single-Viewpoint Skills)
              </span>
            </div>

            <p style={{ fontSize: '0.82rem', color: '#475569', marginBottom: '14px' }}>
              Em vez de "revise meu projeto", submeta o mesmo plano a três testes de estresse independentes:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Lente 1 */}
              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#FEF2F2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#991B1B',
                  }}
                >
                  <Flame size={18} color="#991B1B" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#991B1B' }}>
                      Skill: Auditor Financeiro Cético
                    </div>
                    <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>Red-Team Financeiro</span>
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#475569' }}>
                    Busca custos ocultos, questiona o ROI otimista e ataca premissas de receita insustentáveis.
                  </div>
                </div>
              </div>

              {/* Lente 2 */}
              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#EFF6FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1E40AF',
                  }}
                >
                  <ShieldAlert size={18} color="#1E40AF" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#1E40AF' }}>
                      Skill: Guardião de Risco & Compliance
                    </div>
                    <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>Red-Team Regulatório</span>
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#475569' }}>
                    Examina riscos de vazamento de dados (LGPD), responsabilidade jurídica e conformidade contratual.
                  </div>
                </div>
              </div>

              {/* Lente 3 */}
              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#FFF7ED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C2410C',
                  }}
                >
                  <UserCheck size={18} color="#C2410C" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#C2410C' }}>
                      Skill: Operador Pragmático de Campo
                    </div>
                    <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>Red-Team Operacional</span>
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#475569' }}>
                    Questiona o prazo real da equipe, curva de aprendizado dos funcionários e atritos de implantação.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: '#F0FDF4',
              border: '1px solid #BBF7D0',
              borderRadius: '8px',
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8rem',
              color: '#166534',
              fontWeight: 600,
            }}
          >
            <CheckCircle2 size={16} color="#166534" />
            <span>
              <strong>Papel do Humano:</strong> Ler os 3 pareceres divergentes e tomar a decisão com visão de 360°.
            </span>
          </div>
        </div>

        {/* Lado Direito: A Armadilha de Média dos Especialistas */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
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
                A REGRA DE OURO
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.22rem',
                fontWeight: 700,
                color: '#991B1B',
                marginBottom: '10px',
              }}
            >
              "Don't Average Your Experts"
            </h3>

            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.45, marginBottom: '14px' }}>
              A tentação mais comum é criar um <strong>"painel sintético de diretoria"</strong> colocando 5 personas para debater entre si dentro do mesmo prompt.
            </p>

            <div
              style={{
                background: '#FEF2F2',
                border: '1px solid #FECACA',
                borderRadius: '8px',
                padding: '12px 14px',
                marginBottom: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <XCircle size={16} color="#991B1B" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#991B1B' }}>
                  O que acontece na prática:
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#7F1D1D', lineHeight: 1.4 }}>
                As vozes se anulam mutuamente nos pesos probabilísticos da IA. O resultado é um <strong>consenso corporativo burocrático e morno</strong>, sem arestas e inútil para a estratégia real.
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Scale size={16} color="#0A345D" />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0A345D' }}>
                  A Lei do Julgamento Executivo:
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#475569' }}>
                O valor estratégico está na <em>diferença e na tensão</em> entre os pontos de vista. Quem faz a síntese é o líder humano, nunca o modelo.
              </div>
            </div>
          </div>

          <div
            style={{
              background: '#FFF7ED',
              border: '1px solid #FDBA74',
              borderRadius: '8px',
              padding: '8px 12px',
              fontSize: '0.76rem',
              color: '#9A3412',
              fontWeight: 600,
            }}
          >
            <strong>Conclusão:</strong> 1 Skill = 1 Ponto de Vista Afiado. Rode separadamente e leia as críticas lado a lado.
          </div>
        </div>
      </div>

      {/* Faixa Inferior de Síntese */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '10px',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 600 }}>
          <strong style={{ color: '#0A345D' }}>Exemplo Prático de Mercado:</strong> Repositório do autor Pawel Huryn (<code style={{ fontFamily: 'var(--font-mono)', color: '#0369A1' }}>strategy-red-team</code>).
        </div>
        <div style={{ fontSize: '0.82rem', color: '#1E293B', fontWeight: 700 }}>
          Ataca as premissas estruturais do documento para torná-lo à prova de balas antes da reunião de diretoria.
        </div>
      </div>
    </div>
  );
}
