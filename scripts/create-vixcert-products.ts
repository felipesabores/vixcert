import { stripe } from "@/lib/stripe"

async function createVixCertProducts() {
  const products = [
    // Pessoa Física (PF)
    {
      name: "Certificado e-CPF A1 - 1 ano",
      description:
        "Certificado digital para Pessoa Física modelo A1 com validade de 1 ano. Armazenado em arquivo digital, ideal para uso pessoal e profissional.",
      price: 12000, // R$ 120,00
      recurring: false,
      metadata: {
        tipo: "PF",
        modelo: "A1",
        validade: "1 ano",
        midia: "Arquivo Digital",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado e-CPF A3 - 1 ano (Sem Mídia)",
      description: "Certificado digital para Pessoa Física modelo A3 com validade de 1 ano. Sem mídia física incluída.",
      price: 13000, // R$ 130,00
      recurring: false,
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "1 ano",
        midia: "Sem Midia",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado e-CPF A3 - 1 ano (Cartão)",
      description:
        "Certificado digital para Pessoa Física modelo A3 com validade de 1 ano. Inclui cartão criptográfico.",
      price: 16000, // R$ 160,00
      recurring: false,
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "1 ano",
        midia: "Cartão",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado e-CPF A3 - 1 ano (Token)",
      description:
        "Certificado digital para Pessoa Física modelo A3 com validade de 1 ano. Inclui token USB criptográfico.",
      price: 30000, // R$ 300,00
      recurring: false,
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "1 ano",
        midia: "Token",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado e-CPF A3 - 2 anos (Sem Mídia)",
      description:
        "Certificado digital para Pessoa Física modelo A3 com validade de 2 anos. Sem mídia física incluída.",
      price: 19000, // R$ 190,00
      recurring: false,
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "2 anos",
        midia: "Sem Midia",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado e-CPF A3 - 2 anos (Cartão)",
      description:
        "Certificado digital para Pessoa Física modelo A3 com validade de 2 anos. Inclui cartão criptográfico.",
      price: 22000, // R$ 220,00
      recurring: false,
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "2 anos",
        midia: "Cartão",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado e-CPF A3 - 2 anos (Token)",
      description:
        "Certificado digital para Pessoa Física modelo A3 com validade de 2 anos. Inclui token USB criptográfico.",
      price: 34000, // R$ 340,00
      recurring: false,
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "2 anos",
        midia: "Token",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado e-CPF A3 - 3 anos (Sem Mídia)",
      description:
        "Certificado digital para Pessoa Física modelo A3 com validade de 3 anos. Sem mídia física incluída.",
      price: 23500, // R$ 235,00
      recurring: false,
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "3 anos",
        midia: "Sem Midia",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado e-CPF A3 - 3 anos (Cartão)",
      description:
        "Certificado digital para Pessoa Física modelo A3 com validade de 3 anos. Inclui cartão criptográfico.",
      price: 25000, // R$ 250,00
      recurring: false,
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "3 anos",
        midia: "Cartão",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado e-CPF A3 - 3 anos (Cartão + Leitora)",
      description:
        "Certificado digital para Pessoa Física modelo A3 com validade de 3 anos. Inclui cartão criptográfico e leitora.",
      price: 36500, // R$ 365,00
      recurring: false,
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "3 anos",
        midia: "Cartão + Leitora",
        categoria: "e-CPF",
      },
    },
    {
      name: "Certificado e-CPF A3 - 3 anos (Token)",
      description:
        "Certificado digital para Pessoa Física modelo A3 com validade de 3 anos. Inclui token USB criptográfico.",
      price: 36500, // R$ 365,00
      recurring: false,
      metadata: {
        tipo: "PF",
        modelo: "A3",
        validade: "3 anos",
        midia: "Token",
        categoria: "e-CPF",
      },
    },
    // Pessoa Jurídica (PJ)
    {
      name: "Certificado e-CNPJ A1 - 1 ano",
      description:
        "Certificado digital para Pessoa Jurídica modelo A1 com validade de 1 ano. Armazenado em arquivo digital, ideal para empresas.",
      price: 18000, // R$ 180,00
      recurring: false,
      metadata: {
        tipo: "PJ",
        modelo: "A1",
        validade: "1 ano",
        midia: "Arquivo Digital",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado e-CNPJ A3 - 1 ano (Sem Mídia)",
      description:
        "Certificado digital para Pessoa Jurídica modelo A3 com validade de 1 ano. Sem mídia física incluída.",
      price: 19000, // R$ 190,00
      recurring: false,
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "1 ano",
        midia: "Sem Midia",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado e-CNPJ A3 - 1 ano (Cartão)",
      description:
        "Certificado digital para Pessoa Jurídica modelo A3 com validade de 1 ano. Inclui cartão criptográfico.",
      price: 22000, // R$ 220,00
      recurring: false,
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "1 ano",
        midia: "Cartão",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado e-CNPJ A3 - 1 ano (Token)",
      description:
        "Certificado digital para Pessoa Jurídica modelo A3 com validade de 1 ano. Inclui token USB criptográfico.",
      price: 34000, // R$ 340,00
      recurring: false,
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "1 ano",
        midia: "Token",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado e-CNPJ A3 - 2 anos (Sem Mídia)",
      description:
        "Certificado digital para Pessoa Jurídica modelo A3 com validade de 2 anos. Sem mídia física incluída.",
      price: 28000, // R$ 280,00
      recurring: false,
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "2 anos",
        midia: "Sem Midia",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado e-CNPJ A3 - 2 anos (Cartão)",
      description:
        "Certificado digital para Pessoa Jurídica modelo A3 com validade de 2 anos. Inclui cartão criptográfico.",
      price: 31500, // R$ 315,00
      recurring: false,
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "2 anos",
        midia: "Cartão",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado e-CNPJ A3 - 2 anos (Token)",
      description:
        "Certificado digital para Pessoa Jurídica modelo A3 com validade de 2 anos. Inclui token USB criptográfico.",
      price: 40000, // R$ 400,00
      recurring: false,
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "2 anos",
        midia: "Token",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado e-CNPJ A3 - 3 anos (Sem Mídia)",
      description:
        "Certificado digital para Pessoa Jurídica modelo A3 com validade de 3 anos. Sem mídia física incluída.",
      price: 31000, // R$ 310,00
      recurring: false,
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "3 anos",
        midia: "Sem Midia",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado e-CNPJ A3 - 3 anos (Cartão)",
      description:
        "Certificado digital para Pessoa Jurídica modelo A3 com validade de 3 anos. Inclui cartão criptográfico.",
      price: 34000, // R$ 340,00
      recurring: false,
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "3 anos",
        midia: "Cartão",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado e-CNPJ A3 - 3 anos (Cartão + Leitora)",
      description:
        "Certificado digital para Pessoa Jurídica modelo A3 com validade de 3 anos. Inclui cartão criptográfico e leitora.",
      price: 44000, // R$ 440,00
      recurring: false,
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "3 anos",
        midia: "Cartão + Leitora",
        categoria: "e-CNPJ",
      },
    },
    {
      name: "Certificado e-CNPJ A3 - 3 anos (Token)",
      description:
        "Certificado digital para Pessoa Jurídica modelo A3 com validade de 3 anos. Inclui token USB criptográfico.",
      price: 44000, // R$ 440,00
      recurring: false,
      metadata: {
        tipo: "PJ",
        modelo: "A3",
        validade: "3 anos",
        midia: "Token",
        categoria: "e-CNPJ",
      },
    },
  ]

  for (const product of products) {
    try {
      const stripeProduct = await stripe.products.create({
        name: product.name,
        description: product.description,
        metadata: product.metadata,
      })

      await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: product.price,
        currency: "brl",
      })

      console.log(`✅ Produto criado: ${product.name} - R$ ${(product.price / 100).toFixed(2)}`)
    } catch (error) {
      console.error(`❌ Erro ao criar produto ${product.name}:`, error)
    }
  }

  console.log("\n🎉 Processo de criação de produtos concluído!")
}

createVixCertProducts().catch(console.error)
