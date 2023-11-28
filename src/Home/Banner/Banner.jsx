import { Link } from "react-router-dom";
import "./Styles.css"
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Banner = () => {
     return (
          <div className="md:max-h-screen h-[750px] bg-cover bg-[url('https://i.ibb.co/SvXDDYp/banner1-ramadhan.jpg')]">
               <div className="pt-10 md:ps-0 ps-3 md:flex items-center flex-none justify-around relative">
                    <div data-aos="zoom-in-down"
                         data-aos-duration="2000"
                    >
                         <h1 className="text-5xl md:pt-20  italic font-bold text-white">ℍ𝕒𝕡𝕡𝕪<br />ℝ𝕒𝕞𝕒𝕕𝕒𝕟 𝕂𝕒𝕣𝕖𝕞</h1>
                         <Link to={`/login`}><button className="button mt-20">Join Now ➤</button></Link>
                    </div>
                    <h1
                         data-aos="zoom-in-down"
                         data-aos-duration="3000"
                         className="text-5xl italic md:pt-48 pt-10 font-bold text-white">𝕋𝕣𝕪 𝕥𝕠 𝕙𝕒𝕧𝕖<br /> 𝕋𝕙𝕖 𝕓𝕖𝕤𝕥 𝕥𝕚𝕞𝕖 𝕪𝕠𝕦 𝕔𝕒𝕟</h1>
               </div>
               <div className="text-white text-4xl flex absolute bottom-5 right-10 gap-5">
                    <Link to={`https://web.facebook.com/profile.php?id=100048917382639`}>
                         <FaFacebookSquare className="bg-purple-800 p-1 rounded-lg shadow-2xl hover:shadow-md" />
                    </Link>
                    <Link to={`https://www.instagram.com/ahmed__mahfuj_11/`}>
                         <FaInstagramSquare className="bg-purple-800 p-1 rounded-lg shadow-2xl hover:shadow-md" />
                    </Link>
                    <Link to={`https://twitter.com/AhmedMahfu_11`}>
                         <FaTwitterSquare className="bg-purple-800 p-1 rounded-lg shadow-2xl hover:shadow-md" />
                    </Link>
               </div>

          </div>
     );
};

export default Banner;