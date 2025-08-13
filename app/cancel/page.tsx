import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CancelPage() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Compra cancelada</h1>
      <p className="mb-8">Sua compra foi cancelada. Se você tiver alguma dúvida, entre em contato conosco.</p>
      <Button asChild>
        <Link href="/">Voltar para a página inicial</Link>
      </Button>
    </div>
  )
}
