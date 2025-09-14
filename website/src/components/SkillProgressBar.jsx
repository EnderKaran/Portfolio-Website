import React from 'react';
import { motion } from 'framer-motion';

export const SkillProgressBar = ({ skill, percentage }) => {
  return (
    <div className="w-full">
      
      <div className="flex justify-between items-center mb-1">
        <p className="text-base font-medium text-white/80">{skill}</p>
        <p className="text-sm font-medium text-emerald-300">{percentage}%</p>
      </div>

      
      <div className="w-full bg-black/30 rounded-full h-2.5 border border-white/10">
        
        
        <motion.div
          className="bg-emerald-400 h-2.5 rounded-full"
          
          initial={{ width: '0%' }}
          
          whileInView={{ width: `${percentage}%` }}
          
          viewport={{ once: true }}
          
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
      </div>
    </div>
  );
};