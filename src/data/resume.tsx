import { Icons } from '@/components/icons'
import { HomeIcon, NotebookIcon } from 'lucide-react'

export const DATA = {
  name: 'Noah Joeris',
  initials: 'NJ',
  url: 'https://noahjoeris.com',
  location: 'Sofia, Bulgaria',
  locationLink: '',
  role: 'Fullstack Blockchain Engineer',
  nameLogoUrl: '/signature.png',

  companyLogoUrl: '/polkadot.svg',
  companyLogoUrlDark: '/polkadot-white.svg',

  summary:
    "Hey, I’m Noah, a freelance software engineer specializing in React and Rust within the Polkadot ecosystem. I’m driven by the vision of building the future of Web3, and I currently work at Velocity Labs, where I’ve been developing 'Turtle' - a universal bridge app for Polkadot, addressing fragmented UX and DevEx of the ecosystem.\n\n\
  I’ve been deeply involved in the crypto space since 2021, exploring different blockchains, hardware wallets, and dApps. After graduating from the Polkadot Blockchain Academy in early 2024, where I was mentored by core Polkadot developers, I became convinced that Polkadot embodies the Web3 values I stand by: resilience, decentralization, governance, and scalability.\n\n\
  I’m on a mission to contribute to this decentralized web, with less trust and more truth. A web free from big tech gatekeeping, with a financial layer that ensures equal access for everyone - protecting human freedom at its core.\n\n\
  Before joining the Polkadot ecosystem, I spent nearly 5 years at Airbus, where I contributed to projects in cybersecurity, cloud computing, and blockchain. I engineered software solutions, particularly in React, and helped innovate across several departments.\n\n\
  Outside of work, I’m dedicated to calisthenics, cold plunges, and biohacking, constantly exploring ways to improve myself. I also study Stoic philosophy, which fuels my approach to life and work. I'm always happy to connect with new people - so feel free to reach out!",
  avatarUrl: '/me.jpg',
  skills: [
    'Blockchain',
    'Polkadot',
    'Substrate',
    'Cryptography',
    'Solidity',
    'Rust',
    'Typescript',
    'Python',
    'React',
    'Next.js',
    'Docker',
    'AWS',
  ],
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
      title: 'Fullstack Blockchain Engineer - Contractor - Remote',
      logoUrl: 'velocity-logo.png',
      start: 'May 2024',
      end: 'Present',
      description:
        '- Delivering high-quality services to the Web3 Foundation \n - Driving UX and Developer Experience improvements across the Polkadot ecosystem\n- Engineering a universal Polkadot bridge application, including SDKs and a user-friendly UI widget, to enhance interoperability and ease of use',
    },
    {
      company: 'Airbus Defence and Space',
      href: '',
      badges: [],
      location: 'Remote',
      title: 'Software Engineer - Full Time - Munich, Germany',
      logoUrl: 'ads.jpeg',
      start: 'Apr 2023',
      end: 'Apr 2024',
      description:
        "- Spearheaded the design and development of Airbus's internal knowledge-sharing platform for innovative projects, enhancing collaboration among experts, managers, and project creators \n - Built PoCs and MVPs leveraging innovative fields such as blockchain, cloud, cryptography to drive digital transformation within the company\n- Delivered a blockchain-based PoC to Airbus Finance, improving data tamper-resistance and securing invoice interactions",
    },
    {
      company: 'Airbus CyberSecurity',
      href: '',
      badges: [],
      location: 'Remote',
      title: 'Working Student - Part Time - Munich, Germany',
      logoUrl: 'airbus-cyber.webp',
      start: 'Sep 2019',
      end: 'Mar 2023',
      description:
        "- Accumulated years of cross-functional experience across diverse departments \n - Proposed a new log management system leveraging permissioned blockchain technology for enhanced security \n - Designed a software architecture that automatically tests attack detection systems of Airbus' Security Operations Center \n- Engineered a critical cloud microservice infrastructure using Kubernetes containing different security zones with controlled data flows and deployments. It was a PoC for the German Bundeswehr.",
    },
  ],
  education: [
    {
      school: 'Polkadot Blockchain Academy',
      degree: 'Top 10 Graduate - Hong Kong',
      logoUrl: 'pba.jpeg',
      start: 'Jan 2024',
      end: 'Feb 2024',
      description:
        '- Intense blockchain bootcamp sponsored by the Polkadot DAO creating new world class engineers for the ecosystem \n - 270 hours of classes and exams about cryptography, blockchains, Substrate and Rust programming',
    },
    {
      school: 'Darmstadt University of Applied Sciences',
      degree:
        'Bachelor in Computer Science/Cyber Security - Grade 1.6 (German GPA) - Darmstadt, Germany',
      logoUrl: 'hda.png',
      start: 'Oct 2019',
      end: 'Mar 2023',
      description:
        '- Wrote my bachelor thesis about a security evaluation of blockchain-based audit log storage. \n - Wrote 2 research papers called: "How to Make Public Blockchains Scale" and "How Clean Code Improves the Quality of Software"',
    },
    {
      school: 'AJC BK (High School in Computer Science)',
      degree: 'Abitur - Grade 1.9 (German GPA) - Ratingen, Germany',
      logoUrl: 'ajc.jpg',
      start: 'Jul 2016',
      end: 'Jul 2019',
      description:
        '- This high school, focused on computer science and mathematics, prepared me for university early on\n- We had intense programming classes in Java, C#, and C\n- Other subjects included: Discrete Mathematics, Electrical Engineering, Networking, Database Systems and Microcontroller Programming',
    },
  ],
  projects: [
    {
      title: 'Turtle',
      href: 'https://app.turtle.cool',
      client: 'Velocity Labs',
      dates: 'May 2024 - Present',
      active: true,
      description:
        'Turtle is a universal token transfer application for the Polkadot ecosystem, supporting transfers between Ethereum and Polkadot, as well as XCM transfers between parachains. Soon, Turtle will be available as a widget for easy integration into any dApp. Additionally, a Turtle SDK will be launched to further streamline the bridging experience and reduce fragmentation across the ecosystem.',
      technologies: [
        'Typescript',
        'React',
        'Next.js',
        'TailwindCSS',
        'Shadcn UI',
        'Polkadot',
        'XCM',
        'Snowbridge',
      ],
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
      image: '/turtle-screenshot.webp',
      video: '',
    },

    {
      title: 'Lastic Coretime Marketplace',
      href: 'https://www.lastic.xyz/kusama/my-cores',
      client: 'Lastic',
      dates: 'Feb 2024 - Jul 2024',
      active: false,
      description:
        'I supported the Lastic team in building the first Polkadot coretime marketplace. This included implementing core interlacing, which allows users to adjust their coretime usage frequency and sell unused time as NFTs. I also developed core partitioning, enabling the division of a coretime NFT into smaller portions for resale. Additionally, I deployed a Solidity-based crowdfunding contract on Moonbeam, allowing multiple parties to jointly purchase coretime. Finally, I worked on a proof-of-concept for a multisignature coretime marketplace, enabling secure coretime trading via a 2/3 multisig wallet with Lastic as a trusted third party.',
      technologies: [
        'Typescript',
        'React',
        'Next.js',
        'TailwindCSS',
        'Polkadot',
        'XCM',
        'Solidity',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://www.lastic.xyz',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'App',
          href: 'https://www.lastic.xyz/kusama/my-cores',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/LasticXYZ/LasticUI',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/lastic.webp',
      video: '',
    },

    {
      title: 'Innovation Hub',
      href: '',
      client: 'Airbus Defence and Space',
      dates: 'Apr 2023 - Apr 2024',
      active: false,
      description:
        'I designed and developed an internal knowledge-sharing platform at Airbus, facilitating collaboration between experts, managers, and project initiators across innovative projects. The platform enabled project creation, robust search capabilities, expert and location discovery for specialized topics, and an integrated Q&A system to connect users with relevant experts. This solution improved cross-functional communication, accelerated innovation, and fostered a more efficient exchange of knowledge across departments.',
      technologies: ['Typescript', 'React', 'Next.js', 'MUI', 'AWS'],
      links: [
        {
          type: 'Closed Source',
          href: '',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/innovationhub-screenshot.webp',
      video: '',
    },
  ],
} as const
