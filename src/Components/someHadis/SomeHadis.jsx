import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { BsMessenger } from "react-icons/bs";


const SomeHadis = () => {

     const [hadisData, setHadisData] = useState([])
     const { user, loading } = useContext(AuthContext)

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
          <div className="my-20">
               <h1 className="text-4xl text-purple-500 text-center mb-8">Read Hadis</h1>
               <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="container">
                    {
                         hadisData.slice(0, 1).map((hadis, i) => {
                              return <div key={hadis._id} className=" md:flex gap-5 px-3">
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
               <div className="flex justify-center">
                    <Link to={`/hadis`}>
                         <button className="button">Read more Hadis</button>
                    </Link>
               </div>
          </div>
     );
};

export default SomeHadis;