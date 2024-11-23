import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useWindowSize } from '../hooks/useWindowSize';

const BackgroundElements = memo(() => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  
  const starCount = isMobile ? 15 : 30;
  const circleCount = isMobile ? 2 : 3;

  const stars = React.useMemo(() => 
    Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 2 + 2,
      delay: Math.random(),
    })), [starCount]
  );

  const circles = React.useMemo(() => 
    Array.from({ length: circleCount }).map((_, i) => ({
      id: i,
      size: (i + 1) * (isMobile ? 200 : 300),
      duration: 15 + i * 5,
    })), [circleCount, isMobile]
  );

  return (
    <>
      <div className="fixed inset-0 bg-[#0B0118]" />
      
      <div className="fixed inset-0 opacity-30">
        <div className="mystical-fog">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        </div>
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {circles.map(({ id, size, duration }) => (
          <motion.div
            key={id}
            className="absolute rounded-full cartoon-shadow"
            initial={{ opacity: 0.3 }}
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              rotate: 360
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: size,
              height: size,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.03) 0%, rgba(79, 70, 229, 0.03) 50%, transparent 70%)'
            }}
          />
        ))}
      </div>

      {stars.map(({ id, left, top, size, duration, delay }) => (
        <motion.div
          key={id}
          className="fixed rounded-full cartoon-shadow"
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay,
          }}
          style={{
            left,
            top,
            width: size,
            height: size,
            background: 'white',
            boxShadow: '0 0 3px rgba(255, 255, 255, 0.8)'
          }}
        />
      ))}

      <div className="fixed inset-0 mystic-pattern opacity-20" />
    </>
  );
});

BackgroundElements.displayName = 'BackgroundElements';

export { BackgroundElements };