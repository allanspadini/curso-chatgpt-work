import React from 'react';

export default function Footer({ currentSlide, totalSlides, isTitleSlide = false }) {
  if (isTitleSlide) {
    return null;
  }

  return (
    <footer className="slide-footer">
      <div className="footer-left">
        <span className="footer-tag">Faculdade Infnet</span>
        <span>Processos Agênticos com ChatGPT Work [26E4_2] • Aula 2</span>
      </div>

      <div className="footer-center">
        <span className="footer-shortcut-hint">
          <kbd className="kbd-badge">←</kbd> <kbd className="kbd-badge">→</kbd> Navegar
        </span>
        <span className="footer-shortcut-hint">
          <kbd className="kbd-badge">N</kbd> Falas
        </span>
        <span className="footer-shortcut-hint">
          <kbd className="kbd-badge">G</kbd> Grid
        </span>
        <span className="footer-shortcut-hint">
          <kbd className="kbd-badge">F</kbd> Tela Cheia
        </span>
      </div>

      <div className="footer-right">
        <span className="footer-counter">
          Slide {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </footer>
  );
}
