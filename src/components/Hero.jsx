const s = {
  hero: {
    minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '8rem 4rem 4rem', position: 'relative', overflow: 'hidden',
  },
  bg: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(ellipse 60% 70% at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  content: { position: 'relative', zIndex: 1, maxWidth: '900px' },
  eyebrow: {
    fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase',
    color: 'var(--gold)', marginBottom: '1.5rem',
    display: 'flex', alignItems: 'center', gap: '1rem',
  },
  h1: {
    fontFamily: 'var(--serif)', fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
    lineHeight: 1.08, fontWeight: 400, marginBottom: '1.5rem',
  },
  em: { fontStyle: 'italic', color: 'var(--gold)' },
  desc: {
    fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '580px',
    lineHeight: 1.8, marginBottom: '3rem',
  },
  ctaGroup: { display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' },
  btnPrimary: {
    padding: '0.9rem 2.2rem', background: 'var(--gold)', color: 'var(--dark)',
    fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase',
    textDecoration: 'none', fontWeight: 500, fontFamily: 'var(--sans)',
    transition: 'background 0.3s', display: 'inline-block',
  },
  btnGhost: {
    padding: '0.9rem 2.2rem', border: '1px solid var(--border)', color: 'var(--muted)',
    fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase',
    textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block',
  },
  skills: { display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '2.5rem' },
  skill: {
    fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
    border: '1px solid var(--border)', padding: '0.3rem 0.8rem', color: 'var(--muted)',
  },
};

const SKILLS = ['JavaScript', 'React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Figma', 'REST APIs', 'Git'];

export default function Hero() {
  return (
    <section style={s.hero}>
      <div style={s.bg} />
      <div style={s.content} className="fade-up">
        <div style={s.eyebrow}>
          <span style={{ width: 40, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
          Full Stack MERN Developer · Open to Remote
        </div>
        <h1 style={s.h1}>
          Hi, I'm <em style={s.em}>Nandhini Tee.</em><br />
          I build scalable, modern<br />full-stack web applications.
        </h1>
        <p style={s.desc}>
          MERN Stack Developer specialising in React, Node.js, Express, and MongoDB.
          Former educator turned developer — bringing clarity, structure, and dedication
          to every line of code. Based in Thanjavur, Tamil Nadu. Open to remote opportunities.
        </p>
        <div style={s.ctaGroup}>
          <a href="#contact" style={s.btnPrimary}>Hire Me</a>
          <a href="https://github.com/NandhuTee" target="_blank" rel="noreferrer" style={s.btnGhost}>GitHub ↗</a>
          <a href="https://linkedin.com/in/nandhinitee" target="_blank" rel="noreferrer" style={s.btnGhost}>LinkedIn ↗</a>
        </div>
        <div style={s.skills}>
          {SKILLS.map(sk => <span key={sk} style={s.skill}>{sk}</span>)}
        </div>
      </div>
    </section>
  );
}
