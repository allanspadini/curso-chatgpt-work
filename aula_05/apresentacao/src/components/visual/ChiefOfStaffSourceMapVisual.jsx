import React, { useState } from 'react';
import { Play, RotateCcw, Compass, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function ChiefOfStaffSourceMapVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Trabalho Fragmentado & Ambientes', caption: 'A decisão atravessa sistemas; escolha entre ChatGPT Work e Codex' },
    { label: '2. Mapa de Fontes (5 Perguntas)', caption: 'Conectar apenas fontes que respondam a uma pergunta operacional conhecida' },
    { label: '3. Baseline, Falhas & Mesma Thread', caption: 'Reportar fontes indisponíveis (sem adivinhar!) e calibrar na mesma conversa' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Top Bar */}
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
            CAPÍTULO 10 • WORK CHIEF OF STAFF (RUBRICA 3.4)
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

      {/* Main SVG Diagram */}
      <div
        style={{
          flex: 1,
          background: '#FFFFFF',
          border: '2px solid #D0E3F0',
          borderRadius: '14px',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <svg viewBox="0 0 1180 390" style={{ width: '100%', height: '100%', maxHeight: '390px' }}>
          {/* STEP 1: Fragmented Context & Work vs Codex */}
          <g style={{ opacity: 1, transition: 'opacity 0.3s' }}>
            <rect x="20" y="25" width="340" height="340" rx="14" fill="#F8FAFC" stroke="#0A345D" strokeWidth="2.5" />
            <rect x="38" y="42" width="304" height="30" rx="8" fill="#0A345D" />
            <text x="190" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              1. COORDENAÇÃO DE CONTEXTO FRAGMENTADO
            </text>

            <rect x="38" y="84" width="304" height="78" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <text x="190" y="106" textAnchor="middle" fill="#0A345D" fontSize="12.5" fontWeight="800">
              Ciclo Real de uma Decisão
            </text>
            <text x="190" y="126" textAnchor="middle" fill="#0369A1" fontSize="11.5" fontWeight="700" fontFamily="var(--font-mono)">
              Reunião ➔ E-mail ➔ Doc ➔ Tracker
            </text>
            <text x="190" y="146" textAnchor="middle" fill="#475569" fontSize="11">
              Objetivo: visão operacional compacta (não resumo longo!)
            </text>

            <rect x="38" y="174" width="304" height="84" rx="10" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" />
            <text x="190" y="196" textAnchor="middle" fill="#0369A1" fontSize="12.5" fontWeight="800">
              Quando Usar ChatGPT Work
            </text>
            <text x="190" y="216" textAnchor="middle" fill="#1E293B" fontSize="11">
              Trabalho guiado por arquivos e sistemas conectados
            </text>
            <text x="190" y="234" textAnchor="middle" fill="#1E293B" fontSize="11">
              que termina em Docs, Sheets, Decks, Relatórios ou Sites.
            </text>

            <rect x="38" y="268" width="304" height="80" rx="10" fill="#FAF5FF" stroke="#D8B4FE" strokeWidth="1.5" />
            <text x="190" y="290" textAnchor="middle" fill="#7E22CE" fontSize="12.5" fontWeight="800">
              Quando Usar Codex
            </text>
            <text x="190" y="310" textAnchor="middle" fill="#1E293B" fontSize="11">
              Projetos técnicos com repositório, scripts reutilizáveis,
            </text>
            <text x="190" y="328" textAnchor="middle" fill="#1E293B" fontSize="11">
              testes automatizados, worktrees isoladas e reexecução.
            </text>
          </g>

          {/* STEP 2: The 5-Source Map (Center) */}
          <g style={{ opacity: step >= 1 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="385" y="25" width="420" height="340" rx="14" fill="#EFF6FF" stroke="#0284C7" strokeWidth="2.5" />
            <rect x="405" y="42" width="380" height="30" rx="8" fill="#0284C7" />
            <text x="595" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              2. MAPA DE FONTES (CADA FONTE RESPONDE 1 PERGUNTA)
            </text>

            {[
              { icon: '💬', name: '1. Mensagens (Slack/Teams)', q: 'Revelam pedidos, decisões, bloqueios e compromissos informais' },
              { icon: '✉️', name: '2. E-mail (Gmail/Outlook)', q: 'Revela conversas formais e externas que exigem resposta' },
              { icon: '📅', name: '3. Calendário (Agenda)', q: 'Revela timing, reuniões, preparo necessário e colisões de horário' },
              { icon: '📄', name: '4. Documentos & Notas', q: 'Revelam planos, definições e a evidência por trás da iniciativa' },
              { icon: '🎯', name: '5. Project Trackers (Jira/Linear)', q: 'Revelam trabalho atribuído, status, dependências e prazos' },
            ].map((src, i) => {
              const y = 84 + i * 53;
              return (
                <g key={i}>
                  <rect x="405" y={y} width="380" height="45" rx="8" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.5" />
                  <text x="425" y={y + 27} fontSize="16">{src.icon}</text>
                  <text x="452" y={y + 19} fill="#0A345D" fontSize="12" fontWeight="800">{src.name}</text>
                  <text x="452" y={y + 36} fill="#334155" fontSize="10.8">{src.q}</text>
                </g>
              );
            })}
          </g>

          {/* STEP 3: Bounded Role, Missing Sources & Thread Continuity (Right) */}
          <g style={{ opacity: step >= 2 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="830" y="25" width="330" height="340" rx="14" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
            <rect x="850" y="42" width="290" height="30" rx="8" fill="#166534" />
            <text x="995" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              3. CALIBRAÇÃO & FRONTEIRA DE AUTORIDADE
            </text>

            <rect x="850" y="86" width="290" height="78" rx="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5" />
            <text x="995" y="108" textAnchor="middle" fill="#991B1B" fontSize="12.5" fontWeight="800">
              Fontes Indisponíveis = Parte do Resultado
            </text>
            <text x="995" y="128" textAnchor="middle" fill="#7F1D1D" fontSize="11">
              Se a agenda ou tracker estiver inacessível, o agente
            </text>
            <text x="995" y="145" textAnchor="middle" fill="#7F1D1D" fontSize="11" fontWeight="700">
              DEVE reportar a falha em vez de adivinhar!
            </text>

            <rect x="850" y="176" width="290" height="84" rx="10" fill="#FFFFFF" stroke="#86EFAC" strokeWidth="1.5" />
            <text x="995" y="198" textAnchor="middle" fill="#166534" fontSize="12.5" fontWeight="800">
              Passagem de Baseline (Mesma Thread)
            </text>
            <text x="995" y="218" textAnchor="middle" fill="#334155" fontSize="11">
              Humano corrige erros, marca itens resolvidos e
            </text>
            <text x="995" y="236" textAnchor="middle" fill="#334155" fontSize="11">
              ensina regras de prioridade. Continuar na mesma
            </text>
            <text x="995" y="252" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">
              thread diferencia mudança real de repetição!
            </text>

            <rect x="850" y="272" width="290" height="76" rx="10" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1.5" />
            <text x="995" y="294" textAnchor="middle" fill="#9A3412" fontSize="12" fontWeight="800">
              Autoridade Permanece com a Pessoa
            </text>
            <text x="995" y="314" textAnchor="middle" fill="#334155" fontSize="11">
              O Chief of Staff monitora e prepara, mas nunca
            </text>
            <text x="995" y="332" textAnchor="middle" fill="#9A3412" fontSize="11" fontWeight="700">
              faz promessas nem fala em nome do usuário.
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldAlert size={16} color="#C2410C" />
          <span style={{ fontSize: '0.8rem', color: '#9A3412', fontWeight: 700 }}>
            <strong>Evite Excesso de Conexões:</strong> Não conecte fontes apenas porque estão disponíveis; cada fonte deve responder uma pergunta.
          </span>
        </div>
        <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Compass size={16} color="#0284C7" />
          <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Feedback é Contexto Operacional:</strong> Correções na thread treinam o agente a distinguir novidade de ruído.
          </span>
        </div>
      </div>
    </div>
  );
}
