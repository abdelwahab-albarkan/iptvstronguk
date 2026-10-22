import React from 'react';
import { LegalAuthority } from '@/types';
import { Card } from '@/components/ui/Card';

interface AuthorityCitationProps {
  authority: LegalAuthority;
}

export const AuthorityCitation: React.FC<AuthorityCitationProps> = ({ authority }) => {
  return (
    <Card className="authority-card">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem 1rem', marginBottom: '0.75rem' }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {authority.category === 'official' ? 'Official UK Body' : 'Industry Body'}
          </span>
          <h3 style={{ fontSize: '1.2rem', marginTop: '0.2rem', marginBottom: '0.2rem' }}>
            {authority.name} ({authority.acronym})
          </h3>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {authority.role}
          </div>
        </div>
        <a
          href={authority.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm"
          style={{ textDecoration: 'none', flexShrink: 0 }}
        >
          Official site ↗
        </a>
      </div>
      <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
        {authority.description}
      </p>
    </Card>
  );
};
