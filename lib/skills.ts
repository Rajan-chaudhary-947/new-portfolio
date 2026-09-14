export type SkillGroup = {
  name: string;
  icon: "code" | "layout" | "server" | "database" | "cloud" | "tools";
  skills: string[];
};

export const skillImages: Record<string, string> = {
  JavaScript: "javascript.png",
  Java: "java.png",
  TypeScript: "typescript.png",
  C: "c.png",
  HTML5: "html.png",
  CSS3: "css.png",
  "React.js": "reactjs.png",
  "Next.js": "nextjsLogo.jpg",
  "Tailwind CSS": "tailwindcss.png",
  Bootstrap: "bootstrap.png",
  EJS: "ejs.png",
  Zustand: "zustand.png",
  Redux: "redux.png",
  "Material UI": "materialui.png",
  "Node.js": "nodejs.png",
  "Express.js": "express.png",
  "Google OAuth": "googleLogo.jpg",
  WebSockets: "websocketLogo.png",
  Razorpay: "razorLogo.png",
  MySQL: "mysql.png",
  MongoDB: "mongodb.png",
  Mongoose: "mongooseLogo.jpg",
  PostgreSQL: "postgresql.webp",
  Redis: "redis.png",
  Supabase: "supabaseLogo.png",
  Cloudinary: "cloudnaryLogo.jpeg",
  Vercel: "vercel.png",
  Netlify: "netlify.png",
  Docker: "dockerLogo.png",
  Git: "git.png",
  GitHub: "github.png",
  "VS Code": "vscode.png",
  "MongoDB Compass": "mc.png",
  Postman: "postman.png",
  Eraser: "excalidraw.png",
  ExcaliDraw: "excalidraw.png",
  "Data Structures & Algorithms": "java.png",
  "Object-Oriented Programming": "java.png",
  "Database Management Systems": "mongodb.png",
  "Web Development": "reactjs.png",
  
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    icon: "code",
    skills: ["JavaScript", "Java", "TypeScript", "C"],
  },
  {
    name: "Frontend",
    icon: "layout",
    skills: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "EJS", "Zustand", "Redux", "Material UI"],
  },
  {
    name: "Backend & APIs",
    icon: "server",
    skills: ["Node.js", "Express.js", "REST APIs", "Google OAuth", "JWT", "WebSockets", "Socket.IO", "Razorpay"],
  },
  {
    name: "Databases & Data",
    icon: "database",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Mongoose", "Prisma"],
  },
  {
    name: "Cloud & Delivery",
    icon: "cloud",
    skills: ["Supabase", "Cloudinary", "Vercel", "Render", "Netlify", "Docker"],
  },
  {
    name: "Developer tools",
    icon: "tools",
    skills: ["Git", "GitHub", "VS Code", "MongoDB Compass", "Postman", "Eraser", "ExcaliDraw"],
  },
  {
    name: "Coursework",
    icon: "code",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Web Development", "Computer Networks", "Operating Systems", "Software Engineering", "Internet of Things", "System Design", "Distributed Systems", "Generative AI"],
  },
];
