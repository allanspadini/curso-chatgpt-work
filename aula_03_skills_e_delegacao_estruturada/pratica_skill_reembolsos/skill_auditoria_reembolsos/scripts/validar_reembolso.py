#!/usr/bin/env python3
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
