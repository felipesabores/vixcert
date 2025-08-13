"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/lib/auth-context"
import { User, Menu, X } from "lucide-react"

export function SiteHeader() {
  const { isLoggedIn } = useAuth()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: "/certificados", label: "Certificados" },
    { href: "/contador", label: "Sou Contador" },
    { href: "/ar", label: "Sou AR" },
    { href: "/solucoes", label: "Soluções" },
    { href: "/sobre", label: "Sobre nós" },
    { href: "/suporte", label: "Suporte" },
    { href: "/blog", label: "Blog" },
    { href: "/trabalhe-conosco", label: "Trabalhe Conosco" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo1-jQyILw2mrT504gMUUSulxIFcJSK2MN.png"
            alt="Vix Cert Logo"
            width={180}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-primary">
              {item.label}
            </Link>
          ))}
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-full">
            <Link href="/comprar">Comprar</Link>
          </Button>
        </nav>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="my-4" />
              <Button
                className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-full"
                onClick={() => {
                  setIsMenuOpen(false)
                  router.push("/comprar")
                }}
              >
                Comprar
              </Button>
              {isLoggedIn && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsMenuOpen(false)
                    router.push("/admin")
                  }}
                  className="w-full justify-start mt-4"
                >
                  <User className="h-4 w-4 mr-2" />
                  <span>Dashboard</span>
                </Button>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
