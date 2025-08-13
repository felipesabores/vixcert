import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Transaction {
  amount: number
  created: number
  type: string
}

export function RecentSales({ transactions }: { transactions: Transaction[] }) {
  return (
    <div className="space-y-8">
      {transactions.map((transaction, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Transação #{index + 1}</p>
            <p className="text-sm text-muted-foreground">{new Date(transaction.created * 1000).toLocaleDateString()}</p>
          </div>
          <div className="ml-auto font-medium">
            {transaction.amount.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
