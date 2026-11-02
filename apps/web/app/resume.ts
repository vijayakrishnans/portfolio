// What the home page says, kept apart from how it looks. Edit this file to
// change the site's content; app/page.tsx only lays it out.

export type Link = { label: string; href: string }

export const profile = {
  headline: 'AI Solutions Engineer',
  focus: 'Generative AI, LLM fine-tuning, RAG, and product delivery',
  summary: [
    'Engineer and founder with 6+ years in software delivery and two years of hands-on generative AI work, now a founding platform engineer at Orunbase.',
    'I fine-tuned and deployed a production Malayalam LLM, built RAG and voice-agent prototypes, and packaged LLM components for reuse across client projects. I hold an MSc in IT Security, with a working focus on AI governance, data privacy and secure deployment.',
  ],
  links: [
    { label: 'Email', href: 'mailto:vijayakrishnankartha@gmail.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/atomicflee' },
    { label: 'GitHub', href: 'https://github.com/vijayakrishnans' },
    { label: 'Hugging Face', href: 'https://huggingface.co/spaces/Atomicflee/unni' },
  ] satisfies Link[],
}

export const projects: {
  name: string
  kind: string
  description: string
  tags: string[]
  link?: Link
}[] = [
  {
    name: 'Unni',
    kind: 'Malayalam/Manglish LLM',
    description:
      'A QLoRA fine-tune of Gemma 4 E4B: curated dataset, about 21 hours of training with measurable improvement on Manglish handling, and a live Gradio demo with a data-logging pipeline for monitoring and continuous improvement.',
    tags: ['QLoRA', 'Unsloth', 'Gemma 4', 'Gradio'],
    link: { label: 'Try the demo', href: 'https://huggingface.co/spaces/Atomicflee/unni' },
  },
  {
    name: 'Voice booking agent',
    kind: 'Prototype for a UK pub',
    description:
      'Whisper speech-to-text, a local LLM via Ollama, ChromaDB retrieval and edge-tts, served through FastAPI, with regulatory and governance requirements scoped before deployment.',
    tags: ['Whisper', 'Ollama', 'ChromaDB', 'FastAPI'],
  },
  {
    name: 'atomicflee.com',
    kind: 'Live creator platform',
    description:
      'Built and operated on React, Cloudflare Workers, D1, R2, Google OAuth and Stripe Connect, with UK GDPR export and erasure endpoints, consent recording and a copyright takedown workflow.',
    tags: ['React', 'Cloudflare Workers', 'Stripe Connect', 'UK GDPR'],
    link: { label: 'Visit the site', href: 'https://atomicflee.com' },
  },
  {
    name: 'Text-to-SQL analytics agent',
    kind: 'Agent demo',
    description:
      'A LangChain agent over a SQLite telecom schema with a Gradio UI, built to demonstrate agentic querying of structured data.',
    tags: ['LangChain', 'SQLite', 'Gradio'],
  },
  {
    name: 'Integratedscan',
    kind: 'MSc project',
    description:
      'A Python reconnaissance tool combining NVD CVE feeds with Exploit-DB to generate PDF vulnerability reports. 88% of test users identified vulnerabilities successfully.',
    tags: ['Python', 'NVD', 'Exploit-DB'],
  },
]

export const experience: {
  role: string
  company: string
  location: string
  period: string
  points: string[]
}[] = [
  {
    role: 'Forward Deployed Platform Engineer (Founding Team)',
    company: 'Orunbase (Sourceplane)',
    location: 'Remote / Kerala, India',
    period: 'Oct 2026 – Present',
    points: [
      'Founding engineer at an open-source developer platform (orun CLI) giving startups a Vercel-grade deployment baseline on any cloud.',
      'Quality testing across the platform and its baselines.',
      'Build baselines, the complete product repositories the platform rebuilds for its users.',
      'Build products for Open Product on Orunbase.',
      'Market research and marketing.',
    ],
  },
  {
    role: 'Founder and AI Engineer',
    company: 'ATOMICFLEE LTD',
    location: 'United Kingdom',
    period: 'Jun 2025 – Present',
    points: [
      'Run a UK AI automation and software company, owning discovery, solution design, build, deployment, cost/performance decisions and compliance for every engagement.',
      'Packaged recurring LLM work (fine-tuning, local serving, retrieval, agent loops) into reusable components shared across client prototypes.',
      'Delivered the production website for Aperion Materials (UAE deep-tech) on Azure Static Web Apps with GitHub Actions CI/CD, from client requirements to launch.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'SS&C Advent (DST Worldwide)',
    location: 'Pune, India',
    period: 'Sep 2019 – Aug 2022',
    points: [
      'Translated client and business requirements into technical designs, tested features and release plans for enterprise financial-services applications (C#, ASP.NET MVC, SQL Server).',
      'Worked with QA, support and business stakeholders on release validation, UAT, post-release checks and production support.',
      'Remediated injection and cryptography findings using OWASP-aligned practices, and delivered a custom Arabic PDF report-export feature.',
      'Took part in code reviews and mentored junior engineers.',
    ],
  },
  {
    role: 'Analyst, Software Development',
    company: 'Globacom LLC',
    location: 'Pune, India',
    period: 'Sep 2018 – Sep 2019',
    points: [
      'Converted support findings and business context into technical fixes for ASP.NET MVC and SQL Server applications, and supported test deployments, release validation and documentation.',
    ],
  },
  {
    role: 'Junior Embedded Software Engineer',
    company: 'Soften Technologies',
    location: 'Kerala, India',
    period: 'Nov 2017 – Apr 2018',
    points: [
      'Developed and tested embedded prototypes in C/C++ with Arduino and Verilog, including hardware/software integration and PCB design.',
    ],
  },
]

export const skills: { area: string; items: string[] }[] = [
  {
    area: 'Generative AI',
    items: [
      'LLM fine-tuning (QLoRA, Unsloth, Transformers)',
      'Prompt engineering',
      'RAG',
      'ChromaDB',
      'LLM evaluation and guardrails',
      'Agentic workflows (LangChain)',
      'Ollama',
      'Speech-to-text and text-to-speech',
    ],
  },
  {
    area: 'Data science and NLP',
    items: [
      'Python',
      'PyTorch',
      'Tokenisation',
      'Dataset curation',
      'Model monitoring',
      'SQL',
    ],
  },
  {
    area: 'Business analysis and delivery',
    items: [
      'Requirements elicitation',
      'User stories',
      'Gap and feasibility analysis',
      'Backlog prioritisation',
      'UAT coordination',
      'Release planning',
      'Agile/Scrum',
    ],
  },
  {
    area: 'AI governance and security',
    items: [
      'UK GDPR data handling',
      'Privacy-by-design',
      'OWASP secure coding',
      'Hosted inference cost and performance',
    ],
  },
  {
    area: 'Cloud and engineering',
    items: [
      'Microsoft Azure',
      'Google Cloud Console',
      'Cloudflare Workers/Pages',
      'Docker',
      'GitHub Actions',
      'C#/.NET',
      'React/TypeScript',
      'FastAPI',
      'Gradio',
    ],
  },
]

export const education: { title: string; detail: string; year: string }[] = [
  {
    title: 'MSc Information Technology Security (Merit)',
    detail: 'University of Central Lancashire, UK',
    year: '2024',
  },
  {
    title: 'ISC2 Certified in Cybersecurity (CC)',
    detail: 'ISC2',
    year: '2024',
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    detail: 'Google',
    year: '2021',
  },
  {
    title: 'BTech Electronics and Communication Engineering',
    detail: 'Mahatma Gandhi University, India',
    year: '2017',
  },
]
