import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../estilos/Forms.css'


const url = "http://localhost:8080/api/v1/usuario"
const ListaUsuario = () => {

    const [usuarios, setUsuarios] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        const fetchUsuarios = async () => {
            const response = await axios.get(url);
            setUsuarios(response.data)
        }
        fetchUsuarios()
    }, [])

    const handleDelete = async (usuario) => {
        await axios.delete(`${url}/${usuario.id}`);
        setUsuarios(prevUsuarios => prevUsuarios.filter(user => user.id !== usuario.id));
        alert(`ATENCION! ELIMINANDO USUARIO ${usuario.nombre}`);

    };

    return (
        <><div className="titulopagina"><h1>Lista de usuarios</h1>
        <div className="createButton">
            <button onClick={() => navigate("/private/crearuser")}> Crear Usuario</button>
        </div></div>
            {
                usuarios
                .sort((a, b) => a.nombre.localeCompare(b.nombre))
                .map((usuario) => (
                    <div className="card" key={usuario.id}>
                        <div className="card-text">
                            <h2>{usuario.nombre}</h2>
                        </div>
                        <div className="card-buttons">
                            <button onClick={() => navigate(`/private/editaruser/${usuario.id}`)}><i className="fa-solid fa-pen"></i> </button>
                            <button onClick={() => handleDelete(usuario)}><i className="fa-solid fa-xmark"></i> </button>
                        </div>
                    </div >
                ))
            }
        </>
    )
}

export default ListaUsuario