"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BannerSlide {
  id: number
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonLink: string
  backgroundImage: string
  mobileBackgroundImage?: string
}

const slides: BannerSlide[] = [
  {
    id: 1,
    title: "Certificados Digitais",
    subtitle: "e-CPF e e-CNPJ",
    description:
      "Segurança e praticidade para suas transações digitais. Certificados ICP-Brasil com validade jurídica.",
    buttonText: "Saiba Mais",
    buttonLink: "/certificados",
    backgroundImage: "/placeholder.svg?height=600&width=1200&text=Certificados+Digitais",
    mobileBackgroundImage: "/placeholder.svg?height=400&width=800&text=Certificados+Mobile",
  },
  {
    id: 2,
    title: "Pessoa Física",
    subtitle: "e-CPF A1 e A3",
    description:
      "Certificado digital para pessoas físicas. Assine documentos e acesse serviços governamentais com segurança.",
    buttonText: "Ver Certificados PF",
    buttonLink: "/saiba-mais-pf",
    backgroundImage: "/placeholder.svg?height=600&width=1200&text=e-CPF+Certificados",
    mobileBackgroundImage: "/placeholder.svg?height=400&width=800&text=e-CPF+Mobile",
  },
  {
    id: 3,
    title: "Pessoa Jurídica",
    subtitle: "e-CNPJ A1 e A3",
    description:
      "Certificado digital para empresas. Simplifique processos fiscais e tributários com total segurança jurídica.",
    buttonText: "Ver Certificados PJ",
    buttonLink: "/saiba-mais-pj",
    backgroundImage: "/placeholder.svg?height=600&width=1200&text=e-CNPJ+Certificados",
    mobileBackgroundImage: "/placeholder.svg?height=400&width=800&text=e-CNPJ+Mobile",
  },
]

export function BannerHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  const currentSlideData = slides[currentSlide]
  const backgroundImage =
    isMobile && currentSlideData.mobileBackgroundImage
      ? currentSlideData.mobileBackgroundImage
      : currentSlideData.backgroundImage

  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm sm:text-base font-medium text-white/90 uppercase tracking-wider">
                  {currentSlideData.subtitle}
                </h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {currentSlideData.title}
                </h1>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                {currentSlideData.description}
              </p>

              <div className="pt-2 sm:pt-4">
                <Button asChild size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                  <Link href={currentSlideData.buttonLink}>{currentSlideData.buttonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on very small screens */}
      <div className="hidden sm:block">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20 h-10 w-10 md:h-12 md:w-12"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20 h-10 w-10 md:h-12 md:w-12"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Mobile Swipe Indicator */}
      {isMobile && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20">
          <p className="text-white/70 text-xs text-center">Deslize para navegar</p>
        </div>
      )}
    </div>
  )
}
