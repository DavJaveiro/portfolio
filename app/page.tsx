"use client";

import React, { useState, useEffect } from 'react';
import { Download, Moon, Sun, Briefcase, Code, GraduationCap, Globe, Users, Play, Youtube } from 'lucide-react'; // Adicionei Youtube de volta aqui
import { motion, useScroll, useSpring } from 'framer-motion';

// Importando componentes refatorados
import { resumeData } from '@/data/resume';
import { SkillBar } from '@/components/SkillBar';
import { ExperienceCard } from '@/components/ExperienceCard';
import { HeroSection } from '@/components/HeroSection';
import { TechCarousel } from '@/components/TechCarousel';
// Removi o import do VideoPlayer pois vamos integrá-lo diretamente

export default function CleanPortfolio() {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    // Hook para controlar a barra de progresso no topo
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => setDarkMode(mediaQuery.matches);
        handleChange();
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => setDarkMode(!darkMode);

    // Dados do vídeo em destaque
    const featuredVideo = {
        id: "dmeQVVixBOw",
        title: "Java ☕, Python ⚙️ & IA 🤖 — Arquiteturas Modernas com Spring Boot"
    };

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300 selection:bg-indigo-500 selection:text-white">

                {/* Progress Bar */}
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 z-[100] origin-left"
                    style={{ scaleX }}
                />

                {/* Navbar */}
                <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                    <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-5xl">
                        <div className="font-bold text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <div className="hidden w-8 h-8 bg-indigo-600 rounded-lg items-center justify-center text-white font-mono">DL</div>
                            <span className="hidden sm:block">{resumeData.name}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                                aria-label="Alternar Tema"
                            >
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            <a
                                href="/davidson_linhares.pdf"
                                download
                                className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                            >
                                <Download size={16} />
                                <span className="hidden sm:inline">CV</span>
                            </a>
                        </div>
                    </div>
                </nav>

                <main className="relative z-10">
                    <HeroSection darkMode={darkMode} />
                    <TechCarousel />

                    <div className="container mx-auto px-6 max-w-5xl mt-20">

                        {/* Stats Rápidos */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                            {[
                                { val: "Graduando", label: "Eng. de Software" },
                                { val: "Backend", label: "Especialista Java/Spring" },
                                { val: "SaaS", label: "Projeto em Desenvolvimento" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm text-center">
                                    <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">{stat.val}</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Experiência Profissional */}
                        <section className="mb-20">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                                    <Briefcase size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Experiência Profissional</h2>
                            </div>
                            <div className="space-y-4">
                                {resumeData.experience.map((job) => (
                                    <ExperienceCard key={job.id} job={job} />
                                ))}
                            </div>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            {/* Stack Tecnológica */}
                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                                        <Code size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Stack Tecnológica</h2>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                    {resumeData.skills.map((skill, index) => (
                                        <SkillBar key={index} skill={skill} delay={index} />
                                    ))}
                                </div>
                            </section>

                            {/* Formação Acadêmica */}
                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                                        <GraduationCap size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Formação Acadêmica</h2>
                                </div>
                                <div className="space-y-4">
                                    {resumeData.education.map((edu, idx) => (
                                        <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start gap-4">
                                            {edu.logo && (
                                                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-white p-1 border border-slate-100 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                                                    <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{edu.course}</h3>
                                                <p className="text-slate-600 dark:text-slate-300 mt-1">{edu.school}</p>
                                                <span className="text-sm text-indigo-600 dark:text-indigo-400 mt-2 block font-medium">{edu.period}</span>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="bg-indigo-600 p-6 rounded-2xl text-white shadow-lg mt-6">
                                        <h3 className="font-bold mb-2 flex items-center gap-2"><Globe size={18}/> Interesses</h3>
                                        <p className="text-sm text-indigo-100">Clean Architecture, Observabilidade, DevOps, Cloud Native.</p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* --- SEÇÃO COMUNIDADE UNIFICADA --- */}
                        <section className="mb-20">
                            {/* Título da Seção */}
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                                    <Users size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Comunidade</h2>
                            </div>

                            <div className="flex flex-col gap-6">

                                {/* 1. BLOCO DO VÍDEO (Integrado) */}
                                <div className="w-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                                    {/* CABEÇALHO DO VÍDEO */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg text-red-600 dark:text-red-500">
                                                <Play size={20} fill="currentColor" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 dark:text-white">Último Vídeo</h3>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">Acompanhe meus estudos recentes</p>
                                            </div>
                                        </div>

                                        {/* Botão de Inscrição - Estilo unificado (Vermelho Sólido sempre) */}
                                        <a
                                            href="https://www.youtube.com/@DavJaveiro?sub_confirmation=1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-bold text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-center transition-colors shadow-sm w-full sm:w-auto"
                                        >
                                            Inscrever-se
                                        </a>
                                    </div>

                                    {/* Player */}
                                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-lg border-2 border-slate-100 dark:border-slate-700">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                                            title={featuredVideo.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>

                                    <h4 className="mt-4 font-semibold text-slate-900 dark:text-white text-base leading-tight">
                                        {featuredVideo.title}
                                    </h4>
                                </div>



                            </div>
                        </section>

                        {/* Footer */}
                        <footer className="border-t border-slate-200 dark:border-slate-800 pt-8 pb-12 text-center md:text-left text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center">
                            <p>© 2025 {resumeData.name}. Construído com Next.js & Tailwind.</p>
                            <div className="flex gap-4 mt-4 md:mt-0">
                                <a href={resumeData.contact.linkedin} className="hover:text-indigo-600 transition-colors">Linkedin</a>
                                <a href={resumeData.contact.github} className="hover:text-indigo-600 transition-colors">Github</a>
                            </div>
                        </footer>

                    </div>
                </main>
            </div>
        </div>
    );
}