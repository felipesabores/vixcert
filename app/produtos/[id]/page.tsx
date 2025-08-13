import { getProductById } from "@/lib/products"
import { ProductDetails } from "@/components/product-details"
import { ProductBuyForm } from "@/components/product-buy-form"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Shield, Award, Clock } from "lucide-react"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const product = await getProductById(params.id)
    if (!product) {
      return {
        title: "Produto não encontrado",
      }
    }
    return {
      title: `${product.name} - Vix Cert`,
      description: product.description || "Certificado digital da Vix Cert",
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "Erro ao carregar produto",
    }
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  let product
  try {
    product = await getProductById(params.id)

    if (!product) {
      notFound()
    }
  } catch (error) {
    console.error("Error in ProductPage:", error)
    throw error
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <ProductDetails product={product} />
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-primary">Investimento</h2>
              <div className="text-4xl font-bold mb-6 text-secondary">{product.price.display_amount}</div>
              <ProductBuyForm priceId={product.price.id} />
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-primary">Benefícios</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-secondary mr-3 mt-1" />
                  <span>Segurança e autenticidade garantidas pela ICP-Brasil</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-secondary mr-3 mt-1" />
                  <span>Validade jurídica em todo território nacional</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-secondary mr-3 mt-1" />
                  <span>Emissão rápida e processo simplificado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
