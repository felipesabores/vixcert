import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Shield, HeadphonesIcon, FileText, Lock } from "lucide-react"

export const metadata = {
  title: "Sobre Nós - Vix Cert",
  description:
    "Conheça a VixCert, sua parceira em certificação digital com mais de 15 anos de experiência e conformidade ICP-Brasil.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre a VixCert</h1>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        Há mais de 15 anos, a VixCert é sinônimo de excelência e confiabilidade no mercado de certificação digital.
        Nossa missão é proporcionar soluções seguras e eficientes para autenticação e assinatura digital, contribuindo
        para a transformação digital de empresas e profissionais, sempre em conformidade com as normas ICP-Brasil.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="text-primary" />
              Nossa Missão
            </CardTitle>
          </CardHeader>
          <CardContent>
            Facilitar e assegurar as transações digitais, proporcionando certificados digitais de alta qualidade e
            suporte excepcional, contribuindo para um ambiente digital mais seguro e eficiente, sempre em conformidade
            com as normas e regulamentações da ICP-Brasil.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" />
              Nossa Equipe
            </CardTitle>
          </CardHeader>
          <CardContent>
            Contamos com uma equipe de Agentes de Registro e especialistas altamente qualificados, treinados e
            constantemente atualizados sobre as últimas tendências e regulamentações em certificação digital, garantindo
            um atendimento de excelência.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="text-primary" />
              Nosso Compromisso
            </CardTitle>
          </CardHeader>
          <CardContent>
            Garantimos a mais alta segurança e conformidade em todos os nossos processos, seguindo rigorosamente as
            normas estabelecidas pela ICP-Brasil. Nosso Plano de Continuidade de Negócios assegura a disponibilidade
            contínua dos nossos serviços.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HeadphonesIcon className="text-primary" />
              Nosso Suporte
            </CardTitle>
          </CardHeader>
          <CardContent>
            Oferecemos suporte técnico especializado e atendimento personalizado, assegurando que nossos clientes tenham
            a melhor experiência possível em todas as etapas do processo de certificação, desde a emissão até a
            utilização.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="text-primary" />
              Conformidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            Atendemos integralmente aos requisitos da Política de Segurança da ICP-Brasil e às Características Mínimas
            de Segurança para as AR da ICP-Brasil, garantindo a validade jurídica e segurança dos certificados emitidos.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="text-primary" />
              Segurança
            </CardTitle>
          </CardHeader>
          <CardContent>
            Implementamos rigorosos protocolos de segurança física e lógica, com procedimentos específicos para lidar
            com incidentes de segurança, comprometimento de chaves privadas e fraudes, protegendo integralmente os dados
            dos nossos clientes.
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Por que escolher a VixCert?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="secondary" className="text-lg py-2 px-4">
            Experiência Comprovada
          </Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">
            Atendimento Personalizado
          </Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">
            Tecnologia de Ponta
          </Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">
            Conformidade ICP-Brasil
          </Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">
            Plano de Continuidade
          </Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">
            Segurança Garantida
          </Badge>
        </div>
      </div>
    </div>
  )
}
