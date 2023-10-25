import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const url = "http://localhost:8080/api/v1/oficina";

const BorrarOficina = () => {
  const [oficina, setOficina] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { oficinaId } = useParams();

  useEffect(() => {
    const fetchOficina = async () => {
      try {
        console.log("handleInOficinaDelete2")
        const response = await axios.get(`${url}/${oficinaId}`);
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

  const handleDeleteOficina = async (e) => {
    e.preventDefault()
      await axios.delete(`${url}/${oficinaId}`)
      .then(()=>{
        navigate("/private/listaoficinas")})
      .catch((error)=>console.log("error"));
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="deleteOficinaForm">
      <form>
        <div className="applicationForm">
          <h2>Eliminar oficina {oficina.nombreoficina} </h2>
        </div>
        <h3>¿Estás seguro de que quieres eliminar esta oficina?</h3>
        <div className='form2Buttons'>
          <button className='formButton' onClick={handleDeleteOficina}><i className="fa-solid fa-check"></i> Eliminar</button>
          <button className='formButton' onClick={goBack}><i className="fa-solid fa-xmark"></i>Cancelar</button>
        </div>
    </form>
    </div>
  );
};

export default BorrarOficina