'use client';

import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <main style={{ minHeight: '100vh', width: '100vw', background: 'orange' }}>
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
      {/* Project boxes with alternating left/right positioning */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 'calc(100vh - 120px)', width: '100%' }}>
        {/* First box - left */}
        <div style={{ padding: '40px 48px', background: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.12)', maxWidth: 600, border: '2px solid #ff8800', textAlign: 'center', marginLeft: '8vw', marginBottom: 32, marginTop: 0 }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>2D – Game (Using the Gaming API)</h2>
          <div style={{ color: '#333', fontSize: '1.15rem', margin: 0, textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 12 }}>
              <span style={{ color: 'black', marginRight: 12, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
              <span>Period : Spring 2022</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 12 }}>
              <span style={{ color: 'black', marginRight: 12, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
              <span>Developed a 2D game utilizing the provided gaming API as per the assignment instructions</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 12 }}>
              <span style={{ color: 'black', marginRight: 12, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
              <span>Crafted over 2000+ lines of Java code, using algorithms and data structures to facilitate character movement in four directions: left, right, up, and down</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 12 }}>
              <span style={{ color: 'black', marginRight: 12, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
              <span>Implemented collision detection mechanisms to ensure seamless interaction between avatar and the environment which enhanced the gaming experience</span>
            </div>
            <div style={{ marginTop: 24, textAlign: 'left' }}>
              <button style={{ background: '#2b9ca3', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', borderRadius: 4, padding: '10px 28px', cursor: 'pointer' }}>
                Check here
              </button>
            </div>
          </div>
        </div>
        {/* Second box - right */}
        <div style={{ padding: '40px 48px', background: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.12)', maxWidth: 600, border: '2px solid #ff8800', textAlign: 'center', marginLeft: 'auto', marginRight: '8vw', marginBottom: 32 }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>Form-Based web (teamwork)</h2>
          <div style={{ color: '#333', fontSize: '1.15rem', margin: 0, textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 12 }}>
              <span style={{ color: 'black', marginRight: 12, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
              <span>Period : Spring 2022</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 12 }}>
              <span style={{ color: 'black', marginRight: 12, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
              <span>Collaborated with a team of 4 students to develop a user-friendly webform allowing users to effectively store, update, remove, and save personal information</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 12 }}>
              <span style={{ color: 'black', marginRight: 12, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
              <span>Developed over 1000+ lines of code using React JS for the frontend implementation, making sure the webform is intuitive and responsive user interface</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 12 }}>
              <span style={{ color: 'black', marginRight: 12, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
              <span>Ensured an effective connection between the frontend and backend systems by utilizing Spring Boot method</span>
            </div>
            <div style={{ marginTop: 24, textAlign: 'left' }}>
              <button style={{ background: '#2b9ca3', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', borderRadius: 4, padding: '10px 28px', cursor: 'pointer' }}>
                Check here
              </button>
            </div>
          </div>
        </div>
        {/* Third box - left */}
        <div style={{ padding: '40px 48px', background: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.12)', maxWidth: 600, border: '2px solid #ff8800', textAlign: 'center', marginLeft: '8vw', marginBottom: 40 }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>Web Development Project (Senior Project)</h2>
          <div style={{ color: '#333', fontSize: '1.15rem', margin: 0, textAlign: 'left' }}>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: 'black', marginRight: 12, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
              <span>Period : Spring 2022</span>
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: 'black', marginRight: 12, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
              <span>Collaborated with a team of 4 students to develop a user-friendly webform allowing users to effectively store, update, remove, and save personal information</span>
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: 'black', marginRight: 12, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
              <span>Developed over 1000+ lines of code using React JS for the frontend implementation, making sure the webform is intuitive and responsive user interface</span>
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: 'black', marginRight: 12, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
              <span>Ensured an effective connection between the frontend and backend systems by utilizing Spring Boot method</span>
            </div>
            <div style={{ marginTop: 24, textAlign: 'left' }}>
              <button style={{ background: '#2b9ca3', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', borderRadius: 4, padding: '10px 28px', cursor: 'pointer' }}>
                Check here
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Contact links at bottom of page */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 60, padding: '40px 60px', marginTop: 40 }}>
        <a href="mailto:y.sroy.job@gmail.com" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>Email</a>
        <a href="https://linkedin.com/in/yingyingsroy" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>LinkedIn</a>
        <a href="https://github.com/yinh98s" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>GitHub</a>
      </div>
    </main>
  );
};

export default Projects; 