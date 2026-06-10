import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import { profile } from '../data/content'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#formacao', label: 'Formação' },
  { href: '#contato', label: 'Contato' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="section flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-white">
          R<span className="gradient-text">A</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.cvFile}
            download
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-brand-violet/40 hover:bg-white/5"
          >
            <Download size={15} /> CV
          </a>
          <a
            href="#contato"
            className="rounded-lg bg-gradient-to-r from-brand-violet to-brand-cyan px-4 py-2 text-sm font-semibold text-ink-950 transition-opacity hover:opacity-90"
          >
            Fale comigo
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
          aria-label="Menu"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 px-5 py-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
