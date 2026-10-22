import React from 'react';
import { SITE_CONFIG } from '@/data/site';

interface LogoProps {
  variant?: 'default' | 'white';
  height?: number;
  priority?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default', height = 38, className = '' }) => {
  const isWhite = variant === 'white';

  return (
    <div
      className={`brand-logo-wrap ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        textDecoration: 'none',
        userSelect: 'none'
      }}
      aria-label={SITE_CONFIG.name}
    >
      {/* High-tech Icon */}
      <div
        style={{
          width: height * 0.95,
          height: height * 0.95,
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(37, 99, 235, 0.3)',
          flexShrink: 0
        }}
      >
        <svg
          width={height * 0.58}
          height={height * 0.58}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span
            style={{
              fontFamily: "'Outfit', 'Inter', sans-serif",
              fontWeight: 800,
              fontSize: `${height * 0.46}px`,
              letterSpacing: '-0.02em',
              color: isWhite ? '#ffffff' : 'var(--ink)',
              textTransform: 'uppercase'
            }}
          >
            IPTV STRONG
          </span>
          <span
            style={{
              fontFamily: "'Outfit', 'Inter', sans-serif",
              fontWeight: 800,
              fontSize: `${height * 0.34}px`,
              padding: '0.12rem 0.38rem',
              borderRadius: '5px',
              background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
              color: '#ffffff',
              letterSpacing: '0.04em'
            }}
          >
            UK
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: `${height * 0.24}px`,
            fontWeight: 600,
            color: isWhite ? '#94a3b8' : 'var(--ink-3)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}
        >
          4K &bull; 8K ULTRA HD
        </span>
      </div>
    </div>
  );
};
