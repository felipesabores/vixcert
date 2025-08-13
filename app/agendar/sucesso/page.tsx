import { Suspense } from "react"
import { BookingSuccess } from "@/components/booking-success"

export const metadata = {
  title: "Agendamento Confirmado - Vix Cert",
  description: "Sua videoconferência de validação foi agendada com sucesso.",
}

export default function BookingSuccessPage() {
  return (
    <div className="container py-16">
      <Suspense fallback={<div>Carregando...</div>}>
        <BookingSuccess />
      </Suspense>
    </div>
  )
}
