const experiences = [
  {
    role: 'Web Development Intern',
    company: 'Labmentix Edtech Pvt Ltd',
    period: 'Jun 2025 – Dec 2025 · 7 mos',
    location: 'Bengaluru, Karnataka · Remote',
    type: 'Internship',
    desc: 'Built end-to-end full stack products using MERN stack. Integrated secure APIs, JWT authentication, and PDF document generation. Collaborated using Git, Postman, and Figma; followed agile sprints.',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Git', 'Postman', 'Figma'],
    highlight: true,
  },
  {
    role: 'Web Development Intern / Web Developer',
    company: 'CodSoft',
    period: 'Jan 2024 – Feb 2024 · 2 mos',
    location: 'Kolkata, West Bengal · Remote',
    type: 'Internship',
    desc: 'Created dynamic frontend interfaces using JavaScript and React. Participated in daily stand-ups and Git-based workflows.',
    skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Git'],
  },
  {
    role: 'Assistant Professor',
    company: 'Annai College of Arts & Science',
    period: 'Jan 2023 – Dec 2024 · 1 yr',
    location: 'Kumbakonam, Tamil Nadu · On-site',
    type: 'Full-time',
    desc: 'Taught programming fundamentals and web technologies to undergraduate students. Designed curriculum and mentored students in core CS subjects.',
    skills: ['Teaching', 'Web Technologies', 'Curriculum Design', 'Mentoring'],
  },
  {
    role: 'Assistant Professor',
    company: 'PRIST University',
    period: 'Jun 2012 – Nov 2013 · 1 yr 6 mos',
    location: 'India · On-site',
    type: 'Full-time',
    desc: 'Taught computer science subjects at undergraduate level. Covered programming, data structures, and software engineering fundamentals.',
    skills: ['Teaching', 'Computer Science', 'Data Structures', 'Programming'],
  },
  {
    role: 'Technical Trainer',
    company: 'Private Company',
    period: 'Jul 2018 – Apr 2022 · 3 yrs 10 mos',
    location: 'India',
    type: 'Part-time',
    desc: 'Trained students in technical skills including web development, programming fundamentals, and software tools over nearly 4 years.',
    skills: ['Training', 'Web Development', 'Programming', 'Software Tools'],
  },
  {
    role: 'Graphic Designer',
    company: 'Freelance',
    period: 'Jun 2021 – Apr 2023 · 1 yr 11 mos',
    location: 'Remote',
    type: 'Freelance',
    desc: 'Created branding assets, UI mockups, and visual content for clients using Adobe creative suite and Figma.',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'UI Design'],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '7rem 4rem', background: 'var(--dark2)' }}>
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Work History</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400 }}>Experience &amp; Background</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
        {experiences.map((exp, i) => <ExpCard key={i} {...exp} />)}
      </div>
    </section>
  );
}

function ExpCard({ role, company, period, location, type, desc, skills, highlight }) {
  return (
    <div style={{
      background: highlight ? 'var(--dark3)' : 'var(--dark2)',
      padding: '2.5rem 3rem',
      borderLeft: highlight ? '2px solid var(--gold)' : '2px solid transparent',
      display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem',
    }}>
      <div>
        <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>{type}</div>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', marginBottom: '0.3rem' }}>{company}</div>
        <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{period}</div>
        <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.2rem' }}>{location}</div>
      </div>
      <div>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.8rem' }}>{role}</h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.2rem' }}>{desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {skills.map(s => (
            <span key={s} style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--border)', padding: '0.2rem 0.6rem', color: 'var(--muted)' }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
