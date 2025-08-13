import { ProductListThumbnail } from "@/components/product-list-thumbnail"
import type { productListSchema } from "@/lib/schema"
import type { z } from "zod"

export function ProductList({
  list,
}: {
  list: z.infer<typeof productListSchema>
}) {
  return (
    <div id="produtos" className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Nossos Certificados Digitais</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {list.data.map((product) => (
          <ProductListThumbnail key={product.id} product={product} />
        ))}
      </div>
      {list.data.length === 0 && (
        <div className="text-center text-gray-600">
          <p>Nenhum certificado disponível no momento.</p>
        </div>
      )}
    </div>
  )
}
