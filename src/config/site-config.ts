// Este é o ficheiro que vais alterar para cada novo cliente.
export const SITE_CONFIG = {
  // Informações Gerais do Cliente
  client: {
    name: "Dedetizadora Premium",
    shortName: "Premium",
    domain: "www.dedetizadorapremium.com.br",
    description: "Dedetização, desentupimento e controle de pragas em Maringá - PR. Atendimento 24h com garantia e produtos aprovados pela ANVISA.",
  },

  // Identidade Visual (Cores)
  // Dica: Podes usar estes valores diretamente no teu Tailwind ou CSS Variables
  theme: {
    colors: {
      primary: "#10b981",    // Cor principal (verde - transmite limpeza e confiança)
      secondary: "#1e293b",  // Cor secundária (cinza escuro)
      accent: "#0f172a",     // Cor de destaque (azul escuro/preto)
    },
    borderRadius: "0.5rem",
  },

  // Conteúdo da Home Page (Hero Section)
  hero: {
    badge: "Controle de Pragas em Maringá - PR",
    title: "Soluções Rápidas em Dedetização e Desentupimento",
    highlight: "Dedetização e Desentupimento",
    subtitle: "Atendimento 24h para residências, condomínios e empresas com garantia e segurança. Produtos aprovados pela ANVISA.",
    ctaText: "Solicitar Orçamento via WhatsApp",
    ctaLink: "https://wa.me/5544999324635?text=Olá! Gostaria de solicitar um orçamento para dedetização/desentupimento.",
    ctaSecondary: "44 99932-4635",
    heroImage: "/images/dedetizacao-mosquitos.jpg",
    stats: {
      experience: { value: "10+", label: "Anos de experiência" },
      projects: { value: "2000+", label: "Atendimentos realizados" },
    },
  },

  // Seção de Contactos
  contact: {
    email: "contato@dedetizadorapremium.com.br",
    phone: "(44) 99932-4635",
    phoneRaw: "44999324635",
    whatsapp: "5544999324635",
    address: "Maringá, PR • Atendemos toda a região",
    googleMapsLink: "https://goo.gl/maps/...",
  },

  // Redes Sociais
  social: {
    instagram: "https://instagram.com/dedetizadorapremium",
    facebook: "https://facebook.com/dedetizadorapremium",
    twitter: "https://twitter.com/dedetizadorapr",
    linkedin: "https://linkedin.com/company/dedetizadorapremium",
  },

  // Configurações de SEO (Essencial para o site aparecer no Google)
  seo: {
    ogImage: "/images/og-images.jpg",
    keywords: ["dedetização", "desentupimento", "controle de pragas", "Maringá", "descupinização", "limpeza de caixa d'água", "dedetizadora 24h"],
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
    description: "Proteção e higiene para sua família",
    services: [
      "Dedetização",
      "Desentupimento",
      "Descupinização",
      "Limpeza de Caixa D'água",
    ],
    quickLinks: [
      { href: "#inicio", label: "Início" },
      { href: "#sobre", label: "Sobre Nós" },
      { href: "#diferenciais", label: "Diferenciais" },
      { href: "#contato", label: "Contato" },
    ],
    legal: {
      privacy: "#",
      terms: "#",
    },
    copyright: "© 2025 Dedetizadora Premium. Todos os direitos reservados.",
    madeBy: {
      text: "WebStudio",
      link: "https://webstudiomga.vercel.app/",
    },
  },

  // CTA Section
  cta: {
    title: "Problemas com pragas ou entupimento?",
    description: "Entre em contato agora e receba um orçamento gratuito. Nossa equipe está pronta para atender você 24 horas por dia, 7 dias por semana.",
    primaryButton: "Chamar no WhatsApp",
    secondaryButton: "(44) 99932-4635",
    footnote: "Atendimento emergencial 24h. Orçamento sem compromisso.",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
