import { z } from "zod"

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  images: z.array(z.string()),
  price: z.object({
    id: z.string().nullable(),
    amount: z.number().nullable(),
    display_amount: z.string().nullable(),
  }),
  metadata: z.record(z.string()).optional(),
})

export const customerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  document: z.string().optional(),
  created_at: z.string(),
})

export const transactionSchema = z.object({
  id: z.string(),
  amount: z.number(),
  status: z.enum(["pending", "completed", "failed", "cancelled"]),
  customer: customerSchema,
  product: productSchema,
  created_at: z.string(),
  updated_at: z.string(),
})

export type Product = z.infer<typeof productSchema>
export type Customer = z.infer<typeof customerSchema>
export type Transaction = z.infer<typeof transactionSchema>
