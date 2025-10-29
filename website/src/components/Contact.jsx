import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

export const Contact = () => {
    const { t } = useTranslation(); 

    const ContactSchema = Yup.object().shape({
        adSoyad: Yup.string()
            .min(2, t('validation_name_min'))
            .required(t('validation_required')),
        email: Yup.string()
            .email(t('validation_email_invalid'))
            .required(t('validation_required')),
        mesaj: Yup.string()
            .min(10, t('validation_message_min'))
            .required(t('validation_required')),
    });
    
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const subject = encodeURIComponent(`${t('mailto_subject')} ${values.adSoyad}`);
        const body = encodeURIComponent(
` ${t('mailto_sender')} ${values.adSoyad}
  ${t('mailto_email')} ${values.email}

  ${t('mailto_message')}
  ${values.mesaj}`
        );
        window.location.href = `mailto:ender.karan14@gmail.com?subject=${subject}&body=${body}`;
        
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
        }, 500);
    };

    return (
        <section 
            id="contact" 
            className="min-h-screen py-24 transition-colors duration-300 sm:py-32"
            style={{ backgroundColor: 'rgb(var(--color-background))', color: 'rgb(var(--color-text-primary))' }}
        >
            <div className="container px-4 mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <h2 
                        className="text-4xl font-bold tracking-tighter md:text-5xl"
                        style={{ color: 'rgb(var(--color-accent))' }}
                    >
                        {t('contact_title')}
                    </h2>
                    <p 
                        className="max-w-2xl mx-auto mt-4 text-lg"
                        style={{ color: 'rgb(var(--color-text-secondary))' }}
                    >
                        {t('contact_subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <Formik
                        initialValues={{ adSoyad: '', email: '', mesaj: '' }}
                        validationSchema={ContactSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, isSubmitting }) => (
                            <Form className="space-y-6">
                                <div>
                                    <label 
                                        htmlFor="adSoyad" 
                                        className="block mb-2 text-sm font-medium text-left"
                                        style={{ color: 'rgb(var(--color-text-primary))' }}
                                    >
                                        {t('contact_form_name')}
                                    </label>
                                    <Field 
                                        type="text" 
                                        name="adSoyad" 
                                        id="adSoyad" 
                                        className="w-full p-3 transition-all duration-300 border-2 rounded-lg focus:outline-none focus:ring-2"
                                        style={{ 
                                            backgroundColor: 'rgb(var(--color-card-background))',
                                            borderColor: errors.adSoyad && touched.adSoyad ? '#ef4444' : 'rgb(var(--color-card-border))',
                                            color: 'rgb(var(--color-text-primary))',
                                            '--tw-ring-color': 'rgb(var(--color-accent))'
                                        }}
                                    />
                                    <ErrorMessage 
                                        name="adSoyad" 
                                        component="div" 
                                        className="mt-1 text-sm text-left text-red-500" 
                                    />
                                </div>
                                
                                <div>
                                    <label 
                                        htmlFor="email" 
                                        className="block mb-2 text-sm font-medium text-left"
                                        style={{ color: 'rgb(var(--color-text-primary))' }}
                                    >
                                        {t('contact_form_email')}
                                    </label>
                                    <Field 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className="w-full p-3 transition-all duration-300 border-2 rounded-lg focus:outline-none focus:ring-2"
                                        style={{ 
                                            backgroundColor: 'rgb(var(--color-card-background))',
                                            borderColor: errors.email && touched.email ? '#ef4444' : 'rgb(var(--color-card-border))',
                                            color: 'rgb(var(--color-text-primary))',
                                            '--tw-ring-color': 'rgb(var(--color-accent))'
                                        }}
                                    />
                                    <ErrorMessage 
                                        name="email" 
                                        component="div" 
                                        className="mt-1 text-sm text-left text-red-500" 
                                    />
                                </div>
                                
                                <div>
                                    <label 
                                        htmlFor="mesaj" 
                                        className="block mb-2 text-sm font-medium text-left"
                                        style={{ color: 'rgb(var(--color-text-primary))' }}
                                    >
                                        {t('contact_form_message')}
                                    </label>
                                    <Field 
                                        as="textarea" 
                                        name="mesaj" 
                                        id="mesaj" 
                                        rows="6" 
                                        className="w-full p-3 transition-all duration-300 border-2 rounded-lg focus:outline-none focus:ring-2"
                                        style={{ 
                                            backgroundColor: 'rgb(var(--color-card-background))',
                                            borderColor: errors.mesaj && touched.mesaj ? '#ef4444' : 'rgb(var(--color-card-border))',
                                            color: 'rgb(var(--color-text-primary))',
                                            '--tw-ring-color': 'rgb(var(--color-accent))'
                                        }}
                                    />
                                    <ErrorMessage 
                                        name="mesaj" 
                                        component="div" 
                                        className="mt-1 text-sm text-left text-red-500" 
                                    />
                                </div>
                                
                                <div className="pt-4 text-center">
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center w-full gap-3 px-8 py-3 font-bold text-white transition-all duration-300 rounded-full shadow-lg group md:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{ 
                                            backgroundColor: 'rgb(var(--color-accent))',
                                            boxShadow: '0 10px 15px -3px rgba(var(--color-accent), 0.3)',
                                            '--tw-ring-color': 'rgb(var(--color-accent))',
                                            '--tw-ring-offset-color': 'rgb(var(--color-background))'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(var(--color-accent), 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(var(--color-accent), 0.3)';
                                        }}
                                    >
                                        <span>{t('contact_form_submit')}</span>
                                        <FiSend className="transition-transform duration-300 group-hover:rotate-45" />
                                    </motion.button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </motion.div>
            </div>
        </section>
    );
};