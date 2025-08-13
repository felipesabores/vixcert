import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Building, Shield, Award, Briefcase, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Soluções - Vix Cert",
  description: "Soluções completas em certificação digital para empresas, profissionais e órgãos públicos.",
}

export default function SolucoesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Soluções em Certificação Digital</h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        A VixCert oferece soluções completas em certificação digital para atender às necessidades específicas de cada
        segmento, garantindo segurança, conformidade e praticidade.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="bg-white shadow-lg border-0 overflow-hidden">
          <div className="h-2 w-full bg-primary"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Building className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Empresas</h3>
            <p className="text-gray-600 mb-4">
              Soluções completas para empresas de todos os portes, desde startups até grandes corporações. Certificados
              e-CNPJ, NF-e e SSL para garantir a segurança das suas operações digitais.
            </p>
            <ul className="list-disc list-inside space-y-1 mb-6 text-gray-600">
              <li>e-CNPJ A1 e A3</li>
              <li>NF-e (Nota Fiscal Eletrônica)</li>
              <li>Certificados SSL</li>
              <li>Assinatura de documentos</li>
            </ul>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/solucoes/empresas">Saiba mais</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg border-0 overflow-hidden">
          <div className="h-2 w-full bg-green-500"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Profissionais</h3>
            <p className="text-gray-600 mb-4">
              Certificados digitais para profissionais liberais, advogados, médicos, contadores e outros profissionais
              que precisam de segurança e validade jurídica em suas atividades.
            </p>
            <ul className="list-disc list-inside space-y-1 mb-6 text-gray-600">
              <li>e-CPF A1 e A3</li>
              <li>OAB (Certificado para Advogados)</li>
              <li>CRM (Certificado para Médicos)</li>
              <li>Assinatura de laudos e documentos</li>
            </ul>
            <Button asChild className="w-full bg-green-500 hover:bg-green-600">
              <Link href="/solucoes/profissionais">Saiba mais</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg border-0 overflow-hidden">
          <div className="h-2 w-full bg-secondary"></div>
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Órgãos Públicos</h3>
            <p className="text-gray-600 mb-4">
              Soluções específicas para órgãos públicos, garantindo conformidade com as exigências legais e segurança
              nas transações eletrônicas governamentais.
            </p>
            <ul className="list-disc list-inside space-y-1 mb-6 text-gray-600">
              <li>e-CNPJ Governo</li>
              <li>e-CPF para servidores</li>
              <li>Certificados para sistemas</li>
              <li>Assinatura de documentos oficiais</li>
            </ul>
            <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
              <Link href="/solucoes/governo">Saiba mais</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Assinatura Digital</h2>
            <p className="text-gray-600 mb-4">
              Nossa solução de assinatura digital permite que você assine documentos eletronicamente com validade
              jurídica, eliminando a necessidade de impressão, assinatura manual e digitalização.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">
              <li>Assinatura com validade jurídica</li>
              <li>Compatível com diversos formatos de arquivo</li>
              <li>Verificação de autenticidade</li>
              <li>Armazenamento seguro</li>
              <li>Conformidade com a legislação brasileira</li>
            </ul>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/solucoes/assinatura-digital">Conhecer solução</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Assinatura Digital"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Benefícios das Nossas Soluções</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card className="bg-white shadow border-0">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Segurança Garantida</h3>
              <p className="text-gray-600">
                Certificados emitidos com os mais altos padrões de segurança, garantindo a proteção dos seus dados.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow border-0">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <FileText className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Validade Jurídica</h3>
              <p className="text-gray-600">
                Todos os nossos certificados possuem validade jurídica em todo o território nacional, conforme a
                legislação brasileira.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow border-0">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Award className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-lg font-bold mb-2">Conformidade ICP-Brasil</h3>
              <p className="text-gray-600">
                Certificados homologados pela Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil), garantindo sua
                aceitação legal.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow border-0">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Building className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Suporte Especializado</h3>
              <p className="text-gray-600">
                Equipe técnica dedicada para auxiliar em todas as etapas, desde a emissão até a utilização do
                certificado.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Precisa de uma solução personalizada?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Entre em contato com nossa equipe para desenvolvermos uma solução que atenda às necessidades específicas da
          sua empresa ou organização.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/contato">Fale com um especialista</Link>
        </Button>
      </div>
    </div>
  )
}
