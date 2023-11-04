
import {
     createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import IftarItems from "../Pages/IftarItems/IftarItems";
import IftarDetails from "../Pages/iftarDetails/iftarDetails";
import PrivetRoute from "../Components/privetRoute/PrivetRoute";
import FavoriteItems from "../Pages/FavoriteITems/FavoriteItems";




const Router = createBrowserRouter([
     {
          path: "/",
          element: <Main />,
          children: [
               {
                    path: "/",
                    element: <Home />
               },
               {
                    path: "register",
                    element: <Register />,
               },
               {
                    path: "iftarItems",
                    element: <IftarItems />,
                    loader: () => fetch('http://localhost:5000/iftar')
               },
               {
                    path: 'iftarDetails/:id',
                    element: <PrivetRoute><IftarDetails /></PrivetRoute>,
                    loader: () => fetch(`http://localhost:5000/iftar`)
               },
               {
                    path: "favorite",
                    element: <FavoriteItems />
               },
               {
                    path: "login",
                    element: <Login />
               }
          ]
     }
])

export default Router;