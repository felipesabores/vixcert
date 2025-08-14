import { stripe } from "./stripe"

export interface Product {
  id: string
  name: string
  description: string | null
  images: string[]
  metadata: {
    tipo?: string
    modelo?: string
    validade?: string
    midia?: string
    preco_original?: string
  }
  default_price: {
    id: string
    unit_amount: number
    currency: string
  } | null
}

export async function getProducts(): Promise<Product[]> {
  try {
    const products = await stripe.products.list({
      active: true,
      expand: ["data.default_price"],
      limit: 100,
    })

    return products.data.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      images: product.images,
      metadata: product.metadata,
      default_price: product.default_price as any,
    }))
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function getProduct(productId: string): Promise<Product | null> {
  try {
    const product = await stripe.products.retrieve(productId, {
      expand: ["default_price"],
    })

    if (!product.active) {
      return null
    }

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      images: product.images,
      metadata: product.metadata,
      default_price: product.default_price as any,
    }
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

export async function getProductsByType(tipo: "PF" | "PJ"): Promise<Product[]> {
  const products = await getProducts()
  return products.filter((product) => product.metadata.tipo === tipo)
}
