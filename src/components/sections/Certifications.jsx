import { motion } from 'framer-motion';
import { Award, Cloud, Coffee, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { certificationsData } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import CardTilt from '../ui/CardTilt';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="CREDENTIALS"
          title="Certifications & Cloud Badges"
          subtitle="Verified learning paths and foundational credentials. Presented with authentic completion status."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificationsData.map((cert, idx) => {
            const isAws = cert.id === 'aws-cloud-101';

            return (
              <CardTilt key={cert.id} maxTilt={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="p-6 sm:p-8 rounded-2xl bg-surface-elevated/40 border border-white/5 hover:border-brand-purple/40 backdrop-blur-md flex flex-col justify-between h-full group hover:shadow-glow-purple transition-all relative overflow-hidden"
                >
                  {/* Subtle corner glow */}
                  <div
                    className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none"
                    style={{ backgroundColor: cert.badgeColor }}
                  />

                  <div>
                    {/* Badge top tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div
                          className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform"
                          style={{ color: cert.badgeColor }}
                        >
                          {isAws ? <Cloud size={24} /> : <Coffee size={24} />}
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-zinc-400 block">
                            {cert.issuer}
                          </span>
                          <span className="text-xs font-semibold text-white">
                            {cert.badgeLabel}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                        <ShieldCheck size={13} />
                        <span>{cert.status}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {cert.description}
                    </p>

                    {/* Competencies covered */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                        Core Competencies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skillsLearned.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Verification note */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-400" />
                      <span>{cert.date}</span>
                    </span>
                    <span className="text-[11px] text-zinc-500">Documented</span>
                  </div>
                </motion.div>
              </CardTilt>
            );
          })}
        </div>
      </div>
    </section>
  );
}
