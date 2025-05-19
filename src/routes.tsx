import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Sign,Login,UsersList, ListMusic} from "./pages";


const router = createBrowserRouter([
   {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/sign-in",
    element: <Sign/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/list-users",
    element: <UsersList />,
  },
   {
    path: "/list-music",
    element: <ListMusic/>,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}