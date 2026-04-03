# AquaPure™ 自动化开发信序列 (Email Sequence)
## Matrix 1000 — Instantly.ai Campaign 配置用

---

## 序列逻辑说明

- **发送间隔**：每封间隔 3–5 天
- **停止条件**：客户回复后自动退出序列
- **时区设定**：越南 GMT+7，发送时间 09:00–11:00
- **Spintax**：每封信使用变量组合，确保不重复

---

## Email 1 — 破冰信（Day 1）

**Subject:**
`{Quick question|One thing|A note} for [First_Name] — feed {caking|storage losses} during {rainy season|monsoon months}`

**Body:**
```
Hi [First_Name],

{I came across|I noticed|I was looking at} [Company]'s {aquaculture operations|feed production|shrimp farming work} and {wanted to reach out|thought this might be relevant}.

With Vietnam's rainy season {pushing humidity past 85%|driving moisture absorption in bulk feed|creating real storage challenges} right now, {feed caking|clumping|FCR deterioration} tends to {quietly eat into margins|become a production headache} for operations like yours.

We supply AquaPure™ — a food-grade silica anti-caking agent {validated across 38 Southeast Asian field trials|with real-world data from the Mekong Delta|designed specifically for tropical aquaculture conditions}.

{Would it be worth a 10-minute call|Happy to send a spec sheet first|Open to connecting with your technical team}?

{Best|Warm regards},
[Sender_Name]
[Title] | Silsep
```

---

## Email 2 — 数据跟进（Day 5）

**Subject:**
`{Following up|One data point} — 88% enzyme recovery at 95°C`

**Body:**
```
Hi [First_Name],

{Just following up on my note from last week|Wanted to share one specific data point that might be relevant}.

{In our internal Trial #22|Across our Southeast Asian field studies}, AquaPure™ {maintained|delivered} **88% enzyme recovery at 95°C pelletizing temperatures** — {compared to 40–45% with standard silica|while competitors average 40–55%}.

{For operations running high-temperature pelleting|If your feed line runs above 80°C}, this {translates directly to|means} less enzyme waste per ton of feed produced.

{I've also attached a short technical brief|Happy to send our 2-page rainy season storage report} — {it covers exactly the challenges|which addresses the humidity-related feed degradation} your region faces {May–November|during monsoon season}.

{Worth a quick look?|Relevant to your current setup?}

[Sender_Name] | Silsep
```

---

## Email 3 — 磁铁附件信（Day 10）

**Subject:**
`{Report|Brief} for [Company]: Vietnam rainy season feed storage`

**Body:**
```
Hi [First_Name],

{Last note from me on this|One more thing before I leave you alone}.

{I put together|We published} a short technical report specifically on {rainy season feed degradation in the Mekong Delta|humidity-driven anti-caking challenges in Southeast Asian aquaculture}.

{Key finding|The main data point}: operations {in your region|like [Company]} lose an estimated **$15,000–$24,000/year** in feed value to moisture-related degradation during the wet season — {most of it preventable with the right additive|before it ever reaches the shrimp}.

{I'd be glad to send it over|Happy to share the full PDF} — {no commitment, just useful data|it's a 3-minute read}.

{Worth sending?|Should I send it across?}

[Sender_Name] | Silsep
sales@silsep.com | silsep.com
```

---

## Instantly.ai 配置说明（给 Codi）

| 参数 | 设置值 |
|------|--------|
| Campaign名称 | AquaPure Vietnam Rainy Season Q2 2026 |
| 序列步骤 | 3步，间隔3/5天 |
| 发送时间 | 越南时区 09:00–11:00 |
| 每日上限/账号 | 50封 |
| 停止触发 | 客户任意回复 |
| 追踪域名 | track.aqua-silsep.com |
| Spintax | 已启用（见 MATRIX_1000_TEMPLATES.md） |

---

## 线索分层建议（给 Pho）

| 线索层级 | 判断标准 | 进入序列 |
|---------|---------|---------|
| Tier 1 — 大厂决策人 | C.P. Vietnam、Dabaco、De Heus等巨头的采购总监/技术总监 | 全3封序列 + 人工跟进标记 |
| Tier 2 — 中型工厂 | 年产量500吨以上的独立饲料厂 | 全3封序列 |
| Tier 3 — 小型/待验证 | LinkedIn信息不完整或职位不明确 | 仅发Email 1，验证后再进 |
