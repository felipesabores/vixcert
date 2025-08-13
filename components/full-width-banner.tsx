"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FullWidthBannerProps {
  imageUrl: string
  alt: string
  ctaLink: string
  ctaText: string
}

export function FullWidthBanner({ imageUrl, alt, ctaLink, ctaText }: FullWidthBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative w-full bg-gray-100">
      {/* Banner Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div className="relative w-full h-full">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={alt}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-0 right-0 flex justify-center">
        <Button
          asChild
          size="sm"
          className="bg-primary hover:bg-primary/90 text-white sm:text-base md:text-lg sm:py-2 md:py-3 sm:px-4 md:px-6"
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </div>
  )
}
