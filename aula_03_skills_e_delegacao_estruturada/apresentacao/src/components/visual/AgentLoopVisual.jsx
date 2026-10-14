import React from 'react';
import { User, Cpu, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AgentLoopVisual() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        padding: '0 8px',
        gap: '14px',
      }}
    >
      {/* Top Context Header */}
      <div
        style={{
          background: '#EDF5FA',
          border: '1px solid #D0E3F0',
          borderRadius: '12px',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              backgroundColor: '#0A345D',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.78rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.5px',
            }}
          >
            MECANISMO DE EXECUÇÃO
          </span>
          <span style={{ fontSize: '0.92rem', color: '#0A345D', fontWeight: 700 }}>
            The Agent Loop: O Ciclo Fechado entre Usuário, Modelo e Ferramentas
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              backgroundColor: '#EFF6FF',
              color: '#0369A1',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.76rem',
              fontWeight: 700,
              border: '1px solid #BAE6FD',
            }}
          >
            FUNDAMENTO DO CHATGPT WORK
          </span>
          <span
            style={{
              backgroundColor: '#F0FDF4',
              color: '#166534',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.76rem',
              fontWeight: 700,
              border: '1px solid #86EFAC',
            }}
          >
            CICLO AUTÔNOMO MULTI-ETAPAS
          </span>
        </div>
      </div>

      {/* Main Diagram Card with High-Precision SVG */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #D0E3F0',
          borderRadius: '14px',
          padding: '16px 20px 10px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* SVG Drawing of the Agent Loop */}
        <svg
          viewBox="0 0 1100 280"
          style={{ width: '100%', maxHeight: '310px' }}
        >
          <defs>
            {/* Markers for Arrowheads */}
            <marker
              id="arrow-black"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0A345D" />
            </marker>

            <marker
              id="arrow-coral-right"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#EA580C" />
            </marker>

            <marker
              id="arrow-coral-down"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#EA580C" />
            </marker>

            <marker
              id="arrow-green-up"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#16A34A" />
            </marker>
          </defs>

          {/* ========================================================
              PATH 3: TOOL OUTPUT (Curved Loop on Top, Coral/Orange)
             ======================================================== */}
          <path
            d="M 945 90 C 945 22, 530 22, 530 65"
            fill="none"
            stroke="#EA580C"
            strokeWidth="7"
            strokeLinecap="round"
            markerEnd="url(#arrow-coral-down)"
          />
          <rect x="670" y="24" width="130" height="24" rx="12" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1" />
          <text
            x="735"
            y="40"
            textAnchor="middle"
            fill="#C2410C"
            fontSize="12"
            fontFamily="var(--font-mono)"
            fontWeight="800"
          >
            tool output
          </text>

          {/* ========================================================
              PATH 4: RESPONSE (Curved Loop on Bottom, Green)
             ======================================================== */}
          <path
            d="M 530 230 C 530 272, 115 272, 115 208"
            fill="none"
            stroke="#16A34A"
            strokeWidth="7"
            strokeLinecap="round"
            markerEnd="url(#arrow-green-up)"
          />
          <rect x="250" y="248" width="120" height="24" rx="12" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1" />
          <text
            x="310"
            y="264"
            textAnchor="middle"
            fill="#166534"
            fontSize="12"
            fontFamily="var(--font-mono)"
            fontWeight="800"
          >
            response
          </text>

          {/* ========================================================
              PATH 1: PROMPT (User -> LLM, Black/Navy Line)
             ======================================================== */}
          <line
            x1="185"
            y1="145"
            x2="410"
            y2="145"
            stroke="#0A345D"
            strokeWidth="3.5"
            strokeLinecap="round"
            markerEnd="url(#arrow-black)"
          />
          <rect x="245" y="118" width="105" height="22" rx="11" fill="#EDF5FA" stroke="#BAE6FD" strokeWidth="1" />
          <text
            x="297"
            y="133"
            textAnchor="middle"
            fill="#0A345D"
            fontSize="12"
            fontFamily="var(--font-mono)"
            fontWeight="800"
          >
            prompt
          </text>

          {/* ========================================================
              PATH 2: TOOL CALL (LLM -> Tool, Horizontal Coral)
             ======================================================== */}
          <line
            x1="645"
            y1="145"
            x2="855"
            y2="145"
            stroke="#EA580C"
            strokeWidth="7"
            strokeLinecap="round"
            markerEnd="url(#arrow-coral-right)"
          />
          <rect x="705" y="118" width="105" height="22" rx="11" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1" />
          <text
            x="757"
            y="133"
            textAnchor="middle"
            fill="#C2410C"
            fontSize="12"
            fontFamily="var(--font-mono)"
            fontWeight="800"
          >
            tool call
          </text>

          {/* ========================================================
              NODE 1: USER (Left Card)
             ======================================================== */}
          <g transform="translate(45, 85)">
            <rect
              width="140"
              height="120"
              rx="12"
              fill="#FFFFFF"
              stroke="#0A345D"
              strokeWidth="2.5"
              filter="drop-shadow(0 4px 6px rgba(10,52,93,0.08))"
            />
            {/* User Icon Graphic */}
            <circle cx="70" cy="40" r="15" fill="#EDF5FA" stroke="#0A345D" strokeWidth="2" />
            <path d="M 46 72 C 46 56, 94 56, 94 72 Z" fill="#EDF5FA" stroke="#0A345D" strokeWidth="2" />
            <text x="70" y="94" textAnchor="middle" fill="#0A345D" fontSize="16" fontFamily="var(--font-title)" fontWeight="900" letterSpacing="0.5">
              USER
            </text>
            <text x="70" y="108" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="var(--font-body)" fontWeight="600">
              Operador Humano
            </text>
          </g>

          {/* ========================================================
              NODE 2: LLM (Central Rounded Box)
             ======================================================== */}
          <g transform="translate(420, 55)">
            <rect
              width="220"
              height="180"
              rx="24"
              fill="#FFFFFF"
              stroke="#0A345D"
              strokeWidth="3.5"
              filter="drop-shadow(0 6px 14px rgba(10,52,93,0.12))"
            />
            {/* Inner Top Accent Banner */}
            <rect x="0" y="0" width="220" height="8" rx="4" fill="#0A345D" />
            
            <circle cx="110" cy="50" r="22" fill="#EDF5FA" stroke="#0284C7" strokeWidth="2" />
            <text x="110" y="56" textAnchor="middle" fill="#0284C7" fontSize="18">⚙️</text>

            <text x="110" y="102" textAnchor="middle" fill="#0A345D" fontSize="30" fontFamily="var(--font-title)" fontWeight="900" letterSpacing="1">
              LLM
            </text>
            <text x="110" y="124" textAnchor="middle" fill="#0369A1" fontSize="12" fontFamily="var(--font-title)" fontWeight="800">
              Cérebro do Agente
            </text>
            <rect x="25" y="136" width="170" height="24" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
            <text x="110" y="152" textAnchor="middle" fill="#475569" fontSize="10.5" fontFamily="var(--font-body)" fontWeight="700">
              Interpreta, Decide & Planeja
            </text>
          </g>

          {/* ========================================================
              NODE 3: TOOL (Right Square Box)
             ======================================================== */}
          <g transform="translate(865, 85)">
            <rect
              width="150"
              height="120"
              rx="12"
              fill="#FFFFFF"
              stroke="#0A345D"
              strokeWidth="2.5"
              filter="drop-shadow(0 4px 6px rgba(10,52,93,0.08))"
            />
            {/* Tool Icon Graphic */}
            <rect x="55" y="24" width="40" height="32" rx="6" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2" />
            <text x="75" y="45" textAnchor="middle" fill="#EA580C" fontSize="16">🔧</text>

            <text x="75" y="86" textAnchor="middle" fill="#0A345D" fontSize="16" fontFamily="var(--font-title)" fontWeight="900" letterSpacing="0.5">
              TOOL
            </text>
            <text x="75" y="104" textAnchor="middle" fill="#C2410C" fontSize="10.5" fontFamily="var(--font-mono)" fontWeight="700">
              scripts/ & APIs
            </text>
          </g>
        </svg>
      </div>

      {/* 4 Bottom Cards Explaining the Loop Steps for Non-Programmers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
        }}
      >
        {/* Step 1 */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #D0E3F0',
            borderTop: '3px solid #0A345D',
            borderRadius: '8px',
            padding: '10px 12px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0A345D', fontFamily: 'var(--font-mono)' }}>
              1. PROMPT
            </span>
          </div>
          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0A345D', marginBottom: '2px' }}>
            Intenção do Usuário
          </div>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#475569', lineHeight: 1.35 }}>
            O colaborador envia os documentos e a meta (ex: <i>"audite os recibos do João Silva"</i>).
          </p>
        </div>

        {/* Step 2 */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #FED7AA',
            borderTop: '3px solid #EA580C',
            borderRadius: '8px',
            padding: '10px 12px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#C2410C', fontFamily: 'var(--font-mono)' }}>
              2. TOOL CALL
            </span>
          </div>
          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0A345D', marginBottom: '2px' }}>
            Chamada de Ação
          </div>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#475569', lineHeight: 1.35 }}>
            A LLM avalia a Skill e decide acionar um script determinístico ou ler um regulamento em <code>references/</code>.
          </p>
        </div>

        {/* Step 3 */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #FED7AA',
            borderTop: '3px solid #EA580C',
            borderRadius: '8px',
            padding: '10px 12px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#C2410C', fontFamily: 'var(--font-mono)' }}>
              3. TOOL OUTPUT
            </span>
          </div>
          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0A345D', marginBottom: '2px' }}>
            Retorno Matemático
          </div>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#475569', lineHeight: 1.35 }}>
            A ferramenta roda nos bastidores e devolve os dados exatos sem alucinação, retroalimentando o modelo.
          </p>
        </div>

        {/* Step 4 */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #BBF7D0',
            borderTop: '3px solid #16A34A',
            borderRadius: '8px',
            padding: '10px 12px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#166534', fontFamily: 'var(--font-mono)' }}>
              4. RESPONSE
            </span>
          </div>
          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0A345D', marginBottom: '2px' }}>
            Parecer Consolidado
          </div>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#475569', lineHeight: 1.35 }}>
            O agente preenche o modelo oficial (Word/Markdown) e entrega o desfecho final pronto para o gestor.
          </p>
        </div>
      </div>
    </div>
  );
}
