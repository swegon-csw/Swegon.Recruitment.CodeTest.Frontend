export function formatCurrency(value: number, currency: string = "USD", locale: string = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
}

export function formatCurrencyWithSymbol(value: number, symbol: string = "$"): string {
  return `${symbol}${formatNumber(value, 2)}`;
}

export function parseCurrency(value: string): number {
  const cleaned = value.replace(/[^0-9.-]/g, "");
  return parseFloat(cleaned) || 0;
}

function formatNumber(value: number, decimals: number): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}
