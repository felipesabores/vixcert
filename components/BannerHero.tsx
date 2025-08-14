"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface BannerSlide {
  id: number
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonLink: string
  imageDesktop: string
  imageMobile: string
  backgroundColor: string
}

const slides: BannerSlide[] = [
  {
    id: 1,
    title: "Certificado Digital VixCert",
    subtitle: "Segurança e Praticidade",
    description:
      "Obtenha seu certificado digital com a máxima segurança e praticidade. Processo 100% online com suporte especializado.",
    buttonText: "Comprar Agora",
    buttonLink: "/produtos",
    imageDesktop: "/placeholder.svg?height=600&width=800",
    imageMobile: "/placeholder.svg?height=400&width=600",
    backgroundColor: "bg-gradient-to-r from-blue-600 to-blue-800",
  },
  {
    id: 2,
    title: "e-CPF e e-CNPJ",
    subtitle: "Para Pessoa Física e Jurídica",
    description:
      "Certificados A1 e A3 com diferentes períodos de validade. Escolha a melhor opção para suas necessidades.",
    buttonText: "Ver Produtos",
    buttonLink: "/certificados",
    imageDesktop: "/placeholder.svg?height=600&width=800",
    imageMobile: "/placeholder.svg?height=400&width=600",
    backgroundColor: "bg-gradient-to-r from-orange-500 to-orange-700",
  },
  {
    id: 3,
    title: "Suporte Especializado",
    subtitle: "Atendimento Personalizado",
    description: "Nossa equipe está pronta para ajudar você em todo o processo. Agende seu atendimento presencial.",
    buttonText: "Agendar",
    buttonLink: "/agendar",
    imageDesktop: "/placeholder.svg?height=600&width=800",
    imageMobile: "/placeholder.svg?height=400&width=600",
    backgroundColor: "bg-gradient-to-r from-green-600 to-green-800",
  },
]

export default function BannerHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

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

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background with gradient */}
      <div
        className={`absolute inset-0 ${currentSlideData.backgroundColor} transition-all duration-1000 ease-in-out`}
      />

      {/* Main content container */}
      <div
        className="relative h-full flex items-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text content */}
            <div className="text-white space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="space-y-2 sm:space-y-4">
                <h2 className="text-sm sm:text-base font-medium text-white/80 uppercase tracking-wider">
                  {currentSlideData.subtitle}
                </h2>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {currentSlideData.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
                  {currentSlideData.description}
                </p>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => (window.location.href = currentSlideData.buttonLink)}
                >
                  {currentSlideData.buttonText}
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] flex items-center justify-center">
              <div className="relative w-full h-full max-w-md lg:max-w-lg">
                {/* Desktop image */}
                <Image
                  src={currentSlideData.imageDesktop || "/placeholder.svg"}
                  alt={currentSlideData.title}
                  fill
                  className="hidden sm:block object-contain transition-all duration-1000 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                {/* Mobile image */}
                <Image
                  src={currentSlideData.imageMobile || "/placeholder.svg"}
                  alt={currentSlideData.title}
                  fill
                  className="block sm:hidden object-contain transition-all duration-1000 ease-in-out"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows - hidden on very small screens */}
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0 w-10 h-10 md:w-12 md:h-12"
          onClick={prevSlide}
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0 w-10 h-10 md:w-12 md:h-12"
          onClick={nextSlide}
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
        </Button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile swipe indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 sm:hidden">
        <p className="text-white/60 text-xs">Deslize para navegar</p>
      </div>
    </div>
  )
}
