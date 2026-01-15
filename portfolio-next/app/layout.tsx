import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css"; // CSS dosyan
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { CustomCursor } from "@/src/components/CustomCursor";
import Providers from "@/src/components/Providers";

// Font Ayarları
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// SEO Metadata (Eski react-helmet yerine)
export const metadata: Metadata = {
  title: "Ender Karan | Frontend Developer",
  description: "Web developer focused on creating user-centric web experiences.",
  icons: {
    icon: '/favicon.ico', // favicon.ico dosyanın public klasöründe olduğunu varsayıyoruz
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="font-poppins bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-500 antialiased selection:bg-emerald-500 selection:text-white">
        
        {/* Tema yanıp sönmesini engelleyen script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localTheme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (localTheme === 'dark' || (!localTheme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

        <Providers>
            <CustomCursor />
            <Navbar />
            
            {/* Sayfa İçerikleri Buraya Gelecek */}
            <main className="min-h-screen">
               {children}
            </main>
            
            <Footer />
        </Providers>
      </body>
    </html>
  );
}