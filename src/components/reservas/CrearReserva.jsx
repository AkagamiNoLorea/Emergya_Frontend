import '../estilos/Crearreserva.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '../estilos/Forms.css'
import { useNavigate } from "react-router-dom"


const CrearUsuario = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='elegiroficina'>
                <select className="seleccionar">
                    <option value=""> Selecciona oficina:</option>
                    <option value="Turno de mañana">Capitolio-Proxya-Principal</option>
                    <option value="Turno de tarde">Emergya-Edificio-Forum</option>
                </select>
            </div>
            <div className="bodyReservas">
                <aside>
                    <div>
                        <Calendar />
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
                    </div>
                </aside>
                <div className='contenedor-puesto'>
                    <div className="listabotones">
                        <button className="boton">1</button>
                        <button className="boton rojo">2</button>
                        <button className="boton amarillo">3</button>
                        <button className="boton azul">4</button>
                        <button className="boton verde"onClick={() => navigate("/confirmarreserva")}>5</button>
                        <button className="boton naranja">6</button>
                        <button className="boton">7</button>
                        <button className="boton amarillo">8</button>
                        <button className="boton amarillo">9</button>
                        <button className="boton">10</button>
                        <button className="boton naranja">11</button>
                        <button className="boton">12</button>
                        <button className="boton verde">13</button>
                        <button className="boton">14</button>
                        <button className="boton amarillo">15</button>
                        <button className="boton">16</button>
                        <button className="boton naranja">17</button>
                        <button className="boton verde">18</button>
                        <button className="boton verde">19</button>
                        <button className="boton verde">20</button>
                        <button className="boton rojo">21</button>
                        <button className="boton naranja">22</button>
                        <button className="boton naranja">23</button>
                        <button className="boton verde">24</button>
                        <button className="boton rojo">25</button>
                        <button className="boton">26</button>
                        <button className="boton rojo">27</button>
                        <button className="boton">28</button>
                        <button className="boton rojo">29</button>
                        <button className="boton amarillo">30</button>
                        <button className="boton naranja">31</button>
                        <button className="boton amarillo">32</button>
                    </div>
                    <div className="img-box">
                        <img src="src\assets\img\emergya.jpg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CrearUsuario