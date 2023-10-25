import { useState, useEffect } from 'react';
import axios from 'axios';
import '../estilos/Forms.css'
import '../estilos/Toggle.scss'
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8080/api/v1/puesto";
const urlOficina = "http://localhost:8080/api/v1/oficina";

const EditListaPuestos = () => {
  const [puestos, setPuestos] = useState([]);
  const [idOficina, setIdOficina] = useState('');
  const [listaOficinas, setListaOficinas] = useState([]);
  const [disponible, setDisponible] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPuestos = async () => {
      try {
        await axios.get(urlOficina)
          .then((response) => {
            setListaOficinas(response.data);
            if (idOficina === null || idOficina === '') {
              setIdOficina(response.data[0].id);
              return axios.get(`${url}/${response.data[0].id}`)
            } else {
              return axios.get(`${url}/${idOficina}`)
            }

          }).then((responsePuestos) => {
            setPuestos(responsePuestos.data);
          });
      } catch (error) {
        setError(error.message);
      }
    };

    if (error) {
      return <p>Error: {error}</p>;
    }
    fetchPuestos();
  }, [idOficina]);

  const handleDelete = async (puesto) => {
    await axios.delete(`${url}/${puesto.id}`);
    setPuestos(prevPuestos => prevPuestos.filter(puesto => puesto.id !== puesto.id));
    alert(`ATENCION! ELIMINANDO PUESTO ${puesto.numero}`);
  }
  const onChangeOficina = async (idOficina, e) => {
    e.preventDefault()
    setIdOficina(idOficina);
    await axios.get(`${url}/${idOficina}`)
      .then((response) => {
        setListaOficinas(response.data);
      });
  }
  const saveDisponible = async (disponible, puesto) => {
    const newPuesto = {
      ...puesto,
      disponible: disponible
    }
    await axios.put(`${url}/${newPuesto.id}`, newPuesto)
    alert(`ATENCION! CAMBIADA DISPONIBILIDAD DE PUESTO ${puesto.numero}`);
  }


  return (
    <>
    <select className='seleccionar' value={idOficina} onChange={(e) => onChangeOficina(e.target.value, e)}>
          {
            listaOficinas.map((oficina, index) => {
              return <option key={index} value={oficina.id}>{oficina.nombreoficina}</option>;
            })
          }
        </select>
      <div className="titulopagina">
        
        <h1>Lista de puestos</h1>
        <div className="createButton">
          <button onClick={() => navigate("/private/crearpuesto")}> Crear Puesto</button>
        </div></div>
      {
        puestos
          .sort((a, b) => a.numero - b.numero)
          .map((puesto, index) => (
            <div className="card-lista-puesto">
            <div className="card" key={puesto.id}>
              <div className="card-text">
                <h2>{puesto.numero}</h2>
              </div>
              <div className="card-buttons">
                <div className="toggle-switch" >
                  <input type="checkbox" defaultChecked={puesto.disponible} onChange={(e) => saveDisponible(e.target.checked, puesto)}
                  className="toggle-switch-checkbox" name="toggleSwitch" id={"toggleSwitch" + index}/>
                  <label className="toggle-switch-label" for={"toggleSwitch" + index}>
                    <span className="toggle-switch-inner"></span>
                    <span className="toggle-switch-switch"></span>
                  </label>
                </div>
                <button onClick={() => handleDelete(puesto)}><i className="fa-solid fa-xmark"></i> </button>
              </div>
            </div >
            </div>
          ))
      }
    </>
  )
}

export default EditListaPuestos