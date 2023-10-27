/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { FaPlaneDeparture } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { AuthContext } from '../../Components/authProvider/AuthProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logOut } = useContext(AuthContext)


  const handleLogOut = () => {
    logOut()
      .then(() => {
      localStorage.removeItem('aeroplane')
      })
    .catch(err=>console.log(err.message))
  }


  return (
    <div className='bg-green-100 sticky z-10 h-[100px] top-0 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='flex items-center justify-between'>
        {/* Logo Section */}
        <Link to='/' className='inline-flex items-center'>
          <FaPlaneDeparture className='h-8 w-8 text-green-300' />
          <span className='ml-2 text-xl font-bold tracking-wide uppercase text-gray-800'>
            Aeroplane Toy
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'text-blue-300' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/alltoys'
              className={({ isActive }) => (isActive ? 'text-blue-300' : 'default')}
            >
              All Toys
            </NavLink>
          </li>
          {
            user ?
              <li>
                <NavLink
                  to='/myToys'
                  className={({ isActive }) => (isActive ? 'text-blue-300' : 'default')}
                >
                  My Toys
                </NavLink>
              </li>
              : ''
          }
          {
            user ?
              <li>
                <NavLink
                  to='/addToy'
                  className={({ isActive }) => (isActive ? 'text-blue-300' : 'default')}
                >
                  Add a Toy
                </NavLink>
              </li>
              : ''
          }
          <li>
            <NavLink
              to='/blog'
              className={({ isActive }) => (isActive ? 'text-blue-300' : 'default')}
            >
              Blog
            </NavLink>
          </li>
          {
            user ? ''
              :
              <li>
                <NavLink
                  to='/login'
                  className={({ isActive }) => (isActive ? 'text-blue-300' : '')}
                >
                  Login
                </NavLink>
              </li>
          }
          {
            user ? ''
              :
              <li>
                <NavLink
                  to='/register'
                  className={({ isActive }) => (isActive ? 'text-blue-300' : 'default')}
                >
                  Register
                </NavLink>
              </li>
          }
        </ul>
        <ul className='flex flex-row-reverse gap-4'>
          {
            user ? <button className='md:flex btn btn-success font-bold btn-outline hidden' onClick={handleLogOut}>LogOut<HiOutlineLogout className='font-bold text-xl'/></button>
              : ''
          }
          {user ? <li>
            <NavLink

            >
              <img className='w-12 md:flex hidden h-12 rounded-full' title={user && user?.displayName} src={user && user?.photoURL} alt="Profile" />
            </NavLink>
          </li> : ''}
        </ul>
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <FaPlaneDeparture className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Aeroplane Toy
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/alltoys'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        All Toys
                      </Link>
                    </li>
                    {
                      user ?
                        <li>
                          <Link
                            to='/mytoys'
                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                          >
                            My Toys
                          </Link>
                        </li>
                        : ''
                    }
                    {
                      user ?
                        <li>
                          <Link
                            to='/addToy'
                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                          >
                            Add a Toy
                          </Link>
                        </li>
                        : ''
                    }
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blog
                      </Link>
                    </li>
                    {user && user.email ? <button className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400' onClick={handleLogOut}>LogOut</button>

                      : <li>
                        <Link
                          to='/login'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                        >
                          Login
                        </Link>
                      </li>}
                    {
                      user ? ''

                        : <li>
                          <Link
                            to='/register'
                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                          >
                            Register
                          </Link>
                        </li>}
                    {
                      user ?
                        <li>
                          <Link>
                            <img className='w-12 h-12 rounded-full' title={user && user?.displayName} src={user && user.photoURL} alt="Profile" />
                          </Link>
                        </li>
                        : ''
                    }

                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
