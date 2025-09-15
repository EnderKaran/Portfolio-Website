
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import HomePage from './pages/Home'; 
import ChangelogPage from './pages/Changelog'; 


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

      </Route>
    </Routes>
  );
}

export default App;