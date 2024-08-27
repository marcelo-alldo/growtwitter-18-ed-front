import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Profile from "../pages/Profile";

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
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
