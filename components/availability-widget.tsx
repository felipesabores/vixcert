"use client"

import { useEffect } from "react"
import { Card } from "@/components/ui/card"

interface AvailabilityWidgetProps {
  calLink?: string
  inline?: boolean
  className?: string
}

export function AvailabilityWidget({
  calLink = "vixcert/validacao",
  inline = true,
  className = "",
}: AvailabilityWidgetProps) {
  useEffect(() => {
    // Load Cal.com inline widget script
    const script = document.createElement("script")
    script.src = "https://cal.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Card className={className}>
      <div
        data-cal-embed
        data-cal-link={calLink}
        data-cal-config={JSON.stringify({
          theme: "light",
          hideEventTypeDetails: false,
          layout: inline ? "month_view" : "column_view",
          styles: {
            branding: {
              brandColor: "#00295b",
            },
          },
        })}
      />
    </Card>
  )
}
