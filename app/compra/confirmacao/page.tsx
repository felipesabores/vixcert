import { Suspense } from "react"
import ConfirmacaoContent from "@/components/confirmacao-content"

export default function ConfirmacaoPage() {
  return (
    <div className="container py-16">
      <Suspense fallback={<div>Carregando...</div>}>
        <ConfirmacaoContent />
      </Suspense>
    </div>
  )
}
