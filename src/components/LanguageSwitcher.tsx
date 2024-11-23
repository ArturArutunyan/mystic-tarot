import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLanguage: string;
  onToggle: () => void;
  label: string;
}

export const LanguageSwitcher = memo(({ currentLanguage, onToggle, label }: LanguageSwitcherProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.button
        key={currentLanguage}
        onClick={onToggle}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="fixed top-2 right-2 md:top-4 md:right-4 z-50 flex items-center gap-1.5 md:gap-2 
                   px-2 py-1.5 md:px-3 md:py-2 rounded-full bg-white/10 hover:bg-white/20 
                   backdrop-blur-sm transition-colors duration-300 text-white/80 hover:text-white 
                   text-xs md:text-sm font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-3.5 h-3.5 md:w-4 md:h-4" />
        <span>{label}</span>
      </motion.button>
    </AnimatePresence>
  );
});

LanguageSwitcher.displayName = 'LanguageSwitcher';