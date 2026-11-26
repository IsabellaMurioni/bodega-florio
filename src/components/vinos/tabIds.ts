import type { WineCategory } from '@/types';

/** Shared ids that link the category tabs to their tab panel. */
export const tabId = (id: WineCategory) => `tab-${id}`;
export const PANEL_ID = 'panel-vinos';
