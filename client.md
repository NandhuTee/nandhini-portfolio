# client.md — Frontend Documentation

> React (Vite) frontend for Nandhini_Portfolio

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18.2.0 | UI library |
| Vite | 5.0.8 | Build tool & dev server |
| Axios | 1.6.2 | HTTP requests to backend |
| Google Fonts | — | Playfair Display + DM Sans |

---

## 🚀 Setup & Run

### Install
```bash
cd client
npm install
```

### Development
```bash
npm run dev
# Runs on http://localhost:5173
# Auto-proxies /api requests to http://localhost:5000
```

### Production Build
```bash
npm run build
# Output: client/dist/
```

### Preview Build
```bash
npm run preview
# Preview production build locally
```

---

## 📁 Folder Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         ← Fixed top nav with scroll effect
│   │   ├── Hero.jsx           ← Landing section with CTA buttons
│   │   ├── Stats.jsx          ← 4 highlight stats bar
│   │   ├── Services.jsx       ← 6 service cards with hover effects
│   │   ├── Experience.jsx     ← 6 work experience timeline cards
│   │   ├── Projects.jsx       ← 14 projects with filter + show more
│   │   ├── Certifications.jsx ← Education (3) + Certifications (9)
│   │   ├── Contact.jsx        ← Contact form (calls POST /api/contact)
│   │   └── Footer.jsx         ← Links to GitHub, LinkedIn, Email
│   ├── App.jsx                ← Assembles all sections in order
│   ├── main.jsx               ← React DOM entry point
│   └── index.css              ← Global CSS variables & reset
├── index.html                 ← HTML entry with Google Fonts
├── vite.config.js             ← Dev server + API proxy config
└── package.json
```

---

## 🎨 Design System

All colors, fonts and spacing use CSS custom properties defined in `index.css`:

```css
:root {
  --gold:    #C9A84C;   /* Primary accent */
  --gold-light: #E8C97A;
  --dark:    #0D0D0D;   /* Page background */
  --dark2:   #141414;   /* Section background */
  --dark3:   #1C1C1C;   /* Card hover background */
  --border:  #2A2A2A;   /* Borders & dividers */
  --text:    #E8E8E0;   /* Primary text */
  --muted:   #7A7A72;   /* Secondary text */
  --serif:   'Playfair Display', serif;
  --sans:    'DM Sans', sans-serif;
}
```

---

## 🧩 Components Overview

### Navbar.jsx
- Fixed position, transparent → solid on scroll
- Links: Services · Experience · Projects · Contact
- Logo: "NT" in gold serif font

### Hero.jsx
- Full-screen landing with animated fade-up entrance
- Skills tags: JavaScript, React, Node.js, Express, MongoDB, Tailwind, Figma, REST APIs, MySQL
- CTAs: Hire Me → #contact, GitHub ↗, LinkedIn ↗

### Stats.jsx
- 4 stat cards: 50+ Projects · 3+ Years · 2 Internships · 100% Remote-Ready

### Services.jsx
- 6 service cards in 3-column grid
- Hover: gold top border animation
- Services: Full-Stack Dev, UI/UX Design, REST APIs, E-Commerce, CMS, SEO

### Experience.jsx
- 6 roles in timeline layout (2-column grid per card)
- Highlighted card (gold left border): Labmentix internship
- Roles: Labmentix · CodSoft · Annai College · PRIST University · Technical Trainer · Freelance Designer

### Projects.jsx
- 14 real projects in 3-column grid
- Filter buttons: All · Full Stack · React · UI/UX · AI
- Shows 6 by default → "Show All" toggle
- Each card: label, title, company, description, tech tags, GitHub + Live links

### Certifications.jsx
- **Education (3-column):** B.Sc Bharathidasan · MCA SASTRA · M.Tech SASTRA
- **Certifications (3-column):** 9 certs — AWS, React, MERN, UI/UX, DSA, and more

### Contact.jsx
- Form fields: Name, Email, Service (dropdown), Budget (dropdown), Message
- On submit: `POST /api/contact` via Axios
- States: idle → loading → success/error
- Success: "✅ Message sent! I'll get back to you soon."

### Footer.jsx
- Links: GitHub · LinkedIn · Email
- Copyright with dynamic year

---

## 🔌 API Proxy (vite.config.js)

```js
server: {
  port: 5173,
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
    },
  },
}
```
All `/api/*` requests in dev are forwarded to the Express backend automatically.

---

## 🌐 Deploy to Vercel

```bash
# Option 1 — Vercel CLI
npm install -g vercel
cd client
npm run build
vercel

# Option 2 — Vercel Dashboard
# 1. Push to GitHub
# 2. Go to vercel.com → New Project → Import repo
# 3. Set Root Directory to: client
# 4. Build Command: npm run build
# 5. Output Directory: dist
# 6. Add env variable: VITE_API_URL=https://your-backend.onrender.com
```

### Update API URL for production

In `Contact.jsx`, change:
```js
// Development (uses Vite proxy)
await axios.post('/api/contact', form);

// Production (use full backend URL)
await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, form);
```

---

## 🐛 Common Issues

| Error | Fix |
|---|---|
| `vite not recognized` | Run `npm install` inside `client/` folder first |
| `Cannot find module` | Make sure you are inside `client/` folder |
| Contact form not working | Make sure backend server is running on port 5000 |
| Fonts not loading | Check internet connection (Google Fonts CDN) |
