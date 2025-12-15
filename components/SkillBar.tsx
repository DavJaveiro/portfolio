"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/types';

interface SkillBarProps {
  skill: Skill;
  delay: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: delay * 0.1 }}
    viewport={{ once: true }}
    className="mb-4"
  >
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{skill.level}%</span>
    </div>
    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        className="bg-indigo-600 h-2.5 rounded-full"
      />
    </div>
  </motion.div>
);