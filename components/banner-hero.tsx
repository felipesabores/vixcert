"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const banners = [
  {
    id: 1,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/POST%2003%20%281%29-3Rwknfa58axOp1l6zYT4YfvWbnsgVk.png",
    alt: "Certificado digital: atendimento ágil e humanizado",
    ctaLink: "/contato",
    ctaText: "Agendar visita",
  },
  {
    id: 2,
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/POST%2001-imHWQn0jdAZd9FTESJZ8Lp1HhjpEtp.png",
    alt: "Faça seu certificado digital sem sair de casa",
    ctaLink: "/agendar",
    ctaText: "Agendar validação",
  },
]

export function BannerHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
      }, 8000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
  }

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length)
  }

  return (
    <div ref={containerRef} className="relative w-full bg-gray-100">
      {/* Banner Images */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={banners[currentIndex].imageUrl || "/placeholder.svg"}
                alt={banners[currentIndex].alt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Hidden on small screens */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-black/20 text-white hover:bg-black/40 pointer-events-auto hidden sm:flex"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-black/20 text-white hover:bg-black/40 pointer-events-auto hidden sm:flex"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </Button>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-0 right-0 flex justify-center">
        <Button
          asChild
          size="sm"
          className="bg-primary hover:bg-primary/90 text-white sm:text-base md:text-lg sm:py-2 md:py-3 sm:px-4 md:px-6"
        >
          <Link href={banners[currentIndex].ctaLink}>{banners[currentIndex].ctaText}</Link>
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-1 sm:bottom-2 md:bottom-3 left-0 right-0">
        <div className="flex justify-center space-x-1 sm:space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white scale-100" : "bg-white/50 scale-75"
              }`}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentIndex(index)
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Touch swipe area for mobile */}
      <div
        className="absolute inset-0 sm:hidden"
        onTouchStart={(e) => {
          const touchStartX = e.touches[0].clientX
          const handleTouchEnd = (e: TouchEvent) => {
            const touchEndX = e.changedTouches[0].clientX
            const diff = touchStartX - touchEndX
            if (diff > 50) {
              // Swipe left
              goToNext()
            } else if (diff < -50) {
              // Swipe right
              goToPrevious()
            }
            document.removeEventListener("touchend", handleTouchEnd)
          }
          document.addEventListener("touchend", handleTouchEnd)
        }}
      />
    </div>
  )
}
