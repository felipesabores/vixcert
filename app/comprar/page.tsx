import { CertificateSelector } from "@/components/certificate-selector"
import { getProducts } from "@/lib/products"

export const metadata = {
  title: "Comprar Certificado Digital - Vix Cert",
  description: "Adquira seu certificado digital com a VixCert de forma rápida, segura e com os melhores preços.",
}

export default async function ComprarPage() {
  const products = await getProducts()

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Comprar Certificado Digital</h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Escolha o certificado digital ideal para suas necessidades. Processo rápido, seguro e com suporte especializado
        em todas as etapas.
      </p>

      <div className="max-w-3xl mx-auto">
        <CertificateSelector products={products.data} />
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Como funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
              1
            </div>
            <h3 className="font-bold mb-2">Escolha seu certificado</h3>
            <p className="text-gray-600">
              Selecione o tipo de certificado, validade e mídia que melhor atende às suas necessidades.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
              2
            </div>
            <h3 className="font-bold mb-2">Realize o pagamento</h3>
            <p className="text-gray-600">Pague de forma segura utilizando cartão de crédito, boleto ou PIX.</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
              3
            </div>
            <h3 className="font-bold mb-2">Agende a validação</h3>
            <p className="text-gray-600">
              Escolha o melhor horário para realizar a validação por videoconferência com nossos Agentes de Registro.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
