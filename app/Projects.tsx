'use client';

import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <main style={{ minHeight: '100vh', width: '100vw', background: 'orange' }}>
      {/* Top bar with title left and nav right */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '40px 60px 0 60px', boxSizing: 'border-box', position: 'fixed', top: 0, left: 0, zIndex: 10, background: 'orange' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Web Developer</h1>
        <nav style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40 }}>
          <Link href="/" style={{ fontSize: '1.2rem' }}>Home</Link>
          <Link href="/about" style={{ fontSize: '1.2rem' }}>About</Link>
          <Link href="/projects" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Projects</Link>
        </nav>
      </div>
      {/* Spacer to push content below the fixed top bar */}
      <div style={{ height: 120 }} />
      {/* Project boxes with alternating left/right positioning */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 'calc(100vh - 120px)', width: '100%' }}>
        {/* First box - left */}
        <div style={{ padding: '40px 48px', background: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.12)', maxWidth: 600, border: '2px solid #ff8800', textAlign: 'center', marginLeft: '8vw', marginBottom: 32, marginTop: 0 }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>E-Commerce Website</h2>
          <ul style={{ color: '#333', fontSize: '1.15rem', margin: 0, textAlign: 'left', paddingLeft: 24 }}>
            <li>Built a responsive e-commerce platform using React and Node.js</li>
            <li>Implemented user authentication and payment processing</li>
            <li>Integrated with a database for product management</li>
          </ul>
        </div>
        {/* Second box - right */}
        <div style={{ padding: '40px 48px', background: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.12)', maxWidth: 600, border: '2px solid #ff8800', textAlign: 'center', marginLeft: 'auto', marginRight: '8vw', marginBottom: 32 }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>Task Management App</h2>
          <ul style={{ color: '#333', fontSize: '1.15rem', margin: 0, textAlign: 'left', paddingLeft: 24 }}>
            <li>Developed a task management application with drag-and-drop functionality</li>
            <li>Used React hooks for state management</li>
            <li>Added real-time updates and collaborative features</li>
          </ul>
        </div>
        {/* Third box - left */}
        <div style={{ padding: '40px 48px', background: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.12)', maxWidth: 600, border: '2px solid #ff8800', textAlign: 'center', marginLeft: '8vw', marginBottom: 40 }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>Portfolio Website</h2>
          <ul style={{ color: '#333', fontSize: '1.15rem', margin: 0, textAlign: 'left', paddingLeft: 24 }}>
            <li>Created a personal portfolio using Next.js and TypeScript</li>
            <li>Implemented responsive design and modern UI components</li>
            <li>Added interactive elements and smooth animations</li>
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

export default Projects; 