
import '../components/estilos/Navbar.css'
import logo from '../assets/img/logo.png'

const Navbar = () => {


  return (

    <>
      <div className="navbar">
       <div className='img'> 
       <img src={logo}></img>
       </div>
       
        <div className="pestanyas">
          <div className="usuario">
            <a href="usuario">Usuarios</a>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Administrador
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="gestionar_usuario">Gestionar Usuario</a>
              <a href="gestionar_oficinas">Gestionar Oficinas</a>
              <a href="gestionar_asientos">Gestionar Asientos</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}



export default Navbar
