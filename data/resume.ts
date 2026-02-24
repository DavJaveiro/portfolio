import { ResumeData } from "@/types";

export const resumeData: ResumeData = {
  name: "Davidson de Souza Linhares",
  role: "Desenvolvedor Backend Java | Spring Boot | Cloud",
  contact: {
    email: "Davidson.linhares@outlook.com",
    phone: "(24) 9-9956-3852",
    location: "Brasil",
    linkedin: "https://www.linkedin.com/in/davidson-linhares",
    github: "https://github.com/DavJaveiro"
  },
  summary: "Sou AI Software Engineer com forte base em desenvolvimento Backend Java, construindo sistemas robustos, escaláveis e preparados para produção. Minha trajetória combina Engenharia de Software, Matemática e formação prévia em Biologia, o que me proporcionou uma visão analítica sobre sistemas complexos e sua evolução. Atuo com Java e o ecossistema Spring no desenvolvimento de APIs REST, trabalhando com diferentes modelos arquiteturais, como arquitetura em camadas, modular monolith (organização por feature) e microsserviços, sempre com foco em sustentabilidade, confiabilidade e crescimento contínuo. Venho ampliando minha atuação na integração de Machine Learning a aplicações reais e no uso de AWS, Docker, CI/CD e Infraestrutura como Código, com o objetivo de desenvolver sistemas inteligentes, bem estruturados e preparados para evoluir com segurança",
  skills: [
    { name: 'Java / Spring Boot', level: 95 },
    { name: 'APIs REST / Microservices', level: 90 },
    { name: 'PostgreSQL / SQL', level: 85 },
    { name: 'Docker / CI/CD', level: 75 },
    { name: 'AWS / Terraform', level: 60 },
    { name: 'Angular / TypeScript', level: 70 },
  ],
  experience: [
    {
      id: 1,
      company: "ByeByeCupom!",
      role: "Desenvolvedor Full Stack",
      period: "06/2025 - Presente",
      type: "Tempo integral",
      shortDescription: "Plataforma SaaS voltada à digitalização de cupons fiscais (NFC-e) e Open Finance.",
      fullDescription: [
        "Arquitetura e desenvolvimento do back-end da solução em ambiente de nuvem.",
        "Definição da estrutura para futuros módulos de análise avançada.",
        "Criação de API RESTful segura para integração com sistemas de PDV.",
        "Desenvolvimento do motor de conversão XML/PDF.",
        "Utilização de tecnologias modernas como Java/Spring Boot, Node.js, Docker."
      ],
      techs: ["Java", "Spring Boot", "AWS", "Docker", "Node.js"]
    },
    {
      id: 2,
      company: "Telemática Sistemas Inteligentes",
      role: "Analista de Suporte",
      period: "05/2024 - Presente",
      type: "Resende-RJ",
      shortDescription: "Suporte crítico na planta da Volkswagen Caminhões e Ônibus.",
      fullDescription: [
        "Atuo como Analista de Suporte nível II na planta da Volkswagen.",
        "Responsável por garantir o funcionamento dos sistemas de controle de acesso.",
        "Monitoramento e manutenção de equipamentos e infraestrutura de TI."
      ],
      techs: ["Infraestrutura", "Suporte", "Controle de Acesso"]
    },
    {
      id: 3,
      company: "Flix Telecom",
      role: "Supervisor Administrativo",
      period: "2019 - 2021",
      type: "Resende-RJ",
      shortDescription: "Liderança de equipe e estruturação do setor de Qualidade.",
      fullDescription: [
        "Estruturação e inauguração do setor de Qualidade e Melhoria ao Cliente.",
        "Liderança de equipe de 7 analistas e supervisão de 2 mil ordens de serviço mensais.",
        "Análise de dados na plataforma MK Solutions e automação com VBA."
      ],
      techs: ["Liderança", "Análise de Dados", "VBA", "Gestão"]
    }
  ],
  education: [
    {
      school: "Universidade Federal Fluminense",
      course: "Bacharelado e Licenciatura em Matemática",
      period: "2025 - 2028 (Cursando)",
        logo: "/university/uff-logo.png"
    },
      {
          school: "Universidade Anhanguera São Paulo",
          course: "Bacharelado em Engenharia de Software",
          period: "2024 - 2027 (Cursando)",
          logo: "/university/anhanguera-logo.png",
      },
      {
          school: "Universidade Federal do Rio de Janeiro",
          course: "Licenciatura em Ciências Biológicas",
          period: "2018 - 2024 (Concluída)",
          logo: "/university/ufrj-logo.png"
      }

  ]
};

export const techIcons = [
  { name: "Java", src: "/icons/java.png" },
    { name: "Spring Framework", src: "/icons/spring.png" },
    { name: "Spring Boot", src: "/icons/spring_boot.png" },
    { name: "Docker", src: "/icons/docker.png" },
    { name: "AWS", src: "/icons/aws.png" },
  { name: "PostgreSQL", src: "/icons/postgres.png" },
  { name: "Angular", src: "/icons/angular.png" },
  { name: "Git", src: "/icons/git.png" },
]