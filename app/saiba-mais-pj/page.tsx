import { FullWidthBanner } from "@/components/FullWidthBanner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Clock, FileText, Building, CreditCard } from "lucide-react"
import Link from "next/link"

const bannerItems = [
  {
    id: "pj-hero",
    title: "Certificado Digital para Pessoa Jurídica",
    subtitle: "Segurança e agilidade para sua empresa",
    description:
      "Simplifique os processos da sua empresa com certificado digital. Emita notas fiscais, assine contratos e acesse serviços governamentais com total segurança.",
    buttonText: "Comprar Agora",
    buttonLink: "/certificados?tipo=pj",
    imageUrl: "/placeholder.svg?height=400&width=800&text=Certificado+PJ",
    mobileImageUrl: "/placeholder.svg?height=300&width=600&text=Certificado+PJ+Mobile",
    backgroundColor: "#059669",
  },
]

const certificateTypes = [
  {
    type: "A1",
    name: "Certificado e-CNPJ A1",
    description: "Armazenado no computador, válido por 1 ano",
    price: "A partir de R$ 180,00",
    features: ["Instalação simples", "Uso imediato", "Ideal para pequenas empresas", "Backup automático"],
    icon: <Building className="w-8 h-8 text-blue-600" />,
  },
  {
    type: "A3",
    name: "Certificado e-CNPJ A3",
    description: "Armazenado em cartão ou token, maior segurança",
    price: "A partir de R$ 190,00",
    features: ["Máxima segurança", "Portabilidade", "Válido até 3 anos", "Uso em qualquer computador"],
    icon: <CreditCard className="w-8 h-8 text-green-600" />,
  },
]

const benefits = [
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Segurança Empresarial",
    description: "Proteja as transações e documentos da sua empresa",
  },
  {
    icon: <Clock className="w-6 h-6 text-green-600" />,
    title: "Agilidade nos Processos",
    description: "Reduza tempo em processos burocráticos",
  },
  {
    icon: <FileText className="w-6 h-6 text-purple-600" />,
    title: "Validade Jurídica",
    description: "Documentos com validade legal garantida",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-orange-600" />,
    title: "Conformidade Legal",
    description: "Atenda às exigências legais e fiscais",
  },
]

const useCases = [
  "Emissão de Notas Fiscais Eletrônicas",
  "Acesso ao e-CAC da Receita Federal",
  "Participação em Pregões Eletrônicos",
  "Assinatura de Contratos Digitais",
  "Declarações e Obrigações Fiscais",
  "Consultas no CNPJ",
  "Procurações Eletrônicas",
  "Conectividade Social (eSocial)",
  "SPED Fiscal e Contábil",
  "Certificação de Balanços",
  "Registro de Marcas e Patentes",
  "Licitações Públicas",
]

export default function SaibaMaisPJPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <FullWidthBanner items={bannerItems} />

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Certificate Types */}
        <section className="mb-12 lg:mb-16">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Certificado Digital PJ
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Escolha o certificado digital ideal para sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {certificateTypes.map((cert) => (
              <Card
                key={cert.type}
                className="hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">{cert.icon}</div>
                  <CardTitle className="text-xl sm:text-2xl text-gray-900">{cert.name}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{cert.description}</CardDescription>
                  <div className="text-lg sm:text-xl font-bold text-green-600 mt-2">{cert.price}</div>
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
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href={`/certificados?tipo=pj&modelo=${cert.type.toLowerCase()}`}>Comprar {cert.type}</Link>
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
              Vantagens do Certificado Digital PJ
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Descubra como o certificado digital pode transformar sua empresa
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que sua empresa pode fazer
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Principais usos do certificado digital para pessoa jurídica
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <section className="text-center bg-green-600 text-white rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Transforme sua empresa com Certificado Digital
          </h2>
          <p className="text-base sm:text-lg mb-6 lg:mb-8 opacity-90 max-w-2xl mx-auto">
            Adquira agora o certificado digital para sua empresa e tenha acesso a todos os serviços digitais com
            segurança e agilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-green-600">
              <Link href="/certificados?tipo=pj">Ver Certificados PJ</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/agendar">Agendar Atendimento</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
