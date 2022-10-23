import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthenticationContext } from '../Contexts/AuthContext';

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthenticationContext);
if(loading){
    return  <div>Loading.................</div>
}
   if(user&&user?.uid&&user?.email){
    return children;
   }
   return <Navigate to="/login" state={{from:location}} replace ></Navigate>
};

export default PrivateRoutes;