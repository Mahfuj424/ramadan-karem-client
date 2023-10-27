
import {
     createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";


   

const Router = createBrowserRouter([
     {
          path: "/",
          element: <Main />,
          children: [
               {
                    path: "/",
                    element: <Home/>
               },
               {
                    path: "register",
                    element: <Register/>,
               },
               {
                    path: "login",
                    element: <Login/>
               }
          ]
     }
])

export default Router;