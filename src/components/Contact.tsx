'use client';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';


// --- MOCK BİLEŞENLER VE İKONLAR ---
const Icons = {
  Send: () => <FaPaperPlane />,
  Mail: () => <FaEnvelope />,
  Linkedin: () => <FaLinkedin />,
  Github: () => <FaGithub />
};

const useTranslation = () => ({
    t: (key: string) => {
        const translations: Record<string, string> = {
            'contact_title': 'İletişime Geçin',
            'contact_subtitle': 'Aklınızda bir proje varsa veya sadece merhaba demek istiyorsanız, yeni fikirleri ve fırsatları konuşmaya her zaman açığım.',
            'contact_form_name': 'Ad Soyad',
            'contact_form_email': 'E-posta',
            'contact_form_message': 'Mesaj',
            'contact_form_submit': 'Mesaj Gönder',
            'validation_name_min': 'Adınız ve soyadınız çok kısa!',
            'validation_required': 'Bu alan zorunludur.',
            'validation_email_invalid': 'Geçersiz e-posta adresi.',
            'validation_message_min': 'Mesajınız en az 10 karakter olmalıdır.',
            'mailto_subject': 'Portfolyo Sitesinden Mesaj:',
            'mailto_sender': 'Gönderen:',
            'mailto_email': 'E-posta:',
            'mailto_message': 'Mesaj:',
        };
        return translations[key] || key;
    }
});
// ---------------------------------------------

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
        <section id="contact" className="relative min-h-screen pt-32 pb-24 overflow-hidden transition-colors duration-500 bg-white dark:bg-[#030303] text-gray-900 dark:text-white flex items-center">
            
            {/* Arka Plan Glow Efektleri */}
            <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-50 -z-10">
                <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500 blur-[160px] rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-emerald-500 blur-[150px] rounded-full mix-blend-multiply opacity-30"></div>
            </div>

            <div className="container relative z-10 px-4 mx-auto max-w-[1200px]">
                
                {/* Referans Görseldeki İkiye Bölünmüş Tasarım (Bento Grip Mantığı) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    {/* SOL TARAF: İletişim Bilgileri */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.8 }} 
                        className="lg:col-span-5 flex flex-col justify-center"
                    >
                        <div className="mb-10">
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                                Birlikte <br /> <span className="text-emerald-500">çalışmak için</span>
                            </h2>
                            <h3 className="text-2xl font-bold mb-4">İletişime Geç</h3>
                            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                                {t('contact_subtitle')}
                            </p>
                        </div>

                        {/* İletişim Linkleri */}
                        <div className="space-y-4">
                            <a href="mailto:ender.karan14@gmail.com" className="flex items-center gap-6 p-4 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-emerald-500/30 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all group">
                                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-[#0a0a0a] text-emerald-500 shadow-sm group-hover:scale-110 transition-transform">
                                    <Icons.Mail />
                                </div>
                                <span className="font-bold text-gray-700 dark:text-gray-200">ender.karan14@gmail.com</span>
                            </a>

                            <a href="https://linkedin.com/in/ender-karan-52303b187" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-emerald-500/30 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all group">
                                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-[#0a0a0a] text-blue-500 shadow-sm group-hover:scale-110 transition-transform">
                                    <Icons.Linkedin />
                                </div>
                                <span className="font-bold text-gray-700 dark:text-gray-200">linkedin.com/in/ender-karan</span>
                            </a>

                            <a href="https://github.com/EnderKaran" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-emerald-500/30 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all group">
                                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white shadow-sm group-hover:scale-110 transition-transform">
                                    <Icons.Github />
                                </div>
                                <span className="font-bold text-gray-700 dark:text-gray-200">github.com/EnderKaran</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* SAĞ TARAF: İletişim Formu */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.8, delay: 0.2 }} 
                        className="lg:col-span-7"
                    >
                        <div className="p-8 md:p-12 bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/5 rounded-[3rem] shadow-2xl relative overflow-hidden">
                            
                            {/* Form Arka Plan Dekorasyonu */}
                            <div className="absolute top-[-50%] right-[-50%] w-[100%] h-[100%] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>

                            <Formik initialValues={{ adSoyad: '', email: '', mesaj: '' }} validationSchema={ContactSchema} onSubmit={handleSubmit}>
                                {({ errors, touched, isSubmitting }) => (
                                    <Form className="space-y-6 relative z-10">
                                        
                                        <div>
                                            <label htmlFor="adSoyad" className="block mb-3 ml-2 text-sm font-bold text-gray-900 dark:text-white">
                                                {t('contact_form_name')}
                                            </label>
                                            <Field 
                                                type="text" 
                                                name="adSoyad" 
                                                placeholder="Örn: Ender Karan"
                                                className={`w-full px-6 py-4 transition-all duration-300 bg-gray-50 dark:bg-white/5 border-2 rounded-2xl focus:outline-none text-gray-900 dark:text-white placeholder:text-gray-400 ${errors.adSoyad && touched.adSoyad ? 'border-red-500 focus:border-red-500' : 'border-gray-100 dark:border-white/5 focus:border-emerald-500 dark:focus:border-emerald-500'}`} 
                                            />
                                            <ErrorMessage name="adSoyad" component="div" className="mt-2 ml-2 text-sm font-bold text-red-500" />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="email" className="block mb-3 ml-2 text-sm font-bold text-gray-900 dark:text-white">
                                                {t('contact_form_email')}
                                            </label>
                                            <Field 
                                                type="email" 
                                                name="email" 
                                                placeholder="ornek@mail.com"
                                                className={`w-full px-6 py-4 transition-all duration-300 bg-gray-50 dark:bg-white/5 border-2 rounded-2xl focus:outline-none text-gray-900 dark:text-white placeholder:text-gray-400 ${errors.email && touched.email ? 'border-red-500 focus:border-red-500' : 'border-gray-100 dark:border-white/5 focus:border-emerald-500 dark:focus:border-emerald-500'}`} 
                                            />
                                            <ErrorMessage name="email" component="div" className="mt-2 ml-2 text-sm font-bold text-red-500" />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="mesaj" className="block mb-3 ml-2 text-sm font-bold text-gray-900 dark:text-white">
                                                {t('contact_form_message')}
                                            </label>
                                            <Field 
                                                as="textarea" 
                                                name="mesaj" 
                                                rows="5" 
                                                placeholder="Ne hakkında konuşmak istersin? Kısaca özetle."
                                                className={`w-full px-6 py-4 transition-all duration-300 bg-gray-50 dark:bg-white/5 border-2 rounded-2xl focus:outline-none text-gray-900 dark:text-white placeholder:text-gray-400 resize-none ${errors.mesaj && touched.mesaj ? 'border-red-500 focus:border-red-500' : 'border-gray-100 dark:border-white/5 focus:border-emerald-500 dark:focus:border-emerald-500'}`} 
                                            />
                                            <ErrorMessage name="mesaj" component="div" className="mt-2 ml-2 text-sm font-bold text-red-500" />
                                        </div>
                                        
                                        <div className="pt-4">
                                            <motion.button 
                                                type="submit" 
                                                disabled={isSubmitting} 
                                                whileHover={{ scale: 1.02, y: -2 }} 
                                                whileTap={{ scale: 0.98 }} 
                                                className="flex items-center justify-center w-full gap-3 px-8 py-5 font-black text-white transition-all duration-300 rounded-2xl shadow-xl group bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-emerald-500/25"
                                            >
                                                <span>{t('contact_form_submit')}</span>
                                                <div className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                                    <Icons.Send />
                                                </div>
                                            </motion.button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};