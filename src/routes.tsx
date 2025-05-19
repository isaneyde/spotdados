import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Sign } from "./pages/sign-in";
import { UsersList } from "./pages/list-users";
import { Login } from "./pages/login";
import { ListMusic } from "lucide-react";

const router = createBrowserRouter([
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