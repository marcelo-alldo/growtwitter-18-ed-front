import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Error404 from '../pages/Error404';
import CreateAccount from '../pages/CreateAccount';
import Explore from '../pages/Explore';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error404 />,
  },

//   {
//     path: '/perfil',
//     element: <Perfil />,
//     errorElement: <Error404 />,
//   },
// =======


  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/explore',
    element: <Explore />,
    errorElement: <Error404 />,
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
