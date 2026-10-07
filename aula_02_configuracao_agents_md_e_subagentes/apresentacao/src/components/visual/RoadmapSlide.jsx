import React from 'react';
import { GitBranch, HardDrive, Cpu, Terminal, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function RoadmapSlide() {
  const modules = [
    {
      num: 'MÓDULO 01',
      title: 'Governança & Cadeia AGENTS.md',
      desc: 'Anarquia das regras ad-hoc, GitOps determinístico, resolução em 3 camadas (Global ➔ Raiz ➔ Cwd) e precedência semântica top-down.',
      icon: GitBranch,
      color: '#0A345D',
      slides: 'Slides 03–06',
      interactive: 'Lab 1: Simulador de Cadeia de Descoberta',
    },
    {
      num: 'MÓDULO 02',
      title: 'Restrições, Truncamento & Fallbacks',
      desc: 'Teto de 32 KiB (project_doc_max_bytes), política de truncamento, fallbacks legados, isolamento com CODEX_HOME e sintaxe de Code Review Rules.',
      icon: HardDrive,
      color: '#0369A1',
      slides: 'Slides 07–09',
      interactive: 'Rigor: Análise de Bytes & Truncamento',
    },
    {
      num: 'MÓDULO 03',
      title: 'Context Rot & Arquitetura de Subagentes',
      desc: 'Patologias cognitivas de LLMs (Context Pollution & Context Rot), spawning concorrente, barreira wait-for-all e matriz Sol vs Luna com reasoning effort.',
      icon: Cpu,
      color: '#166534',
      slides: 'Slides 10–14',
      interactive: 'Lab 2: Simulador de Degradação de Contexto',
    },
    {
      num: 'MÓDULO 04',
      title: 'Custom Agents em TOML & Governança',
      desc: 'Schema formal de subagentes em TOML, princípio do menor privilégio (read-only vs workspace-write), padrões PR Review e Quiz de Fechamento.',
      icon: Terminal,
      color: '#7C2D12',
      slides: 'Slides 15–20',
      interactive: 'Labs 3, 4 e 5: Builder, Runner & Quiz',
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
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              background: 'var(--infnet-dark-blue)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '6px',
            }}
          >
            TRILHA 26E4_2
          </span>
          <span style={{ fontSize: '0.92rem', color: '#1E293B', fontWeight: 600 }}>
            Estrutura Pedagógica: Situação-Problema do Mundo Real ➔ Solução de Engenharia ➔ Teoria Rigorosa
          </span>
        </div>
        <span style={{ fontSize: '0.82rem', color: '#0369A1', fontWeight: 700 }}>
          20 Slides • 5 Laboratórios Interativos
        </span>
      </div>

      {/* 4 Modules Horizontal Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          margin: '14px 0',
          flex: 1,
        }}
      >
        {modules.map((mod, idx) => {
          const Icon = mod.icon;
          return (
            <div
              key={idx}
              className="card-base"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px 18px',
                borderTop: `4px solid ${mod.color}`,
                background: '#FFFFFF',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: mod.color,
                      letterSpacing: '1px',
                    }}
                  >
                    {mod.num}
                  </span>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: '#EDF5FA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={20} color={mod.color} />
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: 'var(--infnet-dark-blue)',
                    fontFamily: 'var(--font-title)',
                    lineHeight: 1.25,
                    marginBottom: '10px',
                  }}
                >
                  {mod.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.82rem',
                    color: '#334155',
                    lineHeight: 1.45,
                    marginBottom: '14px',
                  }}
                >
                  {mod.desc}
                </p>
              </div>

              <div>
                <div
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                    padding: '8px 10px',
                    marginBottom: '10px',
                  }}
                >
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                    LABORATÓRIO / RIGOR
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#0A345D', fontWeight: 700 }}>
                    {mod.interactive}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    color: '#475569',
                    fontWeight: 600,
                  }}
                >
                  <span>{mod.slides}</span>
                  <ArrowRight size={14} color={mod.color} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Outcome Target Banner */}
      <div
        style={{
          background: '#F0FDF4',
          border: '1px solid #86EFAC',
          borderRadius: '8px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <CheckCircle2 size={18} color="#166534" />
          <span style={{ fontSize: '0.86rem', color: '#166534', fontWeight: 700 }}>
            Competência Final da Aula:
          </span>
          <span style={{ fontSize: '0.84rem', color: '#1E293B' }}>
            Projetar monorepositórios com AGENTS.md hierárquico e orquestrar equipes de subagentes concorrentes em TOML com isolamento de privilégios.
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#166534',
            background: '#DCFCE7',
            padding: '3px 8px',
            borderRadius: '4px',
          }}
        >
          MASTERY CHECK
        </span>
      </div>
    </div>
  );
}
