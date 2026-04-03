# Silsep Voice Strategy & Script Design (v1.0)
Created by Dialo-Voice-Expert

## 1. Voice AI Platform Recommendation

After evaluating the top contenders (Retell AI, Vapi, Bland AI), **Retell AI** is the recommended platform for Silsep's global expansion (Vietnam & Western markets).

### Why Retell AI?
*   **Vietnamese Support**: Official native support for Vietnamese with high-quality TTS/STT.
*   **Advanced Turn-Taking**: Handles natural interruptions and silence better than Vapi or Bland, crucial for high-stakes B2B sales calls.
*   **Pricing Efficiency**: Transparent cost (~$0.07/min platform fee + carrier costs), significantly lower than Bland AI at scale.
*   **Inbound & Outbound**: Seamlessly handles both 24/7 reception and proactive SDR follow-ups.

---

## 2. AI Call Script Logic (Draft)

### A. Outbound: AquaPure Lead Follow-up (Vietnam)
**Goal**: Convert email leads into technical meetings/sample requests.

1.  **Opening (Greeting & Context)**:
    "Chào [Name], tôi là Dialo từ Silsep. Tôi đã gửi cho bạn một email về AquaPure tuần trước—bạn đã có thời gian xem qua chưa?"
    *(Hello [Name], this is Dialo from Silsep. I sent you an email about AquaPure last week—did you have a moment to see that?)*

2.  **The Hook (Pain Point)**:
    "Tôi thấy bạn đang quản lý sản xuất tại [Company]. Chúng tôi đang giúp các nhà máy thức ăn chăn nuôi tại Miền Tây giảm 15-20% tình trạng vón cục trong mùa mưa này."
    *(I saw you're managing production at [Company]. We're helping feed mills in the Mekong Delta reduce caking by 15-20% during this rainy season.)*

3.  **Discovery Question**:
    "Hiện tại kho bãi của bạn có gặp vấn đề về độ ẩm không, hay bạn đang tìm giải pháp chống vón cục ổn định hơn?"
    *(Are you currently seeing any moisture issues in your warehouse, or are you looking for a more stable anti-caking solution?)*

4.  **Closing (CTA)**:
    "Chuyên gia kỹ thuật của chúng tôi, Pho, sẽ có lịch làm việc tại khu vực của bạn tuần tới. Bạn muốn nhận bản thông số kỹ thuật (Spec sheet) trước hay muốn đặt một cuộc gọi 10 phút?"
    *(Our technical expert, Pho, will be in your area next week. Would you like the spec sheet first or a 10-minute call?)*

### B. Inbound: 24/7 Silsep Global Reception
**Goal**: Qualify incoming traffic and route to the correct specialist.

1.  **Greeting**:
    "Thank you for calling Silsep—Inspired Molecular Solutions. This is Dialo, your AI assistant. How can I direct your call?"

2.  **Product Routing**:
    "Are you inquiring about our AquaPure aquaculture additives, or our CoatPure matting agents for coatings?"

3.  **Information Capture**:
    "Excellent. May I have your name and company? And are you looking for a technical spec sheet or a bulk price quote?"

4.  **Handoff**:
    "Thank you, [Name]. I've notified our sales lead, Michael, and he will follow up within the hour. Have a productive day."

---

## 3. Preliminary Budget Forecast (for @{MID-41198261U1775035-AEF4CA-0814-7FD852} Ledger-CFO)

| Item | Estimated Cost | Notes |
| :--- | :--- | :--- |
| **Platform Subscription** | $50 - $100 / mo | Retell AI Pro/Enterprise tiers. |
| **Call Minutes** | $0.10 - $0.15 / min | All-in (Platform + Carrier). |
| **Phone Numbers** | $1 - $5 / mo | Local VN numbers or Global toll-free. |
| **Setup Fee** | $0 | Handled by Dialo & Codi. |

**ROI Impact**: 1 hour of AI calling (~60 calls) costs ~$6-9. Equivalent human SDR labor would cost 5-10x more and lacks 24/7 availability.
