"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createCustomer, updateCustomer } from "@/lib/actions"
import { toast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"

interface Customer {
  id: string
  name: string
  email: string
  phone: string
}

interface CustomerFormDialogProps {
  customer?: Customer
  trigger: React.ReactNode
  onClose: () => void
}

export function CustomerFormDialog({ customer, trigger, onClose }: CustomerFormDialogProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  useEffect(() => {
    if (customer) {
      setFormData({
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
      })
    }
  }, [customer])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (customer) {
        await updateCustomer(customer.id, formData)
        toast({
          title: "Cliente atualizado",
          description: "As alterações foram salvas com sucesso.",
        })
      } else {
        await createCustomer(formData)
        toast({
          title: "Cliente criado",
          description: "O novo cliente foi adicionado com sucesso.",
        })
      }
      setOpen(false)
      onClose()
      router.refresh()
    } catch (error) {
      console.error("Error updating/creating customer:", error)
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Ocorreu um erro ao salvar o cliente. Tente novamente.",
        variant: "destructive",
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span onClick={() => setOpen(true)}>{trigger}</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{customer ? "Editar Cliente" : "Criar Novo Cliente"}</DialogTitle>
          <DialogDescription>
            {customer ? "Faça alterações nos detalhes do cliente aqui." : "Preencha os detalhes do novo cliente."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">{customer ? "Salvar Alterações" : "Criar Cliente"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
