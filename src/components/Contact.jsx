import { useState } from 'react';
import axios from 'axios';

const inputStyle = {
  width: '100%', background: 'var(--dark2)', border: '1px solid var(--border)',
  color: 'var(--text)', padding: '0.85rem 1.1rem', fontFamily: 'var(--sans)',
  fontSize: '0.88rem', outline: 'none',
};
const labelStyle = {
  display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em',
  textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.55rem',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('');

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async () => {
    if (!form.name || !form.email || !form.service || !form.message) {
      setErrMsg('Please fill all required fields.');
      return;
    }
    setStatus('loading');
    setErrMsg('');
    try {
      await axios.post( 'https://nandhini-portfolio-server-k5f9.onrender.com/api/contact',
  form);
      setStatus('success');
      setForm({ name: '', email: '', service: '', budget: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrMsg(err.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" style={{ padding: '0', background: 'var(--dark2)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--border)', gap: '1px' }}>

        {/* Left */}
        <div style={{ background: 'var(--dark2)', padding: '5rem 4rem' }}>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.2rem' }}>Get In Touch</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 400, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Let's build<br />something great
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '0.93rem' }}>
            Have a project in mind or need a consultation? I'm open to remote opportunities and freelance projects. Let's talk!
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: '✉', text: 'rtnandhinitee@gmail.com' },
              { icon: '🔗', text: 'linkedin.com/in/nandhinitee' },
              { icon: '💻', text: 'github.com/NandhuTee' },
              { icon: '📍', text: 'Thanjavur, Tamil Nadu, India' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.3rem', background: 'var(--dark)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div style={{ background: 'var(--dark3)', padding: '5rem 4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.2rem' }}>
            <div>
              <label style={labelStyle}>Your Name *</label>
              <input name="name" value={form.name} onChange={handle} placeholder="Priya Sharma" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Email Address *</label>
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="priya@example.com" style={inputStyle} />
            </div>
          </div>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={labelStyle}>Service Needed *</label>
            <select name="service" value={form.service} onChange={handle} style={{ ...inputStyle, appearance: 'none' }}>
              <option value="">Select a service...</option>
              <option>Full-Stack Web Development</option>
              <option>UI/UX Design</option>
              <option>E-Commerce Solution</option>
              <option>API Development</option>
              <option>CMS Setup</option>
              <option>SEO & Performance</option>
              <option>Other</option>
            </select>
          </div>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={labelStyle}>Budget Range</label>
            <select name="budget" value={form.budget} onChange={handle} style={{ ...inputStyle, appearance: 'none' }}>
              <option value="">Select budget...</option>
              <option>Under ₹25,000</option>
              <option>₹25,000 – ₹75,000</option>
              <option>₹75,000 – ₹2,00,000</option>
              <option>₹2,00,000+</option>
            </select>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>Your Message *</label>
            <textarea name="message" value={form.message} onChange={handle} placeholder="Tell me about your project, goals, and timeline..." rows={5} style={{ ...inputStyle, resize: 'none' }} />
          </div>

          {errMsg && <p style={{ fontSize: '0.82rem', color: '#e06060', marginBottom: '1rem' }}>{errMsg}</p>}
          {status === 'success' && <p style={{ fontSize: '0.82rem', color: 'var(--gold)', marginBottom: '1rem' }}>✅ Message sent! I'll get back to you soon.</p>}

          <button
            onClick={submit}
            disabled={status === 'loading'}
            style={{
              width: '100%', padding: '1rem', background: status === 'loading' ? 'var(--border)' : 'var(--gold)',
              color: 'var(--dark)', fontFamily: 'var(--sans)', fontSize: '0.82rem',
              letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500,
              border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              transition: 'background 0.3s',
            }}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message →'}
          </button>
        </div>
      </div>
    </section>
  );
}
