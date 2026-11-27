import { useMatches } from 'react-router';

/** True on routes flagged with `handle: { noHero: true }` (no full-bleed hero under the nav). */
export function useNoHero() {
  return useMatches().some((match) => (match.handle as { noHero?: boolean } | undefined)?.noHero);
}

/** Page theme from `handle: { theme: 'bordeaux' }` (whole page on bordeaux), if any. */
export function usePageTheme() {
  return useMatches()
    .map((match) => (match.handle as { theme?: 'bordeaux' } | undefined)?.theme)
    .find(Boolean);
}
