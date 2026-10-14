import React from 'react';
import { X, Volume2 } from 'lucide-react';

export default function NotesDrawer({ isOpen, onClose, slide, slideIndex }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '460px',
        height: '100%',
        backgroundColor: '#FFFFFF',
        boxShadow: '-6px 0 24px rgba(10, 52, 93, 0.22)',
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '2px solid var(--infnet-cyan)',
        animation: 'slideInRight 0.22s ease-out',
      }}
    >
      <div
        style={{
          padding: '16px 20px',
          borderBottom: '1px solid var(--border-light)',
          background: '#EDF5FA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Volume2 size={20} color="var(--infnet-dark-blue)" />
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--infnet-dark-blue)',
                lineHeight: 1.2,
              }}
            >
              Roteiro de Fala do Professor
            </h3>
            <span style={{ fontSize: '0.75rem', color: '#0369A1', fontWeight: 600 }}>
              Slide {slideIndex + 1}: {slide?.title || 'Slide'}
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '6px',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          title="Fechar gaveta (N)"
        >
          <X size={20} />
        </button>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 24px',
          fontSize: '0.92rem',
          lineHeight: 1.65,
          color: '#1E293B',
          whiteSpace: 'pre-wrap',
          fontFamily: 'var(--font-body)',
        }}
      >
        {slide?.notes ? (
          <div>{slide.notes}</div>
        ) : (
          <p style={{ color: '#64748B', fontStyle: 'italic' }}>
            Nenhuma anotação disponível para este slide.
          </p>
        )}
      </div>
    </div>
  );
}
