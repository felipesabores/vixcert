import FullWidthBanner from "@/components/FullWidthBanner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, FileText, Clock, CheckCircle, Users, Phone } from "lucide-react"

export default function SaibaMaisPFPage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 flex-shrink-0" />,
      title: "Segurança Garantida",
      description: "Certificados com criptografia de 2048 bits, seguindo os padrões da ICP-Brasil",
    },
    {
      icon: <FileText className="w-6 h-6 flex-shrink-0" />,
      title: "Documentação Simples",
      description: "Apenas RG, CPF e comprovante de residência para emissão do seu certificado",
    },
    {
      icon: <Clock className="w-6 h-6 flex-shrink-0" />,
      title: "Emissão Rápida",
      description: "Processo de validação e emissão em até 24 horas úteis",
    },
  ]

  const certificateTypes = [
    {
      type: "A1",
      title: "Certificado A1",
      description: "Armazenado no computador, válido por 1 ano",
      price: "A partir de R$ 120,00",
      features: [
        "Instalação em até 3 computadores",
        "Backup automático",
        "Ideal para uso pessoal",
        "Processo 100% online",
      ],
    },
    {
      type: "A3",
      title: "Certificado A3",
      description: "Armazenado em cartão ou token, maior segurança",
      price: "A partir de R$ 130,00",
      features: ["Máxima segurança", "Portabilidade total", "Válido por 1, 2 ou 3 anos", "Inclui mídia criptográfica"],
    },
  ]

  const useCases = [
    "Declaração de Imposto de Renda",
    "Consulta ao CPF na Receita Federal",
    "Acesso ao Gov.br e serviços públicos",
    "Assinatura de documentos digitais",
    "Procurações eletrônicas",
    "Consulta ao FGTS e INSS",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <FullWidthBanner
        title="Certificado Digital para Pessoa Física"
        subtitle="e-CPF"
        description="Sua identidade digital com máxima segurança. Acesse serviços públicos, assine documentos e realize transações com total confiança."
        buttonText="Comprar e-CPF"
        buttonLink="/produtos?tipo=PF"
        imageDesktop="/placeholder.svg?height=500&width=600"
        imageMobile="/placeholder.svg?height=400&width=500"
        backgroundColor="bg-gradient-to-r from-blue-600 to-blue-800"
        features={features}
      />

      {/* Certificate Types Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tipos de Certificado e-CPF</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o tipo de certificado que melhor se adapta às suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certificateTypes.map((cert, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{cert.type}</span>
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{cert.title}</CardTitle>
                  <p className="text-gray-600">{cert.description}</p>
                  <p className="text-2xl font-bold text-blue-600 mt-2">{cert.price}</p>
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
                  <Button className="w-full" size="lg">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Para que usar seu e-CPF?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Seu certificado digital pessoa física oferece acesso a diversos serviços
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow duration-300">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Como obter seu e-CPF</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Processo simples e rápido em poucos passos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Escolha seu certificado",
                description: "Selecione o tipo A1 ou A3 e período de validade",
              },
              {
                step: "2",
                title: "Faça o pagamento",
                description: "Pagamento seguro via cartão, PIX ou boleto",
              },
              {
                step: "3",
                title: "Agende o atendimento",
                description: "Compareça à nossa AR com os documentos",
              },
              {
                step: "4",
                title: "Receba seu certificado",
                description: "Certificado emitido em até 24h úteis",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
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
      <section className="py-16 sm:py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Pronto para obter seu Certificado Digital?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Tenha sua identidade digital com máxima segurança e praticidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Users className="mr-2 w-5 h-5" />
                Comprar e-CPF
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
