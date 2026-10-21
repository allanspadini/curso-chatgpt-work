import React from 'react';
import { getAssetPath } from '../../utils/assetHelper';
import { Sparkles, FileSpreadsheet, Users, Database, BarChart3 } from 'lucide-react';

export default function TitleSlide() {
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
          padding: '76px 64px 36px 64px',
          zIndex: 5,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
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
            AULA 05 • CAPÍTULOS 9, 10 E 11
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '2.85rem',
            fontWeight: 800,
            color: 'var(--infnet-dark-blue)',
            lineHeight: 1.15,
            marginBottom: '14px',
            maxWidth: '1120px',
          }}
        >
          Artefatos de Decisão, Chief of Staff e Workflows de Dados Confiáveis
        </h1>

        <p
          style={{
            fontSize: '1.2rem',
            color: '#334155',
            lineHeight: 1.45,
            maxWidth: '980px',
            marginBottom: '30px',
          }}
        >
          Documentos, Planilhas e Apresentações em 3 Passagens (Cap. 9), Produtividade & Colaboração com
          Limiar de Mudança Relevante (Cap. 10) e De Arquivos Brutos a Relatórios e Dashboards (Cap. 11).
        </p>

        {/* Architecture Preview Visual Banner */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', maxWidth: '1160px', marginBottom: '28px' }}>
          {[
            {
              icon: FileSpreadsheet,
              color: '#0369A1',
              bg: '#EFF6FF',
              border: '#BAE6FD',
              title: 'Cap. 9: Entregáveis & QA',
              tag: 'Docs, Sheets & Decks (3 Pass)',
            },
            {
              icon: Users,
              color: '#166534',
              bg: '#F0FDF4',
              border: '#86EFAC',
              title: 'Cap. 10: Chief of Staff',
              tag: 'Brief Diário & Limiar de Mudança',
            },
            {
              icon: Database,
              color: '#C2410C',
              bg: '#FFF7ED',
              border: '#FDBA74',
              title: 'Cap. 11: Dados & Joins',
              tag: 'Grão, Limpeza em Cópia & Chaves',
            },
            {
              icon: BarChart3,
              color: '#7E22CE',
              bg: '#FAF5FF',
              border: '#D8B4FE',
              title: 'Sites & Work vs. Codex',
              tag: 'Dashboards Privados & Rubricas',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  border: `1.5px solid ${item.border}`,
                  borderRadius: '12px',
                  padding: '14px 16px',
                  boxShadow: '0 2px 8px rgba(10, 52, 93, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: item.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color={item.color} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0A345D' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: item.color, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                    {item.tag}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Instructor & Course Metadata Footer Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1160px',
            background: '#F8FAFC',
            border: '1px solid #CBD5E1',
            borderRadius: '12px',
            padding: '14px 24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#0A345D',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.95rem',
              }}
            >
              AS
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0A345D' }}>
                Prof. Dr. Allan Segovia-Spadini
              </div>
              <div style={{ fontSize: '0.8rem', color: '#475569' }}>
                Disciplina: Processos Agênticos com ChatGPT Work [26E4_2]
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <span
              style={{
                background: '#EDF5FA',
                color: '#0A345D',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                border: '1px solid #D0E3F0',
              }}
            >
              Pressione [N] para Falas do Professor
            </span>
            <span
              style={{
                background: '#EFF6FF',
                color: '#0369A1',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                border: '1px solid #BAE6FD',
              }}
            >
              Pressione [→] para Avançar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
