import { notFound } from "next/navigation"
import { getProduct } from "@/lib/products"
import { ProductBuyForm } from "@/components/product-buy-form"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, CreditCard, FileText } from "lucide-react"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  const priceId = product.default_price?.id
  const price = product.default_price?.unit_amount || 0

  const getTipoLabel = (tipo: string) => {
    return tipo === "PF" ? "Pessoa Física" : "Pessoa Jurídica"
  }

  const getMidiaIcon = (midia: string) => {
    switch (midia) {
      case "Cartão":
      case "Cartão + Leitora":
        return <CreditCard className="h-4 w-4" />
      case "Token":
        return <Shield className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informações do Produto */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {getTipoLabel(product.metadata.tipo || "")}
              </Badge>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.description}</p>
            </div>

            {/* Especificações */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Especificações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Tipo</p>
                    <p className="font-semibold">{product.metadata.tipo === "PF" ? "e-CPF" : "e-CNPJ"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Modelo</p>
                    <p className="font-semibold">{product.metadata.modelo}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Validade</p>
                    <p className="font-semibold flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {product.metadata.validade}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Mídia</p>
                    <p className="font-semibold flex items-center gap-1">
                      {getMidiaIcon(product.metadata.midia || "")}
                      {product.metadata.midia === "-" ? "Arquivo Digital" : product.metadata.midia}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Características */}
            <Card>
              <CardHeader>
                <CardTitle>Características do Certificado</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 mt-1 text-primary" />
                    <span className="text-sm">Certificado digital ICP-Brasil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 mt-1 text-primary" />
                    <span className="text-sm">Emitido por Autoridade Certificadora credenciada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 mt-1 text-primary" />
                    <span className="text-sm">Validade jurídica garantida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 mt-1 text-primary" />
                    <span className="text-sm">Suporte técnico especializado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Compra */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Adquirir Certificado</CardTitle>
                <CardDescription>Processo seguro e rápido de aquisição</CardDescription>
              </CardHeader>
              <CardContent>
                {priceId ? (
                  <ProductBuyForm priceId={priceId} productName={product.name} price={price} />
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Preço não disponível no momento. Entre em contato conosco.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Informações Adicionais */}
            <Card>
              <CardHeader>
                <CardTitle>Processo de Emissão</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <span>Realize a compra online</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <span>Agende a validação presencial</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <span>Compareça com os documentos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <span>Receba seu certificado</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
