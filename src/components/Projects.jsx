import { useState } from 'react';

const projects = [
  {
    label: 'Full Stack · Portfolio CMS',
    title: 'CMS-QuickPortfolio',
    period: 'Jan 2026 – Jul 2026',
    desc: 'Built for the GitHub Finish-Up-A-Thon Challenge. Allows developers to manage their portfolio through a custom dashboard and automatically generate a public portfolio website.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/NandhuTee',
    featured: true,
  },
  {
    label: 'Full Stack · Video Conferencing',
    title: 'Real-Time Video Conference App',
    period: 'Oct 2025',
    company: 'Labmentix',
    desc: 'Real-time video conferencing with secure room-based calls, live chat (Socket.io), collaborative task board, shared whiteboard with undo/redo, screen share, mute/camera toggle.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/NandhuTee',
    live: 'https://vercel.app',
    featured: true,
  },
  {
    label: 'Full Stack · Freelance Marketplace',
    title: 'Fiverr Clone — Freelance Marketplace',
    period: 'Jul 2025 – Aug 2025',
    company: 'Labmentix',
    desc: 'Full-stack freelance marketplace with JWT auth, gig posting/browsing, real-time messaging via Socket.IO, and Stripe payment integration.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Stripe', 'Tailwind'],
    github: 'https://github.com/NandhuTee/freelance-client',
  },
  {
    label: 'Full Stack · E-Learning',
    title: 'Online Learning Platform',
    period: 'Nov 2025',
    company: 'Labmentix',
    desc: 'Complete e-learning platform with admin and student roles, JWT authentication, file/video upload via Multer, Supabase video storage, and Prisma ORM with PostgreSQL.',
    tech: ['Next.js', 'NestJS', 'Prisma ORM', 'PostgreSQL', 'Supabase', 'Multer'],
    github: 'https://github.com/NandhuTee',
  },
  {
    label: 'Full Stack · Digital Signature',
    title: 'Document Signature App',
    period: 'Jun 2025 – Jul 2025',
    company: 'Labmentix',
    desc: 'Secure digital signature app — upload, preview, and sign PDFs with typed, drawn, or image signatures. Drag-and-drop signature placement with resize and lock features.',
    tech: ['React', 'Node.js', 'MongoDB', 'PDF-Lib', 'Multer', 'JWT', 'Nodemailer'],
    github: 'https://github.com/NandhuTee',
  },
  {
    label: 'Full Stack · Ride Sharing',
    title: 'Uber Clone',
    period: 'Aug 2025 – Sep 2025',
    company: 'Labmentix',
    desc: 'Full-stack Uber clone with real-time ride booking, driver/rider roles, location tracking, and map integration built with the MERN stack.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    github: 'https://github.com/NandhuTee',
  },
  {
    label: 'Full Stack · File Management',
    title: 'Google Drive Clone',
    period: 'Aug 2025',
    company: 'Labmentix',
    desc: 'File management system with uploads, folder navigation, search, sorting, trash bin with restore, and Supabase database integration.',
    tech: ['React', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/NandhuTee',
  },
  {
    label: 'Full Stack · E-Commerce',
    title: 'E-Commerce Cart CRUD',
    period: 'Nov 2025',
    desc: 'Full-stack mock e-commerce cart with React frontend, Node.js/Express backend, MongoDB Atlas for order persistence, and FakeStoreAPI for product data.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'FakeStoreAPI'],
    github: 'https://github.com/NandhuTee/E-com-card-CURD-frontend',
  },
  {
    label: 'REST API · Testing Tool',
    title: 'API Testing Tool',
    period: 'Nov 2025 – Dec 2025',
    company: 'Labmentix',
    desc: 'Postman-like REST API testing tool demonstrating practical REST API usage, frontend–backend communication, and real-world API debugging workflows.',
    tech: ['React', 'Node.js', 'Express', 'REST API'],
    github: 'https://github.com/NandhuTee',
  },
  {
    label: 'MERN · Employee System',
    title: 'Employee Management System',
    period: 'Feb 2025 – Mar 2025',
    company: 'EduPi School',
    desc: 'Full-stack CRUD employee management system. Add, edit, view, and delete employee records with seamless REST API integration and React frontend.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Axios', 'Postman'],
    github: 'https://github.com/NandhuTee',
  },
  {
    label: 'AI · Chatbot',
    title: 'Ecommerce Chatbot (MERN + Flask)',
    period: 'Jun 2025',
    desc: 'AI-powered chatbot for gas cylinder booking via conversational interface. React (Vite) frontend with Flask backend AI processing.',
    tech: ['React', 'Flask', 'Python', 'Vite'],
    github: 'https://github.com/NandhuTee',
  },
  {
    label: 'UI/UX · Visual Editor',
    title: 'Node-Based Visual Editor',
    period: 'Jun 2025',
    desc: 'VectorShift Frontend Assessment — node-based editor where users visually create and connect components with drag-and-drop interactions.',
    tech: ['React', 'Tailwind CSS', 'Drag & Drop'],
    github: 'https://github.com/NandhuTee',
  },
  {
    label: 'UI/UX · SaaS Design',
    title: 'E-Commerce SaaS — Framer Design',
    period: 'Jul 2025',
    desc: 'Throttle Theory Assessment — responsive SaaS e-commerce website prototype using Framer. Focused on user flows, visual hierarchy, mobile responsiveness, and accessibility.',
    tech: ['Framer', 'UI/UX', 'Animation', 'Prototyping'],
    github: 'https://github.com/NandhuTee',
  },
  {
    label: 'React · Travel Clone',
    title: 'EaseMyTrip Clone',
    period: 'May 2024 – Aug 2024',
    company: 'Newton School',
    desc: 'Fully functional EaseMyTrip clone with flight/hotel booking, user auth, dynamic rendering, and responsive design across all components.',
    tech: ['React.js', 'React Router', 'Context API', 'Fetch API'],
    github: 'https://github.com/NandhuTee',
    live: 'https://easemytripclonenandhutee.netlify.app/',
  },
];

const FILTERS = ['All', 'Full Stack', 'React', 'UI/UX', 'AI'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = projects.filter(p => {
    if (active === 'All') return true;
    if (active === 'Full Stack') return p.label.includes('Full Stack') || p.label.includes('MERN');
    if (active === 'React') return p.tech.some(t => t.toLowerCase().includes('react'));
    if (active === 'UI/UX') return p.label.includes('UI/UX');
    if (active === 'AI') return p.label.includes('AI') || p.tech.includes('Flask');
    return true;
  });

  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" style={{ padding: '7rem 4rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Selected Work</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400 }}>
            {projects.length}+ Projects Built
          </h2>
        </div>
        <a href="https://github.com/NandhuTee" target="_blank" rel="noreferrer"
          style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
          View All on GitHub ↗
        </a>
      </div>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {FILTERS.map(f => (
          <button key={f} onClick={() => { setActive(f); setShowAll(false); }}
            style={{
              padding: '0.4rem 1.2rem', fontSize: '0.75rem', letterSpacing: '0.12em',
              textTransform: 'uppercase', border: '1px solid',
              borderColor: active === f ? 'var(--gold)' : 'var(--border)',
              background: active === f ? 'var(--gold)' : 'transparent',
              color: active === f ? 'var(--dark)' : 'var(--muted)',
              cursor: 'pointer', fontFamily: 'var(--sans)', transition: 'all 0.3s',
            }}>
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border)' }}>
        {visible.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>

      {/* Show more */}
      {filtered.length > 6 && (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button onClick={() => setShowAll(s => !s)}
            style={{
              padding: '0.9rem 2.5rem', border: '1px solid var(--border)',
              background: 'transparent', color: 'var(--muted)', fontFamily: 'var(--sans)',
              fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.color = 'var(--gold)'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--muted)'; }}
          >
            {showAll ? 'Show Less ↑' : `Show All ${filtered.length} Projects ↓`}
          </button>
        </div>
      )}
    </section>
  );
}

function ProjectCard({ label, title, period, company, desc, tech, github, live }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'var(--dark3)' : 'var(--dark2)',
        padding: '2.5rem',
        transition: 'background 0.3s',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 280,
        position: 'relative', overflow: 'hidden',
      }}
    >
      {hov && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--gold)' }} />}
      <div>
        <div style={{ fontSize: '0.67rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.7rem' }}>{label}</div>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.4rem', lineHeight: 1.3 }}>{title}</h3>
        {company && <div style={{ fontSize: '0.73rem', color: 'var(--muted)', marginBottom: '0.6rem' }}>@ {company} · {period}</div>}
        {!company && <div style={{ fontSize: '0.73rem', color: 'var(--muted)', marginBottom: '0.6rem' }}>{period}</div>}
        <p style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.75 }}>{desc}</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
          {tech.map(t => (
            <span key={t} style={{ fontSize: '0.63rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--border)', padding: '0.18rem 0.5rem', color: 'var(--muted)' }}>{t}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.2rem' }}>
          <a href={github} target="_blank" rel="noreferrer"
            style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
            GitHub ↗
          </a>
          {live && (
            <a href={live} target="_blank" rel="noreferrer"
              style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
