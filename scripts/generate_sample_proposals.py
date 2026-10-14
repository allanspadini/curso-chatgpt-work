import os
import zipfile
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_DIR = os.path.join(ROOT_DIR, "aula_03_skills_e_delegacao_estruturada", "propostas_fornecedores")
os.makedirs(OUTPUT_DIR, exist_ok=True)

styles = getSampleStyleSheet()

# Custom styles
title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=18,
    leading=22,
    textColor=colors.HexColor('#0A345D'),
    spaceAfter=6
)

subtitle_style = ParagraphStyle(
    'DocSubTitle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=10,
    leading=14,
    textColor=colors.HexColor('#475569'),
    spaceAfter=12
)

body_style = ParagraphStyle(
    'DocBody',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=10,
    leading=15,
    textColor=colors.HexColor('#1E293B'),
    spaceAfter=10
)

highlight_style = ParagraphStyle(
    'DocHighlight',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=10,
    leading=14,
    textColor=colors.HexColor('#0A345D'),
    spaceAfter=8
)

def create_pdf(filename, company_name, cnpj, contact, intro_text, items, extra_text, accent_color):
    filepath = os.path.join(OUTPUT_DIR, filename)
    doc = SimpleDocTemplate(
        filepath,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=35,
        bottomMargin=35
    )
    
    story = []
    
    # Header Banner
    story.append(Paragraph(f"PROPOSTA COMERCIAL — {company_name.upper()}", title_style))
    story.append(Paragraph(f"CNPJ: {cnpj} • Contato Comercial: {contact} • Data: Outubro/2026", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=2, color=colors.HexColor(accent_color), spaceAfter=14))
    
    # Intro text
    story.append(Paragraph(intro_text, body_style))
    story.append(Spacer(1, 6))
    
    # Table header and items
    table_data = [["Item", "Descrição do Serviço / Módulo", "Categoria", "Valor Unitário (R$)"]]
    for item in items:
        table_data.append([
            item[0],
            item[1],
            item[2],
            item[3]
        ])
        
    t = Table(table_data, colWidths=[36, 280, 110, 106])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#EDF5FA')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#0A345D')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 9),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('ALIGN', (0, 0), (0, -1), 'CENTER'),
        ('ALIGN', (3, 0), (3, -1), 'RIGHT'),
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 9),
        ('TEXTCOLOR', (0, 1), (-1, -1), colors.HexColor('#1E293B')),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#F8FAFC')]),
    ]))
    
    story.append(t)
    story.append(Spacer(1, 14))
    
    # Extra conditions & clauses
    story.append(Paragraph("Condições Comerciais, Cronograma e Suporte:", highlight_style))
    for p in extra_text:
        story.append(Paragraph(f"• {p}", body_style))
        
    story.append(Spacer(1, 14))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#CBD5E1'), spaceAfter=10))
    story.append(Paragraph("Proposta válida por 30 dias corridos. Faturamento direto mediante aprovação formal de pedido de compras.", subtitle_style))
    
    doc.build(story)
    print(f"✅ Gerado com sucesso: {filepath}")

# 1. Alpha Tech
create_pdf(
    filename="proposta_alpha_tech.pdf",
    company_name="Alpha Tech Soluções Corporativas",
    cnpj="12.345.678/0001-90",
    contact="comercial@alphatech.com.br | (11) 3456-7890",
    intro_text="Prezados Senhores, apresentamos nossa proposta técnica e comercial para modernização e gestão de servidores. Conforme alinhado em nossa reunião técnica, discriminamos abaixo os módulos componentes da solução:",
    items=[
        ["01", "Licenciamento da Plataforma Cloud (Anual)", "Software", "R$ 18.500,00"],
        ["02", "Serviços de Migração de Dados e Homologação", "Serviços", "R$ 14.000,00"],
        ["03", "Treinamento Operacional da Equipe (40h)", "Capacitação", "R$ 4.500,00"],
        ["04", "Suporte Técnico Especializado 24/7 (12 meses)", "Suporte", "R$ 5.500,00"]
    ],
    extra_text=[
        "Prazo de Conclusão da Implantação: 45 dias úteis contados a partir da assinatura do contrato.",
        "Acordo de Nível de Serviço (SLA): 99.8% de disponibilidade garantida com penalidade de 2% por hora de indisponibilidade.",
        "Forma de Pagamento: Em 3 parcelas iguais (Entrada, 30 dias e Entrega Final).",
        "Cláusula 4.1: Isenção de taxa de setup emergencial durante o primeiro ano de vigência."
    ],
    accent_color="#1BB5D8"
)

# 2. Beta Cloud
create_pdf(
    filename="proposta_beta_cloud.pdf",
    company_name="Beta Cloud Infrastructure Ltda",
    cnpj="98.765.432/0001-11",
    contact="propostas@betacloud.io | (21) 2233-4455",
    intro_text="A Beta Cloud submete à vossa apreciação a proposta de serviços gerenciados e alta performance em nuvem. Nossa arquitetura contempla os recursos listados na tabela de investimentos abaixo:",
    items=[
        ["01", "Subscrição Anual de Servidores Dedicados", "Infraestrutura", "R$ 26.000,00"],
        ["02", "Configuração de Ambientes e Backup em Nuvem", "Serviços", "R$ 12.500,00"],
        ["03", "Módulo de Segurança Avançada e Firewall", "Segurança", "R$ 8.000,00"],
        ["04", "Taxa de Ativação e Onboarding Guiado", "Setup", "R$ 6.000,00"]
    ],
    extra_text=[
        "Prazo de Entrega e Ativação: 30 dias corridos com liberação imediata do ambiente de homologação.",
        "Acordo de Nível de Serviço (SLA): 99.9% de uptime contratual com monitoramento em tempo real.",
        "Forma de Pagamento: 50% de entrada na assinatura e 50% após o aceite técnico definitivo.",
        "Cláusula 5.2: Reajuste anual indexado pelo IPCA após 12 meses de operação contínua."
    ],
    accent_color="#0A345D"
)

# 3. Gamma Solutions
create_pdf(
    filename="proposta_gamma_solutions.pdf",
    company_name="Gamma Solutions & Consultoria em TI",
    cnpj="45.678.901/0001-22",
    contact="licitacoes@gammasolutions.com.br | (31) 3344-5566",
    intro_text="Apresentamos a proposta comercial da Gamma Solutions para prestação de serviços continuados de TI e suporte a bancos de dados. Segue o detalhamento dos custos por lote de entrega:",
    items=[
        ["01", "Licenças de Uso da Plataforma (Período de 1 ano)", "Software", "R$ 21.000,00"],
        ["02", "Migração Estruturada e Ajustes de Banco de Dados", "Serviços", "R$ 16.000,00"],
        ["03", "Pacote de Customização e Integrações (20h)", "Desenvolvimento", "R$ 6.000,00"],
        ["04", "Suporte em Horário Comercial (12 meses)", "Suporte", "R$ 4.000,00"]
    ],
    extra_text=[
        "Prazo Estimado de Implantação: 75 dias úteis devido à janela de homologação gradual dos sistemas legados.",
        "Acordo de Nível de Serviço (SLA): 99.0% de disponibilidade em horário comercial (08:00 às 18:00).",
        "Forma de Pagamento: Faturamento mensal em 12 parcelas sem juros.",
        "Cláusula 3.4: Suporte com atendimento em até 4 horas úteis para chamados de criticidade alta."
    ],
    accent_color="#7CB342"
)

# Criar política de compras resumida para acompanhar os arquivos
politica_path = os.path.join(OUTPUT_DIR, "politica_compras.md")
with open(politica_path, "w", encoding="utf-8") as f:
    f.write("""# Política Corporativa de Compras e Contratação de TI

**Vigência:** Exercício 2026  
**Alçada:** Diretoria de Operações e Gerência de TI  

## Diretrizes Obrigatórias para Homologação:
1. **Teto Orçamentário Rígido:** O valor total da proposta (soma de todos os itens: licença, setup, migração e suporte) não pode exceder **R$ 50.000,00**. Propostas com valores superiores a este limite serão desclassificadas ou exigirão aprovação especial do CFO.
2. **Prazo de Implantação:** O prazo máximo aceitável para entrega do ambiente operacional é de **60 dias** (úteis ou corridos).
3. **Disponibilidade Mínima (SLA):** O fornecedor deve garantir SLA contratual mínimo de **99.5%**.
4. **Governança Documental:** Todos os valores e prazos devem ser extraídos diretamente das tabelas e cláusulas das propostas anexas. Jamais aceitar estimativas verbais.
""")
print(f"✅ Criado: {politica_path}")

# Compactar em ZIP para download direto pelos alunos
zip_dest = os.path.join(ROOT_DIR, "aula_03_skills_e_delegacao_estruturada", "propostas_fornecedores.zip")
with zipfile.ZipFile(zip_dest, "w", zipfile.ZIP_DEFLATED) as zipf:
    for root, _, files in os.walk(OUTPUT_DIR):
        for file in files:
            full_path = os.path.join(root, file)
            arcname = os.path.join("propostas_fornecedores", file)
            zipf.write(full_path, arcname)
print(f"📦 Pacote compactado criado em: {zip_dest}")
