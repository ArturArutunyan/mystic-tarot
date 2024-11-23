import React, { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Moon, Stars, AlertCircle } from 'lucide-react';
import type { TarotCard } from '../data/tarotCards';
import { useLocalization } from '../hooks/useLocalization';

interface ReadingInterpretationProps {
  cards: Array<{ card: TarotCard; isReversed: boolean }>;
}

export const ReadingInterpretation = memo(({ cards }: ReadingInterpretationProps) => {
  const l = useLocalization();
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  if (cards.length === 0) return null;

  const positions = l.reading.positions.map((pos, index) => ({
    ...pos,
    icon: index === 0 ? <Moon className="w-4 h-4 md:w-5 md:h-5" /> :
          index === 1 ? <Stars className="w-4 h-4 md:w-5 md:h-5" /> :
                       <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
  }));

  return (
    <motion.div
      key={l.currentLanguage} // Force re-render on language change
      ref={ref}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="max-w-4xl mx-auto mt-8 md:mt-12 p-4 md:p-8 rounded-2xl md:rounded-3xl text-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90 backdrop-blur-lg" />
        <div className="absolute inset-0 mystic-pattern opacity-30" />
      </div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-6 md:mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 flex items-center justify-center gap-2 md:gap-3">
            <Stars className="w-5 h-5 md:w-6 md:h-6 text-purple-300" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300">
              {l.reading.title}
            </span>
            <Moon className="w-5 h-5 md:w-6 md:h-6 text-purple-300" />
          </h2>
          <p className="text-sm md:text-base text-purple-200/80">
            {inView ? l.reading.subtitle : l.reading.scrollPrompt}
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-8">
          {cards.map(({ card, isReversed }, index) => (
            <motion.div
              key={`${card.id}-${index}-${l.currentLanguage}`}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
              transition={{ delay: inView ? 0.2 + index * 0.1 : 0 }}
            >
              <div className={`
                relative rounded-xl md:rounded-2xl overflow-hidden p-4 md:p-6
                ${isReversed ? 'bg-indigo-900/30' : 'bg-purple-900/30'}
                backdrop-blur-sm
              `}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className={`
                        text-lg md:text-xl font-semibold
                        ${isReversed ? 'text-indigo-200' : 'text-purple-200'}
                      `}>
                        {positions[index].title}: {card.name}
                      </h3>
                      <span className={`
                        inline-flex items-center gap-1 text-xs md:text-sm px-2 py-0.5 rounded-full
                        ${isReversed
                          ? 'bg-indigo-500/20 text-indigo-200'
                          : 'bg-purple-500/20 text-purple-200'}
                      `}>
                        {isReversed && <AlertCircle className="w-3 h-3 md:w-3.5 md:h-3.5" />}
                        {isReversed ? l.reading.cardStates.reversed : l.reading.cardStates.upright}
                      </span>
                    </div>
                    
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {isReversed ? card.reversed : card.upright}
                    </p>

                    {(card.element || card.zodiac) && (
                      <div className="mt-2 md:mt-3 flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400">
                        {card.element && (
                          <span className="inline-flex items-center gap-1">
                            <span className="font-medium">{l.reading.elements.title}:</span> {card.element}
                          </span>
                        )}
                        {card.zodiac && (
                          <span className="inline-flex items-center gap-1">
                            <span className="font-medium">{l.reading.zodiac.title}:</span> {card.zodiac}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 md:mt-8 text-center text-purple-300/60 text-xs md:text-sm font-medium"
        >
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 inline-block mr-2" />
          {l.reading.footer}
        </motion.div>
      </div>
    </motion.div>
  );
});

ReadingInterpretation.displayName = 'ReadingInterpretation';