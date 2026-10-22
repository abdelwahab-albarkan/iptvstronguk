import React, { Suspense } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { PAGE_METADATA_CONFIG } from '@/data/metadata';
import { constructPageMetadata } from '@/lib/metadata-utils';
import { OrderFlow } from '@/components/sections/OrderFlow';
import { OrderPageFlow } from '@/components/sections/OrderPageFlow';

// Transactional utility page: kept out of search results and the sitemap, no Product/Offer schema.
export const metadata: Metadata = {
  ...constructPageMetadata(PAGE_METADATA_CONFIG.order),
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true
    }
  }
};

export default function OrderPage() {
  const meta = PAGE_METADATA_CONFIG.order;

  return (
    <section className="section order-page">
      <div className="container container-narrow">
        <Link href="/iptv-subscription-uk/" className="back-link">
          <span aria-hidden="true">←</span> Back to Subscription
        </Link>
        <h1 id="order-title" className="order-page-title">{meta.h1}</h1>

        {/* The plan comes from ?plan=, which is only known in the browser. */}
        <Suspense fallback={<OrderFlow labelledBy="order-title" />}>
          <OrderPageFlow labelledBy="order-title" />
        </Suspense>
      </div>
    </section>
  );
}
