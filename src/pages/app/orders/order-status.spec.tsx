import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Component: Order Status', () => {
  it('should be displayed the right text on Pending orders', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    const statusText = wrapper.getByText('Pendente')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toBeVisible()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should be displayed the right text on Canceled orders', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    const statusText = wrapper.getByText('Cancelado')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toBeVisible()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should be displayed the right text on Delivered orders', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    const statusText = wrapper.getByText('Entregue')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toBeVisible()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })

  it('should be displayed the right text on Delivering orders', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    const statusText = wrapper.getByText('Em entrega')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toBeVisible()
    expect(badgeElement).toHaveClass('bg-sky-500')
  })

  it('should be displayed the right text on Processing orders', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    const statusText = wrapper.getByText('Em preparo')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toBeVisible()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
})
