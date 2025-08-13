"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createProduct, updateProduct } from "@/lib/actions"
import type { productSchema } from "@/lib/schema"
import { toast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import type { z } from "zod"
import { Checkbox } from "@/components/ui/checkbox"

type Product = z.infer<typeof productSchema>

interface ProductFormDialogProps {
  product?: Product | null
}

// Helper function to format currency input
const formatCurrency = (value: string) => {
  // Remove all non-digit characters
  const numbers = value.replace(/\D/g, "")

  // Convert to number and divide by 100 to get decimal value
  const amount = Number(numbers) / 100

  // Format as BRL
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount)
}

// Helper function to parse currency string to number
const parseCurrency = (value: string) => {
  return Number(value.replace(/\D/g, ""))
}

export function ProductFormDialog({ product }: ProductFormDialogProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "0",
    tipo: "",
    validade: "",
    midia: "",
    recurring: false,
  })

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description || "",
        price: product.price.amount ? (product.price.amount * 100).toString() : "0",
        tipo: product.metadata?.tipo || "",
        validade: product.metadata?.validade || "",
        midia: product.metadata?.midia || "",
        recurring: false,
      })
    }
  }, [product])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const priceInCents = parseCurrency(formData.price)
      if (isNaN(priceInCents)) {
        throw new Error("Preço inválido")
      }

      const productData = {
        ...formData,
        price: priceInCents.toString(),
      }

      if (product) {
        await updateProduct(product.id, productData)
        toast({
          title: "Produto atualizado",
          description: "As alterações foram salvas com sucesso.",
        })
      } else {
        await createProduct(productData)
        toast({
          title: "Produto criado",
          description: "O novo produto foi adicionado com sucesso.",
        })
      }

      setOpen(false)
      router.refresh()
    } catch (error) {
      console.error("Error updating/creating product:", error)
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Ocorreu um erro ao salvar o produto. Tente novamente.",
        variant: "destructive",
      })
    }
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value)
    setFormData((prev) => ({
      ...prev,
      price: formatted,
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>{product ? "Editar Produto" : "Adicionar Novo Produto"}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{product ? "Editar Produto" : "Criar Novo Produto"}</DialogTitle>
          <DialogDescription>
            {product ? "Faça alterações nos detalhes do produto aqui." : "Preencha os detalhes do novo produto."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea id="description" name="description" value={formData.description} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Preço</Label>
            <Input id="price" name="price" value={formData.price} onChange={handlePriceChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tipo">Tipo</Label>
            <Input id="tipo" name="tipo" value={formData.tipo} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="validade">Validade</Label>
            <Input id="validade" name="validade" value={formData.validade} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="midia">Mídia</Label>
            <Input id="midia" name="midia" value={formData.midia} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="recurring"
                checked={formData.recurring}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, recurring: checked as boolean }))}
              />
              <Label htmlFor="recurring">Pagamento recorrente</Label>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">{product ? "Salvar Alterações" : "Criar Produto"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
