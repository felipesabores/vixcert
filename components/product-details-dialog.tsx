import type React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import type { productSchema } from "@/lib/schema"
import type { z } from "zod"

type Product = z.infer<typeof productSchema>

interface ProductDetailsDialogProps {
  product: Product
  children: React.ReactNode
}

export function ProductDetailsDialog({ product, children }: ProductDetailsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex-1 min-w-[calc(50%-8px)]">
            <h3 className="font-semibold mb-2">Detalhes do Produto</h3>
            <div className="grid gap-2">
              <div>
                <span className="font-medium">ID: </span>
                {product.id}
              </div>
              <div>
                <span className="font-medium">Descrição: </span>
                {product.description}
              </div>
              <div>
                <span className="font-medium">Preço: </span>
                {product.price.display_amount}
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[calc(50%-8px)]">
            <h3 className="font-semibold mb-2">Metadados</h3>
            <div className="grid gap-2">
              <div>
                <span className="font-medium">Tipo: </span>
                {product.metadata?.tipo || "N/A"}
              </div>
              <div>
                <span className="font-medium">Validade: </span>
                {product.metadata?.validade || "N/A"}
              </div>
              <div>
                <span className="font-medium">Mídia: </span>
                {product.metadata?.midia || "N/A"}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
