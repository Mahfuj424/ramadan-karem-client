import { useEffect } from "react";


const FoodDetails = ({ isVisible, onClose }) => {

     useEffect(() => {
          fetch(`http://localhost:5000/iftar`)
               .then(res => res.json())
               .then(data => console.log(data))
     }, [])

     if (!isVisible) return null;

     const handleClose = (e) => {
          if (e.target.id == 'wrapper') onclose()
     }

     return (
          <div onClick={handleClose} id="wrapper" className="fixed inset-0 bg-black opacity-80 backdrop-blur-sm flex justify-center items-center">
               <div className="w-[700px] h-fit flex flex-col">
                    <button className="text-red-500 text-xl place-self-end" onClick={() => onClose()}>X</button>
                    <div className="bg-white">modal</div>
               </div>
          </div>
     );
};

export default FoodDetails;