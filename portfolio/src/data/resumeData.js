```javascript
// ---------------------------------------------------------------------------
// Portfolio Data
// Single source of truth for the portfolio.
// Synced with latest resume
// ---------------------------------------------------------------------------

export const profile = {
  name: "Aditya Singh",
  firstName: "Aditya",

  role: "Software Developer | Java Developer",

  tagline:
    "Building full-stack and microservices applications with Java, Spring Boot & React.",

  location: "Panchawati, Pashan, Pune, Maharashtra 411008",

  phone: "+91-6268073745",

  email: "letsmailadii@gmail.com",

  linkedin: "https://linkedin.com/in/letsconnectadii",
  linkedinLabel: "linkedin.com/in/letsconnectadii",

  github: "https://github.com/letscodeadii",
  githubLabel: "github.com/letscodeadii",

  summary:
    "Computer Science Engineer with a B.Tech in Computer Science and Engineering and a Post Graduate Certificate Programme in Advanced Computing (PGCP-AC) from C-DAC Pune. Strong foundation in Core Java, OOP, Data Structures, DBMS, REST APIs, and SQL, with hands-on experience in Spring Boot, Spring Security, Hibernate, React.js, and MySQL. Developed a full-stack microservices-based Smart College ERP using Java and Spring Boot, implementing secure REST APIs, JWT authentication, API Gateway, and role-based access. Seeking an entry-level Software Developer / Java Developer role to build scalable applications and contribute to a collaborative engineering team.",

  resumeFile: "/Aditya_Singh_Resume.pdf",
};

// ---------------------------------------------------------------------------
// Portfolio Statistics
// ---------------------------------------------------------------------------

export const stats = [
  {
    label: "Projects Built",
    value: 1,
    suffix: "+",
  },
  {
    label: "Core Technologies",
    value: 20,
    suffix: "+",
  },
  {
    label: "Certifications",
    value: 3,
    suffix: "",
  },
  {
    label: "PGCP-AC",
    value: 1,
    suffix: "",
  },
];

// ---------------------------------------------------------------------------
// Technical Skills
// ---------------------------------------------------------------------------

export const skillGroups = [
  {
    title: "Languages",
    comment: "// programming & markup languages",

    items: [
      { name: "Java", level: 92 },
      { name: "JavaScript", level: 86 },
      { name: "TypeScript", level: 78 },
      { name: "SQL", level: 88 },
      { name: "C++", level: 82 },
      { name: "C", level: 78 },
      { name: "HTML", level: 85 },
      { name: "CSS", level: 82 },
    ],
  },

  {
    title: "Frameworks",
    comment: "// backend & frontend",

    items: [
      { name: "Spring Boot", level: 90 },
      { name: "Spring MVC", level: 84 },
      { name: "Spring Security", level: 85 },
      { name: "Spring Cloud", level: 82 },
      { name: "Hibernate", level: 82 },
      { name: "React.js", level: 85 },
      { name: "Redux", level: 76 },
    ],
  },

  {
    title: "Databases",
    comment: "// data storage",

    items: [
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 74 },
    ],
  },

  {
    title: "Tools",
    comment: "// development & collaboration tools",

    items: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 78 },
      { name: "Postman", level: 86 },
      { name: "VS Code", level: 90 },
      { name: "Eclipse", level: 84 },
      { name: "Visual Studio", level: 76 },
      { name: "MySQL Workbench", level: 84 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Core Concepts
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
  "SDLC",
  "Agile",
];

// ---------------------------------------------------------------------------
// Industry Training / Experience
// ---------------------------------------------------------------------------

export const experience = [
  {
    id: "cdac",

    title:
      "Post Graduate Certificate Programme in Advanced Computing (PGCP-AC)",

    org: "Centre for Development of Advanced Computing (C-DAC ACTS), Pashan, Pune",

    start: "Feb 2026",

    end: "Aug 2026",

    points: [
      "Completed an intensive 24-week full-time program focused on industry-oriented software development.",
      "Developed hands-on expertise in Core Java, J2EE, Spring Boot, Hibernate, .NET, React.js, MySQL, and Data Structures & Algorithms.",
      "Strengthened knowledge of OOP, DBMS, Operating Systems, REST APIs, Web Technologies, and Software Development Life Cycle.",
      "Gained practical experience through programming assignments, lab exercises, and full-stack application development.",
      "Participated in C-DAC's Common Campus Placement Programme (CCPP).",
    ],
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const projects = [
  {
    id: "smart-college-erp",

    index: "01",

    title: "Smart College ERP",

    subtitle: "Microservices-Based College ERP",

    description:
      "Full-stack microservices-based College ERP built using Java, Spring Boot, Spring Cloud, React.js, and MySQL for academic and administrative management.",

    stack: [
      "Java 17",
      "Spring Boot",
      "Spring Cloud",
      "Spring Security",
      "Spring Data JPA",
      "React.js",
      "MySQL",
      "Docker",
    ],

    points: [
      "Developed a full-stack microservices-based College ERP to streamline academic and administrative operations for Admin, Faculty, Student, and Parent users.",
      "Built secure RESTful APIs using Java 17, Spring Boot, Spring Data JPA, Spring Security, JWT, and MySQL.",
      "Implemented API Gateway and Eureka Server for request routing and service discovery across microservices.",
      "Developed a responsive React.js frontend with role-based authentication, dashboards, attendance tracking, and marks management.",
      "Containerized application services using Docker Compose and managed the multi-module project using Maven.",
    ],

    accent: "cyan",

    github:
      "https://github.com/letscodeadii/Smart_College_ERP",
  },
];

// ---------------------------------------------------------------------------
// Certifications
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
// Education
// ---------------------------------------------------------------------------

export const education = [
  {
    degree:
      "Post Graduate Certificate Programme in Advanced Computing (PGCP-AC)",

    school:
      "Centre for Development of Advanced Computing (C-DAC ACTS), Pune",

    start: "Feb 2026",

    end: "Aug 2026",

    score: "74%",
  },

  {
    degree:
      "Bachelor of Technology (B.Tech) — Computer Science & Engineering",

    school:
      "Technocrats Institute of Technology, Bhopal (RGPV)",

    start: "2022",

    end: "2025",

    score: "77.8%",
  },

  {
    degree:
      "Diploma — Computer Science & Engineering",

    school:
      "Sardar Vallabhbhai Patel Polytechnic College, Bhopal (RGPV)",

    start: "2019",

    end: "2022",

    score: "81.1%",
  },

  {
    degree: "Higher Secondary Education (Class X)",

    school:
      "D.A.V. Sr. Sec. Public School, Nigahi (CBSE)",

    start: "2017",

    end: "2018",

    score: "62.8%",
  },
];

// ---------------------------------------------------------------------------
// Achievements
// ---------------------------------------------------------------------------

export const achievements = [
  {
    title: "Chess Champion",
    detail: "Winner of School-level Chess Championship.",
  },

  {
    title: "Top Performer",
    detail:
      "Selected among top-performing diploma students for technical workshops.",
  },

  {
    title: "Academic Excellence",
    detail: "Secured 81.1% in Diploma (RGPV).",
  },
];

// ---------------------------------------------------------------------------
// Portfolio Highlights
// ---------------------------------------------------------------------------

export const highlights = [
  "Core Java",
  "Java Backend Development",
  "Spring Boot",
  "Spring Security",
  "Spring Cloud",
  "Microservices",
  "REST API Development",
  "JWT Authentication",
  "React.js",
  "Hibernate",
  "MySQL",
  "Docker",
  "Git & GitHub",
  "Data Structures & Algorithms",
  "OOP",
  "DBMS",
];

// ---------------------------------------------------------------------------
// Navigation
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
// Social Links
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
```
