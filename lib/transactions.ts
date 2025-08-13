import { stripe } from "@/lib/stripe"
import type Stripe from "stripe"

export async function getTransactions(
  options: Pick<Stripe.PaymentIntentListParams, "limit"> = {
    limit: 10,
  },
) {
  const paymentIntents = await stripe.paymentIntents.list({
    ...options,
    expand: ["data.customer"],
  })

  return {
    data: paymentIntents.data.map((intent) => ({
      id: intent.id,
      amount: intent.amount,
      status: intent.status,
      created: intent.created,
      customer: {
        name: (intent.customer as Stripe.Customer)?.name || "N/A",
        email: (intent.customer as Stripe.Customer)?.email || "N/A",
      },
    })),
    has_more: paymentIntents.has_more,
  }
}
