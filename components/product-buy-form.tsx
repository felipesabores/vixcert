"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { createCheckoutSession } from "@/lib/actions"

export function ProductBuyForm({ priceId }: { priceId: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleBuy = async () => {
    setIsLoading(true)
    try {
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

  return (
    <Button onClick={handleBuy} disabled={isLoading}>
      {isLoading ? "Processando..." : "Comprar Agora"}
    </Button>
  )
}
