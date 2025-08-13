import type React from "react" // Added import for React

interface DashboardHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function DashboardHeader({ heading, text, children }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className="font-heading text-3xl font-bold tracking-tight">{heading}</h1>
        {text && <p className="font-sans text-lg text-muted-foreground">{text}</p>}
        <p className="text-sm text-muted-foreground mt-2 font-sans">
          Gerencie seus certificados digitais, acompanhe vendas e monitore o desempenho em tempo real. Todas as
          ferramentas que você precisa em um só lugar.
        </p>
      </div>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  )
}
