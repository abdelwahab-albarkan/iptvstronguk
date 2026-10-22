import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ id, className = '', style, children }) => {
  return (
    <div id={id} className={cn('card', className)} style={style}>
      {children}
    </div>
  );
};
