import { Bug, Droplets, Building2, Droplet, TreeDeciduous, CalendarCheck } from "lucide-react"

const services = [
  {
    icon: Bug,
    title: "Dedetização Residencial",
    description:
      "Eliminação de baratas, formigas, ratos, cupins e outras pragas em casas e apartamentos. Aplicação segura e discreta.",
  },
  {
    icon: Droplets,
    title: "Desentupimento Hidráulico",
    description:
      "Desentupimento de pias, vasos sanitários, ralos, calhas e esgotos com máquinas rotativas e hidro-jateamento. Sem quebra-quebra.",
  },
  {
    icon: Building2,
    title: "Controle de Vetores",
    description:
      "Serviços especializados para condomínios, restaurantes, hospitais e indústrias. Laudos técnicos e prevenção recorrente.",
  },
  {
    icon: Droplet,
    title: "Limpeza de Caixas D'água",
    description:
      "Higienização e desinfecção de reservatórios conforme Portaria GM/MS nº 888. Água limpa e segura para sua família.",
  },
  {
    icon: TreeDeciduous,
    title: "Descupinização",
    description:
      "Tratamento contra cupins de madeira seca e subterrâneos. Métodos químicos e físicos com garantia estendida.",
  },
  {
    icon: CalendarCheck,
    title: "Manutenção Preventiva",
    description:
      "Planos mensais para empresas e condomínios. Evite infestações e entupimentos com monitoramento constante.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nossos Serviços
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Soluções completas em dedetização e desentupimento
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Oferecemos uma ampla gama de serviços para proteger sua residência, comércio ou indústria com qualidade e segurança.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-emerald-400/10 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-emerald-400 group-hover:scale-110 group-hover:rotate-3">
                <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
