// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content, extracted from the
// uploaded resume. Edit this file to update the site — no JSX changes needed.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Aditya Singh",
  firstName: "Aditya",
  role: "Full-Stack Developer",
  tagline: "I build reliable software, end to end.",
  location: "Panchawati, Pashan, Pune, Maharashtra 411008",
  phone: "+91-6268073745",
  email: "letsmailadii@gmail.com",
  linkedin: "https://linkedin.com/in/adityaxsingh",
  linkedinLabel: "linkedin.com/in/adityaxsingh",
  github: "https://github.com/letscodeadii",
  githubLabel: "github.com/letscodeadii",
  summary:
    "Computer Science Engineer with a Bachelor's degree in CSE (RGPV) and a current PGCP-AC candidate at C-DAC, Pune. Proficient in full-stack development with Java, Spring Boot, React, and MySQL. I build scalable applications with AI integration — including a 90% reduction in manual attendance tracking through face recognition. Strong foundation in DSA, OOPs, and DBMS with a habit of shipping clean, maintainable code.",
  resumeFile: "/Aditya_Singh_Resume.pdf",
};

export const stats = [
  { label: "Years Learning & Building", value: 4, suffix: "+" },
  { label: "Projects Shipped", value: 6, suffix: "+" },
  { label: "Core Technologies", value: 20, suffix: "+" },
  { label: "Attendance Effort Cut", value: 90, suffix: "%" },
];

export const skillGroups = [
  {
    title: "Languages",
    comment: "// what I write in",
    items: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 80 },
      { name: "C", level: 75 },
    ],
  },
  {
    title: "Frameworks",
    comment: "// what I build with",
    items: [
      { name: "Spring Boot", level: 88 },
      { name: "React.js", level: 82 },
      { name: "Spring Security", level: 78 },
      { name: "Hibernate", level: 80 },
      { name: "Angular", level: 70 },
      { name: ".NET", level: 65 },
    ],
  },
  {
    title: "Data & Tools",
    comment: "// what I run on",
    items: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Docker", level: 70 },
      { name: "Git / GitHub", level: 85 },
      { name: "Postman", level: 80 },
    ],
  },
];

export const coreConcepts = [
  "DSA",
  "OOP",
  "DBMS",
  "Operating Systems",
  "SDLC",
  "Agile",
  "REST APIs",
  "Microservices",
  "System Design",
];

export const experience = [
  {
    id: "cdac",
    title: "PGCP-AC — Post Graduate Certificate Programme in Advanced Computing",
    org: "Centre for Development of Advanced Computing (C-DAC), Pashan, Pune",
    start: "Feb 2026",
    end: "Present",
    points: [
      "Pursuing an intensive 24-week full-time program in Advanced Computing with comprehensive training in full-stack development.",
      "Acquiring expertise in Core Java, J2EE, Spring Boot, Hibernate, .NET, React, MySQL, and Data Structures & Algorithms.",
      "Developing proficiency in OOPs, Database Management Systems, Operating Systems, and Web Technologies.",
      "Engaging in hands-on projects and lab sessions to build industry-ready software development skills.",
      "Part of C-DAC's Common Campus Placement Programme (CCPP) for recruitment opportunities.",
    ],
  },
];

export const projects = [
  {
    id: "learniq",
    index: "01",
    title: "LearnIQ",
    subtitle: "Education Management System",
    description:
      "A full-stack education management system with role-based access for four user types, real-time notifications, and analytics dashboards.",
    stack: ["Angular", "Spring Boot", "MySQL", "Hibernate"],
    points: [
      "Architected role-based access control for 4 user roles: Admin, Teacher, Student, Parent.",
      "Optimized complex database queries with Hibernate, achieving 25% faster response time.",
      "Designed and delivered 10+ modules, including real-time notifications, a parent portal, and analytics dashboards.",
      "Followed MVC architecture and Agile methodology across 2-week sprint cycles.",
    ],
    accent: "violet",
  },
  {
    id: "smart-erp",
    index: "02",
    title: "Smart College ERP",
    subtitle: "Face Recognition Attendance",
    description:
      "An AI-powered college ERP with a 3-tier architecture that automates attendance using computer vision, cutting manual effort by 90%.",
    stack: ["Spring Boot", "React", "MySQL", "JavaCV"],
    points: [
      "Engineered a 3-tier architecture: React front end, Spring Boot services, MySQL storage.",
      "Integrated JavaCV/OpenCV with the LBPH algorithm — a 90% reduction in manual attendance effort.",
      "Implemented secure JWT authentication with role-based dashboards for 3 user roles.",
      "Built RESTful APIs for attendance tracking, marks management, and automated reporting.",
    ],
    accent: "cyan",
  },
];

export const certifications = [
  {
    title: "Java Programming",
    issuer: "Udemy",
    note: "Beginner to Master",
  },
  {
    title: "C++ Programming",
    issuer: "Udemy",
    note: "Beginner to Advanced — Deep Dive in C++",
  },
  {
    title: "Full Stack Java Dev",
    issuer: "Udemy",
    note: "Java, JSP, Spring Boot, JS, React",
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science and Engineering",
    school: "Technocrats Institute of Technology, Bhopal (RGPV)",
    start: "2022",
    end: "2025",
    score: "77.8%",
  },
  {
    degree: "Diploma — Computer Science and Engineering",
    school: "Sardar Vallabhbhai Patel Polytechnic College, Bhopal (RGPV)",
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

export const achievements = [
  {
    title: "Chess Champion",
    detail: "Winner of the School-level Chess Championship.",
  },
  {
    title: "Top Performer",
    detail: "Selected among top diploma students for specialized workshops.",
  },
  {
    title: "Academic Excellence",
    detail: "Secured 81.1% in Diploma (RGPV).",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  { label: "Phone", href: `tel:${profile.phone}`, icon: "phone" },
];