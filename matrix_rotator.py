# Silsep Matrix Rotator v1.2 (Template Ready)
# Developed by 编程大师 Codi - 2026-03-31
# Purpose: Generic email matrix rotator controlled by config.json.

import time
import random
import logging
import json
import os
from datetime import datetime

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

class MatrixRotator:
    def __init__(self, config_path="config.json"):
        self.load_config(config_path)
        self.mailbox_stats = {m: 0 for m in self.config['mailboxes']}
        self.current_index = 0

    def load_config(self, path):
        if not os.path.exists(path):
            # Default fallback if config is missing
            self.config = {
                "product_name": "Generic",
                "safety_limits": {"daily_email_per_account": 50, "min_jitter_seconds": 120, "max_jitter_seconds": 300},
                "mailboxes": ["test@example.com"]
            }
            logging.warning(f"[!] {path} not found. Using default internal config.")
        else:
            with open(path, 'r', encoding='utf-8') as f:
                self.config = json.load(f)
            logging.info(f"[+] Config loaded from {path}. Targeting {self.config.get('product_name')}.")

    def get_next_available_mailbox(self):
        limit = self.config['safety_limits']['daily_email_per_account']
        mailboxes = self.config['mailboxes']
        
        start_index = self.current_index
        while True:
            mailbox = mailboxes[self.current_index]
            if self.mailbox_stats[mailbox] < limit:
                return mailbox
            
            self.current_index = (self.current_index + 1) % len(mailboxes)
            if self.current_index == start_index:
                logging.error("[!] CRITICAL: All mailboxes in the matrix have hit the daily limit.")
                return None

    def send_with_jitter(self, recipient, subject, body):
        mailbox = self.get_next_available_mailbox()
        if not mailbox: return False
            
        limits = self.config['safety_limits']
        jitter = random.randint(limits['min_jitter_seconds'], limits['max_jitter_seconds'])
        
        limit = limits['daily_email_per_account']
        logging.info(f"[*] [{self.config['product_name']}] Sending via {mailbox} to {recipient}...")
        self.mailbox_stats[mailbox] += 1
        logging.info(f"[#] {mailbox} Progress: {self.mailbox_stats[mailbox]}/{limit}")
        
        # Jitter delay logic
        # time.sleep(jitter) 
        
        print(f"[{datetime.now()}] [{self.config['product_name']}] SUCCESS: Sent via {mailbox}")
        return True

if __name__ == "__main__":
    # Example usage
    rotator = MatrixRotator() # Loads config.json by default
    rotator.send_with_jitter("customer@example.com", "Product Inquiry", "Details...")
