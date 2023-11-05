import emailjs from '@emailjs/browser';
import { useContext, useRef } from 'react';
import { RxAvatar } from 'react-icons/rx';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SendEmail = () => {
     const {user}=useContext(AuthContext)

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
                              title: 'Send Message',
                              showConfirmButton: false,
                              timer: 1500
                         })
                    }
               }, (error) => {
                    console.log(error.text);
               });
     };
     return (
          <div className='border-2 p-3 border-purple-500 rounded-lg w-[30%] mt-10 mx-auto'>
               <div>
                    <h1>
                         {user ? <img title={user?.displayName} src={user?.photoURL} /> : <RxAvatar className='text-black cursor-pointer' size={40} />}
                    </h1>
                    <h1>{user?.dis}</h1>
               </div>
               <form ref={form} onSubmit={sendEmail}>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Name</span>
                         </label>
                         <input type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Email</span>
                         </label>
                         <input type="email" name='from_email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Message</span>
                         </label>
                         <textarea name="message" id="" placeholder='write something' className='rounded-lg' cols="30" rows="2"></textarea>
                    </div>
                    <div className="form-control mt-6">
                         <button className="button">Login</button>
                    </div>
               </form>
          </div>
     );
};

export default SendEmail;