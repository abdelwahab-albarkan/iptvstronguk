import React from 'react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-cyan-light)', display: 'block', marginBottom: '1rem' }}>
          404
        </span>
        <h1>Page Not Found</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          The page you are looking for does not exist or may have moved. Explore our core UK streaming guides and subscription plans below.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button href="/" variant="primary">
            Return to Homepage
          </Button>
          <Button href="/iptv-subscription-uk/" variant="secondary">
            View Subscription Plans
          </Button>
        </div>
      </div>
    </div>
  );
}
