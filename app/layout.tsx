import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { CustomCursor } from "@/src/components/CustomCursor";
import Providers from "@/src/components/Providers";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Font Ayarları
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ender Karan | Frontend Developer",
  description: "Web developer focused on creating user-centric web experiences.",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning style={{ scrollBehavior: 'smooth' }}>
      <body className="font-poppins bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-500 antialiased selection:bg-emerald-500 selection:text-white">
        
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
            
            {/* Sayfa İçerikleri */}
            <main className="min-h-screen">
               {children}
            </main>
            
            <Footer />
        </Providers>
      </body>
    </html>
  );
}