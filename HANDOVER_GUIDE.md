# 🛸 Silsep Accio 账号全量移交与使用指南 (v1.0)

这是一份为您准备的完整移交文档。通过本指南，接手人可以无缝接管 **Silsep Sales** AI 团队，了解目前的自动化进度，并掌握与 7 位 AI 专家协作的方法。

---

## 1. 团队架构与成员手册 (The Silsep Elite)
我们的团队由 7 位各司其职的 AI 专家组成，您可以在 **[3D 数字化指挥部](DASHBOARD_V5.html)** 实时看到他们的动态。

| 成员名称 | 核心角色 | 您可以让他做什么 |
| :--- | :--- | :--- |
| **Accio (TL)** | 项目经理 | 统筹全局、分配任务、跨 Agent 协调、制定方案。 |
| **编程大师 Codi** | 技术集成 | 编写代码、爬虫脚本、对接 Google Sheets、配置 Cron 自动化任务。 |
| **营销专家 Michael** | 销售话术 | 撰写 LinkedIn 开发信、产品描述、营销文案、回复客户询盘。 |
| **Pho** | 越南市场专家 | 调研越南法规、提取当地公司线索、翻译越南语、分析本土痛点。 |
| **搜索引擎优化师 Geo** | SEO/GEO 专家 | 优化官网搜索排名、提升 AI 引擎（Perplexity/GPT）对品牌的引用。 |
| **Aiers** | AI 贸易策略 | 调研同行 AI 案例、监控 AI 贸易趋势、提供避坑指南。 |
| **Gorgeous** | 视觉总监 | 终审所有图片/PPT、设计 3D 产品单页、维护品牌视觉规范。 |
| **Dialo** | 语音专家 | 负责 AI 自动外呼、24/7 智能接听、越南语/英语语音跟进。 |
| **Ledger** | 财务总监 (CFO) | 监控 ROI、管理预算、核算获客成本 (CAC)、管理 P&L。 |

---

## 2. 核心自动化项目：Project Matrix 1000 (全自动外贸增长矩阵)
这是 **Silsep Sales** 团队目前的旗舰工程，旨在通过多域名矩阵，实现每日 1,000 封高权重开发信的全自动投递。

*   **业务逻辑**：**Pho** 挖掘域名 -> **编程大师 Codi** 配置 DNS & Instantly.ai API -> **营销专家 Michael** 编写变量化 (Spintax) 邮件 -> **Accio** 统筹矩阵轮转。
*   **当前进度**：首批 5 个卫星域名已就绪，Instantly.ai API 接口已联调，正在进行 AquaPure (水产级) 业务的横向复制。
*   **接手人操作**：只需提供 **Instantly.ai API Key** 并在群里说：*“@{DID-DB9653-765527} (编程大师 Codi) 启动 Matrix 1000 首批测试任务。”*
*   **资源参考**：详见 [promotion_plan_wechat.md](promotion_plan_wechat.md) 中的“矩阵拓客 SOP”。

---

## 3. 核心工具与常用网站 (Tech Stack)
接手人需要了解我们常用的数字化战场：

| 平台名称 | 用途 | 状态 |
| :--- | :--- | :--- |
| [Silsep.com](https://www.silsep.com) | 我们的品牌官网 | **搜索引擎优化师 Geo** 正在持续诊断 SEO/GEO 情况。 |
| [Alibaba Message](https://message.alibaba.com/) | 处理国际站询盘 | 需手动登录后，**编程大师 Codi** 方可辅助抓取消息。 |
| [Shopify Inbox](https://inbox.shopify.com/) | 官网客户私信 | 同样需保持登录状态。 |
| [Google Sheets](https://sheets.google.com) | 潜客 CRM 数据库 | 自动化获客的线索会实时录入特定的表格中。 |
| [Gmail (sales@silsep.com)](https://mail.google.com) | 业务主邮箱 | 已通过 `listen_gmail_reply` 开启实时监听。 |

---

## 4. 如何与 AI 团队产生协作 (SOP)
接手人无需了解编程，只需在群聊中使用“自然语言”指挥：

1.  **分工指令**：使用 `@{Agent ID}` 明确指派任务。例如：*“@Michael 帮我改下这个邮件模板。”*
2.  **查看进度**：在浏览器打开 [DASHBOARD_V5.html](DASHBOARD_V5.html)，查看 Q 版机器人的实时倒计时和工作状态。
3.  **开发信“安全模式” (Drafts Only)**：**当前已开启“存入草稿箱供人工审阅”模式**。营销专家 Michael 会自动根据线索写好信，编程大师 Codi 会将其存入 `sales@silsep.com` 的 **草稿箱 (Drafts)**。接手人只需每天登录邮箱，检查并点击“发送”即可。若需开启“全自动发送”，请在群聊中告知 Codi。
4.  **功劳评估**：查阅 [AGENT_STATUS.json](AGENT_STATUS.json)，根据 Merit Points (积分) 决定奖励或调整。
5.  **财务监控**：通过 [FINANCIAL_LEDGER.md](FINANCIAL_LEDGER.md) 监控月度获客成本 (CAC) 与 ROI。
6.  **知识喂养**：如果有新的 PDF 规格书或价格表，直接拖进对话框，并说：*“请全员学习这个新文档。”*

---

## 5. 账号的重要调整记录
为了符合 Silsep 的品牌调性，我们做了以下关键定制：
- **视觉风格**：全线采用 **Apple 级 v5.0 Elite 3D 界面**，机器人为白瓷+拉丝银材质。
- **任务透明化**：每个 Agent 头顶都有 **HUD 全息窗**，显示具体动作和 ETA 倒计时。
- **本地环境优化**：已修复 Windows 系统的代理连接问题，确保网络畅通。

---
*交接人：Accio (TL)*
*日期：2026-03-31*
