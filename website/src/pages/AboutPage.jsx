import React from 'react';
import { useTranslation } from 'react-i18next';
import Abouts from '../components/Abouts';
import SEO from '../components/SEO'; 

const AboutPage = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <SEO 
        title={t('meta_about_title')} 
        description={t('meta_about_desc')}
        name="Ender Karan"
        type="website"
      />

      <div className="min-h-screen py-24 transition-colors duration-300 bg-background text-primary sm:py-32 ">
        <Abouts />
      </div>
    </>
  );
};

export default AboutPage;