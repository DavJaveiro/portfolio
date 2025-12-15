"use client";

import React from "react";
import { Play, Youtube } from "lucide-react";

interface VideoPlayerProps {
    videoId: string;
    title: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title }) => {
    return (
        <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Cabeçalho da Seção */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-xl text-red-600 dark:text-red-500">
                            <Play size={24} fill="currentColor" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Último Vídeo</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">
                                Acompanhe meus estudos e tutoriais mais recentes.
                            </p>
                        </div>
                    </div>

                    <a
                        href="https://www.youtube.com/@DavJaveiro?sub_confirmation=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/40"
                    >
                        <Youtube size={20} />
                        <span>Inscrever-se</span>
                    </a>
                </div>

                {/* Player de Vídeo Estilizado */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 dark:border-slate-700 bg-slate-900">
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Título do Vídeo Abaixo */}
                <div className="mt-6 flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        DL
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white text-lg leading-tight">
                            {title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            Postado recentemente no canal DavJaveiro
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};