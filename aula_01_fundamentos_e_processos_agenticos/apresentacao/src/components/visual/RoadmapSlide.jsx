import React from 'react';
import { Layers, Bot, GitBranch, ShieldCheck, ArrowRight, Zap, Target, Lock } from 'lucide-react';

export default function RoadmapSlide() {
  const modules = [
    {
      step: '01',
      title: 'Fundamentos de IA & LLMs',
      icon: Layers,
      color: 'var(--infnet-dark-blue)',
      tag: 'Fundamentos de IA',
      subtags: ['Amostragem Autorregressiva', '4 Hábitos Duráveis', 'Work Specification'],
    },
    {
      step: '02',
      title: 'A Virada: Chat vs. Work',
      icon: Bot,
      color: 'var(--infnet-cyan)',
      tag: 'Paradigm Shift',
      subtags: ['Turn ➔ Outcome', 'Conectores OAuth', 'Google Drive & Slack'],
    },
    {
      step: '03',
      title: 'Contratos & Workflows',
      icon: GitBranch,
      color: 'var(--infnet-purple)',
      tag: 'Agent Contracts',
      subtags: ['4 Pilares do Contrato', 'Grafo de 7 Passos', 'Linhas Vermelhas'],
    },
    {
      step: '04',
      title: 'Governança & Maturidade',
      icon: ShieldCheck,
      color: 'var(--infnet-green-accent)',
      tag: 'HITL & Scale',
      subtags: ['Reversibilidade', 'Portões HITL', 'Revisão 6 Camadas', '4 Estágios'],
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '8px 0',
      }}
    >
      {/* Visual Pipeline Header Banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '10px',
          padding: '10px 24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap size={18} color="var(--infnet-cyan)" />
          <span style={{ fontSize: '0.92rem', color: 'var(--infnet-dark-blue)', fontWeight: 700 }}>
            Estrutura da Aula 1: 4 Módulos Progressivos de Engenharia Agêntica
          </span>
        </div>
        <span className="badge-pill" style={{ background: '#FFFFFF', color: '#0369A1', border: '1px solid #CBD5E1', fontFamily: 'var(--font-mono)' }}>
          INFNET [26E4_2]
        </span>
      </div>

      {/* 4 Pipeline Blocks */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          alignItems: 'stretch',
          margin: '12px 0',
          flex: 1,
        }}
      >
        {modules.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div
              key={idx}
              className="card-base"
              style={{
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `6px solid ${m.color}`,
                position: 'relative',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      color: m.color,
                    }}
                  >
                    MÓDULO {m.step}
                  </span>
                  <div
                    style={{
                      background: '#F8FAFC',
                      padding: '8px',
                      borderRadius: '10px',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <Icon size={24} color={m.color} />
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '1.3rem',
                    color: 'var(--infnet-dark-blue)',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    marginBottom: '16px',
                  }}
                >
                  {m.title}
                </h3>

                {/* Subtag pills instead of paragraphs! */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {m.subtags.map((st, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        padding: '6px 10px',
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#334155',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: m.color }} />
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: m.color,
                    background: '#F1F5F9',
                    padding: '3px 10px',
                    borderRadius: '12px',
                    display: 'inline-block',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {m.tag}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Methodology Ribbon (Visual Nodes & Arrows) */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid var(--border-light)',
          borderRadius: '10px',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--infnet-dark-blue)', textTransform: 'uppercase' }}>
          Metodologia Didática Central:
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700, fontSize: '0.88rem' }}>
          <span className="badge-pill" style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#991B1B' }}>
            1. Situação-Problema Real
          </span>
          <ArrowRight size={16} color="#94A3B8" />
          <span className="badge-pill" style={{ background: '#EFF6FF', border: '1px solid #93C5FD', color: '#1E40AF' }}>
            2. Solução de Engenharia
          </span>
          <ArrowRight size={16} color="#94A3B8" />
          <span className="badge-pill" style={{ background: '#F0FDF4', border: '1px solid #86EFAC', color: '#166534' }}>
            3. Teoria e Formalismo Rigoroso
          </span>
        </div>
      </div>
    </div>
  );
}
