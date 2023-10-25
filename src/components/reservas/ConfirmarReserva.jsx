import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const url = "http://localhost:8080/api/v1/Usuariopuesto"

const ConfirmarReserva = () => {
  const navigate = useNavigate();

  const cancelar = () => {
    navigate("/crearreserva");
  }; 
  const confirmar = () => {
    navigate("/crearreserva");
  };

  return (
    <form onSubmit={confirmar}>
      <div className="contenedor-form">
        <h3>Confirmar Reserva para:</h3>
        <h3>Oficina 1</h3>
        <h3>30/10/2023</h3>
        <h3>Puesto numero: 5</h3>
        <label>Escoge turno:</label>
        <select value="">
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