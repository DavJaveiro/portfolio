# 👨‍💻 Portfólio Profissional — Davidson Linhares

## 📖 Sobre o Projeto

Este projeto é o meu **portfólio profissional**, desenvolvido para apresentar minha trajetória como **Engenheiro de Software Backend (Java / Spring)**, além de projetos Full Stack e estudos contínuos em engenharia de software.

Mais do que um site institucional, o portfólio foi pensado como um **produto real**, integrando **frontend moderno** com um **microserviço backend próprio**, demonstrando domínio em:

* Arquitetura cliente-servidor
* Consumo de APIs externas
* Segurança de credenciais
* Deploy em cloud (AWS EC2)
* Boas práticas de código e organização

---

## 🧩 Arquitetura Geral

A aplicação é composta por **duas partes bem definidas**:

### 🔹 Frontend (Portfólio)

* Responsável pela interface, experiência do usuário e exibição dos dados
* Desenvolvido com **Next.js** e tecnologias modernas de UI

### 🔹 Backend (Microserviço API)

* **API REST em Java com Spring Boot**
* Hospedada em uma **instância EC2 na AWS**
* Consome a **YouTube Data API v3**
* Retorna ao frontend os dados do **último vídeo publicado no canal**
* Secrets gerenciados via **variáveis de ambiente**
* Acesso restrito via **CORS configurado**

➡️ O frontend consome essa API para manter o conteúdo do portfólio sempre atualizado, sem expor credenciais sensíveis.

---

## 🚀 Tecnologias Utilizadas

### 🖥️ Frontend

* **Next.js 15** (App Router & Server Components)
* **TypeScript**
* **Tailwind CSS v4**
* **Framer Motion**
* **Lucide React**

### ⚙️ Backend (Microserviço)

* **Java 21**
* **Spring Boot 3**
* **Spring Web (REST API)**
* **YouTube Data API v3**
* **AWS EC2 (Amazon Linux)**
* **Variáveis de ambiente para secrets**
* **CORS controlado**

---

## ✨ Funcionalidades Principais

* 🌗 Dark / Light Mode inteligente
* 🎢 Carrossel infinito de tecnologias
* 📱 Design totalmente responsivo
* 📄 Dados centralizados e fáceis de manter
* 🎥 Integração com microserviço backend real
* 🔐 Secrets nunca expostos no frontend ou no repositório
* ⚡ SEO otimizado

---

## 📂 Estrutura do Projeto — Frontend

```text
/src
  ├── app/            # Páginas e Layouts (App Router)
  ├── components/     # Componentes reutilizáveis
  ├── data/           # Dados estruturados (resume.ts)
  ├── public/         # Assets estáticos
  ├── types/          # Tipagens TypeScript
```

---

## 📂 Estrutura do Projeto — Backend (Microserviço YouTube API)

O backend segue uma **arquitetura em camadas**, separando claramente responsabilidades:

```text
src/main/java/br/com/youtubeapi/youtubeapi
 ├── controller
 │   └── VideoController.java        # Exposição dos endpoints REST
 │
 ├── service
 │   └── YouTubeService.java         # Regras de negócio e orquestração
 │
 ├── client
 │   └── YouTubeClient.java          # Comunicação com a YouTube Data API v3
 │
 ├── dto
 │   └── LatestVideoResponse.java    # DTO de resposta para o frontend
 │
 └── YouTubeApiApplication.java      # Classe principal (bootstrap)
```

### 📌 Organização por responsabilidade

* **Controller**
  Responsável apenas por lidar com requisições HTTP e respostas.

* **Service**
  Centraliza a lógica de negócio e transforma os dados vindos da API externa.

* **Client**
  Isola a comunicação com serviços externos (YouTube API), facilitando manutenção e testes.

* **DTOs**
  Definem contratos claros entre backend e frontend.

Essa estrutura torna o projeto **escalável, testável e fácil de evoluir**.

---

## ☁️ Backend & Deploy

* Microserviço executando em **EC2 (AWS)**
* Aplicação empacotada como **JAR Spring Boot**
* Variáveis sensíveis configuradas diretamente no ambiente da instância
* Serviço acessado via HTTP pelo frontend
* Setup representando um **cenário real de produção**

---

## 🎯 Objetivo do Projeto

Demonstrar, na prática:

* Capacidade de construir **soluções completas**
* Integração real entre **frontend e backend**
* Conhecimento em **Java, Spring, Cloud e Deploy**
* Aplicação de **boas práticas de arquitetura**

