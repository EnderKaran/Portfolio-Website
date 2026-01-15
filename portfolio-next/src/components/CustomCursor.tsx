'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 500 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      
      const target = event.target as HTMLElement;
      setIsHovering(!!target.closest(".cursor-hover-item") || target.tagName === 'A' || target.tagName === 'BUTTON');
    };
    
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [mouseX, mouseY]);

  const dotVariants = {
    default: { scale: 1 },
    hover: { scale: 0 },
  };

  const circleVariants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: "rgba(16, 185, 129, 0)", 
      borderWidth: '2px',   
      borderColor: "rgba(16, 185, 129, 1)", 
    },
    hover: {
      height: 64,
      width: 64,
      backgroundColor: "rgba(16, 185, 129, 0.5)", 
      borderWidth: '0px',
      borderColor: "rgba(16, 185, 129, 0)",
    },
  };

  return (
    <>
      <motion.div
        variants={dotVariants}
        animate={isHovering ? "hover" : "default"}
        style={{ left: mouseX, top: mouseY }}    
        className="fixed bg-emerald-500 rounded-full z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 w-2 h-2"
      />
       
      <motion.div
        variants={circleVariants}
        animate={isHovering ? "hover" : "default"}
        style={{ left: smoothMouseX, top: smoothMouseY }}
        className="fixed border border-emerald-500 rounded-full z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};