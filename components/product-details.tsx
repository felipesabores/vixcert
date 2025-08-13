import type { productSchema } from "@/lib/schema"
import type { z } from "zod"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileCheck, HardDrive, Calendar } from "lucide-react"
import Image from "next/image"

type Product = z.infer<typeof productSchema>

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={
                product.images?.[0] ||
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo1-jQyILw2mrT504gMUUSulxIFcJSK2MN.png" ||
                "/placeholder.svg"
              }
              alt={product.name}
              layout="fill"
              objectFit="contain"
              className="transition-transform duration-300 ease-in-out hover:scale-105 p-[15px]"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-primary">{product.name}</h1>
          <Badge variant="secondary" className="text-lg mb-4">
            {product.metadata?.tipo || "Certificado Digital"}
          </Badge>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            {product.description || "Descrição não disponível"}
          </p>
          <div className="flex flex-wrap gap-6">
            <Card className="flex-1 min-w-[200px]">
              <CardContent className="flex items-center p-6">
                <Calendar className="h-8 w-8 text-secondary mr-4" />
                <div>
                  <div className="font-semibold text-sm text-gray-500">Validade</div>
                  <div className="text-lg font-bold">{product.metadata?.validade || "N/A"}</div>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1 min-w-[200px]">
              <CardContent className="flex items-center p-6">
                <HardDrive className="h-8 w-8 text-secondary mr-4" />
                <div>
                  <div className="font-semibold text-sm text-gray-500">Mídia</div>
                  <div className="text-lg font-bold">{product.metadata?.midia || "N/A"}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Tabs defaultValue="details" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Detalhes</TabsTrigger>
          <TabsTrigger value="usage">Como Usar</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Especificações do Certificado</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FileCheck className="h-5 w-5 text-secondary mr-2" />
                  <span>Homologado ICP-Brasil</span>
                </li>
                <li className="flex items-center">
                  <FileCheck className="h-5 w-5 text-secondary mr-2" />
                  <span>Criptografia avançada</span>
                </li>
                <li className="flex items-center">
                  <FileCheck className="h-5 w-5 text-secondary mr-2" />
                  <span>Compatível com todos os sistemas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="usage" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Como Utilizar</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Faça a compra do certificado</li>
                <li>Agende sua videoconferência de validação</li>
                <li>Prepare seus documentos conforme instruções</li>
                <li>Participe da videoconferência no horário agendado</li>
                <li>Receba seu certificado digital</li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="faq" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Perguntas Frequentes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Quanto tempo leva para receber o certificado?</h4>
                  <p className="text-gray-600">
                    Após a validação bem-sucedida, o certificado é emitido em até 24 horas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Posso usar em múltiplos dispositivos?</h4>
                  <p className="text-gray-600">
                    Sim, o certificado pode ser instalado em múltiplos dispositivos, respeitando as políticas de uso.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
