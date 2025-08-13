import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { headers } from "next/headers"

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("Stripe-Signature") as string

  let event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret!)
  } catch (err) {
    return NextResponse.json(
      { error: `Webhook Error: ${err instanceof Error ? err.message : "Unknown Error"}` },
      { status: 400 },
    )
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object
      // Handle successful checkout
      console.log("Payment successful:", session)
      // Here you can add logic to update your database, send confirmation emails, etc.
      break
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object
      console.log("PaymentIntent succeeded:", paymentIntent)
      // Handle successful payment
      break
    case "payment_intent.payment_failed":
      const failedPaymentIntent = event.data.object
      console.log("PaymentIntent failed:", failedPaymentIntent)
      // Handle failed payment
      break
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
