import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Award, Clock } from "lucide-react"
import type { productSchema } from "@/lib/schema"
import type { z } from "zod"
import Link from "next/link"

type Product = z.infer<typeof productSchema>

export function ProductGrid({ products }: { products: Product[] }) {
  // Filter to show only certificate products
  const certificateProducts = products.filter(
    (product) =>
      product.metadata?.tipo?.toLowerCase().includes("certificado") ||
      product.metadata?.tipo?.toLowerCase().includes("e-cpf") ||
      product.metadata?.tipo?.toLowerCase().includes("e-cnpj"),
  )

  return (
    <section className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificateProducts.map((product) => (
          <Card key={product.id} className="flex flex-col border-0 shadow-lg rounded-xl overflow-hidden">
            <div
              className={`h-2 w-full ${product.metadata?.tipo?.toLowerCase().includes("e-cpf") ? "bg-green-500" : "bg-secondary"}`}
            ></div>
            <CardContent className="flex-1 p-6">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className="text-sm">
                  {product.metadata?.tipo || "Certificado Digital"}
                </Badge>
                {product.metadata?.validade && (
                  <Badge variant="outline" className="text-sm">
                    {product.metadata.validade}
                  </Badge>
                )}
              </div>

              <Link href={`/produtos/${product.id}`} className="block mb-4">
                <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{product.name}</h3>
              </Link>

              <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>

              <div className="space-y-2 mb-4">
                {product.metadata?.midia && (
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span className="text-sm">Mídia: {product.metadata.midia}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm">Homologado ICP-Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">Emissão rápida</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-4 p-6 border-t bg-gray-50">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">A partir de</span>
                <span className="text-2xl font-bold text-primary">{product.price.display_amount}</span>
              </div>
              <Button
                asChild
                className={`${product.metadata?.tipo?.toLowerCase().includes("e-cpf") ? "bg-green-500 hover:bg-green-600" : "bg-secondary hover:bg-secondary/90"} text-white`}
              >
                <Link href={`/produtos/${product.id}`}>Ver detalhes</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
