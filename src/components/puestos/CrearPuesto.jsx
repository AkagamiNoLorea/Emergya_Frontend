import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../estilos/Forms.css'

const url = "http://localhost:8080/api/v1/puesto"

const CrearPuesto = () => {

    const [idOficina, setIdOficina,] = useState('')
    const [numero, setNumero] = useState('')
    const [disponible, setDisponible] = useState('')
    const [idEstado, setEstado] = useState('')
    const navigate = useNavigate()

    const guardar = async (e) => {
        e.preventDefault()
        await axios.post(url, { numero: numero, disponible: disponible, idEstado: idEstado, idOficina: idOficina })
        navigate("/private/listaoficinas")
    }
    const goBack = () => {
        navigate("/private/listaoficinas");
    }
    return (
        <>
            <form onSubmit={guardar}>
                <div className="applicationForm">
                    <h2>Crear Puesto</h2>
                </div>
                <div className="contenedor-form">
                    <div className="formTable">
                        <div>
                            <label>Nombre de la oficina:</label>
                            <input type="text" value={nombreoficina} onChange={(e) => setNombreoficina(e.target.value)} />
                        </div>
                        <div>
                            <label>Numero de puesto:</label>
                            <input type="text" value={puesto} onChange={(e) => setPuesto(e.target.value)} />
                        </div>
                        <div>
                            <label>Plano de distribución:</label>
                            <input type="text" value={planodistribucion} onChange={(e) => setPlanodistribucion(e.target.value)} />
                        </div>
                        <div>
                            <label>Días de antelación máxima:</label>
                            <input type="text" value={diasantelacion} onChange={(e) => setDiasantelacion(e.target.value)}></input>
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

export default CrearPuesto