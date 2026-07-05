const stats = [
  { num: '14+', label: 'Projects Built'         },
  { num: '2',   label: 'Internships Completed'   },
  { num: '5+',  label: 'Years Teaching & Training'},
  { num: '100%',label: 'Remote Ready'            },
];

export default function Stats() {
  return (
    <div style={{
      display: 'flex', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
      margin: '0 4rem',
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          flex: 1, padding: '2.5rem 2rem', textAlign: 'center',
          borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
        }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '2.8rem', color: 'var(--gold)', lineHeight: 1 }}>
            {s.num}
          </div>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.5rem' }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
