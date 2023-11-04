import { useContext, useEffect, useState } from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Rating from "react-rating";


const FavoriteItems = () => {

     const { user } = useContext(AuthContext)

     const [favoriteItems, setFavoriteItems] = useState([]);



     useEffect(() => {
          fetch(`http://localhost:5000/favorite/${user?.email}`)
               .then(res => res.json())
               .then(data => setFavoriteItems(data))
     }, [])


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
               <div className="my-10">
                    <div className="container grid md:grid-cols-3 grid-cols-1 gap-5">
                         {
                              favoriteItems.map(favoriteItem => {
                                   return <div key={favoriteItem._id} className="card hover:bg-purple-200 hover:w-shadow-xl card-compact px-3 w-[382px] md:w-fit bg-base-100 shadow-xl">
                                        <figure><img className="h-64" src={favoriteItem.foodImage} alt="Shoes" /></figure>
                                        <div className="card-body">
                                             <h2 className="text-2xl font-bold">{favoriteItem.foodName}</h2>
                                             <h2 className="text-lg"><span className="text-xl">Chef Name :</span> {favoriteItem.chefName}</h2>
                                             <Rating
                                                  className="text-yellow-500"
                                                  readonly
                                                  placeholderRating={favoriteItem.foodRating}
                                                  emptySymbol={<HiOutlineStar />}
                                                  placeholderSymbol={<HiStar />}
                                                  fullSymbol={<HiStar />}
                                             />
                                             <div className="card-actions flex justify-between">
                                                  <Link to={`/iftarDetails/${favoriteItem._id}`}>
                                                       <button className="button" onClick={handleDetails}>View Details</button>
                                                  </Link>
                                                  <button className="button2">Delete Item</button>
                                             </div>
                                        </div>
                                   </div>
                              })
                         }

                    </div>
               </div>
          </div>
     );
};

export default FavoriteItems;