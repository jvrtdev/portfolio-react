import { createBrowserRouter } from "react-router-dom";

//paginas
import Home from "./pages/Home";
import Layout from "./Layout";
import Skills from "./pages/Skills";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [{
                path: "/",
                element: <Home />
            },
            {
                path: "/skills",
                element: <Skills />
            },
            {
                path: "/projetos",
                element: <Projetos />
            },
            {
                path: "/sobre",
                element: <Sobre />
            }
        ]
        
        
    },
])

export { router }