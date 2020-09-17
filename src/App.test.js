import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import ListaDeLaCompra from './Views/ListaDeLaCompra/ListaDeLaCompra';
import Carrito from './Views/Carrito/Carrito';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should render App', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })

  it('should find ListaDeLaCompra', () => {
    expect(wrapper.containsMatchingElement(<ListaDeLaCompra/>)).toEqual(true)
  })

  it('should find anadirAlCarrito function', () => {
    wrapper.find('ListaDeLaCompra').props().anadirAlCarrito()
  })

  it('should find Carrito', () => {
    expect(wrapper.containsMatchingElement(<Carrito/>)).toEqual(true)
  })
})
