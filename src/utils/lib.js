const countries = {
  Portugal: { name: 'Portugal', locale: 'pt-PT' },
  Italy: { name: 'Italy', locale: 'it-IT' },
  Germany: { name: 'Germany', locale: 'de-DE' },
  France: { name: 'France', locale: 'fr-FR' },
  'United States': { name: 'United States', locale: 'en-US' },
  'Czech Republic': { name: 'Czech Republic', locale: 'cs-CZ' },
  'United Kingdom': { name: 'United Kingdom', locale: 'en-GB' },
};

export function formatCurrency(country, currency, number) {
  const formatter = new Intl.NumberFormat(countries[country].locale, {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'narrowSymbol',
  });
  const parts = formatter.formatToParts(number);
  const currencySymbol = parts.find((x) => x.type === 'currency').value;
  const valuesExSymbol = parts.filter((x) => x.type !== 'currency').map((x) => x.value);
  const sortedPartValuse = [currency, ' ', currencySymbol, ...valuesExSymbol];

  return sortedPartValuse.join('').trim();
}
