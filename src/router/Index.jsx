import { createBrowserRouter } from "react-router-dom";
import ListaUsuarios from "../components/usuario/ListaUsuarios";
import CrearUsuario from "../components/usuario/CrearUsuario";
import EditarUsuario from "../components/usuario/EditarUsuario";
import ListaOficinas from "../components/oficinas/ListaOficinas";
import CrearOficinas from "../components/oficinas/CrearOficina";
import EditarOficinas from "../components/oficinas/EditarOficina";
import BorrarOficinas from "../components/oficinas/BorrarOficina";
import CrearPuesto from "../components/puestos/CrearPuesto";
import EditListaPuestos from "../components/puestos/EditListaPuestos";
import CrearReserva from "../components/reservas/CrearReserva";
import ConfirmarReserva from "../components/reservas/ConfirmarReserva";
import BorrarReserva from "../components/reservas/BorrarReserva";
import MisReservas from "../components/reservas/MisReservas";
import Layout from "../layout/Layout";

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
                path: "/confirmarreserva",
                element: <ConfirmarReserva />
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
                path: "/private/editaruser/:id",
                element: <EditarUsuario />
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
                path: "/private/crearpuesto",
                element: <CrearPuesto />
            },
            {
                path: "/private/editarpuestos",
                element: <EditListaPuestos />
            }            
        ]
    }])
