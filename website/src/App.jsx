
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import HomePage from './pages/Home'; 
import ChangelogPage from './pages/Changelog'; 
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import { Technologies } from './pages/Technologies';
import ProjectsPage from './pages/ProjectsPage';


const Layout = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
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