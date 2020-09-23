import React from 'react';
import './App.css';
import ListaDeLaCompra from './Views/ListaDeLaCompra/ListaDeLaCompra';
import catalogo from './Utils/catalogo';
import Carrito from './Views/Carrito/Carrito';

function App() {

  const [productosEnCarrito, setProductosEnCarrito] = React.useState([]);

  const anadirAlCarrito = (producto) => {
    const copiaProductosEnCarrito = [...productosEnCarrito]
    if (copiaProductosEnCarrito.findIndex(productoEnCarrito => producto.nombre === productoEnCarrito.nombre) === -1) {
      producto.cantidad = 1
      copiaProductosEnCarrito.push(producto)
    } else {
      copiaProductosEnCarrito[copiaProductosEnCarrito.findIndex(productoEnCarrito => producto.nombre === productoEnCarrito.nombre)].cantidad++
    }
    setProductosEnCarrito(copiaProductosEnCarrito)
  }

  const borrarDelCarrito = (posicion) => {
    const copiaProductosEnCarrito = [...productosEnCarrito]
    if (copiaProductosEnCarrito[posicion].cantidad === 1) {
      copiaProductosEnCarrito.splice(posicion, 1)
    } else {
      copiaProductosEnCarrito[posicion].cantidad--
    }
    setProductosEnCarrito(copiaProductosEnCarrito)
  }

  const comprarCarrito = () => {
    setProductosEnCarrito([])
  }

  return (
    <div className="App">
      <h1>Lista de la compra</h1>
      <ListaDeLaCompra catalogo={catalogo} anadirAlCarrito={anadirAlCarrito}></ListaDeLaCompra>
      <Carrito listaDeLaCompra={productosEnCarrito} borrarDelCarrito={borrarDelCarrito} comprarCarrito={comprarCarrito}/>
    </div>
  );
}

export default App;
