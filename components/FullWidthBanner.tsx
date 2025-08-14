"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ArrowRight, Shield, Clock, Users } from "lucide-react"

interface BannerProps {
  title: string
  subtitle?: string
  description: string
  buttonText: string
  buttonLink: string
  imageDesktop: string
  imageMobile: string
  backgroundColor?: string
  features?: Array<{
    icon: React.ReactNode
    title: string
    description: string
  }>
}

export default function FullWidthBanner({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageDesktop,
  imageMobile,
  backgroundColor = "bg-gradient-to-r from-blue-600 to-blue-800",
  features,
}: BannerProps) {
  const defaultFeatures = [
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />,
      title: "Máxima Segurança",
      description: "Certificados com criptografia de alta segurança",
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />,
      title: "Processo Rápido",
      description: "Emissão em até 24 horas úteis",
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />,
      title: "Suporte Especializado",
      description: "Atendimento personalizado e presencial",
    },
  ]

  const displayFeatures = features || defaultFeatures

  return (
    <div className={`relative w-full ${backgroundColor} overflow-hidden`}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />

      <div className="relative">
        {/* Main banner section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-white space-y-6 sm:space-y-8 text-center lg:text-left">
              {subtitle && (
                <div className="inline-block">
                  <span className="text-sm sm:text-base font-medium text-white/80 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                    {subtitle}
                  </span>
                </div>
              )}

              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{title}</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="pt-4 sm:pt-6">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 transform hover:scale-105 group"
                  onClick={() => (window.location.href = buttonLink)}
                >
                  {buttonText}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
              <div className="relative w-full h-full max-w-lg">
                {/* Desktop image */}
                <Image
                  src={imageDesktop || "/placeholder.svg"}
                  alt={title}
                  fill
                  className="hidden sm:block object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                {/* Mobile image */}
                <Image
                  src={imageMobile || "/placeholder.svg"}
                  alt={title}
                  fill
                  className="block sm:hidden object-contain drop-shadow-2xl"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="border-t border-white/20 bg-black/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="text-white/90 mt-1">{feature.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{feature.title}</h3>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
