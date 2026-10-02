import type { Copy, Locale } from './types'

export const messages: Record<Locale, Copy> = {
  'pt-BR': {
    meta: { title: 'Gabriel Henrique Grassi · Tech Lead', description: 'Tech Lead com experiência em arquitetura, .NET, React, Azure e liderança técnica.' },
    nav: { home: 'Início', navigation: 'Navegação principal', language: 'Idioma', openMenu: 'Abrir menu', closeMenu: 'Fechar menu', about: 'Perfil', education: 'Formação', path: 'Experiência', skills: 'Competências', contact: 'Contato', linkedin: 'LinkedIn' },
    actions: { backToTop: 'Voltar ao topo' },
    hero: {
      availability: 'Tech Lead · Software Engineer', title: 'Gabriel Henrique Grassi', accent: 'Tech Lead', tail: '6 anos em tecnologia · profissional desde 2021',
      summary: 'Liderança técnica hands-on, arquitetura de software e produtos web com .NET, React, TypeScript e Azure.', cue: 'VER EXPERIÊNCIA'
    },
    about: {
      eyebrow: 'Perfil profissional', title: 'Experiência técnica com foco em produto e pessoas.',
      lead: 'Tech Lead hands-on com experiência em engenharia de software, arquitetura e liderança técnica.',
      paragraphs: ['Comecei a construir projetos em 2020, durante o curso técnico. Em 2021 iniciei minha carreira na OnFriday, onde evoluí de estagiário a desenvolvedor sênior em produtos web.', 'Atuo conectando necessidade de negócio, arquitetura e execução. No dia a dia, participo de system design, planejamento, refinamento, code review, mentoria, 1:1s e resolução de incidentes.'],
      impact: [{ value: '10+', label: 'desenvolvedores em liderança técnica' }, { value: '~40', label: 'clientes atendidos por produto SaaS multi-tenant' }]
    },
    education: { eyebrow: 'Formação e certificação', title: 'Base técnica', credentialLabel: 'Ver credencial', items: [
      { period: '2020 — 2021', institution: 'ETEC Jahu', title: 'Técnico em Desenvolvimento de Sistemas', description: 'Início da formação técnica e dos primeiros projetos de software.' },
      { period: '2021 — 2023', institution: 'FATEC Jahu', title: 'Sistemas para Internet', description: 'Formação superior. TCC: sistema de gestão financeira com .NET/C#, Blazor e REST API.' },
      { period: '2023', institution: 'Microsoft', title: 'Microsoft Certified: Azure Fundamentals (AZ-900)', description: 'Certificação em fundamentos de serviços em nuvem Azure.', credentialUrl: 'https://www.credly.com/badges/99784108-8d97-4665-8639-d1b6d3ac797e' }
    ] },
    path: {
      eyebrow: 'Experiência profissional', title: 'Trajetória', description: 'Experiências em produtos SaaS, integrações e arquitetura de sistemas.',
      items: [
        { period: '07.2025 — atual', company: 'Podtech', role: 'Tech Lead', text: 'Tech Lead responsável por um time de mais de 10 desenvolvedores, da conversa com o cliente à entrega. Traduz objetivos de negócio em escopo técnico, direciona prioridades e decisões de arquitetura, desenvolve o time por meio de mentoria, 1:1s e code review — sem abrir mão da atuação hands-on.' },
        { period: '01.2025 — 07.2025', company: 'STi3 Sistemas', role: 'Backend Developer', text: 'Estruturou a comunicação assíncrona entre serviços e dispositivos, com rotinas recorrentes, reprocessamento e rastreabilidade de tarefas. Também apoiou um produto multi-tenant com múltiplas bases de dados e atualizações em massa.' },
        { period: '10.2021 — 12.2024', company: 'OnFriday Technologies', role: 'Estagiário → Desenvolvedor Sênior', text: 'Evoluiu de estagiário a sênior entregando produtos que conectavam operação e cliente: notificações e chats em tempo real, plataforma de venda de ingressos, agendamento automatizado com IA, integrações de pagamento e dashboards white label internacionalizados.' }
      ]
    },
    skills: { eyebrow: 'Competências', title: 'Principais áreas de atuação', groups: [
      { label: 'Backend', items: ['.NET / C#', 'Node.js', 'SQL Server', 'PostgreSQL', 'REST APIs'] },
      { label: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'shadcn/ui', 'Tailwind CSS'] },
      { label: 'Arquitetura & plataforma', items: ['Clean Architecture', 'FSD', 'Azure', 'Docker', 'Kubernetes', 'CI/CD · Jenkins'] },
      { label: 'Liderança & IA', items: ['Mentoria', '1:1s', 'Code Review', 'AI-assisted engineering', 'Claude', 'Codex', 'MCP'] }
    ] },
    softSkills: { eyebrow: 'Pessoas e colaboração', title: 'Competências comportamentais', groups: [
      { label: 'Comunicação', items: ['Alinhamento com clientes', 'Tradução de demandas', 'Especificação técnica'] },
      { label: 'Desenvolvimento de pessoas', items: ['Mentoria', '1:1s', 'Feedback contínuo'] },
      { label: 'Decisão e execução', items: ['Priorização', 'Planejamento técnico', 'Gestão de incidentes'] },
      { label: 'Visão sistêmica', items: ['Pensamento crítico', 'Resolução de problemas', 'Gestão de conflitos'] }
    ] },
    leadership: { eyebrow: 'Liderança técnica', title: 'O que faço como Tech Lead', intro: 'Conecto contexto de negócio, direção técnica e desenvolvimento do time para tornar entregas mais claras e sustentáveis.', areas: [{ label: 'Negócio & produto', text: 'Alinho expectativas com clientes e traduzo demandas em escopo técnico viável.' }, { label: 'Arquitetura & entrega', text: 'Direciono prioridades, decisões técnicas e a execução das entregas.' }, { label: 'Pessoas & qualidade', text: 'Desenvolvo autonomia com mentoria, 1:1s, feedback e code review.' }] },
    contact: { eyebrow: 'Contato', title: 'Aberto a oportunidades em tecnologia, impacto e crescimento.', accent: '' }, footer: 'Portfólio profissional.'
  },
  'en-US': {
    meta: { title: 'Gabriel Henrique Grassi · Tech Lead', description: 'Tech Lead with experience in architecture, .NET, React, Azure, and technical leadership.' },
    nav: { home: 'Home', navigation: 'Main navigation', language: 'Language', openMenu: 'Open menu', closeMenu: 'Close menu', about: 'Profile', education: 'Education', path: 'Experience', skills: 'Skills', contact: 'Contact', linkedin: 'LinkedIn' },
    actions: { backToTop: 'Back to top' },
    hero: {
      availability: 'Tech Lead · Software Engineer', title: 'Gabriel Henrique Grassi', accent: 'Tech Lead', tail: '6 years in technology · working professionally since 2021',
      summary: 'Hands-on technical leadership, software architecture, and web products with .NET, React, TypeScript, and Azure.', cue: 'VIEW EXPERIENCE'
    },
    about: {
      eyebrow: 'Professional profile', title: 'Technical experience focused on product and people.',
      lead: 'Hands-on Tech Lead with experience in software engineering, architecture, and technical leadership.',
      paragraphs: ['I started building projects in 2020 while attending technical school. In 2021, I began my professional journey at OnFriday, progressing from intern to senior developer on web products.', 'I connect business needs, architecture, and execution. My day-to-day includes system design, planning, refinement, code review, mentoring, 1:1s, and incident response.'],
      impact: [{ value: '10+', label: 'developers under technical leadership' }, { value: '~40', label: 'clients served through a multi-tenant SaaS product' }]
    },
    education: { eyebrow: 'Education & certification', title: 'Technical foundation', credentialLabel: 'View credential', items: [
      { period: '2020 — 2021', institution: 'ETEC Jahu', title: 'Technical Degree in Systems Development', description: 'Beginning of technical education and first software projects.' },
      { period: '2021 — 2023', institution: 'FATEC Jahu', title: 'Internet Systems', description: 'Higher education. Capstone project: a financial management system with .NET/C#, Blazor, and REST API.' },
      { period: '2023', institution: 'Microsoft', title: 'Microsoft Certified: Azure Fundamentals (AZ-900)', description: 'Certification in Azure cloud services fundamentals.', credentialUrl: 'https://www.credly.com/badges/99784108-8d97-4665-8639-d1b6d3ac797e' }
    ] },
    path: {
      eyebrow: 'Professional experience', title: 'Career path', description: 'Experience in SaaS products, integrations, and software architecture.',
      items: [
        { period: '07.2025 — present', company: 'Podtech', role: 'Tech Lead', text: 'Tech Lead responsible for a team of more than 10 developers, from customer conversations to delivery. Turns business goals into technical scope, guides priorities and architecture decisions, and develops the team through mentoring, 1:1s, and code review — while remaining hands-on.' },
        { period: '01.2025 — 07.2025', company: 'STi3 Sistemas', role: 'Backend Developer', text: 'Structured asynchronous communication between services and devices, with recurring routines, task reprocessing, and traceability. Also supported a multi-tenant product with multiple databases and bulk updates.' },
        { period: '10.2021 — 12.2024', company: 'OnFriday Technologies', role: 'Intern → Senior Developer', text: 'Progressed from intern to senior developer while delivering products that connected operations and customers: real-time notifications and chat, a ticketing platform, AI-powered appointment scheduling, payment integrations, and internationalized white-label dashboards.' }
      ]
    },
    skills: { eyebrow: 'Skills', title: 'Primary areas of expertise', groups: [
      { label: 'Backend', items: ['.NET / C#', 'Node.js', 'SQL Server', 'PostgreSQL', 'REST APIs'] },
      { label: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'shadcn/ui', 'Tailwind CSS'] },
      { label: 'Architecture & platform', items: ['Clean Architecture', 'FSD', 'Azure', 'Docker', 'Kubernetes', 'CI/CD · Jenkins'] },
      { label: 'Leadership & AI', items: ['Mentoring', '1:1s', 'Code Review', 'AI-assisted engineering', 'Claude', 'Codex', 'MCP'] }
    ] },
    softSkills: { eyebrow: 'People & collaboration', title: 'Behavioral strengths', groups: [
      { label: 'Communication', items: ['Customer alignment', 'Requirements translation', 'Technical specification'] },
      { label: 'People development', items: ['Mentoring', '1:1s', 'Continuous feedback'] },
      { label: 'Decision & execution', items: ['Prioritization', 'Technical planning', 'Incident management'] },
      { label: 'Systems thinking', items: ['Critical thinking', 'Problem solving', 'Conflict management'] }
    ] },
    leadership: { eyebrow: 'Technical leadership', title: 'What I do as a Tech Lead', intro: 'I connect business context, technical direction, and team development to make delivery clearer and more sustainable.', areas: [{ label: 'Business & product', text: 'I align expectations with customers and turn requirements into viable technical scope.' }, { label: 'Architecture & delivery', text: 'I guide priorities, technical decisions, and delivery execution.' }, { label: 'People & quality', text: 'I develop autonomy through mentoring, 1:1s, feedback, and code review.' }] },
    contact: { eyebrow: 'Contact', title: 'Open to opportunities in technology, impact, and growth.', accent: '' }, footer: 'Professional portfolio.'
  }
}
