import '../estilos/Crearreserva.css'
//import Calendar from 'react-calendar'
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const url = "http://localhost:8086/api/v1/usuariopuesto"

const CrearReserva = () => {
    const [idUsuario, setIdUsuario] = useState('')
    const [idPuesto, setIdPuesto] = useState('')
    const [disponible, setDisponible] = useState('')
    const [numero, setNumero] = useState('')

    const navigate = useNavigate()

    const guardar = async (e) => {
        e.preventDefault()
        await axios.post(url, { disponible: disponible, idOficina: idOficina })
        navigate("/proyectos")
    }

    function comparar(a, b) {
        return a - b;
    }

    return (
        <>
            <div className="contenedor-con-fondo">
            </div>
            <h2>Puestos estado</h2>
            <aside className="selectorYLeyenda">
                <div className="contenedor-form1">
                    <select id="seleccionar">
                        <option value=""> Selecciona oficina:</option>
                        <option value="Turno de mañana">Capitolio-Proxya-Principal</option>
                        <option value="Turno de tarde">Emergya-Edificio-Forum</option>
                    </select>
                </div>
                {/*<Calendar />*/}
                <div className="leyendaBox">
                    <ul>
                        <li><div className="color"></div><h3>No Disponible</h3></li>
                        <li><div className="color"></div><h3>Tu reserva</h3></li>
                        <li><div className="color"></div><h3>Libre</h3></li>
                        <li><div className="color"></div><h3>Ocupado mañana</h3></li>
                        <li><div className="color"></div><h3>Ocupado tarde</h3></li>
                        <li><div className="color"></div><h3>Ocupado día</h3></li>
                    </ul>

                </div>
            </aside>
            <main>
                <div className='contenedor-puestos'>
                    <div className='card-puesto'>{
                        puestos
                            .sort(comparar)
                            .map((puesto) => (
                                <div className="card" key={puesto.id} onClick={() => navigate(`/confirmarreserva/${puesto.id}`)}>
                                    <div className="card-text">
                                        <h2>{puesto.numero}</h2>
                                    </div>
                                </div >
                            ))
                    }</div>
                </div>
            </main>




        </>
    )
}

export default CrearReserva