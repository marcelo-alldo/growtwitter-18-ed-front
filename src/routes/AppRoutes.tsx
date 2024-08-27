import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Error404 from '../pages/Error404';
<<<<<<< HEAD
import CreateAccount from '../pages/CreateAccount';
=======
>>>>>>> feature/create-modal

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error404 />,
  },
<<<<<<< HEAD
  {
<<<<<<< HEAD
    path: '/perfil',
    element: <Perfil />,
    errorElement: <Error404 />,
  },
=======

>>>>>>> feature/add-layout-main
  {
=======
>>>>>>> feature/create-modal
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
