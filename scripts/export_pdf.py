import http.server
import socketserver
import threading
import time
import os
import shutil
from playwright.sync_api import sync_playwright
import PIL.Image

ROOT_DIR = "/home/allan/Documentos/Github/curso-chatgpt-work"
AULA_DIR = os.path.join(ROOT_DIR, "aula_01_fundamentos_e_processos_agenticos")
DIST_DIR = os.path.join(AULA_DIR, "apresentacao", "dist")
OUTPUT_PDF_1 = os.path.join(AULA_DIR, "aula_01_apresentacao.pdf")
OUTPUT_PDF_2 = os.path.join(AULA_DIR, "apresentacao", "aula_01_apresentacao.pdf")
TEMP_DIR = "/tmp/slides_pdf_temp_aula_01"
PORT = 8789
TOTAL_SLIDES = 21

os.makedirs(TEMP_DIR, exist_ok=True)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST_DIR, **kwargs)
    def log_message(self, format, *args):
        pass

def main():
    print(f"🚀 Iniciando servidor HTTP local em dist/ na porta {PORT}...")
    httpd = socketserver.TCPServer(("", PORT), Handler)
    server_thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    server_thread.start()
    time.sleep(1)

    png_images = []

    try:
        print("🌐 Abrindo Google Chrome via Playwright (Retina 2x, 1366x768)...")
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

            for i in range(1, TOTAL_SLIDES + 1):
                url = f"http://localhost:{PORT}/?slide={i}&print=true"
                page.goto(url, wait_until="networkidle")
                page.wait_for_timeout(600)  # Aguardar fontes, KaTeX e renderização do DOM

                elem = page.query_selector(".slide-scaler")
                img_path = os.path.join(TEMP_DIR, f"slide_{i:02d}.png")
                if elem:
                    elem.screenshot(path=img_path)
                else:
                    page.screenshot(path=img_path)

                png_images.append(img_path)
                print(f"📸 Capturado slide {i:02d}/{TOTAL_SLIDES}")

            browser.close()

        print("🖼️ Convertendo e otimizando slides em formato JPEG para compilação PDF...")
        jpg_images = []
        for png_path in png_images:
            jpg_path = png_path.replace(".png", ".jpg")
            im = PIL.Image.open(png_path).convert("RGB")
            im.save(jpg_path, "JPEG", quality=90, optimize=True)
            jpg_images.append(PIL.Image.open(jpg_path))

        if jpg_images:
            print(f"💾 Salvando PDF em {OUTPUT_PDF_1}...")
            jpg_images[0].save(
                OUTPUT_PDF_1,
                save_all=True,
                append_images=jpg_images[1:]
            )

            print(f"💾 Salvando cópia do PDF em {OUTPUT_PDF_2}...")
            shutil.copyfile(OUTPUT_PDF_1, OUTPUT_PDF_2)

            size_mb = os.path.getsize(OUTPUT_PDF_1) / (1024 * 1024)
            print(f"✅ PDF gerado com sucesso!")
            print(f"📄 Total de páginas: {len(jpg_images)}")
            print(f"📦 Tamanho do arquivo: {size_mb:.2f} MB (dentro do limite de 8 MB)")
        else:
            print("❌ Nenhuma imagem capturada.")

    finally:
        httpd.shutdown()
        # Limpar arquivos temporários
        if os.path.exists(TEMP_DIR):
            shutil.rmtree(TEMP_DIR, ignore_errors=True)

if __name__ == "__main__":
    main()
