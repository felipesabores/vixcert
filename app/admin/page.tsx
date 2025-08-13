import { getProducts } from "@/lib/products"
import { getTransactions } from "@/lib/transactions"
import { getStripeBalance, getRecentTransactions, getMonthlyRevenue } from "@/lib/stripe"
import { getCustomers } from "@/lib/customers"
import { ProductTable } from "@/components/product-table"
import { TransactionTable } from "@/components/transaction-table"
import { CustomerTable } from "@/components/customer-table"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardStats } from "@/components/dashboard-stats"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductFormDialog } from "@/components/product-form-dialog"
import { CustomerFormDialog } from "@/components/customer-form-dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentSales } from "@/components/recent-sales"
import { AuthGuard } from "@/components/auth-guard"

export const metadata = {
  title: "Dashboard de Administração",
  description: "Gerencie seus produtos, clientes e visualize estatísticas de vendas.",
}

export default async function AdminDashboard() {
  const products = await getProducts({ limit: 100 })
  const transactions = await getTransactions({ limit: 100 })
  const customers = await getCustomers({ limit: 100 })
  const balance = await getStripeBalance()
  const recentTransactions = await getRecentTransactions(5)
  const monthlyRevenue = await getMonthlyRevenue()

  return (
    <AuthGuard>
      <DashboardShell>
        <DashboardHeader
          heading="Dashboard de Administração"
          text="Gerencie seus produtos, clientes e visualize estatísticas de vendas."
        >
          <ProductFormDialog />
        </DashboardHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardStats balance={balance} recentTransactions={recentTransactions} />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle className="font-heading">Visão Geral</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview data={monthlyRevenue} />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle className="font-heading">Vendas Recentes</CardTitle>
              <CardDescription className="font-sans">
                Você fez {recentTransactions.length} vendas este mês.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSales transactions={recentTransactions} />
            </CardContent>
          </Card>
        </div>
        <Tabs defaultValue="products" className="space-y-4">
          <TabsList>
            <TabsTrigger value="products">Produtos</TabsTrigger>
            <TabsTrigger value="transactions">Transações</TabsTrigger>
            <TabsTrigger value="customers">Clientes</TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="space-y-4">
            <div className="flex justify-end mb-4">
              <ProductFormDialog />
            </div>
            <ProductTable products={products.data} />
          </TabsContent>
          <TabsContent value="transactions" className="space-y-4">
            <TransactionTable transactions={transactions.data} />
          </TabsContent>
          <TabsContent value="customers" className="space-y-4">
            <div className="flex justify-end mb-4">
              <CustomerFormDialog />
            </div>
            <CustomerTable customers={customers.data} />
          </TabsContent>
        </Tabs>
      </DashboardShell>
    </AuthGuard>
  )
}
