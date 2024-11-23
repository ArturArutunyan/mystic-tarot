import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import type { TarotCard as TarotCardType } from '../data/tarotCards';
import { useAnimationConfig } from '../hooks/useAnimationConfig';
import { useScrollToCard } from '../hooks/useScrollToCard';
import { useLocalization } from '../hooks/useLocalization';

interface TarotCardProps {
  card: TarotCardType;
  index: number;
  isReversed: boolean;
}

const TarotCard = memo(({ card, index, isReversed }: TarotCardProps) => {
  const { enabled, duration, delay } = useAnimationConfig();
  const l = useLocalization();
  const scrollToCard = useScrollToCard();
  const Icon = card.icon;
  const animationDelay = delay * index;

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      scrollToCard(null);
    }, (animationDelay + duration) * 1000);

    return () => clearTimeout(timeoutId);
  }, [scrollToCard, animationDelay, duration]);

  const cardVariants = {
    initial: enabled ? {
      scale: 0.8,
      rotateY: 180,
      opacity: 0,
      y: 50,
    } : { opacity: 0 },
    animate: {
      scale: 1,
      rotateY: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay: animationDelay,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
  };

  const contentVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: duration * 0.5,
        delay: animationDelay + 0.2,
      },
    },
  };

  return (
    <div className="relative w-[280px] h-[460px] scroll-mt-4">
      <motion.div
        initial="initial"
        animate="animate"
        variants={cardVariants}
        className="relative w-full h-full perspective-1000"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div 
          className={`
            relative w-full h-full rounded-[2rem] overflow-hidden shadow-xl
            transform transition-transform duration-300 card-hover group
            ${isReversed ? 'reversed rotate-180' : ''}
          `}
        >
          {/* Outer glow border */}
          <div className={`
            absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br
            ${isReversed 
              ? 'from-indigo-200/30 via-white/5 to-blue-200/30' 
              : 'from-purple-200/30 via-white/5 to-blue-200/30'}
            group-hover:opacity-100 transition-opacity duration-300
          `} />

          {/* Inner card content */}
          <div className={`
            absolute inset-[1px] rounded-[2rem] border backdrop-blur-sm overflow-hidden
            ${isReversed 
              ? 'border-indigo-300/20 bg-gradient-to-br from-indigo-900/90 to-blue-900/90' 
              : 'border-purple-300/20 bg-gradient-to-br from-purple-900/90 to-blue-900/90'}
          `}>
            <motion.div 
              variants={contentVariants}
              className="relative w-full h-full flex flex-col items-center justify-center"
            >
              <div className={`
                absolute inset-0 flex items-center justify-center
                ${isReversed ? 'rotate-180' : ''}
              `}>
                <Icon className={`
                  w-40 h-40 opacity-40 transition-all duration-300 group-hover:opacity-50
                  ${isReversed 
                    ? 'text-indigo-200 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]' 
                    : 'text-purple-200 drop-shadow-[0_0_15px_rgba(216,180,254,0.5)]'}
                `} />
              </div>

              <div className={`
                absolute inset-0 mix-blend-multiply
                ${isReversed
                  ? 'bg-gradient-to-br from-indigo-900/40 via-transparent to-blue-900/40'
                  : 'bg-gradient-to-br from-purple-900/40 via-transparent to-blue-900/40'}`} 
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <div className={`text-center ${isReversed ? 'rotate-180' : ''}`}>
                  <h3 className={`text-xl font-semibold mb-1 text-transparent bg-clip-text
                    ${isReversed
                      ? 'bg-gradient-to-r from-indigo-300 to-blue-300'
                      : 'bg-gradient-to-r from-purple-300 to-blue-300'}`}
                  >
                    {card.name}
                  </h3>
                  <p className={`text-sm flex items-center justify-center gap-1.5
                    ${isReversed ? 'text-indigo-200/80' : 'text-purple-200/80'}`}
                  >
                    {isReversed && <AlertCircle className="w-3.5 h-3.5" />}
                    {isReversed ? l.reading.cardStates.reversed : l.reading.cardStates.upright}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

TarotCard.displayName = 'TarotCard';

export { TarotCard };