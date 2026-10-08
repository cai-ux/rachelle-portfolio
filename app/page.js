const navItems = ["Home", "About", "Education", "Projects", "Contact"];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="nav-inner">
          <a className="logo" href="#home">RR<span>.</span></a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-content">
          <p className="eyebrow">PROGRAMMER PROFILE</p>
          <h1>Hello, I&apos;m <span>Rachelle Raros!</span></h1>
          <p className="hero-text">
            Welcome to my personal portfolio! I am an Information Technology
            student who is interested in technology, programming, and creating
            digital solutions.
          </p>
          <p className="hero-text">
            I enjoy learning how applications and websites are developed and
            exploring how technology can make everyday tasks easier.
          </p>
          <div className="hero-buttons">
            <a className="button primary" href="#projects">View My Projects</a>
            <a className="button secondary" href="#contact">Contact Me</a>
          </div>
          <p className="tagline">Building Skills Today, Creating Solutions Tomorrow.</p>
        </div>
        <div className="hero-card">
          <div className="code-window">
            <div className="dots"><i></i><i></i><i></i></div>
            <pre>{`const student = {
  name: "Rachelle Raros",
  field: "Information Technology",
  focus: "Learning & Building",
  goal: "Become a capable programmer"
};`}</pre>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-heading">
          <p className="eyebrow">01 — ABOUT</p>
          <h2>A Little About Me</h2>
        </div>
        <div className="about-grid">
          <div>
            <p>My name is Rachelle Raros, and I am an aspiring programmer with an interest in software development and digital design. I enjoy discovering new concepts, experimenting with different ideas, and learning how technology works.</p>
            <p>I understand that becoming a good programmer takes patience, practice, and dedication. I am willing to face challenges, learn from mistakes, and continue improving my abilities as I prepare for my future career in the IT industry.</p>
          </div>
          <div className="interest-card">
            <h3>My Areas of Interest</h3>
            <ul>
              <li>Software Development</li>
              <li>Website Design and Development</li>
              <li>Computer Networking</li>
              <li>Application Development</li>
              <li>Technology and Innovation</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education" className="section blue-section">
        <div className="section-heading">
          <p className="eyebrow">02 — EDUCATION</p>
          <h2>My Educational Background</h2>
        </div>
        <div className="education-card">
          <div className="school-mark">NVSU</div>
          <div>
            <h3>Nueva Vizcaya State University</h3>
            <p className="degree">Bachelor of Science in Information Technology</p>
            <p>I am currently a third-year student at Nueva Vizcaya State University (NVSU), taking up a Bachelor of Science in Information Technology (BSIT), majoring in Network Design Management (NDM).</p>
            <p>My college experience allows me to explore programming, networking, database management, and system development. Through classroom activities and practical exercises, I continue to strengthen my technical knowledge.</p>
            <div className="education-details">
              <span><strong>School</strong>Nueva Vizcaya State University</span>
              <span><strong>Degree</strong>BS Information Technology</span>
              <span><strong>Major</strong>Network Design Management</span>
              <span><strong>Year Level</strong>Third Year College</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <p className="eyebrow">03 — PROJECTS</p>
          <h2>My Work and Activities</h2>
        </div>
        <div className="projects-grid">
          <article className="project-card">
            <span className="project-number">01</span>
            <h3>Personal Portfolio Website</h3>
            <p>A personal website designed to introduce myself and present my background, education, and interests.</p>
            <p>Developed using Next.js and CSS with a simple, clean, and responsive design.</p>
            <div className="tech-tags"><span>Next.js</span><span>CSS</span><span>Frontend</span></div>
          </article>
          <article className="project-card">
            <span className="project-number">02</span>
            <h3>System Development Project</h3>
            <p>An ongoing project created to practice the concepts I have learned in Information Technology.</p>
            <p>It focuses on applying programming knowledge, organizing system features, and understanding the software development process.</p>
            <div className="tech-tags"><span>Programming</span><span>Systems</span><span>In Progress</span></div>
          </article>
        </div>
        <div className="focus-box">
          <strong>Current Focus</strong>
          <span>Practicing</span><span>Developing</span><span>Improving</span>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-content">
          <p className="eyebrow">04 — CONTACT</p>
          <h2>Let&apos;s Connect</h2>
          <p>Thank you for visiting my portfolio! If you would like to discuss a project, share ideas, or connect with me about technology, feel free to reach out.</p>
          <div className="contact-list">
            <a href="mailto:rarosrachelle1106@gmail.com"><span>Email</span>rarosrachelle1106@gmail.com</a>
            <a href="tel:09358126709"><span>Phone</span>09358126709</a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Rachelle Raros. Built with Next.js & CSS.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}