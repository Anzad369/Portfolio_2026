import { ArrowDownRight, ArrowUpRight, Braces, Mail, MapPin, Phone, Sparkles } from 'lucide-react'

const projects = [
  { number: '01', title: 'Pathfinder AI', category: 'AI · Travel', stack: 'Next.js · NVIDIA LLM API', theme: 'pathfinder', mark: 'PATH\nFINDER', detail: 'A personalized trip planner that turns preferences into dynamic itineraries, powered by live LLM recommendations.', github: 'https://github.com/Anzad369/path_finder' },
  { number: '02', title: 'Grains', category: 'Blockchain · Supply chain', stack: 'React · Ethereum · Solidity', theme: 'grains', mark: 'grains', detail: 'A farm-to-consumer traceability concept using smart contracts for transparent, immutable transaction records.' },
  { number: '03', title: 'SwiftResume', category: 'Productivity · Web app', stack: 'React · jsPDF', theme: 'swift', mark: 'swift\nresume', detail: 'A one-click resume builder with custom client-side PDF generation, no server rendering required.', github: 'https://github.com/Anzad369/resume-builder' },
  { number: '04', title: 'LensView', category: 'Creative · Portfolio', stack: 'Next.js · Tailwind · Framer Motion', theme: 'lens', mark: 'LENS\nVIEW', detail: 'A responsive photography portfolio with fluid page transitions and carefully sequenced motion.', github: 'https://github.com/Anzad369/photography-website' },
  { number: '05', title: 'Currency Sage', category: 'Finance · Utility', stack: 'React · REST APIs', theme: 'currency', mark: 'USD ↔ EUR', detail: 'A real-time currency converter that keeps rates and conversions in sync as users type.' },
]

const skillGroups = [
  { title: 'Development', items: ['JavaScript', 'React', 'Next.js', 'Python', 'Java', 'Flutter', 'HTML & CSS'] },
  { title: 'Backend & data', items: ['SQL', 'MySQL', 'Firebase', 'REST APIs'] },
  { title: 'Tools & practice', items: ['Git', 'GitHub', 'Figma', 'Responsive design', 'Async JavaScript'] },
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Mohammed Anzad, home">MA<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Projects <span>05</span></a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a className="nav-contact" href="#contact">Get in touch <ArrowUpRight aria-hidden="true" /></a>
        </nav>
        <a className="mobile-contact" href="#contact" aria-label="Contact Mohammed"><ArrowUpRight /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-topline"><span>Electronics & Computer Engineering · 2025</span><span><MapPin aria-hidden="true" /> Kottayam, India <i className="live-dot" /></span></div>
        <h1>Hi, I&apos;m<br /><span className="hero-serif">Mohammed</span> <span className="hero-accent">Anzad.</span></h1>
        <div className="hero-bottom">
          <p>I build useful digital products with a curious mind for software, systems, and the details that make technology feel effortless.</p>
          <a href="#work" className="round-link" aria-label="Scroll to selected projects"><ArrowDownRight /></a>
          <div className="hero-index"><span>Currently learning</span><br />Full-stack development · KodNest</div>
        </div>
        <div className="hero-orbit" aria-hidden="true"><div className="orbit-core"><Braces /></div><span className="orbit-label">CODE · CURIOSITY · ENGINEERING ·</span></div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading"><div><span className="eyebrow">Selected projects · 2024—25</span><h2>Things I&apos;ve built<span className="heading-period">.</span></h2></div><span className="section-note">PRODUCT · FRONTEND · SYSTEMS<br />A mix of solo and team work</span></div>
        <div className="project-list">
          {projects.map((project) => <article className="project" key={project.number}>
            <div className={`project-art ${project.theme}`}><div className="art-grain" /><span className="art-kicker">{project.category}</span><span className="art-mark">{project.mark}</span><span className="art-shape" /><span className="project-open" aria-hidden="true"><ArrowUpRight /></span></div>
            <div className="project-meta"><span className="project-number">{project.number}</span><div className="project-title"><h3>{project.title}</h3><p>{project.detail}</p><div className="project-links"><span className="project-stack">{project.stack}</span>{project.github && <a className="project-github" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>GitHub <ArrowUpRight aria-hidden="true" /></a>}</div></div><ArrowUpRight className="project-arrow" aria-hidden="true" /></div>
          </article>)}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-label"><span className="eyebrow">A little about me</span><span className="about-spark" aria-hidden="true"><Sparkles /></span></div>
        <div className="about-content"><h2>Engineering thinking.<br /><span>Human-first building.</span></h2><p className="about-copy">I&apos;m an Electronics and Computer Engineering graduate with a strong foundation in hardware concepts, software development, and system logic. I enjoy connecting the dots between an idea and a working product — integrating APIs, shaping responsive interfaces, and solving problems across hardware and software.</p><div className="about-bottom"><div><span className="eyebrow">Education</span><ul className="education-list"><li><span><strong>B.Tech, Electronics & Computer Engineering</strong><small>St. Joseph&apos;s College of Engineering and Technology · Kottayam</small></span><em>2025 · CGPA 6.91</em></li><li><span><strong>Full-Stack Web Development</strong><small>KodNest Training Institute · Bengaluru</small></span><em>Nov 2025 — Present</em></li></ul></div><p className="about-aside">Curious by nature.<br />Careful by practice.</p></div></div>
      </section>

      <section className="experience-section" id="experience"><div className="section-heading"><div><span className="eyebrow">Where I&apos;ve contributed</span><h2>Experience<span className="heading-period">.</span></h2></div><span className="section-note">EARLY CAREER<br />Always learning</span></div><article className="experience-card"><div className="experience-date">MAY — JUN<br />2023</div><div className="experience-main"><div className="experience-heading"><h3>Flutter Intern</h3><span>Verdant IT Solutions · Kochi, Kerala</span></div><ul><li>Built responsive mobile UI features in Flutter and Dart for a client-facing application.</li><li>Created modular, reusable widgets to improve maintainability and rendering performance.</li></ul></div><span className="experience-mark">V.</span></article></section>

      <section className="skills-section"><div className="skills-heading"><span className="eyebrow">My toolkit</span><h2>Skills & tools<span className="heading-period">.</span></h2><p>A practical foundation, and always room to learn more.</p></div><div className="skill-groups">{skillGroups.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></section>

      <section className="recognition-section"><div className="recognition-title"><span className="eyebrow">A few milestones</span><h2>Recognition<span className="heading-period">.</span></h2></div><div className="recognition-list"><div><span className="recognition-index">01</span><p><strong>3rd Prize — Smart Design Challenge</strong><small>ASME EFx · SJCET Palai</small></p><ArrowUpRight aria-hidden="true" /></div><div><span className="recognition-index">02</span><p><strong>Fundamentals of Artificial Intelligence</strong><small>NPTEL · 8-week course</small></p><ArrowUpRight aria-hidden="true" /></div><div><span className="recognition-index">03</span><p><strong>Wheeled Mobile Robots</strong><small>NPTEL · 8-week course</small></p><ArrowUpRight aria-hidden="true" /></div><div><span className="recognition-index">04</span><p><strong>Additional training</strong><small>Full Stack Development using AI · Cuvette<br />Managerial Skill Development · IEEE SB SJCET</small></p><ArrowUpRight aria-hidden="true" /></div></div></section>

      <section className="contact-section" id="contact"><div className="contact-top"><span className="eyebrow">Open to entry-level opportunities</span><span className="contact-time">LET&apos;S BUILD SOMETHING GOOD <i className="live-dot" /></span></div><h2>Curious about<br /><span>what&apos;s next?</span></h2><a className="contact-cta" href="mailto:anzadpa03@gmail.com">Say hello <ArrowUpRight /></a><a className="resume-download" href="/Mohammed-Anzad-Resume.pdf" download>Download my CV <ArrowDownRight aria-hidden="true" /></a><div className="contact-bottom"><a className="wordmark footer-mark" href="#top">MA<span>.</span></a><span>Mohammed Anzad P A<br />Kottayam, Kerala, India</span><div className="social-links"><a href="mailto:anzadpa03@gmail.com"><Mail aria-hidden="true" /> anzadpa03@gmail.com</a><a href="tel:+918078833514"><Phone aria-hidden="true" /> +91 80788 33514</a></div><span className="copyright">© 2026 Mohammed Anzad<br />Built with care.</span></div></section>
    </main>
  )
}
