import React from 'react';
import { ArrowDown, Layers, Terminal, CheckCircle2, CornerDownRight, FileText, Sparkles } from 'lucide-react';

export default function DiscoveryPrecedenceVisual() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        gap: '12px',
      }}
    >
      {/* Top Banner Notice */}
      <div
        className="banner-notice"
        style={{
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Layers size={20} color="#0A345D" />
          <span style={{ fontSize: '0.9rem', color: '#0A345D', fontWeight: 700 }}>
            Mecânica Algorítmica:
          </span>
          <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 500 }}>
            Cadeia de Descoberta e Precedência em 3 Camadas: Concatenação Top-Down e Soberania do Nó Folha.
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#0369A1',
            background: '#E0F2FE',
            padding: '3px 8px',
            borderRadius: '4px',
          }}
        >
          ALGORITMO CODEX
        </span>
      </div>

      {/* 3 Columns Diagram: Global ➔ Project ➔ Merge Order */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr 1fr',
          gap: '16px',
          flex: 1,
          alignItems: 'stretch',
        }}
      >
        {/* Layer 1: Global Scope */}
        <div
          className="card-base"
          style={{
            padding: '16px 18px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '4px solid #0A345D',
            background: '#FFFFFF',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0A345D', textTransform: 'uppercase' }}>
                Camada 1: Global Scope
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B' }}>~/.codex/</span>
            </div>

            <div style={{ fontSize: '0.82rem', color: '#334155', marginBottom: '12px', lineHeight: '1.4' }}>
              Avalia o diretório pessoal do desenvolvedor. Aplica preferências persistentes para todos os repositórios da máquina.
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '10px 12px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                ORDEM DE BUSCA (Apenas 1 arquivo):
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.76rem', fontFamily: 'var(--font-mono)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#C2410C' }}>
                  <span style={{ background: '#FFEDD5', padding: '1px 4px', borderRadius: '3px' }}>1º</span> AGENTS.override.md
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0A345D' }}>
                  <span style={{ background: '#EDF5FA', padding: '1px 4px', borderRadius: '3px' }}>2º</span> AGENTS.md
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: '#EDF5FA', padding: '8px 10px', borderRadius: '6px', fontSize: '0.74rem', color: '#0369A1' }}>
            💡 Carrega apenas o primeiro arquivo não-vazio. Pula se ambos estiverem vazios.
          </div>
        </div>

        {/* Layer 2: Project Scope Walkdown */}
        <div
          className="card-base"
          style={{
            padding: '16px 18px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '4px solid #0369A1',
            background: '#FFFFFF',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0369A1', textTransform: 'uppercase' }}>
                Camada 2: Project Scope
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B' }}>Git Root ➔ CWD</span>
            </div>

            <div style={{ fontSize: '0.82rem', color: '#334155', marginBottom: '12px', lineHeight: '1.4' }}>
              Caminha recursivamente da raiz do Git até o diretório atual de trabalho. Em <strong>cada pasta</strong> do caminho:
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '10px 12px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                POR DIRETÓRIO (Máximo 1 arquivo):
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                <div style={{ color: '#C2410C' }}>1º AGENTS.override.md</div>
                <div style={{ color: '#0A345D' }}>2º AGENTS.md</div>
                <div style={{ color: '#64748B' }}>3º Fallbacks (ex: TEAM_GUIDE.md)</div>
              </div>
            </div>
          </div>

          <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', padding: '8px 10px', borderRadius: '6px', fontSize: '0.74rem', color: '#166534' }}>
            ✓ Coleta no máximo 1 arquivo por diretório visitado ao longo do caminho de navegação.
          </div>
        </div>

        {/* Layer 3: Merge Order & Precedence */}
        <div
          className="card-base"
          style={{
            padding: '16px 18px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '4px solid #166534',
            background: '#FFFFFF',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase' }}>
                Camada 3: Merge & Soberania
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#166534', fontWeight: 700 }}>Last-In Wins</span>
            </div>

            <div style={{ fontSize: '0.82rem', color: '#334155', marginBottom: '12px', lineHeight: '1.4' }}>
              Concatenação linear Top-Down unida por linhas em branco. A física do modelo confere precedência ao final do prompt:
            </div>

            {/* Prompt Assembly Waterfall */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '4px', padding: '6px 8px', fontSize: '0.74rem' }}>
                <strong>Topo:</strong> Global ~/.codex/AGENTS.md
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ArrowDown size={14} color="#64748B" />
              </div>
              <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '4px', padding: '6px 8px', fontSize: '0.74rem' }}>
                <strong>Meio:</strong> Raiz repo/AGENTS.md
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ArrowDown size={14} color="#64748B" />
              </div>
              <div style={{ background: '#DCFCE7', border: '2px solid #86EFAC', borderRadius: '4px', padding: '6px 8px', fontSize: '0.74rem', color: '#166534', fontWeight: 700 }}>
                <strong>Fundo:</strong> services/payments/AGENTS.override.md (Maior Peso)
              </div>
            </div>
          </div>

          <div style={{ background: '#FEF3C7', padding: '6px 8px', borderRadius: '4px', fontSize: '0.72rem', color: '#92400E', fontWeight: 600, textAlign: 'center' }}>
            Regra de Ouro: Arquivos mais próximos do CWD sobrescrevem diretrizes anteriores.
          </div>
        </div>
      </div>
    </div>
  );
}
