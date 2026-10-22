import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: 'default' | 'cyan' | 'uk';
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  isH1?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowVariant = 'cyan',
  title,
  subtitle,
  centered = false,
  className = '',
  isH1 = false
}) => {
  return (
    <div className={cn('section-heading', centered ? 'text-center' : '', className)} style={{ textAlign: centered ? 'center' : 'left', marginBottom: '2rem' }}>
      {eyebrow && (
        <div style={{ marginBottom: '0.75rem' }}>
          <Badge variant={eyebrowVariant}>{eyebrow}</Badge>
        </div>
      )}
      {isH1 ? (
        <h1>{title}</h1>
      ) : (
        <h2>{title}</h2>
      )}
      {subtitle && (
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: centered ? '760px' : '100%', margin: centered ? '0.75rem auto 0' : '0.75rem 0 0' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
