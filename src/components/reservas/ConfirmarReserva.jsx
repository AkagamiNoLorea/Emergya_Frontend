import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const url = "http://localhost:8080/api/v1/Usuariopuesto"

const ConfirmarReserva = () => {
  const [turno, setTurno] = useState("");
  //canviar variables
  const navigate = useNavigate();
  const location = useLocation();
  const nombreOficina = location.state?.nombreOficina || 'Oficina desconocida';  // Usando el operador opcional para evitar errores si state no está definido

  const confirmar = async (e) => {
    e.preventDefault()
    //falta canviar variables
    await axios.post(url, { nombre: nombre, email: email, empresa: empresa, isAdmin: isAdmin })
    navigate("/misreservas");
  };

  const cancelar = () => {
    navigate("/crearreserva");
  };

  return (
    <form onSubmit={confirmar}>
      <div className="contenedor-form">
        <h3>Confirmar Reserva para {oficina.nombreOficina}</h3>
        <h3>{oficina.fecha}</h3>
        <h3>Puesto numero: {oficina.id_puesto}</h3>
        <label>Escoge turno:</label>
        <select value={turno} onChange={(e) => setTurno(e.target.value)}>
          <option value="mañana">Turno Mañana</option>
          <option value="tarde">Turno Tarde</option>
          <option value="todo">Todo el Día</option>
        </select>
        <div className='form2Buttons'>
          <button className='formButton' type="submit"><i className="fa-regular fa-floppy-disk"></i></button>
          <button className='formButton' type="button" onClick={cancelar}><i className="fa-solid fa-xmark"></i></button>
        </div>
      </div>
    </form>
  );
};

export default ConfirmarReserva;