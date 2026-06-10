import { Gamepad2, Lightbulb, MessagesSquare, Rocket } from 'lucide-react'
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
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-slate-300">{profile.about}</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
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
    </section>
  )
}
