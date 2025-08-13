import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Blog - Vix Cert",
  description: "Artigos, notícias e informações sobre certificação digital, segurança da informação e tecnologia.",
}

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "O que muda com a nova regulamentação de certificados digitais em 2023",
    excerpt:
      "Conheça as principais mudanças na regulamentação de certificados digitais e como elas afetam empresas e profissionais.",
    image: "/placeholder.svg?height=200&width=400",
    date: "12 de Abril, 2023",
    author: "Marcos Silva",
    category: "Regulamentação",
    tags: ["ICP-Brasil", "Legislação", "Certificação Digital"],
  },
  {
    id: 2,
    title: "5 vantagens do certificado digital para contadores",
    excerpt: "Descubra como o certificado digital pode otimizar processos e aumentar a segurança no trabalho contábil.",
    image: "/placeholder.svg?height=200&width=400",
    date: "28 de Março, 2023",
    author: "Ana Paula Costa",
    category: "Contabilidade",
    tags: ["Contadores", "e-CPF", "Produtividade"],
  },
  {
    id: 3,
    title: "Certificado digital na nuvem: o futuro da certificação digital",
    excerpt: "Entenda como funciona o armazenamento de certificados digitais na nuvem e quais são suas vantagens.",
    image: "/placeholder.svg?height=200&width=400",
    date: "15 de Março, 2023",
    author: "Roberto Almeida",
    category: "Tecnologia",
    tags: ["Cloud", "Inovação", "Segurança"],
  },
  {
    id: 4,
    title: "Como proteger seu certificado digital contra fraudes",
    excerpt: "Dicas práticas para garantir a segurança do seu certificado digital e evitar fraudes e golpes.",
    image: "/placeholder.svg?height=200&width=400",
    date: "02 de Março, 2023",
    author: "Carla Mendes",
    category: "Segurança",
    tags: ["Proteção", "Fraudes", "Cibersegurança"],
  },
  {
    id: 5,
    title: "Certificado digital para MEI: vale a pena?",
    excerpt: "Análise sobre os benefícios e custos do certificado digital para Microempreendedores Individuais.",
    image: "/placeholder.svg?height=200&width=400",
    date: "18 de Fevereiro, 2023",
    author: "Paulo Rodrigues",
    category: "Empreendedorismo",
    tags: ["MEI", "e-CNPJ", "Pequenos Negócios"],
  },
  {
    id: 6,
    title: "Como o certificado digital está transformando o setor jurídico",
    excerpt:
      "As mudanças e benefícios que a certificação digital trouxe para advogados e o sistema judiciário brasileiro.",
    image: "/placeholder.svg?height=200&width=400",
    date: "05 de Fevereiro, 2023",
    author: "Juliana Santos",
    category: "Jurídico",
    tags: ["Advogados", "Processos Eletrônicos", "OAB"],
  },
]

// Mock categories
const categories = [
  { name: "Regulamentação", count: 8 },
  { name: "Tecnologia", count: 12 },
  { name: "Segurança", count: 10 },
  { name: "Contabilidade", count: 7 },
  { name: "Jurídico", count: 6 },
  { name: "Empreendedorismo", count: 5 },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Blog VixCert</h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Artigos, notícias e informações sobre certificação digital, segurança da informação e tecnologia.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} layout="fill" objectFit="cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <span className="mx-1">•</span>
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <Badge className="mb-2">{post.category}</Badge>
                  <h2 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 px-6 pb-6">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blog/${post.id}`} className="flex items-center justify-center gap-2">
                      Ler mais <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mr-2">
              Anterior
            </Button>
            <Button variant="outline">Próxima</Button>
          </div>
        </div>

        <div>
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Buscar</h3>
              <div className="flex">
                <Input placeholder="Pesquisar no blog..." className="rounded-r-none" />
                <Button className="rounded-l-none">Buscar</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Categorias</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <Link
                      href={`/blog/categoria/${category.name.toLowerCase()}`}
                      className="text-gray-600 hover:text-primary"
                    >
                      {category.name}
                    </Link>
                    <Badge variant="outline">{category.count}</Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Posts Populares</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm hover:text-primary transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Inscreva-se para receber as últimas notícias e atualizações sobre certificação digital.
              </p>
              <Input placeholder="Seu e-mail" className="mb-2" />
              <Button className="w-full">Inscrever-se</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
