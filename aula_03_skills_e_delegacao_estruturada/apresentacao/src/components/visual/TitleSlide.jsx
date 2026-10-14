import React from 'react';
import { getAssetPath } from '../../utils/assetHelper';
import { Sparkles, Layers, FileCode2, ShieldAlert, CheckCircle2 } from 'lucide-react';

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

      {/* Main Hero Content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 64px 40px 64px',
          zIndex: 5,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#EFF6FF',
              color: '#0369A1',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              border: '1px solid #BAE6FD',
              letterSpacing: '0.5px',
            }}
          >
            <Sparkles size={14} color="#0284C7" />
            PROGRAMA DE PÓS-GRADUAÇÃO EAD • TURMA [26E4_2]
          </span>
          <span
            style={{
              backgroundColor: '#F0FDF4',
              color: '#166534',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 700,
              border: '1px solid #86EFAC',
            }}
          >
            AULA 03
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '3rem',
            fontWeight: 800,
            color: 'var(--infnet-dark-blue)',
            lineHeight: 1.15,
            marginBottom: '16px',
            maxWidth: '1050px',
          }}
        >
          Engenharia de Skills & Delegação Estruturada
        </h1>

        <p
          style={{
            fontSize: '1.25rem',
            color: '#334155',
            lineHeight: 1.5,
            maxWidth: '980px',
            marginBottom: '32px',
          }}
        >
          Do Contrato Agêntico no ChatGPT Work Local à Construção de Métodos Reutilizáveis:
          Prática Guiada de Mercado, Governança de Contexto e Ativação em Escala.
        </p>

        {/* Feature Badges Cards */}
        <div style={{ display: 'flex', gap: '16px', maxWidth: '1100px', marginBottom: '36px' }}>
          <div
            style={{
              flex: 1,
              background: '#FFFFFF',
              border: '1px solid #D5E3EC',
              borderRadius: '10px',
              padding: '14px 18px',
              boxShadow: '0 2px 8px rgba(10, 52, 93, 0.06)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: '#EDF5FA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--infnet-dark-blue)',
              }}
            >
              <CheckCircle2 size={22} color="#0369A1" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--infnet-dark-blue)' }}>
                Prática de Mercado
              </div>
              <div style={{ fontSize: '0.78rem', color: '#475569' }}>
                Fixação no ChatGPT Work Local & Rubricas 1 e 2
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              background: '#FFFFFF',
              border: '1px solid #D5E3EC',
              borderRadius: '10px',
              padding: '14px 18px',
              boxShadow: '0 2px 8px rgba(10, 52, 93, 0.06)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: '#F0FDF4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#166534',
              }}
            >
              <Layers size={22} color="#166534" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--infnet-dark-blue)' }}>
                Autonomia & Vocabulário
              </div>
              <div style={{ fontSize: '0.78rem', color: '#475569' }}>
                Prompt Engineering vs Tool Calling vs Agente
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              background: '#FFFFFF',
              border: '1px solid #D5E3EC',
              borderRadius: '10px',
              padding: '14px 18px',
              boxShadow: '0 2px 8px rgba(10, 52, 93, 0.06)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: '#FFF7ED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9A3412',
              }}
            >
              <FileCode2 size={22} color="#C2410C" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--infnet-dark-blue)' }}>
                Anatomia de Skills
              </div>
              <div style={{ fontSize: '0.78rem', color: '#475569' }}>
                SKILL.md, YAML Frontmatter & Regra 85/15
              </div>
            </div>
          </div>
        </div>

        {/* Footer Meta */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #E2E8F0',
            paddingTop: '18px',
            color: '#475569',
            fontSize: '0.85rem',
          }}
        >
          <div>
            <strong>Docente:</strong> Prof. Dr. Allan Segovia-Spadini • <strong>Instituição:</strong> Faculdade Infnet
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>⚡ Metodologia Problema ➔ Solução ➔ Teoria</span>
            <span>🎯 Foco em Entrega do Projeto</span>
          </div>
        </div>
      </div>
    </div>
  );
}
