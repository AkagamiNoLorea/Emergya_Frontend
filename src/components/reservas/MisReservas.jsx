import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import { Icon } from '@iconify/react';

/*const url = "http://localhost:8080/api/v1/usuario"*/
const MisReservas = () => {
/*
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getAllcharacters()
    }, [])

    const getAllcharacters = async () => {
        const response = await axios.get(url)
        let data = response.data
        setCharacters(data)
    }

    const handleDelete = async (id) => {
        await axios.delete(`${url}/${id}`);
        setCharacters((prevCharacter) => prevCharacter.filter((character) => character.id !== id));
        alert(`ATENCION! ELIMINANDO REPOSITORIO ID#${id}`);
    };

    getAllcharacters()>*/

    return (
        <>
    

<div className='container'>
   <label for="seleccionar">Reservar:</label>
   <select id="seleccionar">
   <option value="">Escojer Turno:</option>
<option value="Turno de mañana">Turno de mañana</option>
<option value="Turno de tarde">Turno de Tarde</option>
<option value="Todo el día">Todo el día</option>
</select>

<button className='boton'>Nombre de la oficina</button>
  <p></p>
  <p>Puesto reservado:</p>


<button className='Confirmarreserva'>Confirmar reserva</button>
<button className='Cancelar'>Cancelar</button>




</div>

        </>
    )
}

export default MisReservas