import { Metadata } from 'next'
import FullWidthBanner from '@/components/FullWidthBanner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Shield, Clock, Users, FileText, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certificado Digital para Pessoa Física | VixCert',
  description: 'Obtenha seu certificado digital A1 ou A3 para pessoa física. Processo 100% online, seguro e rápido. Válido em todo território nacional.',
}

const certificateTypes = [
  {
    type: 'A1',
    name: 'Certificado A1 - PF',
    validity: '1 ano',
    price: 'R$ 180,00',
    storage: 'Computador',
    features: [
      'Instalação em até 3 computadores',
      'Backup automático',
      'Ideal para uso frequente',
      'Renovação automática disponível'
    ],
    recommended: false
  },
  {
    type: 'A3',
    name: 'Certificado A3 - PF',
    validity: '1 a 3 anos',
    price: 'A partir de R$ 280,00',
    storage: 'Token/Cartão',
    features: [
      'Máxima segurança',
      'Portabilidade total',
      'Uso em qualquer computador',
      'Proteção por PIN'
    ],
    recommended: true
  }
]

const benefits = [
  {
    icon: Shield,
    title: 'Máxima Segurança',
    description: 'Criptografia de alta segurança que garante a autenticidade e integridade dos seus documentos digitais.'
  },
  {
    icon: Clock,
    title: 'Economia de Tempo',
    description: 'Assine documentos e realize transações online sem sair de casa, 24 horas por dia.'
  },
  {
    icon: FileText,
    title: 'Validade Jurídica',
    description: 'Seus documentos assinados digitalmente têm a mesma validade jurídica que documentos físicos.'
  },
  {
    icon: Smartphone,
    title: 'Facilidade de Uso',
    description: 'Interface intuitiva e processo simplificado para usar seu certificado digital.'
  }
]

const useCases = [
  'Declaração de Imposto de Renda',
  'Assinatura de contratos',
  'Procurações eletrônicas',
  'Documentos trabalhistas',
  'Transações bancárias',
  'E-commerce e marketplaces',
  'Serviços governamentais online',
  'Cartórios digitais'
]

export default function SaibaMaisPFPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <FullWidthBanner
        title="Certificado Digital para Pessoa Física"
        subtitle="Segurança e Praticidade"
        description="Obtenha seu certificado digital A1 ou A3 com processo 100% online. Válido em todo território nacional com suporte completo."
        image="/placeholder.svg?height=500&width=1200"
        mobileImage="/placeholder.svg?height=400&width=800"
        ctaText="Comprar Agora"
        ctaLink="/comprar"
        variant="primary"
      />

      {/* Certificate Types Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Escolha o Certificado Ideal
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos certificados A1 e A3 para atender suas necessidades específicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {certificateTypes.map((cert) => (
              <Card key={cert.type} className={`relative ${cert.recommended ? 'ring-2 ring-orange-500' : ''}`}>
                {cert.recommended && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1">
                    Mais Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
                    {cert.name}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Validade: {cert.validity} | Armazenamento: {cert.storage}
                  </CardDescription>
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600 mt-2">
                    {cert.price}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2 sm:space-y-3">
                    {cert.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full mt-4 sm:mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 text-sm sm:text-base"
                    asChild
                  >
                    <a href="/comprar">Comprar {cert.type}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vantagens do Certificado Digital
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra como o certificado digital pode transformar sua rotina
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-blue-200 transition-colors">
                  <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onde Usar Seu Certificado
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Veja as principais aplicações do certificado digital no seu dia a dia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">{useCase}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Obtenha seu certificado digital agora e tenha mais segurança e praticidade no seu dia a dia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold w-full sm:w-auto"
              asChild
            >
              <a href="/comprar">Comprar Certificado</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold w-full sm:w-auto"
              asChild
            >
              <a href="/contato">Falar com Especialista</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
