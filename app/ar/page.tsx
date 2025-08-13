import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Building, Shield, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Sou AR - Vix Cert",
  description: "Programa para Autoridades de Registro parceiras da VixCert.",
}

export default function ARPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">Programa para Autoridades de Registro</h1>
          <p className="text-xl text-gray-600 mb-8">
            A VixCert oferece suporte completo para Autoridades de Registro (AR) parceiras, com soluções tecnológicas
            avançadas e conformidade total com as normas ICP-Brasil.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-bold">Plataforma Completa</h3>
                <p className="text-gray-600">
                  Sistema integrado para gestão de emissões, validações e renovações de certificados.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-bold">Suporte Técnico Especializado</h3>
                <p className="text-gray-600">
                  Equipe dedicada para auxiliar em todas as etapas do processo de certificação.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-bold">Conformidade ICP-Brasil</h3>
                <p className="text-gray-600">
                  Processos e sistemas em total conformidade com as normas e regulamentações da ICP-Brasil.
                </p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/ar/contato">Fale com nosso time</Link>
          </Button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=500"
            alt="Autoridade de Registro"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-12">Vantagens para ARs Parceiras</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Infraestrutura Completa</h3>
              <p className="text-gray-600">
                Fornecemos toda a infraestrutura tecnológica necessária para a operação da sua AR, incluindo sistemas de
                gestão, validação e emissão.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Plano de Continuidade</h3>
              <p className="text-gray-600">
                Implementamos um Plano de Continuidade de Negócios robusto, garantindo a disponibilidade contínua dos
                serviços mesmo em situações adversas.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Treinamento Certificado</h3>
              <p className="text-gray-600">
                Oferecemos treinamento completo para Agentes de Registro, garantindo a qualificação necessária para
                operação conforme as normas ICP-Brasil.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Nosso Compromisso com as ARs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Segurança e Conformidade</h3>
            <p className="text-gray-600 mb-4">
              A VixCert implementa rigorosos protocolos de segurança física e lógica, com procedimentos específicos para
              lidar com incidentes de segurança, comprometimento de chaves privadas e fraudes, protegendo integralmente
              os dados dos clientes.
            </p>
            <p className="text-gray-600">
              Nossos processos atendem integralmente aos requisitos da Política de Segurança da ICP-Brasil e às
              Características Mínimas de Segurança para as AR da ICP-Brasil.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Suporte Contínuo</h3>
            <p className="text-gray-600 mb-4">
              Oferecemos suporte técnico especializado e atendimento personalizado, assegurando que nossas ARs parceiras
              tenham a melhor experiência possível em todas as etapas do processo de certificação.
            </p>
            <p className="text-gray-600">
              Nossa equipe está disponível para auxiliar em questões técnicas, operacionais e regulatórias, garantindo a
              conformidade e a qualidade dos serviços prestados.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Interessado em se tornar uma AR parceira?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Entre em contato com nossa equipe para conhecer mais sobre nosso programa para Autoridades de Registro e como
          podemos trabalhar juntos.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/ar/contato">Solicitar informações</Link>
        </Button>
      </div>
    </div>
  )
}
