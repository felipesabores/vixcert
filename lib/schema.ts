import { z } from "zod"

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  images: z.array(z.string()).optional(),
  price: z.object({
    id: z.string().nullable(),
    amount: z.number().nullable(),
    display_amount: z.string().nullable(),
  }),
  metadata: z
    .object({
      tipo: z.string().optional(),
      validade: z.string().optional(),
      midia: z.string().optional(),
      categoria: z.string().optional(),
      cor: z.string().optional(),
      excerpt: z.string().optional(),
      beneficios: z.string().optional(),
    })
    .optional(),
})

export const productListSchema = z.object({
  data: z.array(productSchema),
  has_more: z.boolean(),
})
