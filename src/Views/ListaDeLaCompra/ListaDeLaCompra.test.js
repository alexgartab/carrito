import React from 'react'
import { render } from '@testing-library/react'
import ListaDeLaCompra from './ListaDeLaCompra'

test('Lista render', async () =>{
    const producto = 'Plátano'
    const precio = '2€'

    const { findAllByRole } = render(<ListaDeLaCompra catalogo={catalogo} />)
    const productosDeLaLista = await findAllByRole('heading')
    expect(productosDeLaLista[0]).toHaveTextContent(producto)
    expect(productosDeLaLista[1]).toHaveTextContent(precio)

})