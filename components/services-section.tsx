import { Bug, Droplets, Shield, Home, Rat, Wrench } from "lucide-react"

const services = [
  {
    icon: Bug,
    title: "Dedetização",
    description:
      "Controle de insetos rasteiros e voadores como baratas, formigas, mosquitos, aranhas e escorpiões. Produtos seguros e eficazes para sua família.",
  },
  {
    icon: Shield,
    title: "Descupinização",
    description:
      "Tratamento preventivo e corretivo contra cupins. Protegemos móveis, estruturas de madeira e todo o seu patrimônio com técnicas modernas.",
  },
  {
    icon: Droplets,
    title: "Desentupimento",
    description:
      "Desentupimento de pias, ralos, vasos sanitários, caixas de gordura e redes de esgoto. Atendimento rápido e equipamentos de última geração.",
  },
  {
    icon: Home,
    title: "Limpeza de Caixa D'água",
    description:
      "Higienização completa de caixas d'água e cisternas. Garantimos água limpa e livre de contaminações para sua família ou empresa.",
  },
  {
    icon: Rat,
    title: "Desratização",
    description:
      "Controle de roedores com métodos seguros e eficientes. Eliminamos ratos e ratazanas protegendo sua saúde e seu patrimônio.",
  },
  {
    icon: Wrench,
    title: "Limpeza de Fossa",
    description:
      "Serviço de esgotamento e limpeza de fossas sépticas com caminhão limpa-fossa. Descarte adequado e responsabilidade ambiental.",
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
              Soluções completas em controle de pragas
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Oferecemos uma ampla gama de serviços para proteger sua casa ou empresa
            contra pragas e problemas hidráulicos com qualidade e segurança.
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
