import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ConfirmarReserva = () => {
    const [turno, setTurno] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const nombreOficina = location.state?.nombreOficina || 'Oficina desconocida';  // Usando el operador opcional para evitar errores si state no está definido

    const confirmar = () => {
        // Aquí va el código para confirmar la reserva, por ejemplo, hacer una petición a la API.
        navigate("/rutaConfirmacion"); // Suponiendo que hay una ruta para confirmar
    };

    const cancelar = () => {
        navigate("/rutaCancelar"); // Suponiendo que hay una ruta para cancelar
    };

    return (
        <div className="card-reserva">
            <h3>Confirmar Reserva para {nombreOficina}</h3>
            <label>Escoge turno:</label>
            <select value={turno} onChange={(e) => setTurno(e.target.value)}>
                <option value="mañana">Turno Mañana</option>
                <option value="tarde">Turno Tarde</option>
                <option value="todo">Todo el Día</option>
            </select>
            <div>
                <button onClick={confirmar}>Confirmar Reserva</button>
                <button onClick={cancelar}>Cancelar</button>
            </div>
        </div>
    );
};

export default ConfirmarReserva;
