import React from 'react'
import ListaDeLaCompra from './ListaDeLaCompra'
import { shallow } from 'enzyme';

describe('ListaDeLaCompra', () => {
    let wrapper
    const catalogo = [{ nombre: 'Platano', precio: 1 }]

    beforeEach(() => {
        wrapper = shallow(<ListaDeLaCompra catalogo={catalogo} anadirAlCarrito={() => { }} />)
    });


    it('should fill table with catalogo', () => {
        expect(wrapper.text()).toContain(catalogo[0].nombre)
        expect(wrapper.text()).toContain(catalogo[0].precio)
    });

    it('should simulate click', () => {
        expect(wrapper.find('AddIcon').simulate('click'))
    });
});