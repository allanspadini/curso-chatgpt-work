import React, { useState } from 'react';
import { Play, RotateCcw, MailWarning, Trash2, MessageSquareWarning } from 'lucide-react';

export default function InboxOverloadProblemVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. O Mito do "Delete Tudo"', caption: 'Inbox Zero não é apagar tudo que é antigo — é separar atenção real de ruído' },
    { label: '2. Três Erros de Automações Cegas', caption: 'Ressuscitar threads já resolvidas, perder voz do autor e inventar compromissos' },
    { label: '3. O Perigo da Aprovação Empacotada', caption: 'Misturar Enviar, Arquivar e Deletar em um único clique destrói a governança' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Top Step Controls */}
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
              background: '#FEF2F2',
              color: '#991B1B',
              border: '1px solid #FCA5A5',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            1. SITUAÇÃO-PROBLEMA 4 • GESTÃO DE INBOX
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

      {/* Main Progressive SVG */}
      <div
        style={{
          flex: 1,
          background: '#FFFFFF',
          border: '2px solid #D0E3F0',
          borderRadius: '14px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <svg viewBox="0 0 1180 390" style={{ width: '100%', height: '100%', maxHeight: '390px' }}>
          {/* STEP 1: The Flooded Inbox & Account Context (Left) */}
          <g style={{ opacity: step >= 0 ? 1 : 0.25, transition: 'opacity 0.3s' }}>
            <rect x="20" y="20" width="350" height="350" rx="16" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
            <rect x="40" y="38" width="310" height="32" rx="8" fill="#0A345D" />
            <text x="195" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              1. ACÚMULO vs. PRIORIDADE POR CONTA
            </text>

            <rect x="40" y="84" width="310" height="120" rx="10" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" />
            <text x="58" y="108" fill="#0369A1" fontSize="12.5" fontWeight="800">🏢 Conta Corporativa (Work Inbox)</text>
            <text x="58" y="130" fill="#334155" fontSize="11.5">• Solicitações de clientes & decisões de líderes</text>
            <text x="58" y="150" fill="#334155" fontSize="11.5">• Alertas de segurança & threads de projetos</text>
            <text x="58" y="170" fill="#334155" fontSize="11.5">• Compromissos assumidos com colegas</text>
            <text x="58" y="190" fill="#0A345D" fontSize="11" fontWeight="700">vs. Centenas de notificações repetitivas</text>

            <rect x="40" y="218" width="310" height="132" rx="10" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.5" />
            <text x="58" y="242" fill="#166534" fontSize="12.5" fontWeight="800">🏠 Conta Pessoal (Personal Inbox)</text>
            <text x="58" y="264" fill="#334155" fontSize="11.5">• Assuntos financeiros, médicos e viagens</text>
            <text x="58" y="284" fill="#334155" fontSize="11.5">• Demandas domésticas e familiares</text>
            <text x="58" y="312" fill="#991B1B" fontSize="11.5" fontWeight="800">
              ⚠ Nunca assuma a mesma regra para ambas!
            </text>
            <text x="58" y="332" fill="#475569" fontSize="11">Declare as prioridades explicitamente.</text>
          </g>

          {/* STEP 2: 3 Failures of Naive Email AI (Center) */}
          <g style={{ opacity: step >= 1 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="395" y="20" width="390" height="350" rx="16" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2.5" />
            <rect x="415" y="38" width="350" height="32" rx="8" fill="#EA580C" />
            <text x="590" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              2. FALHAS DO ASSISTENTE MAL CONFIGURADO
            </text>

            <rect x="415" y="84" width="350" height="82" rx="10" fill="#FFFFFF" stroke="#FDBA74" strokeWidth="1.5" />
            <text x="432" y="108" fill="#9A3412" fontSize="12.5" fontWeight="800">✗ Falha A: Ressuscitar Threads Resolvidas</text>
            <text x="432" y="128" fill="#334155" fontSize="11.5">Lê o 1º e-mail de um pedido antigo sem checar que</text>
            <text x="432" y="146" fill="#334155" fontSize="11.5">a última resposta da thread já resolveu o problema.</text>

            <rect x="415" y="178" width="350" height="82" rx="10" fill="#FFFFFF" stroke="#FDBA74" strokeWidth="1.5" />
            <text x="432" y="202" fill="#9A3412" fontSize="12.5" fontWeight="800">✗ Falha B: Poluição da Voz do Usuário</text>
            <text x="432" y="222" fill="#334155" fontSize="11.5">Infere estilo de escrita misturando textos encaminhados,</text>
            <text x="432" y="240" fill="#334155" fontSize="11.5">histórico citado (quotes) ou newsletters automáticas.</text>

            <rect x="415" y="272" width="350" height="80" rx="10" fill="#FFFFFF" stroke="#FDBA74" strokeWidth="1.5" />
            <text x="432" y="296" fill="#9A3412" fontSize="12.5" fontWeight="800">✗ Falha C: Rascunhos que Inventam Compromissos</text>
            <text x="432" y="316" fill="#334155" fontSize="11.5">Cria respostas prometendo prazos ou entregas quando</text>
            <text x="432" y="334" fill="#334155" fontSize="11.5">os fatos necessários não estão disponíveis na fonte.</text>
          </g>

          {/* STEP 3: Bundled Action Hazard (Right) */}
          <g style={{ opacity: step >= 2 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="810" y="20" width="350" height="350" rx="16" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2.5" />
            <rect x="830" y="38" width="310" height="32" rx="8" fill="#DC2626" />
            <text x="985" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              3. RISCO DE PACOTE ÚNICO DE AÇÃO
            </text>

            <rect x="830" y="88" width="310" height="115" rx="10" fill="#FFFFFF" stroke="#FCA5A5" strokeWidth="1.5" />
            <text x="985" y="112" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="800">
              "Posso limpar sua caixa e responder?"
            </text>
            <text x="985" y="136" textAnchor="middle" fill="#334155" fontSize="11.5">
              Empacotar Send + Archive + Delete em uma
            </text>
            <text x="985" y="154" textAnchor="middle" fill="#334155" fontSize="11.5">
              única aprovação vaga retira o controle do
            </text>
            <text x="985" y="172" textAnchor="middle" fill="#991B1B" fontSize="11.5" fontWeight="800">
              titular sobre retenção e recuperação!
            </text>

            <rect x="830" y="218" width="310" height="132" rx="10" fill="#DCFCE7" stroke="#4ADE80" strokeWidth="1.8" />
            <text x="985" y="244" textAnchor="middle" fill="#166534" fontSize="13" fontWeight="800">
              ✓ Princípio Canônico do Capítulo 8:
            </text>
            <text x="985" y="268" textAnchor="middle" fill="#0A345D" fontSize="12" fontWeight="700">
              "The first result should be a review,
            </text>
            <text x="985" y="286" textAnchor="middle" fill="#0A345D" fontSize="12" fontWeight="700">
              not a cleanup event."
            </text>
            <text x="985" y="314" textAnchor="middle" fill="#166534" fontSize="11.2" fontWeight="700">
              Mostrar exemplos e contagens suficientes para
            </text>
            <text x="985" y="332" textAnchor="middle" fill="#166534" fontSize="11.2" fontWeight="700">
              o humano julgar a regra antes de agir!
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Summary Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MailWarning size={16} color="#0284C7" />
          <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Janela Delimitada:</strong> Inspecionar período fechado (ex: 90 ou 14 dias).
          </span>
        </div>
        <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MessageSquareWarning size={16} color="#EA580C" />
          <span style={{ fontSize: '0.8rem', color: '#9A3412', fontWeight: 700 }}>
            <strong>Voz Autêntica:</strong> Aprender apenas de <em>Sent Mail</em> autoral.
          </span>
        </div>
        <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Trash2 size={16} color="#DC2626" />
          <span style={{ fontSize: '0.8rem', color: '#991B1B', fontWeight: 700 }}>
            <strong>1º Entregável:</strong> Sempre uma Revisão, nunca uma faxina cega.
          </span>
        </div>
      </div>
    </div>
  );
}
