import React from 'react'
import ListaDeLaCompra from './ListaDeLaCompra'
import { shallow } from 'enzyme';

// test('render Lista', async () => {
//     const catalogo = [{nombre: '', precio: ''}]
//     const { findAllByRole } = render(<ListaDeLaCompra catalogo={catalogo}/>)
//     const componentesLista = await findAllByRole('cell')
//     expect(componentesLista[0]).toHaveTextContent(catalogo[0].nombre)
//     expect(componentesLista[0]).toHaveTextContent(catalogo[0].precio)

// })

describe('ListaDeLaCompra', () => {
    let wrapper
    const catalogo = [{nombre: 'Platano', precio: '1'}]

    beforeEach(() => {
        wrapper = shallow(<ListaDeLaCompra catalogo={catalogo}/>)
    });


    it('should fill table with catalogo', () => {
        expect(wrapper.text()).toContain(catalogo[0].nombre)
        expect(wrapper.text()).toContain(catalogo[0].precio)
    });
});