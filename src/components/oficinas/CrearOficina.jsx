import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../estilos/Forms.css'

const url = "http://localhost:8086/api/v1/oficina"

const CrearOficina = () => {

    const [Nombreoficina, setNombreoficina,] = useState('')
    const [Puesto, setPuesto] = useState('')
    const [Planodistribucion, setPlanodistribucion] = useState('')
    const [Diasantelacion, setDiasantelacion] = useState('')

    const navigate = useNavigate()

    const guardar = async (e) => {
        e.preventDefault()
        await axios.post(url, { Nombreoficina: Nombreoficina, Puesto: Puesto, Planodistribucion: Planodistribucion, Diasantelacion: Diasantelacion })
        navigate("/proyectos")
    }

    return (
        <>
            <form onSubmit={guardar}>
            <div className="applicationForm">
            <h2>Crear Repositorio</h2>
        </div>
            <div className="contenedor-form">
                    <div className="formTable">
                            <div>
                                <label>Titulo:</label>
                                <input type="text" value={Nombreoficina} onChange={(e) => setNombreoficina(e.target.value)} />
                            </div>
                            <div>
                                <label>Imagen:</label>
                                <input type="text" value={Puesto} onChange={(e) => setPuesto(e.target.value)} />
                            </div>
                            <div>
                                <label>Git:</label>
                                <input type="text" value={Planodistribucion} onChange={(e) => setPlanodistribucion(e.target.value)} />
                            </div>
                            <div>
                                <label>Descripción:</label>
                                <textarea name="" id="" value={Diasantelacion} onChange={(e) => setDiasantelacion(e.target.value)}>

                                </textarea>
                            </div>
                            <div className='form2Buttons'>
              <button className='formButton' type="submit"><i className="fa-regular fa-floppy-disk"></i> Guardar canvios</button>
              <button className='formButton' type="button"><i className="fa-solid fa-xmark"></i> Cancelar</button>
            </div>
                    </div>
                </div>
                </form>
        </>
    )
}

export default CrearOficina