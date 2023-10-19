  import { useState, useEffect } from 'react';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  import { useParams } from 'react-router-dom';
  
  const url = "http://localhost:8086/api/v1/oficina"
  
const EditarOficina = () => {  
    const [oficina, setOficina] = useState({});
    const [Nombreoficina, setNombreoficina] = useState('')
    const [Puesto, setPuesto] = useState('')
    const [Planodistribucion, setPlanodistribucion] = useState('')
    const [Diasantelacion, setDiasantelacion] = useState('')
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { oficinaId } = useParams();
  
    useEffect(() => {
      const fetchOficina = async () => {
        try {
          const response = await axios.get(`${url}/${oficinaId}`);
          setOficina(response.data);
          setNombreoficina(response.data.Nombreoficina);
          setPuesto(response.data.Puesto);
          setPlanodistribucion(response.data.Planodistribucion);
          setDiasantelacion(response.data.Diasantelacion);
        } catch (error) {
          setError(error.message);
        }
      };
      if (error) {
        return <p>Error: {error}</p>;
      }
  
      fetchOficina();
    }, [oficinaId]);
  
    const update = async (e) => {
      e.preventDefault()
      await axios.put(`${url}/${oficinaId}`, {
        oficina: oficina,
        Nombreoficina: Nombreoficina,
        Puesto: Puesto,
        Planodistribucion: Planodistribucion,
        Diasantelacion: Diasantelacion
      })
      navigate("/private/listaoficinas")
    }
  
    const goBack = () => {
      navigate("/private/listaoficinas");
    }
  
  
    return (
      <div className="saveOficinaForm">
        <form onSubmit={update}>
          <div className="applicationForm">
            <h1>Modificar oficina</h1>
          </div>
          <div className="formTable">
            <div>
              <label>Nombre de la oficina:</label>
              <input type="text" defaultValue={oficina.Nombreoficina} onChange={(e) => setNombreoficina(e.target.value)}/>
            </div>
            <div>
              <label>Numero de puestos máximos:</label>
              <input type="number" defaultValue={oficina.Puesto} onChange={(e) => setPuesto(e.target.value)}/>
            </div>
            <div>
              <label>Plano de distribución</label>
              <input type="text" value={oficina.Planodistribucion} onChange={(e) => setPlanodistribucion(e.target.value)} />
            </div>
            <div>
                  <label>Días de antelación máximos</label>
                  <input type="number" defaultValue={oficina.Diasantelacion} onChange={(e) => setDiasantelacion(e.target.value)} />
            </div>
            <div className='form2Buttons'>
              <button className='formButton' type="submit"><i className="fa-regular fa-floppy-disk"></i></button>
              <button className='formButton' type="button" onClick={goBack}><i className="fa-solid fa-xmark"></i> </button>
            </div>
          </div>
        </form >
      </div>
    );
  };
export default EditarOficina