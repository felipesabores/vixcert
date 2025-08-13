import { stripe } from "@/lib/stripe"

async function createVixCertProducts() {
  const products = [
    // Certificados PF (Pessoa Física)
    {
      name: "Certificado Digital e-CPF A1 - 1 ano",
      description:
        "Certificado digital para pessoa física A1 com validade de 1 ano. Armazenado em arquivo digital, oferece praticidade e segurança para suas transações digitais.",
      price: 12000, // R$ 120,00
      metadata: {
        tipo: "PF",
        modelo: "A1",
        validade: "1 ano",
        midia: "Arquivo Digital",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado Digital e-CPF A3 - 1 ano (Sem Mídia)",
      description:
        "Certificado digital para pessoa física A3 com validade de 1 ano. Sem mídia física incluída, ideal para quem já possui token ou cartão.",
      price: 13000, // R$ 130,00
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "1 ano",
        midia: "Sem Midia",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado Digital e-CPF A3 - 1 ano (Cartão)",
      description:
        "Certificado digital para pessoa física A3 com validade de 1 ano. Inclui cartão criptográfico para máxima segurança.",
      price: 16000, // R$ 160,00
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "1 ano",
        midia: "Cartão",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado Digital e-CPF A3 - 1 ano (Token)",
      description:
        "Certificado digital para pessoa física A3 com validade de 1 ano. Inclui token USB para portabilidade e segurança máxima.",
      price: 30000, // R$ 300,00
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "1 ano",
        midia: "Token",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado Digital e-CPF A3 - 2 anos (Sem Mídia)",
      description:
        "Certificado digital para pessoa física A3 com validade de 2 anos. Sem mídia física incluída, economia a longo prazo.",
      price: 19000, // R$ 190,00
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "2 anos",
        midia: "Sem Midia",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado Digital e-CPF A3 - 2 anos (Cartão)",
      description:
        "Certificado digital para pessoa física A3 com validade de 2 anos. Inclui cartão criptográfico, melhor custo-benefício.",
      price: 22000, // R$ 220,00
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "2 anos",
        midia: "Cartão",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado Digital e-CPF A3 - 2 anos (Token)",
      description:
        "Certificado digital para pessoa física A3 com validade de 2 anos. Token USB incluído para máxima praticidade.",
      price: 34000, // R$ 340,00
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "2 anos",
        midia: "Token",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado Digital e-CPF A3 - 3 anos (Sem Mídia)",
      description:
        "Certificado digital para pessoa física A3 com validade de 3 anos. Sem mídia física, máxima economia a longo prazo.",
      price: 23500, // R$ 235,00
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "3 anos",
        midia: "Sem Midia",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado Digital e-CPF A3 - 3 anos (Cartão)",
      description:
        "Certificado digital para pessoa física A3 com validade de 3 anos. Inclui cartão criptográfico, excelente investimento.",
      price: 25000, // R$ 250,00
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "3 anos",
        midia: "Cartão",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado Digital e-CPF A3 - 3 anos (Cartão + Leitora)",
      description:
        "Certificado digital para pessoa física A3 com validade de 3 anos. Cartão + leitora incluída, kit completo para uso imediato.",
      price: 36500, // R$ 365,00
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "3 anos",
        midia: "Cartão + Leitora",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado Digital e-CPF A3 - 3 anos (Token)",
      description:
        "Certificado digital para pessoa física A3 com validade de 3 anos. Token USB premium, máxima durabilidade e segurança.",
      price: 36500, // R$ 365,00
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "3 anos",
        midia: "Token",
        categoria: "e-CPF",
      },
    },

    // Certificados PJ (Pessoa Jurídica)
    {
      name: "Certificado Digital e-CNPJ A1 - 1 ano",
      description:
        "Certificado digital para pessoa jurídica A1 com validade de 1 ano. Arquivo digital prático para empresas de pequeno porte.",
      price: 18000, // R$ 180,00
      metadata: {
        tipo: "PJ",
        modelo: "A1",
        validade: "1 ano",
        midia: "Arquivo Digital",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado Digital e-CNPJ A3 - 1 ano (Sem Mídia)",
      description:
        "Certificado digital para pessoa jurídica A3 com validade de 1 ano. Sem mídia física incluída, para empresas que já possuem hardware.",
      price: 19000, // R$ 190,00
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "1 ano",
        midia: "Sem Midia",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado Digital e-CNPJ A3 - 1 ano (Cartão)",
      description:
        "Certificado digital para pessoa jurídica A3 com validade de 1 ano. Cartão criptográfico para segurança empresarial.",
      price: 22000, // R$ 220,00
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "1 ano",
        midia: "Cartão",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado Digital e-CNPJ A3 - 1 ano (Token)",
      description:
        "Certificado digital para pessoa jurídica A3 com validade de 1 ano. Token USB empresarial de alta segurança.",
      price: 34000, // R$ 340,00
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "1 ano",
        midia: "Token",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado Digital e-CNPJ A3 - 2 anos (Sem Mídia)",
      description:
        "Certificado digital para pessoa jurídica A3 com validade de 2 anos. Sem mídia física, economia para empresas.",
      price: 28000, // R$ 280,00
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "2 anos",
        midia: "Sem Midia",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado Digital e-CNPJ A3 - 2 anos (Cartão)",
      description:
        "Certificado digital para pessoa jurídica A3 com validade de 2 anos. Cartão criptográfico, custo-benefício empresarial.",
      price: 31500, // R$ 315,00
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "2 anos",
        midia: "Cartão",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado Digital e-CNPJ A3 - 2 anos (Token)",
      description:
        "Certificado digital para pessoa jurídica A3 com validade de 2 anos. Token USB empresarial, praticidade e segurança.",
      price: 40000, // R$ 400,00
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "2 anos",
        midia: "Token",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado Digital e-CNPJ A3 - 3 anos (Sem Mídia)",
      description:
        "Certificado digital para pessoa jurídica A3 com validade de 3 anos. Sem mídia física, máxima economia empresarial.",
      price: 31000, // R$ 310,00
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "3 anos",
        midia: "Sem Midia",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado Digital e-CNPJ A3 - 3 anos (Cartão)",
      description:
        "Certificado digital para pessoa jurídica A3 com validade de 3 anos. Cartão criptográfico, investimento de longo prazo.",
      price: 34000, // R$ 340,00
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "3 anos",
        midia: "Cartão",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado Digital e-CNPJ A3 - 3 anos (Cartão + Leitora)",
      description:
        "Certificado digital para pessoa jurídica A3 com validade de 3 anos. Kit completo com cartão e leitora para uso empresarial.",
      price: 44000, // R$ 440,00
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "3 anos",
        midia: "Cartão + Leitora",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado Digital e-CNPJ A3 - 3 anos (Token)",
      description:
        "Certificado digital para pessoa jurídica A3 com validade de 3 anos. Token USB premium empresarial, máxima durabilidade.",
      price: 44000, // R$ 440,00
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "3 anos",
        midia: "Token",
        categoria: "e-CNPJ",
      },
    },
  ]

  console.log("Iniciando criação dos produtos VixCert...")

  for (const product of products) {
    try {
      const stripeProduct = await stripe.products.create({
        name: product.name,
        description: product.description,
        metadata: product.metadata,
      })

      const stripePrice = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: product.price,
        currency: "brl",
      })

      console.log(`✅ Produto criado: ${product.name} - R$ ${(product.price / 100).toFixed(2)}`)
    } catch (error) {
      console.error(`❌ Erro ao criar produto ${product.name}:`, error)
    }
  }

  console.log("Criação de produtos concluída!")
}

createVixCertProducts().catch(console.error)
