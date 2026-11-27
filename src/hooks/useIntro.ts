import { createContext, useContext } from 'react';

/** True once the first-load loader has faded out (always true after the first page). */
export const IntroContext = createContext(false);

/**
 * Heroes use this to start their entrance only after the loader is gone:
 *   const introDone = useIntro();
 * The same moment is also exposed as html[data-intro="done"] and a "florio:intro-done" event.
 */
export function useIntro() {
  return useContext(IntroContext);
}
