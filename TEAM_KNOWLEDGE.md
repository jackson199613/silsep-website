# Silsep Team Knowledge & Technical SOPs

## 1. Team Memory System
- **Long-term Core Memory**: `agent-core/MEMORY.md`. All agents read this on startup. Use this for brand identity and core product parameters (AquaPure).
- **Project Specific Docs**: `project/docs/`. Use this for detailed technical specs, pricing tables, and market research reports.
- **Daily Progress**: `agent-core/diary/`. Automatically updated for daily logs and decisions.

## 2. Information Merging SOP
When you have new information (e.g., a customer feedback or a new competitor):
1. **Chat Paste**: Directly paste in the group chat and @ the relevant agent.
2. **File Upload**: Upload PDF/Docx files. Accio or 编程大师 Codi will process them into the knowledge base.
3. **Manual Entry**: Edit `agent-core/MEMORY.md` if it's a permanent rule or fact.

## 3. Automation Status
- **Gmail**: Being monitored by Accio via `listen_gmail_reply`.
- **Alibaba/Shopify**: (Proposed) Scheduled monitoring via `browser` agent + `cron`.

---
*Created by Coder - v1.0*
