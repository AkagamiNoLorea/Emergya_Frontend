import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import CardOficina from "./CardOficina";


const url = "http://localhost:8080/api/v1/oficina"
const ListaOficinas = () => {

    const [oficinas, setOficinas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllOficinas()
    }, [])


    const getAllOficinas = async () => {
        const response = await axios.get(url)
        let data = response.data;
        setOficinas(data);
    }

    // create, read, update, delete 
    const handleEditOficina = (oficina) => {
        navigate(`/private/editaroficinas/${oficina.id}`)
    };

    const handleDeleteOficina = (oficina) => {
        navigate(`/private/borraroficinas/${oficina.id}`);
    };

    const cards = oficinas.map((oficina) => <CardOficina
        key={oficina.id}
        oficina={oficina}
        editOficina={handleEditOficina}
        deleteOficina={handleDeleteOficina}
    />);

    return (
        <>
        <div className="titulopagina"><h1>Lista de oficinas</h1>
            <div className="createButton">
                <button onClick={() => navigate("/private/crearoficinas")}> Crear Oficina</button>
            </div></div>
            <div className="box">
                {
                    cards
                }
            </div>
        </>
    )
}
export default ListaOficinas