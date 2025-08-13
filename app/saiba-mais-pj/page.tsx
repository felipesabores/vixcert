import { Metadata } from 'next'
import FullWidthBanner from '@/components/FullWidthBanner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Shield, Clock, Building, FileText, Zap, Users, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certificado Digital para Pessoa Jurídica | VixCert',
  description: 'Certificado digital A1 e A3 para empresas. Agilize processos fiscais, tributários e contratuais com máxima segurança.',
}

const certificateTypes = [
  {
    type: 'A1',
    name: 'Certificado A1 - PJ',
    validity: '1 ano',
    price: 'R$ 280,00',
    storage: 'Computador',
    features: [
      'Instalação em até 3 computadores',
      'Ideal para uso frequente',
      'Backup automático',
      'Suporte técnico incluído',
      'Integração com sistemas ERP'
    ],
    recommended: false
  },
  {
    type: 'A3',
    name: 'Certificado A3 - PJ',
    validity: '1 a 3 anos',
    price: 'A partir de R$ 380,00',
    storage: 'Token/Cartão',
    features: [
      'Máxima segurança empresarial',
      'Portabilidade total',
      'Uso em qualquer computador',
      'Proteção por PIN',
      'Ideal para múltiplos usuários'
    ],
    recommended: true
  }
]

const benefits = [
  {
    icon: Shield,
    title: 'Segurança Empresarial',
    description: 'Proteja suas transações e documentos corporativos com criptografia de nível bancário.'
  },
  {
    icon: Zap,
    title: 'Agilidade nos Processos',
    description: 'Acelere processos fiscais, tributários e contratuais com assinatura digital instantânea.'
  },
  {
    icon: FileText,
    title: 'Conformidade Legal',
    description: 'Atenda todas as exigências legais e regulamentares com documentos digitalmente válidos.'
  },
  {
    icon: TrendingUp,
    title: 'Redução de Custos',
    description: 'Elimine custos com papel, impressão, correio e armazenamento físico de documentos.'
  },
  {
    icon: Users,
    title: 'Gestão Centralizada',
    description: 'Gerencie certificados de toda a empresa de forma centralizada e eficiente.'
  },
  {
    icon: Clock,
    title: 'Disponibilidade 24/7',
    description: 'Realize operações importantes a qualquer hora, sem depender de horário comercial.'
  }
]

const useCases = [
  'Nota Fiscal Eletrônica (NFe)',
  'Escrituração Fiscal Digital (EFD)',
  'eSocial e folha de pagamento',
  'Declarações fiscais (DCTF, DIRF)',
  'Contratos e procurações',
  'Licitações eletrônicas',
  'Conectividade Social (FGTS)',
  'Receita Federal e SPED',
  'Anvisa e órgãos reguladores',
  'Bancos e instituições financeiras',
  'Cartórios digitais',
  'Assinatura de balanços'
]

const companyTypes = [
  {
    type: 'Micro e Pequenas Empresas',
    description: 'Soluções adaptadas para MEI, ME e EPP com foco na simplicidade e custo-benefício.',
    features: ['Processo simplificado', 'Suporte dedicado', 'Preços especiais']
  },
  {
    type: 'Médias Empresas',
    description: 'Certificados para empresas em crescimento com necessidades mais complexas.',
    features: ['Múltiplos certificados', 'Integração com ERP', 'Gestão centralizada']
  },
  {
    type: 'Grandes Corporações',
    description: 'Soluções corporativas para grandes volumes e alta complexidade operacional.',
    features: ['Volume corporativo', 'SLA diferenciado', 'Consultoria especializada']
  }
]

export default function SaibaMaisPJPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <FullWidthBanner
        title="Certificado Digital para Empresas"
        subtitle="Transformação Digital Corporativa"
        description="Acelere os processos da sua empresa com certificados digitais A1 e A3. Segurança, agilidade e conformidade legal em uma só solução."
        image="/placeholder.svg?height=500&width=1200"
        mobileImage="/placeholder.svg?height=400&width=800"
        ctaText="Solicitar Proposta"
        ctaLink="/comprar"
        variant="primary"
      />

      {/* Certificate Types Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificados para Sua Empresa
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha entre A1 e A3 baseado nas necessidades operacionais da sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {certificateTypes.map((cert) => (
              <Card key={cert.type} className={`relative ${cert.recommended ? 'ring-2 ring-orange-500' : ''}`}>
                {cert.recommended && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1">
                    Recomendado
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
                    <a href="/comprar">Solicitar {cert.type}</a>
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
              Vantagens para Sua Empresa
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Transforme a operação da sua empresa com certificação digital
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

      {/* Company Types Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluções por Porte de Empresa
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções personalizadas para cada tipo e tamanho de empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {companyTypes.map((company, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {company.type}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    {company.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {company.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aplicações Empresariais
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Veja onde sua empresa pode usar o certificado digital
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-blue-600 flex-shrink-0" />
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
            Transforme Sua Empresa Hoje
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Solicite uma proposta personalizada e descubra como o certificado digital pode revolucionar seus processos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold w-full sm:w-auto"
              asChild
            >
              <a href="/comprar">Solicitar Proposta</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold w-full sm:w-auto"
              asChild
            >
              <a href="/contato">Consultoria Gratuita</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
