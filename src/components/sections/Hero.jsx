import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  FileDown,
  Mail,
  Check,
  Copy,
  Terminal,
  Code2,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { personalInfo } from '../../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Cycle role titles every 3.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyCode = () => {
    const code = `const developer = {
  name: "${personalInfo.name}",
  education: "B.Tech CSE (Pursuing)",
  coreStack: ["MongoDB", "Express", "React", "Node.js"],
  language: "Java (DSA Problem Solving)",
  cloud: "AWS Educate Cloud 101",
  status: "Seeking Internships & Entry-Level SDE Roles",
  contact: "${personalInfo.contact.email}"
};`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Role Rotator, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status / Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-elevated/80 border border-brand-purple/30 text-xs font-mono text-zinc-300 shadow-inner-glow mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability.badgeText}</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg font-mono text-brand-cyan tracking-wide mb-2 flex items-center gap-2"
            >
              <span>👋</span>
              <span>Hi, I'm</span>
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Dynamic Role Rotator */}
            <div className="h-10 sm:h-12 overflow-hidden mb-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-cyan to-indigo-300"
                >
                  {personalInfo.subtitles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Core Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl font-medium text-zinc-300 max-w-2xl mb-4 leading-snug"
            >
              Building Modern Web Experiences That Solve Real Problems.
            </motion.h2>

            {/* Supporting Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-zinc-400 max-w-xl mb-8 leading-relaxed"
            >
              I'm a Computer Science student passionate about full-stack development, clean code, and building practical web applications.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-violet hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-glow-purple hover:shadow-lg transition-all group"
              >
                <span>Explore My Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.contact.resumeUrl}
                download="Indra_Singh_Jeena_Resume.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-elevated hover:bg-surface-hover text-zinc-200 hover:text-white border border-white/10 hover:border-brand-purple/40 font-semibold text-sm transition-all"
              >
                <FileDown size={16} className="text-brand-cyan" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links & Direct Mail */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 text-zinc-400"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Connect:</span>
              
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface hover:bg-surface-elevated text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 transition-all"
                title="Indra's GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface hover:bg-surface-elevated text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 transition-all"
                title="Indra's LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="p-2 rounded-lg bg-surface hover:bg-surface-elevated text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 transition-all"
                title={`Email: ${personalInfo.contact.email}`}
                aria-label="Direct Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: High-End Interactive Code Card */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl bg-[#0b0d17]/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl group"
            >
              {/* Card top glow accent */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-70" />

              {/* Terminal / Code Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080910] border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <div className="ml-3 flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <Code2 size={13} className="text-brand-purple" />
                    <span>indra_profile.js</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
                    title="Copy Profile Snippet"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-zinc-300">
                <div className="space-y-1">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">name:</span>{' '}
                    <span className="text-emerald-400">"{personalInfo.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">education:</span>{' '}
                    <span className="text-emerald-400">"B.Tech CSE (Pursuing)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">coreStack:</span> [
                    <span className="text-amber-300">"MongoDB"</span>,{' '}
                    <span className="text-amber-300">"Express"</span>,{' '}
                    <span className="text-amber-300">"React"</span>,{' '}
                    <span className="text-amber-300">"Node.js"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">primaryLanguage:</span>{' '}
                    <span className="text-amber-300">"Java (DSA)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">cloudLearning:</span>{' '}
                    <span className="text-emerald-400">"AWS Educate Cloud 101"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">projects:</span> [
                    <span className="text-purple-300">"Job Portal"</span>,{' '}
                    <span className="text-purple-300">"QuickKart"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">openToWork:</span>{' '}
                    <span className="text-cyan-400">true</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">goal:</span>{' '}
                    <span className="text-emerald-400">"Internships & SDE Roles"</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Simulated interactive execution status */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Terminal size={12} className="text-emerald-400" />
                    <span>status: ready_to_interview</span>
                  </div>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Active
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
