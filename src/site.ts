/**
 * Single source of truth for site-wide facts.
 * Items marked TBD are blocking — see PLAN.md §9.
 */
export const site = {
  name: 'Birdworks',
  url: 'https://birdworks.uk',
  email: 'hello@birdworks.uk',

  description:
    'Designed and 3D printed in the UK. Accessories for card games and tabletop wargaming.',

  /** TBD — required on the legal pages before taking payments. */
  tradingName: 'Birdworks — TBD trading name',
  tradingAddress: 'TBD — trading address required before launch',

  /**
   * Deliberately empty until the accounts exist. No dead links to empty
   * profiles. Add { name, url } for Instagram and Reddit once live.
   */
  social: [] as Array<{ name: string; url: string }>,

  /** Stated before purchase, as UK consumer law requires. */
  shipping: {
    /** TBD — flat rate, e.g. 3.95 */
    flatRate: null as number | null,
    carrier: 'Royal Mail Tracked 48',
    region: 'United Kingdom only',
  },
} as const;

export function formatPrice(
  amount: number | null | undefined,
  currency = 'GBP',
): string {
  if (amount === null || amount === undefined) return 'Price TBC';
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}
