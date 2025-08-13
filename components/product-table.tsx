"use client"

import { useState } from "react"
import Link from "next/link"
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  type SortingState,
  getSortedRowModel,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { productSchema } from "@/lib/schema"
import type { z } from "zod"
import { Button } from "@/components/ui/button"
import { ProductFormDialog } from "@/components/product-form-dialog"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { deleteProduct } from "@/lib/actions"
import { toast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

type Product = z.infer<typeof productSchema>

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "price.display_amount",
    header: "Preço",
    cell: ({ row }) => {
      const amount = row.original.price.display_amount
      return amount === "N/A" ? "Preço não disponível" : amount
    },
  },
  {
    accessorKey: "metadata.tipo",
    header: "Tipo",
    cell: ({ row }) => {
      const tipo = row.original.metadata?.tipo
      return tipo ? <Badge>{tipo}</Badge> : "N/A"
    },
  },
  {
    accessorKey: "metadata.validade",
    header: "Validade",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original
      return (
        <ProductFormDialog product={product} trigger={<Button variant="outline">Editar</Button>} onClose={() => {}} />
      )
    },
  },
]

interface ProductTableProps {
  products: Product[]
}

export function ProductTable({ products }: ProductTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  const handleDeleteProduct = async () => {
    if (selectedProduct) {
      const result = await deleteProduct(selectedProduct.id)
      if (result.success) {
        toast({
          title: "Produto excluído",
          description: result.message,
        })
        setIsDeleteDialogOpen(false)
        setSelectedProduct(null)
        // Refresh the product list (you might need to implement this)
      } else {
        toast({
          title: "Erro",
          description: result.message,
          variant: "destructive",
        })
      }
    }
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => setSelectedProduct(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Nenhum resultado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-[700px]">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProduct.name}</DialogTitle>
                <DialogDescription>Detalhes e ações para o produto selecionado.</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="font-semibold mb-2">Detalhes do Produto</h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">ID: </span>
                      {selectedProduct.id}
                    </p>
                    <p>
                      <span className="font-medium">Descrição: </span>
                      {selectedProduct.description || "N/A"}
                    </p>
                    <p>
                      <span className="font-medium">Preço: </span>
                      {selectedProduct.price.display_amount}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Metadados</h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Tipo: </span>
                      {selectedProduct.metadata?.tipo || "N/A"}
                    </p>
                    <p>
                      <span className="font-medium">Validade: </span>
                      {selectedProduct.metadata?.validade || "N/A"}
                    </p>
                    <p>
                      <span className="font-medium">Mídia: </span>
                      {selectedProduct.metadata?.midia || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <ProductFormDialog
                  product={selectedProduct}
                  trigger={<Button variant="outline">Editar</Button>}
                  onClose={() => setSelectedProduct(null)}
                />
                <Button asChild>
                  <Link href={`/produtos/${selectedProduct.id}`}>Ver Página do Produto</Link>
                </Button>
                <Button variant="destructive" onClick={() => setIsDeleteDialogOpen(true)}>
                  Excluir
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Exclusão</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir o produto "{selectedProduct?.name}"? Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={handleDeleteProduct}>
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
