import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Error404 from "../pages/Error404";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error404 />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
    errorElement: <Error404 />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
