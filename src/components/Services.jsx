const services = [
  { num:'01', title:'Full-Stack Web Development', desc:'Complete MERN applications — MongoDB, Express, React, Node.js. From database schema to pixel-perfect UI.', tags:['React','Node.js','MongoDB','Express'] },
  { num:'02', title:'UI/UX Design & Prototyping', desc:'Intuitive interfaces designed in Figma with Tailwind CSS implementation. Responsive, accessible, and conversion-focused.', tags:['Figma','Tailwind CSS','Responsive'] },
  { num:'03', title:'REST API Development', desc:'Robust, scalable RESTful APIs with JWT authentication, CRUD operations, and third-party integrations.', tags:['REST API','JWT','Postman'] },
  { num:'04', title:'E-Commerce Solutions', desc:'Custom online stores with payment gateways, inventory management, and optimised checkout flows.', tags:['Stripe','Cart','Dashboard'] },
  { num:'05', title:'CMS & Website Management', desc:'Easy-to-update content systems. WordPress, headless CMS, and ongoing maintenance packages.', tags:['WordPress','Strapi','Contentful'] },
  { num:'06', title:'Performance & SEO Optimisation', desc:'Speed audits, Core Web Vitals improvement, and technical SEO to rank higher and load faster.', tags:['SEO','Lighthouse','Analytics'] },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '7rem 4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>What I Offer</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400, lineHeight: 1.2 }}>
            Services built for<br />your ambitions
          </h2>
        </div>
        <p style={{ color: 'var(--muted)', maxWidth: '380px', lineHeight: 1.7, fontSize: '0.95rem' }}>
          End-to-end web development services — from concept and design to deployment and maintenance.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border)' }}>
        {services.map((svc) => (
          <ServiceCard key={svc.num} {...svc} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ num, title, desc, tags }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--dark3)' : 'var(--dark2)',
        padding: '3rem 2.5rem', position: 'relative', overflow: 'hidden',
        transition: 'background 0.4s',
      }}
    >
      {hovered && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--gold)' }} />
      )}
      <span style={{
        fontFamily: 'var(--serif)', fontSize: '3.5rem', color: 'rgba(201,168,76,0.1)',
        fontWeight: 700, position: 'absolute', top: '1.5rem', right: '2rem', lineHeight: 1,
        pointerEvents: 'none',
      }}>{num}</span>
      <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', fontWeight: 400, marginBottom: '1rem' }}>{title}</h3>
      <p style={{ fontSize: '0.87rem', color: 'var(--muted)', lineHeight: 1.8 }}>{desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
        {tags.map(t => (
          <span key={t} style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid var(--border)', padding: '0.25rem 0.65rem', color: 'var(--muted)' }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';
