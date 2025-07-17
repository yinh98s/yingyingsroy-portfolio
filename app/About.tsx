'use client';

import Link from "next/link";

const About: React.FC = () => {
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
      {/* Rectangle boxes positioned to the left */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 'calc(100vh - 120px)', width: '100%' }}>
        <div style={{ padding: '40px 48px', background: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.12)', maxWidth: 600, border: '2px solid #ff8800', textAlign: 'center', marginLeft: '8vw', marginBottom: 32, marginTop: 0 }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>About Me</h2>
          <div style={{ color: '#333', fontSize: '1.15rem', margin: 0, textAlign: 'left' }}>
            <p>As a recent graduate, I am actively seeking opportunities in web development. Alongside my job search, I've been passionate about building side projects to showcase my skills to potential employers. These projects not only demonstrate my technical abilities but also reflect my dedication and initiative in the field.</p>
            <p>I've carefully crafted each project to highlight different aspects of my skill set, ranging from front-end design to back-end development and everything in between. By creating these projects, I aim to convey my capabilities and readiness to contribute effectively to any team or project I become a part of.</p>
          </div>
        </div>
        {/* Four images left-aligned horizontally */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 32, marginLeft: '8vw', marginBottom: 32 }}>
          <img src="/profile-placeholder.jpg" alt="Pic 1" style={{ width: 120, height: 120, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
          <img src="/profile-placeholder.jpg" alt="Pic 2" style={{ width: 120, height: 120, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
          <img src="/profile-placeholder.jpg" alt="Pic 3" style={{ width: 120, height: 120, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
          <img src="/profile-placeholder.jpg" alt="Pic 4" style={{ width: 120, height: 120, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
        </div>
        {/* Images row centered between boxes */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 56, margin: '32px 0' }}>
          <img src="/profile-placeholder.jpg" alt="Profile Illustration" style={{ width: 80, height: 80, objectFit: 'contain', background: 'white', borderRadius: 12 }} />
          <img src="/java-logo.png" alt="Java" style={{ width: 60, height: 80, objectFit: 'contain', background: 'white', borderRadius: 12 }} />
          <img src="/database-icon.png" alt="Database" style={{ width: 60, height: 60, objectFit: 'contain', background: 'white', borderRadius: 12 }} />
          <img src="/react-logo.png" alt="React" style={{ width: 70, height: 70, objectFit: 'contain', background: 'white', borderRadius: 12 }} />
          <img src="/css-logo.png" alt="CSS3" style={{ width: 60, height: 80, objectFit: 'contain', background: 'white', borderRadius: 12 }} />
          <img src="/html-logo.png" alt="HTML5" style={{ width: 60, height: 80, objectFit: 'contain', background: 'white', borderRadius: 12 }} />
        </div>
        <div style={{ padding: '40px 48px', background: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.12)', maxWidth: 600, border: '2px solid #ff8800', textAlign: 'center', marginLeft: '8vw', marginBottom: 40 }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>Work Experience</h2>
          <div style={{ color: '#333', fontSize: '1.15rem', margin: 0, textAlign: 'left' }}>
            {/* First job */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', fontWeight: 'bold', marginBottom: 6 }}>
                <span style={{ color: 'black', marginRight: 12, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
                <span>Student Assistant and Grader / California State University – Sacramento</span>
              </div>
              <div style={{ marginLeft: 28, color: '#555', fontSize: '1.05rem' }}>
                <div style={{ marginBottom: 2 }}>- Period : 01/24/2022 - 05/31/2022</div>
                <div>- Assisted the professor in daily classroom operations, ensuring smooth instructional activities related to Java Programming</div>
                <div>- Performed grading duties for Java programming assignments, quizzes, and discussions, maintaining the consistency in evaluation in the classroom</div>
                <div>- Communicated course updates and announcements, ensuring students were all informed about any situation in the class</div>
              </div>
            </div>
            {/* Second job */}
            <div>
              <div style={{ display: 'flex', alignItems: 'flex-start', fontWeight: 'bold', marginBottom: 6 }}>
                <span style={{ color: 'black', marginRight: 12, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
                <span>Program Support and Student Assistant / California State Teachers’ Retirement System</span>
              </div>
              <div style={{ marginLeft: 28, color: '#555', fontSize: '1.05rem' }}>
                <div style={{ marginBottom: 2 }}>- Period : 07/11/2023 - 01/02/2024</div>
                <div>- Performed data entry for various forms and conduct audits as needed</div>
                <div>- Maintained databases of the clients, ensuring data accuracy and accessibility</div>
                <div>- Provided support for various computer-related tasks, including formatting documents such as converting webpages to Word, Word to PDF, etc.</div>
                <div>- Collaborated closely with team members to ensure the efficiency in administrative tasks, leading to the smooth operation of the CAISTRS department</div>
              </div>
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

export default About; 