import { BannerHero } from "@/components/banner-hero"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { FAQSection } from "@/components/faq-section"
import { getProducts } from "@/lib/products"
import { TrustedBy } from "@/components/trusted-by"

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <BannerHero />

      {/* Trusted By Section */}
      <div className="border-y border-gray-200 bg-gray-50">
        <div className="container mx-auto py-8">
          <TrustedBy />
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Soluções completas em certificação digital</h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Escolha a melhor opção para você ou para o seu negócio com a segurança e confiabilidade que só a VixCert
          oferece
        </p>
        <Features />
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <Testimonials />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto py-20 px-4">
        <FAQSection />
      </div>
    </div>
  )
}
