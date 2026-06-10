import { Github, Globe, Linkedin, Mail, MessageCircle } from 'lucide-react'
import Reveal, { SectionTitle } from './Reveal'
import { profile } from '../data/content'

export default function Contact() {
  const c = profile.contacts
  const items = [
    { icon: Mail, label: 'E-mail', value: c.email, href: `mailto:${c.email}` },
    { icon: MessageCircle, label: 'WhatsApp', value: c.phone, href: `https://wa.me/${c.phoneRaw}` },
    { icon: Github, label: 'GitHub', value: c.githubLabel, href: c.github },
    { icon: Linkedin, label: 'LinkedIn', value: c.linkedinLabel, href: c.linkedin },
    { icon: Globe, label: 'Site', value: c.siteLabel, href: c.site },
  ]

  return (
    <section id="contato" className="section py-24">
      <Reveal>
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-brand-violet/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 right-0 h-56 w-56 rounded-full bg-brand-cyan/15 blur-3xl" />
          <div className="relative">
            <SectionTitle kicker="Contato" title="Vamos construir algo juntos" />
            <p className="-mt-4 max-w-xl text-slate-300">
              Aberto a vagas, freelances e projetos. Me chame pelo canal que preferir — respondo
              rápido.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {items.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  target={it.href.startsWith('http') ? '_blank' : undefined}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 transition-colors hover:border-brand-violet/40 hover:bg-white/[0.07]"
                >
                  <span className="rounded-lg bg-gradient-to-br from-brand-violet/30 to-brand-cyan/20 p-2 text-white">
                    <it.icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-slate-400">
                      {it.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-white">{it.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
