import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Cpu,
  Award,
  BookMarked,
  CheckCircle2,
  ExternalLink,
  Bot,
} from 'lucide-react';

export default function InstructorSlide() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '340px 1fr',
        gap: '24px',
        height: '100%',
        alignItems: 'center',
      }}
    >
      {/* Left Column: Visual Profile Avatar Card */}
      <div
        className="card-base"
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          background: 'linear-gradient(180deg, #EDF5FA 0%, #FFFFFF 100%)',
          border: '1px solid var(--border-banner)',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              backgroundColor: 'var(--infnet-dark-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '2.8rem',
              fontFamily: 'var(--font-title)',
              fontWeight: 800,
              border: '4px solid #FFFFFF',
              boxShadow: '0 8px 18px rgba(10, 52, 93, 0.2)',
              marginBottom: '16px',
              position: 'relative',
            }}
          >
            AS
            <div
              style={{
                position: 'absolute',
                bottom: '2px',
                right: '2px',
                background: 'var(--infnet-green-accent)',
                borderRadius: '50%',
                padding: '4px',
                border: '2px solid #FFFFFF',
              }}
            >
              <CheckCircle2 size={18} color="#FFFFFF" />
            </div>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.5rem',
              color: 'var(--infnet-dark-blue)',
              fontWeight: 800,
              marginBottom: '6px',
            }}
          >
            Prof. Dr. Allan Spadini
          </h3>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#EDF5FA',
              border: '1px solid #D0E3F0',
              padding: '4px 14px',
              borderRadius: '16px',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#0369A1',
            }}
          >
            <Award size={15} />
            <span>Ph.D. em Geofísica Computacional</span>
          </div>
        </div>

        <a
          href="https://www.linkedin.com/in/allan-spadini/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            background: '#0A66C2',
            color: '#FFFFFF',
            textDecoration: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '0.88rem',
            boxShadow: 'var(--shadow-sm)',
            width: '100%',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
          <span>linkedin.com/in/allan-spadini</span>
          <ExternalLink size={14} style={{ marginLeft: '4px', opacity: 0.85 }} />
        </a>
      </div>

      {/* Right Column: Visual Credentials Grid (No text walls, pure badges & structure) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '16px',
          height: '100%',
        }}
      >
        {/* Card 1: Doutorado */}
        <div
          className="card-base"
          style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: '5px solid var(--infnet-dark-blue)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--infnet-dark-blue)' }}>
              FORMAÇÃO ACADÊMICA
            </span>
            <GraduationCap size={22} color="var(--infnet-dark-blue)" />
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
              Doutorado em Ciências (Ph.D.)
            </h4>
            <div style={{ display: 'flex', gap: '8px', marginTop: '6px', flexWrap: 'wrap' }}>
              <span className="badge-pill" style={{ background: '#EDF5FA', color: '#0369A1' }}>
                Universidade de São Paulo (USP)
              </span>
              <span className="badge-pill" style={{ background: '#F1F5F9', color: '#475569' }}>
                TU Delft (Holanda)
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            <span className="badge-pill" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#334155', fontSize: '0.72rem' }}>
              Geofísica Computacional
            </span>
            <span className="badge-pill" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#334155', fontSize: '0.72rem' }}>
              Inversão Numérica
            </span>
          </div>
        </div>

        {/* Card 2: Mestrado */}
        <div
          className="card-base"
          style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: '5px solid var(--infnet-cyan)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: '#0369A1' }}>
              PESQUISA APLICADA
            </span>
            <BookMarked size={22} color="var(--infnet-cyan)" />
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
              Mestrado em Ciências (M.Sc.)
            </h4>
            <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
              <span className="badge-pill" style={{ background: '#EFF6FF', color: '#1E40AF' }}>
                Universidade de São Paulo (USP)
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            <span className="badge-pill" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#334155', fontSize: '0.72rem' }}>
              Processamento de Sinais
            </span>
            <span className="badge-pill" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#334155', fontSize: '0.72rem' }}>
              Modelagem Estatística
            </span>
          </div>
        </div>

        {/* Card 3: Ciência de Dados & Machine Learning */}
        <div
          className="card-base"
          style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: '5px solid var(--infnet-purple)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--infnet-purple)' }}>
              CIÊNCIA DE DADOS & IA
            </span>
            <Cpu size={22} color="var(--infnet-purple)" />
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
              Machine Learning & Modelagem
            </h4>
            <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
              <span className="badge-pill" style={{ background: '#FAF5FF', color: '#6B21A8' }}>
                Modelagem Preditiva & Inteligência Artificial
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <span className="badge-pill" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#334155', fontSize: '0.72rem' }}>
              Machine Learning
            </span>
            <span className="badge-pill" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#334155', fontSize: '0.72rem' }}>
              Deep Learning
            </span>
            <span className="badge-pill" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#334155', fontSize: '0.72rem' }}>
              Sistemas Generativos
            </span>
          </div>
        </div>

        {/* Card 4: Infnet Pós-Graduação */}
        <div
          className="card-base"
          style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: '5px solid var(--infnet-green-accent)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--status-success-text)' }}>
              PÓS-GRADUAÇÃO INFNET
            </span>
            <Bot size={22} color="var(--infnet-green-accent)" />
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--infnet-dark-blue)', fontWeight: 800 }}>
              Processos Agênticos & Workflows
            </h4>
            <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
              <span className="badge-pill" style={{ background: '#F0FDF4', color: '#166534' }}>
                Faculdade Infnet [26E4_2]
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <span className="badge-pill" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#334155', fontSize: '0.72rem' }}>
              ChatGPT Work
            </span>
            <span className="badge-pill" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#334155', fontSize: '0.72rem' }}>
              Codex & Connectors
            </span>
            <span className="badge-pill" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#334155', fontSize: '0.72rem' }}>
              Governança
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
