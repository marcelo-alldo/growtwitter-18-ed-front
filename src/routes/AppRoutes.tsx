import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";

const router = createBrowserRouter([
  {
<<<<<<< HEAD
=======
    path: '/login',
    element: <Login />,
    errorElement: <Error404 />,
  },
<<<<<<< HEAD
// <<<<<<< HEAD
//   {
//     path: '/perfil',
//     element: <Perfil />,
//     errorElement: <Error404 />,
//   },
// =======

// >>>>>>> feature/add-layout-main
=======
  // {
  //   path: '/perfil',
  //   element: <Perfil />,
  //   errorElement: <Error404 />,
  // },
>>>>>>> 0f76f4ba04c464ccee50ff67a7e41008d57f8efd
  {
>>>>>>> development
    path: '/',
    element: <Home />,
    errorElement: <Error404/>
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/create-account',
    element: <CreateAccount />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
