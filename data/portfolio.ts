import {
  Activity,
  Binary,
  Blocks,
  Bot,
  Box,
  BriefcaseBusiness,
  Cable,
  Cloud,
  Database,
  FileCode2,
  GitBranch,
  GraduationCap,
  Layers3,
  Mail,
  MessageSquareShare,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

export const heroStats = [
  { value: "1100+", label: "Hours of coding" },
  { value: "300+", label: "DSA problems solved" },
  { value: "100+", label: "Soft-skills hours" },
  { value: "3", label: "Live portfolio projects" }
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const aboutHighlights = [
  {
    title: "Java-first engineering",
    description:
      "Builds backend systems around clean domain models, resilient service boundaries, and maintainable production code.",
    icon: Binary
  },
  {
    title: "Scalable API design",
    description:
      "Focus on REST APIs, performance tuning, validation, persistence strategy, and clear service contracts.",
    icon: ServerCog
  },
  {
    title: "Distributed systems mindset",
    description:
      "Interested in microservices, event-driven flows, and operational reliability under real traffic constraints.",
    icon: Workflow
  }
];

export const storyPoints = [
  "Rahul Kumar is a Java Backend Engineer from Sitamarhi with a foundation shaped by Masai School’s intensive engineering program.",
  "His work centers on Spring Boot services, relational data modeling, and backend architecture that prioritizes stability, speed, and clean API behavior.",
  "He is strongest when solving systems problems: data flow, validation, persistence, service decomposition, and practical debugging.",
  "TODO: Replace this section with current production experience and latest backend ownership after resume refresh."
];

export const experienceTimeline = [
  {
    title: "Portfolio rewrite for recruiter-facing brand",
    period: "2026",
    description:
      "Presenting backend strengths through a premium frontend showcase focused on system design, APIs, and engineering craft.",
    icon: Sparkles
  },
  {
    title: "Advanced backend training at Masai School",
    period: "2022",
    description:
      "Built Java backend projects with Spring, JPA, MySQL, Swagger, and team collaboration during project week delivery.",
    icon: BriefcaseBusiness
  },
  {
    title: "Mathematics graduate foundation",
    period: "2018 - 2021",
    description:
      "Completed graduation in Mathematics Honours from C. M. Science College, Darbhanga, strengthening analytical problem solving.",
    icon: GraduationCap
  }
];

export const projectFilters = ["All", "Backend", "Full Stack", "Frontend"] as const;

export const projects = [
  {
    title: "Food App REST API",
    category: "Backend",
    image: "/assets/project-food-app.png",
    description:
      "Online food booking backend with CRUD workflows, user validation, and modular service architecture built during Masai project week.",
    architecture:
      "Layered Spring Boot application using controllers, services, repositories, DTO boundaries, and relational persistence.",
    challenges:
      "Coordinating multi-entity booking flows, enforcing validation at each step, and keeping business logic maintainable across a team of four developers.",
    features: [
      "User validation and protected flows",
      "Restaurant and order management APIs",
      "Swagger documentation",
      "Persistence with MySQL and JPA"
    ],
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Swagger UI", "Lombok", "Maven"],
    github: "https://github.com/Rahul9332935/FoodApp",
    demo: "https://drive.google.com/file/d/1Hkn8b_QxAcmqQ_BKleXkQn-czrKEq25W/view"
  },
  {
    title: "ASOS Clone",
    category: "Frontend",
    image: "/assets/project-asos.png",
    description:
      "Collaborative ecommerce storefront recreation with category-led browsing, sign-up and login flows, and product-first merchandising.",
    architecture:
      "Static frontend architecture with page-level composition and shared UI sections for navigation, discovery, and product exploration.",
    challenges:
      "Building polished retail flows quickly in a team environment while handling homepage ownership across men’s and women’s experiences.",
    features: [
      "Men and women homepage builds",
      "Authentication screens",
      "Retail-style product browsing",
      "Team collaboration delivery"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/arsalanshaikhh/asos.com-clone-Unit2",
    demo: "https://steady-swan-edc8d5.netlify.app/"
  },
  {
    title: "YouTube Mini App",
    category: "Frontend",
    image: "/assets/project-youtube.png",
    description:
      "API-driven video discovery interface that lets users search and play YouTube content in a focused single-page flow.",
    architecture:
      "Client-side application consuming public APIs with search, result rendering, and media playback states.",
    challenges:
      "Keeping the interaction fast and understandable within a short solo build window while working directly with remote API responses.",
    features: [
      "Search and playback experience",
      "API-based content fetch",
      "Responsive media layout",
      "Solo project execution"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/masai-course/Rahul_fw19_0544/tree/master/unit-3/sprint-3/day-1/you/YOUTUBE%20MINI%20APP%20I",
    demo: "https://profound-bonbon-dc9a0d.netlify.app/"
  }
] as const;

export const skillGroups = [
  { title: "Languages", icon: FileCode2, skills: ["Java", "SQL", "JavaScript"] },
  {
    title: "Frameworks",
    icon: Layers3,
    skills: ["Spring Boot", "Vert.x", "Hibernate", "JPA", "Ebean"]
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "Google Cloud", "Azure Blob"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Redis", "MongoDB"]
  },
  {
    title: "Messaging",
    icon: MessageSquareShare,
    skills: ["Kafka", "RabbitMQ"]
  },
  {
    title: "DevOps",
    icon: Box,
    skills: ["Docker", "Kubernetes", "GitHub Actions"]
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "Postman", "IntelliJ", "VS Code"]
  },
  {
    title: "Architecture",
    icon: Blocks,
    skills: [
      "Microservices",
      "REST APIs",
      "Distributed Systems",
      "Event-driven Architecture",
      "Performance Optimization"
    ]
  }
] as const;

export const educationItems = [
  {
    title: "Java Backend Development",
    subtitle: "Masai School",
    period: "2022",
    icon: Bot
  },
  {
    title: "B.Sc. Mathematics Honours",
    subtitle: "C. M. Science College, Darbhanga",
    period: "2018 - 2021",
    icon: GraduationCap
  },
  {
    title: "Higher Secondary",
    subtitle: "Kendriya Vidyalaya, Jawaharnagar",
    period: "2016 - 2018",
    icon: ShieldCheck
  }
];

export const achievements = [
  { label: "Hours of coding", value: 1100, suffix: "+" },
  { label: "DSA problems", value: 300, suffix: "+" },
  { label: "Collaborative builds", value: 5, suffix: "+" },
  { label: "Backend capstone teams", value: 4, suffix: "" }
];

export const socialLinks = [
  { label: "Email", href: "mailto:rahul9332935@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/Rahul9332935", icon: Cable },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rahul9332/", icon: Activity }
];

export const testimonials = [
  {
    quote:
      "Placeholder for a teammate or manager quote about backend ownership, reliability, or collaboration.",
    author: "TODO",
    role: "Add verified testimonial"
  },
  {
    quote:
      "Placeholder for a recruiter or mentor note highlighting problem-solving depth and engineering communication.",
    author: "TODO",
    role: "Add verified testimonial"
  }
];
