import React, { useState } from 'react';

const Formulario = ({ agregarProducto }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(true);

  const handleAgregar = () => {
    if (nombre && precio) {
      agregarProducto({ nombre, descripcion, precio });
      // Limpiar campos después de agregar producto
      setNombre('');
      setDescripcion('');
      setPrecio('');
      setBotonDeshabilitado(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nombre' || name === 'precio') {
      setBotonDeshabilitado(value.trim() === '');
    }

    if (name === 'nombre') {
      setNombre(value);
    } else if (name === 'descripcion') {
      setDescripcion(value);
    } else if (name === 'precio') {
      setPrecio(value);
    }
  };

  return (
    <div>
      <h2>Formulario</h2>
      <label>
        Nombre:
        <input type="text" name="nombre" value={nombre} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Descripción:
        <input type="text" name="descripcion" value={descripcion} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Precio:
        <input type="text" name="precio" value={precio} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleAgregar} disabled={botonDeshabilitado}>
        Agregar
      </button>
    </div>
  );
};

export default Formulario;
