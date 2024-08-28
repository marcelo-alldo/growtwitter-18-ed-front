import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Error404 from '../pages/Error404';
import CreateAccount from '../pages/CreateAccount';

const router = createBrowserRouter([
  {
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
