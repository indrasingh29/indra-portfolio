import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080d] text-white"
      >
        {/* Ambient background glow */}
        <div className="absolute w-72 h-72 rounded-full bg-brand-purple/20 blur-3xl -top-10 -left-10 pointer-events-none" />
        <div className="absolute w-72 h-72 rounded-full bg-brand-cyan/20 blur-3xl -bottom-10 -right-10 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6 text-center">
          {/* Logo Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-cyan p-0.5 mb-6 shadow-glow-purple"
          >
            <div className="w-full h-full bg-[#07080d] rounded-2xl flex items-center justify-center">
              <span className="font-mono font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                ISJ
              </span>
            </div>
          </motion.div>

          <h2 className="text-sm font-mono tracking-widest text-zinc-400 uppercase mb-4">
            Indra Singh Jeena
          </h2>

          {/* Progress bar container */}
          <div className="w-full bg-zinc-900 border border-zinc-800 rounded-full h-1.5 overflow-hidden mb-3">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-purple via-brand-cyan to-brand-purple bg-[length:200%_100%]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <div className="flex justify-between w-full text-xs font-mono text-zinc-500">
            <span>Loading Portfolio</span>
            <span className="text-cyan-400">{progress}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
