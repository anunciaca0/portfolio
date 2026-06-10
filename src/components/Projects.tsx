import { Check } from 'lucide-react'
import Reveal, { SectionTitle } from './Reveal'
import { projects } from '../data/content'

const accentMap: Record<string, string> = {
  violet: 'from-brand-violet/40',
  cyan: 'from-brand-cyan/40',
  emerald: 'from-emerald-400/40',
  amber: 'from-amber-400/40',
}
const dotMap: Record<string, string> = {
  violet: 'text-brand-violet',
  cyan: 'text-brand-cyan',
  emerald: 'text-emerald-400',
  amber: 'text-amber-400',
}

export default function Projects() {
  return (
    <section id="projetos" className="section py-24">
      <SectionTitle kicker="Portfólio" title="Projetos em destaque" />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className="card group relative h-full overflow-hidden p-6 sm:p-7">
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${accentMap[p.accent]} to-transparent opacity-50 blur-2xl transition-opacity group-hover:opacity-80`}
              />
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {p.category}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{p.description}</p>

                <ul className="mt-4 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check size={16} className={`mt-0.5 shrink-0 ${dotMap[p.accent]}`} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="chip text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <p className="mt-8 text-center text-sm text-slate-500">
          Prints, GIFs e links de repositório podem ser adicionados a cada projeto.
        </p>
      </Reveal>
    </section>
  )
}
