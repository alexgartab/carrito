import React from 'react';
import './App.css';
import ListaDeLaCompra from './Views/ListaDeLaCompra/ListaDeLaCompra';
import catalogo from './Utils/catalogo';

function App() {
  return (
    <div className="App">
      <div>Lista de la compra</div>
      <ListaDeLaCompra catalogo={catalogo}></ListaDeLaCompra>
    </div>
  );
}

export default App;
