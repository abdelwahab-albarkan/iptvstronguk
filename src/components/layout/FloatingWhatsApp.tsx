import React from 'react';
import { getWhatsAppContactUrl, SITE_CONFIG } from '@/data/site';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => (
  <a
    href={getWhatsAppContactUrl()}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float-widget"
    aria-label="Chat with IPTV Strong UK support on WhatsApp (opens in a new tab)"
  >
    <div className="whatsapp-float-bubble">
      <span className="whatsapp-ping-ring"></span>
      <span className="whatsapp-ping-dot"></span>
      <WhatsAppIcon size={28} />
    </div>
    <div className="whatsapp-float-tooltip">
      <div className="tooltip-title">Need Instant Setup?</div>
      <div className="tooltip-sub">Chat on WhatsApp: {SITE_CONFIG.contact.whatsappFormatted || '+212 625 218 443'}</div>
    </div>
  </a>
);
