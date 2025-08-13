import { ProductBuyForm } from "@/components/product-buy-form"
import type { productSchema } from "@/lib/schema"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { z } from "zod"

export function ProductListThumbnail({
  product,
}: {
  product: z.infer<typeof productSchema>
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <Badge variant="secondary">{product.metadata?.tipo || "Certificado Digital"}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {product.metadata?.validade && <li>Validade: {product.metadata.validade}</li>}
          {product.metadata?.midia && <li>Mídia: {product.metadata.midia}</li>}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-2xl font-bold">{product.price.display_amount}</div>
        <ProductBuyForm priceId={product.price.id} />
      </CardFooter>
    </Card>
  )
}

export function ProductListThumbnailSkeleton() {
  return <Card className="h-[300px] animate-pulse bg-gray-200" />
}
