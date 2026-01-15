import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      // ... Diğer çeviriler aynı kalacak ...
      
      // Hero Bölümü
      "hero_greeting": "Merhaba, Ben",
      "hero_intro": "Ben, kullanıcılara deneyim sağlayan web siteleri oluşturmaya odaklanan bir",
      "hero_role_frontend": "ön yüz geliştiricisiyim.",
      "hero_role_software": "yazılım geliştiricisiyim.",
      "hero_button_contact": "Bana Ulaşın",
      "hero_button_work": "Çalışmalarım",
      
      // Hero Navigasyon Linkleri
      "hero_nav_knowMe": "Beni Tanıyın",
      "hero_nav_seeWork": "Çalışmalarıma Göz At",
      "hero_nav_technologies": "Kullandığım Teknolojiler",
      "hero_nav_contact": "İletişime Geçin",
      "nav_home": "Anasayfa",
      "nav_about": "Hakkımda",
      "nav_projects": "Projeler",
      "nav_technologies": "Teknolojiler",
      "nav_contact": "İletişim",
      "nav_changelog": "Yenilikler",
      
      // --- About Bölümü ---
      "about_title_part1": "Beni",
      "about_title_part2": " Tanıyın",
      "about_card1_title": "01. Arkaplan",
      "about_card1_p1": "Bilgisayar bilimlerinde güçlü bir temele ve yenilikçi web çözümleri yaratmaya tutkuyla bağlı, tutkulu bir Front-end geliştiriciyim. Teknoloji yolculuğum, işlerin nasıl yürüdüğüne dair merakımla başladı ve bu da beni web geliştirme alanında bir kariyer yapmaya yöneltti.",
      "about_card2_title": "02. Uzmanlık",
      "about_card2_p1": "Masaüstü (Delphi) ve backend (.NET) geliştirme temellerinden gelen, uzmanlığını modern frontend teknolojileri üzerine inşa etmiş çok yönlü bir yazılım geliştiriciyim. Özellikle React ve Tailwind CSS kullanarak, sadece estetik değil, aynı zamanda mühendislik prensipleriyle tasarlanmış sağlam ve ölçeklenebilir çözümler üretmeye odaklanıyorum.",
      "about_card3_title": "03. Hedeflediğim Yetenekler",
      "about_card3_p1": "Web geliştirmenin ön saflarında kalmak için becerilerimi sürekli olarak geliştiriyorum.",
      "about_card3_frontend": "Frontend",
      "about_card3_backend": "Backend",
      "about_card4_title": "04. Yaklaşım",
      "about_card4_p1": "Temiz, sürdürülebilir kod yazmaya ve en iyi uygulamaları takip etmeye inanıyorum. Yaklaşımım, müşteri ihtiyaçlarını anlamak, kapsamlı planlama yapmak ve zamanında yüksek kaliteli çözümler sunmaktır.",
      "about_card4_skill1": "Frontend (React, Tailwind)",
      "about_card4_skill2": "Backend (ASP.NET, C#)",
      "about_card4_skill3": "UI/UX Design (Figma)",
      "about_card5_title": "05. Hedefler",
      "about_card5_p1": "Hedefim, React, Next.js ve TypeScript ekosisteminde uzmanlaşarak, sadece kod yazan değil, aynı zamanda ürün geliştiren bütünsel bir yazılım geliştirici olmaktır. Zorlu projelerle teknik sınırlarımı zorlarken, öğrendiklerimi teknoloji topluluğuyla paylaşarak kendimi ve çevremi sürekli geliştirmeyi amaçlıyorum.",
      
      // --- Abouts Sayfası ---
      "about_page_title": "Hakkımda",
      "about_intro_p1": "Türkiye'nin Bursa şehrinde yaşayan, tutkulu ve kullanıcı odaklı bir Frontend Geliştiriciyim. JavaScript, SCSS, Bootstrap ve jQuery gibi temel teknolojilerde güçlü bir altyapıya sahibim. Şu anda React, Tailwind CSS ve Material UI gibi modern kütüphane ve çerçevelerle deneyimimi ileriye taşıyorum.",
      "about_intro_p2": "Sürekli öğrenme ve kendimi geliştirme prensibiyle, Next.js ile sunucu taraflı işleme (SSR/SSG) konusundaki uzmanlığımı derinleştiriyor ve TypeScript ile daha güvenli, ölçeklenebilir projeler geliştiriyorum. Bunun yanında masaüstü geliştirme (Delphi), temel arka uç geliştirme (ASP.NET) ve veritabanı yönetimi (MariaDB) konularında da deneyim sahibiyim. Hedefim, sadece arayüz geliştiren bir geliştirici olarak kalmayıp; ürünün tamamına hakim, uçtan uca çözümler üreten bir Fullstack Yazılım Geliştiricisi olmaktır.",
      "about_github_button": "GitHub",
      "about_codepen_button": "CodePen",
      
      "experience_title": "İş Deneyimi",
      "experience_subtitle": "Kariyer yolculuğumda edindiğim tecrübeler.",
      "exp1_title": "Frontend Developer & IT Sorumlusu", 
      "exp1_desc_intro": "Stok Endüstriyel’de, şirketin dijital altyapısını modernize ederek operasyonel verimliliği artırmaya ve stratejik hedeflere teknolojik çözümlerle katkı sağlamaya odaklanıyorum. Görevlerim; yazılım geliştirme, web/e-ticaret yönetimi ve BT altyapısı olmak üzere üç ana başlıkta toplanıyor.",
      "exp1_desc_software": "Yazılım Geliştirme: Binlerce satış verisini anlık raporlara dönüştüren React tabanlı bir iş zekası dashboard’u geliştirerek veri odaklı karar alma süreçlerini hızlandırdım. “Senole” markası için modern web arayüzleri tasarladım. CRM tarafında yeni kurulumlar ve PHP/SQL optimizasyonlarıyla sistem kararlılığını artırdım. Ayrıca şirket içi ihtiyaçlar için özel araçlar (Şifre Yönetim Aracı vb.) geliştiriyorum.",
      "exp1_desc_web": "Web & E-Ticaret Yönetimi: Ticimax platformunun teknik ve operasyonel süreçlerini uçtan uca yönetiyorum. SEO, kargo entegrasyonları ve arayüz tasarımlarını yürütürken; “Markalar” sayfası gibi özel geliştirmeler ve Gimp/Upscayl ile görsel iyileştirmeler yaparak kullanıcı deneyimini üst seviyeye taşıdım.",
      "exp1_desc_it": "BT Altyapısı: Şirket genelindeki donanım/yazılım ihtiyaçlarına destek sunuyor, sunucu yetkilendirmelerini yönetiyorum. Personel eğitimleri ve düzenli veritabanı yedekleme prosedürleriyle veri güvenliğini ve sistem sürekliliğini sağlıyorum.",
      "exp2_title": "Yazılım Geliştirici (Stajyer)",
      "exp2_desc": "Spsteks adlı uygulamanın önceki sürümünü iyileştirmek için çalıştım. Veritabanı entegrasyonu için MySQL (MariaDB) kullandım.",
      "exp3_desc": "RAD Studio FMX ve Delphi kullanarak Spsteks adlı bir uygulama için bir dizi sayfa geliştirdim. Ayrıca, veri yönetimi işlevselliğini etkinleştirmek için uygulamayı bir MySQL (MariaDB) veritabanıyla entegre ettim.",
      "exp4_title": "Bilgisayar Teknisyeni (Stajyer)",
      "exp4_desc": "BT departmanında çeşitli sorumluluklar üstlenerek bilgi ve becerilerimi geliştirme fırsatı buldum. (Bilgisayar montajı, Windows kurulumu, sistem formatlama vb.)",
      
      "education_title": "Eğitim Hayatım",
      "education_subtitle": "Akademik geçmişim ve aldığım eğitimler.",
      "edu1_degree": "Lisans Derecesi, Yönetim Bilişim Sistemleri",
      "edu2_degree": "Önlisans, Bilgisayar Programlama",
      "edu3_degree": "Lise, Bilişim/Web Programlama",

      "awards_title": "Onur ve Ödüller",
      "award1_title": "Onur Belgesi",

      // --- Contact Sayfası ---
      "contact_title": "İletişime Geçin",
      "contact_subtitle": "Aklınızda bir proje mi var? Aşağıdaki formu doldurarak bana ulaşabilirsiniz.",
      "contact_form_name": "Ad Soyad",
      "contact_form_email": "E-posta",
      "contact_form_message": "Mesajınız",
      "contact_form_submit": "Mesajı Gönder",
      
      // Formik/Yup Doğrulama Mesajları
      "validation_name_min": "Adınız ve soyadınız çok kısa!",
      "validation_required": "Bu alan zorunludur.",
      "validation_email_invalid": "Geçersiz e-posta adresi.",
      "validation_message_min": "Mesajınız en az 10 karakter olmalıdır.",
      
      // Mailto Mesajları
      "mailto_subject": "Portfolyo Sitesinden Mesaj:",
      "mailto_sender": "Gönderen:",
      "mailto_email": "E-posta:",
      "mailto_message": "Mesaj:",
      
      // --- Footer Bölümü ---
      "footer_contact_part1": "İletişime",
      "footer_contact_part2": " Geçin",
      "footer_city": "Bursa",
      "footer_country": "Türkiye",
      "footer_copyright": "Tüm hakları saklıdır.",
      "footer_aria_scrollToTop": "Sayfanın başına dön",
      
      // --- Portfolio Bölümü ---
      "portfolio_title_part1": "Çalışmalarıma",
      "portfolio_title_part2": " Göz At",
      "portfolio_project1_title": "Coffee-Website",
      "portfolio_project1_desc": "Bu proje, React, Vite ve Tailwind CSS kullanılarak geliştirilmiş, modern ve tamamen duyarlı (responsive) bir tek sayfalık kahve dükkanı web sitesidir. Proje, hem modern web geliştirme pratiklerini sergilemek hem de React'ın temel ve orta seviye konseptlerini (component yapısı, state yönetimi, hook'lar) uygulamak amacıyla oluşturulmuştur.",
      "portfolio_project1_devstack": "React-İcons, React, TailwindCss, Vite, Npm",
      "portfolio_project1_type": "frontend",
      
      "portfolio_project2_title": "SenOlé",
      "portfolio_project2_desc": "SenOlé markası için geliştirdiğim bu modern web arayüzü, estetik tasarımı ileri düzey işlevsellik ile birleştirerek kullanıcı dostu ve akıcı bir deneyim sunuyor. React ekosisteminin güçlü araçlarıyla geliştirilen bu proje, marka kimliği, ürün tanıtımı ve iletişim süreçlerini merkezi bir yapıda yönetiyor.",
      "portfolio_project2_devstack": "React-İcons, React, React Router DOM, React Bootstrap, React Context API, Npm, Material UI (MUI), Framer Motion, Swiper.js, React Helmet, Formik & Yup, React Leaflet, Leaflet.js",
      "portfolio_project2_type": "frontend",

      "portfolio_label_tech": "Teknolojiler:",
      "portfolio_label_type": "Tür:",
      
      // --- Projects (GitHub) Sayfası ---
      "projects_loading": "Yükleniyor...",
      "projects_error": "Hata:",
      "projects_title": "Projelerim",
      "projects_subtitle": "GitHub profilimdeki herkese açık projelerim. Yeni şeyler keşfetmek için göz atın.",
      "projects_search": "Proje Ara...",
      "projects_no_desc": "Açıklama bulunmuyor.",
      "projects_view_code": "Kodu Görüntüle",
      "projects_live_demo": "Canlı Demo",
      "projects_no_results": "Arama kriterlerinize uygun proje bulunamadı.",
      
      // --- Technologies Sayfası ---
      "tech_page_title_part1": "Teknoloji",
      "tech_page_title_part2": " Yığınım",
      "tech_category_frontend": "Frontend",
      "tech_category_backend": "Backend",
      "tech_category_database": "Database",
      "tech_category_tools": "Tools",
      "tech_category_platforms": "Platforms",
      
      // --- Changelog Sayfası ---
      "changelog_title": "Geliştirme Günlüğü",
      
      // Genel Tipler
      "changelog_type_newpage": "Yeni Sayfa",
      "changelog_type_improvement": "İyileştirme",
      "changelog_type_bugfix": "Hata Düzeltmesi",
      "changelog_type_archchange": "Mimari Değişiklik",
      "changelog_type_launch": "Lansman",
      "changelog_type_structure": "Temel Yapı",
      "changelog_type_responsive": "Responsive Tasarım",

      // --- NEW v1.9.0 ---
      "changelog_v1_9_0_desc1": "Hero bölümüne React Three Fiber ile oluşturulan, sürekli dönen 3D küp animasyonu eklendi.",
      "changelog_v1_9_0_desc2": "Tüm sayfalara (Ana sayfa, Hakkımda, Projeler vb.) react-helmet-async ile dinamik SEO başlıkları ve açıklamaları entegre edildi.",
      
      // --- YENİ EKLENEN v1.8.0 ---
      "changelog_v1_8_0_desc1": "Hero bölümündeki arka plan gezegen efektinin Açık/Koyu mod geçişlerinde senkronizasyon sorunu, CSS değişkenleri kullanılarak giderildi.",
      "changelog_v1_8_0_desc2": "Hero ve Footer bölümlerindeki metinlerin okunabilirlik sorunları, temaya duyarlı renk değişkenleri entegre edilerek çözüldü.",
      "changelog_v1_8_0_desc3": "Mobildeki başlık ve metin çakışmaları (Responsive hataları) giderildi ve font boyutları optimize edildi.",
      "changelog_v1_8_0_desc4": "Tüm renk sistemi, daha iyi yönetim için Tailwind CSS v4 uyumlu CSS değişkenlerine (var(--color...)) taşındı.",

      // v1.7.0
      "changelog_v1_7_0_desc1": "Kullanıcılar var olmayan bir rotaya eriştiğinde gösterilen, fare takibi ve astronot animasyonu içeren özel bir '404 Sayfa Bulunamadı' sayfası eklendi.",
      "changelog_v1_7_0_desc2": "Sayfalar arası geçişlerde 'native app' hissi yaratmak için Framer Motion kullanılarak pürüzsüz 'Sayfa Geçiş Animasyonları' (Page Transitions) entegre edildi.",
      "changelog_v1_7_0_desc3": "'Hakkımda' sayfasındaki iş deneyimi bölümü, Stok Endüstriyel'deki görevlerin detaylı açıklamaları ve güncel teknoloji yetkinlikleri ile zenginleştirildi.",
      
      // v1.6.0
      "changelog_v1_6_0_desc1": "Hero bölümüne, 'ön yüz geliştiricisi' ve 'yazılım geliştiricisi' gibi rolleri dinamik olarak değiştiren animasyonlu bir metin döngüsü eklendi.",
      "changelog_v1_6_0_desc2": "Tüm siteye, i18next kütüphanesi kullanılarak çoklu dil (TR/EN) desteği entegre edildi.",
      "changelog_v1_6_0_desc3": "Hero bileşenindeki animasyon hataları ve React Hook kurallarını ihlal eden sorunlar giderildi.",
      
      // v1.5.0
      "changelog_v1_5_0_desc1": "GitHub API'si ile entegre, dinamik bir '/projects' sayfası oluşturuldu. Projeler, arama ve filtreleme özellikleriyle birlikte modern kartlar halinde sergileniyor.",
      "changelog_v1_5_0_desc2": "Proje kartlarındaki teknoloji etiketleri, artık GitHub repolarındaki 'topics' alanından dinamik olarak çekilerek daha doğru ve yönetimi kolay bir hale getirildi.",
      "changelog_v1_5_0_desc3": "Projeler sayfasının tasarımı, hem açık hem de koyu modda tasarımla tam uyumlu olacak şekilde düzeltildi ve iyileştirildi.",
      
      // Diğer versiyonlar...
      "changelog_v1_4_0_desc1": "Teknoloji yığınını sergilemek için, React Router ile erişilen, kategorilere ayrılmış ve animasyonlu yeni bir '/technologies' sayfası eklendi.",
      "changelog_v1_4_0_desc2": "Anasayfa Proje yol haritası güncellendi: Geliştirme hedefleri arasına Next.js ve TypeScript ekosistemlerinde uzmanlaşmak eklendi.",
      "changelog_v1_3_0_desc1": "Formik ve Yup kullanılarak 'mailto' işlevselliğine sahip, modern ve doğrulamalı bir 'İletişim' sayfası eklendi.",
      "changelog_v1_3_0_desc2": "Kariyer ve eğitim geçmişini şık ve duyarlı bir zaman tüneli formatında sunan kapsamlı bir 'Hakkımda' sayfası oluşturuldu.",
      "changelog_v1_3_0_desc3": "Site genelindeki metin seçimi (::selection) rengi, site kimliğiyle uyumlu hale getirilerek kullanıcı deneyimi zenginleştirildi.",
      "changelog_v1_3_0_desc4": "Açık modda yaşanan metin ve başlık okunabilirlik sorunları, tema ile tam uyumlu renkler kullanılarak tamamen giderildi.",
      "changelog_v1_2_0_desc1": "Proje, tek sayfa uygulamasından (SPA), gelecekteki genişlemelere olanak tanıyan çok sayfalı bir yapıya (React Router DOM) geçirildi.",
      "changelog_v1_2_0_desc2": "Projenin gelişim sürecini ve güncellemeleri şeffaf bir şekilde paylaşmak amacıyla bu Geliştirme Günlüğü (Changelog) sayfası oluşturuldu.",
      "changelog_v1_2_0_desc3": "Navbar, artık hem sayfa içi yumuşak kaydırmayı (react-scroll) hem de sayfalar arası geçişi (react-router-dom) akıllı bir şekilde destekliyor.",
      "changelog_v1_1_0_desc1": "Site geneline, kullanıcının sistem tercihini algılayan ve seçimini hafızada tutan Açık Mod / Koyu Mod desteği getirildi.",
      "changelog_v1_1_0_desc2": "Sayfa kaydırma ilerlemesini gösteren, Navbar'a entegre dinamik bir 'Progress Bar' eklendi.",
      "changelog_v1_1_0_desc3": "Kullanıcı etkileşimini artırmak için, Framer Motion fiziği ile geliştirilmiş, interaktif ve temaya duyarlı özel imleç (Custom Cursor) entegre edildi.",
      "changelog_v1_1_0_desc4": "Sayfa sonuna ulaşıldığında beliren ve tek tıkla en üste yumuşak bir geçiş sağlayan 'Yukarı Çık' butonu eklendi (react-scroll).",
      "changelog_v1_1_0_desc5": "Genel kaydırma çubuğu (scrollbar) tasarımı, sitenin estetiğiyle uyumlu hale getirildi.",
      "changelog_v1_0_0_desc1": "Kişisel portfolyo sitesinin ilk versiyonu (React, Vite, Tailwind CSS) temel bileşenleriyle birlikte oluşturuldu ve yayınlandı.",
      "changelog_v1_0_0_desc2": "Hero, Hakkımda, Projeler, Teknolojiler ve Footer gibi ana bölümlerin tasarımı ve kodlaması tamamlandı.",
      "changelog_v1_0_0_desc3": "Tüm bileşenler, mobil cihazlardan geniş ekranlara kadar farklı ekran boyutlarına uyumlu hale getirildi.",
      "changelog_v1_0_0_desc4": "X eksenindeki istenmeyen kaydırma çubuğu sorunu gibi çeşitli CSS ve responsive tasarım hataları giderildi.",

      // --- Stack (Teknolojiler) Bölümü ---
      "stack_title_part1": "Kullandığım",
      "stack_title_part2": " Teknolojiler",
      // --- SEO ÇEVİRİLERİ ---
      "meta_tech_title": "Teknolojiler | Ender Karan",
      "meta_tech_desc": "Projelerimde kullandığım güncel teknoloji yığını: React, Next.js, Node.js, Tailwind CSS ve daha fazlası.",
      "meta_projects_title": "Projeler | Ender Karan",
      "meta_projects_desc": "GitHub üzerindeki açık kaynaklı projelerim, React, Tailwind CSS ve modern web teknolojileri ile geliştirdiğim çalışmaların listesi.",
      "meta_home_title": "Ender Karan | Frontend Geliştirici",
      "meta_home_desc": "Modern web teknolojileri ile kullanıcı dostu arayüzler geliştiren Frontend Geliştirici. React, Tailwind CSS ve TypeScript projelerimi inceleyin.",
      "meta_contact_title": "İletişim | Ender Karan",
      "meta_contact_desc": "Projeleriniz veya iş birlikleri için benimle iletişime geçin. Web geliştirme süreçleri ve freelance teklifleriniz için mesajınızı bekliyorum.",
      "meta_changelog_title": "Sürüm Notları | Ender Karan",
      "meta_changelog_desc": "Web sitemin ve projelerimin gelişim süreci. Eklenen yeni özellikler, yapılan iyileştirmeler ve hata düzeltmelerinin detaylı geçmişi.",
      "meta_about_title": "Hakkımda | Ender Karan",
      "meta_about_desc": "Kariyer yolculuğum, yetkinliklerim ve yazılım geliştirme tutkum hakkında detaylı bilgi. Profesyonel geçmişim ve vizyonum.",
    }
  },
  en: {
    translation: {
      // Hero Section
      "hero_greeting": "Hello, I am",
      "hero_intro": "I'm a developer focused on creating user-centric web experiences as a",
      "hero_role_frontend": "front-end developer.",
      "hero_role_software": "software developer.",
      "hero_button_contact": "Contact Me",
      "hero_button_work": "My Work",

      // Hero Navigation Links
      "hero_nav_knowMe": "Get to Know Me",
      "hero_nav_seeWork": "Browse My Work",
      "hero_nav_technologies": "Technologies I Use",
      "hero_nav_contact": "Get in Touch",
      "nav_home": "Home",
      "nav_about": "About",
      "nav_projects": "Projects",
      "nav_technologies": "Technologies",
      "nav_contact": "Contact",
      "nav_changelog": "Changelog",
      
      // --- About Section ---
      "about_title_part1": "About",
      "about_title_part2": " Me",
      "about_card1_title": "01. Background",
      "about_card1_p1": "I am a passionate Front-end developer with a strong foundation in computer science and a love for creating innovative web solutions. My journey in tech began with a curiosity about how things work, which led me to pursue a career in web development.",
      "about_card2_title": "02. Expertise",
      "about_card2_p1": "Coming from a background in desktop (Delphi) and backend (.NET) development, I am a versatile software developer who has built my expertise on modern frontend technologies. I particularly focus on creating robust and scalable solutions designed with engineering principles, using React and Tailwind CSS.",
      "about_card3_title": "03. Targeted Skills",
      "about_card3_p1": "I am constantly expanding my skill set to stay at the forefront of web development.",
      "about_card3_frontend": "Frontend",
      "about_card3_backend": "Backend",
      "about_card4_title": "04. Approach",
      "about_card4_p1": "I believe in writing clean, maintainable code and following best practices. My approach involves understanding client needs, planning thoroughly, and delivering high-quality solutions on time.",
      "about_card4_skill1": "Frontend (React, Tailwind)",
      "about_card4_skill2": "Backend (ASP.NET, C#)",
      "about_card4_skill3": "UI/UX Design (Figma)",
      "about_card5_title": "05. Goals",
      "about_card5_p1": "My goal is to specialize in the React, Next.js, and TypeScript ecosystem to become a holistic software developer who not only writes code but also develops products. While pushing my technical limits with challenging projects, I aim to continuously improve myself and my community by sharing what I learn.",
      
      // --- Abouts Page ---
      "about_page_title": "About Me",
      "about_intro_p1": "I am a passionate and user-centric Frontend Developer based in Bursa, Turkey. I have a strong foundation in core technologies like JavaScript, SCSS, Bootstrap, and jQuery. I am currently advancing my experience with modern libraries and frameworks such as React, Tailwind CSS, and Material UI.",
      "about_intro_p2": "With a principle of continuous learning and self-improvement, I am deepening my expertise in server-side rendering (SSR/SSG) with Next.js and developing safer, scalable projects with TypeScript. Additionally, I have experience in desktop development (Delphi), basic backend development (ASP.NET), and database management (MariaDB). My goal is not just to be a developer who builds interfaces, but to become a Fullstack Software Developer who has a comprehensive command of the entire product and produces end-to-end solutions.",
      "about_github_button": "GitHub",
      "about_codepen_button": "CodePen",
      
      "experience_title": "Work Experience",
      "experience_subtitle": "My professional journey and experiences.",
      "exp1_title": "Frontend Developer & IT Specialist",
      "exp1_desc_intro": "At Stok Endüstriyel, I focus on modernizing the company's digital infrastructure to enhance operational efficiency and support strategic goals through technological solutions. My responsibilities are concentrated in three main areas: Software Development, Web & E-Commerce Management, and IT Infrastructure.",
      "exp1_desc_software": "Software Development: Accelerated data-driven decision-making processes by developing a React-based business intelligence dashboard that transforms thousands of sales records into real-time reports. Designed modern web interfaces for the “Senole” brand. Enhanced system stability through new CRM implementations and PHP/SQL optimizations. Additionally, I develop custom internal tools (such as a Password Management Tool) to meet corporate needs.",
      "exp1_desc_web": "Web & E-Commerce Management: Managing the technical and operational processes of the Ticimax platform end-to-end. I handle SEO, shipping integrations, and interface designs, while elevating the user experience through custom developments like the “Brands” page and visual enhancements using Gimp and Upscayl.",
      "exp1_desc_it": "IT Infrastructure: Providing support for hardware/software needs across the company and managing server authorizations. I ensure data security and system continuity through staff training and established regular database backup procedures.",
      "exp2_title": "Software Developer (Intern)",
      "exp2_desc": "I worked on improving the previous version of an application called Spsteks. I used MySQL (MariaDB) for database integration.",
      "exp3_desc": "Using RAD Studio FMX and Delphi, I developed a series of pages for an application called Spsteks. I also integrated the application with a MySQL (MariaDB) database to enable data management functionality.",
      "exp4_title": "Computer Technician (Intern)",
      "exp4_desc": "I had the opportunity to develop my knowledge and skills by taking on various responsibilities in the IT department (e.g., computer assembly, Windows installation, system formatting).",
      
      "education_title": "Education",
      "education_subtitle": "My academic background and qualifications.",
      "edu1_degree": "Bachelor's Degree, Management Information Systems",
      "edu2_degree": "Associate's Degree, Computer Programming",
      "edu3_degree": "High School, IT/Web Programming",

      "awards_title": "Honors & Awards",
      "award1_title": "Honor Certificate",
          
      // --- Contact Page ---
      "contact_title": "Get in Touch",
      "contact_subtitle": "Have a project in mind? You can reach me by filling out the form below.",
      "contact_form_name": "Full Name",
      "contact_form_email": "Email",
      "contact_form_message": "Your Message",
      "contact_form_submit": "Send Message",

      // Formik/Yup Validation Messages
      "validation_name_min": "Your name is too short!",
      "validation_required": "This field is required.",
      "validation_email_invalid": "Invalid email address.",
      "validation_message_min": "Your message must be at least 10 characters long.",

      // Mailto Messages
      "mailto_subject": "Message from Portfolio Site:",
      "mailto_sender": "Sender:",
      "mailto_email": "Email:",
      "mailto_message": "Message:",
      
      // --- Footer Section ---
      "footer_contact_part1": "Get in",
      "footer_contact_part2": " Touch",
      "footer_city": "Bursa",
      "footer_country": "Turkey",
      "footer_copyright": "All rights reserved.",
      "footer_aria_scrollToTop": "Scroll to top",
      
      // --- Portfolio Section ---
      "portfolio_title_part1": "Browse",
      "portfolio_title_part2": " My Work",
      "portfolio_project1_title": "Coffee-Website",
      "portfolio_project1_desc": "This is a modern and fully responsive single-page coffee shop website developed using React, Vite, and Tailwind CSS. The project was created both to showcase modern web development practices and to apply fundamental React concepts (component structure, state management, hooks).",
      "portfolio_project1_devstack": "React-Icons, React, TailwindCss, Vite, Npm",
      "portfolio_project1_type": "frontend",
      
      "portfolio_project2_title": "SenOlé",
      "portfolio_project2_desc": "This modern web interface, developed for the SenOlé brand, combines aesthetic design with advanced functionality to offer a user-friendly and fluid experience. Developed with the powerful tools of the React ecosystem, this project manages brand identity, product presentation, and communication processes in a centralized structure.",
      "portfolio_project2_devstack": "React-Icons, React, React Router DOM, React Bootstrap, React Context API, Npm, Material UI (MUI), Framer Motion, Swiper.js, React Helmet, Formik & Yup, React Leaflet, Leaflet.js",
      "portfolio_project2_type": "frontend",

      "portfolio_label_tech": "Technologies:",
      "portfolio_label_type": "Type:",
      "projects_loading": "Loading...",
      "projects_error": "Error:",
      "projects_title": "My Projects",
      "projects_subtitle": "Public projects from my GitHub profile. Take a look to discover new things.",
      "projects_search": "Search Projects...",
      "projects_no_desc": "No description available.",
      "projects_view_code": "View Code",
      "projects_live_demo": "Live Demo",
      "projects_no_results": "No projects found matching your search.",
      
      // --- Technologies Page ---
      "tech_page_title_part1": "My Tech",
      "tech_page_title_part2": " Stack",
      "tech_category_frontend": "Frontend",
      "tech_category_backend": "Backend",
      "tech_category_database": "Database",
      "tech_category_tools": "Tools",
      "tech_category_platforms": "Platforms",
      
      // --- Changelog Page ---
      "changelog_title": "Changelog",

      "changelog_type_newpage": "New Page",
      "changelog_type_improvement": "Improvement",
      "changelog_type_bugfix": "Bug Fix",
      "changelog_type_archchange": "Architectural Change",
      "changelog_type_launch": "Launch",
      "changelog_type_structure": "Initial Structure",
      "changelog_type_responsive": "Responsive Design",

      // --- NEW v1.9.0 ---
      "changelog_v1_9_0_desc1": "Added a continuously rotating 3D cube animation created with React Three Fiber to the Hero section.",
      "changelog_v1_9_0_desc2": "Integrated dynamic SEO titles and descriptions with react-helmet-async on all pages (Home, About, Projects, etc.).",
      
      // --- v1.8.0 ---
      "changelog_v1_8_0_desc1": "Fixed synchronization issues with the background planet effect in the Hero section during Light/Dark mode transitions using CSS variables.",
      "changelog_v1_8_0_desc2": "Resolved text readability issues in Hero and Footer sections by integrating theme-aware color variables.",
      "changelog_v1_8_0_desc3": "Fixed responsive layout issues (text overlapping) on mobile devices and optimized font sizes.",
      "changelog_v1_8_0_desc4": "Migrated the entire color system to Tailwind CSS v4 compatible CSS variables (var(--color...)) for better management.",

      // v1.7.0
      "changelog_v1_7_0_desc1": "Added a custom '404 Page Not Found' page featuring mouse tracking and astronaut animation, displayed when users access a non-existent route.",
      "changelog_v1_7_0_desc2": "Integrated smooth 'Page Transition Animations' using Framer Motion to create a 'native app' feel when navigating between pages.",
      "changelog_v1_7_0_desc3": "Enriched the work experience section on the 'About' page with detailed descriptions of tasks and current technical skills at Stok Endüstriyel.",

      // v1.6.0
      "changelog_v1_6_0_desc1": "Added an animated text loop to the Hero section that dynamically cycles through roles like 'front-end developer' and 'software developer'.",
      "changelog_v1_6_0_desc2": "Integrated multi-language support (TR/EN) across the entire site using the i18next library.",
      "changelog_v1_6_0_desc3": "Fixed animation glitches and issues violating React Hook rules in the Hero component.",

      // v1.5.0
      "changelog_v1_5_0_desc1": "Created a dynamic '/projects' page integrated with the GitHub API, showcasing projects in modern cards with search and filter capabilities.",
      "changelog_v1_5_0_desc2": "Technology tags on project cards are now dynamically fetched from the 'topics' field of GitHub repositories, making them more accurate and easier to manage.",
      "changelog_v1_5_0_desc3": "The design of the projects page was fixed and improved to be fully compatible with both light and dark modes.",
      
      // Other versions...
      "changelog_v1_4_0_desc1": "Added a new '/technologies' page, accessible via React Router, featuring categorized and animated tech stacks.",
      "changelog_v1_4_0_desc2": "Updated the project roadmap: Specializing in the Next.js and TypeScript ecosystems has been added to the development goals.",
      "changelog_v1_3_0_desc1": "Added a modern, validated 'Contact' page with 'mailto' functionality using Formik and Yup.",
      "changelog_v1_3_0_desc2": "Created a comprehensive 'About Me' page presenting career and education history in a stylish and responsive timeline format.",
      "changelog_v1_3_0_desc3": "Enriched user experience by aligning the site-wide text selection (::selection) color with the site's identity.",
      "changelog_v1_3_0_desc4": "Completely resolved text and header readability issues in light mode by using theme-compliant colors.",
      "changelog_v1_2_0_desc1": "The project was migrated from a single-page application (SPA) to a multi-page structure (React Router DOM) to allow for future expansion.",
      "changelog_v1_2_0_desc2": "This Changelog page was created to transparently share the project's development process and updates.",
      "changelog_v1_2_0_desc3": "The Navbar now intelligently supports both smooth in-page scrolling (react-scroll) and inter-page navigation (react-router-dom).",
      "changelog_v1_1_0_desc1": "Implemented Light/Dark Mode support across the site, which detects user's system preference and saves their choice.",
      "changelog_v1_1_0_desc2": "Added a dynamic 'Progress Bar' integrated into the Navbar that shows the scroll progress of the page.",
      "changelog_v1_1_0_desc3": "Integrated an interactive and theme-aware custom cursor developed with Framer Motion physics to enhance user interaction.",
      "changelog_v1_1_0_desc4": "Added a 'Scroll to Top' button (using react-scroll) that appears when the user scrolls down.",
      "changelog_v1_1_0_desc5": "The global scrollbar design was updated to match the site's aesthetic.",
      "changelog_v1_0_0_desc1": "The first version of the personal portfolio site was created and published with its core components (React, Vite, Tailwind CSS).",
      "changelog_v1_0_0_desc2": "The design and coding of the main sections like Hero, About, Projects, Tech, and Footer were completed.",
      "changelog_v1_0_0_desc3": "All components were made responsive to fit various screen sizes, from mobile devices to wide screens.",
      "changelog_v1_0_0_desc4": "Various CSS and responsive design bugs, such as the unwanted horizontal scrollbar on the x-axis, were fixed.",
      // --- Stack (Technologies) Section ---
      "stack_title_part1": "Technologies",
      "stack_title_part2": " I Use",
      // --- SEO TRANSLATIONS ---
      "meta_tech_title": "Technologies | Ender Karan",
      "meta_tech_desc": "The modern tech stack I use in my projects: React, Next.js, Node.js, Tailwind CSS, and more.",
      "meta_projects_title": "Projects | Ender Karan",
      "meta_projects_desc": "My open-source projects on GitHub; a list of works developed using React, Tailwind CSS, and modern web technologies.",
      "meta_home_title": "Ender Karan | Frontend Developer",
      "meta_home_desc": "Frontend Developer building user-friendly interfaces with modern web technologies. Explore my React, Tailwind CSS, and TypeScript projects.",
      "meta_contact_title": "Contact | Ender Karan",
      "meta_contact_desc": "Get in touch with me for your projects or collaborations. I look forward to your messages regarding web development processes and freelance offers.",
      "meta_changelog_title": "Changelog | Ender Karan",
      "meta_changelog_desc": "Development history of my website and projects. Detailed log of new features, improvements, and bug fixes.",
      "meta_about_title": "About Me | Ender Karan",
      "meta_about_desc": "Detailed information about my career journey, skills, and passion for software development. My professional background and vision.",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "tr", // Başlangıç dili
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;