'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { findPlanBySlug } from '@/data/pricing';
import { SITE_CONFIG } from '@/data/site';
import { OrderFlow } from './OrderFlow';

export const OrderPageFlow: React.FC<{ labelledBy?: string }> = ({ labelledBy }) => {
  const searchParams = useSearchParams();
  const plan = findPlanBySlug(searchParams.get('plan'));
  const accounts = parseInt(searchParams.get('accounts') || '1', 10);

  return (
    <OrderFlow
      initialPlanId={plan?.id ?? 'plan-12m'}
      initialAccounts={accounts >= 1 && accounts <= 4 ? accounts : 1}
      labelledBy={labelledBy}
      onPlanChange={(p) => {
        window.history.replaceState(null, '', `${SITE_CONFIG.purchaseChannel.orderPath}?plan=${p.slug}`);
      }}
    />
  );
};
