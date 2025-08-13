import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneIcon, MailIcon, MapPinIcon, Clock } from "lucide-react"

export const metadata = {
  title: "Contato - Vix Cert",
  description:
    "Entre em contato com a VixCert para dúvidas, suporte ou informações sobre nossos certificados digitais homologados ICP-Brasil.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Entre em Contato</h1>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        Estamos aqui para ajudar! Se você tiver dúvidas sobre nossos certificados digitais, precisar de suporte técnico
        ou quiser mais informações sobre conformidade com ICP-Brasil, não hesite em nos contatar.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Envie-nos uma mensagem</CardTitle>
            <CardDescription>
              Preencha o formulário abaixo e entraremos em contato o mais breve possível.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Nome" />
                <Input placeholder="Sobrenome" />
              </div>
              <Input placeholder="Email" type="email" />
              <Input placeholder="Telefone" type="tel" />
              <Textarea placeholder="Sua mensagem" />
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informações de Contato</CardTitle>
            <CardDescription>Você também pode nos contatar diretamente através dos seguintes meios:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <PhoneIcon className="text-primary" />
              <span>(27) 3333-4444</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="text-primary" />
              <span>contato@vixcert.com.br</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="text-primary" />
              <span>
                Edifício Tropical Shopping
                <br />
                R. Antônio Ataíde, 823 - Loja 02
                <br />
                Centro de Vila Velha, Vila Velha - ES, 29100-906
                <br />
                Atrás do Vasco Coutinho
              </span>
            </div>
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="text-primary" />
                <h3 className="font-semibold">Horário de Atendimento:</h3>
              </div>
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
