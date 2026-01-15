'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import '../i18n';
import { AnimatePresence, motion } from 'framer-motion'; 

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); 

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="h-full w-full" // Gerekirse yükseklik ayarı
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}