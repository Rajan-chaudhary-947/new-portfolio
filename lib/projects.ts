export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  stack: string[];
  highlights: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const featuredProjects: Project[] = [
  {
    slug: "dotconnect-establishing-relations",
    name: "dotConnect: Establishing Relations",
    eyebrow: "Student · Alumni Platform",
    description:
      "A full-stack community platform connecting students and alumni through profiles, events, opportunities, mentorship, messaging and resource sharing.",
    longDescription:
      "dotConnect is a MERN-based student–alumni networking platform designed to reduce the manual overhead of maintaining alumni communities while making mentorship, opportunities, and community interaction easier to discover.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Tailwind CSS",
      "Socket.IO",
      "JWT",
    ],
    highlights: [
      "JWT authentication with three-level role-based access control.",
      "Redis caching for frequently accessed platform data.",
      "Profiles, alumni verification, events, jobs/internships, mentorship, chat, notifications, feedback, and admin workflows.",
      "AI-assisted search concept for finding users and platform content.",
    ],
    image: "/assets/images/dotConnect.png",
    githubUrl: "https://github.com/Rajan-chaudhary-947/dotConnect",
    featured: true,
  },
  {
    slug: "chit-chat",
    name: "Chit-Chat",
    eyebrow: "Realtime Social Chat",
    description:
      "A realtime MERN chat platform with verified accounts, connection-based messaging, presence, profile pages and live notifications.",
    longDescription:
      "Chit-Chat focuses on realtime conversations that remain intentional: users verify their email, connect with others, exchange messages instantly, see online presence and receive live notifications.",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Zustand",
      "Cloudinary",
      "Nodemailer",
      "JWT",
    ],
    highlights: [
      "Email OTP verification before a live session.",
      "JWT-protected backend routes and bcrypt password hashing.",
      "Socket.IO messaging, online presence, connection requests, and live notifications.",
      "Cloudinary-backed profile and chat media uploads.",
    ],
    image: "/assets/images/chatApp.png",
    liveUrl: "https://chit-chat-rs-annl.onrender.com/",
    githubUrl: "https://github.com/Rajan-chaudhary-947/chit-chat",
    featured: true,
  },
  {
    slug: "agroflow",
    name: "AgroFlow",
    eyebrow: "Agriculture Commerce + POS",
    description:
      "A full-stack agriculture e-commerce and point-of-sale platform for products, inventory, billing, orders, payments and admin operations.",
    longDescription:
      "AgroFlow brings storefront, POS-style billing, inventory, order tracking and administration into one agriculture-focused application backed by PostgreSQL.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Razorpay",
    ],
    highlights: [
      "Product, inventory, cart, checkout, billing, order tracking, and admin workflows.",
      "Razorpay integration for UPI/card payment processing.",
      "REST APIs covering product, inventory, cart, order, billing, and administration.",
      "PostgreSQL-backed relational data model with Prisma.",
    ],
    image: "/assets/images/agroflow.png",
    featured: true,
  },
  {
    slug: "airbnb",
    name: "Airbnb",
    eyebrow: "Full-Stack Clone",
    description:
      "An Airbnb-style full-stack project exploring listings, authentication, sessions, image uploads and server-rendered web flows.",
    longDescription:
      "The repository is a full-stack Airbnb clone built around Express, MongoDB/Mongoose, EJS, Passport-based authentication, sessions, validation and Cloudinary image handling.",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Passport",
      "Cloudinary",
      "Joi",
    ],
    highlights: [
      "Express routing and controller structure.",
      "MongoDB persistence with Mongoose schemas.",
      "Passport local authentication and express-session.",
      "Cloudinary + Multer based image upload flow and Joi validation.",
    ],
    image: "/assets/images/airbnb.png",
    githubUrl: "https://github.com/Rajan-chaudhary-947/Airbnb",
    featured: false,
  },
  {
    slug: "rajan-portfolio-next",
    name: "Rajan Chaudhary Portfolio",
    eyebrow: "Personal Portfolio",
    description:
      "A Next.js portfolio presenting full-stack projects, engineering experience, skills, certifications, live work samples, and an integrated Gemini assistant.",
    longDescription:
      "This portfolio is a Next.js App Router project designed to make Rajan's engineering work easy to browse, understand, and verify through project details, live links, source repositories, and an AI-powered Gemini assistant that answers questions about his experience, projects, and skills in real time.",
    stack: ["Next.js", "React", "TypeScript", "Gemini", "CSS", "Vercel"],
    highlights: [
      "Responsive, project-focused portfolio experience with a polished design system.",
      "Server-rendered GitHub repository discovery with revalidation and structured project pages.",
      "Integrated Gemini assistant for conversational portfolio guidance and project discovery.",
      "Metadata, sitemap, JSON-LD, and SEO-first structure for search and discoverability.",
    ],
    image: "/assets/images/portfolio.png",
    liveUrl: "https://rajanchaudhary947.vercel.app",
    githubUrl: "https://github.com/Rajan-chaudhary-947/new-portfolio",
    featured: false,
  },
];

export const assessmentProjects: Project[] = [
  {
    slug: "lld-practice-platform",
    name: "DesignLoop: LLD Practice Platform",
    eyebrow: "Company Assessment · LLD Practice",
    description:
      "A MERN and TypeScript platform for practicing low-level design through structured problems, saved drafts, submissions and explainable feedback.",
    longDescription:
      "DesignLoop was completed as a company assessment task on time, turning low-level design practice into a repeatable flow for choosing a problem, saving a solution, submitting it for evaluation and reviewing actionable feedback.",
    stack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "AI Integrations: Gemini"],
    highlights: [
      "Structured practice flow for Parking Lot, Vending Machine, and Elevator System problems.",
      "Draft saving, attempt history, retry handling, and explicit evaluation states.",
      "Deterministic scoring with optional Gemini-powered qualitative design review.",
      "Responsive light and dark modes with lifecycle and evaluator tests.",
    ],
    image: "/assets/images/designloop.png",
    githubUrl: "https://github.com/Rajan-chaudhary-947/lld-practice-platform",
  },
  {
    slug: "whatbytes-store",
    name: "WhatsByte Store",
    eyebrow: "Company Assessment · E-commerce",
    description:
      "A full-stack perfume storefront with product discovery, product details, reviews, authentication and MongoDB-backed administration.",
    longDescription:
      "WhatsByte Store was completed as a company assessment task on time, delivering a responsive e-commerce experience for luxury perfumes with a React frontend and an Express and MongoDB backend.",
    stack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS"],
    highlights: [
      "Responsive storefront with product listing and detail pages.",
      "MongoDB-backed product catalog with sample perfume data and reviews.",
      "REST endpoints for product and review management.",
      "Separate client and server structure ready for local development and deployment.",
    ],
    image: "/assets/images/whatsbyte.png",
    liveUrl: "https://whatbytes-store-phi.vercel.app",
    githubUrl: "https://github.com/Rajan-chaudhary-947/whatbytes-store",
  },
  {
    slug: "preselect",
    name: "Preselect",
    eyebrow: "Company Assessment · E-commerce",
    description:
      "A full-stack perfume shopping application with product browsing, detailed product pages, reviews, authentication and MongoDB persistence.",
    longDescription:
      "Preselect was completed as a company assessment task on time, building a modern perfume commerce workflow with a React and Tailwind client, an Express API and MongoDB models for products and reviews.",
    stack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS"],
    highlights: [
      "Product catalog, product details, reviews, and responsive shopping flows.",
      "Express controllers and routes for product and review operations.",
      "MongoDB persistence with seeded sample products and multiple image variants.",
      "Client-server structure with reusable React components and Tailwind styling.",
    ],
    image: "/assets/images/preselect.png",
    githubUrl: "https://github.com/Rajan-chaudhary-947/Preselect",
  },
];

export const certifications = [
  {
    name: "Programming in Java",
    issuer: "IIT Kharagpur",
    description: "A comprehensive course covering Java programming fundamentals, object-oriented concepts, Applet programming and practical applications using AWT & Swing.",
  },
  {
    name: "Theory of Computation",
    issuer: "IIT Hyderabad",
    description: "An advanced course exploring the theoretical foundations of computation, including automata theory, formal languages, and computational complexity.",
  },
  {
    name: "Introduction to Internet of Things",
    issuer: "IIT Kharagpur",
    description: "A foundational course on IoT concepts, architectures, protocols, and applications, focusing on the integration of physical devices with the internet.",
  },
  {
    name: "Data Structures and Algorithms using Java",
    issuer: "Coding Ninjas",
    description: "A well-structured course covering essential data structures and algorithms using Java, including arrays, linked lists, trees, graphs, dynamic programming and sorting algorithms.",
  },
  {
    name: "Basics of Java and OOPs with Java",
    issuer: "Coding Ninjas",
    description: "A beginner-friendly course introducing Java programming and object-oriented concepts, covering syntax, data types, control structures, and OOP principles.",
  },
];
