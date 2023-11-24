import React from 'react';

const ListaProductos = ({ productos, quitarProducto }) => {
  const total = productos.reduce((acc, producto) => acc + parseFloat(producto.precio), 0);

  return (
    <div>
      <h2>Lista de Productos</h2>
      {productos.length === 0 ? (
        <p>Cargar productos</p>
      ) : (
        <ul>
          {productos.map((producto) => (
            <li key={producto.nombre}>
              {producto.nombre} - {producto.descripcion} - ${producto.precio}
              <button onClick={() => quitarProducto(producto.nombre)}>Quitar</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default ListaProductos;
