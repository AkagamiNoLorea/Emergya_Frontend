
import '../components/estilos/Navbar.css'
import logo from '../assets/img/logo.png'
import { NavLink } from "react-router-dom"

const Navbar = () => {


  return (

    <>
      <div className="navbar">
        <img src={logo}></img>
        <div className="pestanyas">
        <div className="dropdown">
            <button className="dropbtn">Usuario <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <NavLink to="/misreservas">Mis reservas</NavLink>
              <NavLink to="/">Crear reserva</NavLink>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Administrador <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <NavLink to="/private/listausers">Gestionar usuarios</NavLink>
              <NavLink to="/private/listaoficinas">Gestionar oficinas</NavLink>
              <NavLink to="/private/editarpuestos">Gestionar puestos</NavLink>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}



export default Navbar
