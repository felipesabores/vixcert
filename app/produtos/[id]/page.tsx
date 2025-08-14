import { getProductById } from "@/lib/products"
import { ProductBuyForm } from "@/components/product-buy-form"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Award, Clock, FileText, Users, Building } from "lucide-react"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  const isPersonaFisica =
    product.metadata?.tipo?.toLowerCase().includes("e-cpf") || product.metadata?.categoria?.toLowerCase().includes("pf")

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Details */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Badge variant="outline">
                {product.metadata?.tipo || product.metadata?.categoria || "Certificado Digital"}
              </Badge>
              {product.metadata?.validade && <Badge variant="secondary">{product.metadata.validade}</Badge>}
            </div>

            <h1 className="text-4xl font-bold">{product.name}</h1>

            <p className="text-xl text-gray-600">{product.description}</p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Características</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Segurança</h3>
                  <p className="text-sm text-gray-600">Criptografia de alta segurança</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Certificação</h3>
                  <p className="text-sm text-gray-600">Homologado ICP-Brasil</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Rapidez</h3>
                  <p className="text-sm text-gray-600">Emissão em até 24h</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                {isPersonaFisica ? (
                  <Users className="h-6 w-6 text-green-500" />
                ) : (
                  <Building className="h-6 w-6 text-secondary" />
                )}
                <div>
                  <h3 className="font-semibold">Tipo</h3>
                  <p className="text-sm text-gray-600">{isPersonaFisica ? "Pessoa Física" : "Pessoa Jurídica"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Usage */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Para que serve?</h2>
            <div className="space-y-2">
              {isPersonaFisica ? (
                <>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Declaração de Imposto de Renda</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Assinatura de documentos digitais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Acesso a serviços governamentais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Procurações eletrônicas</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Emissão de Notas Fiscais Eletrônicas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Acesso ao SPED e eSocial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Assinatura de contratos digitais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Transações bancárias corporativas</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Purchase Form */}
        <div className="flex justify-center lg:justify-start">
          <ProductBuyForm product={product} />
        </div>
      </div>
    </div>
  )
}
