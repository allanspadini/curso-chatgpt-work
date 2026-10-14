import React from 'react';
import { Target, Layers, FileCode, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function RoadmapSlide() {
  const modules = [
    {
      num: 'MÓDULO 01',
      title: 'Prática de Mercado & Fixação',
      desc: 'Fixação prática no ChatGPT Work local: fontes aprovadas, especificação de trabalho, mapeamento de fluxo e contrato no AGENTS.md.',
      icon: Target,
      color: '#0A345D',
      slides: 'Slides 03–05',
      badge: 'Foco Rubricas 1 e 2',
    },
    {
      num: 'MÓDULO 02',
      title: 'Autonomia & Vocabulário de Skills',
      desc: 'O salto de abstração: diferenciação formal entre Prompt Engineering, Tool Calling e Agente. Por que e quando criar uma Skill.',
      icon: Layers,
      color: '#0369A1',
      slides: 'Fundamentos',
      badge: 'Escala de Autonomia',
    },
    {
      num: 'MÓDULO 03',
      title: 'Anatomia do SKILL.md & Regra 85/15',
      desc: 'Estrutura formal do SKILL.md, frontmatter YAML, divulgação progressiva em 3 níveis e calibração humana pela regra 85/15.',
      icon: FileCode,
      color: '#166534',
      slides: 'Engenharia',
      badge: 'Padrão Aberto',
    },
    {
      num: 'MÓDULO 04',
      title: 'Padrões de Trabalho & Primitivas de Skills',
      desc: 'A compressão do trabalho (A→C), casca determinística vs. núcleo dinâmico, simuladores de pontos de vista, novas primitivas e anti-padrões.',
      icon: CheckCircle,
      color: '#7C2D12',
      slides: 'Slides 09–16',
      badge: 'Capítulo 4 & Mercado',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
      }}
    >
      {/* Top Banner Notice */}
      <div
        className="banner-notice"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 20px',
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '8px',
          marginBottom: '14px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShieldCheck size={20} color="#0A345D" />
          <span style={{ fontSize: '0.9rem', color: '#0A345D', fontWeight: 600 }}>
            Alinhamento Pedagógico: Começamos consolidando o projeto prático para garantir o domínio de todos os alunos antes de avançar para a sintaxe de Skills.
          </span>
        </div>
        <span
          style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#0369A1',
            background: '#FFFFFF',
            padding: '4px 10px',
            borderRadius: '6px',
            border: '1px solid #BAE6FD',
          }}
        >
          4 Módulos Integrados
        </span>
      </div>

      {/* Grid of 4 Modules */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          flex: 1,
        }}
      >
        {modules.map((m, idx) => {
          const IconComp = m.icon;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #D5E3EC',
                borderRadius: '10px',
                padding: '18px 22px',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: m.color,
                      letterSpacing: '0.5px',
                    }}
                  >
                    {m.num}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#0369A1',
                      background: '#EFF6FF',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      border: '1px solid #DBEAFE',
                    }}
                  >
                    {m.badge}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComp size={18} color={m.color} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--infnet-dark-blue)',
                    }}
                  >
                    {m.title}
                  </h3>
                </div>

                <p style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.45 }}>
                  {m.desc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid #F1F5F9',
                  paddingTop: '10px',
                  marginTop: '10px',
                }}
              >
                <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 500 }}>
                  Escopo: {m.slides}
                </span>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: m.color,
                  }}
                >
                  Trilha Pedagógica <ArrowRight size={13} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
