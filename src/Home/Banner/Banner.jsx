import "./Styles.css"
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Banner = () => {
     return (
          <div className="h-[650px] bg-cover bg-[url('https://i.ibb.co/SvXDDYp/banner1-ramadhan.jpg')]">
               <div className="pt-10 md:flex flex-none justify-around relative">
                    <h1 className="text-5xl pt-10 italic font-bold text-purple-400">ℍ𝕒𝕡𝕡𝕪<br />ℝ𝕒𝕞𝕒𝕕𝕒𝕟 𝕂𝕒𝕣𝕖𝕞</h1>
                    <h1 className="text-5xl pt-48 font-bold text-purple-400">𝕋𝕣𝕪 𝕥𝕠 𝕙𝕒𝕧𝕖<br /> 𝕋𝕙𝕖 𝕓𝕖𝕤𝕥 𝕥𝕚𝕞𝕖 𝕪𝕠𝕦 𝕔𝕒𝕟</h1>
               </div>
               <div className="text-white text-4xl flex absolute bottom-5 right-10 gap-5">
                    <FaFacebookSquare className="bg-purple-800 p-1 rounded-lg shadow-2xl hover:shadow-md"/>
                    <FaInstagramSquare className="bg-purple-800 p-1 rounded-lg shadow-2xl hover:shadow-md"/>
                    <FaTwitterSquare className="bg-purple-800 p-1 rounded-lg shadow-2xl hover:shadow-md"/>
               </div>
          </div>
     );
};

export default Banner;