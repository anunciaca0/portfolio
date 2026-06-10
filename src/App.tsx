import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import { profile } from './data/content'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="section flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</p>
          <p>
            Feito com <span className="text-brand-glow">React</span> ·{' '}
            <span className="text-brand-cyan">TypeScript</span> · Tailwind
          </p>
        </div>
      </footer>
    </>
  )
}
