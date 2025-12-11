import { FaPython, FaJs, FaJava, FaReact, FaDocker, FaAws, FaDatabase, FaBrain } from 'react-icons/fa';
import { SiFastapi, SiDjango, SiFlask, SiRedis, SiPostgresql, SiKubernetes, SiGithubactions } from 'react-icons/si';

export const personalDetails = {
  name: "Jyothika Chowdary",
  role: "Software Engineer",
  tagline: "Building scalable backend systems & AI-driven solutions.",
  email: "jyothika.1si20ad014@gmail.com",
  phone: "+91 9392821338",
  location: "Bengaluru, Karnataka",
  linkedin: "https://linkedin.com/in/jyothikachowdaryp",
  github: "https://github.com/jyothikachowdary-pamulapati-9a3256227", // Assuming from ID
  about: "Software Engineer with 2+ years of experience designing scalable microservices and RESTful APIs using Python, FastAPI, and Django. Strong expertise in database optimization, cloud-native development, and CI/CD pipelines, delivering high-performance backend systems for enterprise-scale applications."
};

export const skills = [
  { name: "Python", icon: FaPython, level: 95 },
  { name: "FastAPI", icon: SiFastapi, level: 90 },
  { name: "Django", icon: SiDjango, level: 85 },
  { name: "PostgreSQL", icon: SiPostgresql, level: 85 },
  { name: "Docker", icon: FaDocker, level: 80 },
  { name: "Kubernetes", icon: SiKubernetes, level: 75 },
  { name: "AWS", icon: FaAws, level: 75 },
  { name: "React", icon: FaReact, level: 70 },
  { name: "Redis", icon: SiRedis, level: 75 },
  { name: "System Design", icon: FaDatabase, level: 80 },
];

export const experience = [
  {
    title: "Software Engineer – Backend",
    company: "Impact Analytics",
    location: "Bengaluru, Karnataka",
    period: "June 2024 – Present",
    description: [
      "Designed and developed scalable microservices for ItemSmart (enterprise SKU-level inventory optimization).",
      "Built and optimized RESTful APIs using Python, FastAPI, and PostgreSQL, leveraging Redis caching and Kubernetes deployment.",
      "Reduced response times by 35% and improved query performance through database tuning.",
      "Enabled real-time analytics across 10,000+ SKUs with caching and indexing strategies.",
      "Collaborated in Agile sprints with 95%+ test coverage.",
      "Integrated CI/CD pipelines using Docker and GitHub Actions, reducing release cycles by 40%."
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Dell Technologies",
    location: "Hybrid",
    period: "October 2023 – January 2024",
    description: [
      "Led end-to-end development of KRISHIMITRA, a data-driven analytics platform for farmers.",
      "Developed backend services using Python and Flask to integrate ML models, improving crop identification accuracy by 20%.",
      "Implemented secure authentication using Twilio APIs and government ID-based verification, improving security by 30%."
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering in C.S.E. (AI & DS)",
    school: "Siddaganga Institute of Technology, Tumkur",
    year: "Graduated 2024",
    description: "Specialized in Artificial Intelligence and Data Science."
  }
];

export const projects = [
  {
    title: "BlueCollarConnect",
    tech: ["Python", "Django", "HTML", "CSS", "JS", "Bootstrap"],
    description: "A full-stack Django-based web platform connecting blue-collar workers with opportunities.",
    points: [
      "Contributed ~60% of the overall implementation.",
      "Implemented auth, RBAC, data models, and RESTful CRUD APIs.",
      "Built responsive frontend interfaces."
    ]
  }
];

export const achievements = [
  "Secured 1st place in the WieCode Hackathon.",
  "Led the state handball team at the state championships."
];
