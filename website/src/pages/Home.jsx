import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { Stack } from '../components/Stack';


const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Stack />
    </>
  );
};

export default HomePage;