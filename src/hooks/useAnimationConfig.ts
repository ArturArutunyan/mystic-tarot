import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from './useWindowSize';

export function useAnimationConfig() {
  const shouldReduceMotion = useReducedMotion();
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return {
    enabled: !shouldReduceMotion && !isMobile,
    duration: isMobile ? 0.3 : 1.2,
    delay: isMobile ? 0 : 0.3,
  };
}