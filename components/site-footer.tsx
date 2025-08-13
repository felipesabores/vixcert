import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo1-jQyILw2mrT504gMUUSulxIFcJSK2MN.png"
              alt="Vix Cert Logo"
              width={180}
              height={48}
              className="h-12 w-auto mb-4 invert"
            />
            <p className="text-sm mb-4">
              Autoridade de Registro credenciada ICP-Brasil, oferecendo soluções em certificação digital com segurança e
              confiabilidade.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Certificados</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/certificados/e-cpf" className="hover:text-white">
                  e-CPF
                </Link>
              </li>
              <li>
                <Link href="/certificados/e-cnpj" className="hover:text-white">
                  e-CNPJ
                </Link>
              </li>
              <li>
                <Link href="/certificados/nfe" className="hover:text-white">
                  NF-e
                </Link>
              </li>
              <li>
                <Link href="/certificados/ssl" className="hover:text-white">
                  Certificado SSL
                </Link>
              </li>
              <li>
                <Link href="/certificados/todos" className="hover:text-white">
                  Ver todos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="hover:text-white">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/suporte" className="hover:text-white">
                  Suporte
                </Link>
              </li>
              <li>
                <Link href="/trabalhe-conosco" className="hover:text-white">
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5" />
                <span>
                  Edifício Tropical Shopping
                  <br />
                  R. Antônio Ataíde, 823 - Loja 02
                  <br />
                  Centro de Vila Velha, Vila Velha - ES, 29100-906
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 mt-0.5" />
                <span>(27) 3333-4444</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 mt-0.5" />
                <span>contato@vixcert.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} VixCert. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
