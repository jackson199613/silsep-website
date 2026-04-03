# Instantly.ai API Integration Module v1.2
# Developed by 编程大师 Codi - 2026-04-02
# Purpose: Automate Matrix 1000 email campaigns and warmup.

import os
import json
import requests
import logging

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

class InstantlyAPI:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.instantly.ai/api/v2"
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }

    def add_leads_to_campaign(self, campaign_id, leads):
        """
        Push leads to a specific Instantly V2 campaign.
        """
        url = f"{self.base_url}/campaigns/{campaign_id}/leads"
        payload = {"leads": leads}
        logging.info(f"[*] Pushing {len(leads)} leads to campaign {campaign_id}...")
        response = requests.post(url, json=payload, headers=self.headers)
        return response.json()

    def get_campaigns(self):
        """
        List all active campaigns (V2).
        """
        url = f"{self.base_url}/campaigns"
        response = requests.get(url, headers=self.headers)
        return response.json()

    def add_imap_account(self, email, password, first_name, last_name, imap_host, imap_port, smtp_host, smtp_port):
        """
        Connect a generic IMAP/SMTP account (like 163.com or Gmail) to Instantly.
        """
        url = f"{self.base_url}/accounts/imap"
        payload = {
            "email": email,
            "password": password,
            "first_name": first_name,
            "last_name": last_name,
            "imap_host": imap_host,
            "imap_port": imap_port,
            "smtp_host": smtp_host,
            "smtp_port": smtp_port,
            "use_ssl": True
        }
        logging.info(f"[*] Adding IMAP account: {email}...")
        response = requests.post(url, json=payload, headers=self.headers)
        return response.json()

    def enable_warmup_for_account(self, email):
        """
        Enable automated warmup for a specific email account (V2).
        """
        # Logic to find account_id from email first
        accounts = self.get_accounts()
        account_id = next((acc['id'] for acc in accounts if acc['email'] == email), None)
        
        if not account_id:
            logging.error(f"[-] Account {email} not found in Instantly.")
            return {"status": "error", "message": "Account not found"}
            
        url = f"{self.base_url}/accounts/{account_id}/warmup/enable"
        logging.info(f"[*] Enabling warmup for {email} ({account_id})...")
        response = requests.post(url, headers=self.headers)
        return response.json()

    def get_accounts(self):
        """
        List all connected email accounts.
        """
        url = f"{self.base_url}/accounts"
        response = requests.get(url, headers=self.headers)
        return response.json().get("items", [])

    def monitor_warmup_status(self, emails):
        """
        Monitor health scores and warmup status.
        """
        accounts = self.get_accounts()
        status_report = []
        for email in emails:
            acc = next((a for a in accounts if a['email'] == email), None)
            if acc:
                status_report.append({
                    "email": email,
                    "status": acc.get("status", "Unknown"),
                    "health_score": acc.get("health_score", "N/A"),
                    "warmup_enabled": acc.get("warmup_enabled", False)
                })
        return status_report

if __name__ == "__main__":
    # Correct B64 API Key provided by user
    INSTANTLY_API_KEY = "OTQ2MTRlNzgtMjE1Zi00ZTVhLWEwODktODMzM2RkYWMxNTg0OlBOeW12WUxYc1hNSg=="
    
    api = InstantlyAPI(INSTANTLY_API_KEY)
    
    # Matrix 1000 Satellite Domains for AquaPure
    matrix_accounts = [
        "david.tran@aqua-silsep.com",
        "lucy.nguyen@silsep-vn.com",
        "sales@silsep-mekong.com"
    ]
    
    print("[!] Instantly.ai API Module v1.2 - Matrix 1000 Logic Ready.")
    # Warmup and account listing logic would go here
