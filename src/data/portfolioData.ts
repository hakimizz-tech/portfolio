export type ExperienceItem = {
  meta: string
  title: string
  description: string[]
}

export type EducationItem = {
  meta: string
  title: string
  description: string[]
}

export type LanguageItem = {
  language: string
  level: string
}

export type SocialItem = {
  name: string
  href: string
}

export const personalInfo = {
  name: 'Joshua kimathi',
  displayName: ['JOSHUA', 'KIMATHI'],
  role: 'Software Engineer, based in Nairobi kenya',
  availability: 'open to work',
  timezone: '(UTC+3)',
  cvUrl: 'https://x.com/ten__tm',
  contactUrl: '#contact',
}

export const heroQuote = [
  '" Whether it\'s writing code or',
  'structuring a life, I aim for clarity,',
  'calm and long-term impact. I believe',
  'good systems are built with intent',
  'and consistency "',
]

export const aboutSummary =
  'I\'m a software engineer with experience building web apps, tools, and internal platforms. I care about clean code, clear interfaces, and solving real problems with simple solutions. Currently based in Kenya available for freelance work or collaboration on thoughtful digital products.'

export const experiences: ExperienceItem[] = [
  {
    meta: 'Remote  •  2026-Present',
    title: 'Freelance Developer',
    description: [
      'Built custom dashboards, internal tools, and landing pages for startups in healthtech, fintech, and B2B SaaS.',
      'Worked end-to-end from wireframes to production.',
    ],
  },
  {
    meta: 'Soliton Telmec  •  Nairobi  •  2026',
    title: 'Network operation Engineer Intern',
    description: [
      'Started my tech career specializing in network operations and security, where I was responsible for maintaining robust network uptime and overall system health.',
      'I gained hands-on experience managing network devices and configuring Quality of Service (QoS) standards to optimize bandwidth and prioritize essential traffic.',
    ],
  },
]

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Networking',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Git',
  'CI/CD',
  'AWS',
  'System Design',
  'AI',
  'Technical Writing',
  'Code Reviews',
  'Performance Optimization',
  'Python',
  'Testing',
  'Debugging',
  'Remote Collaboration',
]

export const education: EducationItem[] = [
  {
    meta: 'KCNA  •  2025',
    title: 'Certificate Program: Kubernetes and Docker',
    description: [
      'Achieved the Kubernetes and Cloud Native Associate (KCNA) certification through a hands-on program focused on modern infrastructure.',
      'Gained practical experience containerizing applications with Docker and orchestrating them with Kubernetes (K8s), specifically scaling applications across multiple pods to ensure robust system reliability and scalability.',
    ],
  },
  {
    meta: 'Kabarak University  •  2022-2026',
    title: 'Bachelor\'s Degree: Computer Science',
    description: [
      'Leveraging core computer science principles in software engineering, algorithms, and system architecture.',
      'Possess a strong, working foundation in both theoretical and hands-on programming.',
    ],
  },
]

export const languages: LanguageItem[] = [
  {
    language: 'English',
    level: 'Highly proficient',
  },
  {
    language: 'Kiswahili',
    level: 'Native speaker',
  },
]

export const contact = {
  phoneLabel: 'Phone',
  phoneDisplay: '+2547 03131 620',
  phoneHref: 'tel:+254703131620',
  emailLabel: 'Email',
  emailDisplay: 'joshuakim408@gmail.com',
  emailHref: 'mailto:joshuakim408@gmail.com',
}

export const socials: SocialItem[] = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/',
  },
  {
    name: 'X',
    href: 'https://x.com/',
  },
]

export const thanksLines = ['THANKS', 'FOR BEING', 'HERE']

export const thanksSubline = ['Let\'s make', 'something', 'great']

export const credit = {
  authorLine: 'Made by hakeem (tm)',
  href: 'https://x.com/ten__tm',
}

export const avatarImage =
  'https://www.figma.com/api/mcp/asset/b95c014e-4cbc-4688-8442-c5768919b36b'