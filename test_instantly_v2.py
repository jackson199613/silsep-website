import requests

# API_KEY = "94614e78-215f-4e5a-a089-8333ddac1584:PNymvYLXsXMJ"

# Let's try both V1 and V2
API_KEY = "94614e78-215f-4e5a-a089-8333ddac1584:PNymvYLXsXMJ"

def test_v2():
    url = "https://api.instantly.ai/api/v2/campaigns"
    headers = {"Authorization": f"Bearer {API_KEY}"}
    print(f"[*] Testing Instantly API V2 with Bearer token...")
    try:
        response = requests.get(url, headers=headers)
        print(f"[V2] Status: {response.status_code}")
        print(f"[V2] Response: {response.text[:200]}")
    except Exception as e:
        print(f"[V2] Error: {e}")

def test_v1_post():
    # Some V1 endpoints use POST with api_key in payload
    url = "https://api.instantly.ai/1/campaign/list"
    payload = {"api_key": API_KEY}
    print(f"[*] Testing Instantly API V1 with POST and api_key in payload...")
    try:
        response = requests.post(url, json=payload)
        print(f"[V1-POST] Status: {response.status_code}")
        print(f"[V1-POST] Response: {response.text[:200]}")
    except Exception as e:
        print(f"[V1-POST] Error: {e}")

def test_v1_get_param():
    url = "https://api.instantly.ai/1/campaign/list"
    params = {"api_key": API_KEY}
    print(f"[*] Testing Instantly API V1 with GET and api_key in params...")
    try:
        response = requests.get(url, params=params)
        print(f"[V1-GET] Status: {response.status_code}")
        print(f"[V1-GET] Response: {response.text[:200]}")
    except Exception as e:
        print(f"[V1-GET] Error: {e}")

if __name__ == "__main__":
    test_v2()
    test_v1_post()
    test_v1_get_param()
