import React from 'react'
import './navbar.css'

function Navbar () {


  return (

    <>
      <div class="navbar">
        <img src="/Users/encarnasantanahormiga/Desktop/navbar/@latest/src/A76039D5-06FF-40F8-AC27-6B082A9784BC.png"/>
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