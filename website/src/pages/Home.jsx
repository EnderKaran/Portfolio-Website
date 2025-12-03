import React from 'react';
import { useTranslation } from 'react-i18next';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { Stack } from '../components/Stack';
import SEO from '../components/SEO'; 

const HomePage = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <SEO 
        title={t('meta_home_title')} 
        description={t('meta_home_desc')}
        name="Ender Karan"
        type="website"
      />
      
      <Hero />
      <About />
      <Portfolio />
      <Stack />
    </>
  );
};

export default HomePage;