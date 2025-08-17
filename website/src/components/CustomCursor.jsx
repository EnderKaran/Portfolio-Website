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
    const mouseMoveHandler = (event) => {
      
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      setIsHovering(!!event.target.closest(".cursor-hover-item"));
    };
    
    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [mouseX, mouseY]); 

  
  const dotVariants = {
    default: {
      scale: 1,
    },
    hover: {
      scale: 0, 
    },
  };

  const circleVariants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: 'transparent',
      borderWidth: '2px',
    },
    hover: {
      height: 64,
      width: 64,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: '2px',
    },
  };

  return (
    <>
      
      <motion.div
        variants={dotVariants}
        animate={isHovering ? "hover" : "default"}
        style={{
          left: mouseX, 
          top: mouseY,
        }}
        className="fixed bg-white rounded-full z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 w-2 h-2"
      />
      
      <motion.div
        variants={circleVariants}
        animate={isHovering ? "hover" : "default"}
        style={{
          left: smoothMouseX, 
          top: smoothMouseY,
        }}
        className="fixed border border-white rounded-full z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;