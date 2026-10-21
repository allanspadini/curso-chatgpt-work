import React, { useState } from 'react';
import { Play, RotateCcw, BellRing, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function DailyBriefAndThresholdVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Os 7 Blocos do Brief Decisório', caption: 'Organizado por ação e compromisso (nunca separado por aplicativo!)' },
    { label: '2. Urgente vs. Importante & Checagem', caption: 'Regras explícitas de prioridade e inspeção das respostas mais recentes' },
    { label: '3. Limiar de Mudança Relevante (7 Gatilhos)', caption: 'Interromper apenas quando algo material mudar; caso contrário, permanecer em silêncio' },
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
              background: '#166534',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            CAPÍTULO 10 • RUBRICA 3.4
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

      {/* Main 3-Column Progressive Layout */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.15fr 0.9fr 1.15fr', gap: '14px' }}>
        {/* Col 1: 7 Sections of a Decision-Ready Brief */}
        <div
          style={{
            opacity: step >= 0 ? 1 : 0.25,
            transition: 'opacity 0.3s',
            background: '#FFFFFF',
            border: '2px solid #0284C7',
            borderRadius: '14px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '8px', padding: '7px 10px' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0369A1', fontFamily: 'var(--font-mono)' }}>
              1. ARQUITETURA DO BRIEF (POR AÇÃO, NÃO POR APP)
            </div>
            <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0A345D' }}>
              As 7 Seções de um Briefing Decisório
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[
              { n: '1. Top Priorities', d: 'Poucos desfechos que merecem atenção hoje + restrição de tempo' },
              { n: '2. Meaningful Changes', d: 'Novas decisões, mudanças de escopo ou itens resolvidos' },
              { n: '3. Upcoming Commitments', d: 'Prazos, reuniões, respostas prometidas e preparo imediato' },
              { n: '4. Responses Required', d: 'Mensagens que exigem julgamento humano com contexto' },
              { n: '5. Blocked or Waiting', d: 'Trabalho travado por outra pessoa, dado faltante ou evento' },
              { n: '6. Can Wait', d: 'Trabalho legítimo que não merece interromper o foco hoje' },
              { n: '7. Prepared Next Steps', d: 'Rascunhos, meeting briefs e handoffs (não enviados!)' },
            ].map((item, idx) => (
              <div key={idx} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '5px 8px' }}>
                <span style={{ fontWeight: 800, fontSize: '0.74rem', color: '#0A345D' }}>{item.n}: </span>
                <span style={{ fontSize: '0.71rem', color: '#334155' }}>{item.d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Col 2: Urgent vs Important & Anti-Noise Rules */}
        <div
          style={{
            opacity: step >= 1 ? 1 : 0.22,
            transition: 'opacity 0.35s',
            background: '#FFFFFF',
            border: '2px solid #7E22CE',
            borderRadius: '14px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#FAF5FF', border: '1px solid #D8B4FE', borderRadius: '8px', padding: '7px 10px' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#7E22CE', fontFamily: 'var(--font-mono)' }}>
              2. REGRAS DE PRIORIDADE & CHECAGEM
            </div>
            <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0A345D' }}>
              Urgente ≠ Importante
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.76rem', color: '#9A3412' }}>Hierarquia Não É Prioridade Automática</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                Mensagem de um líder sênior não supera automaticamente um <strong>incidente de produção, prazo contratual, compromisso com cliente ou decisão que desbloqueia várias pessoas</strong>.
              </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.76rem', color: '#0A345D' }}>Inspeção da Última Resposta</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                Antes de ressurgir um pedido antigo, inspecionar as respostas mais recentes para ver se já foi resolvido. <strong>Não repetir item inalterado!</strong>
              </div>
            </div>

            <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '8px', padding: '8px 10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.76rem', color: '#0369A1' }}>Fatos vs. Interpretação</div>
              <div style={{ fontSize: '0.71rem', color: '#334155', marginTop: '2px' }}>
                Linkar cada afirmação à fonte original e separar fatos confirmados da interpretação do agente.
              </div>
            </div>
          </div>
        </div>

        {/* Col 3: Meaningful-Change Threshold (7 Material Triggers) */}
        <div
          style={{
            opacity: step >= 2 ? 1 : 0.22,
            transition: 'opacity 0.35s',
            background: '#FFFFFF',
            border: '2px solid #16A34A',
            borderRadius: '14px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '8px', padding: '7px 10px' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#166534', fontFamily: 'var(--font-mono)' }}>
              3. MEANINGFUL-CHANGE THRESHOLD
            </div>
            <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0A345D' }}>
              Os 7 Gatilhos de Materialidade
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[
              '1. Um prazo entra no próximo dia útil de trabalho',
              '2. Um bloqueio ameaça um marco (milestone) comprometido',
              '3. Uma nova decisão passa a ser exigida do usuário',
              '4. Uma thread de alta prioridade recebe resposta substantiva',
              '5. Uma reunião muda afetando preparação ou presença',
              '6. Um dono (owner), escopo ou dependência sofre alteração',
              '7. Uma fonte oficial fica indisponível ou inconsistente',
            ].map((trig, idx) => (
              <div key={idx} style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '6px', padding: '5px 8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={13} color="#16A34A" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.71rem', color: '#1E293B', fontWeight: 600 }}>{trig}</span>
              </div>
            ))}
          </div>

          <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '6px 10px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.73rem', color: '#991B1B', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
              🔕 SE NADA MATERIAL MUDOU ➔ PERMANECER EM SILÊNCIO!
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Surface Bar */}
      <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BellRing size={16} color="#0284C7" />
          <span style={{ fontSize: '0.79rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Superfície de Execução:</strong> Agendamento <em>Browser/Cloud</em> roda com laptop desligado; agendamento <em>Desktop</em> (arquivos/apps locais) exige computador ligado e app aberto.
          </span>
        </div>
      </div>
    </div>
  );
}
