import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const ContactSchema = Yup.object().shape({
    adSoyad: Yup.string()
        .min(2, 'Adınız ve soyadınız çok kısa!')
        .required('Bu alan zorunludur.'),
    email: Yup.string()
        .email('Geçersiz e-posta adresi.')
        .required('Bu alan zorunludur.'),
    mesaj: Yup.string()
        .min(10, 'Mesajınız en az 10 karakter olmalıdır.')
        .required('Bu alan zorunludur.'),
});

export const Contact = () => {
    
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const subject = encodeURIComponent(`Portfolyo Sitesinden Mesaj: ${values.adSoyad}`);
        const body = encodeURIComponent(
`Gönderen: ${values.adSoyad}
E-posta: ${values.email}

Mesaj:
${values.mesaj}`
        );
        window.location.href = `mailto:ender.karan14@gmail.com?subject=${subject}&body=${body}`;
        setSubmitting(false);
        resetForm();
    };
   
    const errorClasses = "text-red-500 text-sm mt-1 text-left";

    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-4">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">İletişime Geçin</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
                        Aklınızda bir proje mi var? Aşağıdaki formu doldurarak bana ulaşabilirsiniz.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <Formik
                        initialValues={{ adSoyad: '', email: '', mesaj: '' }}
                        validationSchema={ContactSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, isSubmitting }) => (
                            <Form className="space-y-6">
                                {/* Ad Soyad Alanı */}
                                <div>
                                    <label htmlFor="adSoyad" className="block text-sm font-medium mb-2 text-left">Ad Soyad</label>
                                    <Field 
                                        type="text" 
                                        name="adSoyad" 
                                        id="adSoyad" 
                                        className={`w-full p-3 bg-slate-100 dark:bg-black/40 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300 ${
                                            errors.adSoyad && touched.adSoyad ? 'border-emerald-500' : 'border-slate-300 dark:border-white/10'
                                        }`} 
                                    />
                                    <ErrorMessage name="adSoyad" component="div" className={errorClasses} />
                                </div>
                                {/* E-posta Alanı */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">E-posta</label>
                                    <Field 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className={`w-full p-3 bg-slate-100 dark:bg-black/40 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300 ${
                                            errors.email && touched.email ? 'border-emerald-500' : 'border-slate-300 dark:border-white/10'
                                        }`} 
                                    />
                                    <ErrorMessage name="email" component="div" className={errorClasses} />
                                </div>
                                {/* Mesaj Alanı */}
                                <div>
                                    <label htmlFor="mesaj" className="block text-sm font-medium mb-2 text-left">Mesajınız</label>
                                    <Field 
                                        as="textarea" 
                                        name="mesaj" 
                                        id="mesaj" 
                                        rows="6" 
                                        className={`w-full p-3 bg-slate-100 dark:bg-black/40 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300 ${
                                            errors.mesaj && touched.mesaj ? 'border-emerald-500' : 'border-slate-300 dark:border-white/10'
                                        }`} 
                                    />
                                    <ErrorMessage name="mesaj" component="div" className={errorClasses} />
                                </div>
                                {/* Buton */}
                                <div className="text-center pt-4">
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group flex items-center justify-center gap-3 w-full md:w-auto px-8 py-3 bg-emerald-500 text-white font-bold rounded-full shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 dark:focus:ring-offset-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span>Mesajı Gönder</span>
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