import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Main = () => {
     return (
          <div>
               <Navbar />
               <div className="pt-20">
                    <Outlet />
               </div>
          </div>
     );
};

export default Main;