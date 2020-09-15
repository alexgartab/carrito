import React from 'react'
import { render } from '@testing-library/react'
import ListaDeLaCompra from './ListaDeLaCompra'

test('render Lista', async () => {
    const catalogo = [{nombre: '', precio: ''}]
    const { findAllByRole } = render(<ListaDeLaCompra catalogo={catalogo}/>)
    const componentesLista = await findAllByRole('cell')
    expect(componentesLista[0]).toHaveTextContent(catalogo[0].nombre)
    expect(componentesLista[0]).toHaveTextContent(catalogo[0].precio)

})