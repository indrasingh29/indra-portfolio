import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Database,
  Code2,
} from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl rounded-2xl bg-[#0c0e18] border border-white/10 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-start justify-between bg-[#080911]/90">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 mb-2">
                {project.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Content - Scrollable */}
          <div className="p-6 overflow-y-auto space-y-6 text-zinc-300 text-sm">
            
            {/* The Problem Solved */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-brand-purple flex items-center gap-1.5 mb-2">
                <AlertCircle size={14} />
                <span>Problem Statement</span>
              </h4>
              <p className="bg-surface-elevated/40 p-4 rounded-xl border border-white/5 text-zinc-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            {/* Architecture Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-brand-cyan flex items-center gap-1.5 mb-2">
                <Cpu size={14} />
                <span>Architecture & Design</span>
              </h4>
              <p className="bg-surface-elevated/40 p-4 rounded-xl border border-white/5 text-zinc-300 leading-relaxed">
                {project.architecture}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-2">
                <CheckCircle2 size={14} />
                <span>Key Implemented Features</span>
              </h4>
              <ul className="space-y-2 bg-surface-elevated/40 p-4 rounded-xl border border-white/5">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5 mb-2">
                <Database size={14} />
                <span>Technology Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-surface-elevated border border-white/10 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-[#080911]/90 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-500">
              Repository: indrasingh29/{project.id}
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-white/10 text-zinc-200 text-xs font-semibold transition-colors"
              >
                <GithubIcon size={15} />
                <span>View Source Code</span>
              </a>

              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-violet text-white text-xs font-semibold shadow-glow-purple transition-all"
              >
                <ExternalLink size={15} />
                <span>Explore Project</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
