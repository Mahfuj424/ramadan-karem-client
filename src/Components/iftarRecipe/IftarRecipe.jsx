import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";


const IftarRecipe = () => {

     const { user, loading } = useContext(AuthContext)
     const [iftarItems, setIftarItems] = useState([])

     useEffect(() => {
          fetch(`https://ramadan-karem-server.vercel.app/iftar`)
               .then(res => res.json())
               .then(data => setIftarItems(data))
     }, [user, loading])


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
          <div>
               <h1 className="text-4xl text-purple-500 text-center mb-8">Our Recipe Items</h1>
               <div>

                    <div
                         data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1500"
                         className="container md:px-0 px-2 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
                         {
                              iftarItems.slice(0, 3).map(iftarItem => {
                                   return <div key={iftarItem._id} className="hover:bg-purple-200 border-4 border-purple-400 rounded-md hover:w-shadow-xl card-compact px-3 w-full md:w-fit bg-base-100 shadow-xl">
                                        <figure><img className="h-64" src={iftarItem.foodImage} alt="Shoes" /></figure>
                                        <div className="card-body">
                                             <h2 className="text-2xl font-bold">{iftarItem.foodName}</h2>
                                             <h2 className="text-lg"><span className="text-xl">Chef Name :</span> {iftarItem.chefName}</h2>
                                             <p className='text-black'><span className='font-bold'>Description:</span> {iftarItem?.description.slice(0, 42)}</p>
                                             <Rating
                                                  className="text-yellow-500"
                                                  readonly
                                                  placeholderRating={iftarItem.foodRating}
                                                  emptySymbol={<HiOutlineStar />}
                                                  placeholderSymbol={<HiStar />}
                                                  fullSymbol={<HiStar />}
                                             />
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
               <div className="flex justify-center mt-5">
                    <Link to={`/iftarItems`}>
                         <button className="button">All Recipe</button>
                    </Link>
               </div>
          </div>
     );
};

export default IftarRecipe;