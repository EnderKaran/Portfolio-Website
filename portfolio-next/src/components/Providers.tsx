'use client';

import React from 'react';
import '../i18n';
import { AnimatePresence } from 'framer-motion';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
}