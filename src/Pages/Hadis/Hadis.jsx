import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { BsMessenger } from "react-icons/bs";


const Hadis = () => {

     const [hadisData, setHadisData] = useState([])
     const { user, loading } = useContext(AuthContext)


     // pagination
     const [currentPage, setCurrentPage] = useState(1)
     const recordsPerPage = 2;
     const lastIndex = currentPage * recordsPerPage;
     const firstIndex = lastIndex - recordsPerPage;
     const records = hadisData.slice(firstIndex, lastIndex);
     const nPage = Math.ceil(hadisData.length / recordsPerPage);
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
          fetch('https://ramadan-karem-server.vercel.app/hadis')
               .then(res => res.json())
               .then(data => setHadisData(data))
     }, [user, loading])
     console.log(hadisData);


     const handleSendQuestions = (id) => {
          if (!user?.email) {
               Swal.fire(
                    'You Are Now LogIn Page',
                    'That thing is still around?',
                    'success'
               )
          }
     }




     return (
          <div className="mb-10">
               <div className="container my-10">

                    {
                         records.map((hadis, i) => {
                              return <div
                                   data-aos="zoom-in-up"
                                   data-aos-easing="linear"
                                   data-aos-duration="1500"
                                   key={hadis._id} className=" md:flex gap-5 px-3">
                                   <div className="border-2 p-5 md:w-[50%] mb-5 shadow-xl rounded-md border-purple-500">
                                        <h1 className="text-xl"> <span className="font-bold">Hadis Name :</span> {hadis.hadisName} </h1>
                                        <p className="text-lg"><span className="font-bold">Researcher Name :</span> {hadis?.researcherName}</p>
                                        <p className="text-lg"><span className="font-bold">How Much Researcher :</span> {hadis?.howMuchResearcher}</p>
                                        <p className="text-lg"><span className="font-bold">Hadis Explanation :</span> {hadis?.hadisExplanation}</p>
                                        <p className="my-3 text-lg font-bold">Ask Question</p>
                                        <Link to={`/sendMail/${hadis._id}`}>
                                             <p onClick={handleSendQuestions} >
                                                  <BsMessenger className="text-5xl text-purple-500 cursor-pointer" />
                                             </p>
                                        </Link>
                                   </div>
                                   <div className="border-2 p-5 md:w-[50%] mb-5 shadow-xl rounded-md border-purple-500">
                                        <h1 className="text-xl"> <span className="font-bold">Hadis Name :</span> {hadis.hadisName} </h1>
                                        <p className="text-lg"><span className="font-bold">Researcher Name :</span> {hadis?.researcherName}</p>
                                        <p className="text-lg"><span className="font-bold">How Much Researcher :</span> {hadis?.howMuchResearcher}</p>
                                        <p className="text-lg"><span className="font-bold">Hadis Explanation :</span> {hadis?.hadisExplanation}</p>
                                        <p className="my-3 text-lg font-bold">Ask Question</p>
                                        <Link to={`/sendMail/${hadis._id}`}>
                                             <p onClick={handleSendQuestions} >
                                                  <BsMessenger className="text-5xl text-purple-500 cursor-pointer" />
                                             </p>
                                        </Link>
                                   </div>
                              </div>

                         })
                    }


               </div>
               <nav>
                    <ul className="flex justify-center mt-5">
                         <li onClick={prevPage} className="border-2 cursor-pointer rounded-sm border-purple-500 p-1 md:p-3">◀Prev</li>
                         {
                              numbers.map((n, i) => (

                                   <li key={i} onClick={() => ChangeCPage(n)} className={`border-2 cursor-pointer rounded-sm border-purple-500 p-1 md:p-3 ${currentPage === n ? 'active' : ''}`}>{n}</li>
                              ))
                         }
                         <li onClick={nextPage} className="border-2 cursor-pointer rounded-sm border-purple-500 p-1 md:p-3">Next▶</li>
                    </ul>
               </nav>
          </div>
     );
};

export default Hadis;