import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const url = "http://localhost:8086/api/v1/oficina"

const CrearUsuario = () => {

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
            {<div className="contenedor-con-fondo">
            </div>}
            <h2>Crear Repositorio</h2>
            <div className="contenedor-form">
                <div className="contenedor-form1">
                    <div className="formulario">
                        <form onSubmit={guardar}>
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
                                <textarea name="" id="" cols="30" rows="10" value={Diasantelacion} onChange={(e) => setDiasantelacion(e.target.value)}>

                                </textarea>
                            </div>
                            <button></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CrearUsuario