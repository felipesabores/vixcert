import { FullWidthBanner } from "@/components/FullWidthBanner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Clock, FileText, Smartphone, CreditCard } from "lucide-react"
import Link from "next/link"

const bannerItems = [
  {
    id: "pf-hero",
    title: "Certificado Digital para Pessoa Física",
    subtitle: "Sua identidade digital segura e confiável",
    description:
      "Tenha acesso a todos os serviços digitais do governo e empresas privadas com máxima segurança e praticidade.",
    buttonText: "Comprar Agora",
    buttonLink: "/certificados?tipo=pf",
    imageUrl: "/placeholder.svg?height=400&width=800&text=Certificado+PF",
    mobileImageUrl: "/placeholder.svg?height=300&width=600&text=Certificado+PF+Mobile",
    backgroundColor: "#1e40af",
  },
]

const certificateTypes = [
  {
    type: "A1",
    name: "Certificado e-CPF A1",
    description: "Armazenado no computador, válido por 1 ano",
    price: "A partir de R$ 120,00",
    features: ["Instalação simples", "Uso imediato", "Ideal para uso pessoal", "Backup automático"],
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
  },
  {
    type: "A3",
    name: "Certificado e-CPF A3",
    description: "Armazenado em cartão ou token, maior segurança",
    price: "A partir de R$ 130,00",
    features: ["Máxima segurança", "Portabilidade", "Válido até 3 anos", "Uso em qualquer computador"],
    icon: <CreditCard className="w-8 h-8 text-green-600" />,
  },
]

const benefits = [
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Máxima Segurança",
    description: "Criptografia de ponta garante a proteção dos seus dados",
  },
  {
    icon: <Clock className="w-6 h-6 text-green-600" />,
    title: "Economia de Tempo",
    description: "Realize transações digitais sem sair de casa",
  },
  {
    icon: <FileText className="w-6 h-6 text-purple-600" />,
    title: "Validade Jurídica",
    description: "Assinatura digital com mesmo valor legal da física",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-orange-600" />,
    title: "Facilidade de Uso",
    description: "Interface intuitiva e suporte técnico especializado",
  },
]

const useCases = [
  "Declaração de Imposto de Renda",
  "Consulta ao CPF na Receita Federal",
  "Assinatura de contratos digitais",
  "Acesso ao INSS e benefícios",
  "Procurações eletrônicas",
  "Carteira de Trabalho Digital",
  "Título de Eleitor Digital",
  "Consultas no FGTS",
]

export default function SaibaMaisPFPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <FullWidthBanner items={bannerItems} />

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Certificate Types */}
        <section className="mb-12 lg:mb-16">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Certificado Digital PF
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Escolha o certificado digital que melhor se adapta às suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {certificateTypes.map((cert) => (
              <Card
                key={cert.type}
                className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">{cert.icon}</div>
                  <CardTitle className="text-xl sm:text-2xl text-gray-900">{cert.name}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{cert.description}</CardDescription>
                  <div className="text-lg sm:text-xl font-bold text-blue-600 mt-2">{cert.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {cert.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={`/certificados?tipo=pf&modelo=${cert.type.toLowerCase()}`}>Comprar {cert.type}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12 lg:mb-16">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vantagens do Certificado Digital PF
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Descubra como o certificado digital pode facilitar sua vida
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12 lg:mb-16">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">O que você pode fazer</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Principais usos do certificado digital para pessoa física
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{useCase}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-blue-600 text-white rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Pronto para ter seu Certificado Digital?</h2>
          <p className="text-base sm:text-lg mb-6 lg:mb-8 opacity-90 max-w-2xl mx-auto">
            Adquira agora seu certificado digital e tenha acesso a todos os serviços digitais com segurança e
            praticidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-blue-600">
              <Link href="/certificados?tipo=pf">Ver Certificados PF</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/agendar">Agendar Atendimento</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
