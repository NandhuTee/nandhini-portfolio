import { useState, useEffect } from 'react';

const links = ['Services', 'Experience', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1.5rem 4rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(13,13,13,0.97)' : 'linear-gradient(to bottom,rgba(13,13,13,0.95),transparent)',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.4s',
    }}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--gold)', letterSpacing: '0.05em' }}>
        NT
      </div>
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              style={{
                textDecoration: 'none', color: 'var(--muted)',
                fontSize: '0.82rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
