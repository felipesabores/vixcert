import { getProducts } from "@/lib/products"
import { ProductGrid } from "@/components/product-grid"

export const metadata = {
  title: "Certificados Digitais - Vix Cert",
  description: "Explore nossa gama de certificados digitais para todas as necessidades do seu negócio.",
}

export default async function CertificadosPage() {
  const productsResult = await getProducts({ limit: 100 })

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Certificados Digitais</h1>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        Descubra a solução ideal para garantir a segurança e autenticidade das suas transações digitais. Oferecemos uma
        variedade de certificados homologados ICP-Brasil para atender às necessidades específicas da sua empresa ou
        atuação profissional.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-green-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Pessoa Física</h2>
          <p className="mb-4 text-gray-700">
            Certificados digitais para pessoas físicas, profissionais liberais e servidores públicos. Ideal para
            declaração de imposto de renda, assinatura de documentos e acesso a serviços governamentais.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>e-CPF A1 (arquivo digital)</li>
            <li>e-CPF A3 (token ou cartão)</li>
            <li>e-CPF para profissionais</li>
          </ul>
        </div>

        <div className="bg-orange-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-secondary">Pessoa Jurídica</h2>
          <p className="mb-4 text-gray-700">
            Certificados digitais para empresas de todos os portes. Essencial para emissão de notas fiscais, acesso a
            portais governamentais e assinatura de documentos corporativos.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>e-CNPJ A1 (arquivo digital)</li>
            <li>e-CNPJ A3 (token ou cartão)</li>
            <li>NF-e (Nota Fiscal Eletrônica)</li>
          </ul>
        </div>
      </div>

      <ProductGrid products={productsResult.data} />
    </div>
  )
}
