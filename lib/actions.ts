"use server"

import { stripe } from "@/lib/stripe"
import { revalidatePath } from "next/cache"
import { headers } from "next/headers"

export async function createProduct(data: {
  name: string
  description: string
  price: string
  tipo: string
  validade: string
  midia?: string
  recurring?: boolean
}) {
  try {
    const product = await stripe.products.create({
      name: data.name,
      description: data.description,
      metadata: {
        tipo: data.tipo,
        validade: data.validade,
        midia: data.midia || "",
      },
    })

    const priceData = {
      product: product.id,
      unit_amount: Number(data.price),
      currency: "brl",
    }

    if (data.recurring) {
      await stripe.prices.create({
        ...priceData,
        recurring: { interval: "month" },
      })
    } else {
      await stripe.prices.create(priceData)
    }

    revalidatePath("/admin")
    return { success: true }
  } catch (error) {
    console.error("Error creating product:", error)
    throw error
  }
}

export async function updateProduct(
  productId: string,
  data: {
    name: string
    description: string
    price: string
    tipo: string
    validade: string
    midia?: string
    recurring?: boolean
  },
) {
  try {
    // Update product details
    await stripe.products.update(productId, {
      name: data.name,
      description: data.description,
      metadata: {
        tipo: data.tipo,
        validade: data.validade,
        midia: data.midia || "",
      },
    })

    // Get current active price
    const prices = await stripe.prices.list({
      product: productId,
      limit: 1,
      active: true,
    })
    const currentPrice = prices.data[0]

    // Create new price if amount is different
    if (currentPrice && currentPrice.unit_amount !== Number(data.price)) {
      // Create new price
      const priceData = {
        product: productId,
        unit_amount: Number(data.price),
        currency: "brl",
      }

      const newPrice = data.recurring
        ? await stripe.prices.create({
            ...priceData,
            recurring: { interval: "month" },
          })
        : await stripe.prices.create(priceData)

      // Update product with new default price
      await stripe.products.update(productId, {
        default_price: newPrice.id,
      })

      // Deactivate old price
      await stripe.prices.update(currentPrice.id, { active: false })
    }

    revalidatePath("/admin")
    return { success: true }
  } catch (error) {
    console.error("Error updating product:", error)
    throw error
  }
}

export async function deleteProduct(productId: string) {
  try {
    await stripe.products.update(productId, { active: false })
    revalidatePath("/admin")
    return { success: true, message: "Produto excluído com sucesso." }
  } catch (error) {
    console.error("Error deleting product:", error)
    return { success: false, message: "Erro ao excluir o produto. Por favor, tente novamente." }
  }
}

export async function createCheckoutSession(priceId: string) {
  const headersList = headers()
  const host = headersList.get("host")
  const protocol = process?.env.NODE_ENV === "production" ? "https" : "http"
  const baseUrl = `${protocol}://${host}`

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/compra/confirmacao?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
    })

    if (!session.url) {
      throw new Error("Failed to create checkout session: No URL returned")
    }

    return { url: session.url }
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return { error: error instanceof Error ? error.message : "An unknown error occurred" }
  }
}

export async function createCustomer(data: {
  name: string
  email: string
  phone: string
}) {
  try {
    const customer = await stripe.customers.create({
      name: data.name,
      email: data.email,
      phone: data.phone,
    })

    revalidatePath("/admin")
    return { success: true, customerId: customer.id }
  } catch (error) {
    console.error("Error creating customer:", error)
    throw error
  }
}

export async function updateCustomer(
  customerId: string,
  data: {
    name: string
    email: string
    phone: string
  },
) {
  try {
    await stripe.customers.update(customerId, {
      name: data.name,
      email: data.email,
      phone: data.phone,
    })

    revalidatePath("/admin")
    return { success: true }
  } catch (error) {
    console.error("Error updating customer:", error)
    throw error
  }
}

export async function deleteCustomer(customerId: string) {
  try {
    await stripe.customers.del(customerId)
    revalidatePath("/admin")
    return { success: true, message: "Cliente excluído com sucesso." }
  } catch (error) {
    console.error("Error deleting customer:", error)
    return { success: false, message: "Erro ao excluir o cliente. Por favor, tente novamente." }
  }
}
