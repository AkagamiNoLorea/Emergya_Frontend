import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const url = "http://localhost:8080/api/v1/usuario"
const urlOficina = "http://localhost:8080/api/v1/oficina"

const EditarUsuario = () => {

  const [usuario, setUsuario] = useState({})
  const [nombre, setNombre,] = useState('')
  const [email, setEmail] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [isAdmin, setIsAdmin] = useState('')
  const navigate = useNavigate()
  const {id} = useParams()
  const [error, setError] = useState(null);
  const [oficinas, setOficinas] = useState([]);


  useEffect(() => {
    
    const fetchUsuario = async () => {
      try {
      const response = await axios.get(`${url}/${id}`)
      const responseOficina = await axios.get(urlOficina)
      setUsuario(response.data)
      setNombre(response.data.nombre)
      setEmail(response.data.email)
      setEmpresa(response.data.empresa)
      setIsAdmin(response.data.isAdmin)
      setOficinas(responseOficina.data)
    } catch (error) {
      setError(error.message);
    }
  };
  if (error) {
    return <p>Error: {error}</p>;
  }
    fetchUsuario();
  }, [id]);
  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${url}/${id}`, {usuario: usuario, nombre: nombre, email: email, empresa: empresa, isAdmin: isAdmin })
    navigate("/private/listausers")
  }

  const goBack = () => {
    navigate("/private/listausers");
}

  return (
    <>
      <form onSubmit={update}>
            <div className="applicationForm">
                <h2>Modificar Usuario</h2>
            </div>
            <div className="contenedor-form">
                <div className="formTable">
                    <div>
                        <label>Nombre y Apellidos:</label>
                        <input type="text" defaultValue={usuario.nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div>
                        <label>Correo electrónico:</label>
                        <input type="text" defaultValue={usuario.email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Oficina por defecto:</label>
                        <select value={empresa} onChange={(e) => setEmpresa(e.target.value)}>
                        {
                        oficinas.map((oficina, index) => {
                          return <option key={index} value={oficina.id}>{oficina.nombreoficina}</option>;
                            })
                            }
                        </select>
                    </div>
                    <div>
                        <label>Rol:</label>
                        <select value={isAdmin} onChange={(e) => setIsAdmin(e.target.value)}>
                            <option value="false">Usuario</option>
                            <option value="true">Administrador</option>
                        </select>
                    </div>
                    <div className='form2Buttons'>
                            <button className='formButton' type="submit"><i className="fa-regular fa-floppy-disk"></i></button>
                            <button className='formButton' type="button" onClick={goBack}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                </div>
            </div>
        </form>
    </>
  )
}

export default EditarUsuario