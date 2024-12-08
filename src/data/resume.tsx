import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Minghao",
  initials: "MH",
  description:
    "Software Engineer. I enjoy reading, running and discovering new ways or tools to automate tasks.",
  summary:
    "Eager to learn about new technologies particularly technology which improves processes/workflows and brings value to people. A life-long learner striving to make improvements, whether small or big, on myself day to day. I appreciate and surround myself with individuals who will push me to do better.",
  avatarUrl: "",
  skills: [
    "C#",
    "Python",
    "Java",
    "JavaScript",
    "Typescript",
    "SQL",
    "NoSQL",
    ".NET Core",
    "Node.js",
    "React",
    "Next.js",
    "MSSQL",
    "MongoDB",
    "Azure",
    "Docker",
    "Kubernetes",
    "Git",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@example.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/haomcappdev",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/minghaochai0805/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Nintex",
      href: "https://www.nintex.com/",
      badges: [],
      location: "Kuala Lumpur, MY",
      title: "Associate Software Engineer",
      logoUrl: "/nintex.png",
      start: "November 2023",
      end: "Present",
      description:
        "Joined a team where the main feature owned involves managing the SharePoint integration of the platform. Day to day includes tending to support tickets raised, maintaining internal cloud resources (e.g. pipelines, ARM templates, deployments), writing and running performance tests, improving the performance of the application and implementing new features.",
    },
    {
      company: "Sleekflow",
      href: "https://sleekflow.io/",
      badges: [],
      location: "Kuala Lumpur, MY",
      title: "Full-stack Software Engineer",
      logoUrl: "/sleekflow.png",
      start: "August 2023",
      end: "October 2023",
      description:
        "Joined as a Full-stack software engineer to maintain the performance dashboard which is for internal use.",
    },
    {
      company: "Billennium",
      href: "https://billennium.com/",
      badges: [],
      location: "Kuala Lumpur, MY",
      title: "Full-stack Software Engineer",
      logoUrl: "/billennium.png",
      start: "August 2021",
      end: "July 2023",
      description:
        "Joined as a Full-stack software engineer for a greenfield project. The project was a platform to allow business owners to manage distributors, customers and their products. Assigned to work on features alone where the work includes setting up the data structures, developing the user interface and serving the data.",
    },
    {
      company: "PwC Malaysia",
      href: "https://www.pwc.com/my/en.html",
      badges: [],
      location: "Kuala Lumpur, MY",
      title: "Senior Associate",
      logoUrl: "/pwc.png",
      start: "Dec 2018",
      end: "July 2021",
      description:
        "Extended the internal tax filing desktop application, that is built using .NET Framework, so that we can sell it to clients. Sole developer of an internal greenfield project which syncs data from multiple sources into a database and serves it via a Web API. Joined the Robotic Process Automation team to explore the UiPath tool and help develop workflows to automate daily tax filing tasks.",
    },
  ],
  education: [
    {
      school: "Monash University",
      href: "https://www.monash.edu/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/monash.png",
      start: "2015",
      end: "2018",
    },
  ],
} as const;
