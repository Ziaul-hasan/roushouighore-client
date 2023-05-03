/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if(loading){
        return (
            <>
                <div className='flex justify-center items-center h-[calc(100vh-60px)]'><h2 className='text-3xl font-normal'>Pr</h2><div className='w-6 h-6 border-4 md:w-10 md:h-10 md:border-8 border-dashed rounded-full border-blue-500 animate-spin'></div><h2 className='text-3xl font-normal'>cessing</h2></div>
            </>
        )
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;