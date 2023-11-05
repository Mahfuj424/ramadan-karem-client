import { Link } from "react-router-dom";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import Rating from "react-rating";
import FoodDetails from "../foodDetails/FoodDetails";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const IftarItems = () => {

     const { user } = useContext(AuthContext)
     const [showModal, setShowModal] = useState(false)
     const [iftarItems, setIftarItems] = useState([])

     // pagination
     const [currentPage, setCurrentPage] = useState(1)
     const recordsPerPage = 6;
     const lastIndex = currentPage * recordsPerPage;
     const firstIndex = lastIndex - recordsPerPage;
     const records = iftarItems.slice(firstIndex, lastIndex);
     const nPage = Math.ceil(iftarItems.length / recordsPerPage);
     const numbers = [...Array(nPage + 1).keys()].slice(1);

     // all pagination function

     const prevPage = () => {
          if (currentPage !== 1)
               setCurrentPage(currentPage - 1)
     }

     const ChangeCPage = (id) => {
          setCurrentPage(id)
     }

     const nextPage = () => {
          if (currentPage !== nPage)
               setCurrentPage(currentPage + 1)
     }



     useEffect(() => {
          fetch(`http://localhost:5000/iftar`)
               .then(res => res.json())
               .then(data => setIftarItems(data))
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
          <>
               <div className="my-10">
                    <div className="container grid md:grid-cols-3 grid-cols-1 gap-5">
                         {
                              records.map(iftarItem => {
                                   return <div key={iftarItem._id} className="hover:bg-purple-200 border-4 border-purple-400 rounded-md hover:w-shadow-xl card-compact px-3 w-[382px] md:w-fit bg-base-100 shadow-xl">
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

                    <nav>
                         <ul className="flex justify-center mt-5">
                              <li onClick={prevPage} className="border-2 cursor-pointer rounded-sm border-purple-500 p-3">◀Prev</li>
                              {
                                   numbers.map((n, i) => (

                                        <li key={i} onClick={() => ChangeCPage(n)} className={`border-2 cursor-pointer rounded-sm border-purple-500 p-3 ${currentPage === n ? 'active' : ''}`}>{n}</li>
                                   ))
                              }
                              <li onClick={nextPage} className="border-2 cursor-pointer rounded-sm border-purple-500 p-3">Next▶</li>
                         </ul>
                    </nav>
               </div>
               {/* <FoodDetails isVisible={showModal} onClose={() => {
                    setShowModal(false)
               }} /> */}
          </>
     );
};

export default IftarItems;