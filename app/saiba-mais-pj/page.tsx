import FullWidthBanner from "@/components/FullWidthBanner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Building, Clock, CheckCircle, Users, Phone, FileText, Zap } from "lucide-react"

export default function SaibaMaisPJPage() {
  const features = [
    {
      icon: <Building className="w-6 h-6 flex-shrink-0" />,
      title: "Para Empresas",
      description: "Certificados específicos para pessoas jurídicas com máxima segurança",
    },
    {
      icon: <Zap className="w-6 h-6 flex-shrink-0" />,
      title: "Agilidade nos Processos",
      description: "Automatize processos fiscais e contábeis da sua empresa",
    },
    {
      icon: <Shield className="w-6 h-6 flex-shrink-0" />,
      title: "Conformidade Legal",
      description: "Atenda todas as exigências legais e fiscais com segurança",
    },
  ]

  const certificateTypes = [
    {
      type: "A1",
      title: "Certificado A1 Empresarial",
      description: "Armazenado no computador, válido por 1 ano",
      price: "A partir de R$ 180,00",
      features: [
        "Instalação em múltiplos computadores",
        "Ideal para pequenas empresas",
        "Processo simplificado",
        "Backup automático",
      ],
    },
    {
      type: "A3",
      title: "Certificado A3 Empresarial",
      description: "Armazenado em cartão ou token, máxima segurança",
      price: "A partir de R$ 190,00",
      features: [
        "Máxima segurança empresarial",
        "Portabilidade total",
        "Válido por 1, 2 ou 3 anos",
        "Inclui mídia criptográfica",
      ],
    },
  ]

  const useCases = [
    "Nota Fiscal Eletrônica (NFe)",
    "Escrituração Fiscal Digital (EFD)",
    "eSocial e folha de pagamento",
    "Declarações fiscais (DCTF, DIRF)",
    "Procurações eletrônicas",
    "Contratos digitais",
    "Licitações eletrônicas",
    "Conectividade Social (GFIP)",
    "Sistema Público de Escrituração Digital (SPED)",
  ]

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Economia de Tempo",
      description: "Automatize processos burocráticos e ganhe agilidade nas operações",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Segurança Jurídica",
      description: "Validade jurídica garantida para todos os documentos assinados",
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Redução de Custos",
      description: "Elimine custos com papel, impressão e deslocamentos",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Compliance",
      description: "Atenda todas as exigências legais e fiscais automaticamente",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <FullWidthBanner
        title="Certificado Digital para Empresas"
        subtitle="e-CNPJ"
        description="Transforme os processos da sua empresa com segurança digital. Emita notas fiscais, assine contratos e cumpra obrigações fiscais com agilidade."
        buttonText="Comprar e-CNPJ"
        buttonLink="/produtos?tipo=PJ"
        imageDesktop="/placeholder.svg?height=500&width=600"
        imageMobile="/placeholder.svg?height=400&width=500"
        backgroundColor="bg-gradient-to-r from-orange-600 to-orange-800"
        features={features}
      />

      {/* Benefits Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Vantagens para sua Empresa</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como o certificado digital pode revolucionar os processos da sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-blue-50 to-white"
              >
                <CardContent className="pt-0">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Types Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tipos de Certificado e-CNPJ</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha a solução ideal para o porte e necessidades da sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certificateTypes.map((cert, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">{cert.type}</span>
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{cert.title}</CardTitle>
                  <p className="text-gray-600">{cert.description}</p>
                  <p className="text-2xl font-bold text-orange-600 mt-2">{cert.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {cert.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700" size="lg">
                    Comprar {cert.type}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Principais Usos do e-CNPJ</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Seu certificado digital empresarial oferece acesso a todos os sistemas obrigatórios
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-md transition-shadow duration-300 border-l-4 border-l-orange-500"
              >
                <CardContent className="pt-0">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900">{useCase}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Como obter seu e-CNPJ</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Processo especializado para empresas com suporte completo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Escolha seu certificado",
                description: "Selecione A1 ou A3 conforme suas necessidades empresariais",
              },
              {
                step: "2",
                title: "Documentação empresarial",
                description: "Prepare CNPJ, contrato social e documentos do responsável",
              },
              {
                step: "3",
                title: "Validação presencial",
                description: "Compareça à nossa AR com o responsável legal da empresa",
              },
              {
                step: "4",
                title: "Certificado ativo",
                description: "Receba e instale seu certificado em até 24h úteis",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Transforme os Processos da sua Empresa</h2>
            <p className="text-xl text-orange-100 mb-8">
              Ganhe agilidade, segurança e conformidade legal com nossos certificados digitais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Building className="mr-2 w-5 h-5" />
                Comprar e-CNPJ
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Consultoria Empresarial
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
