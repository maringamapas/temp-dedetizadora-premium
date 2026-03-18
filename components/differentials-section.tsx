import { Shield, Clock, UserCheck, Wrench } from "lucide-react"

const differentials = [
  {
    icon: Shield,
    number: "01",
    title: "Produtos Registrados e Seguros",
    description:
      "Utilizamos apenas insumos aprovados pela ANVISA, com baixa toxidade e aplicação técnica adequada.",
  },
  {
    icon: Clock,
    number: "02",
    title: "Atendimento Emergencial 24h",
    description:
      "Problemas não esperam. Nossa equipe está pronta para atender sua emergência a qualquer hora, sem taxa extra noturna.",
  },
  {
    icon: UserCheck,
    number: "03",
    title: "Técnicos Certificados",
    description:
      "Profissionais treinados, uniformizados e com curso de controle de vetores. Atendimento educado e transparente.",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Equipamentos Modernos",
    description:
      "Máquinas de desentupimento de alta pressão, pulverizadores calibrados e tecnologia para diagnóstico preciso.",
  },
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Por Que Nos Escolher
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Diferenciais que fazem a diferença
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {differentials.map((item, index) => (
            <div
              key={item.number}
              className="flex gap-6 rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0">
                <span className="font-display text-5xl font-bold bg-gradient-to-br from-primary/30 to-emerald-400/30 bg-clip-text text-transparent">
                  {item.number}
                </span>
              </div>
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-emerald-400/10 transition-all duration-300 hover:scale-110 hover:rotate-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
