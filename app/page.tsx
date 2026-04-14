'use client'; // useTranslation kullandığımız için client component olmak zorunda

import React from 'react';
import { Hero } from "@/src/components/Hero";
import { About } from "@/src/components/About";
import WorkProjects from "@/src/components/WorkProjects";
import { Portfolio } from "@/src/components/Portfolio";
import { Stack } from "@/src/components/Stack";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WorkProjects />
      <Portfolio />
      <Stack />
    </>
  );
}