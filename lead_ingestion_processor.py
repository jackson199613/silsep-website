import json
import logging
from instantly_api_integration import InstantlyAPI

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

class LeadProcessor:
    def __init__(self, api_key):
        self.api = InstantlyAPI(api_key)
        
    def categorize_leads(self, lead_file):
        """
        Read leads from Pho's extraction and categorize them for targeted outreach.
        Tier 1: Big Corporations / Decision Makers
        Tier 2: Medium Integrated Farms
        """
        try:
            with open(lead_file, 'r', encoding='utf-8') as f:
                leads = json.load(f)
            
            tier1 = []
            tier2 = []
            
            for lead in leads:
                # Simple logic for categorization based on role or company profile
                # This would be refined once the actual data structure from Pho is known
                role = lead.get("role", "").lower()
                if any(keyword in role for keyword in ["director", "head", "manager", "ceo"]):
                    tier1.append(lead)
                else:
                    tier2.append(lead)
            
            logging.info(f"[*] Categorized {len(tier1)} leads as Tier 1 and {len(tier2)} as Tier 2.")
            return {"tier1": tier1, "tier2": tier2}
        except FileNotFoundError:
            logging.error(f"[-] Lead file {lead_file} not found.")
            return None

    def push_to_instantly(self, categorized_leads, campaign_mapping):
        """
        Push categorized leads to their respective Instantly campaigns.
        """
        if not categorized_leads:
            return
        
        for tier, leads in categorized_leads.items():
            campaign_id = campaign_mapping.get(tier)
            if campaign_id and leads:
                logging.info(f"[*] Pushing {len(leads)} {tier} leads to Instantly campaign {campaign_id}...")
                # self.api.add_leads_to_campaign(campaign_id, leads)

if __name__ == "__main__":
    # Placeholder for Pho's output file
    PHO_LEAD_FILE = "vietnam_tier1_mills.json" 
    
    # Instantly API Key
    API_KEY = "OTQ2MTRlNzgtMjE1Zi00ZTVhLWEwODktODMzM2RkYWMxNTg0OlBOeW12WUxYc1hNSg=="
    
    # Mapping tiers to Campaign IDs (to be defined in Instantly Dashboard)
    CAMPAIGN_MAPPING = {
        "tier1": "camp_v1_tier1_high_value",
        "tier2": "camp_v1_tier2_volume"
    }
    
    processor = LeadProcessor(API_KEY)
    
    # Logic to be triggered once Pho delivers the file
    # categorized = processor.categorize_leads(PHO_LEAD_FILE)
    # processor.push_to_instantly(categorized, CAMPAIGN_MAPPING)
    
    print("[!] Lead Processor v1.0 Ready. Waiting for Pho's JSON data.")
