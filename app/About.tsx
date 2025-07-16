'use client';

import Link from "next/link";

const About: React.FC = () => {
  return (
    <main style={{ minHeight: '100vh', width: '100vw', background: 'orange' }}>
      {/* Top bar with title left and nav right */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '40px 60px 0 60px', boxSizing: 'border-box', position: 'fixed', top: 0, left: 0, zIndex: 10, background: 'orange' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Web Developer</h1>
        <nav style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40 }}>
          <Link href="/" style={{ fontSize: '1.2rem' }}>Home</Link>
          <Link href="/about" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>About</Link>
          <Link href="/projects" style={{ fontSize: '1.2rem' }}>Projects</Link>
        </nav>
      </div>
      {/* Spacer to push content below the fixed top bar */}
      <div style={{ height: 120 }} />
      {/* Rectangle boxes positioned to the left */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 'calc(100vh - 120px)', width: '100%' }}>
        <div style={{ padding: '40px 48px', background: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.12)', maxWidth: 600, border: '2px solid #ff8800', textAlign: 'center', marginLeft: '8vw', marginBottom: 32, marginTop: 0 }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>About Me</h2>
          <ul style={{ color: '#333', fontSize: '1.15rem', margin: 0, textAlign: 'left', paddingLeft: 24 }}>
            <li>I am Yingying Sroy, a Computer Science fresh graduate passionate about technology, learning, and creative problem-solving.</li>
            <li>I enjoy K-drama, reading books, and exploring new trends in the IT world.</li>
            <li>My goal is to grow as a developer and contribute to meaningful projects.</li>
          </ul>
        </div>
        {/* Four images left-aligned horizontally */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 32, marginLeft: '8vw', marginBottom: 32 }}>
          <img src="/profile-placeholder.jpg" alt="Pic 1" style={{ width: 120, height: 120, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
          <img src="/profile-placeholder.jpg" alt="Pic 2" style={{ width: 120, height: 120, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
          <img src="/profile-placeholder.jpg" alt="Pic 3" style={{ width: 120, height: 120, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
          <img src="/profile-placeholder.jpg" alt="Pic 4" style={{ width: 120, height: 120, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
        </div>
        <div style={{ padding: '40px 48px', background: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.12)', maxWidth: 600, border: '2px solid #ff8800', textAlign: 'center', marginLeft: '8vw', marginBottom: 40 }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>My Values</h2>
          <ul style={{ color: '#333', fontSize: '1.15rem', margin: 0, textAlign: 'left', paddingLeft: 24 }}>
            <li>I believe in lifelong learning, teamwork, and integrity.</li>
            <li>I strive to bring a positive attitude and strong work ethic to every project.</li>
            <li>I am always open to feedback and new ideas.</li>
          </ul>
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

export default About; 