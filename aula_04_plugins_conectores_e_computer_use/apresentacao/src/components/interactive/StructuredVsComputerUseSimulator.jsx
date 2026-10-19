import React, { useState } from 'react';
import { Plug, MonitorSmartphone, CheckCircle2, ShieldAlert, Search } from 'lucide-react';

const SCENARIOS = [
  {
    id: 'gmail-triage',
    title: '1. Triagem de 14 dias de E-mails no Gmail',
    domain: 'Comunicação Corporativa',
    recommended: 'structured',
    surfaceLabel: 'Plugin Estruturado (Gmail / Outlook Connector)',
    badgeColor: '#0284C7',
    badgeBg: '#EFF6FF',
    metrics: {
      schema: 98,
      layoutResilience: 100,
      permissionClarity: 95,
      reviewability: 96,
    },
    reason: 'Busca mensagens como entidades estruturadas (remetente, thread, data, link), sem depender da posição de botões na tela.',
    invocation: 'Usar conector Gmail em modo Read-Only + rascunhos não enviados.',
  },
  {
    id: 'drive-onboarding',
    title: '2. Inventário de Planilha e Docs de Onboarding no Drive',
    domain: 'RH & Operações',
    recommended: 'structured',
    surfaceLabel: 'Plugin Estruturado (Google Drive + Sheets)',
    badgeColor: '#166534',
    badgeBg: '#F0FDF4',
    metrics: {
      schema: 96,
      layoutResilience: 100,
      permissionClarity: 94,
      reviewability: 95,
    },
    reason: 'Recupera arquivos como arquivos e linhas como dados estruturados, permitindo filtrar campos sensíveis com precisão.',
    invocation: 'Conectar fontes aprovadas no Drive e gerar os 3 artefatos encenados.',
  },
  {
    id: 'local-notes-tracker',
    title: '3. Cruzar Notas de App Local com Sistema Legado sem API',
    domain: 'Produtividade Desktop Multi-App',
    recommended: 'computer-use',
    surfaceLabel: 'Computer Use (@Computer no Desktop App)',
    badgeColor: '#7E22CE',
    badgeBg: '#FAF5FF',
    metrics: {
      schema: 55,
      layoutResilience: 60,
      permissionClarity: 75,
      reviewability: 82,
    },
    reason: 'Não há plugin estruturado e o fluxo cruza aplicativos locais no computador. Exige escopo estreito e pausa antes de salvar.',
    invocation: '@Computer nomeando o aplicativo local, arquivos, fluxo e resumo final.',
  },
  {
    id: 'ui-bug-repro',
    title: '4. Reproduzir Bug Visual de Layout em Portal Autenticado',
    domain: 'QA & Engenharia de Interface',
    recommended: 'computer-use',
    surfaceLabel: 'Computer Use (@Chrome / Built-in Browser)',
    badgeColor: '#C2410C',
    badgeBg: '#FFF7ED',
    metrics: {
      schema: 50,
      layoutResilience: 65,
      permissionClarity: 78,
      reviewability: 90,
    },
    reason: 'A própria interface gráfica é o objeto de inspeção! Uma API estruturada não enxergaria o defeito visual na renderização.',
    invocation: 'Usar @Chrome ou Built-in Browser com escopo restrito à tela de teste.',
  },
];

export default function StructuredVsComputerUseSimulator() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = SCENARIOS[selectedIdx];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Header Banner */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '12px',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              background: '#0284C7',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            SIMULADOR INTERATIVO 1 • RUBRICA 3.1
          </span>
          <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.94rem' }}>
            Selecione um Cenário Real para Avaliar a Superfície de Controle Ideal
          </span>
        </div>
        <span style={{ fontSize: '0.78rem', color: '#0369A1', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
          Clique nos 4 casos abaixo
        </span>
      </div>

      {/* Interactive Main Grid */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '410px 1fr', gap: '16px' }}>
        {/* Left: Scenario Selector */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1.5px solid #CBD5E1',
            borderRadius: '14px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#475569', fontFamily: 'var(--font-mono)' }}>
            CENÁRIOS CORPORATIVOS DO CAPÍTULO 8:
          </div>
          {SCENARIOS.map((sc, idx) => {
            const active = idx === selectedIdx;
            return (
              <button
                key={sc.id}
                onClick={() => setSelectedIdx(idx)}
                style={{
                  textAlign: 'left',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  background: active ? '#EFF6FF' : '#F8FAFC',
                  border: active ? '2px solid #0284C7' : '1px solid #CBD5E1',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0A345D', marginBottom: '4px' }}>
                  {sc.title}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', color: '#475569' }}>{sc.domain}</span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      background: sc.badgeBg,
                      color: sc.badgeColor,
                    }}
                  >
                    {sc.recommended === 'structured' ? 'CONECTOR' : 'COMPUTER USE'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Visual Surface Diagnostic */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #D0E3F0',
            borderRadius: '14px',
            padding: '18px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {/* Recommended Surface Header */}
          <div
            style={{
              background: current.badgeBg,
              border: `2px solid ${current.badgeColor}`,
              borderRadius: '12px',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {current.recommended === 'structured' ? (
                <Plug size={26} color={current.badgeColor} />
              ) : (
                <MonitorSmartphone size={26} color={current.badgeColor} />
              )}
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: current.badgeColor, fontFamily: 'var(--font-mono)' }}>
                  SUPERFÍCIE DE CONTROLE RECOMENDADA
                </div>
                <div style={{ fontSize: '1.12rem', fontWeight: 800, color: '#0A345D' }}>
                  {current.surfaceLabel}
                </div>
              </div>
            </div>
            <span
              style={{
                background: '#FFFFFF',
                color: current.badgeColor,
                border: `1px solid ${current.badgeColor}`,
                padding: '5px 12px',
                borderRadius: '20px',
                fontSize: '0.78rem',
                fontWeight: 800,
                fontFamily: 'var(--font-mono)',
              }}
            >
              {current.recommended === 'structured' ? 'ROTA ESTRUTURADA' : 'ROTA DE INTERFACE (UI)'}
            </span>
          </div>

          {/* SVG Quantitative Bars for Control Surface Dimensions */}
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '14px 18px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0A345D', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
              PERFIL TÉCNICO DA SUPERFÍCIE DE CONTROLE:
            </div>
            <svg viewBox="0 0 680 140" style={{ width: '100%', height: '135px' }}>
              {[
                { label: 'Estrutura de Dados (Schema)', val: current.metrics.schema, color: '#0284C7' },
                { label: 'Independência de Layout Visual', val: current.metrics.layoutResilience, color: '#16A34A' },
                { label: 'Granularidade de Permissões', val: current.metrics.permissionClarity, color: '#EA580C' },
                { label: 'Rastreabilidade & Revisão (Audit)', val: current.metrics.reviewability, color: '#7E22CE' },
              ].map((m, i) => {
                const y = i * 34 + 6;
                const width = (m.val / 100) * 380;
                return (
                  <g key={i}>
                    <text x="5" y={y + 16} fill="#1E293B" fontSize="12.5" fontWeight="700">
                      {m.label}
                    </text>
                    <rect x="240" y={y + 3} width="380" height="18" rx="9" fill="#E2E8F0" />
                    <rect x="240" y={y + 3} width={width} height="18" rx="9" fill={m.color} />
                    <text x="632" y={y + 17} fill="#0A345D" fontSize="12.5" fontWeight="800" fontFamily="var(--font-mono)">
                      {m.val}%
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Engineering Rationale & Invocation Box */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '10px 14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, fontSize: '0.8rem', color: '#0369A1', marginBottom: '4px' }}>
                <Search size={15} /> Justificativa Arquitetural
              </div>
              <div style={{ fontSize: '0.8rem', color: '#1E293B', lineHeight: 1.38 }}>
                {current.reason}
              </div>
            </div>

            <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '10px 14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, fontSize: '0.8rem', color: '#166534', marginBottom: '4px' }}>
                <CheckCircle2 size={15} /> Padrão de Operação Segura
              </div>
              <div style={{ fontSize: '0.8rem', color: '#1E293B', lineHeight: 1.38 }}>
                {current.invocation}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Rule */}
      <div
        style={{
          background: '#FFF7ED',
          border: '1px solid #FDBA74',
          borderRadius: '10px',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldAlert size={18} color="#C2410C" />
          <span style={{ fontSize: '0.82rem', color: '#9A3412', fontWeight: 700 }}>
            <strong>Regra do Capítulo 8:</strong> Prefira a rota estruturada quando ambas cumprirem a tarefa; use Computer Use para o trabalho dependente de interface.
          </span>
        </div>
      </div>
    </div>
  );
}
