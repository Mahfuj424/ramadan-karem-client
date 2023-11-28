import emailjs from '@emailjs/browser';
import { useContext, useEffect, useRef, useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useParams } from 'react-router-dom';

const SendEmail = () => {
     const { user, loading } = useContext(AuthContext)

     const form = useRef();

     const sendEmail = (e) => {
          e.preventDefault();

          emailjs.sendForm('service_pili6to', 'template_k3rar2d', form.current, 'vaNZSNbT-5hbgRvXM')
               .then((result) => {
                    console.log(result)
                    if (result.status == 200) {
                         Swal.fire({
                              position: 'center',
                              icon: 'success',
                              title: 'Thanks and prayers for you',
                              showConfirmButton: false,
                              timer: 1500
                         })
                    }
               }, (error) => {
                    console.log(error.text);
               });
     };

     const { id } = useParams()


     const [allHadis, setAllHadis] = useState([])

     useEffect(() => {
          fetch(`https://ramadan-karem-server.vercel.app/hadis`)
               .then(res => res.json())
               .then(data => setAllHadis(data))
     }, [user, loading])

     const singleHadis = allHadis && allHadis.find(hadis => hadis._id == id)

     console.log(singleHadis?.hadisName);


     return (
          <div
               data-aos="zoom-in-up"
               data-aos-easing="linear"
               data-aos-duration="1500"
               className='border-2 p-3 shadow-xl border-purple-500 rounded-lg w-[94%]  md:w-[30%] mt-10 mx-auto'>
               <div className='flex justify-between items-center'>
                    <h1>
                         {user ? <img className='rounded-full w-14 h-14' title={user?.displayName} src={user?.photoURL} /> : <RxAvatar className='text-black cursor-pointer' size={40} />}
                    </h1>
                    <h1 className='font-bold text-lg'>Ask Your Questions 🤗</h1>
               </div>
               <form ref={form} onSubmit={sendEmail}>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Name</span>
                         </label>
                         <input type="text" name='from_name' placeholder="Name" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Email</span>
                         </label>
                         <input type="email" name='to_email' defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Questions</span>
                         </label>
                         <textarea name="message" id="" placeholder='Provide your questions' className='rounded-lg border p-2 border-slate-300' cols="30" rows="2"></textarea>
                    </div>
                    <div
                         data-aos="flip-up"
                         data-aos-easing="linear"
                         data-aos-duration="1500"
                         className="form-control mt-6">
                         <button className="button">Send</button>
                    </div>
               </form>
          </div>
     );
};

export default SendEmail;