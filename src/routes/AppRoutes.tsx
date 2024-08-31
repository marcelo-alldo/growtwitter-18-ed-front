import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import Explore from '../pages/Explore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // errorElement: <Error404 />,
  },
  // {
  //   path: "/profile/:idUser",
  //   element: <Profile />,
  // },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/explore',
    element: <Explore />,
    errorElement: <Error404 />,
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
