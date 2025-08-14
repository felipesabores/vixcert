import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set")
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
  typescript: true,
})

export async function getStripeBalance() {
  const balance = await stripe.balance.retrieve()
  return balance.available.reduce((acc, bal) => acc + bal.amount, 0) / 100
}

export async function getRecentTransactions(limit = 10) {
  const transactions = await stripe.balanceTransactions.list({ limit })
  return transactions.data.map((transaction) => ({
    amount: transaction.amount / 100,
    created: transaction.created,
    type: transaction.type,
  }))
}

export async function getMonthlyRevenue() {
  const endDate = new Date()
  const startDate = new Date(endDate.getFullYear(), endDate.getMonth() - 11, 1)

  const charges = await stripe.charges.list({
    created: { gte: Math.floor(startDate.getTime() / 1000) },
    limit: 100,
  })

  const monthlyRevenue = Array(12).fill(0)
  charges.data.forEach((charge) => {
    const chargeDate = new Date(charge.created * 1000)
    const monthIndex = chargeDate.getMonth()
    monthlyRevenue[monthIndex] += charge.amount / 100
  })

  return monthlyRevenue
}
