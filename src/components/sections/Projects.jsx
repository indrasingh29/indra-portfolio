import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  Code2,
  Briefcase,
  ShoppingCart,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { projectsData } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import CardTilt from '../ui/CardTilt';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FEATURED WORK"
          title="Featured Engineering Projects"
          subtitle="Full-stack web applications built with the MERN stack, addressing multi-role workflows and database scalability."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => {
            const isFirst = idx === 0;

            return (
              <CardTilt key={project.id} maxTilt={5}>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="rounded-2xl bg-surface-elevated/40 border border-white/5 hover:border-brand-purple/40 backdrop-blur-md overflow-hidden flex flex-col justify-between h-full group hover:shadow-glow-purple transition-all"
                >
                  {/* Visual Mockup Header */}
                  <div className="relative p-6 bg-gradient-to-br from-[#0c0e1a] to-[#07080f] border-b border-white/5 overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-purple/10 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-cyan/15 transition-all" />

                    {/* Window Controls */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {project.tag}
                      </span>
                    </div>

                    {/* Project Graphic / Visual Representation */}
                    <div className="py-6 flex flex-col items-center justify-center text-center">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform"
                        style={{
                          background: `linear-gradient(135deg, ${project.visualHighlight.colorFrom}25, ${project.visualHighlight.colorTo}40)`,
                          border: `1px solid ${project.visualHighlight.colorFrom}60`,
                        }}
                      >
                        {isFirst ? (
                          <Briefcase size={28} className="text-brand-purple" />
                        ) : (
                          <ShoppingCart size={28} className="text-brand-cyan" />
                        )}
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-zinc-400 max-w-sm mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-brand-cyan hover:text-white transition-colors"
                      >
                        <span>View Architecture & Details</span>
                        <ArrowRight size={14} />
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                          title="View GitHub Repository"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon size={16} />
                        </a>

                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-brand-purple/20 hover:bg-brand-purple/30 text-brand-purple hover:text-white border border-brand-purple/40 transition-colors"
                          title="Explore Project"
                          aria-label="Explore Project"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </CardTilt>
            );
          })}
        </div>

        {/* Modal for Deep Dive */}
        <ProjectModal
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
