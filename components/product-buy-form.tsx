"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Award, Clock, CreditCard } from "lucide-react"
import { createCheckoutSession } from "@/lib/actions"
import { useState } from "react"
import type { Product } from "@/lib/schema"

interface ProductBuyFormProps {
  product: Product
}

export function ProductBuyForm({ product }: ProductBuyFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleBuy = async () => {
    if (!product.price.id) {
      alert("Produto sem preço configurado. Entre em contato conosco.")
      return
    }

    setIsLoading(true)
    try {
      await createCheckoutSession(product.id, product.price.id)
    } catch (error) {
      console.error("Error during checkout:", error)
      alert("Erro ao processar compra. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline">
            {product.metadata?.tipo || product.metadata?.categoria || "Certificado Digital"}
          </Badge>
          {product.metadata?.validade && <Badge variant="secondary">{product.metadata.validade}</Badge>}
        </div>
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription className="text-sm">{product.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          {product.metadata?.midia && (
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-sm">Mídia: {product.metadata.midia}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm">Homologado ICP-Brasil</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm">Emissão rápida</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Preço:</span>
            <span className="text-2xl font-bold text-primary">{product.price.display_amount || "Consulte"}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button onClick={handleBuy} disabled={isLoading || !product.price.id} className="w-full" size="lg">
          <CreditCard className="mr-2 h-4 w-4" />
          {isLoading ? "Processando..." : "Comprar Agora"}
        </Button>
      </CardFooter>
    </Card>
  )
}
