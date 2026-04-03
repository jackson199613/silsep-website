
import os
import json
import requests

# API Key from instantly_api_integration.py
INSTANTLY_API_KEY = "OTQ2MTRlNzgtMjE1Zi00ZTVhLWEwODktODMzM2RkYWMxNTg0OlBOeW12WUxYc1hNSg=="

headers = {
    "Authorization": f"Bearer {INSTANTLY_API_KEY}",
    "Content-Type": "application/json"
}

def get_accounts():
    url = "https://api.instantly.ai/api/v2/accounts"
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json().get("items", [])
    else:
        return {"error": response.status_code, "text": response.text}

if __name__ == "__main__":
    accounts = get_accounts()
    print(json.dumps(accounts, indent=2))
