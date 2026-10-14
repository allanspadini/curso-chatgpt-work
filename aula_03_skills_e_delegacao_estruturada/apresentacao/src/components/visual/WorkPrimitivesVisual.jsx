import React from 'react';
import { Mic, FastForward, CheckSquare, Clock, ArrowRight, Sparkles, Coffee, AlertCircle } from 'lucide-react';

export default function WorkPrimitivesVisual() {
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
            <FastForward size={20} color="#1BB5D8" />
          </div>
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0A345D' }}>
              Novas Primitivas de Trabalho: Brain Dumping e Despacho Assíncrono
            </div>
            <div style={{ fontSize: '0.82rem', color: '#475569' }}>
              Quando a barreira manual desmorona, surgem hábitos corporativos inteiramente novos que economizam energia mental.
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
          NOVAS PRIMITIVAS OPERACIONAIS
        </div>
      </div>

      {/* Grid Principal com 2 Primitivas de Alto Impacto */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          flex: 1,
        }}
      >
        {/* Primitiva 1: Brain Dumping & Reativo */}
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span
                style={{
                  background: '#EDF5FA',
                  color: '#0A345D',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                PRIMITIVA 1: BRAIN DUMPING
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0369A1' }}>
                Voz Bruta ➔ Artefato Decisório
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#0A345D',
                marginBottom: '10px',
              }}
            >
              Do Despejo Desestruturado ao Plano de Ação
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '12px' }}>
              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Mic size={20} color="#0369A1" />
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E293B' }}>Despejo de Ideias ou Reuniões</div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B' }}>
                    Áudios gravados no celular, reuniões gravadas ou anotações desconexas sem preocupação com pontuação.
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Sparkles size={20} color="#15803D" />
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E293B' }}>Filtragem & Estruturação via Skill</div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B' }}>
                    A Skill extrai deliberações, responsáveis, prazos e minutas de e-mail prontas para envio.
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <FastForward size={20} color="#C2410C" />
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E293B' }}>Brain Dumping Reativo (Fim das Reuniões)</div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B' }}>
                    5 colaboradores gravam 2 minutos de reação honesta a um projeto; a Skill compila os prós e contras em segundos.
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
              padding: '8px 12px',
              fontSize: '0.78rem',
              color: '#166534',
              fontWeight: 600,
            }}
          >
            <strong>Gargalo Eliminado:</strong> Ninguém mais perde 3 horas pós-reunião transcrevendo ata ou redigindo tarefas operacionais.
          </div>
        </div>

        {/* Primitiva 2: Despacho das 6h da Manhã & Checkpoints */}
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span
                style={{
                  background: '#EDF5FA',
                  color: '#0A345D',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                PRIMITIVA 2: ASYNC DELEGATION
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0369A1' }}>
                O Despacho das 6h da Manhã
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#0A345D',
                marginBottom: '10px',
              }}
            >
              Trabalho em Segundo Plano e Gestão de Checkpoints
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '12px' }}>
              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Coffee size={20} color="#0369A1" />
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E293B' }}>Disparo Pré-Rotina (6:00 AM)</div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B' }}>
                    Enfileire 4 tarefas paralelas (triagem de e-mails, auditoria de relatórios, resumos de mercado) e saia para o café.
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Clock size={20} color="#15803D" />
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E293B' }}>Inversão de Espera (8:30 AM)</div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B' }}>
                    Quando você senta na sua mesa de trabalho, os resultados já estão prontos aguardando sua validação.
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <CheckSquare size={20} color="#C2410C" />
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E293B' }}>O Ponto Ótimo do Checkpoint Humano</div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B' }}>
                    Cedo demais = vira microgerenciamento; tarde demais = vira homologação cega (rubber-stamping).
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: '#EFF6FF',
              border: '1px solid #BFDBFE',
              borderRadius: '8px',
              padding: '8px 12px',
              fontSize: '0.78rem',
              color: '#1E40AF',
              fontWeight: 600,
            }}
          >
            <strong>Máxima do Cirurgião:</strong> <em>"Seu recurso escasso não é o tempo. É a sua capacidade de tomada de decisão!"</em>
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
          <strong style={{ color: '#0A345D' }}>O Foco da Produtividade Real:</strong> Substituir o esforço mecânico pela curadoria estratégica.
        </div>
        <div style={{ fontSize: '0.82rem', color: '#1E293B', fontWeight: 700 }}>
          A inteligência artificial coleta, processa e rascunha ➔ O ser humano revisa no checkpoint e decide.
        </div>
      </div>
    </div>
  );
}
