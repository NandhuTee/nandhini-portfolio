# Nandhini_Portfolio

> **MERN Stack Developer Portfolio** — Full-stack web services portfolio website built with MongoDB, Express, React (Vite), and Node.js.

🔗 **GitHub:** [github.com/NandhuTee](https://github.com/NandhuTee)
🔗 **LinkedIn:** [linkedin.com/in/nandhinitee](https://linkedin.com/in/nandhinitee)

---

## 📁 Project Structure

```
Nandhini_Portfolio/
├── client/                        ← React (Vite) Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                        ← Node.js + Express Backend
│   ├── controllers/
│   │   └── contactController.js
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contact.js
│   ├── index.js
│   ├── .env.example
│   └── package.json
│
├── README.md
├── client.md
├── server.md
└── .gitignore
```

---

## ⚡ Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/NandhuTee/Nandhini_Portfolio.git
cd Nandhini_Portfolio
```

### 2. Install dependencies
```bash
# Server
cd server && npm install && cd ..

# Client
cd client && npm install && cd ..
```

### 3. Configure environment
```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and email credentials
```

### 4. Run development servers
```bash
# Terminal 1 — Backend
cd server && node index.js

# Terminal 2 — Frontend
cd client && npm run dev
```

### 5. Open in browser
```
http://localhost:5173
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, CSS Variables |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Email | Nodemailer (Gmail App Password) |
| Styling | CSS Custom Properties, Google Fonts |
| Deployment | Vercel (Frontend) + Render (Backend) + MongoDB Atlas (DB) |

---

## 📄 Documentation

| File | Description |
|---|---|
| [client.md](./client.md) | Frontend setup, components, and deployment guide |
| [server.md](./server.md) | Backend setup, API routes, and database guide |

---

## 🚀 Deployment

| Service | Platform | URL |
|---|---|---|
| Frontend | Vercel | `npm run build` → deploy `dist/` |
| Backend | Render | Connect GitHub repo → set env vars |
| Database | MongoDB Atlas | Free M0 cluster |

---

## 👩‍💻 Developer

**Nandhini Tee** — MERN Stack Developer
Open to Remote Opportunities · Thanjavur, Tamil Nadu, India

---

## 📜 License

MIT © 2026 Nandhini Tee
# Nandhini_Portfolio
