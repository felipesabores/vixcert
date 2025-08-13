import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center space-x-2">
      <Button asChild variant="outline" disabled={currentPage === 1}>
        <Link href={`/admin?page=${currentPage - 1}`}>Anterior</Link>
      </Button>
      <span className="flex items-center">
        Página {currentPage} de {totalPages}
      </span>
      <Button asChild variant="outline" disabled={currentPage === totalPages}>
        <Link href={`/admin?page=${currentPage + 1}`}>Próxima</Link>
      </Button>
    </div>
  )
}
