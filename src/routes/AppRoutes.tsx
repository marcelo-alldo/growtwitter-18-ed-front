<<<<<<< HEAD
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
=======
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Error404 from '../pages/Error404';
import CreateAccount from '../pages/CreateAccount';
>>>>>>> development

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   // element: <Login />,
  //   // errorElement: <Error404 />,
  // },
  {
<<<<<<< HEAD
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
=======
    path: '/login',
    element: <Login />,
    errorElement: <Error404 />,
  },
<<<<<<< HEAD
  {
    path: '/perfil',
    element: <Perfil />,
    errorElement: <Error404 />,
  },
=======

>>>>>>> feature/add-layout-main
>>>>>>> development
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/create-account',
    element: <CreateAccount />,
    errorElement: <Error404 />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
