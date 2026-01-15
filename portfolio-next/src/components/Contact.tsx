'use client';

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
    
    const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
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
        <section id="contact" className="min-h-screen py-24 transition-colors duration-300 bg-white dark:bg-black text-gray-800 dark:text-gray-200 sm:py-32">
            <div className="container px-4 mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12 text-center">
                    <h2 className="text-4xl font-bold tracking-tighter md:text-5xl text-emerald-500 dark:text-emerald-400">
                        {t('contact_title')}
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-400">
                        {t('contact_subtitle')}
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-2xl mx-auto">
                    <Formik initialValues={{ adSoyad: '', email: '', mesaj: '' }} validationSchema={ContactSchema} onSubmit={handleSubmit}>
                        {({ errors, touched, isSubmitting }) => (
                            <Form className="space-y-6">
                                <div>
                                    <label htmlFor="adSoyad" className="block mb-2 text-sm font-medium text-left text-gray-700 dark:text-gray-300">
                                        {t('contact_form_name')}
                                    </label>
                                    <Field type="text" name="adSoyad" className={`w-full p-3 transition-all duration-300 border-2 rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white ${errors.adSoyad && touched.adSoyad ? 'border-red-500' : ''}`} style={{ '--tw-ring-color': 'rgb(16 185 129)' } as React.CSSProperties} />
                                    <ErrorMessage name="adSoyad" component="div" className="mt-1 text-sm text-left text-red-500" />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-left text-gray-700 dark:text-gray-300">
                                        {t('contact_form_email')}
                                    </label>
                                    <Field type="email" name="email" className={`w-full p-3 transition-all duration-300 border-2 rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white ${errors.email && touched.email ? 'border-red-500' : ''}`} style={{ '--tw-ring-color': 'rgb(16 185 129)' } as React.CSSProperties} />
                                    <ErrorMessage name="email" component="div" className="mt-1 text-sm text-left text-red-500" />
                                </div>
                                
                                <div>
                                    <label htmlFor="mesaj" className="block mb-2 text-sm font-medium text-left text-gray-700 dark:text-gray-300">
                                        {t('contact_form_message')}
                                    </label>
                                    <Field as="textarea" name="mesaj" rows="6" className={`w-full p-3 transition-all duration-300 border-2 rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white ${errors.mesaj && touched.mesaj ? 'border-red-500' : ''}`} style={{ '--tw-ring-color': 'rgb(16 185 129)' } as React.CSSProperties} />
                                    <ErrorMessage name="mesaj" component="div" className="mt-1 text-sm text-left text-red-500" />
                                </div>
                                
                                <div className="pt-4 text-center">
                                    <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center w-full gap-3 px-8 py-3 font-bold text-white transition-all duration-300 rounded-full shadow-lg group md:w-auto bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed">
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