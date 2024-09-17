import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./Home";
import Criar from "./Criar";
import Listar from "./Listar";
import Editar from "./Editar";
import ListarPorCurso from "./ListarPorCurso";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/alunos/criar",
                    element: <Criar />
                },
                {
                    path: "/alunos/listar",
                    element: <Listar />
                },
                {
                    path: "/alunos/listar-por-curso",
                    element: <ListarPorCurso />
                },
                {
                    path: "/alunos/editar/:id",
                    element: <Editar />
                },
            ]
        }
    ]
)

const Main = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Main;