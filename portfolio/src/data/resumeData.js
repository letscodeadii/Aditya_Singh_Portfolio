// ---------------------------------------------------------------------------
// Portfolio Data
// Single source of truth for the portfolio.
// Updated from latest resume.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Aditya Singh",
  firstName: "Aditya",

  role: "Software Developer | Full-Stack Java Developer",

  tagline:
    "Building scalable full-stack and microservices applications with Java, Spring Boot & React.",

  location: "Panchawati, Pashan, Pune, Maharashtra 411008",

  phone: "+91-6268073745",

  email: "letsmailadii@gmail.com",

  linkedin: "https://linkedin.com/in/adityaxsingh",
  linkedinLabel: "linkedin.com/in/adityaxsingh",

  github: "https://github.com/letscodeadii",
  githubLabel: "github.com/letscodeadii",

  summary:
    "Computer Science Engineer currently pursuing PGCP-AC at C-DAC Pune. Passionate Software Developer with expertise in Java, Spring Boot, Spring Cloud, React.js, ASP.NET Core, Angular, MySQL, and Microservices Architecture. Experienced in developing enterprise-grade applications, secure REST APIs, and scalable full-stack solutions. Strong foundation in Data Structures & Algorithms, OOP, DBMS, Operating Systems, REST APIs, System Design, and Agile Software Development.",

  resumeFile: "/Aditya_Singh_Resume.pdf",
};

// ---------------------------------------------------------------------------

export const stats = [
  {
    label: "Years Learning",
    value: 5,
    suffix: "+",
  },
  {
    label: "Projects Built",
    value: 8,
    suffix: "+",
  },
  {
    label: "Technologies",
    value: 25,
    suffix: "+",
  },
  {
    label: "Certifications",
    value: 3,
    suffix: "",
  },
];

// ---------------------------------------------------------------------------

export const skillGroups = [
  {
    title: "Languages",
    comment: "// programming languages",

    items: [
      { name: "Java", level: 92 },
      { name: "C#", level: 80 },
      { name: "JavaScript", level: 86 },
      { name: "TypeScript", level: 82 },
      { name: "SQL", level: 88 },
      { name: "C++", level: 82 },
      { name: "C", level: 78 },
    ],
  },

  {
    title: "Frameworks",
    comment: "// backend & frontend",

    items: [
      { name: "Spring Boot", level: 90 },
      { name: "Spring Cloud", level: 84 },
      { name: "Spring Security", level: 85 },
      { name: "Hibernate", level: 82 },
      { name: "React.js", level: 85 },
      { name: "Angular", level: 82 },
      { name: "ASP.NET Core", level: 78 },
    ],
  },

  {
    title: "Database & Tools",
    comment: "// development tools",

    items: [
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 74 },
      { name: "Docker", level: 78 },
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 86 },
      { name: "Maven", level: 84 },
    ],
  },
];

// ---------------------------------------------------------------------------

export const coreConcepts = [
  "Data Structures & Algorithms",
  "Object Oriented Programming",
  "DBMS",
  "Operating Systems",
  "REST APIs",
  "Spring Security",
  "JWT Authentication",
  "Microservices",
  "Spring Cloud",
  "System Design",
  "Docker",
  "Agile",
  "SDLC",
];

// ---------------------------------------------------------------------------

export const experience = [
  {
    id: "cdac",

    title:
      "PGCP-AC — Post Graduate Certificate Programme in Advanced Computing",

    org: "Centre for Development of Advanced Computing (C-DAC), Pune",

    start: "Feb 2026",

    end: "Present",

    points: [
      "Pursuing an intensive full-time Advanced Computing program focused on enterprise software development.",
      "Hands-on experience with Java, Spring Boot, Spring Cloud, .NET, React, Angular, Docker, MySQL, and Microservices.",
      "Building scalable enterprise applications through practical projects and lab sessions.",
      "Strengthening problem-solving skills with Data Structures & Algorithms, OOP, DBMS, and Operating Systems.",
      "Participating in C-DAC's Common Campus Placement Programme (CCPP).",
    ],
  },
];

// ---------------------------------------------------------------------------

export const projects = [
  {
    id: "smart-college-erp",

    index: "01",

    title: "Smart College ERP",

    subtitle: "Microservices-Based College ERP",

    description:
      "Enterprise-grade College ERP built using Java Spring Boot Microservices architecture with Spring Cloud, Eureka Server, API Gateway, React.js, and MySQL.",

    stack: [
      "Java 17",
      "Spring Boot",
      "Spring Cloud",
      "React.js",
      "MySQL",
      "Docker",
    ],

    points: [
      "Developed a full-stack microservices-based College ERP application for academic and administrative management.",
      "Built secure REST APIs using Java 17, Spring Boot, Spring Security, JWT Authentication, and MySQL.",
      "Implemented Eureka Server and API Gateway for service discovery and request routing.",
      "Developed React.js dashboards with role-based authentication for Admin, Faculty, Student, and Parent users.",
      "Containerized all services using Docker Compose and managed builds using Maven.",
    ],

    accent: "cyan",
  },

  {
    id: "cartverse",

    index: "02",

    title: "CartVerse",

    subtitle: "Enterprise E-Commerce Platform",

    description:
      "Full-stack enterprise e-commerce application featuring secure authentication, online payments, clean architecture, and high-performance caching.",

    stack: [
      "Angular",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Stripe",
      "Azure Redis",
    ],

    points: [
      "Developed secure REST APIs using ASP.NET Core Web API and Entity Framework Core.",
      "Implemented JWT Authentication and ASP.NET Identity for secure user management.",
      "Applied Repository, Unit of Work, and Specification design patterns.",
      "Developed a responsive Angular frontend using RxJS, Reactive Forms, and Bootstrap 5.",
      "Integrated Stripe Payment Gateway and Azure Redis Cache for improved performance.",
    ],

    accent: "violet",
  },
];

// ---------------------------------------------------------------------------

export const certifications = [
  {
    title: "Java Programming",
    issuer: "Udemy",
    note: "Beginner to Master",
  },

  {
    title: "C++ Programming",
    issuer: "Udemy",
    note: "Beginner to Advanced",
  },

  {
    title: "Full Stack Java Development",
    issuer: "Udemy",
    note: "Java • JSP • Spring Boot • JavaScript • React",
  },
];

// ---------------------------------------------------------------------------

export const education = [
  {
    degree:
      "Post Graduate Certificate Programme in Advanced Computing (PGCP-AC)",

    school: "Centre for Development of Advanced Computing (C-DAC ACTS), Pune",

    start: "Feb 2026",

    end: "Present",

    score: "Pursuing",
  },

  {
    degree: "Bachelor of Technology (B.Tech) — Computer Science & Engineering",

    school: "Technocrats Institute of Technology, Bhopal (RGPV)",

    start: "2022",

    end: "2025",

    score: "77.8%",
  },

  {
    degree: "Diploma — Computer Science & Engineering",

    school:
      "Sardar Vallabhbhai Patel Polytechnic College, Bhopal (RGPV)",

    start: "2019",

    end: "2022",

    score: "81.1%",
  },

  {
    degree: "Secondary Education (Class X)",

    school: "D.A.V. Sr. Sec. Public School, Nigahi (CBSE)",

    start: "2017",

    end: "2018",

    score: "62.8%",
  },
];

// ---------------------------------------------------------------------------

export const achievements = [
  {
    title: "Chess Champion",
    detail: "Winner of the School-level Chess Championship.",
  },

  {
    title: "Top Performer",
    detail: "Selected among top Diploma students for specialized workshops.",
  },

  {
    title: "Academic Excellence",
    detail: "Secured 81.1% in Diploma (RGPV).",
  },
];

// ---------------------------------------------------------------------------

export const highlights = [
  "Java Backend Development",
  "Spring Boot",
  "Spring Cloud",
  "Microservices",
  "REST API Development",
  "JWT Authentication",
  "React.js",
  "Angular",
  "ASP.NET Core",
  "Docker",
  "Git & GitHub",
  "SQL & NoSQL Databases",
  "System Design",
];

// ---------------------------------------------------------------------------

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ---------------------------------------------------------------------------

export const socials = [
  {
    label: "GitHub",
    href: profile.github,
    icon: "github",
  },

  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: "linkedin",
  },

  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "mail",
  },

  {
    label: "Phone",
    href: `tel:${profile.phone}`,
    icon: "phone",
  },
];
