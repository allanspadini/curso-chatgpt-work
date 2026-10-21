import React, { useState } from 'react';
import { Play, RotateCcw, GitBranch, Lock, Users } from 'lucide-react';

export default function ProjectDelegationAndCollaborationVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Preparar sem Agir (Aprovação Granular)', caption: 'Rascunhos são artefatos encenados; permissão de leitura nunca autoriza escrita' },
    { label: '2. Delegação de Projeto Focada', caption: 'Isolar projetos profundos sem copiar todo o histórico pessoal (privacidade e foco)' },
    { label: '3. Colaboração, Handoff & Rollout Piloto', caption: 'Transparência para equipe, pacote de handoff e piloto pequeno antes de agendar' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Header */}
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
            CAPÍTULO 10 • DELEGAÇÃO & COLABORAÇÃO
          </span>
          <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.92rem' }}>
            {steps[step].caption}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setStep(idx)}
              style={{
                padding: '5px 11px',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: idx === step ? '2px solid #0284C7' : '1px solid #CBD5E1',
                background: idx <= step ? '#EFF6FF' : '#FFFFFF',
                color: idx <= step ? '#0369A1' : '#64748B',
              }}
            >
              {s.label}
            </button>
          ))}
          <button
            onClick={() => setStep((prev) => (prev < 2 ? prev + 1 : 0))}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '5px 12px',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer',
              border: '1px solid #0A345D',
              background: '#0A345D',
              color: '#FFFFFF',
            }}
          >
            {step < 2 ? <Play size={13} /> : <RotateCcw size={13} />}
            {step < 2 ? 'Próximo Passo' : 'Reiniciar'}
          </button>
        </div>
      </div>

      {/* Main 3-Column Progressive Cards */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
        {/* Col 1: Granular Approvals */}
        <div
          style={{
            opacity: step >= 0 ? 1 : 0.25,
            transition: 'opacity 0.3s',
            background: '#FFFFFF',
            border: '2px solid #EA580C',
            borderRadius: '14px',
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '8px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Lock size={18} color="#C2410C" />
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#C2410C', fontFamily: 'var(--font-mono)' }}>
                1. PREPARAR SEM AGIR PREMATURAMENTE
              </div>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0A345D' }}>
                Aprovações Granulares & Não-Transitivas
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#0A345D' }}>Artefatos Encenados (Staged)</div>
              <div style={{ fontSize: '0.73rem', color: '#334155', marginTop: '2px' }}>
                Rascunhos de resposta, briefs de reunião, resumos de evidência e handoffs reduzem o custo da próxima decisão, mas <strong>permanecem não enviados</strong>.
              </div>
            </div>

            <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#991B1B' }}>Fronteiras de Permissão</div>
              <div style={{ fontSize: '0.72rem', color: '#7F1D1D', marginTop: '2px' }}>
                • Permissão para check Read-Only horário <strong>≠</strong> permissão para criar tarefa, editar doc, mover reunião ou contatar colega.<br />
                • Aprovar <strong>1 resposta</strong> <strong>≠</strong> autorizar respostas futuras na mesma thread!
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.73rem', color: '#C2410C', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
            ✓ Autoridade externa 100% com a pessoa
          </div>
        </div>

        {/* Col 2: Focused Project Delegation */}
        <div
          style={{
            opacity: step >= 1 ? 1 : 0.22,
            transition: 'opacity 0.35s',
            background: '#FFFFFF',
            border: '2px solid #0284C7',
            borderRadius: '14px',
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '8px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GitBranch size={18} color="#0284C7" />
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0369A1', fontFamily: 'var(--font-mono)' }}>
                2. DELEGAÇÃO SEM DUPLICAR CONTEXTO
              </div>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0A345D' }}>
                Thread Chief of Staff vs. Task de Projeto
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <div style={{ background: '#EFF6FF', border: '1px solid #93C5FD', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#0A345D' }}>Pacote Mínimo da Task Separada</div>
              <div style={{ fontSize: '0.72rem', color: '#334155', marginTop: '2px' }}>
                Passar apenas: <strong>objetivo, fontes relevantes, decisões já tomadas, restrições, questões abertas, entregável e limites de aprovação</strong>.
              </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#0A345D' }}>Higiene de Contexto & Não-Duplicação</div>
              <div style={{ fontSize: '0.72rem', color: '#334155', marginTop: '2px' }}>
                • Nunca copiar todo o histórico pessoal (risco de privacidade e perda de foco).<br />
                • Reusar task existente em vez de criar duplicata!
              </div>
            </div>

            <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '8px', padding: '7px 10px' }}>
              <div style={{ fontSize: '0.72rem', color: '#166534', fontWeight: 700 }}>
                <strong>Modelo em 4 Regras:</strong> Chief of Staff mantém visão transversal ➔ Tasks isolam trabalho profundo ➔ Usuário controla fronteira ➔ Artefatos voltam à fonte oficial.
              </div>
            </div>
          </div>
        </div>

        {/* Col 3: Collaboration, Handoff & Practical Rollout */}
        <div
          style={{
            opacity: step >= 2 ? 1 : 0.22,
            transition: 'opacity 0.35s',
            background: '#FFFFFF',
            border: '2px solid #16A34A',
            borderRadius: '14px',
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '8px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={18} color="#166534" />
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#166534', fontFamily: 'var(--font-mono)' }}>
                3. COLABORAÇÃO, HANDOFF & ROLLOUT
              </div>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0A345D' }}>
                Contra a Opacidade Pessoal
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '7px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.77rem', color: '#0A345D' }}>Anatomia de um Handoff de Equipe</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                Desfecho esperado, estado atual, evidências, restrições, dependências, decisões tomadas vs. pendentes e próximo dono (removendo contexto pessoal não autorizado!).
              </div>
            </div>

            <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '8px', padding: '7px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.77rem', color: '#0369A1' }}>Diagnóstico de Falha na Camada Certa</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                Quando o brief falha, identificar a causa (fonte ausente, regra de prioridade, dono ambíguo, dado defasado) e atualizar: <strong>conexão, project instruction, skill, schedule ou prompt</strong>.
              </div>
            </div>

            <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '8px', padding: '7px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.77rem', color: '#9A3412' }}>Rollout Prático (Comece Pequeno)</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                1 usuário + poucas fontes + brief Read-Only + 1 período de revisão. Só agende após calibrar o limiar de mudança!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
          <strong>Princípio do Capítulo 10:</strong> Produtividade vem de um loop operacional confiável, não de conectar o maior número possível de sistemas.
        </span>
      </div>
    </div>
  );
}
