"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CertificateSelector } from "@/components/certificate-selector"
import { DiscountCoupon } from "@/components/discount-coupon"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import type { productSchema } from "@/lib/schema"
import type { z } from "zod"

type Product = z.infer<typeof productSchema>

interface HeroSectionProps {
  products: Product[]
}

export function HeroSection({ products }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"pf" | "pj">("pf")

  const benefits = [
    "Emissão rápida e segura",
    "Validação por videoconferência",
    "Suporte técnico especializado",
    "Conformidade ICP-Brasil",
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-secondary rounded-full"></div>
              <span className="text-sm font-medium uppercase tracking-wider text-secondary">Certificado Digital</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Segurança e <span className="text-primary">autenticidade</span> para suas transações digitais
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Emita seu certificado digital com a VixCert e tenha a garantia de validade jurídica em todas as suas
              transações eletrônicas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="#certificados">
                  Comprar agora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/agendar">Agendar validação</Link>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <DiscountCoupon />
            </motion.div>
          </motion.div>

          {/* Right Column - Certificate Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="order-1 lg:order-2"
            id="certificados"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="flex border-b">
                <button
                  className={`flex-1 py-4 text-center font-medium transition-colors ${
                    activeTab === "pf" ? "bg-green-500 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("pf")}
                >
                  Pessoa Física
                </button>
                <button
                  className={`flex-1 py-4 text-center font-medium transition-colors ${
                    activeTab === "pj" ? "bg-secondary text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("pj")}
                >
                  Pessoa Jurídica
                </button>
              </div>

              <div className="p-6">
                <CertificateSelector products={products} activeTab={activeTab} onTabChange={setActiveTab} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
