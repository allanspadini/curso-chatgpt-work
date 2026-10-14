import React from 'react';
import { AlertTriangle, XCircle, ShieldAlert, FileQuestion, Flame, Sliders, Copy } from 'lucide-react';

export default function SkillAntiPatternsVisual() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '2px 8px',
        gap: '10px',
      }}
    >
      {/* Banner Superior Explicativo */}
      <div
        style={{
          background: '#FEF2F2',
          border: '1px solid #FCA5A5',
          borderRadius: '12px',
          padding: '10px 20px',
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
              background: '#991B1B',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AlertTriangle size={20} color="#FFFFFF" />
          </div>
          <div>
            <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#991B1B' }}>
              Os 5 Grandes Anti-Padrões de Skills: Armadilhas do Mundo Corporativo
            </div>
            <div style={{ fontSize: '0.8rem', color: '#7F1D1D' }}>
              Padrões que parecem produtivos à primeira vista, mas degradam a qualidade e sabotam o controle executivo.
            </div>
          </div>
        </div>
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #FCA5A5',
            borderRadius: '20px',
            padding: '4px 14px',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#991B1B',
            fontFamily: 'var(--font-mono)',
          }}
        >
          O LADO SOMBRIO DA AUTOMAÇÃO
        </div>
      </div>

      {/* Grid Principal: Os 5 Anti-Padrões */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          flex: 1,
        }}
      >
        {/* Anti-Padrão 1: A Mega-Skill */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderTop: '3px solid #991B1B',
            borderRadius: '10px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <XCircle size={16} color="#991B1B" />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#991B1B' }}>
                1. A Mega-Skill Monolítica
              </span>
            </div>
            <p style={{ fontSize: '0.76rem', color: '#475569', lineHeight: 1.35, marginBottom: '8px' }}>
              Tentar resolver 5 etapas num único <code style={{ fontFamily: 'var(--font-mono)' }}>SKILL.md</code>: pesquisa, triagem, redação, disparo de e-mails e notificação.
            </p>
            <div style={{ background: '#FEF2F2', borderRadius: '6px', padding: '6px 8px', fontSize: '0.72rem', color: '#7F1D1D' }}>
              <strong>Risco:</strong> Um erro inicial contamina todo o pipeline sem que o humano possa intervir a tempo.
            </div>
          </div>
          <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600, borderTop: '1px solid #F1F5F9', paddingTop: '6px' }}>
            Remédio: 1 Skill = 1 responsabilidade única com checkpoint.
          </div>
        </div>

        {/* Anti-Padrão 2: Reporting Slop */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderTop: '3px solid #EA580C',
            borderRadius: '10px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <FileQuestion size={16} color="#EA580C" />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#EA580C' }}>
                2. "Reporting Slop"
              </span>
            </div>
            <p style={{ fontSize: '0.76rem', color: '#475569', lineHeight: 1.35, marginBottom: '8px' }}>
              Relatórios volumosos com tabelas perfeitas, gráficos e tom corporativo polido, mas com <strong>zero substância</strong> de negócio.
            </p>
            <div style={{ background: '#FFF7ED', borderRadius: '6px', padding: '6px 8px', fontSize: '0.72rem', color: '#9A3412' }}>
              <strong>Risco:</strong> Camuflagem de competência que induz decisões erradas da diretoria.
            </div>
          </div>
          <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600, borderTop: '1px solid #F1F5F9', paddingTop: '6px' }}>
            Remédio: Exigir evidências citadas e checagem de fontes primárias.
          </div>
        </div>

        {/* Anti-Padrão 3: Trocar Intuição por Notas de IA */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderTop: '3px solid #0369A1',
            borderRadius: '10px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Sliders size={16} color="#0369A1" />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0369A1' }}>
                3. Lavagem de Intuição por Score
              </span>
            </div>
            <p style={{ fontSize: '0.76rem', color: '#475569', lineHeight: 1.35, marginBottom: '8px' }}>
              Ajustar pesos matemáticos na pontuação da IA até que ela concorde com seu viés prévio, simulando objetividade.
            </p>
            <div style={{ background: '#EFF6FF', borderRadius: '6px', padding: '6px 8px', fontSize: '0.72rem', color: '#1E40AF' }}>
              <strong>Risco:</strong> A discordância entre a IA e seu 'feeling' é exatamente o dado mais valioso!
            </div>
          </div>
          <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600, borderTop: '1px solid #F1F5F9', paddingTop: '6px' }}>
            Remédio: O modelo calcula e enquadra; o líder decide a prioridade.
          </div>
        </div>

        {/* Anti-Padrão 4: Saídas como Copiar-Colar */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderTop: '3px solid #7C3AED',
            borderRadius: '10px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Copy size={16} color="#7C3AED" />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#7C3AED' }}>
                4. A Armadilha do Copiar e Colar
              </span>
            </div>
            <p style={{ fontSize: '0.76rem', color: '#475569', lineHeight: 1.35, marginBottom: '8px' }}>
              Assumir que, por ter uma aparência impecável e bem formatada, a resposta gerada está pronta para envio sem revisão.
            </p>
            <div style={{ background: '#FAF5FF', borderRadius: '6px', padding: '6px 8px', fontSize: '0.72rem', color: '#6B21A8' }}>
              <strong>Risco:</strong> Toda saída de IA é um <em>rascunho (draft)</em> até a validação do humano responsável.
            </div>
          </div>
          <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600, borderTop: '1px solid #F1F5F9', paddingTop: '6px' }}>
            Remédio: Instrua a Skill a marcar com [?] dados não confirmados.
          </div>
        </div>

        {/* Anti-Padrão 5: Baixar Skills de Estranhos */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderTop: '3px solid #DC2626',
            borderRadius: '10px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
            gridColumn: 'span 2',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldAlert size={16} color="#DC2626" />
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#DC2626' }}>
                  5. Baixar Skills Aleatórias de Estranhos na Internet
                </span>
              </div>
              <span style={{ fontSize: '0.72rem', background: '#FEF2F2', color: '#991B1B', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>
                RISCO DE SEGURANÇA
              </span>
            </div>
            <p style={{ fontSize: '0.76rem', color: '#475569', lineHeight: 1.35, marginBottom: '8px' }}>
              Carregar um repositório ou pasta <code style={{ fontFamily: 'var(--font-mono)' }}>SKILL.md</code> desconhecido na sua máquina é o equivalente a colar o prompt e scripts de um estranho com acesso total aos seus documentos locais.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '6px', fontSize: '0.7rem', textAlign: 'center', color: '#0A345D', fontWeight: 600 }}>
                1. Quem escreveu? (Autoria)
              </div>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '6px', fontSize: '0.7rem', textAlign: 'center', color: '#0A345D', fontWeight: 600 }}>
                2. Você leu o SKILL.md?
              </div>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '6px', fontSize: '0.7rem', textAlign: 'center', color: '#0A345D', fontWeight: 600 }}>
                3. Acessa dados locais?
              </div>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '6px', fontSize: '0.7rem', textAlign: 'center', color: '#0A345D', fontWeight: 600 }}>
                4. Roda scripts externos?
              </div>
            </div>
          </div>
          <div style={{ fontSize: '0.7rem', color: '#991B1B', fontWeight: 700, borderTop: '1px solid #F1F5F9', paddingTop: '6px' }}>
            Checklist Obrigatório: Se você não executaria um arquivo .exe de um estranho, não instale uma Skill sem inspecioná-la antes!
          </div>
        </div>
      </div>

      {/* Faixa Inferior de Síntese */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '10px',
          padding: '8px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 600 }}>
          <strong style={{ color: '#0A345D' }}>Dica de Mestre:</strong> O "Protótipo Deliberadamente Ruim" (Deliberately Bad Prototype) é uma técnica válida!
        </div>
        <div style={{ fontSize: '0.8rem', color: '#1E293B', fontWeight: 700 }}>
          Construa intencionalmente uma versão extrema para descobrir onde o plano falha antes do projeto oficial.
        </div>
      </div>
    </div>
  );
}
