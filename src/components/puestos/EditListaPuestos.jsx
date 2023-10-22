
import { useState, useEffect } from 'react';
import axios from 'axios';

const EditListaPuestos = () => {
  const [puestos, setPuestos] = useState([]);
  const [idOficina, setIdOficina] = useState(''); // Estado para el valor del filtro

  useEffect(() => {
    // Hacer una solicitud GET al backend con el filtro
    axios.get(`http://localhost:8086/api/v1/puestos?idOficina=${idOficina}`)
      .then(response => {
        setPuestos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [idOficina]); // La solicitud se hará cada vez que idOficina cambie

  return (
    <div>EditListaPuestos</div>
  )
}

export default EditListaPuestos