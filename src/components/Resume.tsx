import { Award, GraduationCap, Languages } from 'lucide-react'
import Reveal, { SectionTitle } from './Reveal'
import { courses, education, languages } from '../data/content'

export default function Resume() {
  return (
    <section id="formacao" className="section py-24">
      <SectionTitle kicker="Trajetória" title="Formação & Idiomas" />
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Formação */}
        <Reveal>
          <div className="card h-full p-6">
            <div className="flex items-center gap-2 text-brand-glow">
              <GraduationCap size={20} />
              <h3 className="font-display font-semibold text-white">Formação</h3>
            </div>
            <div className="mt-5 space-y-5">
              {education.map((e) => (
                <div key={e.title} className="relative border-l border-white/10 pl-4">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand-violet" />
                  <p className="font-medium text-white">{e.title}</p>
                  <p className="text-sm text-slate-400">{e.org}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {e.period}
                    {e.note && <span className="ml-2 chip py-0.5 text-[11px]">{e.note}</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Cursos */}
        <Reveal delay={0.06}>
          <div className="card h-full p-6">
            <div className="flex items-center gap-2 text-brand-glow">
              <Award size={20} />
              <h3 className="font-display font-semibold text-white">Cursos</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {courses.map((c) => (
                <li key={c.title}>
                  <p className="font-medium text-white">{c.title}</p>
                  <p className="text-sm text-slate-400">{c.org}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Idiomas */}
        <Reveal delay={0.12}>
          <div className="card h-full p-6">
            <div className="flex items-center gap-2 text-brand-glow">
              <Languages size={20} />
              <h3 className="font-display font-semibold text-white">Idiomas</h3>
            </div>
            <div className="mt-5 space-y-5">
              {languages.map((l) => (
                <div key={l.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-white">{l.name}</span>
                    <span className="text-slate-400">{l.level}</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-violet to-brand-cyan"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
