import React, { useState } from 'react';
import { Play, RotateCcw, Award, CheckCircle2, FileCheck } from 'lucide-react';

export default function ProjectRubricsAlignmentVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Rubrica 3.1 (Skill vs Plugin & Rota)', caption: 'Diferenciar Skill de Plugin e justificar Conector Estruturado vs Computer Use' },
    { label: '2. Rubrica 3.2 (Ciclo de Vida Real)', caption: 'Instalar Plugin com escopo/aprovação em camadas e remover plugin de teste' },
    { label: '3. Checklist de Evidências (Fase 3)', caption: 'Capturas e documentos exatos para garantir 100% nas rubricas de Plugins' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Top Step Bar */}
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
            PROJETO DA DISCIPLINA • BLOCO 3
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

      {/* Main 3-Column Rubric Mapping */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
        {/* Column 1: Rubric 3.1 */}
        <div
          style={{
            opacity: step >= 0 ? 1 : 0.25,
            transition: 'opacity 0.3s',
            background: '#FFFFFF',
            border: '2px solid #0284C7',
            borderRadius: '14px',
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#EFF6FF', border: '1px solid #93C5FD', borderRadius: '8px', padding: '8px 12px' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0369A1', fontFamily: 'var(--font-mono)' }}>
              ITEM DE RUBRICA 3.1
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0A345D', marginTop: '2px' }}>
              Propósito Skill vs. Plugin & Escolha da Superfície
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '10px 12px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.8rem', color: '#0A345D' }}>1. Diferenciação no Seu Processo</div>
              <div style={{ fontSize: '0.75rem', color: '#334155', marginTop: '3px' }}>
                Explicitar o que é o <strong>método (Skill)</strong> e o que é o <strong>pacote de capacidade/acesso externo (Plugin)</strong>.
              </div>
            </div>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '10px 12px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.8rem', color: '#0A345D' }}>2. Conector Estruturado vs Computer Use</div>
              <div style={{ fontSize: '0.75rem', color: '#334155', marginTop: '3px' }}>
                Avaliar se o processo tem conector com operações definidas (Rota A) ou exige operar UI gráfica via <code>@Computer</code> / <code>@Chrome</code> (Rota B).
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.74rem', color: '#0369A1', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
            ✓ Justificar pela clareza de permissão e revisão
          </div>
        </div>

        {/* Column 2: Rubric 3.2 */}
        <div
          style={{
            opacity: step >= 1 ? 1 : 0.25,
            transition: 'opacity 0.35s',
            background: '#FFFFFF',
            border: '2px solid #EA580C',
            borderRadius: '14px',
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '8px', padding: '8px 12px' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#C2410C', fontFamily: 'var(--font-mono)' }}>
              ITEM DE RUBRICA 3.2
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0A345D', marginTop: '2px' }}>
              Configuração e Ciclo de Vida Completo do Plugin
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '9px 12px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.8rem', color: '#0A345D' }}>1. Pré-Instalação (7 Critérios)</div>
              <div style={{ fontSize: '0.74rem', color: '#334155' }}>
                Definir escopo, permissões Read-Only vs Write e aprovação em camadas inspirado em Onboarding/Inbox.
              </div>
            </div>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '9px 12px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.8rem', color: '#0A345D' }}>2. Instalação & Documentação</div>
              <div style={{ fontSize: '0.74rem', color: '#334155' }}>
                Conectar ao serviço aprovado e registrar os escopos OAuth concedidos.
              </div>
            </div>
            <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '9px 12px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.8rem', color: '#991B1B' }}>3. Descomissionamento (Remoção)</div>
              <div style={{ fontSize: '0.74rem', color: '#7F1D1D' }}>
                Ao final, <strong>remover um plugin de teste</strong> que não seja mais necessário!
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.74rem', color: '#C2410C', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
            ✓ Evidencia governança de ponta a ponta
          </div>
        </div>

        {/* Column 3: Concrete Deliverables Package */}
        <div
          style={{
            opacity: step >= 2 ? 1 : 0.25,
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
          <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '8px', padding: '8px 12px' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#166534', fontFamily: 'var(--font-mono)' }}>
              EVIDÊNCIAS PARA O RELATÓRIO E VÍDEO
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0A345D', marginTop: '2px' }}>
              O Que Entregar Nesta Etapa
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              'Tabela comparativa: Skill vs Plugin e Conector vs Computer Use para o seu processo',
              'Ficha dos 7 Critérios de Instalação preenchida antes da ativação',
              'Print do Plugin conectado com escopos documentados + 1ª passagem Read-Only',
              'Print da remoção do Plugin de teste excedente (higiene de workspace)',
            ].map((ev, i) => (
              <div
                key={i}
                style={{
                  background: '#F0FDF4',
                  border: '1px solid #86EFAC',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <CheckCircle2 size={16} color="#16A34A" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.74rem', color: '#1E293B', fontWeight: 700 }}>{ev}</span>
              </div>
            ))}
          </div>

          <div style={{ fontSize: '0.74rem', color: '#166534', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
            🏆 Pronto para demonstração em vídeo!
          </div>
        </div>
      </div>

      {/* Bottom Summary Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Award size={16} color="#0284C7" />
          <span style={{ fontSize: '0.8rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Dica para Avaliação:</strong> Não esqueça de documentar a <strong>remoção</strong> de um plugin de teste (Rubrica 3.2).
          </span>
        </div>
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileCheck size={16} color="#166534" />
          <span style={{ fontSize: '0.8rem', color: '#166534', fontWeight: 700 }}>
            <strong>Padrão de 6 Partes:</strong> Use o template do Slide 17 para estruturar o prompt do seu Plugin.
          </span>
        </div>
      </div>
    </div>
  );
}
