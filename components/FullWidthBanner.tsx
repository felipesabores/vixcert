"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface BannerItem {
  id: string
  title: string
  subtitle?: string
  description: string
  buttonText: string
  buttonLink: string
  imageUrl: string
  mobileImageUrl?: string
  backgroundColor?: string
  textColor?: string
  buttonColor?: string
}

interface FullWidthBannerProps {
  items: BannerItem[]
  className?: string
}

export function FullWidthBanner({ items, className = "" }: FullWidthBannerProps) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className={`w-full space-y-4 sm:space-y-6 lg:space-y-8 ${className}`}>
      {items.map((item, index) => (
        <Card
          key={item.id}
          className="w-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <CardContent className="p-0">
            <div
              className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
              style={{ backgroundColor: item.backgroundColor || "#f8fafc" }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                {/* Desktop Image */}
                <div className="hidden sm:block w-full h-full">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={index === 0}
                  />
                </div>

                {/* Mobile Image */}
                <div className="block sm:hidden w-full h-full">
                  <Image
                    src={item.mobileImageUrl || item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent">
                <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
                  <div className="max-w-xl lg:max-w-2xl">
                    <h2
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight"
                      style={{ color: item.textColor || "#ffffff" }}
                    >
                      {item.title}
                    </h2>

                    {item.subtitle && (
                      <h3
                        className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 opacity-90"
                        style={{ color: item.textColor || "#e0f2fe" }}
                      >
                        {item.subtitle}
                      </h3>
                    )}

                    <p
                      className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed opacity-90 max-w-lg"
                      style={{ color: item.textColor || "#ffffff" }}
                    >
                      {item.description}
                    </p>

                    <Button
                      asChild
                      size="lg"
                      className={`w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                        item.buttonColor || "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      <Link href={item.buttonLink}>{item.buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-20">
                <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-full"></div>
              </div>
              <div className="absolute bottom-4 right-8 sm:bottom-6 sm:right-12 opacity-10">
                <div className="w-24 h-24 sm:w-32 sm:h-32 border border-white rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
