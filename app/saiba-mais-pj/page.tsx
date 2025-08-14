import { getProductsByType } from "@/lib/products"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, CreditCard, FileText, Building, CheckCircle } from "lucide-react"
import Link from "next/link"

export default async function SaibaMaisPJPage() {
  const products = await getProductsByType("PJ")

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price / 100)
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

  const getMidiaDisplay = (midia: string) => {
    return midia === "-" ? "Arquivo Digital" : midia
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Building className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Certificados Digitais para Pessoa Jurídica</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Certificados e-CNPJ A1 e A3 para empresas. Simplifique processos fiscais, tributários e comerciais com total
            segurança jurídica.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Segurança Empresarial</h3>
              <p className="text-sm text-muted-foreground">Proteja as transações da sua empresa</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Agilidade Fiscal</h3>
              <p className="text-sm text-muted-foreground">Envie obrigações fiscais rapidamente</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Conformidade Legal</h3>
              <p className="text-sm text-muted-foreground">Atenda às exigências legais</p>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Nossos Certificados e-CNPJ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{product.metadata.modelo}</Badge>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">
                        {product.default_price ? formatPrice(product.default_price.unit_amount) : "Consulte"}
                      </p>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-muted-foreground">Validade</p>
                      <p className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {product.metadata.validade}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">Mídia</p>
                      <p className="flex items-center gap-1">
                        {getMidiaIcon(product.metadata.midia || "")}
                        {getMidiaDisplay(product.metadata.midia || "")}
                      </p>
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/produtos/${product.id}`}>Ver Detalhes</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Information Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>O que é o e-CNPJ?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                O e-CNPJ é a identidade digital da sua empresa, permitindo representação legal em ambiente eletrônico.
                Com ele, sua empresa pode:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Assinar contratos e documentos digitalmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Enviar obrigações fiscais (SPED, NFe, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Acessar sistemas governamentais</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Realizar transações bancárias empresariais</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vantagens para sua Empresa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Redução de custos:</strong> Elimine impressões e deslocamentos
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Agilidade:</strong> Processos mais rápidos e eficientes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Segurança:</strong> Proteção contra fraudes e falsificações
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Conformidade:</strong> Atendimento às exigências legais
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Pronto para digitalizar sua empresa?</h2>
          <p className="text-muted-foreground mb-6">
            Escolha o certificado e-CNPJ ideal para sua empresa e modernize seus processos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/certificados">Ver Todos os Certificados</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/agendar">Agendar Validação</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
