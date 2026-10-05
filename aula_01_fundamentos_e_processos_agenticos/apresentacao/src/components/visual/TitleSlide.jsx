import React from 'react';
import { getAssetPath } from '../../utils/assetHelper';
import { Sparkles, Bot, ShieldCheck } from 'lucide-react';

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

      {/* Main Title Blue Banner (faithful to scratch_slide-1.png) */}
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
              letterSpacing: '0.12em',
            }}
          >
            Pós-Graduação EAD • Disciplina [26E4_2]
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '3rem',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          Processos Agênticos com ChatGPT Work
        </h1>
      </div>

      {/* Clean Visual Content under Banner */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 64px',
          textAlign: 'center',
          gap: '24px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#EDF5FA',
            border: '1px solid #D0E3F0',
            padding: '8px 22px',
            borderRadius: '24px',
          }}
        >
          <Sparkles size={20} color="var(--infnet-cyan)" />
          <span
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--infnet-dark-blue)',
            }}
          >
            Aula 1: Fundamentos de IA, Mudança de Paradigma e Engenharia de Workflows
          </span>
        </div>

        {/* Visual Credentials Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            background: '#FFFFFF',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            borderRadius: '12px',
            padding: '14px 36px',
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', fontWeight: 600, textTransform: 'uppercase' }}>
              Professor Responsável
            </span>
            <span
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--infnet-dark-blue)',
              }}
            >
              Prof. Dr. Allan Segovia-Spadini
            </span>
          </div>

          <div style={{ width: '1px', height: '36px', backgroundColor: '#E2E8F0' }} />

          <div style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', fontWeight: 600, textTransform: 'uppercase' }}>
              Contato Acadêmico
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#0369A1',
              }}
            >
              allan.spadini@prof.infnet.edu.br
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
