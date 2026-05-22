/* JS for SILSEP Website */

document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Smooth Scrolling for Nav Links
    const navLinks = document.querySelectorAll('nav a, .hero-btns a, .learn-more');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Language Switcher & i18n Core ---
    const dictionary = {
        'en': {
            'nav_home': 'Home',
            'nav_solutions': 'Solutions',
            'nav_cases': 'Case Studies',
            'nav_insights': 'Insights',
            'nav_tech_hub': 'Technical Hub',
            'nav_connect': 'Connect',
            'nav_whitepapers': 'Technical Whitepapers',
            'nav_authority': 'Industry Authority',
            'nav_lab': 'Molecular Lab',
            'nav_standards': 'Standards Initiative',
            'nav_team': 'Scientific Team',
            'nav_quality': 'Quality & Compliance',
            'nav_carrier': 'Carrier Science',
            'nav_gut_integrity': 'Gut Integrity',
            'nav_feed_safety': 'Feed Safety',
            'nav_mill_efficiency': 'Mill Efficiency',
            'modal_title': 'Request Free 500g Sample',
            'modal_subtitle': 'Technical Grade Silica for Laboratory & Industrial Trials',
            'form_name': 'Full Name (姓名) *',
            'form_email': 'Work Email (邮箱) *',
            'form_company': 'Company (公司) *',
            'form_phone': 'Phone Number (电话) *',
            'form_address': 'Delivery Address (收货地址) *',
            'btn_request_trial': 'Send Request',
            'hero_title': 'Molecular <span>Science</span> for Tropical Aquaculture',
            'hero_subtitle': 'Silsep delivers advanced synthetic silica solutions and feed processing compounds. Engineered in San Diego, manufactured in Sanming, optimized for Southeast Asia.',
            'btn_explore': 'Explore Solutions',
            'btn_calculator': 'ROI Calculator',
            'btn_scientists': 'Meet the Scientists',
            'badge_gut_health': 'Gut Integrity',
            'badge_feed_safety': 'Feed Safety',
            'badge_mill': 'Mill Efficiency',
            'sol_gut_title': 'AquaConvert Plus™',
            'sol_gut_desc': 'High-porosity molecular carrier designed for heat-sensitive essential oils and enzymes.',
            'sol_toxin_title': 'ToxinShut™',
            'sol_toxin_desc': 'Broad-spectrum synthetic silicate with 95% active enzymatic deactivation of ZEN toxins.',
            'section_solutions_title': 'Solutions by Challenge',
            'section_solutions_subtitle': 'We tackle the critical pain points of modern aquaculture and feed production with precision chemistry.',
            'card_gut_title': 'Gut Integrity & Growth',
            'card_gut_desc': 'Optimizing the microbiome and strengthening the intestinal barrier to improve FCR and pathogen resistance in shrimp and fish.',
            'card_safety_title': 'Feed Safety & Stability',
            'card_safety_desc': 'Comprehensive toxin management and mould inhibition systems for high-fat, high-moisture tropical feeds.',
            'card_mill_title': 'Mill Efficiency',
            'card_mill_desc': 'Advanced silica carriers for liquid additives, improving flowability, uniformity, and thermal recovery in extrusion processes.',
            'btn_explore_solution': 'Explore Solution →',
            'section_molecular_title': '2km Deep: Molecular Solutions',
            'section_molecular_subtitle': 'Beyond simple carriers. We engineer precision molecular shielding and active bio-inactivation for the future of aquaculture.',
            'adv_title': 'The Molecular Advantage',
            'adv_desc': 'Silsep’s <b>Deep Pore Engineering</b> allows for the active sequestration of toxins and the controlled release of nutrients where generic carriers fail. We don\'t just carry ingredients; we protect their molecular integrity through the harshest processing and digestive environments.',
            'adv_list_1': '<b>Ordered Mesoporous Structure:</b> Maximizing surface area.',
            'adv_list_2': '<b>Thermal Integrity:</b> Protecting 88% of bioactive payloads.',
            'adv_list_3': '<b>Targeted Release:</b> Precision delivery in the distal gut.',
            'btn_all_insights': 'Explore All 2km Deep Insights',
            'section_authority_title': 'Industry Influence & Global Leadership',
            'section_authority_subtitle': 'Beyond technology, Silsep is a cornerstone of the global aquaculture conversation. From advising the <b>Ministry of Agriculture (MARD)</b> in Vietnam to collaborating with <b>UCSD</b> in San Diego, we define the standards of molecular precision for the next generation of feed production.',
            'advisor_title': 'Regulatory Advisor',
            'advisor_desc': 'Special technical consultant for Southeast Asian feed safety standards.',
            'keynote_title': 'Keynote Presence',
            'keynote_desc': 'Regular speakers at VIETSTOCK, AQUA EXPO, and UCSD Molecular Forums.',
            'btn_influence': 'Explore Our Influence',
            'btn_compliance': 'Global Compliance',
            'voice_title': 'Industry Voice',
            'join_convo': 'Join the Industry Conversation →',
            'section_pillars_title': 'Global Solutions for Feed & Farm',
            'section_pillars_subtitle': 'Combining the academic rigor of our <strong>San Diego R&D Lab</strong> with the industrial expertise of our <strong>Sanming Base</strong>, we deliver molecular solutions backed by over 38 internal trial documents and 40 years of silica technology.',
            'pillar_animal_title': 'Animal Nutrition & Health',
            'pillar_animal_desc': 'Enhancing feed safety, gut integrity, and performance efficiency through molecularly-engineered carriers and deactivation technology.',
            'pillar_aqua_title': 'Aquaculture Solutions',
            'pillar_aqua_desc': 'Precision molecular management for intensive aquaculture. Specialized in water quality, pellet stability, and immune resilience.',
            'btn_view_solutions': 'View Solutions',
            'btn_view_aqua': 'View AquaScience™',
            'aqua_profit_title': 'New: Aqua-Profit™ Tool',
            'aqua_profit_link': 'Calculate Your Shrimp/Fish Farm ROI <i class="fas fa-calculator" style="margin-left: 5px;"></i>',
            'section_leadership_title': 'Global Leadership',
            'section_leadership_subtitle': 'Guided by academic wisdom and precision molecular science, our leadership bridges the gap between San Diego R&D and global industrial excellence.',
            'section_experts_title': 'Scientific & Application Experts',
            'section_partnership_title': 'The SILSEP Partnership Journey',
            'section_partnership_subtitle': 'A structured technical approach to solving your most complex nutritional and stability challenges.',
            'step_1_title': 'Initial Inquiry',
            'step_1_desc': 'Share your technical goals.',
            'step_2_title': 'Pain Point Diagnosis',
            'step_2_desc': 'We identify the root cause.',
            'step_3_title': 'Targeted Solution',
            'step_3_desc': 'Tailored molecular approach.',
            'step_4_title': 'Sampling & Validation',
            'step_4_desc': 'Lab-grade samples provided.',
            'step_5_title': 'Field Testing',
            'step_5_desc': 'Real-world pond/mill trials.',
            'step_6_title': 'Official Launch',
            'step_6_desc': 'Commercial implementation.',
            'step_7_title': 'Ongoing Support',
            'step_7_desc': '24/7 technical assistance.',
            'btn_start_consultation': 'Start Your Consultation →',
            'section_services_title': 'Technical Support & Laboratory Services',
            'section_services_desc': 'We don\'t just sell ingredients; we provide a partnership. Our dedicated teams in SE Asia ensure your success through:',
            'service_list_1': '<strong>Customer Lab Services (CLS):</strong> Testing for mold, mycotoxins, and product efficacy.',
            'service_list_2': '<strong>Application Solutions:</strong> Expert engineering for precise liquid ingredient application.',
            'service_list_3': '<strong>Expert Consultation:</strong> Tailored protocols for Vietnam, Thailand, and Indonesia.',
            'btn_learn_services': 'Learn About Our Services',
            'section_blog_title': 'Scientific Briefs & Industry Analysis',
            'section_blog_subtitle': 'Read the latest research from our San Diego R&D center and practical application results from our Sanming production base.',
            'blog_1_tag': 'Aquaculture Stability',
            'blog_1_title': 'The Silica Revolution: Enhancing Bioavailability',
            'blog_1_desc': 'How 20 years of silica expertise from Sanming and UCSD-led research are transforming nutrient delivery in the tropics.',
            'btn_read_brief': 'Read Technical Brief →',
            'blog_2_tag': 'Global Success Stories',
            'blog_2_title': 'Real-World Case Study: FCR Optimization in Thailand',
            'blog_2_desc': 'Discover how SiamAqua reduced FCR by 0.15 using AquaConvertPlus™ and San Diego-led R&D protocols.',
            'btn_view_cases': 'View All Case Studies →',
            'blog_3_tag': 'Molecular Vision',
            'blog_3_title': 'John Jiang\'s Vision for SE Asian Aquaculture',
            'blog_3_desc': 'Exploring the dual pillars of Precision Molecular Nutrition and Tropical Stability for FCR optimization.',
            'btn_view_vision': 'View Vision Report →',
            'btn_all_insights_v2': 'View All Scientific Insights',
            'section_contact_title': 'Let\'s Work Together',
            'section_contact_desc': 'Contact Silsep today to learn how our molecular solutions can optimize your animal nutrition and health programs.',
            'info_location': 'R&D: San Diego, CA, USA | Production: Sanming, Fujian, China',
            'info_contact': 'sales@silsep.com | +86 18605971038 | +1 619 609 3350',
            'footer_desc': 'Global R&D + Direct Manufacturing. Bridging San Diego innovation with 20+ years of industrial silica expertise.',
            'footer_rights': '© 2026 SILSEP Industries. Inspired Molecular Solutions.',
            'footer_col_company': 'Company',
            'footer_col_solutions': 'Solutions',
            'footer_col_tech': 'Technical Hub',
            'footer_col_connect': 'Connect',
            'whatsapp_text': 'WhatsApp',
            'connect_title': 'Connect with our Scientific Team',
            'placeholder_name': 'Full Name',
            'placeholder_email': 'Professional Email',
            'placeholder_message': 'How can we help you?',
            'btn_submit': 'Submit Request',
            'lang_display': 'Language',
            'products_hero_title': 'Advanced Animal Nutrition & Aquaculture Solutions',
            'products_hero_subtitle': 'Bridging the gap between San Diego R&D and global industrial manufacturing, we provide high-performance molecular carriers and specialty ingredients for feed mills and farms globally.',
            'btn_animal_nutrition': 'Animal Nutrition & Health',
            'btn_aqua_solutions': 'AquaScience™ Solutions',
            'segment_animal_title': 'Animal Nutrition & Health',
            'segment_animal_desc': 'Specialized solutions for Swine, Poultry, and Ruminants focusing on feed safety, gut integrity, and performance optimization.',
            'subcat_quality_safety': 'Feed Quality & Safety',
            'badge_core_solution': 'Core Solution',
            'toxin_shut_desc': '<strong>STS Molecular Deactivation.</strong> The ultimate multi-action toxin management solution combining Synthetic Tetrahedral Silicates (STS) with enzymatic biodegradation.',
            'key_benefits': 'Key Benefits:',
            'toxin_shut_benefit_1': 'Irreversible adsorption of Aflatoxins and Zearalenone',
            'toxin_shut_benefit_2': 'In-vivo enzymatic degradation of polar toxins',
            'toxin_shut_benefit_3': 'Broad-spectrum protection without nutrient binding',
            'spec_appearance': 'Appearance:',
            'spec_appearance_val': 'Off-white Micro-powder',
            'spec_cec': 'CEC:',
            'spec_dosage': 'Dosage:',
            'btn_view_trial': 'View Trial Report →',
            'packaging_1kg_pouch': '1kg Pouch / 25 Pouches per Carton',
            'mould_out_desc': '<strong>Gas-Phase Protection.</strong> Triple-action vapor technology using buffered organic acids to eliminate mold spores in raw materials and finished feed.',
            'mould_out_benefit_1': 'Immediate elimination of active fungal colonies',
            'mould_out_benefit_2': 'Long-term residual protection during storage',
            'mould_out_benefit_3': 'Non-corrosive to feed mill equipment',
            'spec_active_ingredient': 'Active Ingredient:',
            'spec_active_val': 'Propionic & Formic Acid Salts',
            'spec_volatility': 'Volatility:',
            'spec_volatility_val': 'Low-Vapor Constant Release',
            'spec_shelf_life': 'Shelf Life:',
            'spec_shelf_life_val': '24 Months',
            'packaging_1kg_prof': '1kg Pouch / Professional Grade',
            'subcat_gut_performance': 'Gut Health & Performance',
            'gut_plus_desc': '<strong>Intestinal Integrity.</strong> Targeted delivery of organic acids to the lower gut using molecular silica carriers for maximum antimicrobial effect.',
            'gut_plus_benefit_1': 'Pathogen control (Salmonella & E.coli) in the ileum',
            'gut_plus_benefit_2': 'Enhanced villi height and intestinal surface area',
            'gut_plus_benefit_3': 'Sustained-release for protection along the digestive tract',
            'spec_base': 'Base:',
            'spec_base_val': 'High-Surface Molecular Silica',
            'spec_acid_content': 'Acid Content:',
            'spec_acid_val': 'Propionic & Butyric Salts',
            'packaging_1kg_25': '1kg Packaging / 25 Units per Carton',
            'convert_plus_desc': '<strong>Enzyme Stability Shield.</strong> A specialized carrier that protects heat-sensitive exogenous enzymes during high-temperature conditioning and pelleting.',
            'convert_plus_benefit_1': 'Protects enzymes up to 95°C (203°F) conditioning',
            'convert_plus_benefit_2': 'Improved nutrient bioavailability and feed digestibility',
            'convert_plus_benefit_3': 'Low dust formulation for safe feed mill handling',
            'spec_technology': 'Technology:',
            'spec_tech_val': 'Thermal-Insulative Surface Modification',
            'spec_form': 'Form:',
            'spec_form_val': 'Free-flowing Granules',
            'spec_recovery': 'Pelleting Recovery:',
            'packaging_1kg_choice': '1kg Packaging / Tech Specialist Choice',
            'segment_aqua_title': 'AquaScience™ Solutions',
            'segment_aqua_desc': 'Comprehensive feed mill and farm solutions designed to maximize FCR and improve water quality in intensive aquaculture systems.',
            'subcat_farm_pond': 'Farm & Pond Solutions',
            'badge_molecular_rescue': 'Molecular Rescue',
            'aqua_pure_desc': '<strong>Molecular Water Rescue.</strong> A "molecular sponge" designed to rapidly adsorb ammonia, nitrite, and organic toxins in ponds without altering pH.',
            'aqua_pure_benefit_1': 'Reduces toxic ammonia spikes in intensive shrimp ponds',
            'aqua_pure_benefit_2': 'Selective adsorption for inorganic pollutants',
            'aqua_pure_benefit_3': 'Safe for use during all growth stages of fish and shrimp',
            'spec_base_aluminosilicate': 'Synthetic Porous Aluminosilicate',
            'spec_ammonia_ads': 'Ammonia Adsorption:',
            'packaging_1kg_case': '1kg Pouch / 25 Units per Case',
            'aqua_clear_desc': '<strong>Turbidity Management.</strong> High-potential non-balanced tecnologia to clear suspended solids and restore sunlight penetration for algae blooms.',
            'aqua_clear_benefit_1': 'Rapid clarification of suspended solids',
            'aqua_clear_benefit_2': 'Restores sunlight penetration for healthy blooms',
            'aqua_clear_benefit_3': 'Improves dissolved oxygen levels',
            'spec_clarification': 'Clarification Power:',
            'spec_clarification_val': 'High-Efficiency Flocculation',
            'spec_application': 'Application Rate:',
            'spec_app_val': 'Emergency/Maintenance dosage',
            'packaging_1kg_standard': '1kg Standard Packaging',
            'subcat_mill_solutions': 'Feed Mill Solutions',
            'badge_pellet_stability': 'Pellet Stability',
            'aqua_convert_desc': '<strong>Bioavailability & Stability.</strong> High-porosity molecular carrier designed for heat-sensitive essential oils and enzymes.',
            'aqua_convert_benefit_1': 'Protects bioactives through high-pressure extrusion',
            'aqua_convert_benefit_2': 'Enhances oil loading and pellet density',
            'aqua_convert_benefit_3': 'Increases shelf-life stability of vitamin-mineral premixes',
            'spec_surface_area': 'Surface Area:',
            'spec_surface_area_val': '>500 m²/g',
            'spec_loading_cap': 'Loading Capacity:',
            'spec_loading_val': '>300% (Oil)',
            'spec_heat_res': 'Heat Resistance:',
            'spec_heat_res_val': 'Up to 1100°C base stability',
            'packaging_1kg_tech': '1kg Packaging / Global R&D choice',
            'sil_active_desc': '<strong>Pathogen Management.</strong> Molecularly-activated silica matrix designed to neutralize pathogenic bacteria in the digestive tract.',
            'sil_active_benefit_1': 'Active inhibition of Vibrio and other pathogens',
            'sil_active_benefit_2': 'Enhances shrimp hepatopancreas health',
            'sil_active_benefit_3': 'Improves survival rates in EHP/EMS risk zones',
            'spec_activation': 'Activation Method:',
            'spec_activation_val': 'Surface-Functionalized SAS',
            'spec_target': 'Target Pathogens:',
            'spec_target_val': 'Vibrio spp., AHPND',
            'packaging_1kg_elite': '1kg Elite Packaging'
        },
        'cn': {
            'nav_home': '首页',
            'nav_solutions': '解决方案',
            'nav_cases': '案例研究',
            'nav_insights': '技术洞察',
            'nav_tech_hub': '技术中心',
            'nav_connect': '联系我们',
            'hero_title': '热带水产养殖的<span>分子科学</span>',
            'hero_subtitle': 'Silsep 提供先进的合成二氧化硅解决方案和饲料加工化合物。圣迭戈研发，三明生产，专为东南亚市场优化。',
            'btn_explore': '探索解决方案',
            'btn_calculator': '收益计算器',
            'badge_gut_health': '肠道健康',
            'badge_feed_safety': '饲料安全',
            'badge_mill': '工厂效率',
            'sol_gut_title': 'AquaConvert Plus™',
            'sol_gut_desc': '为热敏精油和酶设计的高孔隙率分子载体。',
            'sol_toxin_title': 'ToxinShut™',
            'sol_toxin_desc': '广谱合成硅酸盐，对 ZEN 毒素具有 95% 的活性酶去活率。',
            'footer_desc': '全球研发 + 直接制造。将圣迭戈的创新与 20 多年的工业二氧化硅专业知识相结合。',
            'footer_rights': '© 2026 SILSEP 工业。版权所有。',
            'whatsapp_text': '微信/WhatsApp',
            'connect_title': '联系我们的科学团队',
            'placeholder_name': '全名',
            'placeholder_email': '专业邮箱',
            'placeholder_message': '您的需求',
            'btn_submit': '提交申请',
            'lang_display': '语言切换'
        },
        'vn': {
            'nav_home': 'Trang Chủ',
            'nav_solutions': 'Giải Pháp',
            'nav_cases': 'Nghiên Cứu Điển Hình',
            'nav_insights': 'Thông Tin Chi Tiết',
            'nav_tech_hub': 'Trung Tâm Kỹ Thuật',
            'nav_connect': 'Kết Nối',
            'hero_title': 'Khoa Học <span>Phân Tử</span> cho Nuôi Trồng Thủy Sản Nhiệt Đới',
            'hero_subtitle': 'Silsep cung cấp các giải pháp silica tổng hợp tiên tiến và các hợp chất chế biến thức ăn chăn nuôi. Được thiết kế tại San Diego, sản xuất tại Tam Minh, tối ưu hóa cho Đông Nam Á.',
            'btn_explore': 'Khám Phá Giải Pháp',
            'btn_calculator': 'Máy Tính ROI',
            'badge_gut_health': 'Sức Khỏe Đường Ruột',
            'badge_feed_safety': 'An Toàn Thức Ăn',
            'badge_mill': 'Hiệu Suất Nhà Máy',
            'sol_gut_title': 'AquaConvert Plus™',
            'sol_gut_desc': 'Chất mang phân tử có độ xốp cao được thiết kế cho các loại tinh dầu và enzyme nhạy cảm với nhiệt.',
            'sol_toxin_title': 'ToxinShut™',
            'sol_toxin_desc': 'Silicat tổng hợp phổ rộng với khả năng khử hoạt tính enzyme tích cực 95% đối với độc tố ZEN.',
            'footer_desc': 'R&D Toàn Cầu + Sản Xuất Trực Tiếp. Kết nối sự đổi mới của San Diego với hơn 20 năm chuyên môn về silica công nghiệp.',
            'footer_rights': '© 2026 SILSEP Industries. Bảo lưu mọi quyền.',
            'whatsapp_text': 'WhatsApp',
            'connect_title': 'Kết nối với Đội ngũ Khoa học của chúng tôi',
            'placeholder_name': 'Họ và Tên',
            'placeholder_email': 'Email Công việc',
            'placeholder_message': 'Yêu cầu của bạn',
            'btn_submit': 'Gửi Yêu Cầu',
            'lang_display': 'Ngôn ngữ'
        },
        'th': {
            'nav_home': 'หน้าแรก',
            'nav_solutions': 'โซลูชัน',
            'nav_cases': 'กรณีศึกษา',
            'nav_insights': 'ข้อมูลเชิงลึก',
            'nav_tech_hub': 'ศูนย์เทคนิค',
            'nav_connect': 'ติดต่อเรา',
            'hero_title': '<span>วิทยาศาสตร์โมเลกุล</span> สำหรับการเพาะเลี้ยงสัตว์น้ำเขตร้อน',
            'hero_subtitle': 'Silsep นำเสนอโซลูชันซิลิกาสังเคราะห์ขั้นสูงและสารประกอบในการแปรรูปอาหารสัตว์ ออกแบบในซานดิเอโก ผลิตในซานหมิง ปรับแต่งให้เหมาะกับเอเชียตะวันออกเฉียงใต้',
            'btn_explore': 'สำรวจโซลูชัน',
            'btn_calculator': 'เครื่องคำนวณ ROI',
            'badge_gut_health': 'สุขภาพลำไส้',
            'badge_feed_safety': 'ความปลอดภัยของอาหารสัตว์',
            'badge_mill': 'ประสิทธิภาพโรงงาน',
            'sol_gut_title': 'AquaConvert Plus™',
            'sol_gut_desc': 'ตัวพาโมเลกุลที่มีรูพรุนสูง ออกแบบมาสำหรับน้ำมันหอมระเหยและเอนไซม์ที่ไวต่อความร้อน',
            'sol_toxin_title': 'ToxinShut™',
            'sol_toxin_desc': 'ซิลิเกตสังเคราะห์แบบครอบคลุม พร้อมการยับยั้งเอนไซม์ที่ใช้งานอยู่ 95% สำหรับสารพิษ ZEN',
            'footer_desc': 'การวิจัยและพัฒนาทั่วโลก + การผลิตโดยตรง เชื่อมโยงนวัตกรรมจากซานดิเอโกกับความเชี่ยวชาญด้านซิลิกาอุตสาหกรรมกว่า 20 ปี',
            'footer_rights': '© 2026 SILSEP Industries. สงวนลิขสิทธิ์.',
            'whatsapp_text': 'WhatsApp',
            'connect_title': 'ติดต่อทีมวิทยาศาสตร์ของเรา',
            'placeholder_name': 'ชื่อ-นามสกุล',
            'placeholder_email': 'อีเมลที่ทำงาน',
            'placeholder_message': 'สอบถามข้อมูล',
            'btn_submit': 'ส่งคำขอ',
            'lang_display': 'ภาษา'
        }
    };

    const applyTranslations = (lang) => {
        // 1. Precise data-i18n translation
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dictionary[lang] && dictionary[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (key.startsWith('placeholder_')) el.placeholder = dictionary[lang][key];
                } else {
                    el.innerHTML = dictionary[lang][key];
                }
            }
        });

        // 2. Global text node replacement (Safe fallback)
        // This ensures text NOT in data-i18n also gets translated if it exists in a secondary flat dictionary
        const flatMap = {
            'cn': {
                'Home': '首页', 'Solutions': '解决方案', 'Case Studies': '案例研究', 'Insights': '行业洞察',
                'Technical Hub': '技术中心', 'Connect': '联系我们', 'Contact': '联系', 'WhatsApp': '微信/WhatsApp',
                'Explore Solutions': '探索解决方案', 'Meet the Scientists': '会见科学家', 'Quality & Compliance': '质量与合规',
                'Carrier Science': '载体科学', 'Scientific Team': '科研团队', 'Gut Integrity': '肠道完整性',
                'Feed Safety': '饲料安全', 'Mill Efficiency': '加工效率', 'ROI Calculator': '投资收益计算器',
                'Let\'s Work Together': '让我们共同努力', 'Submit Request': '提交申请', 'Privacy Policy': '隐私政策'
            },
            'vn': {
                'Home': 'Trang Chủ', 'Solutions': 'Giải Pháp', 'Case Studies': 'Nghiên cứu', 'Insights': 'Thông tin',
                'Technical Hub': 'Trung tâm kỹ thuật', 'Connect': 'Kết nối', 'Contact': 'Liên hệ'
            },
            'th': {
                'Home': 'หน้าแรก', 'Solutions': 'โซลูชัน', 'Case Studies': 'กรณีศึกษา', 'Insights': 'ข้อมูลเชิงลึก',
                'Technical Hub': 'ศูนย์เทคนิค', 'Connect': 'ติดต่อเรา', 'Contact': 'ติดต่อ'
            }
        };

        if (lang !== 'en' && flatMap[lang]) {
            const replaceNodes = (node) => {
                if (node.nodeType === 3) {
                    const text = node.nodeValue.trim();
                    if (flatMap[lang][text]) node.nodeValue = flatMap[lang][text];
                } else if (node.nodeType === 1 && node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE' && !node.hasAttribute('data-i18n')) {
                    node.childNodes.forEach(replaceNodes);
                }
            };
            replaceNodes(document.body);
        }

        // 3. Persist State to links
        document.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('#') && !href.includes('?lang=')) {
                const separator = href.includes('?') ? '&' : '?';
                link.setAttribute('href', href + separator + 'lang=' + lang);
            }
        });

        // 4. Update UI visuals
        document.documentElement.lang = lang;
        document.querySelectorAll('.lang-selector a').forEach(a => {
            const aLang = new URLSearchParams(a.getAttribute('href').split('?')[1]).get('lang');
            if (aLang === lang) {
                a.style.color = 'var(--primary-color)';
                a.style.fontWeight = '800';
            } else {
                a.style.color = '';
                a.style.fontWeight = '';
            }
        });
    };

    // Initialize Language
    const urlParams = new URLSearchParams(window.location.search);
    let currentLang = urlParams.get('lang');
    if (currentLang) {
        localStorage.setItem('silsep_lang', currentLang);
    } else {
        currentLang = localStorage.getItem('silsep_lang') || 'en';
    }

    applyTranslations(currentLang);

    // Dynamic Header Background on Scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.padding = '8px 0';
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.padding = '15px 0';
                header.style.backgroundColor = '#ffffff';
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }
        });
    }

    // --- Sample Request Modal Logic ---
    const initSampleModal = () => {
        // 1. Inject Modal HTML if not exists
        if (!document.getElementById('sample-modal')) {
            const modalHTML = `
                <div id="sample-modal" class="modal">
                    <div class="modal-content">
                        <span class="modal-close">&times;</span>
                        <div class="modal-header">
                            <h2 data-i18n="modal_title">Request Free 500g Sample</h2>
                            <p data-i18n="modal_subtitle">Technical Grade Silica for Laboratory & Industrial Trials</p>
                        </div>
                        <form name="modal-trial-request" method="POST" data-netlify="true" action="/thank-you.html">
                            <input type="hidden" name="form-name" value="modal-trial-request">
                            <div class="form-group">
                                <label data-i18n="form_name">Full Name (姓名) *</label>
                                <input type="text" name="name" required placeholder="Enter your name">
                            </div>
                            <div class="form-group">
                                <label data-i18n="form_email">Work Email (邮箱) *</label>
                                <input type="email" name="email" required placeholder="professional@company.com">
                            </div>
                            <div class="form-group">
                                <label data-i18n="form_company">Company (公司) *</label>
                                <input type="text" name="company" required placeholder="Company Name">
                            </div>
                            <div class="form-group">
                                <label data-i18n="form_phone">Phone Number (电话) *</label>
                                <input type="tel" name="phone" required placeholder="Phone Number">
                            </div>
                            <div class="form-group">
                                <label data-i18n="form_address">Delivery Address (收货地址) *</label>
                                <textarea name="address" required placeholder="Full shipping address" style="width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc; font-size: 14px; resize: none;"></textarea>
                            </div>
                            <button type="submit" class="btn-primary" style="width: 100%; padding: 15px; border-radius: 10px;" data-i18n="btn_request_trial">Send Request</button>
                        </form>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }

        const modal = document.getElementById('sample-modal');
        const closeBtn = modal.querySelector('.modal-close');

        // 2. Attach listeners to all "Request Free Sample" buttons
        document.querySelectorAll('a[href*="#request-sample"], #open-sample-modal').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = "block";
            });
        });

        // 3. Close Logic
        closeBtn.onclick = () => modal.style.display = "none";
        window.onclick = (event) => {
            if (event.target == modal) modal.style.display = "none";
        };
    };

    initSampleModal();
});
