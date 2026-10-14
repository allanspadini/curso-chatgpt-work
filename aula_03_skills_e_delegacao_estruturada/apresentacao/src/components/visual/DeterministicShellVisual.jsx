import React from 'react';
import { Layers, ShieldCheck, Sparkles, BookOpen, Cpu, Terminal } from 'lucide-react';

export default function DeterministicShellVisual() {
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
            <Layers size={20} color="#1BB5D8" />
          </div>
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0A345D' }}>
              O Princípio Arquitetural: Casca Determinística vs. Núcleo Dinâmico
            </div>
            <div style={{ fontSize: '0.82rem', color: '#475569' }}>
              Separe estritamente o que deve se comportar 100% igual do que exige raciocínio de contexto e julgamento de negócios.
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
          PADRÃO 1 DE AUTORIA
        </div>
      </div>

      {/* Grid Principal: Dois Lados da Moeda */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          flex: 1,
        }}
      >
        {/* Card 1: Casca Determinística (Shell) */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #D5E3EC',
            borderRadius: '14px',
            padding: '18px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#EDF5FA',
                  color: '#0A345D',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <ShieldCheck size={14} color="#0369A1" />
                CASCA DETERMINÍSTICA (SHELL)
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748B' }}>
                Scripts • Schemas • Código Rígido
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#0A345D',
                marginBottom: '10px',
              }}
            >
              Tudo o que NÃO PODE Variar entre Execuções
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Terminal size={18} color="#0369A1" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B' }}>Caminhos e Nomenclaturas Oficiais</div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B' }}>Pastas fixas, nomes de arquivos padronizados (/relatorios/ano_mes.csv).</div>
                </div>
              </div>

              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Cpu size={18} color="#0369A1" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B' }}>Validações Matemáticas e Regras Rígidas</div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B' }}>Somas contábeis, conversão de formatos e fórmulas exatas via scripts/.</div>
                </div>
              </div>

              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Layers size={18} color="#0369A1" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B' }}>Modelos e Schemas Estruturados</div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B' }}>Templates Word (.docx), colunas de planilhas e schemas de tabelas.</div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: '#EFF6FF',
              border: '1px solid #BFDBFE',
              borderRadius: '8px',
              padding: '10px 14px',
              fontSize: '0.82rem',
              color: '#1E40AF',
              fontWeight: 600,
            }}
          >
            <strong>Regra de Engenharia:</strong> Bloqueie em código ou template tudo que tem formato único e exato. A IA nunca deve "adivinhar" regras estáticas.
          </div>
        </div>

        {/* Card 2: Núcleo Dinâmico (Core) */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #D5E3EC',
            borderRadius: '14px',
            padding: '18px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#F0FDF4',
                  color: '#166534',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <Sparkles size={14} color="#166534" />
                NÚCLEO DINÂMICO (CORE)
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748B' }}>
                Prosa Natural • SKILL.md • Julgamento
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#0A345D',
                marginBottom: '10px',
              }}
            >
              Tudo o que EXIGE Raciocínio e Julgamento Contextual
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <BookOpen size={18} color="#15803D" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B' }}>Tom de Voz e Posicionamento Executivo</div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B' }}>Adequação ao público (diretoria vs. operacional, feedback empático vs. firme).</div>
                </div>
              </div>

              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Layers size={18} color="#15803D" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B' }}>Enquadramento de Descobertas Críticas</div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B' }}>Decidir se uma queixa isolada é um caso raro ou uma falha sistêmica grave.</div>
                </div>
              </div>

              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Sparkles size={18} color="#15803D" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B' }}>Sensibilidade a Exceções e Trade-Offs</div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B' }}>Avaliar quando uma regra geral deve ceder espaço ao bom senso estratégico.</div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: '#F0FDF4',
              border: '1px solid #BBF7D0',
              borderRadius: '8px',
              padding: '10px 14px',
              fontSize: '0.82rem',
              color: '#166534',
              fontWeight: 600,
            }}
          >
            <strong>Divulgação Progressiva:</strong> Mantenha o SKILL.md enxuto. Se o modelo só precisa da regra para <em>fazer bem feito</em> (e não para <em>decidir</em>), mova para <code style={{ fontFamily: 'var(--font-mono)' }}>references/</code>.
          </div>
        </div>
      </div>

      {/* Faixa Inferior de Síntese Operacional */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '10px',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 600 }}>
          <strong style={{ color: '#0A345D' }}>Dúvida Prática:</strong> Arquivo em <code style={{ fontFamily: 'var(--font-mono)', color: '#0369A1' }}>references/</code> ou Skill separada?
        </div>
        <div style={{ fontSize: '0.82rem', color: '#1E293B', fontWeight: 700 }}>
          Contexto passivo que molda o trabalho ➔ <span style={{ color: '#0369A1' }}>Arquivo de Referência</span> | Decisão ativa com lógica própria ➔ <span style={{ color: '#15803D' }}>Skill Separada</span>
        </div>
      </div>
    </div>
  );
}
