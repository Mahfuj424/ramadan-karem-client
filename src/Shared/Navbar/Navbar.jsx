import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx'
import { BiArrowFromLeft } from 'react-icons/bi'
import { BsMoonStarsFill } from 'react-icons/bs'

import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';
const Navbar = () => {
     const { user, logOut } = useContext(AuthContext)

     const navItem = <div className='md:space-x-8 space-y-3 text-white md:text-black items-center md:space-y-0 pb-2 mb:pb-0 md:flex'>
          <p className='text-lg hover:text-white transition-all'><NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-white border-white' : ''} to='/'>Home</NavLink></p>
          <p className='text-lg hover:text-white transition-all'><NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-white border-white' : ''} to='/iftarItems'>Iftar Recipe</NavLink></p>
          <p className='text-lg hover:text-white transition-all'><NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-white border-white' : ''} to='/hadis'>Hadis</NavLink></p>
          <p className='text-lg hover:text-white transition-all'>
               {user ?
                    <NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-white border-white' : ''} to='/favorite'>Favorite Recipe</NavLink>
                    : ''}
          </p>


          <p className='text-lg hover:text-white transition-all '> {
               user ?
                    <NavLink onClick={() => logOut()}><span className='flex items-center gap-1'>
                         <span>LogOut</span> <BiArrowFromLeft /></span></NavLink>
                    :
                    <NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-white bordewhite' : ''} to='/login'>Login</NavLink>

          }</p>

     </div>

     return (
          <div className='fixed bg-[#b93bcf] font-semibold pt-4 w-full z-10 opacity-80'>
               <div className="navbar container p-0">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52 md:flex items-center">
                                   {navItem}
                              </ul>
                         </div>
                         <Link to='/' className="text-xl  flex items-center cursor-pointer">
                              <span className='text-white text-3xl font-bold ms-2'><BsMoonStarsFill /></span>
                         </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal items-center px-1">
                              {navItem}
                         </ul>

                    </div>
                    <div className="navbar-end pe-3">
                         <div className="avatar">
                              <div className=" w-[50px] rounded-full ">
                                   {user ? <img title={user?.displayName} src={user?.photoURL} /> : <RxAvatar className='text-black cursor-pointer' size={40} />}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;