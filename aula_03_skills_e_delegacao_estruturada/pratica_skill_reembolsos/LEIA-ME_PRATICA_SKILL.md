# Guia Prático do Aluno: Engenharia e Auditoria com Skills no ChatGPT Work

**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet  
**Atividade:** Auditoria de Reembolsos e Prestação de Contas Corporativas

---

## 🎯 Objetivo da Prática
Você é o Auditor Financeiro Sênior da Infnet Corp. Sua missão é automatizar a triagem e conferência de prestações de contas de viagens corporativas utilizando o conceito de **Skill** no **ChatGPT Work**.

---

## 📁 Estrutura de Arquivos deste Pacote
```text
pratica_skill_reembolsos/
├── comprovantes_viagem/
│   ├── relatorio_viagem_joao_silva.pdf     <-- Caso 1: Viagem para SP com anomalias e glosas
│   └── relatorio_viagem_maria_santos.pdf   <-- Caso 2: Viagem para Curitiba (caso regular)
│
└── skill_auditoria_reembolsos/              <-- A Skill que empacota o método
    ├── SKILL.md                            <-- Instruções, gatilhos e regras do especialista
    ├── references/
    │   ├── politica_viagens_2026.md        <-- Política oficial da empresa (25 regras)
    │   └── tabela_tetos_cidades.json       <-- Limites de diárias por cidade
    ├── scripts/
    │   └── validar_reembolso.py            <-- Calculadora determinística sem alucinação
    └── assets/
        └── modelo_formulario_prestacao_contas.md <-- Template oficial da controladoria
```

---

## 🚀 Passo a Passo de Execução

### Passo 1: O Teste no Chat Simples (Sem Skill)
1. Abra uma conversa convencional no ChatGPT comum.
2. Faça o upload do arquivo `relatorio_viagem_joao_silva.pdf` e peça:
   > *"Analise os recibos deste colaborador e me diga quanto devo pagar para ele."*
3. **Observe o resultado:** O modelo não conhece a política de viagens da empresa, não sabe os tetos de São Paulo, não glosa a bebida alcoólica e erra as somas matemáticas de centavos.

### Passo 2: Operação no ChatGPT Work com a Skill Ativa
1. No ChatGPT Work, abra o projeto corporativo e aponte para a pasta `skill_auditoria_reembolsos/`.
2. Forneça o arquivo `relatorio_viagem_joao_silva.pdf` e execute a delegação:
   > *"Por favor, faça a auditoria da prestação de contas de João Silva seguindo a nossa skill de auditoria de reembolsos. Gere o parecer oficial de liquidação no modelo da controladoria."*
3. **Observe a Mágica da Engenharia de Skills:**
   - O agente detecta o gatilho semântico no cabeçalho do `SKILL.md`;
   - Consulta a `politica_viagens_2026.md` sob demanda;
   - Executa nos bastidores o script determinístico de cálculo matemático;
   - Glosa a cerveja artesanal (R$ 50,00), o excesso do hotel em SP (R$ 140,00), a corrida noturna sem justificativa (R$ 75,00), a despesa de farmácia (R$ 65,00) e retém o canhoto sem NF (R$ 110,00);
   - Gera o arquivo `parecer_prestacao_contas_joao_silva.md` preenchido no template oficial de `assets/`!

### Passo 3: Teste de Validação Multi-Cenário (Caso 2)
1. Repita a mesma operação fornecendo o arquivo `relatorio_viagem_maria_santos.pdf`.
2. Comprove que a Skill reconhece que todas as despesas de Curitiba estão dentro dos tetos municipais e aprova o valor integral de **R$ 370,00** sem glosas indevidas.

---

## 🏆 Entregáveis da Atividade
1. O arquivo `parecer_prestacao_contas_joao_silva.md` gerado pelo ChatGPT Work.
2. O arquivo `parecer_prestacao_contas_maria_santos.md`.
3. Um breve parágrafo comparativo destacando por que a Skill superou o Chat simples em precisão e governança.
