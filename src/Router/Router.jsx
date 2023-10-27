
import {
     createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";


   

const Router = createBrowserRouter([
     {
          path: "/",
          element: <Main />,
          children: [
               {
                    path: "/",
                    element: <Home/>
               }
          ]
     }
])

export default Router;