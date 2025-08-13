"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Mail, Shield, Calendar } from "lucide-react"

export default function ConfirmacaoContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [countdown, setCountdown] = useState(10)
  const [transactionDetails, setTransactionDetails] = useState({
    id: "",
    amount: "",
    status: "",
    date: "",
  })

  useEffect(() => {
    const sessionId = searchParams.get("session_id")
    if (sessionId) {
      fetch(`/api/checkout?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setTransactionDetails({
            id: data.id,
            amount: new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(data.amount / 100),
            status: data.status,
            date: new Date(data.date).toLocaleString("pt-BR"),
          })
        })
        .catch((error) => console.error("Error fetching transaction details:", error))
    }

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [searchParams])

  useEffect(() => {
    if (countdown === 0) {
      router.push("https://cal.com/vixcert/validacao")
    }
  }, [countdown, router])

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
        </div>
        <CardTitle className="text-center text-2xl">Compra Confirmada!</CardTitle>
        <CardDescription className="text-center">
          Obrigado por sua compra. Você será redirecionado para o agendamento da validação em {countdown} segundos.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-medium mb-2">Detalhes da Transação:</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <span className="font-medium">ID:</span> {transactionDetails.id}
            </li>
            <li>
              <span className="font-medium">Valor:</span> {transactionDetails.amount}
            </li>
            <li>
              <span className="font-medium">Status:</span> {transactionDetails.status}
            </li>
            <li>
              <span className="font-medium">Data:</span> {transactionDetails.date}
            </li>
          </ul>
        </div>

        <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
          <Mail className="h-5 w-5 text-blue-500 mt-0.5" />
          <p className="text-sm text-blue-700">
            Todos os dados da operação e links para a entrevista de validação serão enviados para o e-mail utilizado na
            compra. Por favor, verifique sua caixa de entrada e a pasta de spam.
          </p>
        </div>

        <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
          <Shield className="h-5 w-5 text-green-500 mt-0.5" />
          <p className="text-sm text-green-700">
            Seus dados estão protegidos por rigorosos protocolos de segurança conforme as normas ICP-Brasil. Nosso Plano
            de Continuidade de Negócios garante a integridade de todo o processo.
          </p>
        </div>

        <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg">
          <Calendar className="h-5 w-5 text-yellow-500 mt-0.5" />
          <p className="text-sm text-yellow-700">
            O próximo passo é agendar sua videoconferência de validação com um de nossos Agentes de Registro
            certificados. Este processo é essencial para garantir a conformidade com as normas ICP-Brasil.
          </p>
        </div>

        <div className="flex justify-center">
          <Button onClick={() => router.push("https://cal.com/vixcert/validacao")}>Ir para o agendamento agora</Button>
        </div>
      </CardContent>
    </Card>
  )
}
