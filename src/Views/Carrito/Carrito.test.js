import React from 'react'
import { shallow } from 'enzyme'
import Carrito from './Carrito';

describe('Carrito', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Carrito listaDeLaCompra={[{nombre: 'Plátano', precio: '0'}]}/>)
    });

    it('should render', () => {
        expect(wrapper.find('div').length).toEqual(1)
    });


});