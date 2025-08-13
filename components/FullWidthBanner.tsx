"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

interface Feature {
  icon?: React.ReactNode
  text: string
}

interface FullWidthBannerProps {
  title: string
  subtitle?: string
  description: string
  features?: Feature[]
  ctaText: string
  ctaLink: string
  backgroundImage?: {
    desktop: string
    mobile: string
  }
  backgroundColor?: string
  textColor?: "light" | "dark"
  layout?: "centered" | "split"
  className?: string
}

export default function FullWidthBanner({
  title,
  subtitle,
  description,
  features = [],
  ctaText,
  ctaLink,
  backgroundImage,
  backgroundColor = "bg-gradient-to-r from-blue-600 to-blue-800",
  textColor = "light",
  layout = "centered",
  className = "",
}: FullWidthBannerProps) {
  const textColorClasses = textColor === "light" ? "text-white" : "text-gray-900"
  const overlayClasses = textColor === "light" ? "bg-black/40" : "bg-white/80"

  if (layout === "split") {
    return (
      <section className={`relative w-full overflow-hidden ${className}`}>
        {backgroundImage && (
          <div className="absolute inset-0">
            <Image
              src={backgroundImage.desktop || "/placeholder.svg"}
              alt={title}
              fill
              className="hidden md:block object-cover object-center"
              sizes="100vw"
            />
            <Image
              src={backgroundImage.mobile || "/placeholder.svg"}
              alt={title}
              fill
              className="md:hidden object-cover object-center"
              sizes="100vw"
            />
            <div className={`absolute inset-0 ${overlayClasses}`} />
          </div>
        )}

        <div className={`relative z-10 min-h-[500px] md:min-h-[600px] ${!backgroundImage ? backgroundColor : ""}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] md:min-h-[600px]">
              {/* Content Side */}
              <div className={`space-y-6 ${textColorClasses} py-12 md:py-16`}>
                {subtitle && (
                  <p className="text-sm sm:text-base font-medium uppercase tracking-wider opacity-80">{subtitle}</p>
                )}

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{title}</h2>

                <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90 max-w-lg">{description}</p>

                {features.length > 0 && (
                  <ul className="space-y-3 md:space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {feature.icon || (
                            <CheckCircle
                              className={`w-5 h-5 ${textColor === "light" ? "text-green-400" : "text-green-600"}`}
                            />
                          )}
                        </div>
                        <span className="text-sm sm:text-base md:text-lg">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <a href={ctaLink} className="inline-flex items-center gap-2">
                      {ctaText}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Visual Side */}
              <div className="relative">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 sm:p-8">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">Certificação Digital Segura</h3>
                      <p className="text-white/80 text-sm sm:text-base">
                        Tecnologia de ponta para proteger suas transações digitais
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Centered layout
  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage.desktop || "/placeholder.svg"}
            alt={title}
            fill
            className="hidden sm:block object-cover object-center"
            sizes="100vw"
          />
          <Image
            src={backgroundImage.mobile || "/placeholder.svg"}
            alt={title}
            fill
            className="sm:hidden object-cover object-center"
            sizes="100vw"
          />
          <div className={`absolute inset-0 ${overlayClasses}`} />
        </div>
      )}

      <div className={`relative z-10 py-16 sm:py-20 md:py-24 lg:py-32 ${!backgroundImage ? backgroundColor : ""}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 ${textColorClasses}`}>
            {subtitle && (
              <p className="text-sm sm:text-base font-medium uppercase tracking-wider opacity-80">{subtitle}</p>
            )}

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{title}</h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto">
              {description}
            </p>

            {features.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-3 text-left">
                        <div className="flex-shrink-0">
                          {feature.icon || (
                            <CheckCircle
                              className={`w-5 h-5 ${textColor === "light" ? "text-green-400" : "text-green-600"}`}
                            />
                          )}
                        </div>
                        <span className="text-sm sm:text-base font-medium">{feature.text}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <div className="pt-6 sm:pt-8">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <a href={ctaLink} className="inline-flex items-center gap-2">
                  {ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
