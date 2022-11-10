import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { myContxt } from '../contextApi/AuthContext';

const PrivetRouting = ({children}) => {
    const {user,loadding} = useContext(myContxt)
    const location = useLocation()
   
    if(loadding){
        return <h2 className='text-5xl'>Loadding ...</h2>
    }
    
    if(!user?.uid){
       return  <Navigate to = '/login' state={{from: location}} replace></Navigate>
    }
    
    return children
   
};

export default PrivetRouting;