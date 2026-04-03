# 🌐 Silsep Matrix 1000: 域名 DNS 配置清单 (Namecheap 专用)

为了确保您购买的 3 个域名能够安全、高权重地发送邮件，请在 **Namecheap** 的 **Advanced DNS** 页面中为每个域名添加以下记录。

---

### 1. 🌊 aqua-silsep.com (建议使用 Google Workspace)

| 记录类型 | Host (主机名) | Value (值) | 备注 |
| :--- | :--- | :--- | :--- |
| **TXT** | `@` | `v=spf1 include:_spf.google.com ~all` | 身份验证 (SPF) |
| **TXT** | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:admin@silsep.com` | 安全保护 (DMARC) |
| **MX** | `@` | `ASPMX.L.GOOGLE.COM.` (Priority: 1) | 邮件路由 |
| **MX** | `@` | `ALT1.ASPMX.L.GOOGLE.COM.` (Priority: 5) | 邮件路由 |
| **CNAME** | `track` | `instantly.ai` | Instantly 追踪链接 |

---

### 2. 🇻🇳 silsep-vn.com (建议使用 Microsoft 365)

| 记录类型 | Host (主机名) | Value (值) | 备注 |
| :--- | :--- | :--- | :--- |
| **TXT** | `@` | `v=spf1 include:spf.protection.outlook.com -all` | 身份验证 (SPF) |
| **TXT** | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:admin@silsep.com` | 安全保护 (DMARC) |
| **MX** | `@` | `silsep-vn-com.mail.protection.outlook.com` (Priority: 0) | 邮件路由 |
| **TXT** | `MS=msXXXXXXXX` | (由 Microsoft 365 提供) | 域名所有权验证 |
| **CNAME** | `track` | `instantly.ai` | Instantly 追踪链接 |

---

### 3. 🦐 silsep-mekong.com (建议使用 Google 或 Zoho)

| 记录类型 | Host (主机名) | Value (值) | 备注 |
| :--- | :--- | :--- | :--- |
| **TXT** | `@` | `v=spf1 include:_spf.google.com ~all` | 身份验证 (SPF) |
| **TXT** | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:admin@silsep.com` | 安全保护 (DMARC) |
| **MX** | `@` | `ASPMX.L.GOOGLE.COM.` (Priority: 1) | 邮件路由 |
| **CNAME** | `track` | `instantly.ai` | Instantly 追踪链接 |

---

### ⚠️ 技术大师 Codi 的最后提醒：
1.  **DKIM 记录**：当您完成 Google 或 Microsoft 的账号购买后，系统会生成一串很长的字符（DKIM）。请将其作为 **TXT** 记录添加，Host 通常为 `google._domainkey` 或 `selector1._domainkey`。
2.  **301 重定向**：请在 Namecheap 的 **Domain** 页面底部，找到 **Redirect Domain**，将这三个域名全部指向您的主官网：`https://silsep.com`。这能极大提升客户点击邮件后的信任感。
3.  **解析生效时间**：DNS 修改后通常需要 10 分钟至 2 小时生效。完成后请告诉我，我将立即在 Instantly.ai 中执行验证。
