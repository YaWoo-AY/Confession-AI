# 📖 Confession AI - Backend

> **This is the backend server** for the Confession AI project.  
> Built with **FastAPI** and connected to a **local AI model (via Ollama)** to provide private, compassionate reflections based on user confessions.

---

## ✨ Features
- FastAPI server with `/confess` POST endpoint
- Sends user input to a **local AI model** (e.g., Llama 3 via Ollama)
- Returns gentle and reflective responses
- Fully local setup — no external API calls, 100% private

---

## 🚀 How to Run the Backend Locally

### 1. Install Python Packages

Navigate into the backend folder:

```bash
cd backend
pip install -r requirements.txt
```

---

### 2. Start the Local AI Model (Ollama)

You must have [Ollama](https://ollama.com/) installed.  
Start the model you want (example: llama3):

```bash
ollama run llama3
```

✅ Ollama will serve at `http://localhost:11434`.

---

### 3. Run the FastAPI Server

In the backend folder, start FastAPI using Uvicorn:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

✅ FastAPI server will be available at `http://localhost:8000`.

---

## 📂 Backend Folder Structure

```
backend/
├── main.py          # FastAPI application
├── ai_model.py      # Connects to local AI model (Ollama)
├── requirements.txt # Python dependencies
└── README.md        # Backend instructions
```

---

## 📡 API Endpoint

| Method | URL | Body | Description |
|:-------|:----|:-----|:------------|
| `POST` | `/confess` | `{ "message": "your confession here" }` | Sends confession to AI and receives a reflection. |

**Example Request:**
```json
{
  "message": "I feel guilty for losing my patience."
}
```

**Example Response:**
```json
{
  "reply": "Remember, dear one, that recognizing our shortcomings is the first step towards healing and growth."
}
```

---

## 📜 requirements.txt

Make sure your `requirements.txt` includes:

```
fastapi
uvicorn
requests
```

✅ Install everything with:

```bash
pip install -r requirements.txt
```

---

## ⚡ Notes
- Make sure Ollama server is running **before** sending any confessions.
- If the AI model is unavailable, FastAPI will return a fallback error message.

---

## 🧠 Future Enhancements
- Add timeout handling if Ollama is slow or down
- Switch between multiple local AI models easily
- Enhance prompt crafting for different styles (short, long, scripture-based, etc.)

---

# 🙏 Final Reminder
This backend helps users **prepare spiritually** and **reflect compassionately**.  
It is **not a replacement** for the Sacrament of Confession.

---
