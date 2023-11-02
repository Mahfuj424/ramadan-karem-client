/* eslint-disable no-unused-vars */
import Rating from 'react-rating';
import { HiStar, HiOutlineStar } from "react-icons/hi";
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useContext, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const IftarDetails = () => {
    const foodData = useLoaderData([]);
    const {user}= useContext(AuthContext)
    const { id } = useParams()

    const {_id, foodia } = foodData;

    const [disible, setDisible] = useState(false)


    const iftarItems = foodData && foodData.find(data => data._id == id)
    console.log(iftarItems);
    const { chefName, foodName, foodImage, description, foodRating, makeFood } = iftarItems;
    const addFavorite = {chefName, foodName, foodImage, description, foodRating, makeFood, userEmail:user?.email}


    const handleAddFavorite = (iftarItems) => {
        // toast('Added Favorite')

        console.log(iftarItems);
            // fetch(`http://localhost:5000/addFavorite`,
            //     {
            //         method: "POST",
            //         headers: {
            //             'content-type': 'application/json'
            //         },
            //         body: JSON.stringify(addFavorite)
            //     })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.insertedId) {
            //             Swal.fire({
            //                  position: 'center',
            //                  icon: 'success',
            //                  title: 'Successfully Add Class',
            //                  showConfirmButton: false,
            //                  timer: 1500
            //             })
            //        }
            //     })
       

        setDisible(true)
    }

    
    return (
        <div className='container'>
            <h1 className='text-3xl text-center mt-5'>Food Details</h1>
            <div className="hero min-h-screen rounded-xl shadow-xl bg-[#e36bf9] my-10">
                <div className="hero-content flex flex-col">
                    <img src={foodImage} className="w-[70%] h-[400px] rounded-lg shadow-2xl" alt='Toy Image' />
                    <div className='w-[70%]  rounded-xl shadow-2xl p-3 border-4 flex-col gap-3 pl-5'>
                        <h1 className="py-3 text-2xl font-bold"><span className='font-bold'></span> {foodName}</h1>
                        <h2><span className='font-bold'>chef Name:</span> {chefName}</h2>

                        <p className='text-black'><span className='font-bold text-lg'>How to make this food:</span> {makeFood}</p>
                        <p className='text-black'><span className='font-bold'>Description:</span> {description}</p>
                        <Rating
                            className='text-yellow-500'
                            readonly
                            placeholderRating={foodRating}
                            emptySymbol={<HiOutlineStar />}
                            placeholderSymbol={<HiStar />}
                            fullSymbol={<HiStar />}
                        />
                        <ToastContainer position="bottom-right" />
                        <p>
                            <button disabled={disible} onClick={()=>handleAddFavorite(iftarItems)} className='button'>Favorite</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IftarDetails;