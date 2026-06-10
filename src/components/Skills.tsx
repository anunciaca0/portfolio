import Reveal, { SectionTitle } from './Reveal'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section py-24">
      <SectionTitle kicker="Stack" title="Habilidades técnicas" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <div className="card h-full p-5">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-glow/90">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
