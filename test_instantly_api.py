import requests
import json

API_KEY = "94614e78-215f-4e5a-a089-8333ddac1584:PNymvYLXsXMJ"
BASE_URL = "https://api.instantly.ai/1"

def test_handshake():
    url = f"{BASE_URL}/campaign/list"
    params = {"api_key": API_KEY}
    
    print(f"[*] Attempting API handshake with Instantly.ai...")
    try:
        response = requests.get(url, params=params)
        if response.status_code == 200:
            campaigns = response.json()
            print(f"[+] Handshake successful! Status Code: {response.status_code}")
            print(f"[+] Found {len(campaigns)} campaigns.")
            # print(json.dumps(campaigns, indent=2))
            return True
        else:
            print(f"[-] Handshake failed. Status Code: {response.status_code}")
            print(f"[-] Response: {response.text}")
            return False
    except Exception as e:
        print(f"[-] Error during handshake: {e}")
        return False

if __name__ == "__main__":
    test_handshake()
