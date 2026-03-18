import Image from "next/image"
import { Shield, Award, Clock } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Segurança Garantida",
    description:
      "Produtos registrados na ANVISA, técnicos capacitados e EPIs completos. Sua família e pets protegidos em cada procedimento.",
  },
  {
    icon: Award,
    title: "Qualidade Certificada",
    description:
      "Processos seguindo normas técnicas, laudos de serviço e garantia por escrito em todos os atendimentos.",
  },
  {
    icon: Clock,
    title: "Agilidade 24h",
    description:
      "Atendimento emergencial dia e noite, incluindo finais de semana e feriados. Chegamos rápido quando você mais precisa.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative group">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
              <Image
                src="https://placehold.co/800x600/10b981/white?text=Equipe+Uniformizada"
                alt="Equipe da Dedetizadora em atendimento residencial"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gradient-to-br from-primary to-emerald-400 p-6 text-primary-foreground lg:block shadow-xl transition-transform duration-300 hover:scale-110 hover:rotate-2">
              <span className="font-display text-4xl font-bold">15+</span>
              <p className="text-sm font-medium text-primary-foreground/90">
                Anos de experiência
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Quem Somos
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                Compromisso com saúde e bem-estar desde o primeiro atendimento
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A <strong className="text-foreground">Dedetizadora & Desentupidora</strong>{" "}
              nasceu da missão de proteger famílias e empresas contra pragas urbanas e problemas hidráulicos. Localizada em{" "}
              <strong className="text-foreground">Maringá - PR</strong>,
              atendemos com agilidade e segurança em dedetização, desentupimento e controle de vetores.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nossa equipe certificada, combinada com produtos registrados na ANVISA e equipamentos de última geração, garante resultados eficazes, sem riscos à saúde e com total sigilo. Somos parceiros da sua tranquilidade.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {values.map((value, index) => (
                <div key={value.title} className="flex flex-col gap-3 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-emerald-400/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-emerald-400">
                    <value.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
