import type { Copy, Locale } from './types'

export const messages: Record<Locale, Copy> = {
  'pt-BR': {
    meta: { title: 'Gabriel Henrique Grassi · Tech Lead', description: 'Tech Lead com experiência em arquitetura, .NET, React, Azure e liderança técnica.' },
    nav: { home: 'Início', navigation: 'Navegação principal', language: 'Idioma', openMenu: 'Abrir menu', closeMenu: 'Fechar menu', about: 'Perfil', education: 'Formação', path: 'Experiência', skills: 'Competências', contact: 'Contato', linkedin: 'LinkedIn' },
    actions: { backToTop: 'Voltar ao topo' },
    hero: {
      availability: 'Tech Lead · Software Engineer', title: 'Gabriel Henrique Grassi', accent: 'Tech Lead', tail: '6 anos em tecnologia · profissional desde 2021',
      summary: 'Liderança técnica hands-on, arquitetura de software e produtos web com .NET, React, TypeScript e Azure.',
      downloadResume: 'Currículo (PDF)', downloadResumeAriaLabel: 'Baixar currículo em PDF', cue: 'VER EXPERIÊNCIA'
    },
    about: {
      eyebrow: 'Perfil profissional', title: 'Experiência técnica com foco em produto e pessoas.',
      lead: 'Tech Lead hands-on com experiência em engenharia de software, arquitetura e liderança técnica.',
      paragraphs: ['Comecei a construir projetos em 2020, durante o curso técnico. Em 2021 iniciei minha carreira na OnFriday, onde evoluí de estagiário a desenvolvedor sênior em produtos web.', 'Atuo conectando necessidade de negócio, arquitetura e execução. No dia a dia, participo de system design, planejamento, refinamento, code review, mentoria, 1:1s e resolução de incidentes.'],
      impact: [{ value: '10+', label: 'desenvolvedores em liderança técnica' }, { value: '~40', label: 'clientes atendidos por produto SaaS multi-tenant' }]
    },
    education: { eyebrow: 'Formação e certificação', title: 'Base técnica', credentialLabel: 'Ver credencial', items: [
      { period: '2023', institution: 'Microsoft', title: 'Microsoft Certified: Azure Fundamentals (AZ-900)', description: 'Certificação em fundamentos de serviços em nuvem Azure.', credentialUrl: 'https://www.credly.com/badges/99784108-8d97-4665-8639-d1b6d3ac797e' },
      { period: '2021 — 2023', institution: 'FATEC Jahu', title: 'Sistemas para Internet', description: 'Formação superior. TCC: sistema de gestão financeira com .NET/C#, Blazor e REST API.' },
      { period: '2020 — 2021', institution: 'ETEC Jahu', title: 'Técnico em Desenvolvimento de Sistemas', description: 'Início da formação técnica e dos primeiros projetos de software.' }
    ] },
    path: {
      eyebrow: 'Experiência profissional', title: 'Trajetória', description: 'Experiências em produtos SaaS, integrações e arquitetura de sistemas.',
      caseStudyLabel: 'Ver estudo de caso', contextLabel: 'Contexto', approachLabel: 'Abordagem', impactLabel: 'Impacto',
      items: [
        { period: '07.2025 — atual', company: 'Podtech', role: 'Tech Lead', text: 'Lidera tecnicamente um time de 10+ desenvolvedores, conduzindo arquitetura, priorização e execução de projetos, do alinhamento com clientes à produção. Contribuiu para elevar a capacidade média de entrega de 2 para 4-5 funcionalidades por sprint por meio de mentoria no uso de IA. Traduz objetivos de negócio em escopo técnico e desenvolve o time com 1:1s e code review, mantendo atuação hands-on.', caseStudies: [
          { title: 'Capacidade de entrega do time', context: 'Time com mais de 10 desenvolvedores e necessidade de ampliar a capacidade média de entrega.', approach: 'Mentoria no uso de IA como ferramenta de apoio ao desenvolvimento, combinada com priorização, refinamento e code review.', impact: 'A capacidade média de entrega passou de 2 para 4–5 funcionalidades por sprint.' },
          { title: 'Antecipação de evolução do produto', context: 'A demanda inicial previa a criação pontual de um novo perfil na plataforma, tratada como uma necessidade isolada.', approach: 'Ao identificar possibilidade de expansão, estruturou o controle de acesso baseado em papéis (RBAC) e simplificou a gestão de perfis em um painel administrativo.', impact: 'Quando um novo perfil foi solicitado na semana seguinte, ele pôde ser criado por configuração, sem alterações em código ou duplicação de regras.' },
          { title: 'Redução de retrabalho por refinamento', context: 'Demandas com definição inicial ainda podiam gerar dúvidas e mudanças tardias durante a execução.', approach: 'Aprofundou o refinamento técnico e o alinhamento com clientes para explicitar escopo, regras e dependências antes do desenvolvimento.', impact: 'Reduziu retrabalho ao antecipar ajustes de escopo e alinhar as decisões antes da implementação.' }
        ] },
        { period: '01.2025 — 07.2025', company: 'STi3 Sistemas', role: 'Backend Developer', text: 'Estruturou a comunicação assíncrona entre serviços e dispositivos, com rotinas recorrentes, reprocessamento e rastreabilidade de tarefas. Otimizou a performance de consultas e do processamento em massa em ambiente multi-tenant com múltiplas bases de dados.', caseStudies: [
          { title: 'Comunicação assíncrona entre API e mobile', context: 'Serviços e dispositivos precisavam trocar informações de forma confiável e rastreável.', approach: 'Estruturou a comunicação assíncrona entre API e mobile, incluindo rotinas recorrentes e reprocessamento de tarefas.', impact: 'Criou fluxos com rastreabilidade e capacidade de reprocessamento para a comunicação entre serviços e dispositivos.' },
          { title: 'Processamento em massa com batches', context: 'Relatórios baseados em consultas pesadas precisavam ser processados em múltiplas bases de dados.', approach: 'Aplicou processamento em batches para executar as consultas e gerar os relatórios em ambiente multi-tenant.', impact: 'Melhorou a performance e a previsibilidade do processamento em massa de relatórios.' }
        ] },
        { period: '10.2021 — 12.2024', company: 'OnFriday Technologies', role: 'Estagiário → Desenvolvedor Sênior', text: 'Evoluiu de estagiário a desenvolvedor sênior, iniciando no frontend e ampliando a atuação para backend, integrações e comunicação direta com clientes e stakeholders. Desenvolveu notificações e chats em tempo real para atendimento jurídico, levantou requisitos para uma plataforma de ingressos e implementou integrações de pagamento, agendamento com IA e dashboards white label para plataformas BaaS.', caseStudies: [
          { title: 'Evolução para desenvolvimento full stack', context: 'Iniciou a carreira como estagiário em frontend, em um ambiente com desafios técnicos e contato com diferentes áreas.', approach: 'Ampliou gradualmente a atuação para backend e comunicação com clientes e stakeholders.', impact: 'Expandiu a atuação técnica para além do frontend e fortaleceu a comunicação com clientes e stakeholders.' },
          { title: 'Atendimento jurídico em tempo real', context: 'O conhecimento em WebSockets abriu espaço para a criação de um novo projeto de atendimento jurídico.', approach: 'Desenvolveu notificações e chat em tempo real para conectar os fluxos de atendimento.', impact: 'Viabilizou um novo produto com comunicação em tempo real como parte central da experiência.' },
          { title: 'Modelagem de plataforma de ingressos', context: 'Uma plataforma de tickets exigia modelagem de dados e tradução de demandas de negócio em decisões técnicas.', approach: 'Atuou na modelagem da plataforma, aprofundando conhecimento em backend, banco de dados e refinamento de requisitos.', impact: 'Contribuiu para estruturar uma solução técnica alinhada às necessidades do negócio.' },
          { title: 'Integrações e plataformas white label', context: 'Plataformas BaaS exigiam integração com serviços externos, automações e adaptação para diferentes clientes.', approach: 'Implementou integrações de pagamento, automações com IA, internacionalização e dashboards white label.', impact: 'Ampliou a capacidade de personalização e integração das plataformas para múltiplos contextos de cliente.' }
        ] }
      ]
    },
    skills: { eyebrow: 'Competências', title: 'Principais áreas de atuação', groups: [
      { label: 'Backend', items: ['.NET / C#', 'Node.js', 'SQL Server', 'PostgreSQL', 'REST APIs', 'Modelagem de dados', 'SaaS multi-tenant'] },
      { label: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'shadcn/ui', 'Tailwind CSS'] },
      { label: 'Arquitetura & plataforma', items: ['Clean Architecture', 'FSD', 'Microsserviços', 'Azure', 'Docker', 'Kubernetes', 'CI/CD · Jenkins', 'DevOps'] },
      { label: 'Qualidade & produto', items: ['Testes automatizados', 'UX Analytics', 'CRO', 'Microsoft Clarity'] },
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
      summary: 'Hands-on technical leadership, software architecture, and web products with .NET, React, TypeScript, and Azure.',
      downloadResume: 'Resume (PDF)', downloadResumeAriaLabel: 'Download resume as PDF', cue: 'VIEW EXPERIENCE'
    },
    about: {
      eyebrow: 'Professional profile', title: 'Technical experience focused on product and people.',
      lead: 'Hands-on Tech Lead with experience in software engineering, architecture, and technical leadership.',
      paragraphs: ['I started building projects in 2020 while attending technical school. In 2021, I began my professional journey at OnFriday, progressing from intern to senior developer on web products.', 'I connect business needs, architecture, and execution. My day-to-day includes system design, planning, refinement, code review, mentoring, 1:1s, and incident response.'],
      impact: [{ value: '10+', label: 'developers under technical leadership' }, { value: '~40', label: 'clients served through a multi-tenant SaaS product' }]
    },
    education: { eyebrow: 'Education & certification', title: 'Technical foundation', credentialLabel: 'View credential', items: [
      { period: '2023', institution: 'Microsoft', title: 'Microsoft Certified: Azure Fundamentals (AZ-900)', description: 'Certification in Azure cloud services fundamentals.', credentialUrl: 'https://www.credly.com/badges/99784108-8d97-4665-8639-d1b6d3ac797e' },
      { period: '2021 — 2023', institution: 'FATEC Jahu', title: 'Internet Systems', description: 'Higher education. Capstone project: a financial management system with .NET/C#, Blazor, and REST API.' },
      { period: '2020 — 2021', institution: 'ETEC Jahu', title: 'Technical Degree in Systems Development', description: 'Beginning of technical education and first software projects.' }
    ] },
    path: {
      eyebrow: 'Professional experience', title: 'Career path', description: 'Experience in SaaS products, integrations, and software architecture.',
      caseStudyLabel: 'View case study', contextLabel: 'Context', approachLabel: 'Approach', impactLabel: 'Impact',
      items: [
        { period: '07.2025 — present', company: 'Podtech', role: 'Tech Lead', text: 'Provides technical leadership to a team of 10+ developers, guiding architecture, prioritization, and project execution from client alignment through production. Helped increase average delivery capacity from 2 to 4-5 features per sprint through mentorship on using AI as a development support tool. Translates business goals into technical scope and develops the team through 1:1s and code reviews while remaining hands-on.', caseStudies: [
          { title: 'Team delivery capacity', context: 'A team of more than 10 developers with a need to increase average delivery capacity.', approach: 'Mentorship on using AI as a development support tool, combined with prioritization, refinement, and code review.', impact: 'Average delivery capacity grew from 2 to 4–5 features per sprint.' },
          { title: 'Anticipating product evolution', context: 'The initial request was for a single new platform role, treated as an isolated need.', approach: 'After identifying likely expansion, structured role-based access control (RBAC) and simplified role management through an administrative panel.', impact: 'When another role was requested the following week, it could be created through configuration, without code changes or duplicated rules.' },
          { title: 'Reducing rework through refinement', context: 'Requests with an initial definition could still lead to open questions and late changes during execution.', approach: 'Deepened technical refinement and client alignment to clarify scope, rules, and dependencies before development.', impact: 'Reduced rework by anticipating scope adjustments and aligning decisions before implementation.' }
        ] },
        { period: '01.2025 — 07.2025', company: 'STi3 Sistemas', role: 'Backend Developer', text: 'Designed asynchronous communication between services and devices, including recurring jobs, task reprocessing, and traceability. Optimized database query performance and bulk processing in a multi-tenant environment with multiple databases.', caseStudies: [
          { title: 'Asynchronous communication between API and mobile', context: 'Services and devices needed to exchange information reliably with traceability.', approach: 'Designed asynchronous communication between API and mobile, including recurring jobs and task reprocessing.', impact: 'Created traceable, reprocessable flows for communication between services and devices.' },
          { title: 'Batch-based bulk processing', context: 'Reports based on heavy queries needed to run across multiple databases.', approach: 'Applied batch processing to execute queries and generate reports in a multi-tenant environment.', impact: 'Improved the performance and predictability of bulk report processing.' }
        ] },
        { period: '10.2021 — 12.2024', company: 'OnFriday Technologies', role: 'Intern → Senior Developer', text: 'Progressed from intern to senior developer, beginning in frontend development and expanding into backend, integrations, and direct communication with clients and stakeholders. Built real-time notifications and chat for a legal services platform, gathered requirements for a ticketing platform, and implemented payment integrations, AI-powered scheduling, and internationalized white-label dashboards for BaaS platforms.', caseStudies: [
          { title: 'Progression into full-stack development', context: 'Started as a frontend intern in an environment with technical challenges and close collaboration across different areas.', approach: 'Gradually expanded into backend work and communication with clients and stakeholders.', impact: 'Expanded technical scope beyond frontend development and strengthened communication with clients and stakeholders.' },
          { title: 'Real-time legal services support', context: 'WebSocket expertise opened the opportunity to build a new project for legal services support.', approach: 'Built real-time notifications and chat to connect service workflows.', impact: 'Enabled a new product with real-time communication at the core of the experience.' },
          { title: 'Ticketing platform data modeling', context: 'A ticketing platform required data modeling and the translation of business needs into technical decisions.', approach: 'Contributed to platform modeling while deepening backend, database, and requirements refinement skills.', impact: 'Helped structure a technical solution aligned with business needs.' },
          { title: 'Integrations and white-label platforms', context: 'BaaS platforms required external-service integrations, automation, and adaptation for different clients.', approach: 'Implemented payment integrations, AI automations, internationalization, and white-label dashboards.', impact: 'Expanded platform customization and integration capabilities across multiple client contexts.' }
        ] }
      ]
    },
    skills: { eyebrow: 'Skills', title: 'Primary areas of expertise', groups: [
      { label: 'Backend', items: ['.NET / C#', 'Node.js', 'SQL Server', 'PostgreSQL', 'REST APIs', 'Data modeling', 'Multi-tenant SaaS'] },
      { label: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'shadcn/ui', 'Tailwind CSS'] },
      { label: 'Architecture & platform', items: ['Clean Architecture', 'FSD', 'Microservices', 'Azure', 'Docker', 'Kubernetes', 'CI/CD · Jenkins', 'DevOps'] },
      { label: 'Quality & product', items: ['Automated testing', 'UX analytics', 'CRO', 'Microsoft Clarity'] },
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
