import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile, stats } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* glow orbs */}
      <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-brand-violet/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-72 w-72 rounded-full bg-brand-cyan/10 blur-3xl" />

      <div className="section grid items-center gap-12 py-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="chip"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Disponível para novas oportunidades
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-3 font-display text-xl font-semibold sm:text-2xl"
          >
            <span className="gradient-text">{profile.role}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            {profile.heroSummary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-violet to-brand-cyan px-5 py-3 text-sm font-semibold text-ink-950 transition-opacity hover:opacity-90"
            >
              Ver projetos <ArrowDown size={16} />
            </a>
            <a
              href={profile.cvFile}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-violet/40 hover:bg-white/5"
            >
              <Download size={16} /> Baixar CV (PDF)
            </a>
            <a
              href={`mailto:${profile.contacts.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              <Mail size={16} /> Entrar em contato
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-7 flex flex-wrap items-center gap-4 text-slate-400"
          >
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin size={15} /> {profile.location}
            </span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <a href={profile.contacts.github} target="_blank" className="transition-colors hover:text-white">
              <Github size={18} />
            </a>
            <a href={profile.contacts.linkedin} target="_blank" className="transition-colors hover:text-white">
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        {/* stat panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="card relative p-6 sm:p-8"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-violet/30 to-transparent opacity-40 blur-xl" />
          <div className="relative">
            <img src="/logo_anunciacao.png" alt="Anunciação" className="mx-auto h-36 w-auto sm:h-44" />
            <div className="my-6 h-px w-full bg-white/10" />
            <div className="space-y-5">
              {stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="gradient-text font-display text-3xl font-bold sm:text-4xl">{s.value}</span>
                  <span className="text-sm text-slate-400">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
