"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Experience } from '@/types';

interface ExperienceCardProps {
  job: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ job }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.div 
      layout
      className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden mb-6"
    >
      <motion.div 
        layout="position"
        onClick={() => setIsOpen(!isOpen)}
        className="p-6 cursor-pointer flex flex-col md:flex-row md:items-start justify-between gap-4"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.company}</h3>
            {isOpen ? <ChevronUp size={18} className="text-indigo-500" /> : <ChevronDown size={18} className="text-slate-400" />}
          </div>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">{job.role}</p>
          <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span>{job.period}</span>
            <span>•</span>
            <span>{job.type}</span>
          </div>
          
          {!isOpen && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-slate-600 dark:text-slate-300 text-sm line-clamp-2"
            >
              {job.shortDescription}
            </motion.p>
          )}
        </div>

        {!isOpen && (
          <div className="hidden md:flex gap-2">
            {job.techs.slice(0, 3).map((tech, i) => (
               <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded font-medium">
                 {tech}
               </span>
            ))}
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-6 pb-6 border-t border-slate-100 dark:border-slate-700"
          >
            <div className="pt-4 space-y-3">
              {job.fullDescription.map((desc, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base"
                >
                  <span className="mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                  <p>{desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {job.techs.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-md font-medium border border-indigo-100 dark:border-indigo-800/50">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};