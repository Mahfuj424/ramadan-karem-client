import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HiOutlineStar, HiStar } from "react-icons/hi"
import Rating from "react-rating";
import FoodDetails from "../foodDetails/FoodDetails";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const IftarItems = () => {

const {user}=useContext(AuthContext)
     const [showModal, setShowModal] = useState(false)

     const navigate = useNavigate();
     const iftarItems = useLoaderData();
     console.log(iftarItems);

     const handleDetails = (id) => {
          if (!user?.email) {
               Swal.fire(
                    'You Are Now LogIn Page',
                    'That thing is still around?',
                    'success'
                )
     }
}



     return (
          <>
               <div className="my-10">
                    <div className="container grid md:grid-cols-3 grid-cols-1 gap-5">
                         {
                              iftarItems.map(iftarItem => {
                                   return <div key={iftarItem._id} className="card card-compact px-3 w-[382px] md:w-fit bg-base-100 shadow-xl">
                                        <figure><img className="h-64" src={iftarItem.foodImage} alt="Shoes" /></figure>
                                        <div className="card-body">
                                             <h2 className="text-2xl font-bold">{iftarItem.foodName}</h2>
                                             <h2 className="text-lg"><span className="text-xl">Chef Name :</span> {iftarItem.chefName}</h2>
                                             <Rating
                                                  className="text-yellow-500"
                                                  readonly
                                                  placeholderRating={iftarItem.foodRating}
                                                  emptySymbol={<HiOutlineStar />}
                                                  placeholderSymbol={<HiStar />}
                                                  fullSymbol={<HiStar />}
                                             />
                                             <ToastContainer />
                                             <div className="card-actions justify-center">
                                                  <Link to={`/iftarDetails/${iftarItem._id}`}>
                                                       <button className="button" onClick={handleDetails}>View Details</button>
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              })
                         }

                    </div>
               </div>
               <FoodDetails isVisible={showModal} onClose={() => {
                    setShowModal(false)
               }} />
          </>
     );
};

export default IftarItems;