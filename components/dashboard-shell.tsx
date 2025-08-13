import { cn } from "@/lib/utils"
import type React from "react"

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardShell({ children, className, ...props }: DashboardShellProps) {
  return (
    <div className={cn("container space-y-8 py-8", className)} {...props}>
      {children}
    </div>
  )
}
