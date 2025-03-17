import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Alp Bayrak",
  initials: "AB",
  url: "https://AlpBayrak.io",
  location: "Dallas, TX",
  locationLink: "",
  description:
    "Computer Science Student at University of Texas at Dallas. I love building things and helping people. active on Instagram",
  summary:
    "Hi My name is Alp, I'm a passionate developer with a focus on Artificial Intelegence, Data Science,and Full Stack Development. Currently, I’m the Lead AI Developer for a Formula Racing Team, where I drive advancements in self-driving race car technology, and I’m also working on tools to simplify sustainability and make solar energy accessible.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postsql",
    "Sql",
    "Java",
    "C++",
    "C",
    "SnowFlake",
    "AWS(S3)",
    "TensorFlow",
    "PyTorch",
    "Flask"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "alpbayrak61@gmail.com",
    tel: "+2818819521",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AlpBayrak61",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alp-bayrak-b01145192/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "",
        url: "",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "",
        url: "",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "dataengite",
      href: "https://www.dataengite.com/",
      badges: [],
      location: "Remote",
      title: "Data Analytics Intern",
      logoUrl: "/dataengite.png",
      start: "Jan 2025",
      end: "Current",
      description:
        "Collaborated with a team to develop and optimize frameworks and tools that improved data quality and usability, enhancing the database experience for 10 different companies with more than 20000 users. Optimized data models and ETL pipelines, achieving a 20–50% increase in processing speed for critical workflows, reducing latency, and improving overall platform performance. Implemented distributed frameworks processing hundreds of gigabytes of data daily and improving real-time data processing speed by 25%. Conducted experiments with cloud technologies such as AWS Redshift and Snowflake to streamline data workflows, reducing data processing times by 30% enabling faster business insights and supporting real-time analytics for large-scale datasets."
    },
    {
      company: "UTD",
      badges: [],
      href: "https://sustainability.utdallas.edu/",
      location: "On-site",
      title: "Software Engineer Intern",
      logoUrl: "/UTD.png",
      start: "August 2024",
      end: "Decemmber 2024",
      description:
        "Led the creation of a user-centric website for the University of Texas at Dallas Office of Sustainability to help DFW area residents to convert to use more solar energy by allowing them to see how much money they can save with solar energy for their house and contact to respectful companies through our website, employing React, CSS, and HTML to establish an interface that had over 10,000 users on the first month. Utilized Java for the back-end development, ensuring seamless data processing and integration. The platform assists households in evaluating the feasibility of switching to solar power by the integrated real-time energy pricing data, reducing outdated cost estimates by 95%. Utilized REST APIs to seamlessly collect, process, and analyze both historical and real-time electricity consumption data from various energy providers, ensuring precise and data-driven solar cost estimations. The system dynamically adjusts calculations based on seasonal variations, household energy demands, and regional pricing fluctuations. This approach enhanced cost estimation accuracy by 47",
    },
    {
      company: "Vestel",
      href: "https://vestelinternational.com/",
      badges: [],
      location: "On-site",
      title: "Machine Learning Intern",
      logoUrl: "/vestel.png",
      start: "June 2023",
      end: "August 2023",
      description:
        "Collaborated with a cross-functional team to develop and enhance Vestel’s AI Helper for mobile devices, focusing on natural language processing (NLP) and CNN models to improve user interactions, resulting in 2x the efficiency of the system. Deployed AI models on mobile platforms, leveraging Android UI, Kotlin, and advanced optimization techniques to enhance real-time performance.Trained models using over 1M+ data samples and optimized them for mobile deployment cutting the processing speed by 50% and reduced latency by 25%, resulting in smoother user interactions, faster response times in Android devices."
    },
  ],
  education: [
    {
      school: "University of Texas at Dallas",
      href: "https://www.utdallas.edu/",
      degree: "Bachelor's in Computer Science",
      logoUrl: "/UTD.png",
      start: "2022",
      end: "Current",
    },
  ],
  projects: [
    {
      title: "Movie Recommandation Website",
      href: "",
      dates: "Dec 2024",
      active: true,
      description:
        "MovieHub is a dynamic movie recommendation website designed to help users discover their next favorite film. Whether you're in the mood for an action-packed thriller, a heartfelt drama, or a laugh-out-loud comedy, MovieHub provides tailored recommendations based on your preferences, viewing history, and trending films. ",
      technologies: [
        "Python",
        "Node.js",
        "Typescript",
        "SQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AlpBayrak61/Movie-Recommandation-Website61?tab=readme-ov-file",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/movie.png",
      video:""    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Residential-Solar-Calculator",
      href: "",
      dates: "August 2024 - December 2024",
      active: true,
      description:
        "After the severe storms like the February 2021 Texas winter storm, many Texas residents are worried about future electricity grid failures. To prevent experiencing another power crisis, many have looked towards transitioning to alternative energy sources. The Residential Solar Calculator application will assist DFW residents in shifting to solar energy by providing estimates on a suitable solar system. The calculator assists users in determining the best solar energy system configuration, estimated investment costs, and educates users on the benefits of solar energy.",
      technologies: [
        "React",
        "Typescript",
        "Python",
        "CSS",
        "HTML",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/UTDallasEPICS/Residential-Solar-Calculator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/solar.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "HackUTD",
      dates: "November 15th, 2023",
      location: "Dallas, TX",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "",
      mlh: "",
      links: [],
    },
  ],
} as const;
