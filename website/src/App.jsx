import React, { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Bileşenler
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

// Sayfalar
import HomePage from './pages/Home'; 
import ChangelogPage from './pages/Changelog'; 
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import { Technologies } from './pages/Technologies';
import ProjectsPage from './pages/ProjectsPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // setTimeout, animasyonun başlamasına izin verip sonra scroll'u sıfırlar.
    // Bu, "sayfanın ortasında başlama" sorununu çözer.
    const timer = setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

const Layout = () => {
  const location = useLocation(); 

  return (
    <>
      <CustomCursor />
      <Navbar />
      <ScrollToTop />
      
      
      <AnimatePresence initial={false}>
        <motion.main
          key={location.pathname}
          
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
              
          transition={{ duration: 0.3 }}
          
          className="min-h-screen bg-background text-primary"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="changelog" element={<ChangelogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
}

export default App;