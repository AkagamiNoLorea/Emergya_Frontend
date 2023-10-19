import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import CardOficina from "./CardOficina";


const url = "http://localhost:8086/api/v1/oficina"
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
            <div className="createButton">
                <button className="formButton" onClick={() => navigate("/create")}><i className="fa-solid fa-plus"></i> Crear Proyecto</button>
            </div>
            <div className="box">
                {
                    cards
                }
            </div>
        </>
    )
}
export default ListaOficinas