import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type }) => {
  return (
    <Helmet>
      {/* Standart etiketler */}
      <title>{title}</title>
      <meta name='description' content={description} />

      {/* Facebook / Open Graph etiketleri */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter etiketleri */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

export default SEO;