import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Cliente residencial",
    avatar: "/images/avatar-01.jpg",
    content:
      "A equipe chegou em 30 minutos, resolveu o entupimento do esgoto sem sujeira e ainda deu dicas de prevenção. Preço justo!",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Gerente de restaurante",
    avatar: "/images/avatar-02.jpg",
    content:
      "Contratamos o plano mensal para nosso restaurante. Zero pragas, laudos em dia e atendimento sempre pontual. Recomendo!",
    rating: 5,
  },
  {
    name: "Roberto Alves",
    role: "Administradora de condomínio",
    avatar: "/images/avatar-03.jpg",
    content:
      "Tivemos uma infestação de cupins no escritório. Eles fizeram o tratamento discreto, sem atrapalhar nosso trabalho, e a garantia funcionou.",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Síndica",
    avatar: "/images/avatar-04.jpg",
    content:
      "Serviço impecável na limpeza da caixa d'água do condomínio. Técnicos educados, documento de conformidade e preço acessível.",
    rating: 5,
  },
  {
    name: "Marcos Silva",
    role: "Cliente emergencial",
    avatar: "/images/avatar-05.jpg",
    content:
      "Chamei às 2h da manhã para um desentupimento urgente. Foram rápidos, profissionais e não cobraram taxa noturna. Salvaram meu dia!",
    rating: 5,
  },
  {
    name: "Paulo Santos",
    role: "Diretor industrial",
    avatar: "/images/avatar-06.jpg",
    content:
      "A dedetização preventiva no nosso galpão industrial foi feita com planejamento e segurança. Zero parada na produção.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-accent py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Depoimentos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-accent-foreground md:text-4xl">
            <span className="text-balance">
              O que nossos clientes dizem
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-accent-foreground/60">
            A confiança dos nossos parceiros é o nosso maior reconhecimento.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="rounded-2xl bg-[#2a2420] p-8 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={`star-${testimonial.name}-${i}`}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              
              <blockquote className="text-white leading-relaxed">
                {`"${testimonial.content}"`}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
