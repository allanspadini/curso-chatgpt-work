# 🗂️ Roteiro Geral das Práticas da Aula 5 (Ponte Final da Aula 4 + Capítulos 9, 10 e 11)

**Disciplina:** Processos Agênticos com ChatGPT Work [26E4_2]  
**Instituição:** Instituto Infnet — Pós-Graduação EAD em IA e Engenharia de Software  
**Professor:** Prof. Dr. Allan Segovia-Spadini  

Este diretório reúne **4 laboratórios práticos completos** (1 de fechamento do final da Aula 4 com IA no Navegador + 3 cobrindo integralmente as boas práticas e rubricas dos Capítulos 9, 10 e 11 da Aula 5).

---

## 🧭 Mapa Rápido das 4 Pastas Práticas da Aula 5

| Ordem | Pasta da Prática | Capítulo / Foco Central | Boas Práticas Exercitadas | Rubricas do Projeto |
| :--- | :--- | :--- | :--- | :--- |
| **Prática 0 (Aquecimento)** | [`pratica_navegador_triagem_inbox/`](./pratica_navegador_triagem_inbox/) | **Final da Aula 4 (Cap. 8):** IA + Navegador em Triagem Governada de Webmail | • Classificação nos 4 Grupos Operacionais de Inbox<br>• Checagem da última mensagem da thread (`TH-102`)<br>• Voz autoral via *Sent Mail* ignorando encaminhados (`SENT-03`)<br>• Defesa contra *Indirect Prompt Injection* (`Dados ≠ Instruções` em `TH-104`)<br>• Proibição de inventar compromissos (`TH-108`)<br>• Aprovação desagregada no navegador (`Send ≠ Archive ≠ Delete`) e Padrão em 6 Partes | **Rubricas 3.1 e 3.2** |
| **Prática 1 (Bloco 1)** | [`pratica_01_entregavel_3_passagens/`](./pratica_01_entregavel_3_passagens/) | **Aula 5 — Capítulo 9:** Documentos, Planilhas, Apresentações e 3 Passagens | • Entregável especificado como produto (5 elementos)<br>• Edição segura preservando camada normativa imutável (`Cláusulas 2.1 a 2.5`)<br>• Separação entre *Fato Citado*, *Achado Derivado* e *Recomendação*<br>• Planilha em 4 camadas, `Blank ≠ Zero` (`VEND-03`) e combate à falsa precisão<br>• *Slide Plan* com títulos conclusivos e **Workflow em 3 Passagens (`Plan ➔ Build ➔ Verify`)** | **Rubrica 3.3** |
| **Prática 2 (Bloco 2)** | [`pratica_02_chief_of_staff_briefing/`](./pratica_02_chief_of_staff_briefing/) | **Aula 5 — Capítulo 10:** Work Chief of Staff, Briefing Decisório e Colaboração | • Mapa de Fontes intencional em 5 perguntas<br>• Transparência sobre fontes indisponíveis (`HTTP 503` no Tracker SecOps)<br>• **Briefing Decisório em 7 Blocos** orientado a ação (nunca separado por aplicativo)<br>• Regra `Urgente ≠ Importante` (FYI de VP sênior vai para *Can Wait*)<br>• **Limiar de Mudança Relevante (*Meaningful-Change Threshold*)** com silêncio operacional às 10h00<br>• Delegação enxuta para Task de Projeto e Handoff sem vazar dados pessoais | **Rubricas 3.4 e 3.6** |
| **Prática 3 (Bloco 3)** | [`pratica_03_dados_joins_e_dashboard/`](./pratica_03_dados_joins_e_dashboard/) | **Aula 5 — Capítulo 11:** Fluxos de Dados, *Trial Joins* e Dashboard Privado no Sites | • Proteção do CSV bruto original e identificação do **Grão da Tabela (*Table Grain*)**<br>• Limpeza sistemática em cópia separada (`Blank ≠ Zero`, remoção de `TOTAL` colado, datas ambíguas e aliases)<br>• Emissão de ***Data-Quality Note*** e reconciliação de soma incompleta<br>• **Validação de Chaves (*Trial Joins*)**: detecção de chave duplicada no CRM (`1:2` inflando receita) e quantificação de **`Unmatched`** (`$620.00`)<br>• `Associação ≠ Causalidade`, **Dashboard Privado no Sites** e decisão **Work vs. Codex** | **Rubricas 3.5 e 3.6** |

---

## 📦 Pacotes `.zip` Prontos para Distribuição aos Alunos
- `pratica_navegador_triagem_inbox.zip`
- `pratica_01_entregavel_3_passagens.zip`
- `pratica_02_chief_of_staff_briefing.zip`
- `pratica_03_dados_joins_e_dashboard.zip`
- `todas_praticas_aula_05.zip` (Pacote unificado com as 4 práticas)
