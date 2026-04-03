# Silsep Shadow Domain DNS Configuration Template
# Prepared by 编程大师 Codi - 2026-03-31

For each shadow domain (e.g., `silsep-mail.com`), apply the following DNS records to ensure 100% deliverability.

## 1. SPF (Sender Policy Framework)
Add a TXT record for the root domain:
- **Type**: TXT
- **Host**: @
- **Value**: `v=spf1 include:_spf.google.com include:amazonses.com ~all`
*(Note: Adjust "include" based on the actual provider selected by Aiers.)*

## 2. DKIM (DomainKeys Identified Mail)
Add the CNAME records provided by your email service provider (Google Workspace or Amazon SES).
- **Example**: `google._domainkey` TXT `v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...`

## 3. DMARC (Domain-based Message Authentication, Reporting, and Conformance)
Add a TXT record for `_dmarc`:
- **Type**: TXT
- **Host**: _dmarc
- **Value**: `v=DMARC1; p=quarantine; rua=mailto:admin@silsep.com`
*(Note: Start with `p=quarantine` to monitor issues, then move to `p=reject` after 2 weeks.)*

## 4. MX Records
Ensure MX records point to your provider:
- **Priority 1**: `ASPMX.L.GOOGLE.COM.`
- **Priority 5**: `ALT1.ASPMX.L.GOOGLE.COM.`
...etc.

## 5. Custom Tracking Domain (Optional but Recommended)
For better deliverability on Instantly.ai:
- **Type**: CNAME
- **Host**: track
- **Value**: `instantly.ai` (or similar per provider docs)
