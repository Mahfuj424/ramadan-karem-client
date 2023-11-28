import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import Rating from "react-rating";



const FavoriteDetails = () => {
     const { user, loading } = useContext(AuthContext)
     const [favorite, setFavorite] = useState([])

     const { id } = useParams()

     useEffect(() => {
          fetch(`https://ramadan-karem-server.vercel.app/favorite/${user?.email}`)
               .then(res => res.json())
               .then(data => setFavorite(data))
     }, [user, loading])


     const findFavorite = favorite && favorite.find(item => item._id == id);
     console.log(findFavorite);

     // const { foodImage, foodName, chefName, description, foodRating, makeFood } = findFavorite;


     return (
          <div>
               <div className='container'>
                    <h1 className='text-3xl text-center mt-5'>Food Details</h1>
                    <div className="hero min-h-screen rounded-xl shadow-xl bg-[#e36bf9] my-10">
                         <div key={findFavorite?._id} className="hero-content flex flex-col">
                              <img
                                   data-aos="zoom-in-up"
                                   data-aos-easing="linear"
                                   data-aos-duration="1500"
                                   src={findFavorite?.foodImage} className="w-[70%] md:h-[400px] h-[250px] rounded-lg shadow-2xl" alt='Toy Image' />
                              <div
                                   data-aos="flip-up"
                                   data-aos-easing="linear"
                                   data-aos-duration="1500"
                                   className='w-[70%]  rounded-xl shadow-2xl p-3 border-4 flex-col gap-3 pl-5'>
                                   <h1 className="py-3 text-2xl font-bold"><span className='font-bold'></span> {findFavorite?.foodName}</h1>
                                   <h2><span className='font-bold'>chef Name:</span> {findFavorite?.chefName}</h2>

                                   <p className='text-black'><span className='font-bold text-lg'>How to make this food:</span> {findFavorite?.makeFood}</p>
                                   <p className='text-black'><span className='font-bold'>Description:</span> {findFavorite?.description}</p>
                                   <Rating
                                        className='text-yellow-500'
                                        readonly
                                        placeholderRating={findFavorite?.foodRating}
                                        emptySymbol={<HiOutlineStar />}
                                        placeholderSymbol={<HiStar />}
                                        fullSymbol={<HiStar />}
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default FavoriteDetails;