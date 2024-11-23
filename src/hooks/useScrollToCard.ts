import { useCallback } from 'react';

export function useScrollToCard() {
  return useCallback((element: HTMLElement | null) => {
    if (!element) return;

    const offset = window.innerHeight * 0.1;
    const elementRect = element.getBoundingClientRect();
    const targetScroll = window.scrollY + elementRect.top - offset;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  }, []);
}