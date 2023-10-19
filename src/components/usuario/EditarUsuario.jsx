import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Icon } from '@iconify/react';

const url = "http://localhost:8086/api/v1/oficina"

const EditarUsuario = () => {

  const [Estado, setEstado] = useState('')
  const [Oficina, setOficina] = useState('')
  const [Puesto, setPuesto] = useState('')
  const [Usuario, setUsuario] = useState('')
  const navigate = useNavigate()

  const { id } = useParams()

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${url}/${id}`, { Estado: Estado, Oficina: Oficina, Puesto: Puesto, Usuario: Usuario })
    navigate("/proyectos")
  }
  useEffect(() => {
    const getCharactersById = async () => {

      const response = await axios.get(`${url}/${id}`)
      setEstado(response.data.titulo)
      setOficina(response.data.imagen)
      setPuesto(response.data.git)
      setUsuario(response.data.descripcion)
    }

    getCharactersById()
  }, [id])

  return (
    <>
      {<div className="contenedor-con-fondo">
        <img className='imagenfondo' />
      </div>}
      <div className="contenedor-form"><h2>Editar Repositorio</h2>
        <div className="contenedor-form1">
          <div className="formulario">
            <form onSubmit={update}>
              <div>
                <label>Titulo:</label>
                <input type="text" value={Estado} onChange={(e) => setEstado(e.target.value)} />
              </div>
              <div>
                <label>Imagen:</label>
                <input type="text" value={Oficina} onChange={(e) => setOficina(e.target.value)} />
              </div>
              <div>
                <label>Git:</label>
                <input type="text" value={Puesto} onChange={(e) => setPuesto(e.target.value)} />
              </div>
              <div>
                <label>Descripción:</label>
                <textarea name="" id="" cols="30" rows="10" value={Usuario} onChange={(e) => setUsuario(e.target.value)}>
                </textarea>
              </div>
              <button type="submit"><Icon icon="bxs:edit" color="blue" /></button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditarUsuario