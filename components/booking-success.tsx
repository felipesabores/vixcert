"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Calendar } from "lucide-react"
import Link from "next/link"

export function BookingSuccess() {
  const searchParams = useSearchParams()
  const [bookingInfo, setBookingInfo] = useState<{
    date?: string
    time?: string
  }>({})

  useEffect(() => {
    const date = searchParams.get("date")
    const time = searchParams.get("time")

    if (date && time) {
      setBookingInfo({
        date: new Date(date).toLocaleDateString("pt-BR"),
        time: time,
      })
    }
  }, [searchParams])

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
        </div>
        <CardTitle className="text-center">Agendamento Confirmado!</CardTitle>
        <CardDescription className="text-center">
          Sua videoconferência de validação foi agendada com sucesso.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {bookingInfo.date && bookingInfo.time && (
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium">Detalhes do Agendamento</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Data: {bookingInfo.date}
              <br />
              Horário: {bookingInfo.time}
            </p>
          </div>
        )}

        <div className="space-y-2">
          <h3 className="font-medium">Próximos passos:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Você receberá um e-mail de confirmação com o link da videoconferência</li>
            <li>Prepare seus documentos para a validação</li>
            <li>Certifique-se de ter uma conexão estável com a internet</li>
            <li>Entre na videoconferência no horário agendado</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild variant="outline" className="flex-1">
            <Link href="/agendar">Fazer outro agendamento</Link>
          </Button>
          <Button asChild className="flex-1">
            <Link href="/">Voltar para a página inicial</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
