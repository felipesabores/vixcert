"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import type React from "react" // Added import for React

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      toast({
        title: "Acesso negado",
        description: "Faça login para acessar a área administrativa.",
        variant: "destructive",
      })
      router.push("/login")
    }
  }, [router, toast])

  return <>{children}</>
}
