'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/types';

interface FaqAccordionProps {
  items: FAQItem[];
  idPrefix?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items, idPrefix = 'faq' }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="accordion-group">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const headerId = `${idPrefix}-header-${index}`;
        const panelId = `${idPrefix}-panel-${index}`;

        return (
          <div key={index} className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <button
              id={headerId}
              type="button"
              className="accordion-header"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span>{item.question}</span>
              <span className="accordion-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
            {/* Always rendered so answers are in the HTML for search engines; hidden until opened. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="accordion-panel"
              hidden={!isOpen}
            >
              <p style={{ margin: 0 }}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
