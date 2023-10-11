import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ListaUsuarios from "../pages/ListaUsuarios";
import CrearUsuario from "../pages/CrearUsuario";
import EditarUsuario from "../pages/EditarUsuario";
import BorrarUsuario from "../pages/BorrarUsuario";
import ListaOficinas from "../pages/ListaOficinas";
import CrearOficinas from "../pages/CrearOficinas";
import EditarOficinas from "../pages/EditarOficinas";
import BorrarOficinas from "../pages/BorrarOficinas";
import EditListaPuestos from "../pages/EditListaPuestos";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/listausers",
                element: <ListaUsuarios />
            },
            {
                path: "/crearuser",
                element: <CrearUsuario />
            },
            {
                path: "/editaruser/:userId",
                element: <EditarUsuario />
            },
            {
                path: "/borraruser/:userId",
                element: <BorrarUsuario />
            },
            {
                path: "/private/listaoficinas",
                element: <ListaOficinas />
            },
            {
                path: "/private/crearoficinas",
                element: <CrearOficinas />
            },
            {
                path: "/private/editaroficinas/:oficinaId",
                element: <EditarOficinas />
            },
            {
                path: "/private/borraroficinas/:oficinaId",
                element: <BorrarOficinas />
            },
            {
                path: "/private/borraroficinas/:oficinaId",
                element: <ElegirOficina />
            },
            {
                path: "/private/editarpuestos/:oficinaId",
                element: <EditListaPuestos />
            },
            {
                path: "/",
                element: <Home />
            }
        ]
    }])
