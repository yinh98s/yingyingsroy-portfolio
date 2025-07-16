'use client';

import Link from "next/link";

const Home: React.FC = () => {
  const handleHireMeClick = () => {
    window.location.href = "mailto:yingyingsroy@gmail.com?subject=Hire%20Yingying%20Sroy";
  };

  return (
    <main style={{ position: 'relative', minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* Top bar with title left and nav right */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', position: 'absolute', top: 0, left: 0, padding: '40px 60px 0 60px', boxSizing: 'border-box' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', textAlign: 'left' }}>Web Developer</h1>
        <nav style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40 }}>
          <Link href="/" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Home</Link>
          <Link href="/about" style={{ fontSize: '1.2rem' }}>About</Link>
          <Link href="/projects" style={{ fontSize: '1.2rem' }}>Projects</Link>
        </nav>
      </div>
      {/* Main content row: statement, then three boxes in a column, then image */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%', height: '100%' }}>
        {/* Left: Statement and three boxes */}
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', marginLeft: '10vw' }}>
          <section>
            <h3 style={{ fontSize: '2.5rem', marginBottom: 10, textAlign: 'left' }}>Hello I am</h3>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 10, textAlign: 'left' }}>Yingying Sroy</h2>
            <h3 style={{ fontSize: '2.5rem', marginBottom: 10, textAlign: 'left' }}>Computer Science fresh graduate</h3>
            <p style={{ textAlign: 'left' }}>I am a fresh graduate. I am looking for a suitable job for my skill sets.My hobby are K-drama, reading books, and studying new things in IT world.</p>
            <button style={{ marginTop: 24, padding: '14px 36px', fontSize: '1.2rem', fontWeight: 'bold', color: 'white', background: '#ff8800', border: 'none', borderRadius: 8, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', transition: 'background 0.2s' }}
              onClick={handleHireMeClick}
              onMouseOver={e => (e.currentTarget.style.background = '#ff9900')}
              onMouseOut={e => (e.currentTarget.style.background = '#ff8800')}
            >
              Hire Me
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 32 }}>
              <div style={{ padding: '24px 32px', background: 'white', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', maxWidth: 320, border: '2px solid #ff8800' }}>
                <p style={{ color: '#333', fontSize: '1.1rem', margin: 0 }}>
                  I am passionate about web development and always eager to learn new technologies. My goal is to contribute to innovative projects and grow as a developer. Let's connect and create something amazing together!
                </p>
              </div>
              <div style={{ padding: '24px 32px', background: 'white', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', maxWidth: 320, border: '2px solid #ff8800' }}>
                <p style={{ color: '#333', fontSize: '1.1rem', margin: 0 }}>
                  I enjoy collaborating with others and believe that teamwork leads to the best results. I am open to new opportunities and excited to start my professional journey in tech!
                </p>
              </div>
              <div style={{ padding: '24px 32px', background: 'white', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', maxWidth: 320, border: '2px solid #ff8800' }}>
                <p style={{ color: '#333', fontSize: '1.1rem', margin: 0 }}>
                  I am committed to continuous self-improvement and value feedback as a way to grow. My curiosity drives me to explore new ideas and technologies in the ever-evolving IT landscape.
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* Right: Profile image */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <img src="/profile-placeholder.jpg" alt="Profile" style={{ width: 260, height: 260, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }} />
        </div>
      </div>
    </main>
  );
};

export default Home; 