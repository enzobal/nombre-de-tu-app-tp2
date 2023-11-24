import React, { useState } from 'react';
import Formulario from './componentes/Formulario';
import ListaProductos from './componentes/ListaProductos';

const App = () => {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const quitarProducto = (nombre) => {
    const nuevosProductos = productos.filter((producto) => producto.nombre !== nombre);
    setProductos(nuevosProductos);
  };

  return (
    <div>
      <Formulario agregarProducto={agregarProducto} />
      <hr />
      <ListaProductos productos={productos} quitarProducto={quitarProducto} />
    </div>
  );
};

export default App;
