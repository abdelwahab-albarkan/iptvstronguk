'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service if configured
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>
          ⚠️
        </span>
        <h2>Something Went Wrong</h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          An unexpected technical error occurred while loading this page. Please try refreshing or return to the homepage.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button onClick={() => reset()} variant="primary">
            Try Again
          </Button>
          <Button href="/" variant="secondary">
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
