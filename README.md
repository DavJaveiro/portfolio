# 👨‍💻 Portfólio Profissional - Davidson Linhares

## 📖 Sobre o Projeto

Este projeto é o meu portfólio pessoal, projetado para apresentar minha jornada como **Engenheiro de Software Backend** (Especialista em Java/Spring) e meus projetos Full Stack.

O objetivo foi criar uma aplicação que não apenas mostrasse minhas informações, mas que também demonstrasse domínio sobre **Clean Code**, **Componentização** e **UX/UI moderna**.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as versões mais atuais das ferramentas de mercado:

-   **[Next.js 15](https://nextjs.org/)** (App Router & Server Components)
-   **[TypeScript](https://www.typescriptlang.org/)** (Tipagem estática rigorosa)
-   **[Tailwind CSS v4](https://tailwindcss.com/)** (Estilização Utility-first)
-   **[Framer Motion](https://www.framer.com/motion/)** (Animações fluidas e gestos)
-   **[Lucide React](https://lucide.dev/)** (Ícones leves e consistentes)

## ✨ Funcionalidades Principais

-   🌗 **Dark/Light Mode Inteligente**: Detecta a preferência do sistema operacional e permite alternância manual, persistindo a escolha.
-   🎢 **Infinite Tech Marquee**: Um carrossel infinito animado ("Glassmorphism") para exibir a stack tecnológica.
-   📱 **Totalmente Responsivo**: Layout fluido que se adapta perfeitamente de celulares a monitores ultrawide.
-   📄 **Dados Estruturados**: Todo o conteúdo (Experiência, Educação, Skills) é separado em arquivos de dados (`src/data/resume.ts`), facilitando a manutenção.
-   ⚡ **SEO Otimizado**: Metadados configurados, Open Graph para redes sociais e estrutura semântica.

## 📂 Estrutura do Projeto

A arquitetura foi pensada para ser modular e escalável:

```text
/src
  ├── app/            # Páginas e Layouts (App Router)
  ├── components/     # Componentes Reutilizáveis (Hero, Cards, Carousel...)
  ├── data/           # Fonte única de verdade dos dados (Resume Data)
  ├── public/         # Assets estáticos (Imagens, Logos, PDF)
  ├── types/          # Definições de Tipos TypeScript (Interfaces)
               