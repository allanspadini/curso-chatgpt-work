import React, { useState } from 'react';
import { Play, RotateCcw, FileSpreadsheet, Users, MessageSquarePlus, CheckCircle2 } from 'lucide-react';

export default function OnboardingStagedArtifactsVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Três Artefatos Encenados', caption: 'Preparar Tracker Proposal, Team Summary e Welcome-Space Plan sem criar nada externo' },
    { label: '2. Portão de Aprovação Humana', caption: 'Nomes de canais e convites revelam contratações — exigir aprovação explícita' },
    { label: '3. Execução & Checkpoint Semanal', caption: 'Executar apenas ações aprovadas e reportar o que mudou, falhou ou exige humano' },
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
              background: '#0284C7',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            2. SOLUÇÃO DE ENGENHARIA • STAGED ARTIFACTS
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
          <defs>
            <marker id="arrow-stage" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0A345D" />
            </marker>
          </defs>

          {/* STEP 1: The 3 Staged Artifacts (Left Column) */}
          <g style={{ opacity: step >= 0 ? 1 : 0.25, transition: 'opacity 0.3s' }}>
            <rect x="15" y="15" width="465" height="360" rx="16" fill="#EFF6FF" stroke="#0284C7" strokeWidth="2.5" />
            <rect x="35" y="30" width="425" height="32" rx="8" fill="#0284C7" />
            <text x="247" y="51" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
              FASE 1: 3 ARTEFATOS ENCENADOS (READ-ONLY)
            </text>

            {/* Artifact 1 */}
            <rect x="35" y="76" width="425" height="88" rx="10" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.8" />
            <text x="52" y="100" fill="#0A345D" fontSize="13" fontWeight="800">
              1. Tracker Proposal (Proposta de Planilha)
            </text>
            <text x="52" y="121" fill="#334155" fontSize="11.5">
              • Registros de origem com links + campos operacionais normalizados
            </text>
            <text x="52" y="140" fill="#C2410C" fontSize="11.5" fontWeight="700">
              • Sinaliza lacunas (ex: Buddy pendente) e status de prontidão proposto
            </text>

            {/* Artifact 2 */}
            <rect x="35" y="176" width="425" height="88" rx="10" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.8" />
            <text x="52" y="200" fill="#0A345D" fontSize="13" fontWeight="800">
              2. Team Summary (Resumo por Time e Gestor)
            </text>
            <text x="52" y="221" fill="#334155" fontSize="11.5">
              • Agrupa novos contratados por equipe e liderança direta
            </text>
            <text x="52" y="240" fill="#166534" fontSize="11.5" fontWeight="700">
              • Contém estritamente os detalhes necessários para preparação
            </text>

            {/* Artifact 3 */}
            <rect x="35" y="276" width="425" height="84" rx="10" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.8" />
            <text x="52" y="300" fill="#0A345D" fontSize="13" fontWeight="800">
              3. Welcome-Space Plan (Plano de Canal/Página)
            </text>
            <text x="52" y="321" fill="#334155" fontSize="11.5">
              • Propõe nome do canal, membros, objetivo e 1ª mensagem de boas-vindas
            </text>
            <text x="52" y="340" fill="#991B1B" fontSize="11.5" fontWeight="800">
              • SEM CRIAR O CANAL OU CONVIDAR NINGUÉM AINDA!
            </text>
          </g>

          {/* STEP 2: Explicit Approval Boundary Gate (Center) */}
          <g style={{ opacity: step >= 1 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <path d="M 480 195 L 522 195" stroke="#0A345D" strokeWidth="3" markerEnd="url(#arrow-stage)" />

            <rect x="530" y="35" width="245" height="320" rx="16" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2.5" />
            <rect x="548" y="52" width="209" height="30" rx="8" fill="#EA580C" />
            <text x="652" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800" fontFamily="var(--font-mono)">
              PORTÃO DE APROVAÇÃO (HITL)
            </text>

            <text x="652" y="108" textAnchor="middle" fill="#9A3412" fontSize="12" fontWeight="800">
              Bloqueio Antes de:
            </text>

            {[
              'Criar canal ou página',
              'Enviar convites a membros',
              'Gravar no System of Record',
              'Publicar post ou DM',
              'Disparar e-mails externos',
            ].map((act, i) => (
              <g key={i}>
                <rect x="550" y={122 + i * 36} width="205" height="28" rx="6" fill="#FFFFFF" stroke="#FDBA74" />
                <text x="652" y={140 + i * 36} textAnchor="middle" fill="#7C2D12" fontSize="11.5" fontWeight="700">
                  🔒 {act}
                </text>
              </g>
            ))}

            <rect x="550" y="310" width="205" height="30" rx="6" fill="#FEF2F2" stroke="#FCA5A5" />
            <text x="652" y="329" textAnchor="middle" fill="#991B1B" fontSize="10.5" fontWeight="800">
              Evita revelar vaga não anunciada
            </text>
          </g>

          {/* STEP 3: Named Execution & Weekly Checkpoint (Right) */}
          <g style={{ opacity: step >= 2 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <path d="M 775 195 L 817 195" stroke="#0A345D" strokeWidth="3" markerEnd="url(#arrow-stage)" />

            <rect x="825" y="15" width="340" height="360" rx="16" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
            <rect x="845" y="30" width="300" height="32" rx="8" fill="#16A34A" />
            <text x="995" y="51" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-mono)">
              FASE 3: EXECUÇÃO & CICLO SEMANAL
            </text>

            <rect x="845" y="76" width="300" height="125" rx="10" fill="#FFFFFF" stroke="#86EFAC" strokeWidth="1.5" />
            <text x="995" y="100" textAnchor="middle" fill="#166534" fontSize="13" fontWeight="800">
              Execução Apenas do Subconjunto Aprovado
            </text>
            <text x="862" y="124" fill="#334155" fontSize="11.5">✓ O que foi alterado com sucesso</text>
            <text x="862" y="146" fill="#991B1B" fontSize="11.5">✗ O que falhou ou foi bloqueado</text>
            <text x="862" y="168" fill="#C2410C" fontSize="11.5">👤 O que ainda depende de pessoa humana</text>
            <text x="862" y="188" fill="#0369A1" fontSize="11" fontWeight="700" fontFamily="var(--font-mono)">
              Completion Report Auditável
            </text>

            {/* Weekly Recurring Checkpoint */}
            <rect x="845" y="216" width="300" height="142" rx="10" fill="#DCFCE7" stroke="#4ADE80" strokeWidth="1.5" />
            <text x="995" y="240" textAnchor="middle" fill="#0A345D" fontSize="12.5" fontWeight="800">
              🔄 Checkpoint Semanal Recorrente
            </text>
            <text x="862" y="262" fill="#1E293B" fontSize="11.2">1. Inventariar fontes aprovadas da semana</text>
            <text x="862" y="281" fill="#1E293B" fontSize="11.2">2. Encenar atualizações propostas (Staging)</text>
            <text x="862" y="300" fill="#1E293B" fontSize="11.2">3. Revisar com responsável (Accountable Owner)</text>
            <text x="862" y="319" fill="#1E293B" fontSize="11.2">4. Executar lote aprovado & publicar status</text>
            <text x="862" y="342" fill="#166534" fontSize="10.8" fontWeight="800" fontFamily="var(--font-mono)">
              Tratar conteúdo de linhas como DADOS!
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Summary Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileSpreadsheet size={16} color="#0284C7" />
          <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>1. Tracker Proposal:</strong> Normaliza dados e aponta lacunas.
          </span>
        </div>
        <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Users size={16} color="#EA580C" />
          <span style={{ fontSize: '0.8rem', color: '#9A3412', fontWeight: 700 }}>
            <strong>2. Team Summary:</strong> Agrupa por gestor sem expor PII.
          </span>
        </div>
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MessageSquarePlus size={16} color="#166534" />
          <span style={{ fontSize: '0.8rem', color: '#166534', fontWeight: 700 }}>
            <strong>3. Welcome-Space Plan:</strong> Rascunha canal antes de criar.
          </span>
        </div>
      </div>
    </div>
  );
}
