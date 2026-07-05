export default function Footer() {
  return (
    <footer style={{
      padding: '2.5rem 4rem',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
    }}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--gold)', letterSpacing: '0.05em' }}>
        Nandhini Tee
      </div>
      <div style={{ fontSize: '0.76rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
        © {new Date().getFullYear()} · Full Stack MERN Developer | React | Node.js | Open to Remote Opportunities
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[
          { label: 'GitHub',   href: 'https://github.com/NandhuTee' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/nandhinitee' },
          { label: 'Email',    href: 'mailto:nandhinitee@gmail.com' },
        ].map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer"
            style={{ fontSize: '0.76rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
