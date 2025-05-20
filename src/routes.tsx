import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Sign,Login,UsersList, ListMusic} from "./pages";
import type { userProps } from "./types/users";

const user:userProps={
  name:"olga",
  id:6,
  mostListenedSongs:["Marilia Mendonca","Luisa Sonza","Pocah"]
}

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
    element: <ListMusic user={user} />,
  }
]);

export function Routes() {
  return <RouterProvider router={router} />;
}