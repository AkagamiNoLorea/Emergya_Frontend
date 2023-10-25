import '../estilos/Forms.css'
import { useNavigate } from "react-router-dom"
const CrearPuesto = () => {
    const navigate = useNavigate()
    const guardar = async () => {
        navigate("/private/editarpuestos")
    }
    const goBack = () => {
        navigate("/private/editarpuestos");
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
                            <label>Selecciona oficina:</label>
                            <select>
                    <option value=""> Selecciona oficina:</option>
                    <option value="Turno de mañana">Capitolio-Proxya-Principal</option>
                    <option value="Turno de tarde">Emergya-Edificio-Forum</option>
                </select>
                        </div>
                        <div>
                            <label>Numero de puesto:</label>
                            <input type="text" value="" />
                        </div>
                        <div>
                            <label>Disponibilidad:</label>
                            <select>
                            <option value="false">No disponible</option>
                            <option value="true">disponible</option>
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

export default CrearPuesto