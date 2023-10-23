import { useState, useEffect } from 'react';
import axios from 'axios';
import '../estilos/Forms.css'
import '../estilos/Toggle.scss'

const url = "http://localhost:8080/api/v1/puesto";
const urlOficina = "http://localhost:8080/api/v1/oficina";

const EditListaPuestos = () => {
  const [puestos, setPuestos] = useState([]);
  const [idOficina, setIdOficina] = useState('');
  const [listaOficinas, setListaOficinas] = useState([]);
  const [disponible, setDisponible] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPuestos = async () => {
      try {
        await axios.get(urlOficina)
          .then((response) => {
            console.log(response)
            setListaOficinas(response.data);
            if(idOficina === null||idOficina === ''){
              setIdOficina(response.data[0].id);
            }
            console.log(idOficina)
            return axios.get(`${url}/${response.data[0].id}`)
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

  return (
    <>
      <div className="titulopagina">
        <label>Selecciona la oficina:</label>
        <select value={idOficina} onChange={(e) => onChangeOficina(e.target.value, e)}>
          {
            listaOficinas.map((oficina, index) => {
              return <option key={index} value={oficina.id}>{oficina.nombreoficina}</option>;
            })
          }
        </select>
        <h1>Lista de puestos</h1>
        <div className="createButton">
          {/*<button onClick={() => navigate("/private/crearpuesto")}> Crear Puesto</button>*/}
        </div></div>
      {
        puestos
          //.sort((a, b) => a.numero.localeCompare(b.numero))
          .map((puesto) => (
            <div className="card" key={puesto.id}>
              <div className="card-text">
                <h2>{puesto.numero}</h2>
              </div>
              <div className="card-buttons">
                <div className="toggle-switch" onChange={(e) => setDisponible(e.target.value)}>
                  <input type="checkbox" className="toggle-switch-checkbox" name="toggleSwitch" id="toggleSwitch" />
                  <label className="toggle-switch-label" for="toggleSwitch">
                    <span className="toggle-switch-inner"></span>
                    <span className="toggle-switch-switch"></span>
                  </label>
                </div>
                <button onClick={() => handleDelete(puesto)}><i className="fa-solid fa-xmark"></i> </button>
              </div>
            </div >
          ))
      }
    </>
  )
}

export default EditListaPuestos