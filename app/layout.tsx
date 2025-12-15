import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    // Título que aparece na aba do navegador
    title: "Davidson Linhares | Backend Engineer",

    // Descrição para o Google
    description: "Portfólio de Davidson Linhares. Desenvolvedor Backend Especialista em Java, Spring Boot e Soluções em Nuvem.",

    // Configuração para WhatsApp, LinkedIn, Facebook (Open Graph)
    openGraph: {
        title: "Davidson Linhares | Backend Engineer",
        description: "Desenvolvedor Backend Especialista em Java, Spring Boot e Soluções em Nuvem.",
        url: "https://davjaveiro.com.br", // Seu domínio oficial
        siteName: "Portfólio Davidson Linhares",
        locale: "pt_BR",
        type: "website",
    },

    // Configuração para Twitter
    twitter: {
        card: "summary_large_image",
        title: "Davidson Linhares | Backend Engineer",
        description: "Desenvolvedor Backend Especialista em Java, Spring Boot e Soluções em Nuvem.",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // Mudei para pt-BR para SEO e acessibilidade
        <html lang="pt-BR">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}