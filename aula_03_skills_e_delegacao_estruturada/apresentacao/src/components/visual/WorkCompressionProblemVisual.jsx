import React from 'react';
import { AlertTriangle, Users, Clock, ShieldAlert, Sparkles } from 'lucide-react';

export default function WorkCompressionProblemVisual() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        padding: '6px 12px',
      }}
    >
      {/* Bloco Central com Alto Contraste da Situação-Problema */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #D0E3F0',
          borderRadius: '16px',
          padding: '40px 48px',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top Accent Ribbon */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #1BB5D8 0%, #0A345D 50%, #FF7043 100%)',
          }}
        />

        {/* Header Tags */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#FEF2F2',
              color: '#991B1B',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              border: '1px solid #FCA5A5',
              letterSpacing: '0.5px',
            }}
          >
            <AlertTriangle size={15} color="#991B1B" />
            SITUAÇÃO-PROBLEMA DO MUNDO REAL
          </span>
          <span
            style={{
              backgroundColor: '#EDF5FA',
              color: '#0A345D',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 700,
              border: '1px solid #D0E3F0',
            }}
          >
            A COMPRESSÃO DO TRABALHO • CAPÍTULO 4: PATTERNS OF WORK
          </span>
        </div>

        {/* Texto Imponente da Situação-Problema */}
        <h2
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '2rem',
            fontWeight: 800,
            color: 'var(--infnet-dark-blue)',
            lineHeight: 1.34,
            marginBottom: '32px',
            maxWidth: '1160px',
          }}
        >
          Sua equipe precisa analisar 50 entrevistas com clientes e gerar um plano de ação executivo.
          Como comprimir 40 horas de triagem manual para minutos sem gerar relatórios vazios ("reporting slop") e sem perder o controle do julgamento humano?
        </h2>

        {/* 4 Indicadores Visuais Limpos do Desafio */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            paddingTop: '22px',
            borderTop: '1px solid #E2E8F0',
          }}
        >
          <div
            style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '10px',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                background: '#EDF5FA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0369A1',
              }}
            >
              <Users size={22} color="#0369A1" />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Entrada Bruta (A)</div>
              <div style={{ fontSize: '0.96rem', color: 'var(--infnet-dark-blue)', fontWeight: 700 }}>
                50 Entrevistas de Clientes
              </div>
            </div>
          </div>

          <div
            style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '10px',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                background: '#FEF2F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#991B1B',
              }}
            >
              <Clock size={22} color="#991B1B" />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Gargalo Manual (B)</div>
              <div style={{ fontSize: '0.96rem', color: '#991B1B', fontWeight: 700 }}>
                40 Horas de Triagem
              </div>
            </div>
          </div>

          <div
            style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '10px',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                background: '#FFF7ED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#EA580C',
              }}
            >
              <ShieldAlert size={22} color="#EA580C" />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Armadilha Crítica</div>
              <div style={{ fontSize: '0.96rem', color: '#C2410C', fontWeight: 700 }}>
                "Reporting Slop" (Vazio)
              </div>
            </div>
          </div>

          <div
            style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '10px',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                background: '#F0FDF4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#166534',
              }}
            >
              <Sparkles size={22} color="#166534" />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Meta com Skills (A➔C)</div>
              <div style={{ fontSize: '0.96rem', color: '#166534', fontWeight: 700 }}>
                Julgamento em Minutos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
