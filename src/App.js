import React from 'react';
import './App.css';
import ListaDeLaCompra from './Views/ListaDeLaCompra/ListaDeLaCompra';
import catalogo from './Utils/catalogo';
import Carrito from './Views/Carrito/Carrito';

function App() {
  return (
    <div className="App">
      <h1>Lista de la compra</h1>
      <ListaDeLaCompra catalogo={catalogo}></ListaDeLaCompra>
      <Carrito listaDeLaCompra={[]}/>
    </div>
  );
}

export default App;
