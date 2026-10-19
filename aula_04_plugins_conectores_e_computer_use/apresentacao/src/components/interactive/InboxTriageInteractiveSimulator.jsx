import React, { useState } from 'react';
import { BellRing, FileEdit, Archive, CalendarClock, CheckCircle2 } from 'lucide-react';

const GROUPS = [
  {
    id: 'attention',
    title: '1. Needs Attention Now',
    subtitle: 'Exige decisão ou ação imediata do titular',
    color: '#DC2626',
    bg: '#FEF2F2',
    border: '#FCA5A5',
    icon: BellRing,
    examples: [
      {
        sender: 'ciso@empresa.com',
        subject: '[URGENTE] Alerta de Segurança: Revisão de Token OAuth',
        reason: 'Alerta de segurança corporativa ativo (sem resposta posterior)',
        action: 'Confirmar escopo da conta até 18h',
        threadStatus: 'Última mensagem: aguardando ação do titular',
      },
      {
        sender: 'diretora.cliente@parceiro.com',
        subject: 'Aprovação do Escopo Comercial Q4',
        reason: 'Solicitação direta de cliente + compromisso assumido',
        action: 'Validar cronograma anexo',
        threadStatus: 'Última mensagem: cliente cobrou retorno hoje',
      },
    ],
    ruleNote: 'Manter pedidos humanos, alertas de segurança e threads ativas sempre visíveis no topo.',
  },
  {
    id: 'draft',
    title: '2. Needs a Draft Reply',
    subtitle: 'Rascunho útil onde os fatos já estão disponíveis',
    color: '#0284C7',
    bg: '#EFF6FF',
    border: '#93C5FD',
    icon: FileEdit,
    examples: [
      {
        sender: 'pm@empresa.com',
        subject: 'Status da Migração do Conector Drive',
        reason: 'Pergunta factual cuja resposta consta na nota do projeto',
        action: 'Rascunho criado (NÃO enviado) na voz do titular',
        threadStatus: 'Fatos verificados no documento aprovado',
      },
    ],
    ruleNote: 'Usar Sent Mail apenas para inferir o tom do autor (excluir encaminhados, citações e newsletters). Nunca inventar compromissos!',
  },
  {
    id: 'cleanup',
    title: '3. Can Be Cleaned Up After Review',
    subtitle: 'Notificações repetitivas e baixo valor agrupados',
    color: '#166534',
    bg: '#F0FDF4',
    border: '#86EFAC',
    icon: Archive,
    examples: [
      {
        sender: 'noreply@ci-system.com (42 mensagens)',
        subject: 'Build #8412 Succeeded - Automated Notification',
        reason: 'Notificação automática repetitiva de baixo valor operacional',
        action: 'Proposto para lote de Arquivamento após revisão',
        threadStatus: 'Exemplos (3) + Contagem (42) exibidos para julgar a regra',
      },
    ],
    ruleNote: 'Mostrar exemplos e contagens suficientes antes de arquivar. Se uma thread antiga já foi resolvida na última resposta, não reabrir!',
  },
  {
    id: 'schedule',
    title: '4. Revisit on a Date or Schedule',
    subtitle: 'Importante, mas vinculado a janela futura',
    color: '#C2410C',
    bg: '#FFF7ED',
    border: '#FDBA74',
    icon: CalendarClock,
    examples: [
      {
        sender: 'financas@empresa.com',
        subject: 'Preparação do Fechamento Trimestral (Próximo Mês)',
        reason: 'Demanda legítima cuja janela operacional abre no dia 1º',
        action: 'Programar lembrete para revisão agendada',
        threadStatus: 'Fora da janela imediata, mas requer acompanhamento',
      },
    ],
    ruleNote: 'Evita poluir a fila imediata sem perder compromissos futuros de vista.',
  },
];

export default function InboxTriageInteractiveSimulator() {
  const [activeGroup, setActiveGroup] = useState(0);
  const current = GROUPS[activeGroup];
  const Icon = current.icon;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Top Interactive Bar */}
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
              background: '#0284C7',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            SIMULADOR INTERATIVO 3 • OS 4 GRUPOS DE TRIAGEM
          </span>
          <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.92rem' }}>
            Inspeção da Caixa de Entrada Sem Ceder o Julgamento nem a Voz do Titular
          </span>
        </div>
        <span style={{ fontSize: '0.76rem', color: '#0369A1', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
          Clique nos 4 grupos operacionais
        </span>
      </div>

      {/* 4 Group Selector Pills */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {GROUPS.map((g, idx) => {
          const GIcon = g.icon;
          const isSelected = idx === activeGroup;
          return (
            <button
              key={g.id}
              onClick={() => setActiveGroup(idx)}
              style={{
                background: isSelected ? g.bg : '#FFFFFF',
                border: isSelected ? `2.5px solid ${g.color}` : '1.5px solid #CBD5E1',
                borderRadius: '12px',
                padding: '10px 12px',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: g.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <GIcon size={20} color={g.color} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#0A345D' }}>{g.title}</div>
                <div style={{ fontSize: '0.7rem', color: '#475569' }}>{g.subtitle}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Group Inspection Panel */}
      <div
        style={{
          flex: 1,
          background: '#FFFFFF',
          border: `2px solid ${current.border}`,
          borderRadius: '14px',
          padding: '14px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Icon size={22} color={current.color} />
            <span style={{ fontWeight: 800, fontSize: '1rem', color: '#0A345D' }}>
              {current.title} — {current.subtitle}
            </span>
          </div>
          <span
            style={{
              background: current.bg,
              color: current.color,
              border: `1px solid ${current.border}`,
              padding: '4px 12px',
              borderRadius: '14px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            1ª PASSAGEM: SOMENTE LEITURA + LINKS DE ORIGEM
          </span>
        </div>

        {/* Example Threads Table */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {current.examples.map((ex, i) => (
            <div
              key={i}
              style={{
                background: '#F8FAFC',
                border: '1.5px solid #CBD5E1',
                borderRadius: '10px',
                padding: '10px 16px',
                display: 'grid',
                gridTemplateColumns: '1.2fr 1.2fr 1fr',
                gap: '12px',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0369A1', fontFamily: 'var(--font-mono)' }}>
                  {ex.sender}
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0A345D', marginTop: '2px' }}>
                  {ex.subject}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: '#475569', fontWeight: 700 }}>Motivo & Verificação de Thread:</div>
                <div style={{ fontSize: '0.8rem', color: '#1E293B', fontWeight: 700 }}>{ex.reason}</div>
                <div style={{ fontSize: '0.72rem', color: '#166534', fontFamily: 'var(--font-mono)' }}>
                  ✓ {ex.threadStatus}
                </div>
              </div>
              <div
                style={{
                  background: current.bg,
                  border: `1px solid ${current.border}`,
                  borderRadius: '8px',
                  padding: '8px 10px',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  color: '#0A345D',
                }}
              >
                🎯 {ex.action}
              </div>
            </div>
          ))}
        </div>

        {/* Rule Footer inside card */}
        <div
          style={{
            background: '#EFF6FF',
            border: '1px solid #BAE6FD',
            borderRadius: '10px',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <CheckCircle2 size={18} color="#0284C7" />
          <span style={{ fontSize: '0.82rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Diretriz de Engenharia:</strong> {current.ruleNote}
          </span>
        </div>
      </div>
    </div>
  );
}
