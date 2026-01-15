# Ender Karan - Kişisel Geliştirici Portfolyosu

Modern web standartlarının en güncel araçları (Next.js 15, TypeScript, Tailwind v4) kullanılarak geliştirilmiş; performans, erişilebilirlik ve kullanıcı deneyimi odaklı kişisel portfolyo web sitesi.

Bu proje, sadece bir vitrin değil; Server Side Rendering (SSR), Tip Güvenliği, 3D Animasyonlar ve Uluslararasılaştırma (i18n) gibi ileri seviye web geliştirme konseptlerinin uygulandığı canlı bir laboratuvardır.

**[Canlı Demoyu Görüntüle](https://ender-portfolio.vercel.app/)** ---

### ✨ Projenin Felsefesi

Bu proje, standart bir React uygulamasından modern bir Next.js mimarisine evrilmiştir. Bu dönüşümdeki temel hedefler:

#### 1. 🚀 Performans ve SEO Odaklı Mimari (Next.js & SSR)
Vite tabanlı SPA yapısından, Next.js'in App Router mimarisine geçiş yapılarak SEO (Arama Motoru Optimizasyonu) ve ilk yükleme hızı (LCP) maksimize edildi. Statik içerikler sunucu tarafında (Server Components) oluşturulurken, interaktif öğeler (Client Components) dinamik olarak yönetildi.

#### 2. 💡 Tip Güvenliği ve Ölçeklenebilirlik (TypeScript)
Projenin tamamı JavaScript'ten TypeScript'e taşındı. Bu sayede veri akışı (Props, State, API yanıtları) katı tip kontrolleriyle güvence altına alındı, hatalar derleme aşamasında yakalanarak kod kalitesi artırıldı.

#### 3. 💡 Geleceğin CSS Mimarisi (Tailwind CSS v4)
Henüz çok yeni olan Tailwind CSS v4 motoruna geçiş yapıldı. CSS değişkenleri (@theme) ve modern yapılandırma ile performanslı, karanlık mod (Dark Mode) destekli ve bakımı kolay bir stil yapısı kuruldu.

---

### 🌟 Öne Çıkan Özellikler

* **Next.js 15 & App Router:** Dosya tabanlı yönlendirme ve React 19 özellikleri.
* **Dark / Light Mod:** Kullanıcının sistem tercihine duyarlı ve manuel değiştirilebilir, localStorage destekli tema yönetimi.
* **Çoklu Dil Desteği (i18n):** i18next altyapısı ile Türkçe ve İngilizce dil seçenekleri.
* **3D Deneyim:** React Three Fiber ile oluşturulmuş, performansı optimize edilmiş 3D geometrik animasyonlar.
* **GitHub API Entegrasyonu:** "Projeler sayfasında GitHub verileri (repo adı, yıldız sayısı, açıklamalar) Server Side olarak anlık çekilir.
* **Akıcı Animasyonlar:** Framer Motion ile sayfa geçişleri, scroll animasyonları ve özel imleç (custom cursor) efektleri.
* **Tam Duyarlılık:** Mobil öncelikli (Mobile-First) tasarım anlayışı.
* **Görüntü Optimizasyonu:** next/image bileşeni ile format dönüşümü (WebP/AVIF) ve lazy loading.

---

### 🛠️ Teknoloji Yığını

* **Framework:** Next.js 15 (App Router), React 19
* **Dil:** TypeScript
* **Stil:** Tailwind CSS v4, PostCSS
* **Animasyon:** Framer Motion, React Three Fiber (@react-three/drei)
* **Form & Validasyon:** Formik, Yup
* **Dil Yönetimi:** i18next, react-i18next
* **İkonlar:** React Icons

---
### Klasör Yapısı

```
src/
├── app/                 # App Router (Sayfalar ve Layout)
│   ├── layout.tsx       # Ana iskelet (Navbar, Footer, Fontlar)
│   ├── page.tsx         # Anasayfa (Hero, About, Stack)
│   ├── projects/        # Projeler Sayfası
│   └── ...
├── components/          # Yeniden kullanılabilir bileşenler (Hero, Navbar vb.)
├── hooks/               # Özel Hook'lar (useTheme vb.)
└── i18n.ts             # Dil konfigürasyonu
public/
└── assets/              # Görseller ve statik dosyalar
```

---

### ⚙️ Projeyi Yerel Olarak Çalıştırma

Projeyi kendi bilgisayarınızda denemek isterseniz aşağıdaki adımları izleyebilirsiniz:

1.  **Repoyu klonlayın:**
    ```bash
    git clone [https://github.com/EnderKaran/Portfolio-Website.git](https://github.com/EnderKaran/Portfolio-Website.git)
    ```
2.  **Proje dizinine gidin:**
    ```bash
    cd Portfolio-Website
    ```
3.  **Gerekli paketleri yükleyin:**
    ```bash
    npm install
    ```
4.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    ```
    Artık projeyi `http://localhost:3000` (veya terminalde belirtilen port) adresinde görüntüleyebilirsiniz.

---

### 📫 Bana Ulaşın

- **LinkedIn:** [linkedin.com/in/ender-karan-52303b187](https://www.linkedin.com/in/ender-karan-52303b187)
- **GitHub:** [@EnderKaran](https://github.com/EnderKaran)

© 2026 Ender Karan. Tüm hakları saklıdır.
