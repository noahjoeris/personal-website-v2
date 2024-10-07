import { Icons } from '@/components/icons'
import { HomeIcon, NotebookIcon } from 'lucide-react'

export const DATA = {
  name: 'Noah Joeris',
  initials: 'NJ',
  url: 'https://noahjoeris.com',
  location: 'Sofia, Bulgaria',
  locationLink: '',
  role: 'Fullstack Blockchain Engineer',
  summary:
    "Hello, I'm Noah, a software magician at Velocity Labs, specializing in React and Rust. \
  I'm responsible for building amazing apps and tools that boost the adoption of the Polkadot ecosystem.\n\n\
  I graduated from the Polkadot Blockchain Academy 2024 in Hong Kong, where I formed valuable connections \
  in the web3 industry. Previously, I worked at Airbus Defence and Space for almost 5 years, contributing to \
  various departments, including cyber security, cloud, and blockchain projects. I engineered numerous software \
  applications there and developed extensively in React.\n\n\
  I hold a Bachelor in Computer Science and Cyber Security from Darmstadt University of Applied Sciences.\n\n\
  Besides, I really enjoy calisthenics, cold plunges, biohacking, reading, and occasionally gaming. \
  I'm always happy to connect with new people – just reach out.",
  avatarUrl: '/me.jpg',
  skills: ['React', 'Next.js', 'Typescript', 'Python', 'Docker'],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'hello@example.com',
    tel: '+123456789',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/noahjoeris',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/njoeris',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://twitter.com/noahjoeris',
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'Velocity Labs',
      href: 'https://velocitylabs.org',
      badges: [],
      location: 'Remote',
      title: 'Fullstack Blockchain Engineer',
      logoUrl: 'velocity-logo.png',
      start: 'May 2024',
      end: 'Present',
      description:
        'Delivering high-quality services to the Web3 Foundation. Driving UX and Developer Experience improvements across the Polkadot ecosystem. Engineering a universal Polkadot bridge application, including SDKs and a user-friendly UI widget, to enhance interoperability and ease of use',
    },
    {
      company: 'Airbus Defence and Space',
      href: '',
      badges: [],
      location: 'Remote',
      title: 'Software Engineer',
      logoUrl: 'ads.jpeg',
      start: 'Apr 2023',
      end: 'Apr 2024',
      description:
        "Spearheaded the design and development of Airbus's internal knowledge-sharing platform for innovative projects, enhancing collaboration among experts, managers, and project creators. Built PoCs and MVPs leveraging innovative fields such as blockchain, cloud, cryptography to drive digital transformation within the company. Delivered a blockchain-based PoC to Airbus Finance, improving data tamper-resistance and securing invoice interactions.",
    },
    {
      company: 'Airbus CyberSecurity',
      href: '',
      badges: [],
      location: 'Remote',
      title: 'Working Student',
      logoUrl: 'airbus-cyber.webp',
      start: 'Sep 2019',
      end: 'Mar 2023',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc.',
    },
  ],
  education: [
    {
      school: 'Polkadot Blockchain Academy',
      href: '',
      degree: 'Top 10 Graduate',
      logoUrl: 'pba.jpeg',
      start: 'Jan 2024',
      end: 'Feb 2024',
    },
    {
      school: 'Darmstadt University of Applied Sciences',
      href: '',
      degree: 'Bachelor of Science in Computer Science/Cyber Security',
      logoUrl: 'hda.png',
      start: 'Oct 2019',
      end: 'Mar 2023',
    },
    {
      school: 'AJC Gymnasium (High School specializing in Computer Science)',
      href: '',
      degree: 'Bachelor of Science in Computer Science/Cyber Security',
      logoUrl: 'ajc.jpg',
      start: 'Jul 2016',
      end: 'Jul 2019',
    },
  ],
  projects: [
    {
      title: 'Turtle',
      href: 'https://turtle.cool',
      dates: 'May 2024 - Present',
      active: true,
      description: 'Universal token transfer app for the Polkadot ecosystem.',
      technologies: ['Next.js', 'Typescript', 'React', 'TailwindCSS', 'Shadcn UI', 'Polkadot'],
      links: [
        {
          type: 'Website',
          href: 'https://turtle.cool',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'App',
          href: 'https://app.turtle.cool',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/velocitylabs-org/turtle',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: '',
    },
  ],
} as const
