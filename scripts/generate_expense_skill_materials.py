import os
import json
import zipfile
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_DIR = os.path.join(ROOT_DIR, "aula_03_skills_e_delegacao_estruturada", "pratica_skill_reembolsos")
os.makedirs(BASE_DIR, exist_ok=True)

COMPROVANTES_DIR = os.path.join(BASE_DIR, "comprovantes_viagem")
SKILL_DIR = os.path.join(BASE_DIR, "skill_auditoria_reembolsos")
REFS_DIR = os.path.join(SKILL_DIR, "references")
SCRIPTS_DIR = os.path.join(SKILL_DIR, "scripts")
ASSETS_DIR = os.path.join(SKILL_DIR, "assets")

for d in [COMPROVANTES_DIR, SKILL_DIR, REFS_DIR, SCRIPTS_DIR, ASSETS_DIR]:
    os.makedirs(d, exist_ok=True)

styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=16,
    leading=20,
    textColor=colors.HexColor('#0A345D'),
    spaceAfter=6
)

subtitle_style = ParagraphStyle(
    'DocSubTitle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=13,
    textColor=colors.HexColor('#475569'),
    spaceAfter=10
)

body_style = ParagraphStyle(
    'DocBody',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=14,
    textColor=colors.HexColor('#1E293B'),
    spaceAfter=8
)

highlight_style = ParagraphStyle(
    'DocHighlight',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9,
    leading=13,
    textColor=colors.HexColor('#0A345D'),
    spaceAfter=6
)

def create_receipt_pdf(filename, employee_name, cargo, departamento, periodo, destino, motivo, items, total_solicitado):
    filepath = os.path.join(COMPROVANTES_DIR, filename)
    doc = SimpleDocTemplate(
        filepath,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    story = []

    # Header Bar
    header_data = [
        [
            Paragraph("<b>INFNET CORP — CONTROLADORIA & VIAGENS</b>", highlight_style),
            Paragraph(f"<b>DATA DE SUBMISSÃO:</b> {periodo.split(' a ')[-1]}", subtitle_style)
        ]
    ]
    header_table = Table(header_data, colWidths=[360, 180])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(header_table)
    story.append(HRFlowable(width="100%", thickness=2, color=colors.HexColor('#0A345D'), spaceAfter=12))

    # Title
    story.append(Paragraph(f"Relatório de Prestação de Contas — {employee_name}", title_style))
    story.append(Paragraph(f"<b>Cargo:</b> {cargo} | <b>Departamento:</b> {departamento} | <b>Destino:</b> {destino} | <b>Período:</b> {periodo}", subtitle_style))
    story.append(Paragraph(f"<b>Motivo da Viagem:</b> {motivo}", body_style))
    story.append(Spacer(1, 8))

    # Table of expenses
    table_data = [
        [
            Paragraph("<b>Item / Estabelecimento</b>", highlight_style),
            Paragraph("<b>Data / Hora</b>", highlight_style),
            Paragraph("<b>Tipo de Documento</b>", highlight_style),
            Paragraph("<b>Detalhes / Discriminação</b>", highlight_style),
            Paragraph("<b>Valor (R$)</b>", highlight_style)
        ]
    ]

    for it in items:
        table_data.append([
            Paragraph(it[0], body_style),
            Paragraph(it[1], body_style),
            Paragraph(it[2], body_style),
            Paragraph(it[3], body_style),
            Paragraph(f"<b>{it[4]}</b>", body_style),
        ])

    table_data.append([
        Paragraph("<b>TOTAL SOLICITADO:</b>", highlight_style),
        Paragraph("", body_style),
        Paragraph("", body_style),
        Paragraph("", body_style),
        Paragraph(f"<b>R$ {total_solicitado}</b>", highlight_style),
    ])

    exp_table = Table(table_data, colWidths=[130, 85, 110, 140, 75])
    exp_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#EDF5FA')),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),
        ('ALIGN', (-1, 0), (-1, -1), 'RIGHT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('BACKGROUND', (0, -1), (-1, -1), colors.HexColor('#F8FAFC')),
    ]))
    story.append(exp_table)
    story.append(Spacer(1, 14))

    # Declaracao
    story.append(Paragraph("<b>Declaração do Colaborador:</b> Declaro que todas as despesas acima discriminadas foram realizadas exclusivamente no estrito interesse e serviço da empresa durante o período de deslocamento informado, comprometendo-me a apresentar os originais fiscais caso solicitado pela auditoria.", subtitle_style))
    story.append(Spacer(1, 12))

    # Signatures
    sig_data = [
        [
            Paragraph("_____________________________<br/><b>Assinatura do Colaborador</b>", subtitle_style),
            Paragraph("_____________________________<br/><b>Gestor Imediato (Homologação)</b>", subtitle_style)
        ]
    ]
    sig_table = Table(sig_data, colWidths=[270, 270])
    sig_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(sig_table)

    doc.build(story)
    print(f"✅ PDF gerado: {filepath}")

# 1. Gerar PDF João Silva (com anomalias reais)
joao_items = [
    [
        "Hotel Transamérica SP<br/>CNPJ: 61.123.456/0001-89",
        "10/03 e 11/03/2026",
        "NFS-e Nº 48.910",
        "2 diárias completas (R$ 420,00/diária).<br/><i>Teto da política: R$ 350,00</i>",
        "840,00"
    ],
    [
        "Restaurante Fogo de Chão<br/>CNPJ: 52.987.654/0001-12",
        "10/03/2026 13:10",
        "NFC-e Nº 102.394",
        "1 Rodízio Executivo (R$ 130,00) +<br/>2 Cervejas Artesanais (R$ 50,00)",
        "180,00"
    ],
    [
        "Uber do Brasil<br/>Corrida corporativa",
        "10/03/2026 09:15",
        "Recibo Eletrônico Uber",
        "Trajeto: Aeroporto Congonhas ➔ Hotel Paulista (Reunião Técnica)",
        "48,50"
    ],
    [
        "Uber do Brasil<br/>Corrida noturna",
        "14/03/2026 23:45 (Sábado)",
        "Recibo Eletrônico Uber",
        "Trajeto: Vila Madalena ➔ Hotel.<br/><i>Fim de semana sem agenda de trabalho</i>",
        "75,00"
    ],
    [
        "Estapar Estacionamentos<br/>Aeroporto Congonhas",
        "12/03/2026 18:30",
        "Canhoto de Cartão de Débito",
        "Estacionamento 48 horas.<br/><i>Sem Nota Fiscal com CNPJ</i>",
        "110,00"
    ],
    [
        "Droga Raia S/A<br/>CNPJ: 61.585.865/0001-51",
        "11/03/2026 21:00",
        "Cupom Fiscal Nº 89.231",
        "Medicamentos e itens de uso pessoal (analgésicos e protetor solar)",
        "65,00"
    ]
]

create_receipt_pdf(
    filename="relatorio_viagem_joao_silva.pdf",
    employee_name="João Silva",
    cargo="Consultor de Soluções",
    departamento="Operações e Implantação",
    periodo="10/03/2026 a 12/03/2026",
    destino="São Paulo - SP",
    motivo="Implantação de software no cliente Banco Alpha e alinhamento de infraestrutura",
    items=joao_items,
    total_solicitado="1.318,50"
)

# 2. Gerar PDF Maria Santos (cenário quase 100% regular)
maria_items = [
    [
        "Hotel Ibis Curitiba Centro<br/>CNPJ: 42.111.222/0001-33",
        "15/03/2026",
        "NFS-e Nº 12.845",
        "1 diária executiva (R$ 240,00).<br/><i>Teto de Curitiba: R$ 260,00</i>",
        "240,00"
    ],
    [
        "Restaurante Madalosso<br/>CNPJ: 76.543.210/0001-44",
        "15/03/2026 12:45",
        "NFC-e Nº 55.412",
        "Almoço executivo individual (R$ 56,00) + 1 Suco de Laranja (R$ 12,00)",
        "68,00"
    ],
    [
        "Rádio Táxi Faixa Vermelha<br/>Curitiba - PR",
        "15/03/2026 08:30",
        "Recibo Oficial de Táxi Nº 301",
        "Trajeto: Aeroporto Afonso Pena ➔ Escritório Regional Infnet",
        "62,00"
    ]
]

create_receipt_pdf(
    filename="relatorio_viagem_maria_santos.pdf",
    employee_name="Maria Santos",
    cargo="Gerente de Contas",
    departamento="Comercial",
    periodo="15/03/2026 a 15/03/2026",
    destino="Curitiba - PR",
    motivo="Apresentação de proposta comercial no cliente Beta Indústrias",
    items=maria_items,
    total_solicitado="370,00"
)

# 3. Criar os arquivos da Skill:
# 3.1 references/politica_viagens_2026.md
politica_md = """# POLÍTICA CORPORATIVA DE VIAGENS E REEMBOLSOS — 2026
**Instituto Infnet / Infnet Corp**  
**Versão:** 3.1 | **Vigência:** 01/01/2026 a 31/12/2026 | **Área:** Controladoria e Auditoria Interna

---

## 1. Diretrizes Gerais de Elegibilidade
1.1. O reembolso destina-se estritamente ao ressarcimento de despesas necessárias, razoáveis e incorridas no exercício comprovado das atividades profissionais a serviço da empresa.  
1.2. Não são reembolsáveis despesas de caráter pessoal, itens supérfluos, multas de trânsito ou despesas fora dos períodos autorizados de viagem.

---

## 2. Hospedagem (Diárias de Hotel)
2.1. O teto diário de hotel inclui valor da diária, taxa de serviço e impostos municipais.  
2.2. A tabela de tetos por categoria de cidade é estritamente vinculante (vide `tabela_tetos_cidades.json`):
   - **São Paulo (Capital):** Limite de **R$ 350,00 / diária**.
   - **Rio de Janeiro (Capital) e Brasília:** Limite de **R$ 320,00 / diária**.
   - **Curitiba, Belo Horizonte e Porto Alegre:** Limite de **R$ 260,00 / diária**.
   - **Demais Cidades:** Limite de **R$ 220,00 / diária**.
2.3. Qualquer valor excedente ao teto deve ser **glosado** (descontado do valor a reembolsar), arcado pelo próprio colaborador.

---

## 3. Alimentação
3.1. **Almoço / Jantar Individual:** Limite máximo de **R$ 85,00 por refeição**.  
3.2. **Bebidas Alcoólicas:** **PROIBIÇÃO EXPRESSA E ABSOLUTA.** Nenhuma bebida alcoólica (cervejas, vinhos, drinks) é reembolsável sob qualquer hipótese. Se a comanda incluir bebidas alcoólicas, o valor correspondente deve ser glosado individualmente, mantendo-se apenas os alimentos e bebidas não-alcoólicas.  
3.3. **Almoço com Clientes:** Permitido até R$ 200,00 mediante autorização prévia por escrito da Diretoria Comercial informando o nome e cargo dos clientes presentes.

---

## 4. Transporte e Mobilidade
4.1. Corridas de táxi ou aplicativos (Uber/99) são reembolsáveis no trajeto Aeroporto ➔ Hotel ➔ Local de Reunião de Trabalho.  
4.2. Deslocamentos aos sábados, domingos ou após as 22h exigem comprovação de escala de trabalho ou justificativa formal do gestor. Corridas noturnas sem vínculo profissional devem ser reprovadas.  
4.3. Estacionamentos são reembolsáveis desde que acompanhados de **Nota Fiscal Eletrônica com CNPJ**.

---

## 5. Exigências Documentais e Fiscais
5.1. **Comprovantes Válidos:** Somente serão aceitos para liquidação:
   - Nota Fiscal de Serviços Eletrônica (NFS-e);
   - Nota Fiscal ao Consumidor Eletrônica (NFC-e) ou Cupom Fiscal com código de autenticação;
   - Recibo eletrônico emitido diretamente por aplicativo oficial de transporte (Uber/99).
5.2. **Documentos Inválidos (Glosa Documental):**
   - Comprovantes de maquininha de cartão de débito/crédito ("canhotos") que não discriminem os itens nem contenham o CNPJ do emissor;
   - Pedidos de balcão sem valor fiscal;
   - Recibos manuais sem carimbo e CNPJ.
"""

with open(os.path.join(REFS_DIR, "politica_viagens_2026.md"), "w", encoding="utf-8") as f:
    f.write(politica_md)

# 3.2 references/tabela_tetos_cidades.json
tetos_json = {
    "versao": "2026.1",
    "moeda": "BRL",
    "refeicao_individual_max": 85.00,
    "refeicao_cliente_max": 200.00,
    "bebida_alcoolica_permitida": False,
    "tetos_hospedagem": {
        "Sao Paulo": 350.00,
        "Rio de Janeiro": 320.00,
        "Brasilia": 320.00,
        "Curitiba": 260.00,
        "Belo Horizonte": 260.00,
        "Porto Alegre": 260.00,
        "Salvador": 240.00,
        "Fortaleza": 240.00,
        "Recife": 240.00,
        "Outras Cidades": 220.00
    }
}

with open(os.path.join(REFS_DIR, "tabela_tetos_cidades.json"), "w", encoding="utf-8") as f:
    json.dump(tetos_json, f, indent=2, ensure_ascii=False)

# 3.3 scripts/validar_reembolso.py
script_py = '''#!/usr/bin/env python3
"""
Script Determinístico de Auditoria Financeira de Reembolsos.
Calcula totais, aplica tetos e regras fiscais sem alucinação aritmética.
"""
import sys
import json
import argparse

def auditar(dados_json_path, politica_json_path):
    with open(politica_json_path, 'r', encoding='utf-8') as f:
        regras = json.load(f)
    
    with open(dados_json_path, 'r', encoding='utf-8') as f:
        submissao = json.load(f)
    
    cidade = submissao.get("cidade", "Outras Cidades")
    teto_hotel = regras["tetos_hospedagem"].get(cidade, regras["tetos_hospedagem"]["Outras Cidades"])
    teto_refeicao = regras["refeicao_individual_max"]

    total_solicitado = 0.0
    total_aprovado = 0.0
    total_glosado = 0.0
    itens_auditados = []

    for item in submissao.get("itens", []):
        nome = item["descricao"]
        tipo = item["categoria"] # hotel, refeicao, transporte, pessoal, outros
        valor = float(item["valor"])
        qtd_diarias = item.get("diarias", 1)
        tem_nf = item.get("tem_nf", True)
        eh_alcool = item.get("tem_alcool", False)
        valor_alcool = float(item.get("valor_alcool", 0.0))
        hora = item.get("horario", "comercial")
        dia = item.get("dia_semana", "util")

        total_solicitado += valor
        glosa_item = 0.0
        motivo_glosa = []

        # Regra 1: Documentação Fiscal
        if not tem_nf:
            glosa_item = valor
            motivo_glosa.append("Falta de Nota Fiscal/NFS-e válida (comprovante de cartão não aceito)")
        
        # Regra 2: Despesa Pessoal
        elif tipo == "pessoal":
            glosa_item = valor
            motivo_glosa.append("Despesa pessoal não reembolsável (farmácia/supérfluos)")

        # Regra 3: Transporte Noturno/Fim de semana sem justificativa
        elif tipo == "transporte" and (dia in ["sabado", "domingo"] or hora == "madrugada"):
            glosa_item = valor
            motivo_glosa.append("Corrida em fim de semana ou fora do horário sem justificativa de trabalho")

        # Regra 4: Hospedagem acima do teto da cidade
        elif tipo == "hotel":
            valor_max_permitido = teto_hotel * qtd_diarias
            if valor > valor_max_permitido:
                glosa_item = valor - valor_max_permitido
                motivo_glosa.append(f"Excedente ao teto de hotel para {cidade} (Teto: R$ {teto_hotel:.2f}/diária)")

        # Regra 5: Refeição com álcool ou acima do teto
        elif tipo == "refeicao":
            if eh_alcool and valor_alcool > 0:
                glosa_item += valor_alcool
                motivo_glosa.append(f"Bebida alcoólica proibida por política (R$ {valor_alcool:.2f})")
            
            valor_alimentacao_pura = valor - valor_alcool
            if valor_alimentacao_pura > teto_refeicao and not item.get("cliente_aprovado", False):
                excedente = valor_alimentacao_pura - teto_refeicao
                glosa_item += excedente
                motivo_glosa.append(f"Excedente ao teto de refeição individual (Teto: R$ {teto_refeicao:.2f})")

        valor_aprovado_item = valor - glosa_item
        total_aprovado += valor_aprovado_item
        total_glosado += glosa_item

        itens_auditados.append({
            "descricao": nome,
            "categoria": tipo,
            "valor_solicitado": round(valor, 2),
            "valor_aprovado": round(valor_aprovado_item, 2),
            "valor_glosado": round(glosa_item, 2),
            "status": "APROVADO" if glosa_item == 0 else ("APROVADO COM GLOSA" if valor_aprovado_item > 0 else "REPROVADO"),
            "motivo": "; ".join(motivo_glosa) if motivo_glosa else "Conforme política"
        })

    resultado = {
        "colaborador": submissao.get("colaborador"),
        "cidade": cidade,
        "total_solicitado": round(total_solicitado, 2),
        "total_aprovado": round(total_aprovado, 2),
        "total_glosado": round(total_glosado, 2),
        "itens": itens_auditados
    }

    return resultado

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Auditor Financeiro de Reembolsos")
    parser.add_argument("--dados", required=True, help="Caminho do JSON com os itens")
    parser.add_argument("--politica", required=True, help="Caminho do JSON com os tetos")
    parser.add_argument("--saida", default=None, help="Caminho para salvar o resultado em JSON")
    args = parser.parse_args()

    res = auditar(args.dados, args.politica)
    out_str = json.dumps(res, indent=2, ensure_ascii=False)
    if args.saida:
        with open(args.saida, "w", encoding="utf-8") as f:
            f.write(out_str)
    print(out_str)
'''

with open(os.path.join(SCRIPTS_DIR, "validar_reembolso.py"), "w", encoding="utf-8") as f:
    f.write(script_py)

# 3.4 assets/modelo_formulario_prestacao_contas.md
template_md = """# FORMULÁRIO OFICIAL DE LIQUIDAÇÃO E PRESTAÇÃO DE CONTAS
**Infnet Corp — Departamento de Controladoria e Auditoria**  
**ID do Parecer:** AUD-{{ANO}}-{{PROTOCOLO}} | **Status:** {{STATUS_GERAL}}

---

### 1. Identificação do Colaborador e Deslocamento
- **Nome do Colaborador:** {{NOME_COLABORADOR}}
- **Cargo / Departamento:** {{CARGO}} / {{DEPARTAMENTO}}
- **Destino / Cidade:** {{CIDADE}}
- **Período da Viagem:** {{PERIODO}}
- **Motivo Corporativo:** {{MOTIVO}}

---

### 2. Quadro Resumo Financeiro da Auditoria
| Categoria | Total Solicitado | Total Glosado (Retido) | Total Líquido Aprovado |
| :--- | :--- | :--- | :--- |
| **Hospedagem** | R$ {{HOSP_SOLICITADO}} | R$ {{HOSP_GLOSADO}} | R$ {{HOSP_APROVADO}} |
| **Alimentação** | R$ {{ALIM_SOLICITADO}} | R$ {{ALIM_GLOSADO}} | R$ {{ALIM_APROVADO}} |
| **Transporte** | R$ {{TRANSP_SOLICITADO}} | R$ {{TRANSP_GLOSADO}} | R$ {{TRANSP_APROVADO}} |
| **Outros / Pessoal** | R$ {{OUTROS_SOLICITADO}} | R$ {{OUTROS_GLOSADO}} | R$ {{OUTROS_APROVADO}} |
| **TOTAL GERAL** | **R$ {{TOTAL_SOLICITADO}}** | **R$ {{TOTAL_GLOSADO}}** | **R$ {{TOTAL_APROVADO}}** |

---

### 3. Discriminação dos Itens Auditados e Glosas Aplicadas
{{TABELA_DISCRIMINADA_ITENS}}

---

### 4. Justificativa das Glosas e Recomendações
{{JUSTIFICATIVA_DETALHADA_GLOSAS}}

---

### 5. Homologação e Assinaturas (Portão Humano HITL)
- [ ] **Aprovado Integralmente**  
- [ ] **Aprovado com Glosa Parcial (Ressalvas)**  
- [ ] **Reprovado por Não Conformidade**  

**Auditor Responsável:** ___________________________ Data: ____/____/2026  
**Diretoria Financeira:** ___________________________ Data: ____/____/2026  
"""

with open(os.path.join(ASSETS_DIR, "modelo_formulario_prestacao_contas.md"), "w", encoding="utf-8") as f:
    f.write(template_md)

# 3.5 SKILL.md
skill_md = """---
name: auditoria-reembolsos
description: Executa a auditoria contábil, fiscal e regulamentar de prestações de contas e relatórios de reembolsos de despesas de viagens corporativas. Use sempre que o usuário anexar comprovantes de viagem, relatórios de despesas, notas fiscais de hotel/refeição/transporte, ou solicitar para "auditar despesas", "conferir reembolso", "aplicar política de viagens" ou "gerar parecer de prestação de contas".
---

# Auditoria de Prestação de Contas e Reembolsos de Viagens

## Visão Geral
Esta skill transforma comprovantes e notas de despesas de viagem em um Parecer Oficial de Prestação de Contas devidamente auditado, checando tetos por cidade, barrando itens proibidos (bebidas alcoólicas e despesas pessoais) e garantindo conformidade com a política corporativa de 2026.

## Fluxo de Execução Obrigatório

### Passo 1: Extração e Triagem dos Comprovantes
1. Leia o relatório de viagem ou as notas fiscais anexadas pelo usuário.
2. Extraia para cada despesa:
   - Data e horário da emissão;
   - Tipo de estabelecimento e CNPJ do emissor;
   - Descrição detalhada dos itens (separando alimentos de bebidas);
   - Tipo de documento (NFS-e, NFC-e, Recibo Eletrônico de App ou Canhoto de Cartão);
   - Valor total do comprovante.
3. Classifique a categoria: `hotel`, `refeicao`, `transporte`, `pessoal` ou `outros`.

### Passo 2: Execução do Script Determinístico nos Bastidores
Para evitar qualquer erro ou alucinação aritmética na soma dos centavos e cálculo dos tetos:
1. Monte o arquivo JSON intermediário com os itens extraídos.
2. Execute o script de cálculo matemático via terminal:
```bash
uv run python skill_auditoria_reembolsos/scripts/validar_reembolso.py --dados dados_extraidos.json --politica skill_auditoria_reembolsos/references/tabela_tetos_cidades.json --saida resultado_auditoria.json
```
3. Leia o arquivo `resultado_auditoria.json` com os valores consolidados.

### Passo 3: Auditoria Normativa contra a Política
Consulte o arquivo `skill_auditoria_reembolsos/references/politica_viagens_2026.md` para fundamentar as seguintes regras inegociáveis:
- **Hospedagem:** Verificar teto da cidade de destino (ex: São Paulo = R$ 350/diária). Glosar qualquer excedente.
- **Alimentação:** Teto de R$ 85,00 por refeição.
- **Bebidas Alcoólicas:** **PROIBIDAS.** Glosar integralmente qualquer valor de cerveja, vinho ou bebida destilada.
- **Transporte Noturno:** Corridas aos finais de semana ou fora de expediente comercial sem justificativa de trabalho devem ser glosadas.
- **Comprovantes Sem NF:** Canhotos de cartão de débito/crédito sem CNPJ devem ser apontados como pendência documental (glosa preventiva).

### Passo 4: Geração do Formulário Oficial
1. Utilize o modelo disponível em `skill_auditoria_reembolsos/assets/modelo_formulario_prestacao_contas.md`.
2. Substitua os campos com as informações apuradas pelo script determinístico.
3. Salve o documento final com o nome `parecer_prestacao_contas_[nome_colaborador].md`.

### Passo 5: Portão Humano de Decisão (Regra 85/15)
- Apresente um resumo claro na tela para o gestor com:
  1. Total Solicitado vs. Total Aprovado e Total Glosado;
  2. Lista dos itens glosados e os motivos objetivos;
  3. Solicitação de aval humano antes de liberar o pagamento no sistema bancário.
"""

with open(os.path.join(SKILL_DIR, "SKILL.md"), "w", encoding="utf-8") as f:
    f.write(skill_md)

# 4. LEIA-ME_PRATICA_SKILL.md para os alunos
readme_aluno = """# Guia Prático do Aluno: Engenharia e Auditoria com Skills no ChatGPT Work

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
"""

with open(os.path.join(BASE_DIR, "LEIA-ME_PRATICA_SKILL.md"), "w", encoding="utf-8") as f:
    f.write(readme_aluno)

# 5. Criar arquivo ZIP para download
ZIP_PATH = os.path.join(ROOT_DIR, "aula_03_skills_e_delegacao_estruturada", "pratica_skill_reembolsos.zip")
with zipfile.ZipFile(ZIP_PATH, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(BASE_DIR):
        for file in files:
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, os.path.dirname(BASE_DIR))
            zipf.write(full_path, rel_path)

print(f"🎉 Pacote ZIP criado com sucesso em: {ZIP_PATH}")
