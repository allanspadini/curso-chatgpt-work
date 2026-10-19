import React, { useState } from 'react';
import { Play, RotateCcw, BookOpen, KeyRound, PackageCheck } from 'lucide-react';

export default function SkillConnectorPluginVisual() {
  const isPrint = typeof window !== 'undefined' && window.location.search.includes('print=true');
  const [step, setStep] = useState(isPrint ? 2 : 0);

  const steps = [
    { label: '1. Conector (Acesso)', caption: 'Fornece acesso autenticado (OAuth) a um serviço externo' },
    { label: '2. Skill (Método)', caption: 'Fornece o procedimento operacional e regras de julgamento' },
    { label: '3. Plugin (Pacote Governável)', caption: 'Empacota Skills + Conectores + MCP + Hooks + Schedules para um domínio' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', justifyContent: 'space-between' }}>
      {/* Top Step Controls */}
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
              background: '#EFF6FF',
              color: '#0369A1',
              border: '1px solid #BAE6FD',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.76rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            2. SOLUÇÃO DE ENGENHARIA • RUBRICA 3.1
          </span>
          <span style={{ fontWeight: 800, color: '#0A345D', fontSize: '0.94rem' }}>
            {steps[step].caption}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setStep(idx)}
              style={{
                padding: '5px 12px',
                borderRadius: '8px',
                fontSize: '0.76rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: idx === step ? '2px solid #0284C7' : '1px solid #CBD5E1',
                background: idx <= step ? '#EFF6FF' : '#FFFFFF',
                color: idx <= step ? '#0369A1' : '#64748B',
              }}
            >
              {s.label}
            </button>
          ))}
          <button
            onClick={() => setStep((prev) => (prev < 2 ? prev + 1 : 0))}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '5px 12px',
              borderRadius: '8px',
              fontSize: '0.76rem',
              fontWeight: 800,
              cursor: 'pointer',
              border: '1px solid #0A345D',
              background: '#0A345D',
              color: '#FFFFFF',
            }}
          >
            {step < 2 ? <Play size={13} /> : <RotateCcw size={13} />}
            {step < 2 ? 'Próximo Passo' : 'Reiniciar'}
          </button>
        </div>
      </div>

      {/* Main Progressive Architecture SVG */}
      <div
        style={{
          flex: 1,
          background: '#FFFFFF',
          border: '2px solid #D0E3F0',
          borderRadius: '14px',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <svg viewBox="0 0 1180 385" style={{ width: '100%', height: '100%', maxHeight: '385px' }}>
          <defs>
            <marker id="arrow-cyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284C7" />
            </marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#16A34A" />
            </marker>
          </defs>

          {/* STEP 1: CONNECTOR (Top Left) */}
          <g style={{ opacity: step >= 0 ? 1 : 0.25, transition: 'opacity 0.3s' }}>
            <rect x="25" y="25" width="380" height="155" rx="14" fill="#EFF6FF" stroke="#0284C7" strokeWidth="2.5" />
            <rect x="45" y="42" width="165" height="26" rx="13" fill="#0284C7" />
            <text x="127" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800" fontFamily="var(--font-mono)">
              1. CONECTOR (ACESSO)
            </text>
            <text x="225" y="59" fill="#0369A1" fontSize="12" fontWeight="800">
              "Onde e com qual permissão"
            </text>

            <rect x="45" y="80" width="340" height="82" rx="10" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
            <text x="62" y="104" fill="#0A345D" fontSize="13" fontWeight="800">
              • Acesso Autenticado a Serviço Externo
            </text>
            <text x="62" y="126" fill="#334155" fontSize="12">
              • Gmail, Google Drive, Outlook, Slack, GitHub
            </text>
            <text x="62" y="147" fill="#0369A1" fontSize="11.5" fontWeight="700" fontFamily="var(--font-mono)">
              Respeita OAuth + Permissões Nativas do Usuário
            </text>
          </g>

          {/* STEP 2: SKILL (Bottom Left) */}
          <g style={{ opacity: step >= 1 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="25" y="205" width="380" height="155" rx="14" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2.5" />
            <rect x="45" y="222" width="165" height="26" rx="13" fill="#EA580C" />
            <text x="127" y="239" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800" fontFamily="var(--font-mono)">
              2. SKILL (MÉTODO)
            </text>
            <text x="225" y="239" fill="#C2410C" fontSize="12" fontWeight="800">
              "Como executar o trabalho"
            </text>

            <rect x="45" y="260" width="340" height="82" rx="10" fill="#FFFFFF" stroke="#FDBA74" strokeWidth="1.5" />
            <text x="62" y="284" fill="#0A345D" fontSize="13" fontWeight="800">
              • Procedimento Operacional Validado
            </text>
            <text x="62" y="306" fill="#334155" fontSize="12">
              • Regras de classificação, exclusões e formato
            </text>
            <text x="62" y="327" fill="#C2410C" fontSize="11.5" fontWeight="700" fontFamily="var(--font-mono)">
              SKILL.md + references/ + scripts/ + assets/
            </text>
          </g>

          {/* ARROWS TO PLUGIN */}
          <g style={{ opacity: step >= 2 ? 1 : 0.2, transition: 'opacity 0.35s' }}>
            <path d="M 405 102 L 485 155" stroke="#0284C7" strokeWidth="3.5" markerEnd="url(#arrow-cyan)" />
            <path d="M 405 282 L 485 230" stroke="#16A34A" strokeWidth="3.5" markerEnd="url(#arrow-green)" />
          </g>

          {/* STEP 3: THE INSTALLABLE PLUGIN PACKAGE (Right Container) */}
          <g style={{ opacity: step >= 2 ? 1 : 0.22, transition: 'opacity 0.35s' }}>
            <rect x="495" y="20" width="660" height="345" rx="18" fill="#F0FDF4" stroke="#16A34A" strokeWidth="3" />
            <rect x="520" y="38" width="610" height="38" rx="10" fill="#0A345D" />
            <text x="825" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="800" fontFamily="var(--font-mono)">
              3. PLUGIN = PACOTE INSTALÁVEL E GOVERNÁVEL PARA UM DOMÍNIO
            </text>

            {/* 6 Components Inside a Plugin Grid */}
            <g>
              {/* Box 1 */}
              <rect x="520" y="92" width="192" height="100" rx="10" fill="#FFFFFF" stroke="#86EFAC" strokeWidth="2" />
              <text x="616" y="118" textAnchor="middle" fill="#166534" fontSize="12.5" fontWeight="800">⚡ Reusable Skills</text>
              <text x="616" y="140" textAnchor="middle" fill="#334155" fontSize="11.5">Métodos prontos para</text>
              <text x="616" y="158" textAnchor="middle" fill="#334155" fontSize="11.5">triagem, resumos e</text>
              <text x="616" y="176" textAnchor="middle" fill="#0A345D" fontSize="11" fontWeight="700">auditoria de domínio</text>

              {/* Box 2 */}
              <rect x="729" y="92" width="192" height="100" rx="10" fill="#FFFFFF" stroke="#86EFAC" strokeWidth="2" />
              <text x="825" y="118" textAnchor="middle" fill="#0369A1" fontSize="12.5" fontWeight="800">🔌 Connectors</text>
              <text x="825" y="140" textAnchor="middle" fill="#334155" fontSize="11.5">Conexões autenticadas</text>
              <text x="825" y="158" textAnchor="middle" fill="#334155" fontSize="11.5">a Gmail, Drive, Slack,</text>
              <text x="825" y="176" textAnchor="middle" fill="#0A345D" fontSize="11" fontWeight="700">Calendar e ERPs</text>

              {/* Box 3 */}
              <rect x="938" y="92" width="192" height="100" rx="10" fill="#FFFFFF" stroke="#86EFAC" strokeWidth="2" />
              <text x="1034" y="118" textAnchor="middle" fill="#7E22CE" fontSize="12.5" fontWeight="800">🛠 MCP Tools</text>
              <text x="1034" y="140" textAnchor="middle" fill="#334155" fontSize="11.5">Model Context Protocol</text>
              <text x="1034" y="158" textAnchor="middle" fill="#334155" fontSize="11.5">expondo schemas e</text>
              <text x="1034" y="176" textAnchor="middle" fill="#0A345D" fontSize="11" fontWeight="700">ferramentas tipadas</text>

              {/* Box 4 */}
              <rect x="520" y="206" width="192" height="96" rx="10" fill="#FFFFFF" stroke="#86EFAC" strokeWidth="2" />
              <text x="616" y="232" textAnchor="middle" fill="#C2410C" fontSize="12.5" fontWeight="800">🌐 Browser Capabilities</text>
              <text x="616" y="254" textAnchor="middle" fill="#334155" fontSize="11.5">Capacidades de navegação</text>
              <text x="616" y="272" textAnchor="middle" fill="#334155" fontSize="11.5">e inspeção web/UI</text>

              {/* Box 5 */}
              <rect x="729" y="206" width="192" height="96" rx="10" fill="#FFFFFF" stroke="#86EFAC" strokeWidth="2" />
              <text x="825" y="232" textAnchor="middle" fill="#0A345D" fontSize="12.5" fontWeight="800">🪝 Supporting Hooks</text>
              <text x="825" y="254" textAnchor="middle" fill="#334155" fontSize="11.5">Gatilhos e verificações</text>
              <text x="825" y="272" textAnchor="middle" fill="#334155" fontSize="11.5">no ciclo de execução</text>

              {/* Box 6 */}
              <rect x="938" y="206" width="192" height="96" rx="10" fill="#FFFFFF" stroke="#86EFAC" strokeWidth="2" />
              <text x="1034" y="232" textAnchor="middle" fill="#166534" fontSize="12.5" fontWeight="800">⏰ Scheduled Templates</text>
              <text x="1034" y="254" textAnchor="middle" fill="#334155" fontSize="11.5">Templates para rotinas</text>
              <text x="1034" y="272" textAnchor="middle" fill="#334155" fontSize="11.5">recorrentes agendadas</text>
            </g>

            {/* Lifecycle Footer inside Plugin */}
            <rect x="520" y="314" width="610" height="36" rx="8" fill="#DCFCE7" stroke="#4ADE80" strokeWidth="1.5" />
            <text x="825" y="337" textAnchor="middle" fill="#166534" fontSize="12.5" fontWeight="800">
              CICLO GOVERNADO: Descoberto ➔ Instalado ➔ Governado por Escopo ➔ Compartilhado na Equipe
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Key Distinctions */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        <div style={{ background: '#EFF6FF', border: '1px solid #BAE6FD', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <KeyRound size={18} color="#0284C7" />
          <span style={{ fontSize: '0.82rem', color: '#0A345D', fontWeight: 700 }}>
            <strong>Conector:</strong> Canal autenticado ao sistema externo.
          </span>
        </div>
        <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BookOpen size={18} color="#EA580C" />
          <span style={{ fontSize: '0.82rem', color: '#9A3412', fontWeight: 700 }}>
            <strong>Skill:</strong> Método e regras de decisão reutilizáveis.
          </span>
        </div>
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PackageCheck size={18} color="#166534" />
          <span style={{ fontSize: '0.82rem', color: '#166534', fontWeight: 700 }}>
            <strong>Plugin:</strong> Empacota um ou ambos com governança de ciclo de vida.
          </span>
        </div>
      </div>
    </div>
  );
}
