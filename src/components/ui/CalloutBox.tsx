import React from 'react';
import { cn } from '@/lib/utils';

interface CalloutBoxProps {
  variant?: 'info' | 'warning' | 'compliance';
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export const CalloutBox: React.FC<CalloutBoxProps> = ({
  variant = 'info',
  title,
  className = '',
  children
}) => {
  const variantClass = variant === 'warning' ? 'callout-warning' : variant === 'compliance' ? 'callout-compliance' : 'callout-info';

  return (
    <aside className={cn('callout', variantClass, className)} aria-label={title || 'Notice'}>
      {title && (
        <div className="callout-title">
          {variant === 'info' && 'ℹ️'}
          {variant === 'warning' && '⚠️'}
          {variant === 'compliance' && '🛡️'}
          <span>{title}</span>
        </div>
      )}
      <div>{children}</div>
    </aside>
  );
};
