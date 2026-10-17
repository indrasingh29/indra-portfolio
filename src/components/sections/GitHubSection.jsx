import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Code2, Sparkles, BookOpen } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { useGitHubData } from '../../hooks/useGitHubData';
import { personalInfo } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import CardTilt from '../ui/CardTilt';

export default function GitHubSection() {
  const { profile, repos, loading, error } = useGitHubData(personalInfo.contact.githubUsername);

  return (
    <section id="github" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OPEN SOURCE & CODE"
          title="GitHub Activity & Repositories"
          subtitle="Direct integration with GitHub API showcasing public repositories, code commits, and project artifacts."
        />

        {/* Profile Stats Overview Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-surface-elevated/50 border border-white/5 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-purple shadow-glow-purple shrink-0">
                <img
                  src={profile?.avatar_url || 'https://avatars.githubusercontent.com/u/169467245?v=4'}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>@{personalInfo.contact.githubUsername}</span>
                  <span className="text-xs font-mono font-normal text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Active
                  </span>
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Full-stack repositories & algorithmic practice
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-center">
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white font-mono">
                  {profile?.public_repos ?? 3}
                </span>
                <span className="text-[11px] font-mono text-zinc-400 block uppercase">
                  Public Repos
                </span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-white/10 hover:border-brand-purple/40 text-xs font-semibold text-white transition-all shadow-sm group"
              >
                <GithubIcon size={15} />
                <span>Follow on GitHub</span>
                <ExternalLink size={13} className="text-zinc-500 group-hover:text-brand-cyan transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Public Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {loading ? (
            // Skeleton loaders
            [1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-44 rounded-2xl bg-surface-elevated/30 animate-pulse border border-white/5 p-6 flex flex-col justify-between"
              >
                <div className="h-4 bg-white/10 rounded w-2/3 mb-2" />
                <div className="h-3 bg-white/5 rounded w-full mb-1" />
                <div className="h-3 bg-white/5 rounded w-4/5" />
                <div className="h-4 bg-white/10 rounded w-1/3 mt-4" />
              </div>
            ))
          ) : repos.length > 0 ? (
            repos.map((repo, idx) => (
              <CardTilt key={repo.id || idx} maxTilt={6}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-surface-elevated/40 border border-white/5 hover:border-brand-purple/40 backdrop-blur-md flex flex-col justify-between h-full group hover:shadow-glow-purple transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-zinc-400 group-hover:text-brand-cyan transition-colors">
                        <BookOpen size={16} />
                        <h4 className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors truncate max-w-[180px]">
                          {repo.name}
                        </h4>
                      </div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded text-zinc-500 hover:text-white transition-colors"
                        title="Open Repository"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                      {repo.description || 'Public development repository by Indra Singh Jeena.'}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <span className="w-2 h-2 rounded-full bg-brand-purple" />
                      <span>{repo.language || 'JavaScript / Full-Stack'}</span>
                    </span>

                    <span className="flex items-center gap-1 text-zinc-500">
                      <Star size={12} />
                      <span>{repo.stargazers_count ?? 0}</span>
                    </span>
                  </div>
                </motion.div>
              </CardTilt>
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-zinc-400 text-sm">
              Visit{' '}
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cyan underline"
              >
                github.com/indrasingh29
              </a>{' '}
              to explore all repositories.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
