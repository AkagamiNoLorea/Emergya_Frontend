import React from 'react'
import '../components/estilos/Navbar.css'
import logo from '../assets/img/logo.png'

function Navbar () {


  return (

    <>
      <div class="navbar">
        <img src="{logo}"/>
        <div class="usuario">
          <a href="usuario">Usuarios</a>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Administrador
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="gestionar_usuario">Gestionar Usuario</a>
            <a href="gestionar_oficinas">Gestionar Oficinas</a>
            <a href="gestionar_asientos">Gestionar Asientos</a>
          </div>
        </div>
      </div>

    </>
  )
}



export default Navbar