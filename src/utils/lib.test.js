import { formatCurrency } from './lib';

// const anyWhitespace = 's';

test('formatCurrency formats the currency to look nice', () => {
  expect(formatCurrency('Portugal', 'EUR', 1000)).toBe('EUR €1000,00');
  expect(formatCurrency('Italy', 'EUR', 1000)).toBe('EUR €1.000,00');
  expect(formatCurrency('Germany', 'EUR', 1000)).toBe('EUR €1.000,00');
  expect(formatCurrency('France', 'EUR', 1000)).toBe('EUR €1 000,00'); // uses the narrow non-breaking space (u+202F) as thousands separator
  expect(formatCurrency('United States', 'USD', 1000)).toBe('USD $1,000.00');
  expect(formatCurrency('Czech Republic', 'CZK', 1000)).toBe('CZK Kč1 000,00'); // uses the non-breaking space (u+00A0) as thousands separator
  expect(formatCurrency('United Kingdom', 'GBP', 1000)).toBe('GBP £1,000.00');
});
