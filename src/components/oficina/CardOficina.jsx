export default function CardOficina(props) {

    const oficina = props.oficina;

    return (
        <>
            <div className="card">
                <div className="card-container">
                    <div className="card-text">
                        <h2>{oficina.nombre}</h2>
                        <p>{oficina.fecha}</p>
                    </div>
                    <div className="card-image">
                        <img src={oficina.img} alt="" className="img" />
                    </div>
                    <div className="card-frameworks">
                        <div>Frameworks y librerias: {oficina.frameworksAndLibraries}</div>
                    </div>
                    <div className="card-urls">
                        <p> <a href={oficina.enlace} target='_blank'>Enlace a GitHub</a></p>
                        <p> <a href={oficina.despliegue} target='_blank'>Despliegue</a></p>
                    </div>
                    <div className="card-buttons">
                        <button onClick={() => props.editOficina(oficina)}><i className="fa-solid fa-pen"></i> Editar </button>
                        <button onClick={() => props.deleteOficina(oficina)}><i className="fa-solid fa-xmark"></i> Eliminar </button>
                    </div>
                </div>
            </div>
        </>
    )
}
