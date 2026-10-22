import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  variant?: 'default' | 'cyan' | 'uk';
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  className = '',
  children
}) => {
  const variantClass = variant === 'cyan' ? 'badge-cyan' : variant === 'uk' ? 'badge-uk' : '';
  return (
    <span className={cn('badge', variantClass, className)}>
      {children}
    </span>
  );
};
