import React from 'react';
import { FeatureItem } from '@/types';
import { Card } from '@/components/ui/Card';

interface FeatureGridProps {
  features: FeatureItem[];
  columns?: 2 | 3;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features, columns = 3 }) => {
  return (
    <div className={columns === 2 ? 'grid-2' : 'grid-3'} style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
      {features.map((feature, idx) => (
        <Card key={idx}>
          <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginTop: 0, marginBottom: '0.5rem' }}>
            {feature.title}
          </h3>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
            {feature.description}
          </p>
        </Card>
      ))}
    </div>
  );
};
