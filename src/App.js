import React from 'react';
import './App.css';
import ListaDeLaCompra from './Views/ListaDeLaCompra/ListaDeLaCompra';
import catalogo from './Utils/catalogo';
import Carrito from './Views/Carrito/Carrito';

function App() {
  const [productosEnCarrito, setProductosEnCarrito] = React.useState([]);
  const anadirAlCarrito = (producto) => {
    const copiaProductosEnCarrito = [...productosEnCarrito]
    copiaProductosEnCarrito.push(producto)
    setProductosEnCarrito(copiaProductosEnCarrito)
  }
  return (
    <div className="App">
      <h1>Lista de la compra</h1>
      <ListaDeLaCompra catalogo={catalogo} anadirAlCarrito={anadirAlCarrito}></ListaDeLaCompra>
      <Carrito listaDeLaCompra={productosEnCarrito} />
    </div>
  );
}

export default App;
