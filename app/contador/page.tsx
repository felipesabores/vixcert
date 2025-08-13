import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Percent, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Sou Contador - Vix Cert",
  description: "Programa de parceria exclusivo para contadores e escritórios de contabilidade.",
}

export default function ContadorPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">Programa de Parceria para Contadores</h1>
          <p className="text-xl text-gray-600 mb-8">
            A VixCert oferece condições especiais para contadores e escritórios de contabilidade. Torne-se um parceiro e
            ofereça certificados digitais com vantagens exclusivas para seus clientes.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-bold">Comissões Atrativas</h3>
                <p className="text-gray-600">Ganhe comissões por cada certificado emitido através da sua indicação.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-bold">Preços Diferenciados</h3>
                <p className="text-gray-600">
                  Ofereça descontos especiais para seus clientes em todos os tipos de certificados.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-bold">Suporte Prioritário</h3>
                <p className="text-gray-600">Conte com atendimento exclusivo para você e seus clientes.</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contador/cadastro">Quero ser parceiro</Link>
          </Button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=500"
            alt="Contador Parceiro"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-12">Vantagens do Programa</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Percent className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comissões Progressivas</h3>
              <p className="text-gray-600">
                Quanto mais certificados você indicar, maior será sua comissão. Sistema de níveis progressivos.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gestão de Clientes</h3>
              <p className="text-gray-600">
                Acesso a um painel exclusivo para acompanhar seus clientes e certificados emitidos.
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
              <h3 className="text-xl font-bold mb-2">Materiais Exclusivos</h3>
              <p className="text-gray-600">
                Acesso a materiais de marketing e treinamentos exclusivos sobre certificação digital.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Validação Simplificada</h3>
              <p className="text-gray-600">
                Processo de validação simplificado para seus clientes, com agendamento prioritário.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Depoimentos de Contadores Parceiros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white shadow border-0">
            <CardContent className="p-6">
              <p className="italic text-gray-600 mb-4">
                "A parceria com a VixCert trouxe um diferencial competitivo para o meu escritório. Meus clientes
                valorizam a facilidade e os preços especiais."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-bold">Ana Paula</p>
                  <p className="text-sm text-gray-500">Contadora - Vitória/ES</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow border-0">
            <CardContent className="p-6">
              <p className="italic text-gray-600 mb-4">
                "As comissões são excelentes e o suporte é impecável. Recomendo a todos os contadores que querem agregar
                valor aos seus serviços."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-bold">Carlos Eduardo</p>
                  <p className="text-sm text-gray-500">Contador - Vila Velha/ES</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow border-0">
            <CardContent className="p-6">
              <p className="italic text-gray-600 mb-4">
                "O programa de parceria da VixCert é completo. Além das comissões, os materiais de marketing ajudam
                muito na divulgação para os clientes."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-bold">Mariana Silva</p>
                  <p className="text-sm text-gray-500">Contadora - Serra/ES</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-6">Pronto para se tornar um parceiro?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Junte-se a centenas de contadores que já fazem parte do nosso programa de parceria e ofereça mais valor aos
          seus clientes.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/contador/cadastro">Cadastre-se como parceiro</Link>
        </Button>
      </div>
    </div>
  )
}
