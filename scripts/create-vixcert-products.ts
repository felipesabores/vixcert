import { stripe } from "../lib/stripe"

const products = [
  {
    Tipo: "PF",
    Modelo: "A1",
    Validade: "1 ano",
    Midia: "-",
    Preco_R$: "120",
  },
  {
    Tipo: "PF",
    Modelo: "A3",
    Validade: "1 ano",
    Midia: "Sem Midia",
    Preco_R$: "130",
  },
  {
    Tipo: "PF",
    Modelo: "A3",
    Validade: "1 ano",
    Midia: "Cartão",
    Preco_R$: "160",
  },
  {
    Tipo: "PF",
    Modelo: "A3",
    Validade: "1 ano",
    Midia: "Token",
    Preco_R$: "300",
  },
  {
    Tipo: "PF",
    Modelo: "A3",
    Validade: "2 anos",
    Midia: "Sem Midia",
    Preco_R$: "190",
  },
  {
    Tipo: "PF",
    Modelo: "A3",
    Validade: "2 anos",
    Midia: "Cartão",
    Preco_R$: "220",
  },
  {
    Tipo: "PF",
    Modelo: "A3",
    Validade: "2 anos",
    Midia: "Token",
    Preco_R$: "340",
  },
  {
    Tipo: "PF",
    Modelo: "A3",
    Validade: "3 anos",
    Midia: "Sem Midia",
    Preco_R$: "235",
  },
  {
    Tipo: "PF",
    Modelo: "A3",
    Validade: "3 anos",
    Midia: "Cartão",
    Preco_R$: "250",
  },
  {
    Tipo: "PF",
    Modelo: "A3",
    Validade: "3 anos",
    Midia: "Cartão + Leitora",
    Preco_R$: "365",
  },
  {
    Tipo: "PF",
    Modelo: "A3",
    Validade: "3 anos",
    Midia: "Token",
    Preco_R$: "365",
  },
  {
    Tipo: "PJ",
    Modelo: "A1",
    Validade: "1 ano",
    Midia: "-",
    Preco_R$: "180",
  },
  {
    Tipo: "PJ",
    Modelo: "A3",
    Validade: "1 ano",
    Midia: "Sem Midia",
    Preco_R$: "190",
  },
  {
    Tipo: "PJ",
    Modelo: "A3",
    Validade: "1 ano",
    Midia: "Cartão",
    Preco_R$: "220",
  },
  {
    Tipo: "PJ",
    Modelo: "A3",
    Validade: "1 ano",
    Midia: "Token",
    Preco_R$: "340",
  },
  {
    Tipo: "PJ",
    Modelo: "A3",
    Validade: "2 anos",
    Midia: "Sem Midia",
    Preco_R$: "280",
  },
  {
    Tipo: "PJ",
    Modelo: "A3",
    Validade: "2 anos",
    Midia: "Cartão",
    Preco_R$: "315",
  },
  {
    Tipo: "PJ",
    Modelo: "A3",
    Validade: "2 anos",
    Midia: "Token",
    Preco_R$: "400",
  },
  {
    Tipo: "PJ",
    Modelo: "A3",
    Validade: "3 anos",
    Midia: "Sem Midia",
    Preco_R$: "310",
  },
  {
    Tipo: "PJ",
    Modelo: "A3",
    Validade: "3 anos",
    Midia: "Cartão",
    Preco_R$: "340",
  },
  {
    Tipo: "PJ",
    Modelo: "A3",
    Validade: "3 anos",
    Midia: "Cartão + Leitora",
    Preco_R$: "440",
  },
  {
    Tipo: "PJ",
    Modelo: "A3",
    Validade: "3 anos",
    Midia: "Token",
    Preco_R$: "440",
  },
]

function generateProductName(product: any): string {
  const tipo = product.Tipo === "PF" ? "e-CPF" : "e-CNPJ"
  const modelo = product.Modelo
  const validade = product.Validade
  const midia = product.Midia === "-" ? "" : ` - ${product.Midia}`

  return `${tipo} ${modelo} (${validade})${midia}`
}

function generateProductDescription(product: any): string {
  const tipo = product.Tipo === "PF" ? "Pessoa Física" : "Pessoa Jurídica"
  const certificado = product.Tipo === "PF" ? "e-CPF" : "e-CNPJ"
  const modelo = product.Modelo
  const validade = product.Validade
  const midia = product.Midia === "-" ? "Arquivo Digital" : product.Midia

  return `Certificado Digital ${certificado} ${modelo} para ${tipo}. Validade de ${validade}. Mídia: ${midia}. Certificado emitido pela VixCert, Autoridade de Registro credenciada pela ICP-Brasil.`
}

async function createVixCertProducts() {
  console.log("Iniciando criação dos produtos VixCert...")

  for (const product of products) {
    try {
      const name = generateProductName(product)
      const description = generateProductDescription(product)
      const priceInCents = Number.parseInt(product.Preco_R$) * 100

      console.log(`Criando produto: ${name}`)

      // Criar produto no Stripe
      const stripeProduct = await stripe.products.create({
        name: name,
        description: description,
        metadata: {
          tipo: product.Tipo,
          modelo: product.Modelo,
          validade: product.Validade,
          midia: product.Midia,
          preco_original: product.Preco_R$,
        },
      })

      // Criar preço para o produto
      const stripePrice = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: priceInCents,
        currency: "brl",
      })

      // Atualizar produto com preço padrão
      await stripe.products.update(stripeProduct.id, {
        default_price: stripePrice.id,
      })

      console.log(`✅ Produto criado: ${name} - R$ ${product.Preco_R$}`)
    } catch (error) {
      console.error(`❌ Erro ao criar produto ${generateProductName(product)}:`, error)
    }
  }

  console.log("Finalizada a criação dos produtos VixCert!")
}

// Executar o script
createVixCertProducts().catch(console.error)
