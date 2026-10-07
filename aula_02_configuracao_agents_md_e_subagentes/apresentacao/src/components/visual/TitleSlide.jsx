import React from 'react';
import { getAssetPath } from '../../utils/assetHelper';
import { Settings, GitBranch, Layers, Cpu, ShieldCheck } from 'lucide-react';

export default function TitleSlide({ slide }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* Top Wave Ribbon from Infnet Template */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '110px',
          pointerEvents: 'none',
        }}
        viewBox="0 0 1366 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0H1366V45C1150 78 920 20 680 50C420 80 200 30 0 55V0Z"
          fill="#1BB5D8"
          fillOpacity="0.4"
        />
        <path
          d="M0 0H1366V30C1200 60 960 15 720 40C460 65 220 25 0 35V0Z"
          fill="#64D9EF"
          fillOpacity="0.8"
        />
      </svg>

      {/* Infnet Logo Top Right */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '48px',
          zIndex: 10,
        }}
      >
        <img
          src={getAssetPath('/infnet_logo.png')}
          alt="Instituto Infnet"
          style={{ height: '85px', width: 'auto' }}
        />
      </div>

      {/* Main Title Blue Banner */}
      <div
        style={{
          marginTop: '165px',
          width: '100%',
          backgroundColor: 'var(--infnet-dark-blue)',
          padding: '44px 64px 40px 64px',
          position: 'relative',
          boxShadow: '0 8px 24px rgba(10, 52, 93, 0.25)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            backgroundColor: '#93C5FD',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '6px',
            backgroundColor: 'var(--infnet-green-accent)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <span
            style={{
              color: 'var(--infnet-cyan-light)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
            }}
          >
            PÓS-GRADUAÇÃO EAD • DISCIPLINA [26E4_2]
          </span>
          <span
            style={{
              background: 'rgba(27, 181, 216, 0.2)',
              color: '#64D9EF',
              border: '1px solid rgba(100, 217, 239, 0.4)',
              padding: '2px 10px',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: 600,
            }}
          >
            AULA 02
          </span>
        </div>

        <h1
          style={{
            color: '#FFFFFF',
            fontFamily: 'var(--font-title)',
            fontSize: '2.5rem',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.5px',
            marginBottom: '10px',
          }}
        >
          Processos Agênticos com ChatGPT Work
        </h1>

        <p
          style={{
            color: '#D0E3F0',
            fontFamily: 'var(--font-body)',
            fontSize: '1.25rem',
            fontWeight: 500,
          }}
        >
          Configuração de Agentes com AGENTS.md e Arquitetura de Subagentes Especializados
        </p>
      </div>

      {/* Bottom Information Grid */}
      <div
        style={{
          marginTop: 'auto',
          marginBottom: '38px',
          padding: '0 64px',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#0369A1',
              fontWeight: 700,
              marginBottom: '6px',
            }}
          >
            Corpo Docente & Especialidade
          </div>
          <div
            style={{
              fontSize: '1.4rem',
              fontWeight: 800,
              color: 'var(--infnet-dark-blue)',
              fontFamily: 'var(--font-title)',
              marginBottom: '4px',
            }}
          >
            Prof. Dr. Allan Segovia-Spadini
          </div>
          <div style={{ fontSize: '0.95rem', color: '#334155', fontWeight: 500 }}>
            Doutor em Ciências (USP / TU Delft) • Modelagem Estocástica e Engenharia de Sistemas Agênticos
          </div>
        </div>

        {/* 4 Pillars Badges */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '10px',
          }}
        >
          <div
            style={{
              background: '#EDF5FA',
              border: '1px solid #D0E3F0',
              borderRadius: '8px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <GitBranch size={20} color="#0A345D" />
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0A345D' }}>AGENTS.md</div>
              <div style={{ fontSize: '0.72rem', color: '#475569' }}>Cadeia Hierárquica GitOps</div>
            </div>
          </div>

          <div
            style={{
              background: '#EDF5FA',
              border: '1px solid #D0E3F0',
              borderRadius: '8px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Layers size={20} color="#0A345D" />
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0A345D' }}>Subagentes</div>
              <div style={{ fontSize: '0.72rem', color: '#475569' }}>Concorrência & Isolamento</div>
            </div>
          </div>

          <div
            style={{
              background: '#EDF5FA',
              border: '1px solid #D0E3F0',
              borderRadius: '8px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Cpu size={20} color="#0A345D" />
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0A345D' }}>Sol & Luna</div>
              <div style={{ fontSize: '0.72rem', color: '#475569' }}>Calibração de Raciocínio</div>
            </div>
          </div>

          <div
            style={{
              background: '#EDF5FA',
              border: '1px solid #D0E3F0',
              borderRadius: '8px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <ShieldCheck size={20} color="#0A345D" />
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0A345D' }}>Sandbox Policy</div>
              <div style={{ fontSize: '0.72rem', color: '#475569' }}>Menor Privilégio & HITL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
