import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Noah Joeris",
  initials: "NJ",
  url: "https://noahjoeris.com",
  location: "Sofia, Bulgaria",
  locationLink: "",
  description: "Fullstack blockchain engineer",
  summary:
    "Hello, I'm Noah, a software magician at Velocity Labs, specializing in React and Rust. I'm responsible for building amazing apps and tools that boost the adoption of the Polkadot ecosystem. I also graduated from the Polkadot Blockchain Academy 2024 in Hong Kong, where I formed valuable connections in the web3 industry. Previously, I worked at Airbus Defence and Space for almost 5 years, contributing to various departments, including cyber security, cloud, and blockchain projects. I engineered numerous software applications there and developed extensively in React. I hold a Bachelor of Science in Computer Science and Cyber Security from Darmstadt University of Applied Sciences. Besides, I really enjoy calisthenics, cold plunges, biohacking, reading, and occasionally gaming. I'm always happy to connect with new people – just reach out.",
  avatarUrl: "/me.jpg",
  skills: ["React", "Next.js", "Typescript", "Python", "Docker"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/noahjoeris",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/njoeris",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/noahjoeris",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Velocity Labs",
      href: "https://velocitylabs.org",
      badges: [],
      location: "Remote",
      title: "Fullstack Blockchain Engineer",
      logoUrl: "",
      start: "May 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc.",
    },
  ],
  education: [
    {
      school: "Polkadot Blockchain Academy",
      href: "",
      degree: "Top 10 Graduate",
      logoUrl: "",
      start: "Jan 2024",
      end: "Feb 2024",
    },
  ],
  projects: [
    {
      title: "Turtle",
      href: "https://turtle.cool",
      dates: "May 2024 - Present",
      active: true,
      description: "Universal token transfer app for the Polkadot ecosystem.",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "Polkadot",
      ],
      links: [
        {
          type: "Website",
          href: "https://turtle.cool",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App",
          href: "https://app.turtle.cool",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/velocitylabs-org/turtle",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
