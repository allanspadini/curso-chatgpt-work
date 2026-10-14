import React from 'react';
import { AlertTriangle, FileText, Clock, DollarSign, ShieldCheck } from 'lucide-react';

export default function MarketProblemSourcesVisual() {
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
      {/* Único Bloco Central com Texto Grande da Situação-Problema */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #D0E3F0',
          borderRadius: '16px',
          padding: '42px 48px',
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
            background: 'linear-gradient(90deg, #1BB5D8 0%, #0A345D 50%, #7CB342 100%)',
          }}
        />

        {/* Header Tags */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
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
            DESAFIO DE MERCADO • PRÁTICA DAS RUBRICAS 1.1, 1.2 E 1.3
          </span>
        </div>

        {/* Texto Grande e Imponente da Situação-Problema */}
        <h2
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '2.1rem',
            fontWeight: 800,
            color: 'var(--infnet-dark-blue)',
            lineHeight: 1.34,
            marginBottom: '34px',
            maxWidth: '1160px',
          }}
        >
          Você recebeu 3 propostas comerciais em PDF com tabelas de custos no meio do texto.
          Como automatizar a extração dos valores, calcular a soma dos itens e auditar o teto de R$ 50.000 sem fazer contas manuais e sem confiar em um chat que alucina números?
        </h2>

        {/* 4 Indicadores Visuais Limpos do Desafio */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            paddingTop: '24px',
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
              <FileText size={22} color="#0369A1" />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Entrada Bruta</div>
              <div style={{ fontSize: '0.96rem', color: 'var(--infnet-dark-blue)', fontWeight: 700 }}>
                3 PDFs com Tabelas
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
              <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Operação Exigida</div>
              <div style={{ fontSize: '0.96rem', color: '#991B1B', fontWeight: 700 }}>
                Extrair e Somar Itens
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
                background: '#EFF6FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1E40AF',
              }}
            >
              <DollarSign size={22} color="#1E40AF" />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Regra da Empresa</div>
              <div style={{ fontSize: '0.96rem', color: '#0369A1', fontWeight: 700 }}>
                Teto: R$ 50.000,00
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
              <ShieldCheck size={22} color="#166534" />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Meta da Entrega</div>
              <div style={{ fontSize: '0.96rem', color: '#166534', fontWeight: 700 }}>
                Parecer 100% Auditável
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
