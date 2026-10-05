import React, { useMemo } from 'react';
import katex from 'katex';

export default function MathView({ math, block = false, className = '' }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
      });
    } catch (error) {
      console.error('KaTeX error:', error);
      return math;
    }
  }, [math, block]);

  if (block) {
    return (
      <div
        className={`katex-block-container ${className}`}
        style={{
          color: 'var(--infnet-dark-blue)',
          fontSize: '1.15rem',
          margin: '0.5rem 0',
          textAlign: 'center',
          overflowX: 'auto',
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={`katex-inline-container ${className}`}
      style={{
        color: 'var(--infnet-dark-blue)',
        display: 'inline-block',
        margin: '0 0.2rem',
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
