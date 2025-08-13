import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DiscountCoupon } from "@/components/discount-coupon"

export function PromoBanner() {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Vai <span className="underline decoration-secondary">renovar</span>?
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Use o cupom <br />
          de desconto
        </h2>

        <Button asChild variant="default" className="bg-black hover:bg-black/90 text-white rounded-full w-fit">
          <Link href="https://wa.me/5527999999999?text=Olá,%20gostaria%20de%20comprar%20um%20certificado%20digital">
            Comprar pelo WhatsApp
          </Link>
        </Button>
      </div>

      <div className="flex justify-center lg:justify-start mt-4">
        <DiscountCoupon />
      </div>
    </div>
  )
}
