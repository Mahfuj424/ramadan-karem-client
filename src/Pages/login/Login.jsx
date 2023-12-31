/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { loginUser, googleUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const pathName = location.state?.from?.pathname || '/'

    


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if ((email, password)) {
            loginUser(email, password)
                .then(data => {
                    console.log(data);
                })
        }
    }


    const handleGoogleUser = () => {
        googleUser()
            .then((result) => {
                navigate(pathName)
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Please Login</h1>

                    </div>
                    <div className="card  flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Are you new user? <Link className='btn-link' to='/register'>Please Register</Link></p>
                            <div>
                                <button className='btn btn-outline w-full hover:bg-blue-700' onClick={handleGoogleUser}><span><FcGoogle /></span>Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;