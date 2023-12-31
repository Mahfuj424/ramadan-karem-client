
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
import FavoriteDetails from "../Pages/FavoriteDetails/FavoriteDetails";
import Hadis from "../Pages/Hadis/Hadis";
import SendEmail from "../Pages/sendEmail/SendEmail";
// import ChatApp from "../Pages/Chat app/ChatApp";





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
                    element: <IftarItems />
               },
               {
                    path: 'hadis',
                    element: <Hadis />
               },
               {
                    path: 'iftarDetails/:id',
                    element: <PrivetRoute><IftarDetails /></PrivetRoute>,
                    loader: () => fetch(`https://ramadan-karem-server.vercel.app/iftar`)
               },
               {
                    path: "favorite",
                    element: <FavoriteItems />
               },
               {
                    path: 'favoriteDetails/:id',
                    element: <PrivetRoute><FavoriteDetails /></PrivetRoute>,
               },
               {
                    path: "login",
                    element: <Login />
               },
               {
                    path: 'sendMail/:id',
                    element: <PrivetRoute><SendEmail /></PrivetRoute>
               }
          ]
     }
])

export default Router;