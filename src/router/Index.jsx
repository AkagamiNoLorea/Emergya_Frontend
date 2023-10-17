import { createBrowserRouter } from "react-router-dom";
import ListaUsuarios from "../components/usuario/ListaUsuarios";
import CrearUsuario from "../components/usuario/CrearUsuario";
import EditarUsuario from "..../components/usuario/EditarUsuario";
import BorrarUsuario from "../components/usuario/BorrarUsuario";
import ListaOficinas from "../components/oficinas/ListaOficinas";
import CrearOficinas from "../components/oficinas/CrearOficinas";
import EditarOficinas from "../components/oficinas/EditarOficinas";
import BorrarOficinas from "../components/oficinas/BorrarOficinas";
import EditListaPuestos from "../components/puestos/EditListaPuestos";
import ElegirOficina from "../components/puestos/ElegirOficina"
import CrearReserva from "../components/reservas/CrearReserva";
import BorrarReserva from "../components/reservas/BorrarReserva";
import MisReservas from "../components/reservas/MisReservas";
import Layout from "../components/layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <CrearReserva />
            },
            {
                path: "/misreservas/:userId",
                element: <MisReservas />
            },
            {
                path: "/borrarreserva/:reservaId",
                element: <BorrarReserva />
            },
            {
                path: "/private/listausers",
                element: <ListaUsuarios />
            },
            {
                path: "/private/crearuser",
                element: <CrearUsuario />
            },
            {
                path: "/private/editaruser/:userId",
                element: <EditarUsuario />
            },
            {
                path: "/private/borraruser/:userId",
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
                path: "/private/elegiroficinas/:oficinaId",
                element: <ElegirOficina />
            },
            {
                path: "/private/editarpuestos/:oficinaId",
                element: <EditListaPuestos />
            }            
        ]
    }])
