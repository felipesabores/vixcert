import { getProducts } from "@/lib/products"
import { ProductGrid } from "@/components/product-grid"

export const metadata = {
  title: "Produtos - Vix Cert",
  description: "Explore nossa gama de certificados digitais para todas as necessidades do seu negócio.",
}

export default async function ProductsPage() {
  const products = await getProducts({ limit: 100 })

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Nossos Certificados Digitais</h1>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        Descubra a solução ideal para garantir a segurança e autenticidade das suas transações digitais. Oferecemos uma
        variedade de certificados homologados ICP-Brasil para atender às necessidades específicas da sua empresa ou
        atuação profissional.
      </p>
      <ProductGrid products={products.data} />
    </div>
  )
}
