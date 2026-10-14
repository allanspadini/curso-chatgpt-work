import React from 'react';
import { Share2, Building2, BookCheck, TrendingUp, Award, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SkillEconomyVisual() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '2px 8px',
        gap: '12px',
      }}
    >
      {/* Banner Superior Explicativo */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '12px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: '#0A345D',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TrendingUp size={20} color="#1BB5D8" />
          </div>
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0A345D' }}>
              A Economia Emergente de Skills: Da Troca Informal aos Catálogos Corporativos
            </div>
            <div style={{ fontSize: '0.82rem', color: '#475569' }}>
              Uma Skill é um ativo transferível. Quando deixa sua máquina, ela transforma a dinâmica e a influência nas empresas.
            </div>
          </div>
        </div>
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #CBD5E1',
            borderRadius: '20px',
            padding: '4px 14px',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#0A345D',
            fontFamily: 'var(--font-mono)',
          }}
        >
          O FUTURO DO TRABALHO
        </div>
      </div>

      {/* Grid Principal em 3 Estágios de Maturidade */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          flex: 1,
        }}
      >
        {/* Estágio 1: Mercado Informal (Shadow Skills) */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #D5E3EC',
            borderRadius: '14px',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span
                style={{
                  background: '#EDF5FA',
                  color: '#0A345D',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                ESTÁGIO 1 • INDIVIDUAL
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.18rem',
                fontWeight: 700,
                color: '#0A345D',
                marginBottom: '10px',
              }}
            >
              Mercados Informais de Skills (DMs)
            </h3>

            <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.4, marginBottom: '12px' }}>
              Colegas começam a pedir pastas de skills por mensagem direta: <em>"Você me passa a Skill que você usou para auditar os fornecedores?"</em>.
            </p>

            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Award size={20} color="#0369A1" />
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0A345D' }}>Influência Organizacional</div>
                <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                  O autor da boa Skill escala seu impacto treinando centenas de pessoas sem estar na sala.
                </div>
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.75rem', color: '#0369A1', fontWeight: 600, borderTop: '1px solid #E2E8F0', paddingTop: '8px' }}>
            Dinâmica: Transferência orgânica ponto a ponto.
          </div>
        </div>

        {/* Estágio 2: Catálogo Corporativo Oficial */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #D5E3EC',
            borderRadius: '14px',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span
                style={{
                  background: '#F0FDF4',
                  color: '#166534',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                ESTÁGIO 2 • CORPORATIVO
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.18rem',
                fontWeight: 700,
                color: '#0A345D',
                marginBottom: '10px',
              }}
            >
              Diretórios e Catálogos Oficiais
            </h3>

            <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.4, marginBottom: '12px' }}>
              A organização percebe o ganho e institucionaliza o repositório oficial de Skills (como faz a Anthropic e empresas pioneiras).
            </p>

            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Building2 size={20} color="#15803D" />
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#166534' }}>Governança e Versionamento</div>
                <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                  Substitui o improviso por pacotes auditados, homologados e conectados a regras corporativas.
                </div>
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.75rem', color: '#166534', fontWeight: 600, borderTop: '1px solid #E2E8F0', paddingTop: '8px' }}>
            Dinâmica: Do "peça para a Maria" ao repositório oficial.
          </div>
        </div>

        {/* Estágio 3: Skills como Runbooks Executáveis */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #D5E3EC',
            borderRadius: '14px',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span
                style={{
                  background: '#EFF6FF',
                  color: '#1E40AF',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                ESTÁGIO 3 • METODOLOGIA
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.18rem',
                fontWeight: 700,
                color: '#0A345D',
                marginBottom: '10px',
              }}
            >
              Skills como Runbooks Vivos
            </h3>

            <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.4, marginBottom: '12px' }}>
              Manuais estáticos em PDF apodrecem na intranet. Uma Skill é um <strong>runbook executável</strong>: legível por humanos e operável por agentes.
            </p>

            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <BookCheck size={20} color="#0369A1" />
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0A345D' }}>Falha Visível Imediata</div>
                <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                  Se uma regra interna mudar, a Skill falha no primeiro teste, forçando a atualização do método.
                </div>
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.75rem', color: '#1E40AF', fontWeight: 600, borderTop: '1px solid #E2E8F0', paddingTop: '8px' }}>
            Dinâmica: A demonstração prática é o próprio entregável.
          </div>
        </div>
      </div>

      {/* Faixa Inferior: A Tese Central do Capítulo 4 */}
      <div
        style={{
          background: '#0A345D',
          borderRadius: '12px',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#FFFFFF',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <CheckCircle2 size={22} color="#1BB5D8" />
          <div style={{ fontSize: '0.86rem', fontWeight: 600, lineHeight: 1.35 }}>
            <strong style={{ color: '#64D9EF' }}>A Tese Fundamental:</strong> Reduzir a área de contato do humano no processo mecânico até que <em>tudo o que ele toque seja genuinamente decisório e insubstituível.</em>
          </div>
        </div>
        <div
          style={{
            background: 'rgba(27, 181, 216, 0.2)',
            border: '1px solid #1BB5D8',
            borderRadius: '20px',
            padding: '4px 14px',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#64D9EF',
            whiteSpace: 'nowrap',
          }}
        >
          ALAVANCA EXECUTIVA MÁXIMA
        </div>
      </div>
    </div>
  );
}
