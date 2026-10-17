import { motion } from 'framer-motion';
import {
  GraduationCap,
  Layers,
  CodeXml,
  Cloud,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import CardTilt from '../ui/CardTilt';

export default function About() {
  const pillars = [
    {
      icon: Layers,
      title: 'Full-Stack MERN Engineering',
      desc: 'Developing end-to-end applications with MongoDB, Express.js, React.js, and Node.js. Focused on modular architecture, clean REST APIs, and state predictability.',
      color: '#8b5cf6',
    },
    {
      icon: CodeXml,
      title: 'Java & Algorithmic Foundations',
      desc: 'Consistent problem solving with Java and Data Structures & Algorithms. Cultivating computational rigor and analyzing space/time complexity.',
      color: '#06b6d4',
    },
    {
      icon: Cloud,
      title: 'Cloud Foundations (AWS Educate)',
      desc: 'Gained foundational knowledge through AWS Educate Introduction to Cloud 101, understanding global cloud infrastructure, virtual networks, and storage.',
      color: '#FF9900',
    },
    {
      icon: GraduationCap,
      title: 'Continuous CS Education',
      desc: 'Pursuing B.Tech in Computer Science and Engineering with passion for systems programming, database modeling, and software engineering methodologies.',
      color: '#10b981',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ABOUT ME"
          title="Authentic Engineering & Continuous Growth"
          subtitle="A computer science student dedicated to mastering modern web development and algorithmic problem solving."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl bg-surface-elevated/50 border border-white/5 backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-purple/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles size={20} className="text-brand-purple" />
                <span>My Journey & Philosophy</span>
              </h3>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.about.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Highlights Chips */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {personalInfo.about.highlights.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white mt-1">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: 4 Core Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <CardTilt key={idx} maxTilt={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-surface-elevated/40 border border-white/5 hover:border-brand-purple/30 backdrop-blur-md transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0 group-hover:scale-105 transition-transform"
                        style={{ color: pillar.color }}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-brand-cyan transition-colors">
                          {pillar.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CardTilt>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
