import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const url = "http://localhost:8080/api/v1/usuario"

const CrearUsuario = () => {

    const [nombre, setNombre,] = useState('')
    const [email, setEmail] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [isAdmin, setIsAdmin] = useState(null)

    const navigate = useNavigate()


    const guardar = async (e) => {
        e.preventDefault()
        await axios.post(url, { nombre: nombre, email: email, oficina: oficina, isAdmin: isAdmin })
        navigate("/private/listausers")
    }

    const goBack = () => {
        navigate("/private/listausers");
    }

    return (
        <><form onSubmit={guardar}>
            <div className="applicationForm">
                <h2>Crear Usuario</h2>
            </div>
            <div className="contenedor-form">
                <div className="formTable">
                    <div>
                        <label>Nombre y Apellidos:</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div>
                        <label>Correo electrónico:</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Oficina por defecto:</label>
                        <input type="text" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
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

export default CrearUsuario