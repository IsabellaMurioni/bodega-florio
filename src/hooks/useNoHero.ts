import { useMatches } from 'react-router';

/** True on routes flagged with `handle: { noHero: true }` (no full-bleed hero under the nav). */
export function useNoHero() {
  return useMatches().some((match) => (match.handle as { noHero?: boolean } | undefined)?.noHero);
}
