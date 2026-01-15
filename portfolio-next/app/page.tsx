'use client'; // useTranslation kullandığımız için client component olmak zorunda

import React from 'react';
import { Hero } from "@/src/components/Hero";
import { About } from "@/src/components/About";
import { Portfolio } from "@/src/components/Portfolio";
import { Stack } from "@/src/components/Stack";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Stack />
    </>
  );
}