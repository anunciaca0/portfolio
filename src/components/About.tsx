import { Gamepad2, Lightbulb, MapPin, MessagesSquare, Rocket } from 'lucide-react'
import Reveal, { SectionTitle } from './Reveal'
import { profile } from '../data/content'

const traits = [
  { icon: Gamepad2, title: 'Paixão por jogos', text: 'Da jogabilidade à engenharia por trás do código que faz o jogo acontecer.' },
  { icon: Rocket, title: 'Aprendizado rápido', text: 'Absorvo novas tecnologias e ferramentas com agilidade e autonomia.' },
  { icon: Lightbulb, title: 'Resolução de problemas', text: 'Foco em entregar soluções funcionais e bem arquitetadas.' },
  { icon: MessagesSquare, title: 'Comunicação', text: 'Comunicativo, sociável e adaptável social e profissionalmente.' },
]

export default function About() {
  return (
    <section id="sobre" className="section py-24">
      <SectionTitle kicker="Quem sou" title="Sobre mim" />
      <div className="grid items-start gap-10 lg:grid-cols-[300px_1fr]">
        {/* Foto */}
        <Reveal className="mx-auto w-full max-w-[300px]">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-violet/30 to-brand-cyan/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-850">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/15 to-brand-cyan/10" />
              <img
                src={profile.photo}
                alt={`Foto de ${profile.name}`}
                className="relative w-full select-none"
                draggable={false}
              />
            </div>
            <div className="relative -mt-px rounded-b-3xl border border-t-0 border-white/10 bg-ink-850 px-4 py-3 text-center">
              <p className="font-display font-semibold text-white">{profile.name}</p>
              <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-slate-400">
                <MapPin size={12} /> {profile.location}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Texto + traços */}
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-slate-300">{profile.about}</p>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {traits.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <div className="card h-full p-5">
                  <t.icon className="text-brand-cyan" size={22} />
                  <h3 className="mt-3 font-display font-semibold text-white">{t.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
