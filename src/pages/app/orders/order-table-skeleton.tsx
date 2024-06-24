import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button variant="outline" size="sm">
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[242px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[90px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[120px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[280px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[100px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[92px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[92px]" />
        </TableCell>
      </TableRow>
    )
  })
}
