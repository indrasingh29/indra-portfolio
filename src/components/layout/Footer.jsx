import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05060a] border-t border-white/5 py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-purple to-brand-cyan p-0.5 shadow-sm">
              <div className="w-full h-full bg-[#07080d] rounded-xl flex items-center justify-center">
                <span className="font-mono font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {personalInfo.initials}
                </span>
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-white block">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                Aspiring Full-Stack & MERN Developer
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#journey" className="hover:text-white transition-colors">Journey</a>
            <a href="#github" className="hover:text-white transition-colors">GitHub</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top & Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              title="Email"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-white/10 text-zinc-300 hover:text-white transition-all ml-2"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 text-center sm:text-left">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 justify-center">
            <span>Crafted with precision using React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
