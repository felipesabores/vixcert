import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Clock, DollarSign, GraduationCap, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Trabalhe Conosco - Vix Cert",
  description: "Oportunidades de carreira na VixCert. Junte-se à nossa equipe e faça parte da revolução digital.",
}

// Mock job openings
const jobOpenings = [
  {
    id: 1,
    title: "Agente de Registro",
    location: "Vila Velha, ES",
    type: "Tempo Integral",
    salary: "R$ 2.500 - R$ 3.200",
    description:
      "Responsável pela validação de documentos e identidade dos solicitantes de certificados digitais, seguindo os procedimentos e normas da ICP-Brasil.",
    requirements: [
      "Ensino médio completo",
      "Conhecimentos básicos em informática",
      "Boa comunicação",
      "Atenção aos detalhes",
    ],
    benefits: ["Vale-refeição", "Vale-transporte", "Plano de saúde", "Seguro de vida"],
  },
  {
    id: 2,
    title: "Desenvolvedor Full Stack",
    location: "Remoto",
    type: "Tempo Integral",
    salary: "R$ 5.000 - R$ 7.000",
    description:
      "Desenvolvimento e manutenção de sistemas internos e plataformas web relacionadas à certificação digital e assinatura eletrônica.",
    requirements: [
      "Experiência com React, Node.js e TypeScript",
      "Conhecimento em bancos de dados SQL e NoSQL",
      "Experiência com desenvolvimento de APIs RESTful",
      "Conhecimento em segurança da informação é um diferencial",
    ],
    benefits: ["Vale-refeição", "Home office", "Plano de saúde", "Horário flexível"],
  },
  {
    id: 3,
    title: "Especialista em Suporte Técnico",
    location: "Vitória, ES",
    type: "Tempo Integral",
    salary: "R$ 3.000 - R$ 4.000",
    description:
      "Atendimento e suporte técnico aos clientes, auxiliando na instalação, configuração e utilização de certificados digitais.",
    requirements: [
      "Formação técnica ou superior em TI",
      "Experiência em suporte técnico",
      "Conhecimento em certificação digital é um diferencial",
      "Boa comunicação e habilidade para resolução de problemas",
    ],
    benefits: ["Vale-refeição", "Vale-transporte", "Plano de saúde", "Bônus por desempenho"],
  },
]

export default function TrabalheConoscoPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Trabalhe Conosco</h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Junte-se à nossa equipe e faça parte da revolução digital. Conheça nossas oportunidades e cresça conosco.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2">
          <div className="bg-primary text-white p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Por que trabalhar na VixCert?</h2>
            <p className="mb-6">
              Na VixCert, valorizamos nossos colaboradores e oferecemos um ambiente de trabalho dinâmico e inovador.
              Acreditamos que o sucesso da nossa empresa está diretamente ligado ao desenvolvimento e bem-estar da nossa
              equipe.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <GraduationCap className="h-10 w-10 mb-3" />
                <h3 className="font-bold mb-2">Desenvolvimento Profissional</h3>
                <p className="text-sm">
                  Investimos no crescimento contínuo dos nossos colaboradores com treinamentos e oportunidades de
                  carreira.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <CheckCircle className="h-10 w-10 mb-3" />
                <h3 className="font-bold mb-2">Cultura de Inovação</h3>
                <p className="text-sm">
                  Incentivamos novas ideias e soluções criativas para os desafios do mercado digital.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <DollarSign className="h-10 w-10 mb-3" />
                <h3 className="font-bold mb-2">Pacote de Benefícios</h3>
                <p className="text-sm">
                  Oferecemos benefícios competitivos e reconhecimento pelo desempenho e dedicação.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Vagas Disponíveis</h2>

          {jobOpenings.map((job) => (
            <Card key={job.id} className="mb-6 overflow-hidden">
              <div className="h-2 w-full bg-primary"></div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {job.location}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {job.type}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" /> {job.salary}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" /> Requisitos
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" /> Benefícios
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {job.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href={`/trabalhe-conosco/${job.id}`}>Candidatar-se</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <Card className="sticky top-20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Envie seu currículo</h3>
              <p className="text-gray-600 mb-4">
                Não encontrou uma vaga específica? Envie seu currículo para nosso banco de talentos e entraremos em
                contato quando surgir uma oportunidade compatível com seu perfil.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nome completo</label>
                  <Input placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">E-mail</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Telefone</label>
                  <Input placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Área de interesse</label>
                  <Input placeholder="Ex: Suporte Técnico, Vendas, TI" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Mensagem (opcional)</label>
                  <Textarea placeholder="Conte-nos um pouco sobre você e suas experiências" rows={3} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Currículo (PDF, DOC ou DOCX)</label>
                  <Input type="file" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Enviar currículo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Depoimentos de Colaboradores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white shadow border-0">
            <CardContent className="p-6">
              <p className="italic text-gray-600 mb-4">
                "Trabalhar na VixCert tem sido uma experiência incrível. A empresa valoriza o desenvolvimento
                profissional e oferece um ambiente colaborativo e inovador."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-bold">Mariana Costa</p>
                  <p className="text-sm text-gray-500">Agente de Registro - 2 anos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow border-0">
            <CardContent className="p-6">
              <p className="italic text-gray-600 mb-4">
                "O que mais gosto na VixCert é a cultura de inovação e o incentivo ao aprendizado contínuo. Aqui temos
                liberdade para propor novas ideias e crescer profissionalmente."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-bold">Rafael Mendes</p>
                  <p className="text-sm text-gray-500">Desenvolvedor - 3 anos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow border-0">
            <CardContent className="p-6">
              <p className="italic text-gray-600 mb-4">
                "Entrei como estagiária e hoje sou coordenadora da minha área. A VixCert realmente investe no potencial
                dos seus colaboradores e reconhece o bom trabalho."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-bold">Camila Santos</p>
                  <p className="text-sm text-gray-500">Coordenadora de Suporte - 4 anos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
