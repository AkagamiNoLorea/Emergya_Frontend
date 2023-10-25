import { useNavigate } from "react-router-dom";


const MisReservas = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate("/private/listaoficinas");
    }

    return (
        <div className='cards-container'>
            <div className='card reservation'>
                <div className='card-body'>
                    <h3>Fecha</h3>
                    <h5>30/10/2023</h5>
                    <div className='reservation-details'>
                        <h3>Reservado:</h3>
                        <h5>Todo el día</h5>
                        <p className="reservaoficina">Nombre de la oficina</p>
                        <div className='seat-details'>
                            <h3>Puesto reservado:</h3>
                            <h5>25</h5>
                            <div className='form2Buttons'>
                                <button className='formButton' type="button" onClick={goBack}><i className="fa-solid fa-xmark"></i> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card reservation'>
                <div className='card-body'>
                    <h3>Fecha</h3>
                    <h5>30/10/2023</h5>
                    <div className='reservation-details'>
                        <h3>Reservado:</h3>
                        <h5>Todo el día</h5>
                        <p className="reservaoficina">Nombre de la oficina</p>
                        <div className='seat-details'>
                            <h3>Puesto reservado:</h3>
                            <h5>25</h5>
                            <div className='form2Buttons'>
                                <button className='formButton' type="button" onClick={goBack}><i className="fa-solid fa-xmark"></i> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card reservation'>
                <div className='card-body'>
                    <h3>Fecha</h3>
                    <h5>30/10/2023</h5>
                    <div className='reservation-details'>
                        <h3>Reservado:</h3>
                        <h5>Todo el día</h5>
                        <p className="reservaoficina">Nombre de la oficina</p>
                        <div className='seat-details'>
                            <h3>Puesto reservado:</h3>
                            <h5>25</h5>
                            <div className='form2Buttons'>
                                <button className='formButton' type="button" onClick={goBack}><i className="fa-solid fa-xmark"></i> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MisReservas