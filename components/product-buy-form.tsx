"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { createCheckoutSession } from "@/lib/actions"

interface ProductBuyFormProps {
  priceId: string
  productName: string
  price: number
}

export function ProductBuyForm({ priceId, productName, price }: ProductBuyFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleBuy = async () => {
    if (!priceId) {
      toast({
        title: "Erro",
        description: "Preço do produto não encontrado. Por favor, tente novamente.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      console.log("Creating checkout session with priceId:", priceId)
      const result = await createCheckoutSession(priceId)

      if (result.url) {
        window.location.href = result.url
      } else if (result.error) {
        throw new Error(result.error)
      } else {
        throw new Error("Failed to create checkout session: No URL or error returned")
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
      toast({
        title: "Erro",
        description:
          error instanceof Error
            ? error.message
            : "Ocorreu um erro ao processar sua compra. Por favor, tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price / 100)
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold">{productName}</h3>
        <p className="text-2xl font-bold text-primary">{formatPrice(price)}</p>
      </div>
      <Button onClick={handleBuy} disabled={isLoading || !priceId} className="w-full" size="lg">
        {isLoading ? "Processando..." : "Comprar Agora"}
      </Button>
    </div>
  )
}
