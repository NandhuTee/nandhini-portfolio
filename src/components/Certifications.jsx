const education = [
  {
    institution: 'SASTRA University',
    degree: 'M.Tech — Computer Science',
    desc: 'Postgraduate engineering degree covering advanced algorithms, software engineering, system design, and research methodology.',
    skills: ['Algorithms', 'Software Engineering', 'System Design', 'Research'],
    icon: '🎓',
  },
  {
    institution: 'SASTRA University',
    degree: 'MCA — Master of Computer Applications',
    desc: 'Comprehensive postgraduate program in software development, database management, networking, and application design.',
    skills: ['Software Development', 'Database', 'Networking', 'OOP'],
    icon: '🎓',
  },
  {
    institution: 'Bharathidasan University',
    degree: 'B.Sc — Computer Science',
    desc: 'Undergraduate foundation covering programming fundamentals, data structures, mathematics, and operating systems.',
    skills: ['Programming', 'Data Structures', 'Mathematics', 'OS'],
    icon: '🎓',
  },
];

const certifications = [
  {
    institution: 'EduPiSchool',
    degree: 'FullStack MERN',
    period: 'Apr 2025',
    desc: 'Complete MERN stack certification covering MongoDB, Express, React, and Node.js with real-world project development.',
    skills: ['MongoDB', 'Express', 'React', 'Node.js'],
    icon: '📜',
  },
  {
    institution: 'Newton School',
    degree: 'React.js',
    period: 'Mar 2025',
    desc: 'Advanced React certification covering hooks, state management, context API, React Router, and component architecture.',
    skills: ['React', 'Redux', 'React Router','Javascript','Node js','Express js'],
    icon: '📜',
  },
  {
    institution: 'NoviTech R&D Pvt Ltd',
    degree: '30-Day Masterclass in UI/UX Design',
    period: 'Jul 2025',
    credentialId: 'NT_B2UIUX421',
    desc: 'Intensive UI/UX masterclass covering user research, wireframing, prototyping, and design systems in Figma.',
    skills: ['UI/UX', 'Figma', 'Wireframing', 'Prototyping'],
    icon: '📜',
  },
  {
    institution: 'Amazon Web Services (AWS)',
    degree: 'Amazon Web Services',
    period: 'Jul 2023',
    desc: 'AWS certification covering cloud computing fundamentals, core AWS services, architecture, and deployment best practices.',
    skills: ['AWS', 'Cloud Computing', 'Architecture', 'Deployment'],
    icon: '📜',
  },
  {
    institution: 'Newton School',
    degree: 'Frontend Libraries & Frameworks',
    period: 'Mar 2024',
    desc: 'Certification in modern frontend frameworks and libraries including React, component patterns, and state management.',
    skills: ['React', 'JavaScript', 'Frontend', 'Frameworks'],
    icon: '📜',
  },
  {
    institution: 'Newton School',
    degree: 'Full Stack Web Development',
    period: 'May 2023 – Jun 2024',
    desc: 'Industry-focused full stack bootcamp with real-world projects covering Node.js, Bootstrap, and web fundamentals.',
    skills: ['Node.js', 'Bootstrap', 'JavaScript', 'Full Stack'],
    icon: '📜',
  },
  {
    institution: 'Newton School',
    degree: 'Linear DSA 1 & 2',
    period: 'Jan 2024',
    desc: 'Data structures and algorithms certification covering arrays, linked lists, stacks, queues, trees, and sorting algorithms.',
    skills: ['DSA', 'Algorithms', 'Problem Solving', 'Data Structures'],
    icon: '📜',
  },
  {
    institution: 'Newton School',
    degree: 'Basics of Programming & Web Dev Fundamentals',
    period: 'Jan 2024',
    desc: 'Foundation certifications covering core programming concepts and web development fundamentals.',
    skills: ['Programming', 'HTML', 'CSS', 'JavaScript'],
    icon: '📜',
  },
 {
    institution: 'freeCodeCamp',
    degree: 'Full Stack Web Developer (In Progress)',
    period: 'Oct 2025 – Present · In Progress',
    desc: 'Ongoing comprehensive full stack certification. Practising React, Node.js, Express, and MongoDB through hands-on projects.',
    skills: ['React', 'Node.js', 'Express', 'MongoDB'],
    icon: '📜',
  },
];

export default function Certifications() {
  return (
    <section style={{ padding: '7rem 4rem', background: 'var(--dark2)' }}>

      {/* Education */}
      <div style={{ marginBottom: '5rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Academic Background</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400 }}>Education</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border)' }}>
          {education.map((e, i) => <Card key={i} item={e} />)}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Licenses & Certifications</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400 }}>Certifications</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border)' }}>
          {certifications.map((c, i) => <Card key={i} item={c} />)}
        </div>
      </div>

    </section>
  );
}

function Card({ item }) {
  return (
    <div style={{ background: 'var(--dark2)', padding: '2.5rem', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '1.8rem', opacity: 0.12 }}>
        {item.icon}
      </div>
      <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>
        {item.institution}
      </div>
      <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.02rem', fontWeight: 400, marginBottom: '0.4rem', lineHeight: 1.3 }}>
        {item.degree}
      </h3>
      <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.3rem' }}>{item.period}</div>
      {item.credentialId && (
        <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>ID: {item.credentialId}</div>
      )}
      <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, margin: '0.8rem 0 1.2rem' }}>{item.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {item.skills.map(s => (
          <span key={s} style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--border)', padding: '0.2rem 0.55rem', color: 'var(--muted)' }}>{s}</span>
        ))}
      </div>
    </div>
  );
}
