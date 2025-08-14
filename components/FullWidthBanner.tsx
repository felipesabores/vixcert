"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Award, Users, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

interface FeatureCard {
  icon: React.ReactNode
  title: string
  description: string
}

const features: FeatureCard[] = [
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Segurança ICP-Brasil",
    description: "Certificados com validade jurídica garantida pela infraestrutura de chaves públicas brasileira.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Processo Rápido",
    description: "Emissão ágil com agendamento online e atendimento personalizado em nossa sede.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Autoridade Credenciada",
    description: "Somos uma Autoridade de Registro oficialmente credenciada pelo ITI.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Suporte Especializado",
    description: "Equipe técnica qualificada para orientar você em todo o processo.",
  },
]

const benefits = [
  "Certificados A1 e A3 disponíveis",
  "Validades de 1, 2 e 3 anos",
  "Múltiplas opções de mídia",
  "Preços competitivos",
  "Atendimento personalizado",
  "Suporte pós-venda",
]

export function FullWidthBanner() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600&text=Background+Pattern')] opacity-10" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Certificados Digitais
                  <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white/90 font-normal mt-2">
                    com Segurança Garantida
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
                  Emita seu certificado digital e-CPF ou e-CNPJ com a VixCert. Autoridade de Registro credenciada com
                  processo ágil e seguro.
                </p>
              </div>

              {/* Benefits List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                >
                  <Link href="/certificados">
                    Ver Certificados
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/agendar">Agendar Validação</Link>
                </Button>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="aspect-square sm:aspect-[4/3] lg:aspect-square relative">
                <img
                  src="/placeholder.svg?height=600&width=600&text=Certificado+Digital"
                  alt="Certificados Digitais VixCert"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  sizes={isMobile ? "100vw" : "50vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a VixCert?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Somos uma Autoridade de Registro credenciada, oferecendo certificados digitais com total segurança e
              suporte especializado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8 text-center space-y-4">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Pronto para adquirir seu certificado digital?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Escolha entre nossos certificados e-CPF para pessoas físicas ou e-CNPJ para empresas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300">
                <CardContent className="p-6 sm:p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Pessoa Física</h3>
                  <p className="text-gray-600">Certificado e-CPF para pessoas físicas</p>
                  <Button asChild className="w-full">
                    <Link href="/saiba-mais-pf">Ver Certificados PF</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300">
                <CardContent className="p-6 sm:p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Pessoa Jurídica</h3>
                  <p className="text-gray-600">Certificado e-CNPJ para empresas</p>
                  <Button asChild className="w-full">
                    <Link href="/saiba-mais-pj">Ver Certificados PJ</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
