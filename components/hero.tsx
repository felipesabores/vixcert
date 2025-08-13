import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Certificados Digitais para sua Empresa</h1>
        <p className="text-xl mb-8">Segurança e autenticidade para suas transações eletrônicas</p>
        <Button asChild size="lg">
          <Link href="#produtos">Ver Certificados</Link>
        </Button>
      </div>
    </div>
  )
}
