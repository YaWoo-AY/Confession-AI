# 📖 Confession AI

> **A private AI-powered Confession Reflection app** — helps users reflect spiritually by preparing or practicing confessions in a safe, calming environment.  
>  
> 🌟 Powered by React.js + FastAPI + Local AI Model (Ollama).

---

## 📸 Preview
![image](https://github.com/user-attachments/assets/20320044-cb62-4f79-ad5a-43d1e6591e65)


---

## ✨ Features
- 📝 Write your personal confessions.
- 🤖 Receive gentle, compassionate reflections from a local AI model.
- 🛡️ 100% private — no user data is stored.
- 🌙 Calm and minimalist design with TailwindCSS.
- 🚀 Fast, full-stack setup using Vite + FastAPI.

---

## 🛠️ Tech Stack

| Frontend | Backend | AI |
|:---------|:--------|:---|
| React.js (Vite) | FastAPI (Python) | Local Ollama Model (e.g., Llama3, Mistral) |
| TailwindCSS | Uvicorn server | |

---

## 🚀 How to Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/confession-ai.git
cd confession-ai
```

---

### 2. Set Up Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
```

Start the backend server:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

✅ API will run at `http://localhost:8000`.

---

### 3. Set Up Local AI Model (Ollama)

Install [Ollama](https://ollama.com/) and run your model (example: llama3):

```bash
ollama run llama3
```

✅ Ollama server will run at `http://localhost:11434`.

---

### 4. Set Up Frontend (React.js)

```bash
cd ../frontend
npm install
npm run dev
```

✅ Frontend will run at `http://localhost:5173`.

---

## ⚡ Quick Summary

| Part | URL |
|:-----|:----|
| Frontend (React.js) | `http://localhost:5173` |
| Backend (FastAPI) | `http://localhost:8000/confess` |
| Local AI Model (Ollama) | `http://localhost:11434` |

---

## 📂 Project Structure

```
confession-ai/
├── backend/
│   ├── main.py
│   ├── ai_model.py
│   └── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── components/
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── README.md
```

---

## 🧠 Future Improvements
- Loading animation during AI thinking
- Session-based confession history
- Guided "Examination of Conscience" mode
- Deployment to Vercel (Frontend) and Render.com (Backend)
- Optional calming background music

---

## 📄 License
This project is licensed under the MIT License.  
Feel free to use and adapt it with proper credit. 🌟

---

# 🙏 Final Note
> This website is meant for spiritual reflection preparation only and does **not replace the Sacrament of Reconciliation**.  
> Please seek a priest for official confession and absolution. ✝️

---

# 📣 Acknowledgements
- [Ollama](https://ollama.com/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)

---
