import React from 'react'; // İYİLEŞTİRME: React import'u eklendi
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { Hero } from "./pages/Hero";
import { Portfolio } from "./pages/Portfolio";
import { Stack } from "./pages/Stack";
import { Navbar } from "./components/Navbar";
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <main className="bg-background text-primary overflow-hidden transition-colors duration-300">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Stack />
      <Footer />
    </main>
  );
}

export default App;