import requests

B64_KEY = "OTQ2MTRlNzgtMjE1Zi00ZTVhLWEwODktODMzM2RkYWMxNTg0OlBOeW12WUxYc1hNSg=="
DECODED_KEY = "94614e78-215f-4e5a-a089-8333ddac1584:PNymvYLXsXMJ"

def test_v2(key, label):
    url = "https://api.instantly.ai/api/v2/campaigns"
    headers = {"Authorization": f"Bearer {key}"}
    print(f"[*] Testing Instantly API V2 with {label}...")
    try:
        response = requests.get(url, headers=headers)
        print(f"[{label} V2] Status: {response.status_code}")
        print(f"[{label} V2] Response: {response.text[:200]}")
    except Exception as e:
        print(f"[{label} V2] Error: {e}")

def test_v1_any(key, label):
    # Try different V1 variants
    variants = [
        "https://api.instantly.ai/1/campaign/list",
        "https://api.instantly.ai/api/v1/campaign/list",
        "https://api.instantly.ai/v1/campaign/list"
    ]
    for url in variants:
        print(f"[*] Testing {url} with {label} (GET)...")
        try:
            response = requests.get(url, params={"api_key": key})
            print(f"[{label} V1 {url}] Status: {response.status_code}")
            print(f"[{label} V1 {url}] Response: {response.text[:100]}")
        except Exception as e:
            print(f"[{label} V1 {url}] Error: {e}")

if __name__ == "__main__":
    test_v2(B64_KEY, "B64")
    test_v2(DECODED_KEY, "Decoded")
    test_v1_any(B64_KEY, "B64")
    test_v1_any(DECODED_KEY, "Decoded")
