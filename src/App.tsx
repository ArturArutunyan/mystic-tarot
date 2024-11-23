import React, { useState, useRef, Suspense, lazy, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Moon, Stars } from 'lucide-react';
import { useTarotDeck } from './data/tarotCards';
import { TarotCard } from './components/TarotCard';
import { getRandomCards } from './utils/cardUtils';
import { BackgroundElements } from './components/BackgroundElements';
import { useLocalization } from './hooks/useLocalization';

const ReadingInterpretation = lazy(() => 
  import('./components/ReadingInterpretation').then(module => ({
    default: module.ReadingInterpretation
  }))
);

const LoadingFallback = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-pulse text-purple-300">Loading...</div>
  </div>
);

function App() {
  const l = useLocalization();
  const deck = useTarotDeck();
  const [selectedCards, setSelectedCards] = useState<Array<{ card: ReturnType<typeof useTarotDeck>[0]; isReversed: boolean }>>([]);
  const [isReading, setIsReading] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  const scrollToCards = useCallback(() => {
    if (cardsRef.current) {
      const cardRect = cardsRef.current.getBoundingClientRect();
      const targetScroll = window.scrollY + cardRect.top - (window.innerHeight - cardRect.height) / 2;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  }, []);

  const startNewReading = useCallback(() => {
    setIsReading(false);
    setSelectedCards([]);
    
    requestAnimationFrame(() => {
      setIsReading(true);
      setSelectedCards(getRandomCards(deck, 3));
      requestAnimationFrame(scrollToCards);
    });
  }, [deck, scrollToCards]);

  const performReading = useCallback(() => {
    setIsReading(true);
    setSelectedCards(getRandomCards(deck, 3));
    requestAnimationFrame(scrollToCards);
  }, [deck, scrollToCards]);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <BackgroundElements />
      
      <div className="relative min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {!isReading ? (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-grow flex items-center justify-center px-4 py-8 md:py-12"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 flex items-center justify-center gap-3">
                  <Moon className="w-6 h-6 md:w-8 md:h-8 text-purple-300 floating" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300">
                    {l.app.title}
                  </span>
                  <Stars className="w-6 h-6 md:w-8 md:h-8 text-purple-300 floating" />
                </h1>
                <p className="text-base md:text-lg text-purple-200 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">
                  {l.app.subtitle}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={performReading}
                  className="mx-auto block px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-lg md:text-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-purple-500/30 hover:shadow-xl cartoon-shadow"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 glowing" />
                    {l.app.startButton}
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="reading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="container mx-auto px-4 py-8 md:py-12"
            >
              <div className="space-y-8 md:space-y-12">
                <div ref={cardsRef} className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8 md:mb-12">
                  <AnimatePresence mode="wait">
                    {selectedCards.map((cardData, index) => (
                      <TarotCard
                        key={`${cardData.card.id}-${index}`}
                        card={cardData.card}
                        index={index}
                        isReversed={cardData.isReversed}
                      />
                    ))}
                  </AnimatePresence>
                </div>
                
                <Suspense fallback={<LoadingFallback />}>
                  <ReadingInterpretation cards={selectedCards} />
                </Suspense>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  onClick={startNewReading}
                  className="mx-auto block px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg cartoon-shadow"
                >
                  {l.app.newReadingButton}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;