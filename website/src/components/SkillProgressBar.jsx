import React from 'react';
import { motion } from 'framer-motion';

export const SkillProgressBar = ({ skill, percentage }) => {
  
  const barVariants = {
    hidden: { 
      width: '0%' 
    },
    visible: {
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.2,
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        
        {/* DÜZELTME: Renk sınıflarının başına '!' eklenerek ezilmeleri engellendi */}
        <p className="text-base font-medium !text-zinc-700 dark:!text-white/90">{skill}</p>
        <p className="text-sm font-medium !text-emerald-600 dark:!text-emerald-400">{percentage}%</p>
        
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-black/30 rounded-full h-2.5 border border-gray-300 dark:border-white/10">
        
        <motion.div
          className="bg-emerald-500 h-2.5 rounded-full"
          variants={barVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};