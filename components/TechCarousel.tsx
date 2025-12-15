"use client";

import React from "react";
import { motion } from "framer-motion";
import { techIcons } from "@/data/resume";

export const TechCarousel = () => {
    return (
        <section className="py-6 bg-slate-50 dark:bg-slate-950 overflow-hidden">
            <div className="container mx-auto px-6 mb-6 text-center">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    Tecnologias & Ferramentas
                </p>
            </div>

            <div className="relative w-full max-w-7xl mx-auto mask-gradient">

                {/* Camada de Gradiente Lateral */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-20" />
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-20" />

                {/* ▼▼▼ ALTERAÇÃO AQUI: Removi 'dark:border-y' e 'dark:border-white/5' ▼▼▼ */}
                <div className="flex py-6 rounded-xl relative overflow-hidden
                                dark:bg-gradient-to-b dark:from-slate-900/0 dark:via-slate-800/90 dark:to-slate-900/0
                                dark:backdrop-blur-sm
                                dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]">

                    <motion.div
                        className="flex gap-12 items-center flex-nowrap pr-12 px-4 z-10"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 25,
                            repeat: Infinity,
                        }}
                        whileHover={{ animationPlayState: "paused" }}
                    >
                        {[...techIcons, ...techIcons].map((tech, index) => (
                            <div
                                key={index}
                                className="relative flex-shrink-0 group flex flex-col items-center justify-center gap-2 min-w-[80px]"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                                    <img
                                        src={tech.src}
                                        alt={tech.name}
                                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 drop-shadow-lg"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "https://placehold.co/100x100?text=?";
                                        }}
                                    />
                                </div>
                                <span className="text-xs font-medium text-slate-400 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors opacity-0 group-hover:opacity-100 absolute -bottom-6">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};