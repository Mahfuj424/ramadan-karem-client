import { useContext, useEffect, useState } from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Rating from "react-rating";


const FavoriteItems = () => {

     const { user } = useContext(AuthContext)
     const [reload, setReload] = useState(false)

     const [favoriteItems, setFavoriteItems] = useState([]);



     useEffect(() => {
          fetch(`https://ramadan-karem-server.vercel.app/favorite/${user?.email}`)
               .then(res => res.json())
               .then(data => setFavoriteItems(data))
     }, [user, reload])


     const handleDetails = (id) => {
          if (!user?.email) {
               Swal.fire(
                    'You Are Now LogIn Page',
                    'That thing is still around?',
                    'success'
               )
          }
     }

     const handleDelete = (id) => {
          Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
               if (result.isConfirmed) {
                    //   
                    fetch(`https://ramadan-karem-server.vercel.app/deleteFavorite/${id}`, {
                         method: 'DELETE',
                    })
                         .then(res => res.json())
                         .then(data => {
                              if (data.deletedCount > 0) {
                                   setReload(!reload)
                                   Swal.fire(
                                        'Deleted!',
                                        'Your coffee has been deleted.',
                                        'success'
                                   )
                              }
                         })
               }
          })
     }


     return (
          <div>
               <div className="my-10">
                    <div className="container md:px-0 px-1 grid md:grid-cols-3 grid-cols-1 gap-5">
                         {
                              favoriteItems.map(favoriteItem => {
                                   return <div
                                        data-aos="zoom-in-up"
                                        data-aos-easing="linear"
                                        data-aos-duration="1500"
                                        key={favoriteItem._id} className="hover:bg-purple-200 border-4 border-purple-400 rounded-md hover:w-shadow-xl card-compact px-3 w-[382px] md:w-fit bg-base-100 shadow-xl">
                                        <figure><img className="h-64" src={favoriteItem.foodImage} alt="Shoes" /></figure>
                                        <div className="card-body">
                                             <h2 className="text-2xl font-bold">{favoriteItem.foodName}</h2>
                                             <h2 className="text-lg"><span className="text-xl">Chef Name :</span> {favoriteItem.chefName}</h2><p className='text-black'><span className='font-bold'>Description:</span> {favoriteItem?.description.slice(0, 42)}</p>
                                             <Rating
                                                  className="text-yellow-500"
                                                  readonly
                                                  placeholderRating={favoriteItem.foodRating}
                                                  emptySymbol={<HiOutlineStar />}
                                                  placeholderSymbol={<HiStar />}
                                                  fullSymbol={<HiStar />}
                                             />
                                             <div className="card-actions flex justify-between">
                                                  <Link to={`/favoriteDetails/${favoriteItem._id}`}>
                                                       <button className="button" onClick={handleDetails}>View Details</button>
                                                  </Link>
                                                  <button onClick={() => handleDelete(favoriteItem._id)} className="button2">Delete Item</button>
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