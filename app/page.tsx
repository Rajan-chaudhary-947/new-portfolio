import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { AnimatedBorderLink } from "@/components/AnimatedBorderLink";
import { assessmentProjects, certifications, featuredProjects } from "@/lib/projects";
import { skillGroups, skillImages } from "@/lib/skills";
import { site } from "@/lib/site";

export const metadata = {
  title: "Rajan Chaudhary | Full-Stack Developer",
  description:
    "Portfolio of Rajan Chaudhary, a full-stack developer building modern web applications with React, Next.js, TypeScript, Node.js, MongoDB, and PostgreSQL.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rajan Chaudhary | Full-Stack Developer",
    description:
      "Portfolio of Rajan Chaudhary, a full-stack developer building modern web applications with React, Next.js, TypeScript, Node.js, MongoDB, and PostgreSQL.",
    url: site.url,
    type: "website",
  },
};

export default function Home() {
  const projects = [...featuredProjects, ...assessmentProjects];
  const projectListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Rajan Chaudhary software development projects",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: `${site.url}/projects/${project.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfilePage", url: site.url, name: site.name, mainEntity: { "@id": `${site.url}/#person` } }} />
      <JsonLd data={projectListJsonLd} />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <aside className="hero-side" aria-label="Profile summary">
              <div className="profile-placeholder">
                {site.avatarSrc ? (
                  <>
                    <img src={site.avatarSrc} alt="Portrait of Rajan Chaudhary, full-stack developer" />
                    <div className="profile-hover" aria-live="polite">
                      <span className="profile-greeting">Hi, I&apos;m</span>
                      <span className="profile-role" aria-label="Roles">
                        <span className="role-word">Coder</span>
                        <span className="role-word">Software Engineer</span>
                        <span className="role-word">Full Stack Developer</span>
                      </span>
                    </div>
                  </>
                ) : <span>Portrait / profile visual</span>}
              </div>
            </aside>

            <div className="hero-copy-wrap">
              <h1 id="hero-title">I code, <span>therefore</span>, I am</h1>
              <p className="hero-copy">
                I&apos;m Rajan Chaudhary, a Computer Science graduate focused on building reliable web applications across the frontend, backend, data layer, and deployment stack.
              </p>
              <div className="hero-actions">
                <AnimatedBorderLink className="btn primary" href="/work">Explore my work <Icon name="arrow" /></AnimatedBorderLink>
                <AnimatedBorderLink className="btn secondary" href={site.github} target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</AnimatedBorderLink>
                <AnimatedBorderLink className="btn secondary" href={site.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</AnimatedBorderLink>
                <AnimatedBorderLink className="btn secondary" href={site.resumeHref || "/about"}>Resume</AnimatedBorderLink>
              </div>
            </div>
          </div>
        </section>

        <div className="proof-strip" aria-label="Technology focus">
          <div className="container proof-grid">
            <div className="proof"><strong>Frontend</strong><span>HTML5 · CSS3 · React.js · Next.js · Tailwind CSS · Zustand · Redux</span></div>
            <div className="proof"><strong>Backend</strong><span>Node.js · Express.js · REST APIs · Google OAuth · JWT · Socket.IO · Razorpay</span></div>
            <div className="proof"><strong>Data</strong><span>MySQL · PostgreSQL · MongoDB · Mongoose</span></div>
            <div className="proof"><strong>Delivery</strong><span>Supabase · Cloudinary · Vercel · Render · Netlify · Docker</span></div>
          </div>
        </div>


        <section className="section" id="work" aria-labelledby="work-title">
          <div className="container">



            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>Full Stack Developer Intern</h3>
                  <p className="experience-company">Metaphile · Noida, India</p>
                </div>

                <div className="experience-date">
                  Jan 2025 — Jun 2025
                </div>
              </div>

              <div className="experience-content">
                <p>
                  Worked on production web applications using React.js, Next.js, TypeScript,
                  Node.js, Express.js, MongoDB, and PostgreSQL, contributing across frontend,
                  backend, database, testing and release workflows.
                </p>

                <ul>
                  <li>
                    Developed and shipped production features using
                    <strong>
                      {" "}React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB and
                      PostgreSQL
                    </strong>
                    , contributing across frontend, backend and database layers.
                  </li>

                  <li>
                    Built reusable React.js components and responsive interfaces,
                    integrating REST APIs with client-side validation and protected
                    application workflows.
                  </li>

                  <li>
                    Implemented backend services and RESTful APIs with CRUD endpoints,
                    authentication, business logic and MongoDB schema design using
                    Mongoose.
                  </li>

                  <li>
                    Collaborated with the development team on feature implementation,
                    Postman API testing, debugging and Git/GitHub code-review
                    workflows to deliver releases on schedule.
                  </li>
                </ul>

                <div className="experience-tech">
                  <span>React.js</span>
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                  <span>PostgreSQL</span>
                  <span>REST APIs</span>
                  <span>Postman</span>
                  <span>Git</span>
                  <span>GitHub</span>
                </div>
              </div>
            </div>

            {/* Existing Projects */}
            <div className="work-projects">
              <SectionHeading
                eyebrow="02 · Selected projects"
                title="Projects which helps me to enhance my skills."
                description="Each project has helped me strengthen my skills by turning practical ideas into working full-stack experiences and applying what I learned across frontend interfaces, backend APIs, databases, and deployment."
              />

              <div className="project-grid">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>

          </div>
        </section>
        <section className="section alt" id="github" aria-labelledby="github-title">
          <div className="container">
            <SectionHeading eyebrow="02 · Company assessment tasks" title="Multiple assessments completed on time." description="These company assessment tasks were completed on time by turning real requirements into working full-stack applications with clear workflows, practical architecture, and maintainable implementation." />
            <div className="project-grid">
              {assessmentProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="container">
            <SectionHeading
              eyebrow="03 · Skills"
              title="Core skills I use to build dependable products."
              description="From user interfaces to backend systems and deployment, these are the tools and disciplines I use to turn requirements into working software."
            />
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div className="skill-card" key={group.name}>
                  <h3><Icon name={group.icon} aria-hidden="true" /> {group.name}</h3>
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span className="tag" key={skill}>
                        {skillImages[skill] ? <img src={`/assets/skills/${skillImages[skill]}`} alt={`${skill} icon`} aria-hidden="true" /> : <Icon name={group.icon} aria-hidden="true" />}
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="credentials" aria-labelledby="credentials-title">
          <div className="container">
            <SectionHeading
              eyebrow="04 · Credentials"
              title="Learning, discipline and hands-on problem solving behind the work."
              description="My credentials reflect a foundation in computer science, structured learning, and continuous growth through practical engineering challenges."
            />
            <div className="credentials-grid">
              <div className="card">
                <h3>Certifications</h3>
                <p className="card-intro">Focused learning milestones that strengthened both my fundamentals and my real-world software judgment.</p>
                {certifications.map((cert) => (
                  <div className="cert-row" key={cert.name}>
                    <div><h3>{cert.name}</h3><span>{cert.issuer}</span><p>{cert.description}</p></div>
                  </div>
                ))}
              </div>
              <div className="card">
                <h3>Education & achievement</h3>
                <p className="card-intro">Formal training and problem-solving practice that shaped my engineering mindset and execution style.</p>
                <div className="timeline">
                  <div className="timeline-item"><strong>B.Tech in Computer Science & Engineering</strong><span>IIMT University · Meerut · 2022–2026</span><p>CGPA: 7.85</p></div>
                  <div className="timeline-item"><strong>Problem solving</strong><span>LeetCode + Coding Ninjas</span><p>Solved 100+ problems across both platforms.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="container">
            <SectionHeading eyebrow="05 · About" title="A developer profile designed for people who actually read it." />
            <div className="about-grid">
              <div className="about-card">
                <h3>How I work</h3>
                <p>I like turning product requirements into clean interfaces, structured APIs, useful data models, and deployment-ready applications. My project work spans realtime systems, commerce workflows, community platforms, authentication, caching, payments, and relational as well as document databases.</p>
                <p>Look past the screens and follow the thinking: each project turns a real requirement into clear decisions, working systems, and software built to move from idea to impact.</p>
              </div>
              <div className="about-card">
                <h3>Academic foundation</h3>
                <p>My core coursework includes Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, System Design, Computer Networks, Operating Systems, Distributed Systems, Internet of Things, Web Tools & Technologies and Generative AI.</p>
                <div className="info-table">
                  <div className="info-line"><span>Location</span><span>India</span></div>
                  <div className="info-line"><span>Target</span><span>Software Engineering · Full Stack · Frontend · Backend</span></div>
                  <div className="info-line"><span>Current stack</span><span>JavaScript / TypeScript / React / Next.js / Node.js / PostgreSQL / MongoDB</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <div className="contact-box">
              <div>
                <span className="eyebrow">06 · Contact</span>
                <h2 id="contact-title">Let&apos;s build something useful.</h2>
                <p>For software engineering opportunities, collaborations or project conversations, Love to hear from you!</p>
              </div>
              <AnimatedBorderLink className="btn primary" href={`mailto:${site.email}`}><Icon name="mail" /> Email Rajan</AnimatedBorderLink>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">

        <div className="social-links">
          {[
            { icon: "code" as const, label: "Code360", link: "https://www.naukri.com/code360/profile/RajanS947" },
            { icon: "x" as const, label: "X", link: "https://x.com/Rajanch947" },
            { icon: "linkedin" as const, label: "LinkedIn", link: "https://www.linkedin.com/in/rajanchaudhary947" },
            { icon: "instagram" as const, label: "Instagram", link: "https://www.instagram.com/chaudhary_rajan_947" },
            { icon: "code" as const, label: "LeetCode", link: "https://leetcode.com/u/chaudharyrajan947" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={item.label}
            >
              <Icon name={item.icon} aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="container footer-wrap"><span>© {new Date().getFullYear()} Rajan Chaudhary</span></div>
      </footer>
    </>
  );
}
