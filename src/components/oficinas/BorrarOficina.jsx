import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const url = "http://localhost:8086/api/v1/oficina";

const BorrarOficina = () => {
  const [oficina, setOficina] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { portfolioId } = useParams();

  useEffect(() => {
    const fetchOficina = async () => {
      try {
        const response = await axios.get(`${url}/${oficiinaId}`);
        setOficina(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchOficina();
  }, [oficinaId]);

  const goBack = () => {
    navigate("/private/listaoficinas");
  };

  const handleDeleteOficina = async () => {
    try {
      await axios.delete(`${url}/${ofinicaId}`);
      navigate("/private/listaoficinas");
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="deleteOficinaForm">
      <form>
        <div className="applicationForm">
          <h2>Eliminar oficina {oficina.nombre} </h2>
        </div>
        <h3>¿Estás seguro de que quieres eliminar este proyecto?</h3>
        <div className='form2Buttons'>
          <button className='formButton' onClick={handleDeleteOficina}><i className="fa-solid fa-check"></i> Eliminar</button>
          <button className='formButton' type="button" onClick={goBack}><i className="fa-solid fa-xmark"></i>Cancelar</button>
        </div>
    </form>
    </div>
  );
};

export default BorrarOficina