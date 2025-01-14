import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const orderFiltersSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
})

type OrderFiltersType = z.infer<typeof orderFiltersSchema>

export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<OrderFiltersType>({
    resolver: zodResolver(orderFiltersSchema),
    defaultValues: {
      orderId: orderId ?? '',
      customerName: customerName ?? '',
      status: status ?? 'all',
    },
  })

  function handleFilter(data: OrderFiltersType) {
    setSearchParams((prev) => {
      if (data.orderId) {
        prev.set('orderId', data.orderId)
      } else {
        prev.delete('orderId')
      }

      if (data.customerName) {
        prev.set('customerName', data.customerName)
      } else {
        prev.delete('customerName')
      }

      if (data.status) {
        prev.set('status', data.status)
      } else {
        prev.delete('status')
      }

      prev.set('page', '1')
      return prev
    })
  }

  function handleClearFilters() {
    setSearchParams((prev) => {
      prev.delete('orderId')
      prev.delete('customerName')
      prev.delete('status')
      prev.set('page', '1')

      return prev
    })

    reset({
      customerName: '',
      orderId: '',
      status: 'all',
    })
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        className="h-8 w-auto"
        placeholder="ID do pedido"
        {...register('orderId')}
      />
      <Input
        className="h-8 w-[320px]"
        placeholder="Nome do cliente"
        {...register('customerName')}
      />
      <Controller
        control={control}
        name="status"
        render={({ field: { name, onChange, value, disabled } }) => (
          <Select
            defaultValue="all"
            name={name}
            onValueChange={onChange}
            value={value}
            disabled={disabled}
          >
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos status</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="canceled">Cancelado</SelectItem>
              <SelectItem value="processing">Em preparo</SelectItem>
              <SelectItem value="delivering">Em entrega</SelectItem>
              <SelectItem value="delivered">Entregue</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      <Button
        variant="secondary"
        size="sm"
        type="submit"
        disabled={isSubmitting}
      >
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>
      <Button
        variant="outline"
        size="sm"
        type="button"
        onClick={handleClearFilters}
      >
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}
