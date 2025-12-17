"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '@/data/resume';

// Caminhos das imagens - Coloque suas fotos na pasta /public
const perfilCamisaAzul = '/DavidsonAzul.png'; 
const perfilCamisaPreta = '/DavidsonPreta.png'; 

interface HeroSectionProps {
  darkMode: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-8 overflow-hidden mb-2">
      <div className="absolute top-0 inset-x-0 h-full w-full -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div 
          className={`relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] 
            ${darkMode 
              ? 'from-indigo-900 to-purple-900' 
              : 'from-indigo-200 to-purple-200'
            }`}
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex-shrink-0"
        >
          <div className="w-48 h-64 md:w-72 md:h-96 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl relative z-10 bg-slate-200 dark:bg-slate-800">
            {/* Nota: Lembre-se de colocar as imagens na pasta public */}
            <img 
              src={darkMode ? perfilCamisaPreta : perfilCamisaAzul} 
              alt="Davidson Linhares" 
              className="w-full h-full object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://placehold.co/400x500/1e293b/white?text=Foto";
              }}
            />
          </div>
          <div className="absolute inset-0 top-4 left-4 rounded-2xl bg-indigo-600 blur-2xl opacity-30 -z-10"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-block px-3 py-1 mb-4 text-base font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 dark:bg-indigo-900/20 rounded-full">
            Engenheiro de Software Backend
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Construindo soluções <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">escaláveis e robustas</span>.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-justify">
            {resumeData.summary}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-600/20">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:opacity-90 transition-colors flex items-center gap-2 shadow-lg">
              <Github size={20} /> GitHub
            </a>
            <a href={`mailto:${resumeData.contact.email}`} className="px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
              <Mail size={20} /> Contato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};