"use client";

import React, { useState, useEffect } from 'react';
import { Download, Moon, Sun, Briefcase, Code, GraduationCap, Globe, Users, Play, Youtube, LayoutGrid, Mail } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

import { resumeData } from '@/data/resume';
import { SkillBar } from '@/components/SkillBar';
import { ExperienceCard } from '@/components/ExperienceCard';
import { HeroSection } from '@/components/HeroSection';
import { TechCarousel } from '@/components/TechCarousel';

interface VideoData {
    id: string;
    title: string;
}

export default function CleanPortfolio() {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('home');
    const [showEmailBtn, setShowEmailBtn] = useState(false);

    const [featuredVideo, setFeaturedVideo] = useState<VideoData>({
        id: "dmeQVVixBOw",
        title: "Java ☕, Python ⚙️ & IA 🤖 — Arquiteturas Modernas com Spring Boot"
    });

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const navItems = [
        { id: 'home', icon: LayoutGrid, label: 'Início' },
        { id: 'experience', icon: Briefcase, label: 'Exp.' },
        { id: 'stack', icon: Code, label: 'Stack' },
        { id: 'education', icon: GraduationCap, label: 'Formação' },
        { id: 'community', icon: Users, label: 'Canal' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const scrollPosition = currentScroll + 300;

            // 1. Scroll Spy para navegação
            for (const item of navItems) {
                const element = document.getElementById(item.id);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(item.id);
                }
            }

            // 2. Lógica do Botão Flutuante (Aparece após 400px)
            if (currentScroll > 400) {
                setShowEmailBtn(true);
            } else {
                setShowEmailBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => setDarkMode(mediaQuery.matches);
        handleChange();
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        const fetchLatestVideo = async () => {
            try {
                const res = await fetch('/api/video');
                if (res.ok) {
                    const data = await res.json();
                    if (data.id) {
                        setFeaturedVideo({
                            id: data.id,
                            title: data.title
                        });
                    }
                }
            } catch (error) {
                console.error("Usando vídeo padrão (API offline):", error);
            }
        };
        fetchLatestVideo();
    }, []);

    const toggleTheme = () => setDarkMode(!darkMode);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 40, // Ajuste fino já que não tem mais header
                behavior: 'smooth'
            });
        }
    };

    // --- SIDEBAR DESKTOP ---
    const SidebarNav = () => (
        <nav className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg w-16 items-center transition-all hover:w-48 group overflow-hidden">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 w-full p-2 rounded-xl transition-all relative ${
                        activeSection === item.id
                            ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                            : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                    }`}
                >
                    <div className="relative z-10 flex-shrink-0">
                        <item.icon size={20} strokeWidth={activeSection === item.id ? 2.5 : 2} />
                    </div>
                    <span className={`text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-12 ${activeSection === item.id ? 'font-bold' : ''}`}>
                        {item.label}
                    </span>
                    {activeSection === item.id && (
                        <motion.div layoutId="activeIndicatorDesktop" className="absolute left-0 w-1 h-6 bg-indigo-600 rounded-r-full"/>
                    )}
                </button>
            ))}

            {/* Separador */}
            <div className="w-full h-px bg-slate-200 dark:bg-slate-700 my-1" />

            {/* Botão de Tema */}
            <button
                onClick={toggleTheme}
                className="flex items-center gap-3 w-full p-2 rounded-xl transition-all text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 relative"
            >
                <div className="relative z-10 flex-shrink-0">
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </div>
                <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-12">
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
            </button>

            {/* Botão de CV */}
            <a
                href="/davidson_linhares.pdf"
                download
                className="flex items-center gap-3 w-full p-2 rounded-xl transition-all text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 relative"
            >
                <div className="relative z-10 flex-shrink-0">
                    <Download size={20} />
                </div>
                <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-12">
                    Download CV
                </span>
            </a>
        </nav>
    );

    // --- NAVBAR MOBILE ---
    const MobileNav = () => (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 xl:hidden pb-safe">
            <div className="flex justify-between items-center h-16 px-4">

                {/* Links de Navegação */}
                <div className="flex justify-around flex-1">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors relative ${
                                activeSection === item.id
                                    ? 'text-indigo-600 dark:text-indigo-400'
                                    : 'text-slate-400 dark:text-slate-500'
                            }`}
                        >
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeIndicatorMobile"
                                    className="absolute top-0 w-8 h-1 bg-indigo-600 rounded-b-full"
                                />
                            )}
                            <item.icon size={20} strokeWidth={activeSection === item.id ? 2.5 : 2} />
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </button>
                    ))}
                </div>

                {/* Divisória Vertical */}
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

                {/* Ações Extras (Tema e CV) */}
                <div className="flex gap-3 items-center pl-1">
                    <button onClick={toggleTheme} className="text-slate-400 hover:text-amber-500 transition-colors">
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a href="/davidson_linhares.pdf" download className="text-slate-400 hover:text-emerald-500 transition-colors">
                        <Download size={20} />
                    </a>
                </div>

            </div>
        </nav>
    );

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300 selection:bg-indigo-500 selection:text-white">

                <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 z-[100] origin-left" style={{ scaleX }} />

                <SidebarNav />
                <MobileNav />

                {/* Botão Flutuante de Email */}
                <AnimatePresence>
                    {showEmailBtn && (
                        <motion.a
                            href={`mailto:${resumeData.contact.email}`}
                            initial={{ opacity: 0, scale: 0, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0, y: 20 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="fixed bottom-20 right-4 xl:bottom-8 xl:right-8 z-40 p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg shadow-indigo-600/30 transition-colors flex items-center justify-center"
                            aria-label="Enviar Email"
                        >
                            <Mail size={24} />
                        </motion.a>
                    )}
                </AnimatePresence>

                <main className="relative z-10 pt-10 md:pt-0"> {/* Pequeno padding top no mobile pois removemos o header */}
                    <div id="home">
                        <HeroSection darkMode={darkMode} />
                        <TechCarousel />
                    </div>

                    <div className="container mx-auto px-6 max-w-5xl mt-20">
                        {/* Stats */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-4">
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

                        {/* Experiência */}
                        <section id="experience" className="mb-20 scroll-mt-24">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400"><Briefcase size={24} /></div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Experiência Profissional</h2>
                            </div>
                            <div className="space-y-4">
                                {resumeData.experience.map((job) => <ExperienceCard key={job.id} job={job} />)}
                            </div>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            <section id="stack" className="scroll-mt-24">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400"><Code size={24} /></div>
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Stack Tecnológica</h2>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                    {resumeData.skills.map((skill, index) => <SkillBar key={index} skill={skill} delay={index} />)}
                                </div>
                            </section>
                            <section id="education" className="scroll-mt-24">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400"><GraduationCap size={24} /></div>
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Formação Acadêmica</h2>
                                </div>
                                <div className="space-y-4">
                                    {resumeData.education.map((edu, idx) => (
                                        <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start gap-4">
                                            {edu.logo && <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-white p-1 border border-slate-100 dark:border-slate-700 flex items-center justify-center overflow-hidden"><img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" /></div>}
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

                        {/* Comunidade */}
                        <section id="community" className="mb-20 scroll-mt-24">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400"><Users size={24} /></div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Comunidade</h2>
                            </div>

                            <div className="flex flex-col gap-6">
                                {/* VIDEO PLAYER INTEGRADO */}
                                <div className="w-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg text-red-600 dark:text-red-500"><Play size={20} fill="currentColor" /></div>
                                            <div>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">No meu canal, eu exploro o ecossistema Java e Spring Boot a fundo, traduzindo conceitos complexos de backend, microsserviços e cloud para aplicações do mundo real.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="https://www.youtube.com/@DavJaveiro?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-center transition-colors shadow-sm w-full sm:w-auto">Inscrever-se</a>
                                    </div>

                                    {/* O ID aqui vem do backend Java via API Route */}
                                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-lg border-2 border-slate-100 dark:border-slate-700">
                                        <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${featuredVideo.id}`} title={featuredVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    <h4 className="mt-4 font-semibold text-slate-900 dark:text-white text-base leading-tight">{featuredVideo.title}</h4>
                                </div>


                            </div>
                        </section>

                        <footer className="border-t border-slate-200 dark:border-slate-800 pt-8 pb-24 md:pb-12 text-center md:text-left text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center">
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