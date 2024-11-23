import { useMemo } from 'react';
import { en } from '../localization/en';

export function useLocalization() {
  // Memoize translations to prevent unnecessary re-renders
  const translations = useMemo(() => ({
    ...en,
    currentLanguage: 'en',
    toggleLanguage: () => {} // No-op since we only have English
  }), []);

  return translations;
}

export type { Localization } from '../localization/types';