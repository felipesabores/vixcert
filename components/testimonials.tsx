import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "João Silva",
    company: "Tech Solutions Ltda.",
    content:
      "Os certificados digitais da VixCert revolucionaram nossa forma de fazer negócios online. O processo de emissão foi rápido e o suporte técnico excelente.",
    avatar: "/avatars/joao-silva.jpg",
    rating: 5,
  },
  {
    name: "Maria Santos",
    company: "Contabilidade Express",
    content:
      "A facilidade de obtenção e a confiabilidade dos certificados da VixCert são incomparáveis. Recomendo para todos os meus clientes.",
    avatar: "/avatars/maria-santos.jpg",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    company: "Logística Rápida S.A.",
    content:
      "O suporte técnico da VixCert é excepcional. Sempre prontos para ajudar com qualquer dúvida, mesmo após a emissão do certificado.",
    avatar: "/avatars/carlos-oliveira.jpg",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="h-full bg-white">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
