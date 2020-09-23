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

  it('should find editarCarrito function', () => {
    //añadir al carrito
    wrapper.find('ListaDeLaCompra').props().anadirAlCarrito({nombre: 'Platano', precio: 1})
    expect(wrapper.find('Carrito').props().listaDeLaCompra.length).toBe(1)
    wrapper.find('ListaDeLaCompra').props().anadirAlCarrito({nombre: 'Platano', precio: 1})
    expect(wrapper.find('Carrito').props().listaDeLaCompra[0].cantidad).toBe(2)

    //borrar del carrito
    wrapper.find('Carrito').props().borrarDelCarrito(0)
    expect(wrapper.find('Carrito').props().listaDeLaCompra.length).toBe(1)
    wrapper.find('Carrito').props().borrarDelCarrito(0)
    expect(wrapper.find('Carrito').props().listaDeLaCompra.length).toBe(0)
  })

  it('should find Carrito', () => {
    expect(wrapper.containsMatchingElement(<Carrito/>)).toEqual(true)
  })
})
