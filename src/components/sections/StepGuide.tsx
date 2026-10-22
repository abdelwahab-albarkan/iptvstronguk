import React from 'react';
import { StepItem } from '@/types';

interface StepGuideProps {
  steps: StepItem[];
}

export const StepGuide: React.FC<StepGuideProps> = ({ steps }) => {
  return (
    <div className="steps-container">
      {steps.map((step) => (
        <div key={step.number} className="step-card">
          <div className="step-number" aria-hidden="true">
            {step.number}
          </div>
          <div className="step-body">
            <h3 className="step-title">{step.title}</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {step.description}
            </p>
            {step.tip && (
              <div className="step-tip">
                <strong style={{ color: 'var(--accent-cyan-light)' }}>Technical Note: </strong>
                {step.tip}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
