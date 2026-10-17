import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  Check,
  Copy,
  Sparkles,
  AlertCircle,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    info: null,
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ submitting: true, success: false, error: null, info: null });

    try {
      // Create mailto fallback link to ensure 100% reliable delivery straight to Indra's inbox
      const subject = encodeURIComponent(
        formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
      );
      const body = encodeURIComponent(
        `Hi Indra,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from Portfolio Website`
      );
      const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;

      // Trigger mail client safely
      window.location.href = mailtoUrl;

      // Confetti celebratory feedback
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
      });

      setStatus({
        submitting: false,
        success: true,
        error: null,
        info: 'Your default email client has been opened with your pre-filled message directly to indrasinghjeena@gmail.com!',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Failed to launch email composer. You can copy the email directly using the button on the left.',
        info: null,
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Discuss Opportunities"
          subtitle="Actively interviewing for software engineering internships and entry-level developer roles. Reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl bg-surface-elevated/40 border border-white/5 backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand-purple/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles size={20} className="text-brand-purple" />
                <span>Contact Details</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                Feel free to email me directly or connect through LinkedIn and GitHub. I respond promptly to internship and recruiter inquiries.
              </p>

              {/* Email direct copy box */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Mail size={13} className="text-brand-cyan" />
                    <span>Direct Email</span>
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-[11px] font-mono text-zinc-300 hover:text-white transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="text-sm font-mono text-white hover:text-brand-cyan transition-colors break-all"
                >
                  {personalInfo.contact.email}
                </a>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                  Professional Profiles:
                </span>

                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-white/5 hover:border-brand-purple/40 text-zinc-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <LinkedinIcon size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold block text-white">LinkedIn</span>
                      <span className="text-[11px] text-zinc-400">Connect with Indra</span>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-zinc-500 group-hover:text-brand-cyan transition-colors" />
                </a>

                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-white/5 hover:border-brand-purple/40 text-zinc-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10 text-white">
                      <GithubIcon size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold block text-white">GitHub</span>
                      <span className="text-[11px] text-zinc-400">@indrasingh29</span>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-zinc-500 group-hover:text-brand-cyan transition-colors" />
                </a>
              </div>

              {/* Availability Notice */}
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Immediate availability for Summer & Fall recruitment cycles.</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl bg-surface-elevated/40 border border-white/5 backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare size={20} className="text-brand-cyan" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Fill in the details below to initiate direct email communication.
              </p>

              {status.success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm flex items-start gap-2.5">
                  <Check size={16} className="mt-0.5 shrink-0" />
                  <span>{status.info}</span>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Your Name <span className="text-brand-purple">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-white/10 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 mt-1 block font-mono">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Your Email <span className="text-brand-purple">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-white/10 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block font-mono">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SDE Internship Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                    Message <span className="text-brand-purple">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about the role, project, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-white/10 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 block font-mono">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-violet hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-glow-purple transition-all disabled:opacity-50"
                >
                  <Send size={15} />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
