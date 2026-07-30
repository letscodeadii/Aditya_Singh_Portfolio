// ---------------------------------------------------------------------------
// Portfolio Data
// Single source of truth for the portfolio.
// Synced with latest resume (Aditya_Singh.pdf)
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
    "Computer Science Engineer with a Bachelor's degree in Computer Science and Engineering, currently pursuing PGCP-AC at C-DAC Pune. Skilled in Java, Spring Boot, Spring Cloud, React.js, ASP.NET Core, Angular, and modern database technologies, with hands-on experience building full-stack and microservices-based applications — including a Smart College ERP on Spring Boot microservices and CartVerse, a full-stack e-commerce platform on ASP.NET Core and Angular. Strong foundation in Data Structures & Algorithms, OOP, DBMS, Operating Systems, REST APIs, System Design, and Agile Software Development. Passionate about building efficient, scalable solutions and continuously learning new technologies.",

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
    value: 28,
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
    comment: "// programming & markup languages",

    items: [
      { name: "Java", level: 92 },
      { name: "C#", level: 80 },
      { name: "JavaScript", level: 86 },
      { name: "TypeScript", level: 82 },
      { name: "SQL", level: 88 },
      { name: "C++", level: 82 },
      { name: "C", level: 78 },
      { name: "HTML/CSS", level: 85 },
    ],
  },

  {
    title: "Frameworks",
    comment: "// backend & frontend",

    items: [
      { name: "Spring Boot", level: 90 },
      { name: "Spring Cloud", level: 84 },
      { name: "Spring Security", level: 85 },
      { name: "Spring MVC", level: 84 },
      { name: "Hibernate", level: 82 },
      { name: "React.js", level: 85 },
      { name: "Redux", level: 78 },
      { name: "Angular", level: 82 },
      { name: "ASP.NET Core", level: 78 },
    ],
  },

  {
    title: "Databases",
    comment: "// data storage",

    items: [
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 74 },
      { name: "SQL Server", level: 78 },
    ],
  },

  {
    title: "Tools",
    comment: "// development tools",

    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 78 },
      { name: "Postman", level: 86 },
      { name: "Maven", level: 84 },
      { name: "VS Code", level: 90 },
      { name: "Eclipse", level: 82 },
      { name: "Visual Studio", level: 80 },
      { name: "MySQL Workbench", level: 84 },
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

    org: "Centre for Development of Advanced Computing (C-DAC), Pashan, Pune",

    start: "Feb 2026",

    end: "Present",

    points: [
      "Pursuing an intensive 24-week full-time Advanced Computing program with comprehensive training in full-stack development.",
      "Acquiring expertise in Core Java, J2EE, Spring Boot, Hibernate, .NET, React, MySQL, and Data Structures & Algorithms.",
      "Developing proficiency in OOPs, Database Management Systems, Operating Systems, and Web Technologies.",
      "Engaging in hands-on projects and lab sessions to build industry-ready software development skills.",
      "Part of C-DAC's Common Campus Placement Programme (CCPP) for recruitment opportunities.",
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
      "Developed a full-stack, microservices-based College ERP application for academic and administrative management.",
      "Built secure RESTful APIs using Java 17, Spring Boot, Spring Cloud, Spring Security, JWT Authentication, and MySQL.",
      "Implemented Eureka Server and API Gateway for service discovery and request routing.",
      "Developed a React.js frontend with role-based authentication, attendance tracking, and marks management.",
      "Containerized all services using Docker Compose and managed the project build with Maven.",
    ],

    accent: "cyan",
  },

  {
    id: "cartverse",

    index: "02",

    title: "CartVerse",

    subtitle: "Enterprise E-Commerce Platform",

    description:
      "Full-stack enterprise e-commerce application featuring shopping cart, orders, secure authentication, online payments, clean architecture, and high-performance caching.",

    stack: [
      "Angular",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Stripe",
      "Azure Redis",
    ],

    points: [
      "Developed a full-stack e-commerce application with shopping cart, order management, and secure payments.",
      "Built secure RESTful APIs using ASP.NET Core Web API, Entity Framework Core, SQL Server, and JWT Authentication.",
      "Applied Repository, Unit of Work, and Specification design patterns for clean architecture.",
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
    note: "Beginner to Advanced: Deep Dive in C++",
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
    degree: "Higher Secondary Education (Class X)",

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
