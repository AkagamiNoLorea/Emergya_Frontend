import axios from 'axios'
  import { useEffect, useState } from 'react'
  import { NavLink } from "react-router-dom"
  import { Icon } from '@iconify/react';
  
  const url = "http://localhost:8086/api/v1/Usuariopuesto"
const ElegirOficina = () => {
  
      const [oficina, setOficina] = useState([])
  
      useEffect(() => {
          getAlloficinas()
      }, [])
  
      const getAlloficinas = async () => {
          const response = await axios.get(url)
          let data = response.data
          setOficina(data)
      }

  
      getAllOficinas()
  
      return (
          <>
              {
                  oficina.map(oficina => (
                      <div className='contenedor-api1' key={oficina.id}>
                          <div className='contenedor-api2'>
                              <div className='card-api'>
                                  <h3>{oficina.NombreOficina}</h3>
                                  <NavLink to={`/private/editarpuestos/${oficina.id}`}><button className='boton-edit' ><Icon icon="bxs:edit" color="blue" /></button></NavLink>
                              </div>
                          </div>
                      </div>
                  ))
              }
  
          </>
      )
  }

export default ElegirOficina