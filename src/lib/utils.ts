export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export function formatUSD(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export function formatGBP(amount: number): string {
  return `£${amount.toFixed(2)}`;
}

export function formatUSDWithGBP(usdAmount: number): string {
  const gbpApprox = Math.round(usdAmount * 0.79);
  return `$${usdAmount.toFixed(2)} (~£${gbpApprox})`;
}

