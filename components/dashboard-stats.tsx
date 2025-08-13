import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react"

interface Transaction {
  amount: number
  created: number
  type: string
}

interface DashboardStatsProps {
  balance: number
  recentTransactions: Transaction[]
}

export function DashboardStats({ balance, recentTransactions }: DashboardStatsProps) {
  const totalSales = recentTransactions.reduce((acc, transaction) => acc + transaction.amount, 0)
  const averageTransactionValue = totalSales / recentTransactions.length

  const stats = [
    {
      title: "Saldo Total",
      value: balance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      icon: DollarSign,
      description: "Saldo disponível na sua conta Stripe",
    },
    {
      title: "Vendas Recentes",
      value: recentTransactions.length.toString(),
      icon: ShoppingCart,
      description: "Nos últimos 5 dias",
    },
    {
      title: "Valor Médio",
      value: averageTransactionValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      icon: Users,
      description: "Por transação",
    },
    {
      title: "Total de Vendas",
      value: totalSales.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      icon: TrendingUp,
      description: "Nos últimos 5 dias",
    },
  ]

  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-heading text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="font-sans text-2xl font-bold">{stat.value}</div>
            <p className="font-sans text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
