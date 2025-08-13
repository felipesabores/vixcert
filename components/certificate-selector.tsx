"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { productSchema } from "@/lib/schema"
import type { z } from "zod"
import { motion, AnimatePresence } from "framer-motion"

type Product = z.infer<typeof productSchema>

interface CertificateSelectorProps {
  products: Product[]
  activeTab?: "pf" | "pj"
  onTabChange?: (tab: "pf" | "pj") => void
}

export function CertificateSelector({ products, activeTab = "pf", onTabChange }: CertificateSelectorProps) {
  const [selectedPFCertificate, setSelectedPFCertificate] = useState("")
  const [selectedPFValidity, setSelectedPFValidity] = useState("")
  const [selectedPFMedia, setSelectedPFMedia] = useState("")

  const [selectedPJCertificate, setSelectedPJCertificate] = useState("")
  const [selectedPJValidity, setSelectedPJValidity] = useState("")
  const [selectedPJMedia, setSelectedPJMedia] = useState("")

  const [price, setPrice] = useState("0,00")

  const pfProducts = products.filter(
    (p) => p.metadata?.tipo?.includes("e-CPF") || p.metadata?.categoria === "Pessoa Física",
  )
  const pjProducts = products.filter(
    (p) => p.metadata?.tipo?.includes("e-CNPJ") || p.metadata?.categoria === "Pessoa Jurídica",
  )

  const pfCertificateTypes = [...new Set(pfProducts.map((p) => p.metadata?.tipo || ""))]
  const pjCertificateTypes = [...new Set(pjProducts.map((p) => p.metadata?.tipo || ""))]

  const validityOptions = ["1 ano", "2 anos", "3 anos"]
  const mediaOptions = ["Arquivo Digital", "Token USB", "Cartão", "Nuvem"]

  // Simulate price calculation when options change
  useEffect(() => {
    if (activeTab === "pf" && selectedPFCertificate && selectedPFValidity && selectedPFMedia) {
      // This is just a simulation - in a real app, you'd calculate based on selected options
      const basePrice = 150
      const validityMultiplier = selectedPFValidity === "1 ano" ? 1 : selectedPFValidity === "2 anos" ? 1.8 : 2.5
      const mediaMultiplier = selectedPFMedia === "Arquivo Digital" ? 1 : 1.2

      const calculatedPrice = basePrice * validityMultiplier * mediaMultiplier
      setPrice(calculatedPrice.toFixed(2).replace(".", ","))
    } else if (activeTab === "pj" && selectedPJCertificate && selectedPJValidity && selectedPJMedia) {
      const basePrice = 250
      const validityMultiplier = selectedPJValidity === "1 ano" ? 1 : selectedPJValidity === "2 anos" ? 1.8 : 2.5
      const mediaMultiplier = selectedPJMedia === "Arquivo Digital" ? 1 : 1.2

      const calculatedPrice = basePrice * validityMultiplier * mediaMultiplier
      setPrice(calculatedPrice.toFixed(2).replace(".", ","))
    } else {
      setPrice("0,00")
    }
  }, [
    activeTab,
    selectedPFCertificate,
    selectedPFValidity,
    selectedPFMedia,
    selectedPJCertificate,
    selectedPJValidity,
    selectedPJMedia,
  ])

  return (
    <div>
      <AnimatePresence mode="wait">
        {activeTab === "pf" ? (
          <motion.div
            key="pf"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-1.5 block text-gray-700">Tipo de Certificado</label>
                <Select value={selectedPFCertificate} onValueChange={setSelectedPFCertificate}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o tipo de certificado" />
                  </SelectTrigger>
                  <SelectContent>
                    {pfCertificateTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-gray-700">Validade</label>
                  <Select value={selectedPFValidity} onValueChange={setSelectedPFValidity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {validityOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block text-gray-700">Mídia</label>
                  <Select value={selectedPFMedia} onValueChange={setSelectedPFMedia}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {mediaOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-4 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="text-sm text-gray-500">Valor total</div>
                  <div className="text-3xl font-bold text-primary">R$ {price}</div>
                </div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 w-full md:w-auto">
                  <Button asChild variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                    <Link href="/saiba-mais-pf">Saiba Mais</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-white"
                    disabled={!selectedPFCertificate || !selectedPFValidity || !selectedPFMedia}
                  >
                    <Link href="/comprar-pf">Comprar agora</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="pj"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-1.5 block text-gray-700">Tipo de Certificado</label>
                <Select value={selectedPJCertificate} onValueChange={setSelectedPJCertificate}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o tipo de certificado" />
                  </SelectTrigger>
                  <SelectContent>
                    {pjCertificateTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-gray-700">Validade</label>
                  <Select value={selectedPJValidity} onValueChange={setSelectedPJValidity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {validityOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block text-gray-700">Mídia</label>
                  <Select value={selectedPJMedia} onValueChange={setSelectedPJMedia}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {mediaOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-4 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="text-sm text-gray-500">Valor total</div>
                  <div className="text-3xl font-bold text-primary">R$ {price}</div>
                </div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 w-full md:w-auto">
                  <Button asChild variant="outline" className="text-secondary border-secondary hover:bg-orange-50">
                    <Link href="/saiba-mais-pj">Saiba Mais</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-secondary hover:bg-secondary/90 text-white"
                    disabled={!selectedPJCertificate || !selectedPJValidity || !selectedPJMedia}
                  >
                    <Link href="/comprar-pj">Comprar agora</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
