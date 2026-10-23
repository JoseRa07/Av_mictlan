import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('PapuComida', () => {
  it('muestra las recetas y abre el detalle seleccionado', async () => {
    const usuario = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Molletes con carne' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quesadillas' })).toBeInTheDocument()

    await usuario.click(screen.getAllByRole('button', { name: /ver receta/i })[0])

    expect(screen.getByText('Ingredientes')).toBeInTheDocument()
    expect(screen.getByText('1 taza de frijoles refritos')).toBeInTheDocument()
  })
})
