"use server"

import { stripe } from "@/lib/stripe"
import { redirect } from "next/navigation"

export async function createCheckoutSession(productId: string, priceId: string) {
  try {
    console.log("Creating checkout session for:", { productId, priceId })

    if (!priceId || priceId.trim() === "") {
      throw new Error("Price ID is required and cannot be empty")
    }

    // Verify the price exists
    const price = await stripe.prices.retrieve(priceId)
    if (!price) {
      throw new Error("Price not found")
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "pix"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/cancel`,
      metadata: {
        productId,
      },
    })

    if (!session.url) {
      throw new Error("Failed to create checkout session")
    }

    redirect(session.url)
  } catch (error) {
    console.error("Error creating checkout session:", error)
    throw error
  }
}

export async function scheduleAppointment(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const date = formData.get("date") as string
  const time = formData.get("time") as string
  const certificateType = formData.get("certificateType") as string

  // Simulate appointment scheduling
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log("Appointment scheduled:", {
    name,
    email,
    phone,
    date,
    time,
    certificateType,
  })

  redirect("/agendar/sucesso")
}
