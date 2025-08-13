import { stripe } from "@/lib/stripe"
import type Stripe from "stripe"

export async function getCustomers(
  options: Pick<Stripe.CustomerListParams, "limit" | "starting_after"> & {
    offset?: number
    search?: string
  } = {
    limit: 10,
  },
) {
  const { limit, starting_after, offset, search } = options

  const stripeCustomers = await stripe.customers.list({
    ...options,
    expand: ["data.subscriptions"],
  })

  let filteredCustomers = stripeCustomers.data

  if (search) {
    const lowerSearch = search.toLowerCase()
    filteredCustomers = filteredCustomers.filter(
      (customer) =>
        customer.name?.toLowerCase().includes(lowerSearch) ||
        customer.email?.toLowerCase().includes(lowerSearch) ||
        customer.phone?.toLowerCase().includes(lowerSearch),
    )
  }

  if (offset) {
    filteredCustomers = filteredCustomers.slice(offset)
  }

  return {
    data: filteredCustomers.map((customer) => ({
      id: customer.id,
      name: customer.name || "",
      email: customer.email || "",
      phone: customer.phone || "",
      created: customer.created,
    })),
    has_more: stripeCustomers.has_more,
    starting_after: filteredCustomers[filteredCustomers.length - 1]?.id,
  }
}

export async function getCustomerById(customerId: string) {
  try {
    const customer = await stripe.customers.retrieve(customerId, {
      expand: ["subscriptions"],
    })

    if (!customer || customer.deleted) {
      throw new Error("Customer not found")
    }

    return {
      id: customer.id,
      name: customer.name || "",
      email: customer.email || "",
      phone: customer.phone || "",
      created: customer.created,
    }
  } catch (error) {
    console.error("Error fetching customer:", error)
    throw error
  }
}
