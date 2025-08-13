import { stripe } from "@/lib/stripe"

async function createTestProducts() {
  const products = [
    {
      name: "Certificado e-CNPJ A1",
      description:
        "Certificado digital empresarial com validade de 1 ano, ideal para pequenas e médias empresas. Permite assinatura de documentos, acesso ao e-CAC, emissão de notas fiscais e participação em pregões eletrônicos.",
      price: 25000, // R$ 250,00
      recurring: false,
      metadata: {
        tipo: "e-CNPJ",
        validade: "1 ano",
        midia: "Arquivo Digital",
        beneficios: "Emissão imediata, instalação simplificada, compatibilidade garantida",
      },
    },
    {
      name: "Certificado e-CNPJ A3",
      description:
        "Certificado digital empresarial premium com validade de 3 anos. Máxima segurança com armazenamento em token criptográfico, ideal para empresas que precisam de alto nível de proteção.",
      price: 45000, // R$ 450,00
      recurring: false,
      metadata: {
        tipo: "e-CNPJ",
        validade: "3 anos",
        midia: "Token USB",
        beneficios: "Maior segurança, portabilidade, validade estendida",
      },
    },
    {
      name: "Certificado e-CPF A1",
      description:
        "Certificado digital pessoal com praticidade de armazenamento em arquivo digital. Ideal para profissionais liberais e pessoas físicas que precisam assinar documentos digitalmente.",
      price: 19000, // R$ 190,00
      recurring: false,
      metadata: {
        tipo: "e-CPF",
        validade: "1 ano",
        midia: "Arquivo Digital",
        beneficios: "Emissão rápida, custo-benefício, fácil instalação",
      },
    },
    {
      name: "Certificado e-CPF A3",
      description:
        "Certificado digital pessoal de alta segurança com armazenamento em cartão ou token. Perfeito para profissionais que necessitam de mobilidade e máxima proteção.",
      price: 29000, // R$ 290,00
      recurring: false,
      metadata: {
        tipo: "e-CPF",
        validade: "3 anos",
        midia: "Token ou Cartão",
        beneficios: "Máxima segurança, mobilidade, economia a longo prazo",
      },
    },
    {
      name: "NF-e Express",
      description:
        "Solução completa para emissão de notas fiscais eletrônicas. Ideal para empresas com alto volume de emissão que precisam de praticidade e agilidade.",
      price: 22000, // R$ 220,00
      recurring: true,
      metadata: {
        tipo: "NF-e",
        validade: "1 ano",
        midia: "Arquivo Digital",
        beneficios: "Emissão ilimitada, suporte prioritário, dashboard exclusivo",
      },
    },
    {
      name: "Certificado SSL Wildcard",
      description:
        "Proteção completa para seu domínio e subdomínios. Garanta a segurança das informações trafegadas em seu site com criptografia de ponta.",
      price: 89900, // R$ 899,00
      recurring: true,
      metadata: {
        tipo: "SSL",
        validade: "1 ano",
        midia: "Arquivo Digital",
        beneficios: "Proteção ilimitada de subdomínios, selo de segurança, suporte 24/7",
      },
    },
    {
      name: "Certificado Digital Profissional",
      description:
        "Certificado digital premium para profissionais liberais. Garante autenticidade e segurança em suas transações digitais, assinaturas eletrônicas e acesso a portais governamentais.",
      price: 24900, // R$ 249,00
      recurring: false,
      metadata: {
        tipo: "e-CPF Premium",
        validade: "3 anos",
        midia: "Token USB",
        categoria: "Profissional",
        cor: "#4B0082", // Indigo
        excerpt: "Eleve sua credibilidade digital com nosso certificado premium para profissionais.",
        beneficios: "Validade estendida, máxima segurança, compatibilidade universal",
      },
    },
  ]

  for (const product of products) {
    const stripeProduct = await stripe.products.create({
      name: product.name,
      description: product.description,
      metadata: product.metadata,
    })

    if (product.recurring) {
      await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: product.price,
        currency: "brl",
        recurring: { interval: "year" },
      })
    } else {
      await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: product.price,
        currency: "brl",
      })
    }

    console.log(`Produto criado: ${product.name}`)
  }
}

createTestProducts().catch(console.error)
