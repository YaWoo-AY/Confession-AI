from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from ai_model import generate_response

app = FastAPI()

# Allow frontend (React) to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # For testing. Later you can restrict to your frontend URL.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/confess")
async def confess(request: Request):
    data = await request.json()
    user_input = data.get("message", "")
    ai_response = generate_response(user_input)
    return {"reply": ai_response}
