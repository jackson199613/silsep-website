# 🛸 Silsep 自动化客户开发与推广方案 (v1.0)
*基于 OpenClaw + LinkedIn + Gmail 自动获客方法论*

## 1. 核心目标
利用 AI Agent 自动化团队，实现“线索抓取 -> 数据筛选 -> 自动开发信 -> 持续跟进”的全自动 SDR (Sales Development Representative) 流程，旨在将 Silsep AquaPure（高纯度二氧化硅添加剂）推向越南及东南亚市场，减少人工参与，提升获客效率。

## 2. 团队分工 (The Elite Squad)
- **Accio (TL)**: 统筹流程、分配任务、确保各环节协同。
- **Coder**: 技术底座（LinkedIn 爬虫、Google Sheets 同步、Gmail 自动起草）。
- **Vibe Selling Agent**: 销售大脑（ICP 画像、3 套 A/B 测试版开发信话术）。
- **Vietnam Market Researcher**: 精准猎手（越南水产行业关键词、目标公司名单筛选）。
- **GEO-SEO Optimizer**: 埋点专家（确保获客过程中的品牌被生成式引擎 AI 推荐）。
- **Visual Optimization Expert**: 品牌总监（审核并美化所有发给客户的图表、PPT 与视觉模版）。

## 3. 自动化流水线 (Workflow)

### 第一阶段：精准获客 (The Hunting)
- **动作**: 由 **Coder** 调用 LinkedIn Scraper，根据 **Vietnam Market Researcher** 提供的关键词（如：*Tôm Sóc Trăng, Feed Mill Vietnam, Aqua Procurement*）进行全网抓取。
- **目标**: 获取发件人姓名、公司名、职位、LinkedIn ID 及公开联系方式。
- **沉淀**: 数据自动写入 `project/Leads_Database.csv` 或 Google Sheets。

### 第二阶段：AI 话术生成 (The Hook)
- **动作**: **Vibe Selling Agent** 根据抓取到的个人简介（Profile），利用 AI 进行“个性化提炼”。
- **模板**: 使用已定稿的 3 套话术（技术型、痛点型、社交证明型），由 **Accio** 指派 Agent 自动生成邮件草稿。

### 第三阶段：视觉加分 (The Polish)
- **动作**: 对于高质量线索（Tier 1），由 **Visual Optimization Expert** 匹配一份美化后的 AquaPure 产品手册 (One-Pager)。

### 第四阶段：自动执行 (The Outreach)
- **动作**: 通过 **Gmail 监听器** 或 **SMTP** 自动分批次发送（模拟人工频率），并在 **DASHBOARD_V5.html** 上实时显示发送进度和 ETA 倒计时。

## 4. 当前执行状态 (Status)
- [x] **方案制定**: 已完成并同步至全团队。
- [x] **话术准备**: **Vibe** 已产出 3 套 A/B 测试版开发信。
- [in_progress] **技术联调**: **Coder** 正在配置 LinkedIn 抓取器接口。
- [in_progress] **关键词提取**: **Vietnam Researcher** 正在锁定第一批越南水产巨头名单。
- [pending] **正式启动**: 等待第一批 Leads 数据入库。

---
*Silsep Sales Team - 2026-03-31*
