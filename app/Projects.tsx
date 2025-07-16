import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* Top bar with title left and nav right */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', position: 'absolute', top: 0, left: 0, padding: '40px 60px 0 60px', boxSizing: 'border-box' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', textAlign: 'left' }}>Web Developer</h1>
        <nav style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40 }}>
          <Link href="/" style={{ fontSize: '1.2rem' }}>Home</Link>
          <Link href="/about" style={{ fontSize: '1.2rem' }}>About</Link>
          <Link href="/projects" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Projects</Link>
        </nav>
      </div>
      {/* Centered main content */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <section>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 10 }}>My Projects</h2>
            <p>This is the Projects page. Check out some of the work I have done!</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Projects; 