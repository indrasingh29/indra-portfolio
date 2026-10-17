import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { timelineData } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';

export default function Timeline() {
  return (
    <section id="journey" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="LEARNING PATH"
          title="Education & Engineering Journey"
          subtitle="A transparent, progressive trajectory from computer science foundations to full-stack application development."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline center beam */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-purple via-brand-cyan to-transparent opacity-30" />

          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isCurrent = item.status.includes('Current');

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 z-10">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border-2 ${
                        isCurrent
                          ? 'bg-brand-purple border-brand-cyan shadow-glow-purple'
                          : 'bg-[#080910] border-brand-purple/60'
                      }`}
                    >
                      {isCurrent ? (
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      ) : (
                        <CheckCircle2 size={13} className="text-brand-cyan" />
                      )}
                    </div>
                  </div>

                  {/* Spacer for symmetrical layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-10' : 'sm:pl-10'
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-surface-elevated/40 border border-white/5 hover:border-brand-purple/30 backdrop-blur-md transition-all group">
                      
                      {/* Period & Status */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono text-brand-cyan font-semibold">
                          {item.period}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            isCurrent
                              ? 'bg-brand-purple/20 text-purple-300 border border-brand-purple/30'
                              : 'bg-white/5 text-zinc-400'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">
                        {item.title}
                      </h3>

                      <span className="text-xs font-mono text-zinc-400 block mb-3">
                        {item.organization}
                      </span>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-400 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
