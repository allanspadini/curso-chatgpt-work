import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  LayoutGrid,
  FileText,
  Maximize,
  Minimize,
} from 'lucide-react';

export default function Controls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  isAutoplay,
  onToggleAutoplay,
  onOpenOverview,
  onToggleNotes,
  isNotesOpen,
  isFullscreen,
  onToggleFullscreen,
}) {
  return (
    <div className="floating-controls" role="toolbar" aria-label="Controles da Apresentação">
      <button
        className="control-btn"
        onClick={onPrev}
        disabled={currentSlide === 0}
        title="Slide Anterior (←)"
        aria-label="Slide Anterior"
      >
        <ChevronLeft size={18} />
      </button>

      <span style={{ color: '#E2E8F0', fontSize: '0.8rem', fontWeight: 600, padding: '0 4px' }}>
        {currentSlide + 1} / {totalSlides}
      </span>

      <button
        className="control-btn"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        title="Próximo Slide (→)"
        aria-label="Próximo Slide"
      >
        <ChevronRight size={18} />
      </button>

      <div className="control-separator" />

      <button
        className={`control-btn ${isAutoplay ? 'active' : ''}`}
        onClick={onToggleAutoplay}
        title={isAutoplay ? 'Pausar Reprodução Automática' : 'Iniciar Reprodução Automática'}
        aria-label="Reprodução Automática"
      >
        {isAutoplay ? <Pause size={16} /> : <Play size={16} />}
      </button>

      <button
        className="control-btn"
        onClick={onOpenOverview}
        title="Visão Geral dos Slides (G)"
        aria-label="Visão Geral dos Slides"
      >
        <LayoutGrid size={16} />
      </button>

      <button
        className={`control-btn ${isNotesOpen ? 'active' : ''}`}
        onClick={onToggleNotes}
        title="Falas do Apresentador (N)"
        aria-label="Falas do Apresentador"
      >
        <FileText size={16} />
      </button>

      <button
        className="control-btn"
        onClick={onToggleFullscreen}
        title="Tela Cheia (F)"
        aria-label="Tela Cheia"
      >
        {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
      </button>
    </div>
  );
}
