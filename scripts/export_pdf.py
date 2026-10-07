import http.server
import socketserver
import threading
import time
import os
import sys
import shutil
from playwright.sync_api import sync_playwright
import PIL.Image

ROOT_DIR = "/home/allan/Documentos/Github/curso-chatgpt-work"

AULAS_CONFIG = {
    "1": {
        "folder": "aula_01_fundamentos_e_processos_agenticos",
        "pdf_name": "aula_01_apresentacao.pdf",
        "port": 8789,
        "total_slides": 21,
    },
    "2": {
        "folder": "aula_02_configuracao_agents_md_e_subagentes",
        "pdf_name": "aula_02_apresentacao.pdf",
        "port": 8790,
        "total_slides": 20,
    },
}

def export_aula(aula_key):
    cfg = AULAS_CONFIG[aula_key]
    aula_dir = os.path.join(ROOT_DIR, cfg["folder"])
    dist_dir = os.path.join(aula_dir, "apresentacao", "dist")
    output_pdf_1 = os.path.join(aula_dir, cfg["pdf_name"])
    output_pdf_2 = os.path.join(aula_dir, "apresentacao", cfg["pdf_name"])
    temp_dir = f"/tmp/slides_pdf_temp_aula_{int(aula_key):02d}"
    port = cfg["port"]
    total_slides = cfg["total_slides"]

    if not os.path.exists(dist_dir):
        print(f"❌ Diretório dist não encontrado em {dist_dir}. Execute o build primeiro!")
        return False

    os.makedirs(temp_dir, exist_ok=True)

    class Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=dist_dir, **kwargs)
        def log_message(self, format, *args):
            pass

    print(f"🚀 Iniciando servidor HTTP local em dist/ na porta {port} para Aula {aula_key}...")
    httpd = socketserver.TCPServer(("", port), Handler)
    server_thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    server_thread.start()
    time.sleep(1)

    png_images = []

    try:
        print(f"🌐 Abrindo Google Chrome via Playwright (Retina 2x, 1366x768) para Aula {aula_key}...")
        with sync_playwright() as p:
            browser = p.chromium.launch(
                executable_path="/usr/bin/google-chrome",
                headless=True
            )
            context = browser.new_context(
                viewport={"width": 1366, "height": 768},
                device_scale_factor=2.0
            )
            page = context.new_page()

            for i in range(1, total_slides + 1):
                url = f"http://localhost:{port}/?slide={i}&print=true"
                page.goto(url, wait_until="networkidle")
                page.wait_for_timeout(700)  # Aguardar fontes, KaTeX e renderização do DOM

                elem = page.query_selector(".slide-scaler")
                img_path = os.path.join(temp_dir, f"slide_{i:02d}.png")
                if elem:
                    elem.screenshot(path=img_path)
                else:
                    page.screenshot(path=img_path)

                png_images.append(img_path)
                print(f"📸 Capturado slide {i:02d}/{total_slides}")

            browser.close()

        print("🖼️ Convertendo e otimizando slides em formato JPEG para compilação PDF...")
        jpg_images = []
        for png_path in png_images:
            jpg_path = png_path.replace(".png", ".jpg")
            im = PIL.Image.open(png_path).convert("RGB")
            im.save(jpg_path, "JPEG", quality=90, optimize=True)
            jpg_images.append(PIL.Image.open(jpg_path))

        if jpg_images:
            print(f"💾 Salvando PDF em {output_pdf_1}...")
            jpg_images[0].save(
                output_pdf_1,
                save_all=True,
                append_images=jpg_images[1:]
            )

            print(f"💾 Salvando cópia do PDF em {output_pdf_2}...")
            shutil.copyfile(output_pdf_1, output_pdf_2)

            size_mb = os.path.getsize(output_pdf_1) / (1024 * 1024)
            print(f"✅ PDF da Aula {aula_key} gerado com sucesso!")
            print(f"📄 Total de páginas: {len(jpg_images)}")
            print(f"📦 Tamanho do arquivo: {size_mb:.2f} MB")
            return True
        else:
            print("❌ Nenhuma imagem capturada.")
            return False

    finally:
        httpd.shutdown()
        if os.path.exists(temp_dir):
            shutil.rmtree(temp_dir, ignore_errors=True)

def main():
    target = "2"
    if len(sys.argv) > 1:
        arg = sys.argv[1].replace("aula_", "").replace("aula", "").strip()
        if arg in AULAS_CONFIG:
            target = arg
    export_aula(target)

if __name__ == "__main__":
    main()
