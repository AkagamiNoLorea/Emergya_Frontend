import PropTypes from 'prop-types';

export default function CardOficina(props) {

    CardOficina.propTypes = {
        oficina: PropTypes.object.isRequired,
        editOficina: PropTypes.func.isRequired,
        deleteOficina: PropTypes.func.isRequired,
    };

    const oficina = props.oficina;

    return (
        <>
            <div className="card">
                <div className="card-container">
                    <div className="card-text">
                        <h2>{oficina.nombre}</h2>
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

