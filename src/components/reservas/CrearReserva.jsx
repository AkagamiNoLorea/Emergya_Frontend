import '../estilos/Crearreserva.css'
import Calendar from 'react-calendar'
/* import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const url = "http://localhost:8086/api/v1/usuario"  */

const CrearUsuario = () => {

    /* const [Nombreoficina, setNombreoficina,] = useState('')
    const [Puesto, setPuesto] = useState('')
    const [Planodistribucion, setPlanodistribucion] = useState('')
    const [Diasantelacion, setDiasantelacion] = useState('')

    const navigate = useNavigate()

    const guardar = async (e) => {
        e.preventDefault()
        await axios.post(url, { Nombreoficina: Nombreoficina, Puesto: Puesto, Planodistribucion: Planodistribucion, Diasantelacion: Diasantelacion })
        navigate("/proyectos")
    }  */

    return (
        <>
            {<div className="contenedor-con-fondo">
            </div>}
            <h2>Puestos estado</h2>
            <div className="contenedor-form">
                <div className="contenedor-form1">
                <select id="seleccionar">
                    <option value=""> Selecciona oficina:</option>
                    <option value="Turno de mañana">Capitolio-Proxya-Principal</option>
                    <option value="Turno de tarde">Emergya-Edificio-Forum</option>
                    </select>
                    <Calendar />
                    <div className='contenedor-puesto'>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>10</button>
                        <button>11</button>
                        <button>12</button>
                        <button>13</button>
                        <button>14</button>
                        <button>15</button>
                        <button>16</button>
                        <button>17</button>
                        <button>18</button>
                        <button>19</button>
                        <button>20</button>
                        <button>21</button>
                        <button>22</button>
                        <button>23</button>
                        <button>24</button>
                        <button>25</button>
                        <button>26</button>
                        <button>27</button>
                        <button>28</button>
                        <button>29</button>
                        <button>30</button>
                        <button>31</button>
                        <button>32</button>
                        <button>33</button>
                        <button>34</button>
                        <button>35</button>
                        <button>36</button>
                        <button>37</button>
                        <button>38</button>
                        <button>39</button>
                        <button>40</button>
                        <button>41</button>
                        <button>42</button>
                        <button>43</button>
                        <button>44</button>
                        <button>45</button>
                        <button>46</button>
                        <button>47</button>
                        <button>48</button>
                        <button>49</button>
                        <button>50</button>
                        <button>51</button>
                        <button>52</button>
                    </div>
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
            </div>
        </>
    )
}

export default CrearUsuario