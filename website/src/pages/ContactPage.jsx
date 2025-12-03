import React from 'react';
import { useTranslation } from 'react-i18next';
import { Contact } from '../components/Contact'; 
import SEO from '../components/SEO'; 

const ContactPage = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <SEO 
        title={t('meta_contact_title')} 
        description={t('meta_contact_desc')}
        name="Ender Karan"
        type="website"
      />
      
      <div className="min-h-screen py-24 transition-colors duration-300 bg-background text-primary sm:py-32 ">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;