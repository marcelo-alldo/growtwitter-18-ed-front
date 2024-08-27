import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   // element: <Login />,
  //   // errorElement: <Error404 />,
  // },
  {
    path: "/profile",
    element: <Profile />,
    // errorElement: <Error404 />,  
    // path: "/login",
    // element: <Login />,
    errorElement: <Error404 />,
  },
  // {
  //   path: "/perfil",
  //   // element: <Perfil />,
  //   errorElement: <Error404 />,
  // },
  {
    path: "/",
    element: <Home />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
