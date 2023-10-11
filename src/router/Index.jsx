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
import CrearReserva from "../components/reservas/CrearReserva";
import BorrarReserva from "../components/reservas/BorrarReserva";
import MisReservas from "../components/reservas/MisReservas";

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
                path: "/private/borraroficinas/:oficinaId",
                element: <ElegirOficina />
            },
            {
                path: "/private/editarpuestos/:oficinaId",
                element: <EditListaPuestos />
            }            
        ]
    }])
