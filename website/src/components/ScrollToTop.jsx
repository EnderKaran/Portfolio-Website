import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sayfa yolu (pathname) değiştiğinde pencereyi en üste kaydır
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};