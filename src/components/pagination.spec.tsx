import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

describe('Component: Pagination', () => {
  it('should be displayed the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const mockFn = vitest.fn()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={mockFn}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    const user = userEvent.setup()

    await user.click(nextPageButton)

    expect(mockFn).toHaveBeenCalledOnce()
    expect(mockFn).toHaveBeenCalledWith(1)
  })

  it('should be able to navigate to the previous page', async () => {
    const mockFn = vitest.fn()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={mockFn}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    const user = userEvent.setup()

    await user.click(nextPageButton)

    expect(mockFn).toHaveBeenCalledOnce()
    expect(mockFn).toHaveBeenCalledWith(4)
  })

  it('should be able to navigate to the first page', async () => {
    const mockFn = vitest.fn()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={mockFn}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Primeira página',
    })

    const user = userEvent.setup()

    await user.click(nextPageButton)

    expect(mockFn).toHaveBeenCalledOnce()
    expect(mockFn).toHaveBeenCalledWith(0)
  })

  it('should be able to navigate to the last page', async () => {
    const mockFn = vitest.fn()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={mockFn}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Última página',
    })

    const user = userEvent.setup()

    await user.click(nextPageButton)

    expect(mockFn).toHaveBeenCalledOnce()
    expect(mockFn).toHaveBeenCalledWith(19)
  })
})
