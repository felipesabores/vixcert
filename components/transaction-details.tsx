import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface TransactionDetailsProps {
  transaction: {
    id: string
    amount: number
    status: string
    created: number
    customer: {
      name: string
      email: string
    }
  }
}

export function TransactionDetails({ transaction }: TransactionDetailsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ver Detalhes</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detalhes da Transação</DialogTitle>
          <DialogDescription>Informações detalhadas sobre a transação {transaction.id}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">ID:</span>
            <span className="col-span-3">{transaction.id}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Valor:</span>
            <span className="col-span-3">
              {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(transaction.amount / 100)}
            </span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Status:</span>
            <span className="col-span-3">{transaction.status}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Data:</span>
            <span className="col-span-3">{new Date(transaction.created * 1000).toLocaleString("pt-BR")}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Cliente:</span>
            <span className="col-span-3">{transaction.customer.name}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Email:</span>
            <span className="col-span-3">{transaction.customer.email}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
