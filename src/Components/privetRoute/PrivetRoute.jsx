/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';
import { GridLoader } from 'react-spinners';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className='w-full h-screen flex justify-center items-center'>
            <GridLoader color="#be19db" />
        </div>
    }

    if (user) {
        return children;
    }



    return (
        <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    );
};

export default PrivetRoute;