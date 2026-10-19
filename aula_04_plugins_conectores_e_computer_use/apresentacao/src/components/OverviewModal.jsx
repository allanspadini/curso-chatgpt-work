import React, { useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';

export default function OverviewModal({
  isOpen,
  onClose,
  slides,
  currentSlide,
  onSelectSlide,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(6, 31, 56, 0.85)',
        backdropFilter: 'blur(6px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px',
      }}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        style={{
          width: '90%',
          maxWidth: '1200px',
          maxHeight: '85vh',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#EDF5FA',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.25rem',
                color: 'var(--infnet-dark-blue)',
                fontWeight: 700,
              }}
            >
              Visão Geral dos Slides (Grid)
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#475569' }}>
              Selecione qualquer slide para pular diretamente ou pressione ESC para fechar.
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              padding: '6px',
              borderRadius: '6px',
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {slides.map((s, idx) => {
            const isCurrent = idx === currentSlide;
            return (
              <div
                key={s.id || idx}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                style={{
                  background: isCurrent ? '#EFF6FF' : '#F8FAFC',
                  border: isCurrent
                    ? '2px solid var(--infnet-cyan)'
                    : '1px solid var(--border-light)',
                  borderRadius: '8px',
                  padding: '14px',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.15s ease',
                  boxShadow: isCurrent ? '0 4px 12px rgba(27, 181, 216, 0.2)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isCurrent) {
                    e.currentTarget.style.borderColor = '#93C5FD';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isCurrent) {
                    e.currentTarget.style.borderColor = '#D5E3EC';
                    e.currentTarget.style.transform = 'none';
                  }
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: isCurrent ? 'var(--infnet-cyan)' : 'var(--text-muted)',
                      background: isCurrent ? 'var(--infnet-dark-blue)' : '#E2E8F0',
                      padding: '2px 6px',
                      borderRadius: '4px',
                    }}
                  >
                    #{idx + 1}
                  </span>
                  {isCurrent && (
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#0369A1',
                      }}
                    >
                      <Check size={14} /> Ativo
                    </span>
                  )}
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '0.9rem',
                    color: 'var(--infnet-dark-blue)',
                    fontWeight: 600,
                    marginBottom: '4px',
                    lineHeight: 1.25,
                  }}
                >
                  {s.title}
                </h4>
                {s.subtitle && (
                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: '#475569',
                      lineHeight: 1.3,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {s.subtitle}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
