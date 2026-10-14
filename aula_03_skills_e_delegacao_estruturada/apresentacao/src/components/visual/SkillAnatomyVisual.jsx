import React from 'react';
import {
  Folder,
  FileText,
  BookOpen,
  Cog,
  LayoutTemplate,
  CheckCircle,
  FileCode,
  Image as ImageIcon,
  Palette,
  FileCheck
} from 'lucide-react';

export default function SkillAnatomyVisual() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        padding: '0 6px',
        gap: '16px',
      }}
    >
      {/* Top Context Banner */}
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
            ESTRUTURA DE DIRETÓRIOS
          </span>
          <span style={{ fontSize: '0.92rem', color: '#0A345D', fontWeight: 700 }}>
            Anatomia de uma Skill: O Empacotamento Físico da Expertise
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
            1 ARQUIVO OBRIGATÓRIO (SKILL.MD)
          </span>
          <span
            style={{
              backgroundColor: '#EFF6FF',
              color: '#1E40AF',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.76rem',
              fontWeight: 700,
              border: '1px solid #93C5FD',
            }}
          >
            3 PASTAS OPCIONAIS DE APOIO
          </span>
        </div>
      </div>

      {/* Main Grid: Tree Structure on Left + 4 Concept Cards on Right */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '460px 1fr',
          gap: '20px',
          alignItems: 'stretch',
        }}
      >
        {/* Left Column: Visual File Explorer Tree */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #D0E3F0',
            borderRadius: '14px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Explorer Header */}
          <div
            style={{
              background: '#F1F5F9',
              borderBottom: '1px solid #E2E8F0',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
              <span
                style={{
                  marginLeft: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#0A345D',
                }}
              >
                /my-skill
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: '#64748B',
                fontWeight: 600,
              }}
            >
              PASTA RAIZ
            </span>
          </div>

          {/* Tree Structure Content */}
          <div
            style={{
              padding: '18px 20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.86rem',
              lineHeight: 1.85,
              color: '#1E293B',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            {/* Root item */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, color: '#0A345D' }}>
              <Folder size={18} color="#0A345D" />
              <span>/my-skill</span>
            </div>

            {/* Tree Branch: SKILL.md */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: '22px',
                background: '#F0F9FF',
                borderRadius: '6px',
                padding: '3px 8px 3px 22px',
                border: '1px solid #BAE6FD',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#0284C7', fontWeight: 700 }}>├──</span>
                <FileText size={16} color="#0284C7" />
                <span style={{ fontWeight: 800, color: '#0369A1' }}>SKILL.md</span>
              </div>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  background: '#0284C7',
                  color: '#FFFFFF',
                  padding: '1px 8px',
                  borderRadius: '10px',
                }}
              >
                OBRIGATÓRIO
              </span>
            </div>

            {/* Tree Branch: references/ */}
            <div style={{ paddingLeft: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#94A3B8' }}>├──</span>
                <Folder size={16} color="#7E22CE" />
                <span style={{ fontWeight: 700, color: '#7E22CE' }}>references/</span>
                <span style={{ fontSize: '0.68rem', color: '#6B21A8', background: '#F3E8FF', padding: '1px 6px', borderRadius: '4px' }}>
                  Documentação
                </span>
              </div>
              <div style={{ paddingLeft: '28px', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#CBD5E1' }}>│   ├──</span>
                <FileCheck size={14} color="#64748B" />
                <span>style_guide.pdf</span>
              </div>
              <div style={{ paddingLeft: '28px', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#CBD5E1' }}>│   └──</span>
                <FileText size={14} color="#64748B" />
                <span>api_patterns.md</span>
              </div>
            </div>

            {/* Tree Branch: scripts/ */}
            <div style={{ paddingLeft: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#94A3B8' }}>├──</span>
                <Folder size={16} color="#15803D" />
                <span style={{ fontWeight: 700, color: '#15803D' }}>scripts/</span>
                <span style={{ fontSize: '0.68rem', color: '#166534', background: '#DCFCE7', padding: '1px 6px', borderRadius: '4px' }}>
                  Automações
                </span>
              </div>
              <div style={{ paddingLeft: '28px', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#CBD5E1' }}>│   ├──</span>
                <FileCode size={14} color="#15803D" />
                <span>validate.py</span>
              </div>
              <div style={{ paddingLeft: '28px', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#CBD5E1' }}>│   └──</span>
                <FileCode size={14} color="#15803D" />
                <span>convert.sh</span>
              </div>
            </div>

            {/* Tree Branch: assets/ */}
            <div style={{ paddingLeft: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#94A3B8' }}>└──</span>
                <Folder size={16} color="#C2410C" />
                <span style={{ fontWeight: 700, color: '#C2410C' }}>assets/</span>
                <span style={{ fontSize: '0.68rem', color: '#9A3412', background: '#FFEDD5', padding: '1px 6px', borderRadius: '4px' }}>
                  Templates & Mídia
                </span>
              </div>
              <div style={{ paddingLeft: '28px', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#CBD5E1' }}>    ├──</span>
                <LayoutTemplate size={14} color="#C2410C" />
                <span>template.docx</span>
              </div>
              <div style={{ paddingLeft: '28px', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#CBD5E1' }}>    ├──</span>
                <ImageIcon size={14} color="#C2410C" />
                <span>brand-logo.png</span>
              </div>
              <div style={{ paddingLeft: '28px', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#CBD5E1' }}>    └──</span>
                <Palette size={14} color="#C2410C" />
                <span>theme.css</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Clean Semantic Cards for Non-Programmers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'space-between' }}>
          {/* Card 1: SKILL.md */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #BAE6FD',
              borderLeft: '5px solid #0284C7',
              borderRadius: '10px',
              padding: '12px 16px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={18} color="#0284C7" />
                <span style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '1rem', color: '#0A345D' }}>
                  SKILL.md (O Cérebro da Operação)
                </span>
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0369A1', background: '#E0F2FE', padding: '2px 8px', borderRadius: '12px' }}>
                ÚNICO OBRIGATÓRIO
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.84rem', color: '#334155', lineHeight: 1.4 }}>
              O documento em texto que o agente lê para saber o que fazer. Contém o cabeçalho <strong>YAML</strong> (palavras que ativam a skill) e a <strong>receita de bolo</strong> passo a passo com o julgamento do especialista.
            </p>
          </div>

          {/* Card 2: references/ */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #E9D5FF',
              borderLeft: '5px solid #7E22CE',
              borderRadius: '10px',
              padding: '12px 16px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={18} color="#7E22CE" />
                <span style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '1rem', color: '#0A345D' }}>
                  references/ (Documentação Sob Demanda)
                </span>
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#6B21A8', background: '#F3E8FF', padding: '2px 8px', borderRadius: '12px' }}>
                OPCIONAL • CONSULTA
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.84rem', color: '#334155', lineHeight: 1.4 }}>
              Manuais de políticas, tabelas de consulta e normas da empresa. O agente só pesquisa aqui quando tiver dúvida pontual, evitando gastar espaço de memória no chat à toa.
            </p>
          </div>

          {/* Card 3: scripts/ */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #BBF7D0',
              borderLeft: '5px solid #16A34A',
              borderRadius: '10px',
              padding: '12px 16px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cog size={18} color="#16A34A" />
                <span style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '1rem', color: '#0A345D' }}>
                  scripts/ (Automações Prontas nos Bastidores)
                </span>
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#166534', background: '#DCFCE7', padding: '2px 8px', borderRadius: '12px' }}>
                OPCIONAL • ZERO CÓDIGO DO USUÁRIO
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.84rem', color: '#334155', lineHeight: 1.4 }}>
              Cálculos exatos de matemática, conferência de centavos e validações rígidas. O usuário final não programa nada: o agente roda as rotinas prontas por trás dos panos sem alucinar.
            </p>
          </div>

          {/* Card 4: assets/ */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #FED7AA',
              borderLeft: '5px solid #EA580C',
              borderRadius: '10px',
              padding: '12px 16px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <LayoutTemplate size={18} color="#EA580C" />
                <span style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '1rem', color: '#0A345D' }}>
                  assets/ (Modelos Oficiais e Identidade Visual)
                </span>
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#9A3412', background: '#FFEDD5', padding: '2px 8px', borderRadius: '12px' }}>
                OPCIONAL • PADRÃO INSTITUCIONAL
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.84rem', color: '#334155', lineHeight: 1.4 }}>
              O modelo oficial em Word (<code>.docx</code>) da empresa, logotipos institucionais e temas. O agente não entrega texto solto: ele gera o relatório oficial pronto para assinatura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
