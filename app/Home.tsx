'use client';

import Link from "next/link";

const Home: React.FC = () => {
  const handleHireMeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <main style={{ minHeight: '100vh', width: '100vw', background: 'linear-gradient(90deg, #f6e7d8 0%, #fca311 100%)', fontFamily: 'Inter, sans-serif' }}>
      {/* Top bar with title left and nav right */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '12px 60px 0 60px', boxSizing: 'border-box', background: 'linear-gradient(90deg, #fbe7c6 0%, #fca311 100%)', height: 56 }}>
        <h1 style={{ fontFamily: 'Fredoka One, Baloo 2, Arial Rounded MT Bold, Arial, sans-serif', fontSize: '2rem', fontWeight: 700, color: '#d6861a', margin: 0, letterSpacing: 2, textShadow: '2px 2px 2px #fff2cc, 2px 2px 4px #b36b00' }}>Web Developer</h1>
        <nav style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 32 }}>
          <Link href="/" style={{ fontWeight: 700, fontSize: '1rem', color: 'white', textDecoration: 'none', letterSpacing: 1 }}>Home</Link>
          <Link href="/about" style={{ fontWeight: 700, fontSize: '1rem', color: 'white', textDecoration: 'none', letterSpacing: 1 }}>About</Link>
          <Link href="/projects" style={{ fontWeight: 700, fontSize: '1rem', color: 'white', textDecoration: 'none', letterSpacing: 1 }}>Project</Link>
        </nav>
      </div>
      <div style={{ height: 64 }} />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%', padding: '60px 0 0 0' }}>
        {/* Left: Header text */}
        <div style={{ flex: 1, marginLeft: '6vw', maxWidth: 540 }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: '1.3rem', color: '#222', marginBottom: 8 }}>Hello I’m</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#fca311', marginBottom: 0, letterSpacing: 1 }}>
              YingYing SROY
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 600, color: '#222', marginBottom: 18 }}>Computer Science fresh graduate</div>
            <div style={{ fontSize: '1.1rem', color: '#555', marginBottom: 24, lineHeight: 1.7, maxWidth: 480 }}>
              I am a fresh graduate. I’m looking for a suitable job for my skill set. My hobby are K-drama, reading books, studying new thing in IT world.
            </div>
            <button style={{ background: '#fca311', color: 'white', fontWeight: 600, fontSize: '1.1rem', border: 'none', borderRadius: 6, padding: '12px 32px', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
              onClick={handleHireMeClick}
              onMouseOver={e => (e.currentTarget.style.background = '#ffb347')}
              onMouseOut={e => (e.currentTarget.style.background = '#fca311')}
            >
              Hire Me
            </button>
          </div>
        </div>
        {/* Right: Profile image in orange circle */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minWidth: 400 }}>
          <div style={{ width: 340, height: 340, borderRadius: '50%', background: '#fca311', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '6vw' }}>
            <img src="/profile-placeholder.jpg" alt="Profile" style={{ width: 260, height: 260, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }} />
          </div>
        </div>
      </div>
      {/* Info boxes row */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '6vw', marginTop: 40, gap: 24, width: '80vw', maxWidth: 1100 }}>
        {/* Education Box */}
        <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', padding: '32px 48px', marginBottom: 0, width: 800, maxWidth: '90vw', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -28, left: 0, background: '#7b4ede', color: 'white', fontWeight: 700, fontSize: '1.1rem', borderRadius: '8px 8px 0 0', padding: '6px 18px', letterSpacing: 0.5 }}>» Education</div>
          <div style={{ marginTop: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: 4 }}>
              <span>B.S Computer Science / California State University, Sacramento</span>
              <span style={{ fontWeight: 400, color: '#666' }}>Graduated: Dec 2023</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: 4 }}>
              <span>A.S Mathematics / San Joaquin Delta College, Stockton</span>
              <span style={{ fontWeight: 400, color: '#666' }}>Graduated: May 2021</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
              <span>A.S Computer Science / San Joaquin Delta College, Stockton</span>
              <span style={{ fontWeight: 400, color: '#666' }}>Graduated: May 2021</span>
            </div>
          </div>
        </div>
        {/* Certificates Box (right-aligned) */}
        <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', padding: '32px 48px', marginBottom: 0, width: 800, maxWidth: '90vw', position: 'relative', marginLeft: 'auto', marginRight: 0 }}>
          <div style={{ position: 'absolute', top: -28, left: 0, background: '#d14e9c', color: 'white', fontWeight: 700, fontSize: '1.1rem', borderRadius: '8px 8px 0 0', padding: '6px 18px', letterSpacing: 0.5 }}>» Certificates</div>
          <div style={{ marginTop: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span>Python for Everybody / Coursera - University of Michigan</span>
              <span style={{ color: '#666' }}>Completed: Jan 2023</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span>Information Technology Specialist - Networking / Udemy</span>
              <span style={{ color: '#666' }}>Completed: Feb 2024</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span>Introduction to Enterprise Security / Splunk</span>
              <span style={{ color: '#666' }}>Completed: Nov 2023</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>The Complete 2024 Web Development Bootcamp / Udemy</span>
              <span style={{ color: '#666' }}>Completed: May 2024</span>
            </div>
          </div>
        </div>
        {/* Courses Box */}
        <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', padding: '32px 48px', marginBottom: 0, width: 800, maxWidth: '90vw', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -28, left: 0, background: '#2b9c6e', color: 'white', fontWeight: 700, fontSize: '1.1rem', borderRadius: '8px 8px 0 0', padding: '6px 18px', letterSpacing: 0.5 }}>» Courses Relevant</div>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'row', gap: 40 }}>
            <div style={{ flex: 1 }}>
              <div>Computer Organization</div>
              <div>Introduction to System Program Unix</div>
              <div>Compatibility and Formal Language</div>
              <div>Operating System Principles</div>
              <div>Data Structure • Algorithms Analysis</div>
              <div>Computer System Attacks & Countermeasures</div>
            </div>
            <div style={{ flex: 1 }}>
              <div>Calculus I/II/III</div>
              <div>Programming Concept (Java I/II)</div>
              <div>Database Management System</div>
              <div>Computer Network Fundamental</div>
              <div>Database Management System</div>
            </div>
          </div>
        </div>
        {/* Technical Skills Box (right-aligned) */}
        <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', padding: '32px 48px', marginBottom: 0, width: 800, maxWidth: '90vw', position: 'relative', marginLeft: 'auto', marginRight: 0, marginTop: 32 }}>
          <div style={{ position: 'absolute', top: -28, left: 0, background: '#2176ae', color: 'white', fontWeight: 700, fontSize: '1.1rem', borderRadius: '8px 8px 0 0', padding: '6px 18px', letterSpacing: 0.5 }}>» Technical Skills & Knowledge</div>
          <div style={{ marginTop: 12 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Programming Languages: <span style={{ fontWeight: 400 }}>Python, C, C++, Java, HTML, CSS, JavaScript, Assembly, MySQL</span></div>
            <div style={{ fontWeight: 600 }}>Other technical knowledges: <span style={{ fontWeight: 400 }}>Unix/Linux, React.js, bootstrap5, SpringBoot</span></div>
          </div>
        </div>
      </div>
      {/* Contact links at bottom of page */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 60, padding: '40px 60px', marginTop: 40 }}>
        <a href="mailto:y.sroy.job@gmail.com" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>Email</a>
        <a href="https://www.linkedin.com/in/yingying-sroy" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>LinkedIn</a>
        <a href="https://github.com/yinh98s" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>GitHub</a>
      </div>
    </main>
  );
};

export default Home; 