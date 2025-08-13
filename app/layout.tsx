import type React from "react"
import { cn } from "@/lib/utils"
import { Cairo, Inter } from "next/font/google"
import "./globals.css"
import ClientRootLayoutContent from "./layout-client"

const kiro = Cairo({
  subsets: ["latin"],
  variable: "--font-kiro",
  weight: ["300", "400", "500", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Vix Cert - Certificados Digitais",
  description: "Soluções de certificação digital confiáveis e seguras para sua empresa",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-31%20at%2022.10.07-5kqQGcVq7IsS13DgbQ5wYwozgoQHHJ.jpeg",
        type: "image/jpeg",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", kiro.variable, inter.variable)}>
        <ClientRootLayoutContent>{children}</ClientRootLayoutContent>
      </body>
    </html>
  )
}
