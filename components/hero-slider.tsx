"use client"
import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import AutoPlay from "embla-carousel-autoplay"
import { AnimatePresence, motion } from "framer-motion"

const heroSlides = [
  {
    title: "Certificação Digital ICP-Brasil",
    description: "Segurança e autenticidade para suas transações eletrônicas",
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1950&q=80",
    cta: { text: "Conheça Nossos Certificados", href: "/produtos" },
  },
  {
    title: "e-CPF e e-CNPJ",
    description: "Certificados digitais para pessoas físicas e jurídicas",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1950&q=80",
    cta: { text: "Escolha o Seu", href: "/produtos" },
  },
  {
    title: "Validação 100% Online",
    description: "Emita seu certificado digital de forma rápida e segura",
    image: "https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?auto=format&fit=crop&w=1950&q=80",
    cta: { text: "Agende sua Validação", href: "/agendar" },
  },
]

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoPlay({ delay: 7000, stopOnInteraction: false })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => emblaApi.off("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative w-full h-[70vh] overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {heroSlides.map((slide, index) => (
          <div className="flex-[0_0_100%] relative h-full" key={index}>
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
              className="brightness-50"
            />
            <AnimatePresence>
              {selectedIndex === index && (
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h2
                    className="font-secondary text-4xl md:text-5xl font-bold mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    className="text-xl mb-6 max-w-xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <Button asChild size="lg" variant="secondary">
                      <Link href={slide.cta.href}>{slide.cta.text}</Link>
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-white scale-100" : "bg-white/50 scale-75"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
