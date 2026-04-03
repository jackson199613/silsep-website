# 📧 Silsep Matrix 1000: 营销邮件矩阵模版 (Spintax 版)

为了确保 1000 封/日 的高频率发信不被拦截，以下模版均采用了 **Spintax** 嵌套逻辑。

---

## 模版 1：技术专家型 (针对 R&D / 技术总监)
**核心关联**：38 份技术试验文档 (#22 酶活回收率)

*   **主题行 (Subject)**:
    `{{Hi|Hello}} {{First_Name}}, {{Quick question|Technical inquiry}} regarding {{Company_Name}}'s enzyme stability`
*   **正文 (Body)**:
    > "{{I was reviewing|I came across}} your work at {{Company_Name}}. In our latest **Internal Trial #22**, we achieved an **88% enzyme recovery rate** under 95°C pelleting temperatures using our **Molecular Shielding** tech.
    >
    > {{Most competitors only reach 40%|Standard silicas often fail here}}. Would you be open to {{a brief technical exchange|reviewing the data}}?
    >
    > {{Best|Regards}},
    > {{Sender_Name}}"

---

## 模版 2：战略合作型 (针对 CEO / 董事总经理)
**核心关联**：圣迭戈研发 + 三明直造 (ROI 优势)

*   **主题行 (Subject)**:
    `{{Strategic|B2B}} Proposal: Optimizing {{Company_Name}}'s supply chain ROI`
*   **正文 (Body)**:
    > "{{Hi|Dear}} {{First_Name}}, Silsep operates on a unique **San Diego R&D + Sanming Direct Manufacturing** model.
    >
    > This allows us to deliver {{premium California-engineered|high-spec}} silica solutions at {{factory-direct|competitive}} prices. {{I believe|Our data suggests}} this could improve your bottom line by {{15-20%|significantly}}.
    >
    > {{Are you the right person to speak with?|Worth a 5-minute chat?}}
    >
    > {{Cheers|Best regards}},
    > {{Sender_Name}}"

---

## 模版 3：雨季救急型 (针对 越南/东南亚 生产经理)
**核心关联**：试验文档 #31 (湄公河三角洲抗结块)

*   **主题行 (Subject)**:
    `{{Urgent|Production Tip}}: Reducing {{Caking|Clumping}} and {{FCR Loss}} during this {{Rainy Season}}`
*   **正文 (Body)**:
    > "Chào {{First_Name}}, I'm {{Sender_Name}} from Silsep. With the current high humidity in the **Mekong Delta**, are you seeing issues with feed clumping or {{FCR instability|enzyme loss}}?
    >
    > Our **Internal Trial #31** showed that **AquaPure™** reduced ammonia levels by 1.5 ppm in 4 hours and {{eliminated|drastically reduced}} clumping.
    >
    > {{Can I send you a 1kg sample?|Would you like to see the test report?}}
    >
    > {{Best|Thanks}},
    > {{Sender_Name}}"

---

### 🛠️ 编程大师 Codi 的技术说明：
1.  **动态变量**：`{{First_Name}}` 等标签将由我的 `instantly_api_integration.py` 脚本从 Google Sheets 自动注入。
2.  **内容旋转**：`{Hi|Hello}` 这种括号内的内容，Instantly 会在发信时随机选择其一，确保 1000 封信在服务器层面长得都不一样。
