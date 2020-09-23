import React from 'react'
import { shallow } from 'enzyme'
import Carrito from './Carrito';

describe('Carrito', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Carrito listaDeLaCompra={[]} borrarDelCarrito={()=>{}}/>)
    });

    it('should render', () => {
        expect(wrapper.find('div').length).toEqual(3)
    });

    it('should calculate total cost of CARRITO 0', () => {
        expect(wrapper.find('p').text()).toBe('Total: 0€')
    })

    it('should calculate total cost of CARRITO', () => {
        wrapper = shallow(<Carrito listaDeLaCompra={[{nombre: 'Platano', precio: 1, cantidad: 1}]}/>)
        expect(wrapper.find('p').text()).toBe('Total: 1.00€')
    })

    it('should find button delete', () => {
        wrapper = shallow(<Carrito listaDeLaCompra={[{nombre: 'Platano', precio: 1, cantidad: 1}]} borrarDelCarrito={()=> {}}/>)
        expect(wrapper.find('DeleteIcon').simulate('click'))
    })

    it('should find buy button', () => {
        wrapper = shallow(<Carrito listaDeLaCompra={[{nombre: 'Platano', precio: 1, cantidad: 1}]} borrarDelCarrito={()=> {}}/>)
        expect(wrapper.find('button').simulate('click'))
    })

    it('should add descuento', () => {
        wrapper = shallow(<Carrito listaDeLaCompra={[{nombre: 'Platano', precio: 1, cantidad: 1}]} borrarDelCarrito={()=> {}}/>)
        wrapper.find('input').simulate('change', {target: {value: 'VE'}})
        wrapper.find('input').simulate('change', {target: {value: 'VEINTE'}})
        expect(wrapper.find('p').text()).toBe('Total: 0.80€')
    })
});