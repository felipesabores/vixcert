"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Video, FileCheck, HelpCircle, Shield } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Scheduling() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cal.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const openCalendar = () => {
    window.Cal?.ui?.modal?.createAt("cal-button", {
      calLink: "vixcert/validacao",
      config: {
        name: "Validação de Certificado Digital",
        email: "contato@vixcert.com.br",
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: {
          branding: {
            brandColor: "#00295b",
          },
        },
      },
    })
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Agende sua Validação
          </CardTitle>
          <CardDescription>
            Escolha o melhor horário para realizar a validação do seu certificado digital com nossos Agentes de Registro
            certificados.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button id="cal-button" onClick={openCalendar} className="w-full" size="lg">
            Agendar Videoconferência
          </Button>

          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <Video className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Validação por Videoconferência</h3>
                <p className="text-sm text-muted-foreground">
                  Processo rápido e seguro, realizado por Agentes de Registro certificados conforme normas ICP-Brasil.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileCheck className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Documentação Necessária</h3>
                <p className="text-sm text-muted-foreground">
                  Tenha em mãos seus documentos pessoais ou empresariais para validação conforme exigências
                  regulatórias.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Segurança Garantida</h3>
                <p className="text-sm text-muted-foreground">
                  Todo o processo segue rigorosos protocolos de segurança e conformidade com a ICP-Brasil.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Perguntas Frequentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Quanto tempo dura a validação?</AccordionTrigger>
              <AccordionContent>
                A videoconferência de validação dura em média 15 minutos, dependendo da complexidade do certificado.
                Nossos Agentes de Registro são treinados para conduzir o processo de forma eficiente e segura.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quais documentos preciso apresentar?</AccordionTrigger>
              <AccordionContent>
                Para pessoa física: RG e CPF. Para pessoa jurídica: Contrato Social, documentos dos sócios e procuração
                (se aplicável). Todos os documentos devem ser originais e estar dentro da validade.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Posso remarcar a videoconferência?</AccordionTrigger>
              <AccordionContent>
                Sim, você pode remarcar até 2 horas antes do horário agendado através do link enviado no e-mail de
                confirmação. Nosso sistema de agendamento é flexível para atender às suas necessidades.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>O que acontece se houver problemas técnicos durante a validação?</AccordionTrigger>
              <AccordionContent>
                A VixCert possui um Plano de Continuidade de Negócios que prevê procedimentos específicos para lidar com
                problemas técnicos. Caso ocorra alguma interrupção, nosso Agente de Registro entrará em contato para
                reagendar a validação o mais breve possível.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
