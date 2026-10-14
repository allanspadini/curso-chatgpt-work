import React, { useState, useEffect, useCallback, useRef } from 'react';
import { slidesData } from './data/slidesData';
import Header from './components/Header';
import Footer from './components/Footer';
import Controls from './components/Controls';
import NotesDrawer from './components/NotesDrawer';
import OverviewModal from './components/OverviewModal';

export default function App() {
  const getInitialSlideIndex = () => {
    if (typeof window === 'undefined') return 0;
    const params = new URLSearchParams(window.location.search);
    const slideParam = params.get('slide');
    if (slideParam) {
      const parsed = parseInt(slideParam, 10) - 1;
      if (!isNaN(parsed) && parsed >= 0 && parsed < slidesData.length) {
        return parsed;
      }
    }
    return 0;
  };

  const isPrintMode = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('print') === 'true';

  const [currentSlideIndex, setCurrentSlideIndex] = useState(getInitialSlideIndex);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);

  const containerRef = useRef(null);

  // Responsive 16:9 auto-scaler calculation
  const updateScale = useCallback(() => {
    if (isPrintMode) {
      setScale(1);
      return;
    }
    if (!containerRef.current) return;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const isFullscreenActive = !!document.fullscreenElement;
    const paddingX = isFullscreenActive ? 0 : 20;
    const paddingY = isFullscreenActive ? 0 : 20;

    const scaleX = (windowWidth - paddingX) / 1366;
    const scaleY = (windowHeight - paddingY) / 768;
    // Escalar proporcionalmente sem travas artificiais baixas (permitindo expansão em 1080p, 1440p e 4K)
    const newScale = Math.min(scaleX, scaleY);
    setScale(Math.max(0.35, newScale));
  }, [isPrintMode]);

  useEffect(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
    document.addEventListener('fullscreenchange', updateScale);
    return () => {
      window.removeEventListener('resize', updateScale);
      document.removeEventListener('fullscreenchange', updateScale);
    };
  }, [updateScale]);

  useEffect(() => {
    if (!isPrintMode && typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('slide', (currentSlideIndex + 1).toString());
      window.history.replaceState({}, '', url.toString());
    }
  }, [currentSlideIndex, isPrintMode]);

  // Navigation handlers
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, slidesData.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < slidesData.length) {
      setCurrentSlideIndex(index);
    }
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(slidesData.length - 1);
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setIsNotesOpen((prev) => !prev);
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          setIsOverviewOpen((prev) => !prev);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'Escape':
          if (isNotesOpen) setIsNotesOpen(false);
          if (isOverviewOpen) setIsOverviewOpen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, isNotesOpen, isOverviewOpen]);

  // Autoplay effect
  useEffect(() => {
    let timer;
    if (isAutoplay && !isPrintMode) {
      timer = setInterval(() => {
        setCurrentSlideIndex((prev) => {
          if (prev >= slidesData.length - 1) {
            setIsAutoplay(false);
            return prev;
          }
          return prev + 1;
        });
      }, 10000);
    }
    return () => clearInterval(timer);
  }, [isAutoplay, isPrintMode]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error('Fullscreen request failed:', err);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const currentSlide = slidesData[currentSlideIndex] || slidesData[0];
  const isTitleSlide = currentSlide?.type === 'title';
  const SlideComponent = currentSlide?.component;

  return (
    <div className={`presentation-container ${isPrintMode ? 'is-print-mode' : ''}`} ref={containerRef}>
      {/* 16:9 Scaled Slide Frame */}
      <div
        className="slide-scaler"
        style={{
          transform: isPrintMode ? 'none' : `scale(${scale})`,
        }}
      >
        <Header
          title={currentSlide.title}
          subtitle={currentSlide.subtitle}
          isTitleSlide={isTitleSlide}
        />

        <main
          className="slide-body"
          style={{
            height: isTitleSlide ? '768px' : 'calc(768px - 104px - 44px)',
            padding: isTitleSlide ? '0' : '16px 36px 12px 36px',
          }}
        >
          {SlideComponent ? (
            <SlideComponent slide={currentSlide} />
          ) : (
            <div style={{ padding: '2rem' }}>Carregando slide...</div>
          )}
        </main>

        <Footer
          currentSlide={currentSlideIndex}
          totalSlides={slidesData.length}
          isTitleSlide={isTitleSlide}
        />

        {/* Notes Drawer is inside slide-scaler so it scales with the slide */}
        {!isPrintMode && (
          <NotesDrawer
            isOpen={isNotesOpen}
            onClose={() => setIsNotesOpen(false)}
            slide={currentSlide}
            slideIndex={currentSlideIndex}
          />
        )}
      </div>

      {/* Floating Controls outside slide-scaler */}
      {!isPrintMode && (
        <Controls
          currentSlide={currentSlideIndex}
          totalSlides={slidesData.length}
          onPrev={prevSlide}
          onNext={nextSlide}
          isAutoplay={isAutoplay}
          onToggleAutoplay={() => setIsAutoplay((prev) => !prev)}
          onOpenOverview={() => setIsOverviewOpen(true)}
          onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
          isNotesOpen={isNotesOpen}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
        />
      )}

      {/* Overview Modal outside slide-scaler */}
      {!isPrintMode && (
        <OverviewModal
          isOpen={isOverviewOpen}
          onClose={() => setIsOverviewOpen(false)}
          slides={slidesData}
          currentSlide={currentSlideIndex}
          onSelectSlide={(idx) => {
            goToSlide(idx);
            setIsOverviewOpen(false);
          }}
        />
      )}
    </div>
  );
}
