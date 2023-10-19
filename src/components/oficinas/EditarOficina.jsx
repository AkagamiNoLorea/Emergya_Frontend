  import { useState, useEffect } from 'react';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  import { useParams } from 'react-router-dom';
  
  const url = "http://localhost:8086/api/v1/oficina"
  
const EditarOficina = () => {  
    const [oficina, setOficina] = useState({});
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [img, setImg] = useState('')
    const [htmlValue, setHtmlValue] = useState('')
    const [cssValue, setCssValue] = useState('')
    const [jsValue, setJsValue] = useState('')
    const [javaValue, setJavaValue] = useState('')
    const [frameworksAndLibraries, setFrameworksAndLibraries] = useState('')
    const [enlace, setEnlace] = useState('')
    const [despliegue, setDespliegue] = useState('')
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { oficinaId } = useParams();
  
    useEffect(() => {
      const fetchOficina = async () => {
        try {
          const response = await axios.get(`${url}/${oficinaId}`);
          setOficina(response.data);
          setNombre(response.data.nombre);
          setDescripcion(response.data.descripcion);
          setImg(response.data.img);
          setHtmlValue(response.data.htmlValue);
          setCssValue(response.data.cssValue);
          setJsValue(response.data.jsValue);
          setJavaValue(response.data.javaValue);
          setFrameworksAndLibraries(response.data.frameworksAndLibraries);
          setEnlace(response.data.enlace);
          setDespliegue(response.data.despliegue);
        } catch (error) {
          setError(error.message);
        }
      };
      if (error) {
        return <p>Error: {error}</p>;
      }
  
      fetchOficina();
    }, [oficinaId]);
  
    const update = async (e) => {
      e.preventDefault()
      await axios.put(`${url}/${oficinaId}`, {
        oficina: oficina,
        nombre: nombre,
        descripcion: descripcion,
        img: img,
        htmlValue: htmlValue,
        cssValue: cssValue,
        jsValue: jsValue,
        javaValue: javaValue,
        frameworksAndLibraries: frameworksAndLibraries,
        enlace: enlace,
        despliegue: despliegue
      })
      navigate("/private/listaoficinas")
    }
  
    const goBack = () => {
      navigate("/private/listaoficinas");
    }
  
  
    return (
      <div className="saveOficinaForm">
        <form onSubmit={update}>
          <div className="applicationForm">
            <h1>Modificar oficina</h1>
          </div>
          <div className="formTable">
            <div>
              <label>Nombre</label>
              <input placeholder="Ingrese el titulo..." type="text" defaultValue={oficina.nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div>
              <label>Descripcion</label>
              <input placeholder="Describe tu proyecto..." type="text" defaultValue={oficina.descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
            </div>
            <div>
              <label>Imagen</label>
              <input placeholder="Ingrese url de imagen" type="text" value={oficina.img} onChange={(e) => setImg(e.target.value)} />
            </div>
            <div>
              <label>Lenguajes</label>
              <div className='formGrid'>
                <div className='formGridPart'>
                  <label>HTML</label>
                  <input placeholder="Ingrese solo valor numerico" type="text" defaultValue={oficina.htmlValue} onChange={(e) => setHtmlValue(e.target.value)} />
                  <label>CSS</label>
                  <input placeholder="Ingrese solo valor numerico" type="text" defaultValue={oficina.cssValue} onChange={(e) => setCssValue(e.target.value)} />
                </div>
                <div className='formGridPart'>
                  <label>Javascript</label>
                  <input placeholder="Ingrese solo valor numerico" type="text" defaultValue={oficina.jsValue} onChange={(e) => setJsValue(e.target.value)} />
                  <label>Java</label>
                  <input placeholder="Ingrese solo valor numerico" type="text" defaultValue={oficina.javaValue} onChange={(e) => setJavaValue(e.target.value)} />
                </div>
              </div>
              <div>
                <label>Frameworks y librerias</label>
                <input placeholder="Describe tu proyecto..." type="text" defaultValue={oficina.frameworksAndLibraries} onChange={(e) => setFrameworksAndLibraries(e.target.value)} />
              </div>
            </div>
            <div>
              <label>Enlace a GitHub</label>
              <input placeholder="Ingrese url" type="text" defaultValue={oficina.enlace} onChange={(e) => setEnlace(e.target.value)}/>
            </div>
            <div>
              <label>Despliegue</label>
              <input placeholder="Ingrese url" type="text" defaultValue={oficina.despliegue} onChange={(e) => setDespliegue(e.target.value)}/>
            </div>
            <div className='form2Buttons'>
              <button className='formButton' type="submit"><i className="fa-regular fa-floppy-disk"></i> Guardar canvios</button>
              <button className='formButton' type="button" onClick={goBack}><i className="fa-solid fa-xmark"></i> Cancelar</button>
            </div>
          </div>
        </form >
      </div>
    );
  };
export default EditarOficina