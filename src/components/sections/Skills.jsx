import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Server,
  Database,
  Coffee,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle,
  FileCode2,
  Palette,
  Smartphone,
  Workflow,
  Cloud,
  Binary,
  Boxes,
  GitBranch,
  CodeXml,
  UploadCloud,
  Atom,
} from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { skillsData } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import CardTilt from '../ui/CardTilt';

// Icon dictionary mapping strings to Lucide & SVG components
const iconMap = {
  Atom: Atom,
  FileCode2: FileCode2,
  Code: Code,
  Palette: Palette,
  Smartphone: Smartphone,
  Server: Server,
  Cpu: Cpu,
  Workflow: Workflow,
  Database: Database,
  Cloud: Cloud,
  Coffee: Coffee,
  Binary: Binary,
  Boxes: Boxes,
  GitBranch: GitBranch,
  Github: GithubIcon,
  Terminal: Terminal,
  CodeXml: CodeXml,
  UploadCloud: UploadCloud,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Layers },
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'programming', name: 'Languages & CS', icon: Coffee },
    { id: 'tools', name: 'Tools & DevOps', icon: Terminal },
  ];

  // Filter skills based on tab
  const displayedCategories =
    selectedCategory === 'all'
      ? skillsData.categories
      : skillsData.categories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TECH STACK"
          title="Skills & Technologies"
          subtitle="Honest technical stack focused on full-stack web engineering and computer science fundamentals. No fabricated metrics."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-brand-purple to-brand-violet text-white shadow-glow-purple'
                    : 'bg-surface-elevated/60 text-zinc-400 hover:text-zinc-200 border border-white/5 hover:border-white/10'
                }`}
              >
                <Icon size={15} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Categories and Skill Cards */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {displayedCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-8 rounded-2xl bg-surface-elevated/30 border border-white/5 backdrop-blur-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-white/5 gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                      <span>{category.title}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 self-start sm:self-auto">
                    {category.skills.length} Technologies
                  </span>
                </div>

                {/* Grid of skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {category.skills.map((skill, sIdx) => {
                    const SkillIcon = iconMap[skill.icon] || Code;
                    return (
                      <CardTilt key={sIdx} maxTilt={6}>
                        <div className="p-4 rounded-xl bg-surface-elevated/70 border border-white/5 hover:border-brand-purple/40 transition-all group flex flex-col justify-between h-full hover:shadow-glow-purple">
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className="p-2.5 rounded-lg bg-[#07080d] border border-white/10 group-hover:scale-110 transition-transform"
                              style={{ color: skill.color }}
                            >
                              <SkillIcon size={18} />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">
                                {skill.name}
                              </h4>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                            <span className="text-[11px] font-mono text-zinc-400">
                              {skill.level}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          </div>
                        </div>
                      </CardTilt>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
