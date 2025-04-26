# 📖 Confession AI - Frontend

> **This is the frontend** for the Confession AI project.  
> Built with **React.js** and **TailwindCSS**, it provides a calming and simple interface for users to submit their confessions and receive reflective AI-generated responses.

---

## ✨ Features
- Beautiful, minimalist UI with TailwindCSS
- Responsive and mobile-friendly
- Confession form connected to backend API
- Displays gentle AI-generated reflections
- Full local setup for maximum privacy

---

## 🚀 How to Run the Frontend Locally

### 1. Install Node.js Dependencies

Navigate into the frontend folder:

```bash
cd frontend
npm install
```

---

### 2. Start the Development Server

```bash
npm run dev
```

✅ The app will run at:  
[http://localhost:5173](http://localhost:5173)

---

## 📂 Frontend Folder Structure

```
frontend/
├── public/
│   └── index.html         # Main HTML page
├── src/
│   ├── App.jsx             # Main React app
│   ├── index.css           # TailwindCSS styles
│   ├── main.jsx            # React entry point
│   └── components/         # (Optional) React components folder
├── tailwind.config.js      # TailwindCSS configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Project metadata and scripts
└── README.md               # Frontend instructions
```

---

## 🔗 Connection to Backend

| Action | Where It Connects |
|:-------|:------------------|
| Submit confession | Sends a `POST` request to `http://localhost:8000/confess` |
| Receive reflection | Displays the AI's generated response |

✅ Make sure the **backend server** is running before submitting a confession.

---

## ⚙️ Technologies Used

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/)

---

## 🧠 Future Enhancements
- Loading spinner while waiting for AI reply
- Error handling for offline backend
- Session history for multiple confessions
- Dark mode toggle
- Soft ambient background music option

---

## 🛠️ Development Notes

- This project uses Vite for fast React development.
- TailwindCSS is manually configured via `tailwind.config.js` and `postcss.config.js`.
- Make sure Tailwind classes are available by importing `index.css` in `main.jsx`.

---

# 🙏 Final Reminder
This app helps users prepare spiritually through AI reflection.  
It is **not a replacement for the Sacrament of Confession**.

---
