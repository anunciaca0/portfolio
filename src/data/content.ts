// =====================================================================
//  CONTEÚDO DO PORTFÓLIO — edite tudo por aqui (textos, links, projetos)
// =====================================================================

export const profile = {
  name: 'Rodrigo Anunciação',
  role: 'Desenvolvedor Full-Stack',
  tagline: 'React · TypeScript · Node.js · FiveM / Lua',
  location: 'São Paulo — SP, Brasil',
  // Resumo do topo (hero)
  heroSummary:
    'Desenvolvedor full-stack com foco em front-end moderno e arquitetura de sistemas para jogos. ' +
    'Construo do componente React à lógica de servidor em Lua — incluindo uma plataforma FiveM ' +
    'multi-servidor com 100+ módulos rodando de um único codebase.',
  // Resumo "Sobre" (do CV)
  about:
    'Cursando Sistema da Informação, com base sólida construída nos cursos da Rocketseat em ' +
    'programação, banco de dados e desenvolvimento web. Apaixonado por jogos — tanto pela ' +
    'jogabilidade quanto pela engenharia por trás deles. Comunicativo, sociável e adaptável, ' +
    'com facilidade de aprendizado rápido e foco em resolução de problemas. Busco oportunidades ' +
    'para aplicar e expandir meu conhecimento em uma empresa de tecnologia em crescimento.',
  contacts: {
    phone: '(11) 97425-8369',
    phoneRaw: '5511974258369',
    email: 'anunciacao.rr@gmail.com',
    github: 'https://github.com/anunciaca0',
    githubLabel: 'github.com/anunciaca0',
    linkedin: 'https://www.linkedin.com/in/anunciaca0',
    linkedinLabel: 'linkedin.com/in/anunciaca0',
    site: 'https://anunciacao.tech',
    siteLabel: 'anunciacao.tech',
  },
  // Currículo em PDF (gerado a partir de cv/curriculo.html)
  cvFile: '/curriculo-rodrigo-anunciacao.pdf',
}

export const stats = [
  { value: '100+', label: 'Módulos / resources desenvolvidos' },
  { value: '2', label: 'Servidores de um único codebase' },
  { value: '4', label: 'Anos de imersão em desenvolvimento' },
]

export type SkillGroup = { title: string; items: string[] }

export const skills: SkillGroup[] = [
  {
    title: 'Front-End',
    items: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS / SASS', 'Tailwind CSS', 'Redux'],
  },
  {
    title: 'Back-End',
    items: ['Node.js', 'Lua', 'APIs HTTP', 'REST'],
  },
  {
    title: 'Dados & Infra',
    items: ['MySQL', 'Docker', 'Linux', 'Git / GitHub', 'EasyPanel', 'Traefik'],
  },
  {
    title: 'Game Dev',
    items: ['FiveM', 'QBX Core', 'ox_inventory', 'NUI (React)', 'Discord.js'],
  },
]

export type Project = {
  title: string
  category: string
  description: string
  highlights: string[]
  tech: string[]
  accent: 'violet' | 'cyan' | 'emerald' | 'amber'
}

export const projects: Project[] = [
  {
    title: 'Plataforma FiveM Multi-Servidor',
    category: 'Arquitetura de Software',
    description:
      'Plataforma de roleplay que alimenta DOIS servidores temáticos distintos (mitologia grega e mundo bruxo) a partir do MESMO codebase, diferenciados em runtime por uma convar. Sistema de overlay de temas para configs, dados e UI.',
    highlights: [
      'Arquitetura multi-tenant: 1 codebase → 2 produtos (troca de tema via convar)',
      'Sistema de overlay de configuração e merge de dados por tema',
      '100+ resources modulares com dependências controladas',
    ],
    tech: ['Lua', 'QBX Core', 'MySQL', 'oxmysql', 'State Bags'],
    accent: 'violet',
  },
  {
    title: 'Inventário Customizado (NUI)',
    category: 'Front-End / UI',
    description:
      'Interface de inventário drag-and-drop construída em React + TypeScript, com gerenciamento de estado via Redux Toolkit e build otimizado em Vite. Integração em tempo real com o backend Lua via mensagens NUI.',
    highlights: [
      'UI complexa com drag-and-drop e sincronização em tempo real',
      'Versão temática alternativa para o segundo servidor',
      'Build performático com Vite + Tailwind',
    ],
    tech: ['React 18', 'TypeScript', 'Redux Toolkit', 'Vite', 'SCSS'],
    accent: 'cyan',
  },
  {
    title: 'Bot de Administração Discord',
    category: 'Back-End / Integrações',
    description:
      'Bot de administração que conecta o Discord ao servidor de jogo via API HTTP, permitindo comandos de moderação, consultas e ações administrativas diretamente do Discord, usando o ID do Discord como identificador primário.',
    highlights: [
      'Integração Discord ↔ servidor de jogo via API HTTP',
      'Comandos de moderação e automação administrativa',
      'discord.js v14',
    ],
    tech: ['Node.js', 'discord.js v14', 'HTTP API', 'JavaScript'],
    accent: 'emerald',
  },
  {
    title: 'Sistemas de Gameplay',
    category: 'Lógica & Game Design',
    description:
      'Dezenas de sistemas de jogo: feitiços com projéteis, poderes especiais, sistema médico de ferimentos com hemorragia, criaturas com IA de proximidade e humor, escolas, economia e mais — todos com validação server-side e anti-cheat.',
    highlights: [
      'Sistema médico de ferimentos com mapeamento de partes do corpo',
      'Feitiços baseados em projéteis com efeitos de partículas',
      'Validação server-side e prevenção de exploits',
    ],
    tech: ['Lua', 'Particles VFX', 'MySQL', 'Anti-cheat'],
    accent: 'amber',
  },
]

export type Education = {
  title: string
  org: string
  period: string
  note?: string
}

export const education: Education[] = [
  {
    title: 'Bacharelado em Sistemas da Informação',
    org: 'FMU — Centro Universitário',
    period: '2024 — 2028',
    note: 'Cursando',
  },
]

export const courses = [
  { title: 'Desenvolvedor Full-Stack', org: 'Rocketseat' },
  { title: 'Front-End', org: 'Rocketseat' },
  { title: 'NLW eSports / Explore', org: 'Rocketseat' },
]

export type Language = { name: string; level: string; pct: number }

export const languages: Language[] = [
  { name: 'Português', level: 'Nativo', pct: 100 },
  { name: 'Inglês', level: 'Intermediário (estudando)', pct: 60 },
  { name: 'Espanhol', level: 'Intermediário (estudando)', pct: 55 },
]
