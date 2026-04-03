import requests

API_KEY = "OTQ2MTRlNzgtMjE1Zi00ZTVhLWEwODktODMzM2RkYWMxNTg0OlBOeW12WUxYc1hNSg=="

def check_accounts():
    url = "https://api.instantly.ai/api/v2/accounts"
    headers = {"Authorization": f"Bearer {API_KEY}"}
    print(f"[*] Fetching Instantly accounts...")
    try:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            data = response.json()
            accounts = data.get("items", [])
            print(f"[+] Found {len(accounts)} accounts.")
            for acc in accounts:
                print(f" - {acc.get('email')} (Status: {acc.get('status')})")
        else:
            print(f"[-] Failed: {response.status_code}")
            print(f"[-] Response: {response.text}")
    except Exception as e:
        print(f"[-] Error: {e}")

if __name__ == "__main__":
    check_accounts()
