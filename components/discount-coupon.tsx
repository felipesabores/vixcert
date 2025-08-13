"use client"

import { motion } from "framer-motion"
import { Copy } from "lucide-react"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

export function DiscountCoupon() {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("VIXCERT15")
    setIsCopied(true)
    toast({
      title: "Código copiado!",
      description: "O cupom VIXCERT15 foi copiado para a área de transferência.",
    })

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div className="relative max-w-md">
      {/* Decorative elements */}
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-secondary rounded-full"></div>
      <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-primary rounded-full"></div>

      <motion.div
        className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
        whileHover={{
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          y: -2,
        }}
      >
        <div className="flex items-center">
          {/* Left side - colored bar */}
          <div className="w-2 self-stretch bg-gradient-to-b from-primary to-secondary"></div>

          {/* Content */}
          <div className="flex-1 p-5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                  Cupom de desconto
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Renovação de Certificado</h3>
              </div>
              <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">15% OFF</div>
            </div>

            <div
              className="bg-gray-100 py-3 px-4 rounded-lg flex justify-between items-center cursor-pointer mb-3"
              onClick={handleCopy}
            >
              <div className="font-mono text-lg font-bold tracking-wider text-gray-800">VIXCERT15</div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                {isCopied ? (
                  <div className="text-green-600 text-xs font-medium">Copiado!</div>
                ) : (
                  <Copy className="h-4 w-4 text-gray-500" />
                )}
              </motion.div>
            </div>

            <div className="text-xs text-gray-500 flex justify-between">
              <span>Válido para renovações</span>
              <span>Até 31/12/2023</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
