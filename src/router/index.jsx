import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import UserList from "../pages/userList/UserList";
import User from "../pages/user/User";
import NewUser from "../pages/newUser/NewUser";
import Products from "../pages/productList/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "/user/:userid",
    element: <User />,
  },
  {
    path: "/newUser",
    element: <NewUser />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

export default router;
