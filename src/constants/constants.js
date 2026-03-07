// ─── Personal Info ──────────────────────────────────────────────────────────

export const personalInfo = {
  name: 'Caique Junior Da Silva',
  title: 'Full Stack Developer',
  tagline: 'Java · React · Node.js · Flutter',
  summary:
    'Desenvolvedor Full Stack com sólida formação em Sistemas de Informação e expertise em Java/SpringBoot, React, TypeScript e Flutter. Experiência comprovada no desenvolvimento de aplicações web, mobile e backend, utilizando tecnologias modernas e metodologias ágeis. Histórico de sucesso na criação de sistemas robustos e escaláveis, com atuação em projetos corporativos de grande porte.',
  contact: {
    phone: '(35) 9 9132-6253',
    email: 'kaikejrsilva55@gmail.com',
    linkedin: 'https://www.linkedin.com/in/caiquejuniordasilva/',
    github: 'https://github.com/Caique1030',
  },
};

// ─── Professional Experience ─────────────────────────────────────────────────

export const experiences = [
  {
    id: 1,
    role: 'Analista de Sistemas',
    company: 'Lógica Distribuição',
    period: 'Set 2025 – Presente',
    current: true,
    highlights: [
      'Administração completa de sistema ERP para gestão de 2 unidades de Centro de Distribuição',
      'Gerenciamento de infraestrutura tecnológica, incluindo redes, servidores e equipamentos',
      'Criação e documentação de fluxos de serviços, elaboração de manuais e treinamentos',
      'Gestão de ativos tecnológicos e resolução de problemas técnicos críticos',
    ],
    tech: ['ERP', 'SQL Server', 'Redes', 'Infraestrutura'],
  },
  {
    id: 2,
    role: 'Desenvolvedor Full Stack PJ',
    company: 'R&M Consultoria e Projetos',
    period: 'Ago 2024 – Presente',
    current: true,
    project: 'Sistema Proseia',
    highlights: [
      'Desenvolvimento de plataforma de chat corporativo para reuniões empresariais',
      'Frontend com React/TypeScript e Styled Components; Mobile com Flutter/Dart para Android',
      'APIs REST com Next.js e Nest.js; chat em tempo real com Socket.io',
      'Integração com MongoDB e MariaDB; metodologia Scrum',
    ],
    tech: ['React', 'TypeScript', 'Flutter', 'Next.js', 'Nest.js', 'Socket.io', 'MongoDB', 'MariaDB'],
  },
  {
    id: 3,
    role: 'Estagiário em Desenvolvimento de Software',
    company: 'Manga Tecnologia',
    period: 'Mai 2024 – Set 2024',
    project: 'Sistema Posto Pro',
    highlights: [
      'Desenvolvimento fullstack de sistema de gestão para postos de combustível',
      'Aplicações web com VB.NET e JavaScript; mobile com Xamarin e Kotlin para Android',
      'Modelagem e manutenção de banco de dados SQL Server',
    ],
    tech: ['VB.NET', 'JavaScript', 'Xamarin', 'Kotlin', 'SQL Server'],
  },
  {
    id: 4,
    role: 'Analista de Desenvolvimento',
    company: 'Vivver Sistemas',
    period: 'Ago 2022 – Ago 2023',
    highlights: [
      'Implantação do sistema Vivver nas unidades de saúde da região sul de Minas Gerais',
      'Criação de relatórios em Business Intelligence (BI) para tomada de decisões estratégicas',
      'Suporte técnico especializado e treinamento de usuários finais',
    ],
    tech: ['Business Intelligence', 'Suporte Técnico', 'Sistemas de Saúde'],
  },
  {
    id: 5,
    role: 'Técnico Instalador/Reparador de Fibra Ótica',
    company: 'Via Rede TI / NetSpeed',
    period: 'Ago 2020 – Ago 2022 | Fev 2024 – Jul 2024',
    highlights: [
      'Instalação e reparo de fibra ótica com foco em qualidade do serviço e backbone',
      'Configuração de roteadores e ONUs; diagnóstico e resolução de problemas de conectividade',
    ],
    tech: ['Fibra Ótica', 'Redes', 'Roteadores'],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    title: 'Sistema Proseia',
    description:
      'Plataforma de chat corporativo para reuniões empresariais. Frontend em React/TypeScript, mobile em Flutter/Dart, APIs em Next.js e Nest.js com chat em tempo real via Socket.io.',
    image: '/images/sc.gif',
    tags: ['React', 'TypeScript', 'Flutter', 'Socket.io', 'Nest.js'],
    source: 'https://github.com/Caique1030',
    visit: 'https://github.com/Caique1030',
    type: 'professional',
  },
  {
    id: 2,
    title: 'API Clínica Médica',
    description:
      'API RESTful completa para gestão de consultas médicas. Cadastro de médicos, pacientes, agendamento e cancelamento com validações de negócio e cobertura de testes.',
    image: '/images/apiClinica.gif',
    tags: ['Java', 'Spring Boot', 'JUnit', 'PostgreSQL', 'JPA'],
    source: 'https://github.com/Caique1030/Api-Clinica-Medica',
    visit: 'https://github.com/Caique1030/Api-Clinica-Medica',
    type: 'personal',
  },
  {
    id: 3,
    title: 'ScreenMatch',
    description:
      'Aplicação full stack de catálogo de filmes integrando API Java/SpringBoot com OpenAI GPT para geração de sinopses automáticas.',
    image: '/images/videos.gif',
    tags: ['Java', 'Spring Boot', 'OpenAI', 'HTML5', 'PostgreSQL'],
    source: 'https://github.com/Caique1030/VideoScreen',
    visit: 'https://github.com/Caique1030/VideoScreen',
    type: 'personal',
  },
  {
    id: 4,
    title: 'Pixel Picture',
    description:
      'Editor de pixel art interativo com paleta de cores personalizada, usando manipulação de DOM em JavaScript puro sem frameworks.',
    image: '/images/pixart.gif',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'DOM API'],
    source: 'https://github.com/Caique1030/PixelArt',
    visit: 'https://pixel-art-seven.vercel.app/',
    type: 'personal',
  },
  {
    id: 5,
    title: 'Frases de Filmes',
    description:
      'Frontend React consumindo API Java/SpringBoot com frases icônicas de filmes, demonstrando integração full stack completa.',
    image: '/images/frases.gif',
    tags: ['React', 'Java', 'Spring Boot', 'CSS3'],
    source: 'https://github.com/Caique1030/Front-Videos',
    visit: 'https://github.com/Caique1030/Front-Videos',
    type: 'personal',
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skills = {
  frontend: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Vite', 'HTML5', 'CSS3', 'Styled Components'],
  backend: ['Java', 'Spring Boot', 'Node.js', 'Nest.js', 'Express', 'REST APIs'],
  mobile: ['Flutter', 'Dart', 'Kotlin', 'Xamarin'],
  database: ['MongoDB', 'MariaDB', 'SQL Server', 'MySQL', 'PostgreSQL'],
  others: ['Socket.io', 'Git', 'Scrum', 'VB.NET', 'Business Intelligence', 'ERP'],
};

// ─── Certifications ──────────────────────────────────────────────────────────

export const certifications = [
  { id: 1, title: 'Programação em Java com Orientação a Objetos', platform: 'Alura', area: 'backend' },
  { id: 2, title: 'Formação Java Web: Aplicações usando SpringBoot', platform: 'Alura', area: 'backend' },
  { id: 3, title: 'Integração de Aplicações Java com Banco de Dados', platform: 'Alura', area: 'backend' },
  { id: 4, title: 'JavaScript com Foco em Back-End', platform: 'Alura', area: 'backend' },
  { id: 5, title: 'APIs com Node.js e Express', platform: 'Alura', area: 'backend' },
  { id: 6, title: 'Autenticação, Testes e Segurança em Node.js', platform: 'Alura', area: 'backend' },
  { id: 7, title: 'Formação React com Vite', platform: 'Alura', area: 'frontend' },
  { id: 8, title: 'Formação Excel', platform: 'Alura', area: 'others' },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const education = {
  degree: 'Bacharelado em Sistemas de Informação',
  institution: 'Universidade Estadual de Minas Gerais (UEMG)',
  graduation: 'Dezembro 2024',
};

// ─── Legacy compat export ─────────────────────────────────────────────────────
export const TimeLineData = experiences.map((exp) => ({
  year: exp.period.split(' ')[0],
  text: `${exp.role} @ ${exp.company}`,
}));
