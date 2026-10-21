# 📋 Prompts Prontos para Copiar e Enviar — Prática 2 (Capítulo 10 / Rubricas 3.4 e 3.6)

**Pasta:** `aula_05/pratica_02_chief_of_staff_briefing/`  
**Arquivos utilizados:**
- `sinais_equipe_manha_21out.md` (para a Prática 2.1 — Slide 09)
- `atualizacao_heartbeat_10h00.md` (para a Prática 2.2 — Slide 11, enviado na **mesma thread**)

---

## 1️⃣ Prompt do Slide 09 — Prática 2.1: Consolidar os Sinais das 08h30 nos 7 Blocos Orientados a Ação
**O que anexar:** Anexe o arquivo `sinais_equipe_manha_21out.md`.

```text
Atue como meu Work Chief of Staff seguindo rigorosamente a metodologia do Capítulo 10. Anexei o arquivo "sinais_equipe_manha_21out.md" contendo os sinais das 08h30 vindos de Mensagens (Slack), E-mail, Calendário, Documentos e Trackers. Hoje tenho apenas 2h30 livres de foco pela manhã.

Monte o meu Briefing Decisório Matinal obedecendo a estas 4 regras obrigatórias:

1. Organização por Ação nos 7 Blocos Canônicos (Proibido Agrupar por Aplicativo):
   - Não crie seções "Resumo do Slack" ou "Resumo do E-mail". Cruze as fontes por iniciativa e estruture estritamente nos 7 blocos:
     (1) Top Priorities (para caber nas minhas 2h30 livres);
     (2) Meaningful Changes (mudanças de escopo em documentos e itens concluídos);
     (3) Upcoming Commitments & Colisões de Agenda (aponte qualquer conflito de horário);
     (4) Responses Required;
     (5) Blocked or Waiting (indicando o dono da dependência);
     (6) Can Wait;
     (7) Prepared Next Steps (rascunhos de resposta e escalonamento encenados, ainda NÃO enviados).

2. Regra Explícita "Urgente ≠ Importante":
   - Uma mensagem de alguém sênior (como um VP/Diretor Geral) que seja apenas informativo (FYI) NÃO deve entrar em Top Priorities — classifique-a em "6. Can Wait". Priorize bloqueios que travam a equipe e prazos contratuais do dia.

3. Higiene de Fim de Thread:
   - Verifique a última mensagem do e-mail EM-402 (reboot do servidor) e o status do BUG-309 para não listar demandas já resolvidas ontem como pendências abertas.

4. Transparência sobre Fontes Indisponíveis:
   - Nunca adivinhe o conteúdo de uma fonte inacessível. Reporte explicitamente a falha HTTP 503 do conector "Tracker-Auditoria-SecOps" como limitação de confiança do briefing.
```

---

## 2️⃣ Prompt do Slide 11 — Prática 2.2: Aplicar o Limiar de Mudança às 10h00 e Gerar Handoff Limpo
**O que anexar:** Na **mesma conversa** (para manter o briefing das 08h30 como *baseline*), anexe o arquivo `atualizacao_heartbeat_10h00.md`.

```text
Continuando na mesma thread (usando o briefing das 08h30 como nossa linha de base / baseline), anexei o arquivo "atualizacao_heartbeat_10h00.md" com os 4 eventos capturados na checagem agendada das 10h00 (H-01 a H-04).

Execute as 2 tarefas abaixo:

1. Filtro do Heartbeat pelo Limiar de Mudança Relevante (Meaningful-Change Threshold):
   - Avalie os eventos H-01, H-02, H-03 e H-04 e separe claramente:
     • Quais eventos devem ser SUPRIMIDOS EM SILÊNCIO OPERACIONAL (por não representarem mudança material);
     • Quais eventos CRUZAM O LIMIAR DE INTERRUPÇÃO (explicando qual gatilho material foi atingido: novo prazo crítico ou mudança de status de conector/incidente).
   - Emita apenas o Delta Brief das 10h00, sem repetir a lista de itens inalterados das 08h30.

2. Pacote de Delegação Enxuta e Handoff Seguro (Filtro de Privacidade):
   - Gere um pacote de Handoff Operacional para Roberto Mendes (Líder de DevSecOps) e Camila (QA Lead) assumirem a resolução do incidente SEC-901 e da janela de homologação mTLS do Projeto Apollo.
   - Inclua apenas o contexto necessário do Projeto Apollo (objetivo, escopo atualizado sem o Estorno Internacional, pendências técnicas e fronteira de aprovação).
   - Ao final, liste explicitamente quais informações presentes no arquivo da manhã você REMOVEU DELIBERADAMENTE deste handoff por privacidade pessoal do titular ou por pertencerem a outro cliente.
```
