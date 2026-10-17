/**
 * Portfolio Data Configuration for Indra Singh Jeena
 * Single source of truth for personal profile, projects, skills, education, and links.
 * All data is kept 100% authentic with zero fabricated achievements or claims.
 */

export const personalInfo = {
  name: "Indra Singh Jeena",
  shortName: "Indra",
  initials: "ISJ",
  title: "Aspiring Full-Stack / MERN Stack Developer",
  subtitles: [
    "Aspiring Full-Stack Developer",
    "MERN Stack Specialist",
    "Java & DSA Problem Solver",
    "B.Tech CSE Student",
  ],
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    status: "Pursuing",
    institution: "Computer Science and Engineering",
    focus: "Full-Stack Web Development, Data Structures, Algorithms & Cloud Fundamentals",
  },
  goal: "Actively seeking software developer internships and entry-level opportunities where I can apply full-stack problem solving and build impactful software.",
  availability: {
    status: "Open to Work",
    badgeText: "Available for Internships & Entry-Level Roles",
    location: "India / Remote / Hybrid",
  },
  contact: {
    email: "indrasinghjeena@gmail.com",
    github: "https://github.com/indrasingh29",
    githubUsername: "indrasingh29",
    linkedin: "https://www.linkedin.com/in/indra-singh-jeena-1a9542216",
    resumeUrl: "./assets/Indra_Singh_Jeena_Resume.pdf",
  },
  about: {
    paragraphs: [
      "I am an aspiring Full-Stack / MERN Developer and Computer Science Engineering student with an active passion for building clean, user-centric web applications that solve real-world problems.",
      "My core engineering stack centers around MongoDB, Express.js, React.js, and Node.js, backed by strong problem-solving fundamentals in Java and Data Structures & Algorithms. I care deeply about writing readable, modular code, architecting clean RESTful APIs, and crafting responsive frontend interfaces.",
      "Driven by continuous learning, I have explored cloud infrastructure foundations through AWS Educate (Introduction to Cloud 101) and have built end-to-end full-stack applications like a Job & Internship Portal and QuickKart. I am eager to contribute, learn from experienced engineering teams, and create meaningful digital products.",
    ],
    highlights: [
      { label: "Core Focus", value: "MERN Stack & Java DSA" },
      { label: "Degree Track", value: "B.Tech in CSE (Pursuing)" },
      { label: "Cloud Foundations", value: "AWS Educate Cloud 101" },
      { label: "Target Roles", value: "Internships & Junior SDE" },
    ],
  },
};

export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Frontend Development",
      description: "Crafting modern, accessible, and high-performance user interfaces",
      skills: [
        { name: "React.js", level: "Core Stack", icon: "Atom", color: "#61DAFB" },
        { name: "JavaScript (ES6+)", level: "Proficient", icon: "FileCode2", color: "#F7DF1E" },
        { name: "HTML5", level: "Proficient", icon: "Code", color: "#E34F26" },
        { name: "CSS3", level: "Proficient", icon: "Palette", color: "#1572B6" },
        { name: "Responsive Web Design", level: "Core Stack", icon: "Smartphone", color: "#8b5cf6" },
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      description: "Architecting reliable REST APIs and server-side business logic",
      skills: [
        { name: "Node.js", level: "Core Stack", icon: "Server", color: "#339933" },
        { name: "Express.js", level: "Core Stack", icon: "Cpu", color: "#ffffff" },
        { name: "REST APIs", level: "Proficient", icon: "Workflow", color: "#06b6d4" },
      ],
    },
    {
      id: "database",
      title: "Database",
      description: "Data modeling, schema design, and cloud database operations",
      skills: [
        { name: "MongoDB", level: "Core Stack", icon: "Database", color: "#47A248" },
        { name: "MongoDB Atlas", level: "Practiced", icon: "Cloud", color: "#13aa52" },
      ],
    },
    {
      id: "programming",
      title: "Programming & Computer Science",
      description: "Strong algorithmic foundations and object-oriented methodologies",
      skills: [
        { name: "Java", level: "Primary Language", icon: "Coffee", color: "#ED8B00" },
        { name: "Data Structures & Algorithms", level: "Active Practice", icon: "Binary", color: "#8b5cf6" },
        { name: "Object-Oriented Programming", level: "Core Foundation", icon: "Boxes", color: "#06b6d4" },
      ],
    },
    {
      id: "tools",
      title: "Tools & Deployment",
      description: "Industry-standard development workflows and deployment platforms",
      skills: [
        { name: "Git", level: "Version Control", icon: "GitBranch", color: "#F05032" },
        { name: "GitHub", level: "Collaboration", icon: "Github", color: "#ffffff" },
        { name: "VS Code", level: "Primary IDE", icon: "Terminal", color: "#007ACC" },
        { name: "IntelliJ IDEA", level: "Java IDE", icon: "CodeXml", color: "#FE315D" },
        { name: "Render", level: "Deployment", icon: "UploadCloud", color: "#46E3B7" },
      ],
    },
  ],
};

export const projectsData = [
  {
    id: "job-portal",
    title: "Job & Internship Portal",
    subtitle: "Full-Stack MERN Recruitment & Career Platform",
    featured: true,
    tag: "MERN Stack",
    shortDescription:
      "A full-stack recruitment platform designed to streamline student job hunting and give recruiters clean candidate tracking tools.",
    problemStatement:
      "College students and fresher graduates face fractured job search experiences across generic boards. This platform unifies job discovery, structured applications, and applicant stage management.",
    architecture:
      "Built with a decoupled MERN architecture: React client consuming RESTful Express.js APIs, with MongoDB managing schemas for candidates, recruiter accounts, and application lifecycles.",
    keyFeatures: [
      "Role-Based User Workflows: Separate interface flows for students, recruiters, and platform administrators.",
      "Job Discovery & Search: Search by keywords, role categories, and employment type with quick filtering.",
      "Application Lifecycle Tracking: Clear status updates from submission to review and interview stages.",
      "RESTful API Backend: Robust endpoints with request validation and structured JSON responses.",
      "Database Modeling: Normalized schemas for job listings, applicants, and company profiles on MongoDB.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    githubUrl: "https://github.com/indrasingh29",
    liveDemoUrl: "https://github.com/indrasingh29",
    category: "Full-Stack Web App",
    visualHighlight: {
      colorFrom: "#8b5cf6",
      colorTo: "#06b6d4",
      icon: "Briefcase",
    },
  },
  {
    id: "quickkart",
    title: "QuickKart",
    subtitle: "Multi-Role E-Commerce & Logistics Platform",
    featured: true,
    tag: "Full-Stack E-Commerce",
    shortDescription:
      "A comprehensive e-commerce application modeling real-world operational flows across customers, store owners, delivery riders, and administrators.",
    problemStatement:
      "Most learner e-commerce projects stop at a simple checkout screen. QuickKart takes it further by modeling real multi-actor logistics: store owner catalog controls and rider order transitions.",
    architecture:
      "End-to-end JavaScript architecture with responsive React frontend components, centralized cart state, and modular Express route handlers mapped to MongoDB collections.",
    keyFeatures: [
      "Customer Shopping Experience: Product catalog browsing, search, shopping cart management, and checkout workflow.",
      "Store Owner Portal: Tools to add, edit, and track inventory levels and incoming orders.",
      "Delivery Rider Workflow: Interface for order pickup assignment and delivery status updates.",
      "Admin Operations: System overview for managing users, monitoring transaction queues, and role controls.",
      "State Management: Predictable client-side cart synchronization with local resilience.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Responsive CSS"],
    githubUrl: "https://github.com/indrasingh29",
    liveDemoUrl: "https://github.com/indrasingh29",
    category: "E-Commerce System",
    visualHighlight: {
      colorFrom: "#06b6d4",
      colorTo: "#3b82f6",
      icon: "ShoppingCart",
    },
  },
];

export const certificationsData = [
  {
    id: "aws-cloud-101",
    title: "AWS Educate Introduction to Cloud 101",
    issuer: "Amazon Web Services (AWS Educate)",
    status: "Verified Completion",
    type: "Cloud Computing Foundations",
    date: "Learned & Completed",
    description:
      "Comprehensive training covering cloud computing concepts, AWS core infrastructure, global architecture, compute, storage, virtual networks, and foundational cloud security principles.",
    skillsLearned: ["Cloud Fundamentals", "AWS Architecture", "Compute & S3 Storage", "Cloud Security"],
    badgeColor: "#FF9900", // AWS signature color
    badgeLabel: "AWS Training Badge",
  },
  {
    id: "java-dsa-track",
    title: "Java & Data Structures Specialization",
    issuer: "B.Tech Computer Science Engineering",
    status: "Active Academic & Practical Track",
    type: "Core Computer Science",
    date: "Ongoing Rigorous Practice",
    description:
      "Intensive study and hands-on coding in Java: Object-Oriented Programming, memory models, recursion, linear and non-linear data structures, searching and sorting algorithms.",
    skillsLearned: ["Java OOP", "DSA Problem Solving", "Time & Space Complexity", "Algorithmic Analysis"],
    badgeColor: "#ED8B00", // Java signature color
    badgeLabel: "Core CS Track",
  },
];

export const timelineData = [
  {
    period: "Phase 1: Foundations",
    title: "B.Tech in Computer Science & Core Programming",
    organization: "Computer Science Engineering",
    description:
      "Embarked on my Computer Science journey. Built solid programming fundamentals, memory concepts, discrete mathematics, and Object-Oriented Programming using Java.",
    tags: ["Java", "OOP", "Computer Science Fundamentals"],
    status: "Completed",
  },
  {
    period: "Phase 2: Algorithmic Rigor",
    title: "Data Structures & Algorithms in Java",
    organization: "Problem Solving Practice",
    description:
      "Deepened algorithmic capabilities by implementing core data structures (Arrays, Linked Lists, Stacks, Queues, Binary Trees) and mastering search, sort, and recursion techniques in Java.",
    tags: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
    status: "Completed & Ongoing",
  },
  {
    period: "Phase 3: Web Foundations",
    title: "Frontend Engineering & Modern JavaScript",
    organization: "Web Development",
    description:
      "Mastered HTML5 semantics, modern CSS3 layout paradigms (Flexbox, Grid), and modern JavaScript ES6+ (Promises, Async/Await, DOM manipulation, modular architecture).",
    tags: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"],
    status: "Completed",
  },
  {
    period: "Phase 4: Full-Stack MERN & QuickKart",
    title: "Building Real-World Full-Stack Applications",
    organization: "Personal Projects",
    description:
      "Mastered React component architecture, hooks, Node.js server programming, Express.js middleware, and MongoDB document modeling. Built QuickKart, an e-commerce platform with customer, owner, and rider workflows.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "QuickKart"],
    status: "Completed",
  },
  {
    period: "Phase 5: Cloud & Advanced Projects",
    title: "AWS Educate Cloud 101 & Job Portal Architecture",
    organization: "Cloud & Enterprise Practice",
    description:
      "Completed AWS Educate Introduction to Cloud 101 training badge. Architected the Job & Internship Portal with multi-role workflows and deployed cloud instances via Render and MongoDB Atlas.",
    tags: ["Job Portal", "AWS Educate", "Render", "MongoDB Atlas"],
    status: "Completed",
  },
  {
    period: "Present: Horizon & Opportunities",
    title: "Targeting Software Developer Internships",
    organization: "Career Aspirations",
    description:
      "Actively seeking summer and fall internships and entry-level developer roles. Continuing to build impactful projects, refine DSA skills, and prepare for technical interviews.",
    tags: ["Software Engineering", "Full-Stack Developer", "Internships 2025-2026"],
    status: "Current Milestone",
  },
];
