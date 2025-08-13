import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, MessageSquare, FileText, Phone } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Suporte - Vix Cert",
  description:
    "Central de suporte da VixCert para dúvidas, problemas técnicos e informações sobre certificados digitais.",
}

export default function SuportePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Central de Suporte</h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Estamos aqui para ajudar. Encontre respostas para suas dúvidas ou entre em contato com nossa equipe de suporte
        especializada.
      </p>

      <Tabs defaultValue="contato" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="contato">Contato</TabsTrigger>
          <TabsTrigger value="faq">Perguntas Frequentes</TabsTrigger>
          <TabsTrigger value="tutoriais">Tutoriais</TabsTrigger>
        </TabsList>

        <TabsContent value="contato" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Telefone</h3>
                  <p className="text-gray-600 mb-4">(27) 3333-4444</p>
                  <p className="text-sm text-gray-500">
                    Segunda a Sexta: 9h às 18h
                    <br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">E-mail</h3>
                  <p className="text-gray-600 mb-4">suporte@vixcert.com.br</p>
                  <p className="text-sm text-gray-500">
                    Respondemos em até 24 horas
                    <br />
                    durante dias úteis
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Chat</h3>
                  <p className="text-gray-600 mb-4">Atendimento online</p>
                  <Button asChild className="bg-secondary hover:bg-secondary/90">
                    <Link href="#">Iniciar Chat</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Envie sua mensagem</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nome</label>
                    <Input placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Assunto</label>
                  <Input placeholder="Assunto da mensagem" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Mensagem</label>
                  <Textarea placeholder="Descreva sua dúvida ou problema em detalhes" rows={5} />
                </div>
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Perguntas Frequentes</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">O que é um certificado digital?</h4>
                  <p className="text-gray-600">
                    Um certificado digital é um documento eletrônico que contém dados sobre a identidade de uma pessoa
                    ou empresa, permitindo a realização de transações online com segurança e validade jurídica, em
                    conformidade com os padrões ICP-Brasil.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Qual a diferença entre certificado A1 e A3?</h4>
                  <p className="text-gray-600">
                    O certificado A1 é armazenado no próprio computador, com validade de 1 ano. Já o certificado A3 é
                    armazenado em dispositivos portáteis como tokens ou cartões, oferecendo maior segurança e validade
                    de até 3 anos.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Como renovar meu certificado digital?</h4>
                  <p className="text-gray-600">
                    A renovação pode ser feita online através do nosso site, desde que seu certificado atual ainda
                    esteja válido. O processo é simples e rápido, mantendo o mesmo nível de segurança e seguindo todos
                    os protocolos estabelecidos pela ICP-Brasil.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">
                    Quais documentos são necessários para obter um certificado digital?
                  </h4>
                  <p className="text-gray-600">
                    Para e-CPF: documento de identificação com foto (RG ou CNH) e CPF. Para e-CNPJ: documento de
                    identificação do responsável legal, contrato social ou estatuto da empresa, e cartão CNPJ. Todos os
                    documentos devem ser originais.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Como funciona a validação por videoconferência?</h4>
                  <p className="text-gray-600">
                    A validação por videoconferência é realizada por um Agente de Registro certificado, que verificará
                    seus documentos e identidade através de uma chamada de vídeo. O processo é seguro, rápido e segue
                    todos os protocolos estabelecidos pela ICP-Brasil.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">
                    O que fazer se meu certificado digital não estiver funcionando?
                  </h4>
                  <p className="text-gray-600">
                    Verifique se o dispositivo está corretamente conectado, se os drivers estão instalados e
                    atualizados, e se o certificado não está expirado. Se o problema persistir, entre em contato com
                    nosso suporte técnico.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Não encontrou a resposta que procurava?</p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/suporte#contato">Fale com nosso suporte</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tutoriais" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Tutoriais e Guias</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Como instalar seu certificado A1</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Guia passo a passo para instalar seu certificado digital A1 no computador.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="#">Ver tutorial</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Configurando seu token USB</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Aprenda a configurar e utilizar seu token USB para certificados A3.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="#">Ver tutorial</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Assinando documentos PDF</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Como assinar documentos PDF com seu certificado digital.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="#">Ver tutorial</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Renovação de certificados</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Guia completo para renovar seu certificado digital antes do vencimento.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="#">Ver tutorial</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Emissão de notas fiscais</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Como utilizar seu certificado digital para emitir notas fiscais eletrônicas.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="#">Ver tutorial</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Solução de problemas comuns</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Resolva os problemas mais comuns relacionados ao uso de certificados digitais.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="#">Ver tutorial</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Precisa de ajuda com algo específico?</p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/suporte#contato">Contatar suporte técnico</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
