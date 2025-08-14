import { stripe } from "@/lib/stripe"
import { productSchema } from "@/lib/schema"
import type Stripe from "stripe"

export async function getProducts(options: Pick<Stripe.ProductListParams, "limit"> = { limit: 10 }) {
  const products = await stripe.products.list({
    ...options,
    expand: ["data.default_price"],
  })

  return {
    data: products.data.map((product) => {
      const price = product.default_price as Stripe.Price
      let amount: number | null = null
      let displayAmount: string | null = null

      if (price && typeof price.unit_amount === "number") {
        amount = price.unit_amount / 100
        displayAmount = amount.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      }

      return productSchema.parse({
        id: product.id,
        name: product.name,
        description: product.description,
        images: product.images,
        price: {
          id: price?.id || null,
          amount,
          display_amount: displayAmount,
        },
        metadata: product.metadata,
      })
    }),
    has_more: products.has_more,
  }
}

export async function getProductById(productId: string) {
  try {
    const product = await stripe.products.retrieve(productId, {
      expand: ["default_price"],
    })

    if (!product) {
      return null
    }

    const price = product.default_price as Stripe.Price
    let amount: number | null = null
    let displayAmount: string | null = null

    if (price && typeof price.unit_amount === "number") {
      amount = price.unit_amount / 100
      displayAmount = amount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    }

    const parsedProduct = productSchema.parse({
      id: product.id,
      name: product.name,
      description: product.description,
      images: product.images,
      price: {
        id: price?.id || null,
        amount,
        display_amount: displayAmount,
      },
      metadata: product.metadata,
    })

    return parsedProduct
  } catch (error) {
    console.error("Error fetching product:")
    console.error(error)
    throw error
  }
}
