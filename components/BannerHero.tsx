"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Banner {
  id: string
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonLink: string
  imageUrl: string
  mobileImageUrl?: string
  backgroundColor?: string
}

interface BannerHeroProps {
  banners: Banner[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function BannerHero({ banners, autoPlay = true, autoPlayInterval = 5000 }: BannerHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }, [banners.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }, [banners.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !isClient) return

    const interval = setInterval(nextSlide, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, nextSlide, isClient])

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

  if (!isClient || banners.length === 0) {
    return (
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400">Carregando...</div>
        </div>
      </div>
    )
  }

  const currentBanner = banners[currentSlide]

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Banner Container */}
      <div
        className="relative w-full h-full transition-all duration-1000 ease-in-out"
        style={{ backgroundColor: currentBanner.backgroundColor || "#f3f4f6" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Desktop Image */}
          <div className="hidden sm:block w-full h-full">
            <Image
              src={currentBanner.imageUrl || "/placeholder.svg"}
              alt={currentBanner.title}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              sizes="100vw"
            />
          </div>

          {/* Mobile Image */}
          <div className="block sm:hidden w-full h-full">
            <Image
              src={currentBanner.mobileImageUrl || currentBanner.imageUrl}
              alt={currentBanner.title}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              sizes="100vw"
            />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
                {currentBanner.title}
              </h2>

              {currentBanner.subtitle && (
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4 text-blue-200">
                  {currentBanner.subtitle}
                </h3>
              )}

              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 lg:mb-8 leading-relaxed opacity-90">
                {currentBanner.description}
              </p>

              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <a href={currentBanner.buttonLink}>{currentBanner.buttonText}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on very small screens */}
      {banners.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 items-center justify-center group"
            aria-label="Banner anterior"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 items-center justify-center group"
            aria-label="Próximo banner"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {banners.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Mobile Swipe Indicator */}
      <div className="block sm:hidden absolute bottom-2 left-1/2 -translate-x-1/2 text-white/70 text-xs">
        Deslize para navegar
      </div>
    </div>
  )
}
