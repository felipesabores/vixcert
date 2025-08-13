import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, HeadphonesIcon, FileCheck, Award, Zap } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "Certificados Digitais ICP-Brasil",
    description:
      "Emitimos certificados digitais com validade jurídica em todo o território nacional, seguindo os mais rigorosos padrões de segurança.",
    icon: <Shield className="w-10 h-10 text-primary" />,
  },
  {
    title: "Atendimento Rápido",
    description:
      "Processo simplificado e ágil para emissão de certificados, com validação por videoconferência e suporte técnico especializado.",
    icon: <Clock className="w-10 h-10 text-primary" />,
  },
  {
    title: "Suporte Especializado",
    description:
      "Equipe técnica disponível para auxiliar em todas as etapas do processo, com Agentes de Registro certificados e treinados.",
    icon: <HeadphonesIcon className="w-10 h-10 text-primary" />,
  },
  {
    title: "Conformidade Total",
    description:
      "Processos certificados que atendem integralmente aos requisitos regulatórios da ICP-BRASIL, garantindo a validade jurídica dos seus documentos.",
    icon: <FileCheck className="w-10 h-10 text-primary" />,
  },
  {
    title: "Certificados para Todos",
    description:
      "Soluções para pessoas físicas, jurídicas, profissionais liberais e servidores públicos, atendendo às necessidades específicas de cada perfil.",
    icon: <Award className="w-10 h-10 text-primary" />,
  },
  {
    title: "Tecnologia de Ponta",
    description:
      "Utilizamos as mais avançadas tecnologias de criptografia e segurança digital para garantir a integridade e autenticidade dos seus certificados.",
    icon: <Zap className="w-10 h-10 text-primary" />,
  },
]

export function Features() {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6">Parceiros e Certificações</h3>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <Image src="/placeholder.svg?height=60&width=120" alt="Parceiro 1" width={120} height={60} />
          <Image src="/placeholder.svg?height=60&width=120" alt="Parceiro 2" width={120} height={60} />
          <Image src="/placeholder.svg?height=60&width=120" alt="Parceiro 3" width={120} height={60} />
          <Image src="/placeholder.svg?height=60&width=120" alt="Parceiro 4" width={120} height={60} />
        </div>
      </div>
    </section>
  )
}
