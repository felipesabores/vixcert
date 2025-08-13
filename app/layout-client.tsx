"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"
import { AuthProvider } from "@/lib/auth-context"
import { usePathname } from "next/navigation"

export default function ClientRootLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/login"

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AuthProvider>
        <div className="relative flex min-h-screen flex-col">
          {!isLoginPage && <SiteHeader />}
          <main className="flex-1">{children}</main>
          {!isLoginPage && <SiteFooter />}
        </div>
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  )
}
