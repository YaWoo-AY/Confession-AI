import requests

# Local Ollama API (running on your machine)
OLLAMA_API_URL = "http://localhost:11434/api/generate"

def generate_response(prompt: str) -> str:
    payload = {
        "model": "llama3",  # or whatever model you have loaded in Ollama
        "prompt": f"Act like a kind, forgiving spiritual guide. The user confessed: '{prompt}'. Respond with compassion and gentle reflection. Respond not too long. Be kind and gentle.",
        "temperature": 0.7,
        "stream": False
    }
    response = requests.post(OLLAMA_API_URL, json=payload)
    
    if response.status_code == 200:
        return response.json()["response"]
    else:
        return "I'm sorry, I couldn't process your confession right now. Please try again later."
