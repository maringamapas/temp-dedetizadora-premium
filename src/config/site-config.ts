// Este é o ficheiro que vais alterar para cada novo cliente.
export const SITE_CONFIG = {
  // Informações Gerais do Cliente
  client: {
    name: "Dedetizadora & Desentupidora",
    shortName: "Dedetiza",
    domain: "www.dedetizadoramaringa.com.br",
    description: "Dedetização, desentupimento e limpeza de caixa d'água em Maringá - PR. Atendimento 24h, equipe especializada e preços justos.",
  },

  // Identidade Visual (Cores)
  // Dica: Podes usar estes valores diretamente no teu Tailwind ou CSS Variables
  theme: {
    colors: {
      primary: "#10b981",    // Cor principal (verde - transmite limpeza)
      secondary: "#1e293b",  // Cor secundária (cinza escuro)
      accent: "#0f172a",     // Cor de destaque (azul escuro/preto)
    },
    borderRadius: "0.5rem",
  },

  // Conteúdo da Home Page (Hero Section)
  hero: {
    badge: "Atendimento 24h em Maringá - PR",
    title: "Soluções Rápidas em Dedetização e Desentupimento",
    highlight: "Dedetização e Desentupimento",
    subtitle: "Atendimento 24h com equipe especializada, equipamentos modernos e preços justos para residências, comércios e indústrias.",
    ctaText: "Chamar no WhatsApp",
    ctaLink: "https://wa.me/5544999324635?text=Olá! Gostaria de solicitar um orçamento.",
    ctaSecondary: "44 99932-4635",
    heroImage: "https://placehold.co/1920x1080/1e40af/white?text=Dedetizacao+Segura",
    stats: {
      experience: { value: "24h", label: "Atendimento 24 horas" },
      projects: { value: "500+", label: "Atendimentos realizados" },
    },
  },

  // Seção de Contactos
  contact: {
    email: "contato@dedetizadoramaringa.com.br",
    phone: "(44) 99932-4635",
    phoneRaw: "44999324635",
    whatsapp: "5544999324635",
    address: "Maringá, PR • Atendimento em toda a região",
    googleMapsLink: "https://goo.gl/maps/...",
  },

  // Redes Sociais
  social: {
    instagram: "https://instagram.com/dedetizadoramaringa",
    facebook: "https://facebook.com/dedetizadoramaringa",
    twitter: "https://twitter.com/dedetizadoramaringa",
    linkedin: "https://linkedin.com/company/dedetizadoramaringa",
  },

  // Configurações de SEO (Essencial para o site aparecer no Google)
  seo: {
    ogImage: "/images/og-images.jpg",
    keywords: ["dedetização", "desentupimento", "controle de pragas", "Maringá", "limpeza caixa d'água", "dedetizadora 24h"],
  },

  // Navegação
  nav: {
    links: [
      { href: "#inicio", label: "Início" },
      { href: "#sobre", label: "Sobre" },
      { href: "#servicos", label: "Serviços" },
      { href: "#diferenciais", label: "Diferenciais" },
      { href: "#depoimentos", label: "Depoimentos" },
      { href: "#faq", label: "FAQ" },
      { href: "#contato", label: "Contato" },
    ],
    ctaText: "Solicitar Orçamento",
  },

  // Footer
  footer: {
    description: "Soluções rápidas, seguras e com garantia",
    services: [
      "Dedetização",
      "Desentupimento",
      "Limpeza de Caixa D'água",
      "Planos Preventivos",
    ],
    quickLinks: [
      { href: "#inicio", label: "Início" },
      { href: "#sobre", label: "Sobre" },
      { href: "#servicos", label: "Serviços" },
      { href: "#depoimentos", label: "Depoimentos" },
      { href: "#contato", label: "Contato" },
    ],
    legal: {
      privacy: "#",
      terms: "#",
    },
    copyright: "© 2025 Dedetizadora & Desentupidora. Todos os direitos reservados.",
    madeBy: {
      text: "WebStudio",
      link: "https://webstudiomga.vercel.app/",
    },
  },

  // CTA Section
  cta: {
    title: "Problema com pragas ou entupimento? Resolvemos agora.",
    description: "Entre em contato e receba um orçamento rápido e sem compromisso. Atendimento humanizado e solução garantida.",
    primaryButton: "Chamar no WhatsApp (44) 99932-4635",
    secondaryButton: "(44) 99932-4635",
    footnote: "Resposta em menos de 15min • Orçamento grátis",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
